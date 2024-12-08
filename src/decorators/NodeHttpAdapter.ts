import { addBlueprint, ClassType } from '@stone-js/core'
import { nodeHttpAdapterBlueprint, NodeHttpAdapterConfig } from '../options/NodeHttpAdapterBlueprint'

/**
 * Interface for configuring the `NodeHttpAdapter` decorator.
 *
 * This interface extends `NodeHttpAdapterConfig` and allows partial customization
 * of the Node.js HTTP adapter blueprint configuration.
 */
export interface NodeHttpAdapterOptions extends Partial<NodeHttpAdapterConfig> {}

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
 * import { NodeHttpAdapter } from '@stone-js/node-http';
 *
 * @NodeHttpAdapter({
 *   url: 'http://localhost:3000',
 *   default: true,
 * })
 * class MyHttpService {
 *   // Service implementation
 * }
 * ```
 */
export const NodeHttpAdapter = <T extends ClassType = ClassType>(
  options: NodeHttpAdapterOptions = {}
): ((target: T, context: ClassDecoratorContext<T>) => void) => {
  return (target: T, context: ClassDecoratorContext<T>) => {
    if (nodeHttpAdapterBlueprint.stone?.adapters?.[0] !== undefined) {
      // Merge the provided options with the default Node.js HTTP adapter blueprint
      nodeHttpAdapterBlueprint.stone.adapters[0] = {
        ...nodeHttpAdapterBlueprint.stone.adapters[0],
        ...options
      }
    }

    // Register the updated blueprint with the target class
    addBlueprint(target, context, nodeHttpAdapterBlueprint)
  }
}
