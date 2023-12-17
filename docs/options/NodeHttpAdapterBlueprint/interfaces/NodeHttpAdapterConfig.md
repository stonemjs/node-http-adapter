[**Node Adapter Documentation v0.0.0**](../../../README.md)

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

### server

> **server**: [`NodeServerOptions`](../../../declarations/type-aliases/NodeServerOptions.md)

Additional server configurations for the Node HTTP server.

#### Defined in

[src/options/NodeHttpAdapterBlueprint.ts:24](https://github.com/stonemjs/node-adapter/blob/ddd3db262e296a3076ca003f1374ffc8cbccff6b/src/options/NodeHttpAdapterBlueprint.ts#L24)

***

### url

> **url**: `string`

The base URL used by the node http to run the application.

#### Defined in

[src/options/NodeHttpAdapterBlueprint.ts:19](https://github.com/stonemjs/node-adapter/blob/ddd3db262e296a3076ca003f1374ffc8cbccff6b/src/options/NodeHttpAdapterBlueprint.ts#L19)
