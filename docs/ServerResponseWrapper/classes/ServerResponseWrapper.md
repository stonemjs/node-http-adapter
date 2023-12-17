[**Node Adapter Documentation v0.0.0**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [ServerResponseWrapper](../README.md) / ServerResponseWrapper

# Class: ServerResponseWrapper

A wrapper for the Node.js HTTP `ServerResponse` to implement the `IRawResponseWrapper` interface.

This class provides methods for configuring and sending HTTP responses in a consistent and
flexible manner. It supports setting status codes, headers, streaming files, or sending raw body content.

## Implements

- `IRawResponseWrapper`\<`number`\>

## Properties

### options

> `readonly` **options**: `Partial`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\> = `{}`

Partial configuration for customizing the response.

#### Implementation of

`IRawResponseWrapper.options`

#### Defined in

[src/ServerResponseWrapper.ts:33](https://github.com/stonemjs/node-adapter/blob/ddd3db262e296a3076ca003f1374ffc8cbccff6b/src/ServerResponseWrapper.ts#L33)

***

### response

> `readonly` **response**: `ServerResponse`\<`IncomingMessage`\>

The Node.js `ServerResponse` object to be wrapped.

#### Defined in

[src/ServerResponseWrapper.ts:32](https://github.com/stonemjs/node-adapter/blob/ddd3db262e296a3076ca003f1374ffc8cbccff6b/src/ServerResponseWrapper.ts#L32)

## Methods

### respond()

> **respond**(): `Promise`\<`number`\>

Sends the HTTP response based on the configured options.

This method:
- Sets the `statusCode` and `statusMessage` if provided.
- Configures response `headers` if specified.
- Streams a file if `streamFile` is defined.
- Sends raw content if `body` is provided.

#### Returns

`Promise`\<`number`\>

A promise that resolves to the HTTP status code of the response.

#### Throws

An error if the response cannot be sent due to an issue in `streamFile`.

#### Implementation of

`IRawResponseWrapper.respond`

#### Defined in

[src/ServerResponseWrapper.ts:49](https://github.com/stonemjs/node-adapter/blob/ddd3db262e296a3076ca003f1374ffc8cbccff6b/src/ServerResponseWrapper.ts#L49)

***

### create()

> `static` **create**(`response`, `options`): [`ServerResponseWrapper`](ServerResponseWrapper.md)

Creates a new `ServerResponseWrapper` instance.

#### Parameters

##### response

`ServerResponse`\<`IncomingMessage`\>

The Node.js `ServerResponse` object to be wrapped.

##### options

`Partial`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\> = `{}`

Partial configuration for customizing the response.

#### Returns

[`ServerResponseWrapper`](ServerResponseWrapper.md)

A new instance of `ServerResponseWrapper`.

#### Defined in

[src/ServerResponseWrapper.ts:19](https://github.com/stonemjs/node-adapter/blob/ddd3db262e296a3076ca003f1374ffc8cbccff6b/src/ServerResponseWrapper.ts#L19)
