import { ChainId, CurrencyAmount } from '@baseswap/sdk'
import { deserializeToken } from '@baseswap/token-lists'

import { StableSwapPair } from './types'
import { createStableSwapPair } from './stableSwap'
import { getStableSwapPools } from './constants/stableSwap'

export function getStableSwapPairs(chainId: ChainId): StableSwapPair[] {
  const pools = getStableSwapPools(chainId)
  return pools.map(({ token, quoteToken, stableSwapAddress }) => {
    const token0 = deserializeToken(token)
    const token1 = deserializeToken(quoteToken)
    return createStableSwapPair(
      {
        token0,
        token1,
        reserve0: CurrencyAmount.fromRawAmount(token0, '0'),
        reserve1: CurrencyAmount.fromRawAmount(token1, '0'),
      },
      stableSwapAddress,
    )
  })
}
