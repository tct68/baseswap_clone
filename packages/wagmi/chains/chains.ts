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

const bscExplorer = { name: 'BscScan', url: 'https://bscscan.com' }

export const cmpTestnet: Chain = {
  id: 512512,
  name: 'Caduceus Testnet',
  network: 'cmp_testnet',
  rpcUrls: {
    public: 'https://galaxy.block.caduceus.foundation',
    default: 'https://galaxy.block.caduceus.foundation',
  },
  blockExplorers: {
    default: { name: 'CMP_Testnet Explorer', url: 'https://galaxy.scan.caduceus.foundation' },
  },
  nativeCurrency: {
    name: 'Cadeceus',
    symbol: 'CMP',
    decimals: 18,
  },
  multicall: {
    address: '0x3dc18345e131a673e11401696a35e7927673eeea',
    blockCreated: 10275844,
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
    address: '0x4200000000000000000000000000000000000006',
    blockCreated: 10275844,
  },
}

export { mainnet, goerli, localhost }
