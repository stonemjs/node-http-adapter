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

#### Overrides

`StoneBlueprint.stone`

#### Defined in

[src/options/NodeHttpAdapterBlueprint.ts:45](https://github.com/stonemjs/node-http-adapter/blob/c40d3860d098a79d7e93912b877b62d235dc0a99/src/options/NodeHttpAdapterBlueprint.ts#L45)
