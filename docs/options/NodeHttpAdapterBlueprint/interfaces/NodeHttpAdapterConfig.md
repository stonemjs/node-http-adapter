[**Node Adapter Documentation v0.0.2**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [options/NodeHttpAdapterBlueprint](../README.md) / NodeHttpAdapterConfig

# Interface: NodeHttpAdapterConfig

NodeHttpAdapterConfig Interface.

This interface defines the configuration options for the Node HTTP adapter
within the Stone.js framework. It includes settings such as the adapter's alias,
resolver, middleware, hooks, and server configurations.

## Extends

- `AdapterConfig`

## Properties

### errorHandler

> **errorHandler**: `ErrorHandlerConfig`\<`ServerResponse`\<`IncomingMessage`\>\>

Logging settings, including the logger instance and error reporting configurations.

#### Overrides

`AdapterConfig.errorHandler`

#### Defined in

[src/options/NodeHttpAdapterBlueprint.ts:21](https://github.com/stonemjs/node-http-adapter/blob/c40d3860d098a79d7e93912b877b62d235dc0a99/src/options/NodeHttpAdapterBlueprint.ts#L21)

***

### server

> **server**: [`NodeServerOptions`](../../../declarations/type-aliases/NodeServerOptions.md)

Additional server configurations for the Node HTTP server.

#### Defined in

[src/options/NodeHttpAdapterBlueprint.ts:31](https://github.com/stonemjs/node-http-adapter/blob/c40d3860d098a79d7e93912b877b62d235dc0a99/src/options/NodeHttpAdapterBlueprint.ts#L31)

***

### url

> **url**: `string`

The base URL used by the node http to run the application.

#### Defined in

[src/options/NodeHttpAdapterBlueprint.ts:26](https://github.com/stonemjs/node-http-adapter/blob/c40d3860d098a79d7e93912b877b62d235dc0a99/src/options/NodeHttpAdapterBlueprint.ts#L26)
