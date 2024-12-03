[**Node Adapter Documentation v0.0.2**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [resolvers](../README.md) / nodeHttpErrorHandlerResolver

# Function: nodeHttpErrorHandlerResolver()

> **nodeHttpErrorHandlerResolver**(`blueprint`): `IErrorHandler`\<`ServerResponse`\<`IncomingMessage`\>\>

Resolver function for the HTTP adapter error handler.

This function creates an error handler for the HTTP adapter, configuring logging and response rendering.

## Parameters

### blueprint

`IBlueprint`\<`any`\>

The application blueprint for dependency resolution.

## Returns

`IErrorHandler`\<`ServerResponse`\<`IncomingMessage`\>\>

An `ErrorHandler` instance for handling HTTP errors.

## Defined in

[src/resolvers.ts:84](https://github.com/stonemjs/node-adapter/blob/3c6d11fbb2b43efd2628228369562f77db66c88f/src/resolvers.ts#L84)
