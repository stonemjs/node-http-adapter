[**Node Adapter Documentation v0.0.0**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [middleware/BodyEventMiddleware](../README.md) / BodyEventMiddleware

# Class: BodyEventMiddleware

Class representing a BodyEventMiddleware.

This middleware handles platform-specific messages and transforms them into Stone.js IncomingEvent objects.

## Author

Mr. Stone

## Constructors

### new BodyEventMiddleware()

> **new BodyEventMiddleware**(`options`): [`BodyEventMiddleware`](BodyEventMiddleware.md)

Create a BodyEventMiddleware.

#### Parameters

##### options

Options for creating the BodyEventMiddleware.

###### options.blueprint

`IBlueprint`

#### Returns

[`BodyEventMiddleware`](BodyEventMiddleware.md)

#### Defined in

[src/middleware/BodyEventMiddleware.ts:40](https://github.com/stonemjs/node-adapter/blob/ddd3db262e296a3076ca003f1374ffc8cbccff6b/src/middleware/BodyEventMiddleware.ts#L40)

## Methods

### handle()

> **handle**(`context`, `next`): `Promise`\<[`ServerResponseWrapper`](../../../ServerResponseWrapper/classes/ServerResponseWrapper.md)\>

Handles the incoming event, processes it, and invokes the next middleware in the pipeline.

#### Parameters

##### context

[`NodeHttpAdapterContext`](../../../declarations/interfaces/NodeHttpAdapterContext.md)

The adapter context containing the raw event, execution context, and other data.

##### next

`NextPipe`\<[`NodeHttpAdapterContext`](../../../declarations/interfaces/NodeHttpAdapterContext.md), [`ServerResponseWrapper`](../../../ServerResponseWrapper/classes/ServerResponseWrapper.md)\>

The next middleware to be invoked in the pipeline.

#### Returns

`Promise`\<[`ServerResponseWrapper`](../../../ServerResponseWrapper/classes/ServerResponseWrapper.md)\>

A promise that resolves to the destination type after processing.

#### Throws

If required components such as the rawEvent or IncomingEventBuilder are not provided.

#### Defined in

[src/middleware/BodyEventMiddleware.ts:53](https://github.com/stonemjs/node-adapter/blob/ddd3db262e296a3076ca003f1374ffc8cbccff6b/src/middleware/BodyEventMiddleware.ts#L53)
