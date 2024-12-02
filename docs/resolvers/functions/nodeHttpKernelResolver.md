[**Node Adapter Documentation v0.0.0**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [resolvers](../README.md) / nodeHttpKernelResolver

# Function: nodeHttpKernelResolver()

> **nodeHttpKernelResolver**(`blueprint`): `LifecycleEventHandler`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Resolver function for the HTTP kernel.

This function creates an HTTP kernel, which orchestrates the handling of incoming events and outgoing responses.

## Parameters

### blueprint

`IBlueprint`\<`any`\>

The application blueprint for dependency resolution.

## Returns

`LifecycleEventHandler`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

A `Kernel` instance for managing the HTTP lifecycle.

## Defined in

[src/resolvers.ts:105](https://github.com/stonemjs/node-adapter/blob/9929d494d97af9b76f0eedfbba8a3119e7dc4922/src/resolvers.ts#L105)
