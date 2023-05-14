import { ChainId, ERC20Token } from '@baseswap/sdk'

export const SNAP_MAINNET = new ERC20Token(
  ChainId.BASE_GOERLI,
  '0x49Ca6d0e819E83471575bD4e140ab9a9f4e954d5',
  18,
  'TWS',
  'TowerSwap Token',
  'https://towerswap.finance/',
)

export const SNAP_TESTNET = new ERC20Token(
  ChainId.BASE_GOERLI,
  '0xCa3d75e318cE84a5bCA0F441B89a6f0E153AAB72',
  18,
  'SNAP',
  'TowerTestnet Token',
  'https://towerswap.finance/',
)

export const USDC_TESTNET = new ERC20Token(
  ChainId.BASE_GOERLI,
  '0x64544969ed7EBf5f083679233325356EbE738930',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDT_TESTNET = new ERC20Token(
  ChainId.BASE_GOERLI,
  '0x64544969ed7EBf5f083679233325356EbE738930',
  18,
  'USDT',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)


export const BUSD_BASEGOERLI = new ERC20Token(
  ChainId.BASE_GOERLI,
  '0x8a5346489C517621Fbd4E36A5E31D3B27E54bBE1',
  18,
  'BUSD',
  'Tower BUSD',
  'https://www.paxos.com/busd/',
)

export const BUSD: Record<ChainId, ERC20Token> = {
  [ChainId.BASE_GOERLI]: BUSD_BASEGOERLI,
}

export const SNAP = {
  [ChainId.BASE_GOERLI]: SNAP_TESTNET,
}

export const USDC = {
  [ChainId.BASE_GOERLI]: USDC_TESTNET,
}

export const USDT = {
  [ChainId.BASE_GOERLI]: USDC_TESTNET,
}

export const WBTC_BASE = new ERC20Token(
  ChainId.BASE_GOERLI,
  '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  8,
  'WBTC',
  'Wrapped BTC',
)
