import { mainnet, goerli, localhost } from 'wagmi/chains'
import { Chain } from 'wagmi'
import { ChainId } from '@pancakeswap/sdk'

export const zeta: Chain = {
  id: 7001,
  name: 'ZetaChain Testnet',
  network: 'ZETA TESTNET',
  rpcUrls: {
    default: 'https://api.athens2.zetachain.com/evm',
  },
  nativeCurrency: { name: 'Zetachain', symbol: 'ZETA', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'ZetaScan',
      url: 'https://explorer.zetachain.com/',
    },
  },
}

export const baseGoerli: Chain = {
  id: ChainId.BASE_GOERLI,
  name: 'Base Goerli',
  network: 'base_goerli',
  rpcUrls: {
    public: 'https://goerli.base.org',
    default: 'https://goerli.base.org',
  },
  blockExplorers: {
    default: { name: 'Base Goerli Explorer', url: 'https://goerli.basescan.org' },
  },
  nativeCurrency: {
    name: 'Wrapped ETH',
    symbol: 'ETH',
    decimals: 18,
  },
  multicall: {
    address: '0xca11bde05977b3631167028862be2a173976ca11',
    blockCreated: 4244264,
  },
}

export { mainnet, goerli, localhost }
