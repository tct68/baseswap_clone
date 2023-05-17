import { ChainId, WBNB, ERC20Token } from '@pancakeswap/sdk'
import { BUSD_CMPTESTNET, LINE_TESTNET } from './common'

export const testnetTokens = {
  weth: WBNB[ChainId.LINEA_TESTNET],
  line: LINE_TESTNET,
  syrup: new ERC20Token(
    ChainId.LINEA_TESTNET,
    '0x2DD80bE5B44cdcB3f39dEb9cE483c8f67191f478',
    18,
    'Syrup',
    'SyrupBar Token',
    'https://towerswap.finance',
  ),
  usdt: new ERC20Token(
    ChainId.LINEA_TESTNET,
    '0x275a59C1E7710857DD165FDd693eEddc95Fffbae',
    18,
    'USDT',
    'Testnet USD',
    'https://lineswap.exchange',
  ),
}
