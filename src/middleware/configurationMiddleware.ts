import { NextPipe } from '@stone-js/pipeline'
import { NODE_HTTP_PLATFORM } from '../constants'
import { ConfigContext, IBlueprint } from '@stone-js/core'
import { nodeHttpErrorHandlerResolver } from '../resolvers'

/**
 * Middleware to set Node HTTP specific configuration in the blueprint.
 *
 * This middleware checks the current platform from the blueprint. If the platform
 * is Node HTTP, it sets the error handler resolver to `nodeHttpErrorHandlerResolver`.
 *
 * @param {ConfigContext} context - The configuration context containing modules and blueprint.
 * @param {NextPipe<ConfigContext, IBlueprint>} next - The next middleware function in the pipeline.
 * @returns {IBlueprint | Promise<IBlueprint>} - The modified blueprint or a promise that resolves to the modified blueprint.
 */
export const SetNodeHttpAdapterConfigMiddleware = ({ modules, blueprint }: ConfigContext, next: NextPipe<ConfigContext, IBlueprint>): IBlueprint | Promise<IBlueprint> => {
  const currentPlatform = blueprint.get<string>('stone.adapter.platform')

  if (currentPlatform === NODE_HTTP_PLATFORM) {
    blueprint.set('stone.errorHandler.resolver', nodeHttpErrorHandlerResolver)
  }

  return next({ modules, blueprint })
}
