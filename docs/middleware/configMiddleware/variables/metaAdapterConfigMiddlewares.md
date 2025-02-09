[**Node Adapter Documentation v0.0.21**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / metaAdapterConfigMiddlewares

# Variable: metaAdapterConfigMiddlewares

> `const` **metaAdapterConfigMiddlewares**: `MetaPipe`\<`ConfigContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>[]

Defined in: node-http-adapter/src/middleware/configMiddleware.ts:35

Configuration for adapter processing middleware.

This array defines a list of middleware pipes, each with a `pipe` function and a `priority`.
These pipes are executed in the order of their priority values, with lower values running first.
