[**Node Adapter Documentation v0.0.21**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [resolvers](../README.md) / nodeHttpAdapterResolver

# Function: nodeHttpAdapterResolver()

> **nodeHttpAdapterResolver**(`blueprint`): `IAdapter`

Defined in: [node-http-adapter/src/resolvers.ts:18](https://github.com/stonemjs/node-http-adapter/blob/98d0eadf76b2b9d63c37e48bbb51cdef92f3d34a/src/resolvers.ts#L18)

Resolver function for the HTTP adapter.

This function creates a `NodeHTTPAdapter` instance, which acts as the bridge between the HTTP server and the Stone.js framework.

## Parameters

### blueprint

`IBlueprint`\<`any`\>

The application blueprint for dependency resolution.

## Returns

`IAdapter`

An `AdapterResolver` instance for managing HTTP interactions.
