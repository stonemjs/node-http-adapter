[**Node Adapter Documentation v0.0.21**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [options/NodeHttpAdapterBlueprint](../README.md) / NodeHttpAdapterConfig

# Interface: NodeHttpAdapterConfig

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:41](https://github.com/stonemjs/node-http-adapter/blob/536e0dac6f971d10122453661aa60ac1371c6317/src/options/NodeHttpAdapterBlueprint.ts#L41)

Represents the NodeHttpAdapter configuration options for the application.

## Extends

- `Partial`\<`AppConfig`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>\>

## Properties

### adapter?

> `optional` **adapter**: `Partial`\<`AdapterConfig`\>

Defined in: core/dist/index.d.ts:500

Current Adapter configurations for the application.
This key allow you to specify the current adapter with the alias key.

#### Inherited from

`Partial.adapter`

***

### adapters

> **adapters**: [`NodeHttpAdapterAdapterConfig`](NodeHttpAdapterAdapterConfig.md)[]

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:43](https://github.com/stonemjs/node-http-adapter/blob/536e0dac6f971d10122453661aa60ac1371c6317/src/options/NodeHttpAdapterBlueprint.ts#L43)

Adapter configurations for the application.

#### Overrides

`Partial.adapters`

***

### aliases?

> `optional` **aliases**: `Record`\<`string`, `any`\>

Defined in: core/dist/index.d.ts:535

Class aliases to be registered when the application starts.
These aliases provide shorthand references to commonly used classes.

#### Inherited from

`Partial.aliases`

***

### application?

> `optional` **application**: `MetaApplication`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Defined in: core/dist/index.d.ts:552

The main application entry point module in declarative context.
It is the class decorated with the @StoneApp() decorator.
Note: It does not exist in imperative context.

#### Inherited from

`Partial.application`

***

### builder?

> `optional` **builder**: `BuilderConfig`

Defined in: core/dist/index.d.ts:495

Configuration options for building the application, including middleware and pipe priorities.

#### Inherited from

`Partial.builder`

***

### debug?

> `optional` **debug**: `boolean`

Defined in: core/dist/index.d.ts:479

Determines if the application is in debug mode.
When enabled, detailed error messages with stack traces will be shown.

#### Inherited from

`Partial.debug`

***

### env?

> `optional` **env**: `Environment`

Defined in: core/dist/index.d.ts:474

The current environment in which the application is running.
Possible values are development, production, and test.

#### Inherited from

`Partial.env`

***

### fallback\_locale?

> `optional` **fallback\_locale**: `string`

Defined in: core/dist/index.d.ts:491

The fallback locale used when a translation for the default locale is unavailable.

#### Inherited from

`Partial.fallback_locale`

***

### handler?

> `optional` **handler**: `MixedEventHandler`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Defined in: core/dist/index.d.ts:546

The main handler function for the application.
This is the main function that handles incoming requests.
Every Stone.js application must have an handler function.

#### Inherited from

`Partial.handler`

***

### http

> **http**: `Partial`\<`HttpConfig`\>

Defined in: [node-http-adapter/src/options/NodeHttpAdapterBlueprint.ts:42](https://github.com/stonemjs/node-http-adapter/blob/536e0dac6f971d10122453661aa60ac1371c6317/src/options/NodeHttpAdapterBlueprint.ts#L42)

***

### kernel?

> `optional` **kernel**: `KernelConfig`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Defined in: core/dist/index.d.ts:508

Global middleware settings for the application kernel.

#### Inherited from

`Partial.kernel`

***

### listeners?

> `optional` **listeners**: `MetaEventListener`[]

Defined in: core/dist/index.d.ts:521

Event listeners to be automatically registered when the application starts.
This allows you to specify functions to listen for specific events.

#### Inherited from

`Partial.listeners`

***

### liveConfigurations?

> `optional` **liveConfigurations**: `MixedConfiguration`\<`any`\>[]

Defined in: core/dist/index.d.ts:558

Live configurations are loaded at each request.
By default, configurations are loaded once when the application starts.
This is useful for defining dynamic configurations that do not require a restart to apply changes.

#### Inherited from

`Partial.liveConfigurations`

***

### locale?

> `optional` **locale**: `string`

Defined in: core/dist/index.d.ts:487

The default locale for the application.

#### Inherited from

`Partial.locale`

***

### logger?

> `optional` **logger**: `LoggerConfig`

Defined in: core/dist/index.d.ts:512

Logging settings, including the logger instance and error reporting configurations.

#### Inherited from

`Partial.logger`

***

### name?

> `optional` **name**: `string`

Defined in: core/dist/index.d.ts:469

The name of the application.

#### Inherited from

`Partial.name`

***

### providers?

> `optional` **providers**: `MixedServiceProvider`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>[]

Defined in: core/dist/index.d.ts:530

Service providers to be automatically loaded for each request to the application.

#### Inherited from

`Partial.providers`

***

### secret?

> `optional` **secret**: `string`

Defined in: core/dist/index.d.ts:540

A secret key used for encryption purposes throughout the application.
This key should be kept secure.

#### Inherited from

`Partial.secret`

***

### services?

> `optional` **services**: `MetaService`[]

Defined in: core/dist/index.d.ts:516

Services to be automatically registered when the application starts.

#### Inherited from

`Partial.services`

***

### subscribers?

> `optional` **subscribers**: `MixedEventSubscriber`[]

Defined in: core/dist/index.d.ts:526

Subscribers to be automatically registered when the application starts.
Subscribers are used for handling and responding to events.

#### Inherited from

`Partial.subscribers`

***

### timezone?

> `optional` **timezone**: `string`

Defined in: core/dist/index.d.ts:483

The default timezone for the application.

#### Inherited from

`Partial.timezone`
