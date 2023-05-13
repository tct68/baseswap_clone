import { ChainId } from '@baseswap/sdk'

import { StableSwapPool } from '../../types/pool'
import { pools as baseGoerliPools } from './84531'

export type StableSwapPoolMap<TChainId extends number> = {
  [chainId in TChainId]: StableSwapPool[]
}

export const poolMap: StableSwapPoolMap<ChainId> = {
  [ChainId.BASE_GOERLI]: baseGoerliPools,
}
