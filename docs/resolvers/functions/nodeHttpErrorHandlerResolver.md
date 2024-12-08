[**Node Adapter Documentation v0.0.2**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [resolvers](../README.md) / nodeHttpErrorHandlerResolver

# Function: nodeHttpErrorHandlerResolver()

> **nodeHttpErrorHandlerResolver**(`blueprint`): `IErrorHandler`\<`ServerResponse`\<`IncomingMessage`\>, `RuntimeError`\>

Resolver function for the HTTP adapter error handler.

This function creates an error handler for the HTTP adapter, configuring logging and response rendering.

## Parameters

### blueprint

`IBlueprint`\<`any`\>

The application blueprint for dependency resolution.

## Returns

`IErrorHandler`\<`ServerResponse`\<`IncomingMessage`\>, `RuntimeError`\>

An `ErrorHandler` instance for handling HTTP errors.

## Defined in

[src/resolvers.ts:84](https://github.com/stonemjs/node-http-adapter/blob/c40d3860d098a79d7e93912b877b62d235dc0a99/src/resolvers.ts#L84)
