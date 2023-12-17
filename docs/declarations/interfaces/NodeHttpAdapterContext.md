[**Node Adapter Documentation v0.0.0**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [declarations](../README.md) / NodeHttpAdapterContext

# Interface: NodeHttpAdapterContext

Extends the `AdapterContext` interface to provide additional properties for the Node.js HTTP adapter.

This context includes the raw HTTP response (`ServerResponse`) in addition to the standard
Stone.js adapter context properties.

## Extends

- `AdapterContext`\<`IncomingMessage`, `number`, [`NodeHttpServer`](../type-aliases/NodeHttpServer.md), `IncomingHttpEvent`, `IncomingHttpEventOptions`, `OutgoingHttpResponse`\>

## Properties

### rawResponse

> **rawResponse**: `ServerResponse`\<`IncomingMessage`\>

The raw HTTP response object associated with the current request.

#### Defined in

[src/declarations.ts:59](https://github.com/stonemjs/node-adapter/blob/ddd3db262e296a3076ca003f1374ffc8cbccff6b/src/declarations.ts#L59)
