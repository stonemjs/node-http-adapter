[**Node Adapter Documentation v0.0.2**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [options/NodeHttpAdapterBlueprint](../README.md) / NodeHttpAdapterBlueprint

# Interface: NodeHttpAdapterBlueprint

Stone blueprint.

This interface defines the main configuration options for the Stone.js framework.
It includes settings for the builder, adapters, and the main application,
while allowing additional custom options to be added.

## Extends

- `StoneBlueprint`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

## Indexable

 \[`key`: `string`\]: `unknown`

## Properties

### stone

> **stone**: `object`

Application-level settings, including environment, middleware, logging, and service registration.

#### adapters

> **adapters**: [`NodeHttpAdapterConfig`](NodeHttpAdapterConfig.md)[]

#### builder

> **builder**: `BuilderConfig`

#### Overrides

`StoneBlueprint.stone`

#### Defined in

[src/options/NodeHttpAdapterBlueprint.ts:40](https://github.com/stonemjs/node-adapter/blob/3c6d11fbb2b43efd2628228369562f77db66c88f/src/options/NodeHttpAdapterBlueprint.ts#L40)
