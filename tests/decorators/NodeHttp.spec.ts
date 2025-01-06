import { Mock } from 'vitest'
import { addBlueprint } from '@stone-js/core'
import { NodeHttp, NodeHttpOptions } from '../../src/decorators/NodeHttp'
import { nodeHttpAdapterBlueprint } from '../../src/options/NodeHttpAdapterBlueprint'

/* eslint-disable @typescript-eslint/no-extraneous-class */

// Mock setClassMetadata
vi.mock('@stone-js/core')

describe('NodeHttp', () => {
  it('should call setClassMetadata with correct parameters', () => {
    (addBlueprint as Mock).mockReturnValueOnce(() => {})
    const options: NodeHttpOptions = nodeHttpAdapterBlueprint.stone.adapters[0]
    NodeHttp(options)(class {}, {} as any)
    expect(addBlueprint).toHaveBeenCalled()
  })

  it('should call setClassMetadata with default options if none are provided', () => {
    vi.mocked(addBlueprint).mockImplementation(() => {})
    NodeHttp()(class {}, {} as any)
    expect(addBlueprint).toHaveBeenCalled()
  })
})
