[**Node Adapter Documentation v0.0.0**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [resolvers](../README.md) / nodeHttpAdapterResolver

# Function: nodeHttpAdapterResolver()

> **nodeHttpAdapterResolver**(`blueprint`): `IAdapter`

Resolver function for the HTTP adapter.

This function creates a `NodeHTTPAdapter` instance, which acts as the bridge between the HTTP server and the Stone.js framework.

## Parameters

### blueprint

`IBlueprint`\<`any`\>

The application blueprint for dependency resolution.

## Returns

`IAdapter`

An `AdapterResolver` instance for managing HTTP interactions.

## Defined in

[src/resolvers.ts:124](https://github.com/stonemjs/node-adapter/blob/9929d494d97af9b76f0eedfbba8a3119e7dc4922/src/resolvers.ts#L124)
