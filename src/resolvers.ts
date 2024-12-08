import mime from 'mime/lite'
import accepts from 'accepts'
import { ServerResponse } from 'node:http'
import { NodeHTTPAdapter } from './NodeHttpAdapter'
import { HTTP_INTERNAL_SERVER_ERROR } from '@stone-js/http-core'
import { NodeHttpAdapterError } from './errors/NodeHttpAdapterError'
import { RawHttpResponseOptions, NodeHttpAdapterContext } from './declarations'
import {
  AdapterHooks,
  AdapterResolver,
  defaultKernelResolver,
  defaultLoggerResolver,
  ErrorHandler,
  ErrorHandlerResolver,
  IBlueprint,
  LoggerResolver
} from '@stone-js/core'

/**
 * Resolver function for rendering responses during HTTP adapter errors.
 *
 * This function handles HTTP errors by setting appropriate status codes, headers, and response bodies.
 * If no specific error information is provided, it defaults to a 500 Internal Server Error response.
 *
 * @param error - The `NodeHttpAdapterError` object containing error metadata and context.
 * @returns The Node Raw HTTP Response.
 * @throws `NodeHttpAdapterError` when the error context is invalid.
 */
const nodeHttpErrorHandlerRenderResponseResolver = (error: NodeHttpAdapterError): ServerResponse => {
  const context = error.metadata as NodeHttpAdapterContext
  const rawResponse = context?.rawResponse

  if (context?.rawEvent === undefined || rawResponse === undefined) {
    throw new NodeHttpAdapterError('Invalid error context provided for rendering response.')
  }

  const httpError = error.cause as RawHttpResponseOptions | undefined

  if (httpError?.statusCode !== undefined) {
    rawResponse.statusCode = httpError.statusCode
    rawResponse.statusMessage = httpError.statusMessage
  } else {
    rawResponse.statusCode = HTTP_INTERNAL_SERVER_ERROR
    rawResponse.statusMessage = 'Internal Server Error'
  }

  if (httpError?.headers !== undefined) {
    rawResponse.setHeaders(httpError.headers)
  } else {
    const type = accepts(context.rawEvent).type(['json', 'html']) as string | false
    const contentType = mime.getType(type !== false ? type : 'txt') ?? 'text/plain'
    rawResponse.setHeader('Content-Type', contentType)
  }

  if (httpError?.body !== undefined) {
    rawResponse.end(typeof httpError.body === 'string' ? httpError.body : JSON.stringify(httpError.body))
  } else {
    rawResponse.end()
  }

  return rawResponse
}

/**
 * Creates a logger resolver for the HTTP adapter.
 *
 * This resolver retrieves the logger configuration from the blueprint or defaults to the core logger resolver.
 *
 * @param blueprint - The application blueprint for dependency resolution.
 * @returns A `LoggerResolver` instance.
 */
const loggerResolver = (blueprint: IBlueprint): LoggerResolver => {
  return blueprint.get('stone.logger.resolver', defaultLoggerResolver)
}

/**
 * Resolver function for the HTTP adapter error handler.
 *
 * This function creates an error handler for the HTTP adapter, configuring logging and response rendering.
 *
 * @param blueprint - The application blueprint for dependency resolution.
 * @returns An `ErrorHandler` instance for handling HTTP errors.
 */
export const nodeHttpErrorHandlerResolver: ErrorHandlerResolver<ServerResponse> = (
  blueprint: IBlueprint
): ErrorHandler<ServerResponse> => {
  return ErrorHandler.create<ServerResponse>({
    blueprint,
    logger: loggerResolver(blueprint)(blueprint),
    renderResponseResolver: nodeHttpErrorHandlerRenderResponseResolver
  })
}

/**
 * Resolver function for the HTTP adapter.
 *
 * This function creates a `NodeHTTPAdapter` instance, which acts as the bridge between the HTTP server and the Stone.js framework.
 *
 * @param blueprint - The application blueprint for dependency resolution.
 * @returns An `AdapterResolver` instance for managing HTTP interactions.
 */
export const nodeHttpAdapterResolver: AdapterResolver = (blueprint: IBlueprint) => {
  const hooks = blueprint.get<AdapterHooks>('stone.adapter.hooks', {})
  const handlerResolver = blueprint.get('stone.kernel.resolver', defaultKernelResolver)
  const errorHandlerResolver = blueprint.get('stone.adapter.errorHandler.resolver', nodeHttpErrorHandlerResolver)

  return NodeHTTPAdapter.create({
    hooks,
    blueprint,
    handlerResolver,
    logger: loggerResolver(blueprint)(blueprint),
    errorHandler: errorHandlerResolver(blueprint)
  })
}
