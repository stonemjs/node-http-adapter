import { NODE_HTTP_PLATFORM } from '../constants'
import { NodeServerOptions } from '../declarations'
import { IncomingHttpEvent, OutgoingHttpResponse } from '@stone-js/http-core'
import { IncomingEventMiddleware } from '../middleware/IncomingEventMiddleware'
import { ServerResponseMiddleware } from '../middleware/ServerResponseMiddleware'
import { nodeHttpAdapterResolver, nodeHttpErrorHandlerResolver, nodeHttpKernelResolver } from '../resolvers'
import { AdapterConfig, AdapterHandlerMiddleware, ErrorHandlerConfig, KernelConfig, KernelHandlerMiddleware, StoneBlueprint } from '@stone-js/core'

/**
 * NodeHttpAdapterConfig Interface.
 *
 * This interface defines the configuration options for the Node HTTP adapter
 * within the Stone.js framework. It includes settings such as the adapter's alias,
 * resolver, middleware, hooks, and server configurations.
 */
export interface NodeHttpAdapterConfig extends AdapterConfig {
  /**
   * The base URL used by the node http to run the application.
   */
  url: string

  /**
   * Additional server configurations for the Node HTTP server.
   */
  server: NodeServerOptions
}

/**
 * Stone blueprint.
 *
 * This interface defines the main configuration options for the Stone.js framework.
 * It includes settings for the builder, adapters, and the main application,
 * while allowing additional custom options to be added.
 */
export interface NodeHttpAdapterBlueprint extends StoneBlueprint<IncomingHttpEvent, OutgoingHttpResponse> {
  /**
   * Application-level settings, including environment, middleware, logging, and service registration.
   */
  stone: {
    errorHandler: ErrorHandlerConfig
    adapters: NodeHttpAdapterConfig[]
    kernel: KernelConfig<IncomingHttpEvent, OutgoingHttpResponse>
  }
}

/**
 * Node HTTP adapter options.
 *
 * This object defines the configuration for the Node HTTP adapter.
 */
export const nodeHttpAdapterBlueprint: NodeHttpAdapterBlueprint = {
  stone: {
    adapters: [
      {
        alias: NODE_HTTP_PLATFORM,
        resolver: nodeHttpAdapterResolver,
        middleware: [
          { priority: 0, pipe: IncomingEventMiddleware },
          { priority: 100, pipe: AdapterHandlerMiddleware },
          { priority: 200, pipe: ServerResponseMiddleware }
        ],
        hooks: {},
        current: false,
        default: false,
        preferred: false,
        url: 'http://localhost:8080',
        server: {}
      }
    ],
    kernel: {
      resolver: nodeHttpKernelResolver,
      middleware: [
        { priority: 100, pipe: KernelHandlerMiddleware }
      ]
    },
    errorHandler: {
      levels: {} as any,
      dontReport: new Set([]),
      withoutDuplicates: true,
      resolver: nodeHttpErrorHandlerResolver
    }
  }
}
