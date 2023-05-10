import { ChainId, WBNB, ERC20Token } from '@pancakeswap/sdk'
import { BUSD_CMPTESTNET, TOWER_TESTNET } from './common'

export const zetaTestnetTokens = {
  wcmp: WBNB[ChainId.ZETA_TESTNET],
  tw: TOWER_TESTNET,
  syrup: new ERC20Token(
    ChainId.ZETA_TESTNET,
    '0x2DD80bE5B44cdcB3f39dEb9cE483c8f67191f478',
    18,
    'Syrup',
    'SyrupBar Token',
    'https://towerswap.finance',
  ),
  usdt: new ERC20Token(
    ChainId.ZETA_TESTNET,
    '0x55A9f6AA17886DC17E407b3Ec4570f0CA8b9704a',
    6,
    'USDT',
    'Tower USDT',
    'https://towerswap.finance',
  ),
  busd: BUSD_CMPTESTNET,
}
