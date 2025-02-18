[**Node Adapter Documentation v0.0.21**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [declarations](../README.md) / ServerMiddleware

# Type Alias: ServerMiddleware()

> **ServerMiddleware**: (`req`, `res`, `next`) => `void`

Defined in: [node-http-adapter/src/declarations.ts:79](https://github.com/stonemjs/node-http-adapter/blob/536e0dac6f971d10122453661aa60ac1371c6317/src/declarations.ts#L79)

Represents a platform server middleware function that processes HTTP requests and responses.

Middleware functions are called with the HTTP request, response objects, and a `next` function
to pass control to the next middleware in the stack. Middleware can modify the request and
response objects, or handle them completely.

## Parameters

### req

`IncomingMessage` & `Record`\<`string`, `any`\>

The HTTP request object, extended with custom properties.

### res

`ServerResponse` & `Record`\<`string`, `any`\>

The HTTP response object, extended with custom properties.

### next

(`err`?) => `void`

A callback to pass control to the next middleware. If called with an error, it invokes the error-handling middleware.

## Returns

`void`
