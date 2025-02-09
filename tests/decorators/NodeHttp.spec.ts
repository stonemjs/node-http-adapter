import { Mock } from 'vitest'
import { addBlueprint } from '@stone-js/core'
import { NodeHttp, NodeHttpOptions } from '../../src/decorators/NodeHttp'
import { nodeHttpAdapterBlueprint } from '../../src/options/NodeHttpAdapterBlueprint'

/* eslint-disable @typescript-eslint/no-extraneous-class */

// Mock setClassMetadata
vi.mock('@stone-js/core', async (importOriginal) => {
  const actual: any = await importOriginal()
  return {
    ...actual,
    addBlueprint: vi.fn(() => {}),
    classDecoratorLegacyWrapper: (fn: Function) => {
      fn()
      return fn
    }
  }
})

describe('NodeHttp', () => {
  it('should call addBlueprint with correct parameters', () => {
    (addBlueprint as Mock).mockReturnValueOnce(() => {})
    const options: NodeHttpOptions = nodeHttpAdapterBlueprint.stone.adapters[0]
    NodeHttp(options)(class {})
    expect(addBlueprint).toHaveBeenCalled()
  })

  it('should call addBlueprint with default options if none are provided', () => {
    vi.mocked(addBlueprint).mockImplementation(() => {})
    NodeHttp()(class {})
    expect(addBlueprint).toHaveBeenCalled()
  })
})
