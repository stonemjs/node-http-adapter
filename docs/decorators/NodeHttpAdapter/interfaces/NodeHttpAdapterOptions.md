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

[src/options/NodeHttpAdapterBlueprint.ts:24](https://github.com/stonemjs/node-adapter/blob/ddd3db262e296a3076ca003f1374ffc8cbccff6b/src/options/NodeHttpAdapterBlueprint.ts#L24)

***

### url?

> `optional` **url**: `string`

The base URL used by the node http to run the application.

#### Inherited from

`Partial.url`

#### Defined in

[src/options/NodeHttpAdapterBlueprint.ts:19](https://github.com/stonemjs/node-adapter/blob/ddd3db262e296a3076ca003f1374ffc8cbccff6b/src/options/NodeHttpAdapterBlueprint.ts#L19)
