[**Node Adapter Documentation v0.0.21**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [declarations](../README.md) / NodeHttpsServerOptions

# Type Alias: NodeHttpsServerOptions

> **NodeHttpsServerOptions**: `HttpsServerOptions`\<*typeof* `IncomingMessage`, *typeof* `ServerResponse`\>

Defined in: [node-http-adapter/src/declarations.ts:29](https://github.com/stonemjs/node-http-adapter/blob/536e0dac6f971d10122453661aa60ac1371c6317/src/declarations.ts#L29)

Represents options for configuring a Node.js HTTPS server.

Extends the `HttpsServerOptions` type from Node.js to support strongly typed
`IncomingMessage` and `ServerResponse` instances.
