import { File } from '@stone-js/filesystem'
import { NODE_HTTP_PLATFORM } from '../constants'
import { MetaPipe, NextPipe } from '@stone-js/pipeline'
import { ClassType, ConfigContext, IBlueprint } from '@stone-js/core'
import { BinaryFileResponse, OutgoingHttpResponse, OutgoingHttpResponseOptions } from '@stone-js/http-core'

/**
 * Middleware to dynamically set response resolver for adapter.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next pipeline function to continue processing.
 * @returns The updated blueprint or a promise resolving to it.
 *
 * @example
 * ```typescript
 * SetResponseResolverMiddleware(context, next)
 * ```
 */
export const SetResponseResolverMiddleware = async (
  context: ConfigContext<IBlueprint, ClassType>,
  next: NextPipe<ConfigContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  if (context.blueprint.get<string>('stone.adapter.platform') === NODE_HTTP_PLATFORM) {
    context.blueprint.set(
      'stone.kernel.responseResolver',
      (options: OutgoingHttpResponseOptions) => {
        return options.content instanceof File
          ? BinaryFileResponse.file({ ...options, content: undefined, file: options.content })
          : OutgoingHttpResponse.create(options)
      }
    )
  }

  return await next(context)
}

/**
 * Configuration for adapter processing middleware.
 *
 * This array defines a list of middleware pipes, each with a `pipe` function and a `priority`.
 * These pipes are executed in the order of their priority values, with lower values running first.
 */
export const metaAdapterConfigMiddlewares: Array<MetaPipe<ConfigContext<IBlueprint, ClassType>, IBlueprint>> = [
  { module: SetResponseResolverMiddleware, priority: 6 }
]
