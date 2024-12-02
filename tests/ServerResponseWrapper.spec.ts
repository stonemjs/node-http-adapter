import { ServerResponse } from 'node:http'
import { RawHttpResponseOptions } from '../src/declarations'
import { ServerResponseWrapper } from '../src/ServerResponseWrapper'

describe('ServerResponseWrapper', () => {
  let mockResponse: ServerResponse

  beforeEach(() => {
    // Mock the ServerResponse object
    mockResponse = {
      statusCode: 200,
      statusMessage: '',
      setHeaders: vi.fn(),
      end: vi.fn()
    } as unknown as ServerResponse
  })

  it('should create a new instance with default options', () => {
    const wrapper = ServerResponseWrapper.create(mockResponse)

    expect(wrapper).toBeInstanceOf(ServerResponseWrapper)
    expect(wrapper.response).toBe(mockResponse)
    expect(wrapper.options).toEqual({})
  })

  it('should set status code and message when options are provided', async () => {
    const options: Partial<RawHttpResponseOptions> = {
      statusCode: 404,
      statusMessage: 'Not Found',
      body: 'Hello, world!'
    }
    const wrapper = ServerResponseWrapper.create(mockResponse, options)

    const exitStatus = await wrapper.respond()

    expect(exitStatus).toBe(mockResponse)
    expect(mockResponse.statusCode).toBe(404)
    expect(mockResponse.statusMessage).toBe('Not Found')
  })

  it('should set headers when options are provided', async () => {
    const headers = new Map<string, string>([
      ['Content-Type', 'application/json']
    ])
    const options: Partial<RawHttpResponseOptions> = { headers }
    const wrapper = ServerResponseWrapper.create(mockResponse, options)

    await wrapper.respond()

    expect(mockResponse.setHeaders).toHaveBeenCalledWith(headers)
  })

  it('should stream file when streamFile option is provided', async () => {
    const streamFile = vi.fn().mockResolvedValue(undefined)
    const options: Partial<RawHttpResponseOptions> = { streamFile }
    const wrapper = ServerResponseWrapper.create(mockResponse, options)

    await wrapper.respond()

    expect(streamFile).toHaveBeenCalled()
    expect(mockResponse.end).not.toHaveBeenCalled()
  })

  it('should send body when body option is provided', async () => {
    const options: Partial<RawHttpResponseOptions> = {
      body: 'Hello, world!',
      charset: 'utf-8'
    }
    const wrapper = ServerResponseWrapper.create(mockResponse, options)

    await wrapper.respond()

    expect(mockResponse.end).toHaveBeenCalledWith('Hello, world!', 'utf-8')
  })

  it('should not modify status code, headers, or body if options are not provided', async () => {
    const wrapper = ServerResponseWrapper.create(mockResponse)

    await wrapper.respond()

    expect(mockResponse.statusCode).toBe(200) // Default value
    expect(mockResponse.setHeaders).not.toHaveBeenCalled()
    expect(mockResponse.end).not.toHaveBeenCalled()
  })

  it('should handle missing options gracefully', async () => {
    const options: Partial<RawHttpResponseOptions> = {
      streamFile: undefined,
      headers: undefined,
      body: undefined,
      statusCode: 200
    }
    const wrapper = ServerResponseWrapper.create(mockResponse, options)

    await wrapper.respond()

    expect(mockResponse.statusCode).toBe(200)
    expect(mockResponse.setHeaders).not.toHaveBeenCalled()
    expect(mockResponse.end).not.toHaveBeenCalled()
  })
})
