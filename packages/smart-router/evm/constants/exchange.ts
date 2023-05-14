import { ChainId, Token, WNATIVE } from '@baseswap/sdk'
import { BUSD, USDC, USDT } from '@baseswap/tokens'

import { ChainMap, ChainTokenList } from '../types'

export const ROUTER_ADDRESS: ChainMap<string> = {
  [ChainId.BASE_GOERLI]: '0xCa3d75e318cE84a5bCA0F441B89a6f0E153AAB72',
}

export const STABLE_SWAP_INFO_ADDRESS: ChainMap<string> = {
  [ChainId.BASE_GOERLI]: '',
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [ChainId.BASE_GOERLI]: [WNATIVE[ChainId.BASE_GOERLI], USDC[ChainId.BASE_GOERLI], BUSD[ChainId.BASE_GOERLI]],
}

/**
 * Additional bases for specific tokens
 * @example { [WBTC.address]: [renBTC], [renBTC.address]: [WBTC] }
 */
export const ADDITIONAL_BASES: {
  [chainId in ChainId]?: { [tokenAddress: string]: Token[] }
} = {
}


export const CUSTOM_BASES: {
  [chainId in ChainId]?: { [tokenAddress: string]: Token[] }
} = {
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  [ChainId.BASE_GOERLI]: [USDC[ChainId.BASE_GOERLI], BUSD[ChainId.BASE_GOERLI], USDT[ChainId.BASE_GOERLI]],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  [ChainId.BASE_GOERLI]: [USDC[ChainId.BASE_GOERLI], WNATIVE[ChainId.BASE_GOERLI], BUSD[ChainId.BASE_GOERLI]],
}

export const PINNED_PAIRS: {
  readonly [chainId in ChainId]?: [Token, Token][]
} = {
  [ChainId.BASE_GOERLI]: [
    [WNATIVE[ChainId.BASE_GOERLI], USDC[ChainId.BASE_GOERLI]],
  ]
}
