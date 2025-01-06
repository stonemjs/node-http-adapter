import { Config } from '@stone-js/config'
import { IBlueprint } from '@stone-js/core'
import { NodeHttpAdapter } from '../src/NodeHttpAdapter'
import { nodeHttpAdapterResolver } from '../src/resolvers'

const mockBlueprint: IBlueprint = Config.create()

describe('NodeHttpAdapter Resolvers', () => {
  describe('nodeHttpAdapterResolver', () => {
    it('should create a Kernel instance with the correct configuration', () => {
      const adapter = nodeHttpAdapterResolver(mockBlueprint)
      expect(adapter).toBeInstanceOf(NodeHttpAdapter)
    })
  })
})
