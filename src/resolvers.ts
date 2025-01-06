import {
  IBlueprint,
  AdapterHooks,
  AdapterResolver,
  defaultKernelResolver,
  defaultLoggerResolver
} from '@stone-js/core'
import { NodeHttpAdapter } from './NodeHttpAdapter'

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
  const loggerResolver = blueprint.get('stone.logger.resolver', defaultLoggerResolver)
  const handlerResolver = blueprint.get('stone.kernel.resolver', defaultKernelResolver)

  return NodeHttpAdapter.create({
    hooks,
    blueprint,
    handlerResolver,
    logger: loggerResolver(blueprint)
  })
}
