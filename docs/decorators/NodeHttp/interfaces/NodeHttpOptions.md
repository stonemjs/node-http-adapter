# Interface: NodeHttpOptions

Interface for configuring the `NodeHttp` decorator.

This interface extends `NodeHttpAdapterConfig` and allows partial customization
of the Node.js HTTP adapter blueprint configuration.

## Extends

- `Partial`\<[`NodeHttpAdapterAdapterConfig`](../../../options/NodeHttpAdapterBlueprint/interfaces/NodeHttpAdapterAdapterConfig.md)\>

## Properties

### isSsl?

```ts
optional isSsl?: boolean;
```

Determines if the server should use SSL.

#### Inherited from

[`NodeHttpAdapterAdapterConfig`](../../../options/NodeHttpAdapterBlueprint/interfaces/NodeHttpAdapterAdapterConfig.md).[`isSsl`](../../../options/NodeHttpAdapterBlueprint/interfaces/NodeHttpAdapterAdapterConfig.md#isssl)

***

### printUrls?

```ts
optional printUrls?: boolean;
```

Determines if the server should print the URL when starting.

#### Inherited from

[`NodeHttpAdapterAdapterConfig`](../../../options/NodeHttpAdapterBlueprint/interfaces/NodeHttpAdapterAdapterConfig.md).[`printUrls`](../../../options/NodeHttpAdapterBlueprint/interfaces/NodeHttpAdapterAdapterConfig.md#printurls)

***

### server?

```ts
optional server?: NodeServerOptions;
```

Additional server configurations for the Node HTTP server.

#### Inherited from

[`NodeHttpAdapterAdapterConfig`](../../../options/NodeHttpAdapterBlueprint/interfaces/NodeHttpAdapterAdapterConfig.md).[`server`](../../../options/NodeHttpAdapterBlueprint/interfaces/NodeHttpAdapterAdapterConfig.md#server)

***

### serverMiddleware?

```ts
optional serverMiddleware?: ServerMiddleware[];
```

The platform middleware used for processing platform node HTTP requests and responses.
This middleware is executed before the adapter middleware.
This middleware is lower-level and should be used for platform-specific processing.
You can connect or express like middleware here to process request just before the Stone adapter middleware.

#### Inherited from

[`NodeHttpAdapterAdapterConfig`](../../../options/NodeHttpAdapterBlueprint/interfaces/NodeHttpAdapterAdapterConfig.md).[`serverMiddleware`](../../../options/NodeHttpAdapterBlueprint/interfaces/NodeHttpAdapterAdapterConfig.md#servermiddleware)

***

### url?

```ts
optional url?: string;
```

The base URL used by the node http to run the application.

#### Inherited from

[`NodeHttpAdapterAdapterConfig`](../../../options/NodeHttpAdapterBlueprint/interfaces/NodeHttpAdapterAdapterConfig.md).[`url`](../../../options/NodeHttpAdapterBlueprint/interfaces/NodeHttpAdapterAdapterConfig.md#url)
