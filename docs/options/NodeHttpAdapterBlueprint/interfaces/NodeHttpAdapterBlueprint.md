[**Node Adapter Documentation v0.0.0**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [options/NodeHttpAdapterBlueprint](../README.md) / NodeHttpAdapterBlueprint

# Interface: NodeHttpAdapterBlueprint

Stone blueprint.

This interface defines the main configuration options for the Stone.js framework.
It includes settings for the builder, adapters, and the main application,
while allowing additional custom options to be added.

## Extends

- `StoneBlueprint`

## Indexable

 \[`key`: `string`\]: `unknown`

## Properties

### stone

> **stone**: `object`

Application-level settings, including environment, middleware, logging, and service registration.

#### adapters

> **adapters**: [`NodeHttpAdapterConfig`](NodeHttpAdapterConfig.md)[]

#### Overrides

`StoneBlueprint.stone`

#### Defined in

[src/options/NodeHttpAdapterBlueprint.ts:38](https://github.com/stonemjs/node-adapter/blob/ddd3db262e296a3076ca003f1374ffc8cbccff6b/src/options/NodeHttpAdapterBlueprint.ts#L38)
