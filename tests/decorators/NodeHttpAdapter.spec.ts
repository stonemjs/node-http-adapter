import { Mock } from 'vitest'
import { addBlueprint } from '@stone-js/core'
import { nodeHttpAdapterBlueprint } from '../../src/options/NodeHttpAdapterBlueprint'
import { NodeHttpAdapter, NodeHttpAdapterOptions } from '../../src/decorators/NodeHttpAdapter'

/* eslint-disable @typescript-eslint/no-extraneous-class */

// Mock setClassMetadata
vi.mock('@stone-js/core')

describe('NodeHttpAdapter', () => {
  it('should call setClassMetadata with correct parameters', () => {
    (addBlueprint as Mock).mockReturnValueOnce(() => {})
    const options: NodeHttpAdapterOptions = nodeHttpAdapterBlueprint.stone.adapters[0]
    NodeHttpAdapter(options)(class {}, {} as any)
    expect(addBlueprint).toHaveBeenCalled()
  })

  it('should call setClassMetadata with default options if none are provided', () => {
    vi.mocked(addBlueprint).mockImplementation(() => {})
    NodeHttpAdapter()(class {}, {} as any)
    expect(addBlueprint).toHaveBeenCalled()
  })
})
