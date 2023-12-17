[**Node Adapter Documentation v0.0.0**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [NodeHttpAdapter](../README.md) / NodeHTTPAdapter

# Class: NodeHTTPAdapter

Node.js HTTP Adapter for the Stone.js framework.

The `NodeHTTPAdapter` is responsible for integrating a Node.js HTTP/HTTPS server
with the Stone.js framework, converting incoming HTTP requests into `IncomingHttpEvent`
instances, and processing outgoing responses into the `OutgoingHttpResponse` format.

It provides lifecycle hooks for initialization, termination, and error handling,
ensuring seamless integration with Stone.js.

## Template

The raw HTTP event type (e.g., `IncomingMessage`).

## Template

The destination type (e.g., number for status codes).

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

- `Adapter`\<`IncomingMessage`, `number`, [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md), `IncomingHttpEvent`, `IncomingHttpEventOptions`, `OutgoingHttpResponse`, [`NodeHttpAdapterContext`](../../declarations/interfaces/NodeHttpAdapterContext.md)\>

## Constructors

### new NodeHTTPAdapter()

> `protected` **new NodeHTTPAdapter**(`options`): [`NodeHTTPAdapter`](NodeHTTPAdapter.md)

Constructs a `NodeHTTPAdapter` instance.

This constructor is protected and is intended to be used via the static `create` method.

#### Parameters

##### options

`AdapterOptions`\<`number`, `IncomingHttpEvent`, `OutgoingHttpResponse`\>

Configuration options for the adapter.

#### Returns

[`NodeHTTPAdapter`](NodeHTTPAdapter.md)

#### Overrides

`Adapter<
IncomingMessage,
number,
NodeHttpServer,
IncomingHttpEvent,
IncomingHttpEventOptions,
OutgoingHttpResponse,
NodeHttpAdapterContext
>.constructor`

#### Defined in

[src/NodeHttpAdapter.ts:96](https://github.com/stonemjs/node-adapter/blob/ddd3db262e296a3076ca003f1374ffc8cbccff6b/src/NodeHttpAdapter.ts#L96)

## Properties

### server

> `protected` `readonly` **server**: [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)

The HTTP/HTTPS server instance created by the adapter.

#### Defined in

[src/NodeHttpAdapter.ts:62](https://github.com/stonemjs/node-adapter/blob/ddd3db262e296a3076ca003f1374ffc8cbccff6b/src/NodeHttpAdapter.ts#L62)

***

### url

> `protected` `readonly` **url**: `URL`

The base URL for the server, derived from the Stone.js blueprint configuration.

#### Defined in

[src/NodeHttpAdapter.ts:57](https://github.com/stonemjs/node-adapter/blob/ddd3db262e296a3076ca003f1374ffc8cbccff6b/src/NodeHttpAdapter.ts#L57)

## Methods

### catchUncaughtExceptionListener()

> `protected` **catchUncaughtExceptionListener**(): `void`

Adds listeners for uncaught exceptions and unhandled promise rejections.

Logs errors and ensures the server shuts down gracefully in case of critical errors.

#### Returns

`void`

#### Defined in

[src/NodeHttpAdapter.ts:225](https://github.com/stonemjs/node-adapter/blob/ddd3db262e296a3076ca003f1374ffc8cbccff6b/src/NodeHttpAdapter.ts#L225)

***

### createServer()

> `protected` **createServer**(): [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)

Creates the HTTP or HTTPS server based on the adapter's configuration.

#### Returns

[`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)

A `NodeHttpServer` instance.

#### Defined in

[src/NodeHttpAdapter.ts:177](https://github.com/stonemjs/node-adapter/blob/ddd3db262e296a3076ca003f1374ffc8cbccff6b/src/NodeHttpAdapter.ts#L177)

***

### eventListener()

> `protected` **eventListener**(`rawEvent`, `rawResponse`): `Promise`\<`number`\>

Handles incoming HTTP requests and sends them through the adapter's event pipeline.

#### Parameters

##### rawEvent

`IncomingMessage`

The raw HTTP request object.

##### rawResponse

`ServerResponse`\<`IncomingMessage`\>

The raw HTTP response object.

#### Returns

`Promise`\<`number`\>

A promise resolving to a number (e.g., HTTP status code).

#### Defined in

[src/NodeHttpAdapter.ts:200](https://github.com/stonemjs/node-adapter/blob/ddd3db262e296a3076ca003f1374ffc8cbccff6b/src/NodeHttpAdapter.ts#L200)

***

### onInit()

> `protected` **onInit**(): `Promise`\<`void`\>

Lifecycle hook for adapter initialization.

This method is called during the adapter's startup process and performs tasks
such as setting up exception listeners and verifying the runtime environment.

#### Returns

`Promise`\<`void`\>

#### Throws

If the adapter is used outside a Node.js context.

#### Overrides

`Adapter.onInit`

#### Defined in

[src/NodeHttpAdapter.ts:139](https://github.com/stonemjs/node-adapter/blob/ddd3db262e296a3076ca003f1374ffc8cbccff6b/src/NodeHttpAdapter.ts#L139)

***

### onTerminate()

> `protected` **onTerminate**(`eventHandler`, `context`): `Promise`\<`void`\>

Lifecycle hook for adapter termination.

This method is called when the adapter needs to gracefully terminate,
ensuring all responses are completed before shutdown.

#### Parameters

##### eventHandler

`LifecycleEventHandler`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

The lifecycle event handler.

##### context

[`NodeHttpAdapterContext`](../../declarations/interfaces/NodeHttpAdapterContext.md)

The context for the lifecycle event.

#### Returns

`Promise`\<`void`\>

#### Overrides

`Adapter.onTerminate`

#### Defined in

[src/NodeHttpAdapter.ts:160](https://github.com/stonemjs/node-adapter/blob/ddd3db262e296a3076ca003f1374ffc8cbccff6b/src/NodeHttpAdapter.ts#L160)

***

### run()

> **run**(): `Promise`\<`number`\>

Starts the HTTP/HTTPS server and listens for incoming requests.

#### Returns

`Promise`\<`number`\>

A promise that resolves to a number (usually 0) when the server starts successfully.

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

#### Defined in

[src/NodeHttpAdapter.ts:121](https://github.com/stonemjs/node-adapter/blob/ddd3db262e296a3076ca003f1374ffc8cbccff6b/src/NodeHttpAdapter.ts#L121)

***

### create()

> `static` **create**(`options`): [`NodeHTTPAdapter`](NodeHTTPAdapter.md)

Creates a new `NodeHTTPAdapter` instance.

#### Parameters

##### options

`AdapterOptions`\<`number`, `IncomingHttpEvent`, `OutgoingHttpResponse`\>

Configuration options for the adapter, including lifecycle event handlers,
                 logger, and dependency injection via the blueprint.

#### Returns

[`NodeHTTPAdapter`](NodeHTTPAdapter.md)

A new instance of `NodeHTTPAdapter`.

#### Example

```typescript
const adapter = NodeHTTPAdapter.create({
  blueprint,
  handlerResolver,
  logger,
  errorHandler,
});
await adapter.run();
```

#### Defined in

[src/NodeHttpAdapter.ts:82](https://github.com/stonemjs/node-adapter/blob/ddd3db262e296a3076ca003f1374ffc8cbccff6b/src/NodeHttpAdapter.ts#L82)
