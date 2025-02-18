import connect from 'connect'
import { createServer as createHttpsServer } from 'node:https'
import { ServerResponseWrapper } from './ServerResponseWrapper'
import { NodeHttpAdapterError } from './errors/NodeHttpAdapterError'
import { createServer, IncomingMessage, ServerResponse } from 'node:http'
import {
  Adapter,
  AdapterOptions,
  AdapterEventBuilder,
  LifecycleAdapterEventHandler
} from '@stone-js/core'
import {
  IncomingHttpEvent,
  OutgoingHttpResponse,
  IncomingHttpEventOptions
} from '@stone-js/http-core'
import {
  NodeHttpServer,
  ServerMiddleware,
  NodeHttpServerOptions,
  NodeHttpAdapterContext,
  NodeHttpsServerOptions,
  RawHttpResponseOptions
} from './declarations'

/**
 * Node.js HTTP Adapter for the Stone.js framework.
 *
 * The `NodeHTTPAdapter` is responsible for integrating a Node.js HTTP/HTTPS server
 * with the Stone.js framework, converting incoming HTTP requests into `IncomingHttpEvent`
 * instances, and processing outgoing responses into the `OutgoingHttpResponse` format.
 *
 * It provides lifecycle hooks for initialization, termination, and error handling,
 * ensuring seamless integration with Stone.js.
 *
 * @template RawEvent - The raw HTTP event type (e.g., `IncomingMessage`).
 * @template RawResponse - The raw HTTP response type (e.g., `ServerResponse`).
 * @template Server - The server instance type (e.g., `NodeHttpServer`).
 * @template IncomingEvent - The Stone.js incoming event type (e.g., `IncomingHttpEvent`).
 * @template IncomingEventOptions - Options for creating an incoming event.
 * @template OutgoingResponse - The outgoing response type (e.g., `OutgoingHttpResponse`).
 * @template Context - The adapter context type (e.g., `NodeHttpAdapterContext`).
 *
 * @extends Adapter
 */
export class NodeHttpAdapter extends Adapter<
IncomingMessage,
ServerResponse,
NodeHttpServer,
IncomingHttpEvent,
IncomingHttpEventOptions,
OutgoingHttpResponse,
NodeHttpAdapterContext
> {
  /**
   * The base URL for the server, derived from the Stone.js blueprint configuration.
   */
  protected readonly url: URL

  /**
   * The HTTP/HTTPS server instance created by the adapter.
   */
  protected readonly server: NodeHttpServer

  /**
   * Creates a new `NodeHTTPAdapter` instance.
   *
   * @param options - Configuration options for the adapter, including lifecycle event handlers,
   *                  logger, and dependency injection via the blueprint.
   * @returns A new instance of `NodeHTTPAdapter`.
   *
   * @example
   * ```typescript
   * const adapter = NodeHTTPAdapter.create({
   *   blueprint,
   *   handlerResolver,
   *   logger,
   * });
   * await adapter.run();
   * ```
   */
  static create (options: AdapterOptions<IncomingHttpEvent, OutgoingHttpResponse>): NodeHttpAdapter {
    return new this(options)
  }

  /**
   * Constructs a `NodeHTTPAdapter` instance.
   *
   * This constructor is protected and is intended to be used via the static `create` method.
   *
   * @param options - Configuration options for the adapter.
   * @protected
   */
  protected constructor (options: AdapterOptions<IncomingHttpEvent, OutgoingHttpResponse>) {
    super(options)
    this.url = new URL(this.blueprint.get<string>('stone.adapter.url', 'http://localhost:8080'))
    this.server = this.createServer()
  }

  /**
   * Starts the HTTP/HTTPS server and listens for incoming requests.
   *
   * @returns A promise that resolves to an ExecutionResultType (usually `NodeHttpServer`) when the server starts successfully.
   *
   * @throws {NodeHttpAdapterError} If the server encounters an error during initialization.
   *
   * @example
   * ```typescript
   * const adapter = NodeHTTPAdapter.create(options);
   * await adapter.run();
   * console.log('Server is running');
   * ```
   */
  public async run<ExecutionResultType = NodeHttpServer>(): Promise<ExecutionResultType> {
    await this.onStart()

    return await new Promise((resolve, reject) => {
      this.server
        .once('error', (error) => reject(error))
        .listen(Number(this.url.port), this.url.hostname, () => resolve(this.server as ExecutionResultType))
    })
  }

  /**
   * Lifecycle hook for adapter initialization.
   *
   * This method is called during the adapter's startup process and performs tasks
   * such as setting up exception listeners and verifying the runtime environment.
   *
   * @throws {NodeHttpAdapterError} If the adapter is used outside a Node.js context.
   */
  protected async onStart (): Promise<void> {
    if (typeof window === 'object') {
      throw new NodeHttpAdapterError(
        'This `NodeHTTPAdapter` must be used only in Node.js context.'
      )
    }

    this.setupShutdownHook()
    this.setupGlobalErrorHandlers()

    await super.onStart()
  }

  /**
   * Handles incoming HTTP requests and sends them through the adapter's event pipeline.
   *
   * @param rawEvent - The raw HTTP request object.
   * @param rawResponse - The raw HTTP response object.
   * @returns A promise resolving to a ServerResponse (e.g., `ServerResponse`).
   *
   * @protected
   */
  protected async eventListener (rawEvent: IncomingMessage, rawResponse: ServerResponse): Promise<ServerResponse> {
    const eventHandler = this.handlerResolver(this.blueprint) as LifecycleAdapterEventHandler<IncomingHttpEvent, OutgoingHttpResponse>

    const incomingEventBuilder = AdapterEventBuilder.create<IncomingHttpEventOptions, IncomingHttpEvent>({
      resolver: (options) => IncomingHttpEvent.create(options)
    })

    const rawResponseBuilder = AdapterEventBuilder.create<RawHttpResponseOptions, ServerResponseWrapper>({
      resolver: (options) => ServerResponseWrapper.create(rawResponse, options)
    })

    const context: NodeHttpAdapterContext = {
      rawEvent,
      rawResponse,
      rawResponseBuilder,
      incomingEventBuilder,
      executionContext: this.server
    }

    rawEvent
      .on('error', (error) => {
        rawResponse.statusCode = 400
        this.logger.error('Error in incoming event.', { error })
      })

    rawResponse
      .on('error', (error) => {
        this.logger.error('Error in outgoing response.', { error })
      })

    await this.onPrepare(eventHandler)

    return await this.sendEventThroughDestination(eventHandler, context)
  }

  /**
   * Creates the HTTP or HTTPS server based on the adapter's configuration.
   *
   * @returns A `NodeHttpServer` instance.
   *
   * @protected
   */
  protected createServer (): NodeHttpServer {
    // Create a connect app to handle server middleware
    const app = connect()

    this
      .blueprint
      .get<ServerMiddleware[]>('stone.adapter.serverMiddleware', [])
      .forEach((middleware) => app.use(middleware))

    /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
    app.use(async (message, response) => await this.eventListener(message, response))

    if (this.url.protocol.includes('https')) {
      const options = this.blueprint.get<NodeHttpsServerOptions>('stone.adapter.server', {})
      return createHttpsServer(options, app)
    } else {
      const options = this.blueprint.get<NodeHttpServerOptions>('stone.adapter.server', {})
      return createServer(options, app)
    }
  }

  /**
   * Sets up global error handlers for uncaught exceptions and unhandled rejections.
   * Ensures critical errors are logged and the process exits safely.
   *
   * @protected
   */
  protected setupGlobalErrorHandlers (): void {
    process
      .on('uncaughtException', (error) => {
        this.logger.error('Uncaught exception detected. Shutting down...', { error })

        this.server.close(() => process.exit(1))
        setTimeout(() => process.abort(), 1000).unref()
      })
      .on('unhandledRejection', (reason, promise) => {
        this.logger.error('Unhandled promise rejection detected.', {
          promise: String(promise),
          reason: String(reason)
        })
      })
  }

  /**
   * Sets up a shutdown listener to gracefully stop the server on SIGINT.
   *
   * @protected
   */
  protected setupShutdownHook (): void {
    /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
    process.on('SIGINT', async () => {
      this.logger.info('Received SIGINT. Initiating graceful shutdown...')
      await this.onStop()
      this.server.close(() => process.exit(0))
    })
  }
}
