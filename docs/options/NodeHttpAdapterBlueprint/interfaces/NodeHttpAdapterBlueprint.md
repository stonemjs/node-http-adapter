[**Node Adapter Documentation v0.0.0**](../../../README.md)

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

#### errorHandler

> **errorHandler**: `ErrorHandlerConfig`

#### kernel

> **kernel**: `KernelConfig`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

#### Overrides

`StoneBlueprint.stone`

#### Defined in

[src/options/NodeHttpAdapterBlueprint.ts:39](https://github.com/stonemjs/node-adapter/blob/9929d494d97af9b76f0eedfbba8a3119e7dc4922/src/options/NodeHttpAdapterBlueprint.ts#L39)
