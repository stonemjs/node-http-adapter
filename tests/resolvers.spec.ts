import accepts from 'accepts'
import mime from 'mime/lite'
import { Mock } from 'vitest'
import { Config } from '@stone-js/config'
import { ErrorHandler, Kernel } from '@stone-js/core'
import { NodeHTTPAdapter } from '../src/NodeHttpAdapter'
import { NodeHttpAdapterError } from '../src/errors/NodeHttpAdapterError'
import { nodeHttpErrorHandlerResolver, nodeHttpKernelResolver, nodeHttpAdapterResolver } from '../src/resolvers'

const mockBlueprint = Config.create()

// Mock dependencies
vi.mock('mime/lite')

vi.mock('accepts', () => {
  return {
    default: vi.fn(() => ({
      type: vi.fn(() => 'txt')
    }))
  }
})

describe('NodeHttpAdapter Resolvers', () => {
  describe('defaultHandlerResolver', () => {
    it('should create an ErrorHandler and return `HTTP_INTERNAL_SERVER_ERROR` when there is no context', () => {
      const handler = nodeHttpErrorHandlerResolver(mockBlueprint)
      expect(handler).toBeInstanceOf(ErrorHandler)
      expect(handler.report).toBeInstanceOf(Function)
      expect(() => handler.render(new NodeHttpAdapterError('simple error'))).toThrow(NodeHttpAdapterError)
    })

    it('should create an ErrorHandler and populate server response with `httpError` when there is a context', () => {
      const rawResponse = { statusCode: 0, statusMessage: '', setHeaders: vi.fn(), setHeader: vi.fn(), end: vi.fn() }
      const httpError = { statusCode: 404, statusMessage: 'Not Found', headers: { 'Content-Type': 'application/json' }, body: 'Not Found' } as unknown as Error
      const handler = nodeHttpErrorHandlerResolver(mockBlueprint)
      expect(handler.render(new NodeHttpAdapterError('simple error', { cause: httpError, metadata: { rawResponse, rawEvent: {} } }))).toBe(rawResponse)
      expect(rawResponse.statusCode).toBe(404)
      expect(rawResponse.statusMessage).toBe('Not Found')
      expect(rawResponse.setHeaders).toHaveBeenCalledWith({ 'Content-Type': 'application/json' })
      expect(rawResponse.end).toHaveBeenCalledWith('Not Found')
    })

    it('should create an ErrorHandler and populate server response with `httpError` and json body when there is a context', () => {
      const rawResponse = { statusCode: 0, statusMessage: '', setHeaders: vi.fn(), setHeader: vi.fn(), end: vi.fn() }
      const httpError = { statusCode: 404, statusMessage: 'Not Found', headers: { 'Content-Type': 'application/json' }, body: { foo: 'bar' } } as unknown as Error
      const handler = nodeHttpErrorHandlerResolver(mockBlueprint)
      expect(handler.render(new NodeHttpAdapterError('simple error', { cause: httpError, metadata: { rawResponse, rawEvent: {} } }))).toBe(rawResponse)
      expect(rawResponse.statusCode).toBe(404)
      expect(rawResponse.statusMessage).toBe('Not Found')
      expect(rawResponse.setHeaders).toHaveBeenCalledWith({ 'Content-Type': 'application/json' })
      expect(rawResponse.end).toHaveBeenCalledWith('{"foo":"bar"}')
    })

    it('should create an ErrorHandler and populate server response with `httpError` with empty body when there is a context', () => {
      const rawResponse = { statusCode: 0, statusMessage: '', setHeaders: vi.fn(), setHeader: vi.fn(), end: vi.fn() }
      const httpError = { statusCode: 404, statusMessage: 'Not Found', headers: { 'Content-Type': 'application/json' } } as unknown as Error
      const handler = nodeHttpErrorHandlerResolver(mockBlueprint)
      expect(handler.render(new NodeHttpAdapterError('simple error', { cause: httpError, metadata: { rawResponse, rawEvent: {} } }))).toEqual(rawResponse)
      expect(rawResponse.statusCode).toBe(404)
      expect(rawResponse.statusMessage).toBe('Not Found')
      expect(rawResponse.setHeaders).toHaveBeenCalledWith({ 'Content-Type': 'application/json' })
      expect(rawResponse.end).toHaveBeenCalledWith()
    })

    it('should create an ErrorHandler and populate server response with default and `rawEvent` values when there is a context', () => {
      (mime.getType as Mock).mockReturnValueOnce('application/json')
      const rawResponse = { statusCode: 0, statusMessage: '', setHeaders: vi.fn(), setHeader: vi.fn(), end: vi.fn() }
      const handler = nodeHttpErrorHandlerResolver(mockBlueprint)
      expect(handler.render(new NodeHttpAdapterError('simple error', { metadata: { rawResponse, rawEvent: {} } }))).toBe(rawResponse)
      expect(rawResponse.statusCode).toBe(500)
      expect(rawResponse.statusMessage).toBe('Internal Server Error')
      expect(rawResponse.setHeader).toHaveBeenCalledWith('Content-Type', 'application/json')
      expect(rawResponse.end).toHaveBeenCalledWith()
    })

    it('should create an ErrorHandler and populate server response with default and `rawEvent` values when there is a context on invalid mimetype', () => {
      (accepts as Mock).mockReturnValueOnce({ type: vi.fn(() => false) });
      (mime.getType as Mock).mockReturnValueOnce(undefined)
      const rawResponse = { statusCode: 0, statusMessage: '', setHeaders: vi.fn(), setHeader: vi.fn(), end: vi.fn() }
      const handler = nodeHttpErrorHandlerResolver(mockBlueprint)
      expect(handler.render(new NodeHttpAdapterError('simple error', { metadata: { rawResponse, rawEvent: {} } }))).toBe(rawResponse)
      expect(rawResponse.statusCode).toBe(500)
      expect(rawResponse.statusMessage).toBe('Internal Server Error')
      expect(rawResponse.setHeader).toHaveBeenCalledWith('Content-Type', 'text/plain')
      expect(rawResponse.end).toHaveBeenCalledWith()
    })
  })

  describe('nodeHttpKernelResolver', () => {
    it('should create a Kernel instance with the correct configuration', () => {
      const kernel = nodeHttpKernelResolver(mockBlueprint)
      expect(kernel).toBeInstanceOf(Kernel)
    })
  })

  describe('nodeHttpAdapterResolver', () => {
    it('should create a Kernel instance with the correct configuration', () => {
      const adapter = nodeHttpAdapterResolver(mockBlueprint)
      expect(adapter).toBeInstanceOf(NodeHTTPAdapter)
    })
  })
})
