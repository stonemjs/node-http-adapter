[**Node Adapter Documentation v0.0.0**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [declarations](../README.md) / NodeHttpAdapterContext

# Interface: NodeHttpAdapterContext

Extends the `AdapterContext` interface to provide additional properties for the Node.js HTTP adapter.

This context includes the raw HTTP response (`ServerResponse`) in addition to the standard
Stone.js adapter context properties.

## Extends

- `AdapterContext`\<`IncomingMessage`, `ServerResponse`, [`NodeHttpServer`](../type-aliases/NodeHttpServer.md), `IncomingHttpEvent`, `IncomingHttpEventOptions`, `OutgoingHttpResponse`\>

## Properties

### rawResponse

> **rawResponse**: `ServerResponse`\<`IncomingMessage`\>

The raw HTTP response object associated with the current request.

#### Defined in

[src/declarations.ts:59](https://github.com/stonemjs/node-adapter/blob/9929d494d97af9b76f0eedfbba8a3119e7dc4922/src/declarations.ts#L59)
