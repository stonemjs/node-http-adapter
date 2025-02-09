[**Node Adapter Documentation v0.0.21**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [NodeHttpErrorHandler](../README.md) / NodeHttpErrorHandler

# Class: NodeHttpErrorHandler

Defined in: [node-http-adapter/src/NodeHttpErrorHandler.ts:19](https://github.com/stonemjs/node-http-adapter/blob/98d0eadf76b2b9d63c37e48bbb51cdef92f3d34a/src/NodeHttpErrorHandler.ts#L19)

Class representing an NodeHttpErrorHandler.

## Implements

- `IAdapterErrorHandler`\<`IncomingMessage`, `ServerResponse`, [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)\>

## Constructors

### new NodeHttpErrorHandler()

> **new NodeHttpErrorHandler**(`options`): [`NodeHttpErrorHandler`](NodeHttpErrorHandler.md)

Defined in: [node-http-adapter/src/NodeHttpErrorHandler.ts:27](https://github.com/stonemjs/node-http-adapter/blob/98d0eadf76b2b9d63c37e48bbb51cdef92f3d34a/src/NodeHttpErrorHandler.ts#L27)

Create an NodeHttpErrorHandler.

#### Parameters

##### options

[`NodeHttpErrorHandlerOptions`](../interfaces/NodeHttpErrorHandlerOptions.md)

NodeHttpErrorHandler options.

#### Returns

[`NodeHttpErrorHandler`](NodeHttpErrorHandler.md)

## Methods

### handle()

> **handle**(`error`, `context`): `Promise`\<`ServerResponse`\>

Defined in: [node-http-adapter/src/NodeHttpErrorHandler.ts:42](https://github.com/stonemjs/node-http-adapter/blob/98d0eadf76b2b9d63c37e48bbb51cdef92f3d34a/src/NodeHttpErrorHandler.ts#L42)

Handle an error.

#### Parameters

##### error

`Error`

The error to handle.

##### context

`AdapterErrorContext`\<`IncomingMessage`, `ServerResponse`, [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)\>

The context of the adapter.

#### Returns

`Promise`\<`ServerResponse`\>

The raw response.

#### Implementation of

`IAdapterErrorHandler.handle`
