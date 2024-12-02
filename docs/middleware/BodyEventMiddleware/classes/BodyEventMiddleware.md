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

###### blueprint

`IBlueprint`

#### Returns

[`BodyEventMiddleware`](BodyEventMiddleware.md)

#### Defined in

[src/middleware/BodyEventMiddleware.ts:40](https://github.com/stonemjs/node-adapter/blob/9929d494d97af9b76f0eedfbba8a3119e7dc4922/src/middleware/BodyEventMiddleware.ts#L40)

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

[src/middleware/BodyEventMiddleware.ts:53](https://github.com/stonemjs/node-adapter/blob/9929d494d97af9b76f0eedfbba8a3119e7dc4922/src/middleware/BodyEventMiddleware.ts#L53)
