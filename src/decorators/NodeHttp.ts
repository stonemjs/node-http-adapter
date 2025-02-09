import deepmerge from 'deepmerge'
import { addBlueprint, classDecoratorLegacyWrapper, ClassType } from '@stone-js/core'
import { nodeHttpAdapterBlueprint, NodeHttpAdapterAdapterConfig } from '../options/NodeHttpAdapterBlueprint'

/**
 * Interface for configuring the `NodeHttp` decorator.
 *
 * This interface extends `NodeHttpAdapterConfig` and allows partial customization
 * of the Node.js HTTP adapter blueprint configuration.
 */
export interface NodeHttpOptions extends Partial<NodeHttpAdapterAdapterConfig> {}

/**
 * A class decorator for registering a Node.js HTTP adapter in the Stone.js framework.
 *
 * The decorator modifies the `nodeHttpAdapterBlueprint` by merging the provided options
 * with the default configuration. It also registers the blueprint to the target class using
 * the `addBlueprint` utility.
 *
 * @template T - The type of the class being decorated, defaulting to `ClassType`.
 *
 * @param options - An object containing configuration options for the Node.js HTTP adapter.
 *
 * @returns A class decorator function.
 *
 * @example
 * ```typescript
 * import { NodeHttp } from '@stone-js/node-http';
 *
 * @NodeHttp({
 *   url: 'http://localhost:3000',
 *   default: true,
 * })
 * class MyHttpService {
 *   // Service implementation
 * }
 * ```
 */
export const NodeHttp = <T extends ClassType = ClassType>(options: NodeHttpOptions = {}): ClassDecorator => {
  return classDecoratorLegacyWrapper<T>((target: T, context: ClassDecoratorContext<T>): undefined => {
    if (nodeHttpAdapterBlueprint.stone?.adapters?.[0] !== undefined) {
      // Deep Merge the provided options with the default Node.js HTTP adapter blueprint
      nodeHttpAdapterBlueprint.stone.adapters[0] = deepmerge(nodeHttpAdapterBlueprint.stone.adapters[0], options)
    }

    // Register the updated blueprint with the target class
    addBlueprint(target, context, nodeHttpAdapterBlueprint)
  })
}
