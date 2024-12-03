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

### server?

> `optional` **server**: [`NodeServerOptions`](../../../declarations/type-aliases/NodeServerOptions.md)

Additional server configurations for the Node HTTP server.

#### Inherited from

`Partial.server`

#### Defined in

[src/options/NodeHttpAdapterBlueprint.ts:26](https://github.com/stonemjs/node-adapter/blob/3c6d11fbb2b43efd2628228369562f77db66c88f/src/options/NodeHttpAdapterBlueprint.ts#L26)

***

### url?

> `optional` **url**: `string`

The base URL used by the node http to run the application.

#### Inherited from

`Partial.url`

#### Defined in

[src/options/NodeHttpAdapterBlueprint.ts:21](https://github.com/stonemjs/node-adapter/blob/3c6d11fbb2b43efd2628228369562f77db66c88f/src/options/NodeHttpAdapterBlueprint.ts#L21)
