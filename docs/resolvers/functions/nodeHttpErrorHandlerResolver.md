[**Node Adapter Documentation v0.0.0**](../../README.md)

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

[src/resolvers.ts:87](https://github.com/stonemjs/node-adapter/blob/9929d494d97af9b76f0eedfbba8a3119e7dc4922/src/resolvers.ts#L87)
