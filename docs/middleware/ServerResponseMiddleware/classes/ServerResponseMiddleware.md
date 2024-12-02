[**Node Adapter Documentation v0.0.0**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [middleware/ServerResponseMiddleware](../README.md) / ServerResponseMiddleware

# Class: ServerResponseMiddleware

Middleware for handling server responses and transforming them into the appropriate HTTP responses.

This middleware processes outgoing responses and attaches the necessary headers, status codes,
and body content to the HTTP response.

## Constructors

### new ServerResponseMiddleware()

> **new ServerResponseMiddleware**(`options`): [`ServerResponseMiddleware`](ServerResponseMiddleware.md)

Create a ServerResponseMiddleware.

#### Parameters

##### options

Options for creating the ServerResponseMiddleware.

###### blueprint

`IBlueprint`

#### Returns

[`ServerResponseMiddleware`](ServerResponseMiddleware.md)

#### Defined in

[src/middleware/ServerResponseMiddleware.ts:26](https://github.com/stonemjs/node-adapter/blob/9929d494d97af9b76f0eedfbba8a3119e7dc4922/src/middleware/ServerResponseMiddleware.ts#L26)

## Methods

### handle()

> **handle**(`context`, `next`): `Promise`\<[`ServerResponseWrapper`](../../../ServerResponseWrapper/classes/ServerResponseWrapper.md)\>

Handles the outgoing response, processes it, and invokes the next middleware in the pipeline.

#### Parameters

##### context

[`NodeHttpAdapterContext`](../../../declarations/interfaces/NodeHttpAdapterContext.md)

The adapter context containing the raw event, execution context, and other data.

##### next

`NextPipe`\<[`NodeHttpAdapterContext`](../../../declarations/interfaces/NodeHttpAdapterContext.md), [`ServerResponseWrapper`](../../../ServerResponseWrapper/classes/ServerResponseWrapper.md)\>

The next middleware to be invoked in the pipeline.

#### Returns

`Promise`\<[`ServerResponseWrapper`](../../../ServerResponseWrapper/classes/ServerResponseWrapper.md)\>

A promise resolving to the processed context.

#### Throws

If required components are missing in the context.

#### Defined in

[src/middleware/ServerResponseMiddleware.ts:38](https://github.com/stonemjs/node-adapter/blob/9929d494d97af9b76f0eedfbba8a3119e7dc4922/src/middleware/ServerResponseMiddleware.ts#L38)
