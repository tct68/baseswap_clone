import { useMemo } from 'react'
import { ChainId } from '@pancakeswap/sdk'
import { useActiveIfoWithBlocks } from 'hooks/useActiveIfoWithBlocks'
import { useChainCurrentBlock } from 'state/block/hooks'
import { getStatus } from 'views/Ifos/hooks/helpers'
import { useCompetitionStatus } from './useCompetitionStatus'
import { useVotingStatus } from './useVotingStatus'

export const useMenuItemsStatus = (): Record<string, string> => {
  const currentBlock = useChainCurrentBlock(ChainId.BASE_GOERLI)
  const activeIfo = useActiveIfoWithBlocks()
  const competitionStatus = useCompetitionStatus()
  const votingStatus = useVotingStatus()

  const ifoStatus =
    currentBlock && activeIfo && activeIfo.endBlock > currentBlock
      ? getStatus(currentBlock, activeIfo.startBlock, activeIfo.endBlock)
      : null

  return useMemo(() => {
    return {
      '/competition': competitionStatus,
      '/ifo': ifoStatus === 'coming_soon' ? 'soon' : ifoStatus,
      ...(votingStatus && {
        '/voting': 'vote_now',
      }),
    }
  }, [competitionStatus, ifoStatus, votingStatus])
}
