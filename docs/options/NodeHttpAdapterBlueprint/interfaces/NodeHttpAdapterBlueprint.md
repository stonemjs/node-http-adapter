[**Node Adapter Documentation v0.0.21**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [options/NodeHttpAdapterBlueprint](../README.md) / NodeHttpAdapterBlueprint

# Interface: NodeHttpAdapterBlueprint

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:53](https://github.com/stonemjs/node-http-adapter/blob/98d0eadf76b2b9d63c37e48bbb51cdef92f3d34a/src/options/NodeHttpAdapterBlueprint.ts#L53)

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

> **stone**: [`NodeHttpAdapterConfig`](NodeHttpAdapterConfig.md)

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:57](https://github.com/stonemjs/node-http-adapter/blob/98d0eadf76b2b9d63c37e48bbb51cdef92f3d34a/src/options/NodeHttpAdapterBlueprint.ts#L57)

Application-level settings, including environment, middleware, logging, and service registration.

#### Overrides

`StoneBlueprint.stone`
