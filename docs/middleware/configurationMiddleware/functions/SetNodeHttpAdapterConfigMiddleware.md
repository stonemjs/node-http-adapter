[**Node Adapter Documentation v0.0.2**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [middleware/configurationMiddleware](../README.md) / SetNodeHttpAdapterConfigMiddleware

# Function: SetNodeHttpAdapterConfigMiddleware()

> **SetNodeHttpAdapterConfigMiddleware**(`context`, `next`): `IBlueprint` \| `Promise`\<`IBlueprint`\>

Middleware to set Node HTTP specific configuration in the blueprint.

This middleware checks the current platform from the blueprint. If the platform
is Node HTTP, it sets the error handler resolver to `nodeHttpErrorHandlerResolver`.

## Parameters

### context

`ConfigContext`

The configuration context containing modules and blueprint.

### next

`NextPipe`\<`ConfigContext`, `IBlueprint`\>

The next middleware function in the pipeline.

## Returns

`IBlueprint` \| `Promise`\<`IBlueprint`\>

- The modified blueprint or a promise that resolves to the modified blueprint.

## Defined in

[src/middleware/configurationMiddleware.ts:16](https://github.com/stonemjs/node-adapter/blob/3c6d11fbb2b43efd2628228369562f77db66c88f/src/middleware/configurationMiddleware.ts#L16)
