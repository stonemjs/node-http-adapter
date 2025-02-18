[**Node Adapter Documentation v0.0.21**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [options/NodeHttpAdapterBlueprint](../README.md) / NodeHttpAdapterAdapterConfig

# Interface: NodeHttpAdapterAdapterConfig

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:18](https://github.com/stonemjs/node-http-adapter/blob/536e0dac6f971d10122453661aa60ac1371c6317/src/options/NodeHttpAdapterBlueprint.ts#L18)

NodeHttpAdapterAdapterConfig Interface.

This interface defines the configuration options for the Node HTTP adapter
within the Stone.js framework. It includes settings such as the adapter's alias,
resolver, middleware, hooks, and server configurations.

## Extends

- `AdapterConfig`

## Properties

### alias?

> `optional` **alias**: `string`

Defined in: core/dist/index.d.ts:430

The alias name for the adapter.
This is a unique identifier used to reference the adapter.
Optional property.

#### Inherited from

`AdapterConfig.alias`

***

### current?

> `optional` **current**: `boolean`

Defined in: core/dist/index.d.ts:436

The current status identifier for the adapter.
Used to indicate if this adapter instance is active or currently in use.
Optional property.

#### Inherited from

`AdapterConfig.current`

***

### default?

> `optional` **default**: `boolean`

Defined in: core/dist/index.d.ts:441

Defines whether this adapter is the default adapter used by the application.
Optional property.

#### Inherited from

`AdapterConfig.default`

***

### errorHandlers

> **errorHandlers**: `Record`\<`string`, `MetaAdapterErrorHandler`\>

Defined in: core/dist/index.d.ts:419

Error handlers used to manage and report errors that occur within the adapter.
These handlers can be used to customize error handling behavior and logging.

#### Inherited from

`AdapterConfig.errorHandlers`

***

### hooks?

> `optional` **hooks**: `AdapterHooks`

Defined in: core/dist/index.d.ts:424

Hooks that provide additional behavior during specific lifecycle events of the adapter.
These hooks can be used to extend the adapter's functionality at various points.

#### Inherited from

`AdapterConfig.hooks`

***

### middleware

> **middleware**: `MixedPipe`\<`any`, `any`\>[]

Defined in: core/dist/index.d.ts:414

The middleware used for processing incoming or outgoing data in the adapter.
Middleware can modify or handle events at different stages of the adapter's lifecycle.

#### Inherited from

`AdapterConfig.middleware`

***

### platform

> **platform**: `string`

Defined in: core/dist/index.d.ts:405

The platform identifier for the adapter.
This is used to categorize the adapter based on the environment or technology it supports.

#### Inherited from

`AdapterConfig.platform`

***

### resolver

> **resolver**: `AdapterResolver`

Defined in: core/dist/index.d.ts:409

The class type resolver used to create instances of the adapter.

#### Inherited from

`AdapterConfig.resolver`

***

### server

> **server**: [`NodeServerOptions`](../../../declarations/type-aliases/NodeServerOptions.md)

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:27](https://github.com/stonemjs/node-http-adapter/blob/536e0dac6f971d10122453661aa60ac1371c6317/src/options/NodeHttpAdapterBlueprint.ts#L27)

Additional server configurations for the Node HTTP server.

***

### serverMiddleware

> **serverMiddleware**: [`ServerMiddleware`](../../../declarations/type-aliases/ServerMiddleware.md)[]

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:35](https://github.com/stonemjs/node-http-adapter/blob/536e0dac6f971d10122453661aa60ac1371c6317/src/options/NodeHttpAdapterBlueprint.ts#L35)

The platform middleware used for processing platform node HTTP requests and responses.
This middleware is executed before the adapter middleware.
This middleware is lower-level and should be used for platform-specific processing.
You can connect or express like middleware here to process request just before the Stone adapter middleware.

***

### url

> **url**: `string`

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:22](https://github.com/stonemjs/node-http-adapter/blob/536e0dac6f971d10122453661aa60ac1371c6317/src/options/NodeHttpAdapterBlueprint.ts#L22)

The base URL used by the node http to run the application.
