import { useChainCurrentBlock } from 'state/block/hooks'
import { useActiveIfoWithBlocks } from 'hooks/useActiveIfoWithBlocks'
import { ChainId } from '@baseswap/sdk'

const useIsRenderIfoBanner = () => {
  const currentBlock = useChainCurrentBlock(ChainId.BASE_GOERLI)

  const activeIfoWithBlocks = useActiveIfoWithBlocks()

  return !!(currentBlock && activeIfoWithBlocks && activeIfoWithBlocks.endBlock > currentBlock)
}

export default useIsRenderIfoBanner
