import mime from 'mime/lite'
import accepts from 'accepts'
import statuses from 'statuses'
import { NodeHttpServer } from './declarations'
import { IncomingMessage, ServerResponse } from 'node:http'
import { HTTP_INTERNAL_SERVER_ERROR } from '@stone-js/http-core'
import { IntegrationError, AdapterErrorContext, IAdapterErrorHandler, ILogger } from '@stone-js/core'

/**
 * NodeHttpErrorHandler options.
 */
export interface NodeHttpErrorHandlerOptions {
  logger: ILogger
}

/**
 * Class representing an NodeHttpErrorHandler.
 */
export class NodeHttpErrorHandler implements IAdapterErrorHandler<IncomingMessage, ServerResponse, NodeHttpServer> {
  private readonly logger: ILogger

  /**
   * Create an NodeHttpErrorHandler.
   *
   * @param options - NodeHttpErrorHandler options.
   */
  constructor ({ logger }: NodeHttpErrorHandlerOptions) {
    if (logger === undefined) {
      throw new IntegrationError('Logger is required to create an NodeHttpErrorHandler instance.')
    }

    this.logger = logger
  }

  /**
   * Handle an error.
   *
   * @param error - The error to handle.
   * @param context - The context of the adapter.
   * @returns The raw response.
   */
  public async handle (error: Error, context: AdapterErrorContext<IncomingMessage, ServerResponse, NodeHttpServer>): Promise<ServerResponse> {
    const type = accepts(context.rawEvent).type(['json', 'html']) as string | false
    const contentType = mime.getType(type !== false ? type : 'txt') ?? context.rawEvent.headers['content-type'] ?? 'text/plain'
    const headers = new Headers({ 'Content-Type': contentType })

    context
      .rawResponseBuilder
      .add('headers', headers)
      .add('statusCode', HTTP_INTERNAL_SERVER_ERROR)
      .add('statusMessage', statuses.message[HTTP_INTERNAL_SERVER_ERROR])

    this.logger.error(error.message, { error })

    return await context.rawResponseBuilder.build().respond()
  }
}
