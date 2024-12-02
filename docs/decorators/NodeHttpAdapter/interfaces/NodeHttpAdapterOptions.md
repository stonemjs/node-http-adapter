[**Node Adapter Documentation v0.0.0**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [decorators/NodeHttpAdapter](../README.md) / NodeHttpAdapterOptions

# Interface: NodeHttpAdapterOptions

Interface for configuring the `NodeHttpAdapter` decorator.

This interface extends `NodeHttpAdapterConfig` and allows partial customization
of the Node.js HTTP adapter blueprint configuration.

## Extends

- `Partial`\<[`NodeHttpAdapterConfig`](../../../options/NodeHttpAdapterBlueprint/interfaces/NodeHttpAdapterConfig.md)\>

## Properties

### server?

> `optional` **server**: [`NodeServerOptions`](../../../declarations/type-aliases/NodeServerOptions.md)

Additional server configurations for the Node HTTP server.

#### Inherited from

`Partial.server`

#### Defined in

[src/options/NodeHttpAdapterBlueprint.ts:25](https://github.com/stonemjs/node-adapter/blob/9929d494d97af9b76f0eedfbba8a3119e7dc4922/src/options/NodeHttpAdapterBlueprint.ts#L25)

***

### url?

> `optional` **url**: `string`

The base URL used by the node http to run the application.

#### Inherited from

`Partial.url`

#### Defined in

[src/options/NodeHttpAdapterBlueprint.ts:20](https://github.com/stonemjs/node-adapter/blob/9929d494d97af9b76f0eedfbba8a3119e7dc4922/src/options/NodeHttpAdapterBlueprint.ts#L20)
