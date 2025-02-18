import bytes from 'bytes'
import typeIs from 'type-is'
import rawBody from 'raw-body'
import bodyParser from 'co-body'
import { IncomingMessage } from 'node:http'
import { NextPipe } from '@stone-js/pipeline'
import { classMiddleware, IBlueprint } from '@stone-js/core'
import { isMultipart, getCharset } from '@stone-js/http-core'
import { NodeHttpAdapterError } from '../errors/NodeHttpAdapterError'
import { NodeHttpAdapterContext, NodeHttpAdapterResponseBuilder } from '../declarations'

/**
 * Represents the configuration options for parsing the request body.
 */
interface HttpBodyOptions {
  limit: string
  defaultType: string
  defaultCharset: string
}

/**
 * Class representing a BodyEventMiddleware.
 *
 * This middleware handles platform-specific messages and transforms them into Stone.js IncomingEvent objects.
 *
 * @author Mr. Stone
 */
export class BodyEventMiddleware {
  /**
   * The blueprint for resolving configuration and dependencies.
   */
  private readonly blueprint: IBlueprint

  /**
   * Create a BodyEventMiddleware.
   *
   * @param {blueprint} options - Options for creating the BodyEventMiddleware.
   */
  constructor ({ blueprint }: { blueprint: IBlueprint }) {
    this.blueprint = blueprint
  }

  /**
   * Handles the incoming event, processes it, and invokes the next middleware in the pipeline.
   *
   * @param context - The adapter context containing the raw event, execution context, and other data.
   * @param next - The next middleware to be invoked in the pipeline.
   * @returns A promise that resolves to the destination type after processing.
   *
   * @throws {NodeHttpAdapterError} If required components such as the rawEvent or IncomingEventBuilder are not provided.
   */
  async handle (context: NodeHttpAdapterContext, next: NextPipe<NodeHttpAdapterContext, NodeHttpAdapterResponseBuilder>): Promise<NodeHttpAdapterResponseBuilder> {
    if (context.rawEvent === undefined || context.incomingEventBuilder?.add === undefined) {
      throw new NodeHttpAdapterError('The context is missing required components.')
    }

    if (!isMultipart(context.rawEvent)) {
      const body = await this.getBody(context.rawEvent)

      context
        .incomingEventBuilder
        .add('body', body)
        .add('metadata', body)
        // In fullstack forms, the method is spoofed and sent as a hidden field
        .add('method', (body as any).$method$ ?? context.rawEvent.method)
    }

    return await next(context)
  }

  /**
   * Extract and parse the body from the message.
   *
   * @param message - The incoming HTTP message.
   * @returns A Promise resolving to the parsed body.
   * @throws {NodeHttpAdapterError} If the body parsing fails or is invalid.
   */
  private async getBody (message: IncomingMessage): Promise<unknown> {
    if (!typeIs.hasBody(message)) {
      return {}
    }

    const defaultOptions = { limit: '100kb', defaultType: 'text/plain', defaultCharset: 'utf-8' }
    const { defaultType, defaultCharset, limit: rawLimit } = this.blueprint.get<HttpBodyOptions>('stone.http.body', defaultOptions)
    const limit = bytes.parse(rawLimit) ?? 100000
    const length = message.headers['content-length']
    const encoding = getCharset(message, defaultCharset)

    try {
      switch (typeIs(message, ['urlencoded', 'json', 'text', 'bin']) ?? defaultType) {
        case 'bin':
          return await rawBody(message, { length, limit })
        case 'json':
          return await bodyParser.json(message, { limit, encoding })
        case 'text':
          return await bodyParser.text(message, { limit, encoding })
        case 'urlencoded':
          return await bodyParser.form(message, { limit, encoding })
        default:
          return {}
      }
    } catch (error: any) {
      throw new NodeHttpAdapterError('The context is missing required components.', { cause: error })
    }
  }
}

/**
 * Meta Middleware for processing the request body.
 */
export const MetaBodyEventMiddleware = classMiddleware(BodyEventMiddleware)
