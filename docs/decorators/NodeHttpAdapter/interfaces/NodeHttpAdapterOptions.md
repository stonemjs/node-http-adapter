[**Node Adapter Documentation v0.0.2**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [decorators/NodeHttpAdapter](../README.md) / NodeHttpAdapterOptions

# Interface: NodeHttpAdapterOptions

Interface for configuring the `NodeHttpAdapter` decorator.

This interface extends `NodeHttpAdapterConfig` and allows partial customization
of the Node.js HTTP adapter blueprint configuration.

## Extends

- `Partial`\<[`NodeHttpAdapterConfig`](../../../options/NodeHttpAdapterBlueprint/interfaces/NodeHttpAdapterConfig.md)\>

## Properties

### errorHandler?

> `optional` **errorHandler**: `ErrorHandlerConfig`\<`ServerResponse`\<`IncomingMessage`\>\>

Logging settings, including the logger instance and error reporting configurations.

#### Inherited from

`Partial.errorHandler`

#### Defined in

[src/options/NodeHttpAdapterBlueprint.ts:21](https://github.com/stonemjs/node-http-adapter/blob/c40d3860d098a79d7e93912b877b62d235dc0a99/src/options/NodeHttpAdapterBlueprint.ts#L21)

***

### server?

> `optional` **server**: [`NodeServerOptions`](../../../declarations/type-aliases/NodeServerOptions.md)

Additional server configurations for the Node HTTP server.

#### Inherited from

`Partial.server`

#### Defined in

[src/options/NodeHttpAdapterBlueprint.ts:31](https://github.com/stonemjs/node-http-adapter/blob/c40d3860d098a79d7e93912b877b62d235dc0a99/src/options/NodeHttpAdapterBlueprint.ts#L31)

***

### url?

> `optional` **url**: `string`

The base URL used by the node http to run the application.

#### Inherited from

`Partial.url`

#### Defined in

[src/options/NodeHttpAdapterBlueprint.ts:26](https://github.com/stonemjs/node-http-adapter/blob/c40d3860d098a79d7e93912b877b62d235dc0a99/src/options/NodeHttpAdapterBlueprint.ts#L26)
