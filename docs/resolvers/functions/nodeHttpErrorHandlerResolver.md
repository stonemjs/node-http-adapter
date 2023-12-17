[**Node Adapter Documentation v0.0.0**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [resolvers](../README.md) / nodeHttpErrorHandlerResolver

# Function: nodeHttpErrorHandlerResolver()

> **nodeHttpErrorHandlerResolver**(`blueprint`): `IErrorHandler`\<`number`\>

Resolver function for the HTTP adapter error handler.

This function creates an error handler for the HTTP adapter, configuring logging and response rendering.

## Parameters

### blueprint

`IBlueprint`\<`any`\>

The application blueprint for dependency resolution.

## Returns

`IErrorHandler`\<`number`\>

An `ErrorHandler` instance for handling HTTP errors.

## Defined in

[src/resolvers.ts:85](https://github.com/stonemjs/node-adapter/blob/ddd3db262e296a3076ca003f1374ffc8cbccff6b/src/resolvers.ts#L85)
