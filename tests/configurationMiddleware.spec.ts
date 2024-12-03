import { Mock } from 'vitest'
import { NODE_HTTP_PLATFORM } from '../src/constants'
import { ConfigContext, IBlueprint } from '@stone-js/core'
import { nodeHttpErrorHandlerResolver } from '../src/resolvers'
import { SetNodeHttpAdapterConfigMiddleware } from '../src/middleware/configurationMiddleware'

describe('Node Http Adapter Config Middlewares', () => {
  let mockNext: Mock
  let mockBlueprint: Partial<IBlueprint>

  beforeEach(() => {
    mockBlueprint = {
      get: vi.fn(),
      set: vi.fn()
    }
    mockNext = vi.fn((context) => context.blueprint)
  })

  describe('SetNodeHttpAdapterConfigMiddleware', () => {
    it('should set nodeHttpErrorHandlerResolver when platform is NODE_HTTP_PLATFORM', async () => {
      mockBlueprint.get = vi.fn().mockReturnValue(NODE_HTTP_PLATFORM)

      const context: ConfigContext = {
        modules: [],
        blueprint: mockBlueprint as IBlueprint
      }

      const result = await SetNodeHttpAdapterConfigMiddleware(context, mockNext)

      expect(result).toEqual(mockBlueprint)
      expect(mockBlueprint.get).toHaveBeenCalledWith('stone.adapter.platform')
      expect(mockNext).toHaveBeenCalledWith({ modules: context.modules, blueprint: mockBlueprint })
      expect(mockBlueprint.set).toHaveBeenCalledWith('stone.errorHandler.resolver', nodeHttpErrorHandlerResolver)
    })

    it('should not set anything when platform is not NODE_HTTP_PLATFORM', async () => {
      mockBlueprint.get = vi.fn().mockReturnValue('OTHER_PLATFORM')

      const context: ConfigContext = {
        modules: [],
        blueprint: mockBlueprint as IBlueprint
      }

      const result = await SetNodeHttpAdapterConfigMiddleware(context, mockNext)

      expect(result).toEqual(mockBlueprint)
      expect(mockBlueprint.set).not.toHaveBeenCalled()
      expect(mockBlueprint.get).toHaveBeenCalledWith('stone.adapter.platform')
      expect(mockNext).toHaveBeenCalledWith({ modules: context.modules, blueprint: mockBlueprint })
    })
  })
})
