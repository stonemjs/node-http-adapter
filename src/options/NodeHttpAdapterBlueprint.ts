import { NODE_HTTP_PLATFORM } from '../constants'
import { nodeHttpAdapterResolver } from '../resolvers'
import { NodeHttpErrorHandler } from '../NodeHttpErrorHandler'
import { NodeServerOptions, ServerMiddleware } from '../declarations'
import { AdapterConfig, AppConfig, StoneBlueprint } from '@stone-js/core'
import { metaAdapterConfigMiddlewares } from '../middleware/configMiddleware'
import { MetaIncomingEventMiddleware } from '../middleware/IncomingEventMiddleware'
import { MetaServerResponseMiddleware } from '../middleware/ServerResponseMiddleware'
import { HttpConfig, IncomingHttpEvent, OutgoingHttpResponse, httpCoreBlueprint } from '@stone-js/http-core'

/**
 * NodeHttpAdapterAdapterConfig Interface.
 *
 * This interface defines the configuration options for the Node HTTP adapter
 * within the Stone.js framework. It includes settings such as the adapter's alias,
 * resolver, middleware, hooks, and server configurations.
 */
export interface NodeHttpAdapterAdapterConfig extends AdapterConfig {
  /**
   * The base URL used by the node http to run the application.
   */
  url: string

  /**
   * Additional server configurations for the Node HTTP server.
   */
  server: NodeServerOptions

  /**
   * The platform middleware used for processing platform node HTTP requests and responses.
   * This middleware is executed before the adapter middleware.
   * This middleware is lower-level and should be used for platform-specific processing.
   * You can connect or express like middleware here to process request just before the Stone adapter middleware.
   */
  serverMiddleware: ServerMiddleware[]
}

/**
 * Represents the NodeHttpAdapter configuration options for the application.
 */
export interface NodeHttpAdapterConfig extends Partial<AppConfig<IncomingHttpEvent, OutgoingHttpResponse>> {
  http: Partial<HttpConfig>
  adapters: NodeHttpAdapterAdapterConfig[]
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
  stone: NodeHttpAdapterConfig
}

/**
 * Node HTTP adapter options.
 *
 * This object defines the configuration for the Node HTTP adapter.
 */
export const nodeHttpAdapterBlueprint: NodeHttpAdapterBlueprint = {
  stone: {
    ...httpCoreBlueprint.stone,
    builder: {
      middleware: metaAdapterConfigMiddlewares
    },
    adapters: [
      {
        hooks: {},
        server: {},
        current: false,
        default: false,
        serverMiddleware: [],
        url: 'http://localhost:8080',
        platform: NODE_HTTP_PLATFORM,
        resolver: nodeHttpAdapterResolver,
        middleware: [
          MetaIncomingEventMiddleware,
          MetaServerResponseMiddleware
        ],
        errorHandlers: {
          default: { module: NodeHttpErrorHandler, isClass: true }
        }
      }
    ]
  }
}
