import onFinished from 'on-finished'
import { createServer, ServerResponse } from 'node:http'
import { NodeHTTPAdapter } from '../src/NodeHttpAdapter'
import { createServer as createHttpsServer } from 'node:https'
import { ServerResponseWrapper } from '../src/ServerResponseWrapper'
import { NodeHttpAdapterError } from '../src/errors/NodeHttpAdapterError'
import {
  AdapterEventBuilder,
  AdapterOptions
} from '@stone-js/core'
import {
  IncomingHttpEvent,
  OutgoingHttpResponse
} from '@stone-js/http-core'

vi.mock('node:http')
vi.mock('node:https')

vi.mock('on-finished', () => {
  return {
    default: vi.fn((res, cb) => cb())
  }
})

vi.mock('../src/ServerResponseWrapper', () => ({
  ServerResponseWrapper: {
    create: vi.fn()
  }
}))

describe('NodeHTTPAdapter', () => {
  let mockServer: any
  let adapterOptions: AdapterOptions<ServerResponse, IncomingHttpEvent, OutgoingHttpResponse>

  beforeEach(() => {
    adapterOptions = {
      hooks: {},
      blueprint: {
        get: vi.fn((key) => {
          if (key === 'stone.adapter.url') return 'http://localhost:8080'
          return {}
        })
      },
      handlerResolver: vi.fn(),
      logger: {
        error: vi.fn()
      },
      errorHandler: {
        render: vi.fn(),
        report: vi.fn()
      }
    } as any

    mockServer = {
      close: vi.fn((cb) => cb()),
      once: vi.fn().mockReturnThis(),
      listen: vi.fn((port, host, cb) => cb())
    }

    vi.mocked(createServer).mockReturnValue(mockServer)
    vi.mocked(createHttpsServer).mockReturnValue(mockServer)
  })

  it('should create an instance with correct https configuration', () => {
    const adapter = NodeHTTPAdapter.create(adapterOptions)
    expect(adapter).toBeInstanceOf(NodeHTTPAdapter)
  })

  it('should use HTTPS server when URL contains https', () => {
    vi.mocked(adapterOptions.blueprint.get).mockReturnValue('https://localhost:8443')
    const adapter = NodeHTTPAdapter.create(adapterOptions)
    expect(adapter).toBeInstanceOf(NodeHTTPAdapter)
  })

  it('should throw error when used outside Node.js context', async () => {
    const adapter = NodeHTTPAdapter.create(adapterOptions)

    global.window = {} as any // Simulate browser context

    await expect(adapter.run()).rejects.toThrow(NodeHttpAdapterError)
    expect(adapterOptions.blueprint.get).toHaveBeenCalledWith(
      'stone.adapter.url',
      'http://localhost:8080'
    )

    delete (global as any).window // Cleanup
  })

  it('should start the server and listen on the correct port', async () => {
    const adapter = NodeHTTPAdapter.create(adapterOptions)

    await expect(adapter.run()).resolves.toBe(mockServer)

    expect(mockServer.listen).toHaveBeenCalledWith(
      8080,
      'localhost',
      expect.any(Function)
    )
  })

  it('should call the appropriate event listener on request', async () => {
    const adapter = NodeHTTPAdapter.create(adapterOptions)
    const mockEvent = {} as any
    const mockResponse = {} as any

    IncomingHttpEvent.create = vi.fn()
    ServerResponseWrapper.create = vi.fn()
    AdapterEventBuilder.create = vi.fn((options) => options.resolver(mockResponse, {}))
    // @ts-expect-error
    adapter.sendEventThroughDestination = vi.fn()

    // @ts-expect-error
    await adapter.eventListener(mockEvent, mockResponse)

    expect(AdapterEventBuilder.create).toHaveBeenCalled()
    // @ts-expect-error
    expect(adapter.sendEventThroughDestination).toHaveBeenCalled()
    expect(ServerResponseWrapper.create).toHaveBeenCalledWith(
      mockResponse,
      expect.anything()
    )
  })

  it('should call onTerminate on finished', async () => {
    const adapter = NodeHTTPAdapter.create(adapterOptions)
    const context = { rawResponse: {} } as any
    const eventHandler = {} as unknown

    // @ts-expect-error
    await adapter.onTerminate(eventHandler, context)

    expect(AdapterEventBuilder.create).toHaveBeenCalled()
    expect(onFinished).toHaveBeenCalledWith({}, expect.any(Function))
  })

  it('should handle uncaught exceptions gracefully', () => {
    const adapter = NodeHTTPAdapter.create(adapterOptions)

    const mockError = new Error('Uncaught exception')
    const processExitSpy = vi.spyOn(process, 'exit').mockImplementation((() => {}) as any)

    // @ts-expect-error
    adapter.catchUncaughtExceptionListener()

    process.emit('uncaughtException', mockError)

    expect(adapterOptions.logger.error).toHaveBeenCalledWith(
      'Uncaught exception detected.',
      { error: mockError }
    )

    expect(mockServer.close).toHaveBeenCalled()
    expect(processExitSpy).toHaveBeenCalledWith(1)

    processExitSpy.mockRestore() // Cleanup
  })

  it('should log unhandled promise rejections', () => {
    const adapter = NodeHTTPAdapter.create(adapterOptions)

    // @ts-expect-error
    adapter.catchUncaughtExceptionListener()

    const mockReason = 'Rejection reason'
    const mockPromise = Promise.resolve()

    process.emit('unhandledRejection', mockReason, mockPromise)

    expect(adapterOptions.logger.error).toHaveBeenCalledWith(
      `Unhandled Rejection at: ${String(mockPromise)}, reason: ${String(mockReason)}`
    )
  })
})
