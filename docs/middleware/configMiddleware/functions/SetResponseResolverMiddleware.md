[**Node Adapter Documentation v0.0.21**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / SetResponseResolverMiddleware

# Function: SetResponseResolverMiddleware()

> **SetResponseResolverMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: node-http-adapter/src/middleware/configMiddleware.ts:18

Middleware to dynamically set response resolver for adapter.

## Parameters

### context

`ConfigContext`\<`IBlueprint`, `ClassType`\>

The configuration context containing modules and blueprint.

### next

`NextPipe`\<`ConfigContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>

The next pipeline function to continue processing.

## Returns

`Promise`\<`IBlueprint`\>

The updated blueprint or a promise resolving to it.

## Example

```typescript
SetResponseResolverMiddleware(context, next)
```
