[**Node Adapter Documentation v0.0.0**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [declarations](../README.md) / RawHttpResponseOptions

# Interface: RawHttpResponseOptions

Represents options for configuring a raw HTTP response.

Extends the `RawResponseOptions` interface to include additional properties
for managing response content, headers, status codes, and streaming files.

## Extends

- `RawResponseOptions`

## Indexable

 \[`k`: `string` \| `number` \| `symbol`\]: `unknown`

## Properties

### body

> **body**: `unknown`

The body of the HTTP response. Can be of any type, including strings, objects, or buffers.

#### Defined in

[src/declarations.ts:72](https://github.com/stonemjs/node-adapter/blob/9929d494d97af9b76f0eedfbba8a3119e7dc4922/src/declarations.ts#L72)

***

### charset?

> `optional` **charset**: `string`

The character set used for encoding the response body. Defaults to `utf-8` if not specified.

#### Defined in

[src/declarations.ts:77](https://github.com/stonemjs/node-adapter/blob/9929d494d97af9b76f0eedfbba8a3119e7dc4922/src/declarations.ts#L77)

***

### headers

> **headers**: `Headers` \| `Map`\<`string`, `string`\>

Headers to include in the HTTP response.
Can be provided as a `Map<string, string>` or `Headers` object.

#### Defined in

[src/declarations.ts:93](https://github.com/stonemjs/node-adapter/blob/9929d494d97af9b76f0eedfbba8a3119e7dc4922/src/declarations.ts#L93)

***

### statusCode

> **statusCode**: `number`

The HTTP status code of the response (e.g., `200`, `404`).

#### Defined in

[src/declarations.ts:82](https://github.com/stonemjs/node-adapter/blob/9929d494d97af9b76f0eedfbba8a3119e7dc4922/src/declarations.ts#L82)

***

### statusMessage

> **statusMessage**: `string`

The status message accompanying the HTTP status code (e.g., `OK`, `Not Found`).

#### Defined in

[src/declarations.ts:87](https://github.com/stonemjs/node-adapter/blob/9929d494d97af9b76f0eedfbba8a3119e7dc4922/src/declarations.ts#L87)

***

### streamFile()

> **streamFile**: () => `void` \| `Promise`\<`void`\>

A function to stream a file as the HTTP response.
Can be synchronous or asynchronous.

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/declarations.ts:99](https://github.com/stonemjs/node-adapter/blob/9929d494d97af9b76f0eedfbba8a3119e7dc4922/src/declarations.ts#L99)
