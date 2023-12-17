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

[src/resolvers.ts:103](https://github.com/stonemjs/node-adapter/blob/ddd3db262e296a3076ca003f1374ffc8cbccff6b/src/resolvers.ts#L103)
