[**Node Adapter Documentation v0.0.21**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [declarations](../README.md) / NodeHttpServerOptions

# Type Alias: NodeHttpServerOptions

> **NodeHttpServerOptions**: `ServerOptions`\<*typeof* `IncomingMessage`, *typeof* `ServerResponse`\>

Defined in: [node-http-adapter/src/declarations.ts:18](https://github.com/stonemjs/node-http-adapter/blob/98d0eadf76b2b9d63c37e48bbb51cdef92f3d34a/src/declarations.ts#L18)

Represents options for configuring a Node.js HTTP server.

Extends the `ServerOptions` type from Node.js to support strongly typed
`IncomingMessage` and `ServerResponse` instances.
