[**Node Adapter Documentation v0.0.21**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [declarations](../README.md) / NodeHttpServer

# Type Alias: NodeHttpServer

> **NodeHttpServer**: `HttpsServer`\<*typeof* `IncomingMessage`, *typeof* `ServerResponse`\> \| `Server`\<*typeof* `IncomingMessage`, *typeof* `ServerResponse`\>

Defined in: [node-http-adapter/src/declarations.ts:39](https://github.com/stonemjs/node-http-adapter/blob/536e0dac6f971d10122453661aa60ac1371c6317/src/declarations.ts#L39)

Represents a Node.js HTTP or HTTPS server.

Combines both HTTP and HTTPS server types to allow flexibility in choosing the server type.
