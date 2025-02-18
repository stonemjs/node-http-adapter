[**Node Adapter Documentation v0.0.21**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [NodeHttpAdapter](../README.md) / NodeHttpAdapter

# Class: NodeHttpAdapter

Defined in: [node-http-adapter/src/NodeHttpAdapter.ts:46](https://github.com/stonemjs/node-http-adapter/blob/536e0dac6f971d10122453661aa60ac1371c6317/src/NodeHttpAdapter.ts#L46)

Node.js HTTP Adapter for the Stone.js framework.

The `NodeHTTPAdapter` is responsible for integrating a Node.js HTTP/HTTPS server
with the Stone.js framework, converting incoming HTTP requests into `IncomingHttpEvent`
instances, and processing outgoing responses into the `OutgoingHttpResponse` format.

It provides lifecycle hooks for initialization, termination, and error handling,
ensuring seamless integration with Stone.js.

## Template

The raw HTTP event type (e.g., `IncomingMessage`).

## Template

The raw HTTP response type (e.g., `ServerResponse`).

## Template

The server instance type (e.g., `NodeHttpServer`).

## Template

The Stone.js incoming event type (e.g., `IncomingHttpEvent`).

## Template

Options for creating an incoming event.

## Template

The outgoing response type (e.g., `OutgoingHttpResponse`).

## Template

The adapter context type (e.g., `NodeHttpAdapterContext`).

## Extends

- `Adapter`\<`IncomingMessage`, `ServerResponse`, [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md), `IncomingHttpEvent`, `IncomingHttpEventOptions`, `OutgoingHttpResponse`, [`NodeHttpAdapterContext`](../../declarations/interfaces/NodeHttpAdapterContext.md)\>

## Constructors

### new NodeHttpAdapter()

> `protected` **new NodeHttpAdapter**(`options`): [`NodeHttpAdapter`](NodeHttpAdapter.md)

Defined in: [node-http-adapter/src/NodeHttpAdapter.ts:94](https://github.com/stonemjs/node-http-adapter/blob/536e0dac6f971d10122453661aa60ac1371c6317/src/NodeHttpAdapter.ts#L94)

Constructs a `NodeHTTPAdapter` instance.

This constructor is protected and is intended to be used via the static `create` method.

#### Parameters

##### options

`AdapterOptions`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Configuration options for the adapter.

#### Returns

[`NodeHttpAdapter`](NodeHttpAdapter.md)

#### Overrides

`Adapter< IncomingMessage, ServerResponse, NodeHttpServer, IncomingHttpEvent, IncomingHttpEventOptions, OutgoingHttpResponse, NodeHttpAdapterContext >.constructor`

## Properties

### blueprint

> `protected` `readonly` **blueprint**: `IBlueprint`\<`any`\>

Defined in: core/dist/index.d.ts:2648

#### Inherited from

`Adapter.blueprint`

***

### handlerResolver

> `protected` `readonly` **handlerResolver**: `AdapterEventHandlerResolver`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Defined in: core/dist/index.d.ts:2649

#### Inherited from

`Adapter.handlerResolver`

***

### hooks

> `protected` `readonly` **hooks**: `AdapterHooks`

Defined in: core/dist/index.d.ts:2647

#### Inherited from

`Adapter.hooks`

***

### logger

> `protected` `readonly` **logger**: `ILogger`

Defined in: core/dist/index.d.ts:2646

#### Inherited from

`Adapter.logger`

***

### server

> `protected` `readonly` **server**: [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)

Defined in: [node-http-adapter/src/NodeHttpAdapter.ts:63](https://github.com/stonemjs/node-http-adapter/blob/536e0dac6f971d10122453661aa60ac1371c6317/src/NodeHttpAdapter.ts#L63)

The HTTP/HTTPS server instance created by the adapter.

***

### url

> `protected` `readonly` **url**: `URL`

Defined in: [node-http-adapter/src/NodeHttpAdapter.ts:58](https://github.com/stonemjs/node-http-adapter/blob/536e0dac6f971d10122453661aa60ac1371c6317/src/NodeHttpAdapter.ts#L58)

The base URL for the server, derived from the Stone.js blueprint configuration.

## Methods

### afterHandle()

> `protected` **afterHandle**(`eventHandler`, `context`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2710

Hook that runs after handling each event.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Action handler to be run.

##### context

[`NodeHttpAdapterContext`](../../declarations/interfaces/NodeHttpAdapterContext.md)

The event context.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.afterHandle`

***

### beforeHandle()

> `protected` **beforeHandle**(`eventHandler`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2703

Hook that runs before handling each event.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Action handler to be run.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.beforeHandle`

***

### createServer()

> `protected` **createServer**(): [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)

Defined in: [node-http-adapter/src/NodeHttpAdapter.ts:196](https://github.com/stonemjs/node-http-adapter/blob/536e0dac6f971d10122453661aa60ac1371c6317/src/NodeHttpAdapter.ts#L196)

Creates the HTTP or HTTPS server based on the adapter's configuration.

#### Returns

[`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)

A `NodeHttpServer` instance.

***

### eventListener()

> `protected` **eventListener**(`rawEvent`, `rawResponse`): `Promise`\<`ServerResponse`\>

Defined in: [node-http-adapter/src/NodeHttpAdapter.ts:154](https://github.com/stonemjs/node-http-adapter/blob/536e0dac6f971d10122453661aa60ac1371c6317/src/NodeHttpAdapter.ts#L154)

Handles incoming HTTP requests and sends them through the adapter's event pipeline.

#### Parameters

##### rawEvent

`IncomingMessage`

The raw HTTP request object.

##### rawResponse

`ServerResponse`

The raw HTTP response object.

#### Returns

`Promise`\<`ServerResponse`\>

A promise resolving to a ServerResponse (e.g., `ServerResponse`).

***

### executeHooks()

> `protected` **executeHooks**(`hook`, `context`?): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2724

Execute lifecycle hooks.

#### Parameters

##### hook

keyof `AdapterHooks`

The hook to execute.

##### context?

[`NodeHttpAdapterContext`](../../declarations/interfaces/NodeHttpAdapterContext.md)

The event context.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.executeHooks`

***

### makePipelineOptions()

> `protected` **makePipelineOptions**(): `PipelineOptions`\<[`NodeHttpAdapterContext`](../../declarations/interfaces/NodeHttpAdapterContext.md), `IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<`ServerResponse`\>\>\>

Defined in: core/dist/index.d.ts:2730

Create pipeline options for the Adapter.

#### Returns

`PipelineOptions`\<[`NodeHttpAdapterContext`](../../declarations/interfaces/NodeHttpAdapterContext.md), `IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<`ServerResponse`\>\>\>

The pipeline options for transforming the event.

#### Inherited from

`Adapter.makePipelineOptions`

***

### onPrepare()

> `protected` **onPrepare**(`eventHandler`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2697

Hook that runs before preparing the event context.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Action handler to be run.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.onPrepare`

***

### onStart()

> `protected` **onStart**(): `Promise`\<`void`\>

Defined in: [node-http-adapter/src/NodeHttpAdapter.ts:132](https://github.com/stonemjs/node-http-adapter/blob/536e0dac6f971d10122453661aa60ac1371c6317/src/NodeHttpAdapter.ts#L132)

Lifecycle hook for adapter initialization.

This method is called during the adapter's startup process and performs tasks
such as setting up exception listeners and verifying the runtime environment.

#### Returns

`Promise`\<`void`\>

#### Throws

If the adapter is used outside a Node.js context.

#### Overrides

`Adapter.onStart`

***

### onStop()

> `protected` **onStop**(): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2691

Hook that runs just before shutting down the application.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.onStop`

***

### onTerminate()

> `protected` **onTerminate**(`eventHandler`, `context`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2717

Hook that runs after running the action handler.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Action handler to be run.

##### context

[`NodeHttpAdapterContext`](../../declarations/interfaces/NodeHttpAdapterContext.md)

The event context.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.onTerminate`

***

### prepareResponse()

> `protected` **prepareResponse**(`eventHandler`, `context`): `Promise`\<`IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<`ServerResponse`\>\>\>

Defined in: core/dist/index.d.ts:2745

Prepare the response for the event handler.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

The event handler to prepare the response for.

##### context

[`NodeHttpAdapterContext`](../../declarations/interfaces/NodeHttpAdapterContext.md)

The event context.

#### Returns

`Promise`\<`IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<`ServerResponse`\>\>\>

The raw response wrapper.

#### Inherited from

`Adapter.prepareResponse`

***

### resolveErrorHandler()

> `protected` **resolveErrorHandler**(`error`): `IAdapterErrorHandler`\<`IncomingMessage`, `ServerResponse`, [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)\>

Defined in: core/dist/index.d.ts:2737

Get the error handler for the given error.

#### Parameters

##### error

`Error`

The error to get the handler for.

#### Returns

`IAdapterErrorHandler`\<`IncomingMessage`, `ServerResponse`, [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)\>

The error handler.

#### Inherited from

`Adapter.resolveErrorHandler`

***

### run()

> **run**\<`ExecutionResultType`\>(): `Promise`\<`ExecutionResultType`\>

Defined in: [node-http-adapter/src/NodeHttpAdapter.ts:114](https://github.com/stonemjs/node-http-adapter/blob/536e0dac6f971d10122453661aa60ac1371c6317/src/NodeHttpAdapter.ts#L114)

Starts the HTTP/HTTPS server and listens for incoming requests.

#### Type Parameters

• **ExecutionResultType** = [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)

#### Returns

`Promise`\<`ExecutionResultType`\>

A promise that resolves to an ExecutionResultType (usually `NodeHttpServer`) when the server starts successfully.

#### Throws

If the server encounters an error during initialization.

#### Example

```typescript
const adapter = NodeHTTPAdapter.create(options);
await adapter.run();
console.log('Server is running');
```

#### Overrides

`Adapter.run`

***

### sendEventThroughDestination()

> `protected` **sendEventThroughDestination**(`eventHandler`, `context`): `Promise`\<`ServerResponse`\>

Defined in: core/dist/index.d.ts:2683

Incoming message listener.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

##### context

[`NodeHttpAdapterContext`](../../declarations/interfaces/NodeHttpAdapterContext.md)

The event context.

#### Returns

`Promise`\<`ServerResponse`\>

Platform-specific output.

#### Inherited from

`Adapter.sendEventThroughDestination`

***

### setupGlobalErrorHandlers()

> `protected` **setupGlobalErrorHandlers**(): `void`

Defined in: [node-http-adapter/src/NodeHttpAdapter.ts:223](https://github.com/stonemjs/node-http-adapter/blob/536e0dac6f971d10122453661aa60ac1371c6317/src/NodeHttpAdapter.ts#L223)

Sets up global error handlers for uncaught exceptions and unhandled rejections.
Ensures critical errors are logged and the process exits safely.

#### Returns

`void`

***

### setupShutdownHook()

> `protected` **setupShutdownHook**(): `void`

Defined in: [node-http-adapter/src/NodeHttpAdapter.ts:244](https://github.com/stonemjs/node-http-adapter/blob/536e0dac6f971d10122453661aa60ac1371c6317/src/NodeHttpAdapter.ts#L244)

Sets up a shutdown listener to gracefully stop the server on SIGINT.

#### Returns

`void`

***

### create()

> `static` **create**(`options`): [`NodeHttpAdapter`](NodeHttpAdapter.md)

Defined in: [node-http-adapter/src/NodeHttpAdapter.ts:82](https://github.com/stonemjs/node-http-adapter/blob/536e0dac6f971d10122453661aa60ac1371c6317/src/NodeHttpAdapter.ts#L82)

Creates a new `NodeHTTPAdapter` instance.

#### Parameters

##### options

`AdapterOptions`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Configuration options for the adapter, including lifecycle event handlers,
                 logger, and dependency injection via the blueprint.

#### Returns

[`NodeHttpAdapter`](NodeHttpAdapter.md)

A new instance of `NodeHTTPAdapter`.

#### Example

```typescript
const adapter = NodeHTTPAdapter.create({
  blueprint,
  handlerResolver,
  logger,
});
await adapter.run();
```
