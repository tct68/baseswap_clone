import { ChainId } from '@baseswap/sdk'

import { StableSwapPool } from '../../types/pool'
import { poolMap } from './pools'

export function getStableSwapPools(chainId: ChainId): StableSwapPool[] {
  return poolMap[chainId] || []
}
