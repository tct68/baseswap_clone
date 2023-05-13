import { ERC20Token } from './entities/token'

export enum ChainId {
  BASE_GOERLI=84531
}

export const FACTORY_ADDRESS = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73'

export const FACTORY_ADDRESS_MAP: Record<number, string> = {
  [ChainId.BASE_GOERLI]: '0xa063E8a409fc5AA09244eb546341D8d160e715A8',
}
export const INIT_CODE_HASH = '0xcfa40512babed4581be9a3ceaeae5aa7d1e8934bfe7d81aff4f832f6418e0f9d'

export const INIT_CODE_HASH_MAP: Record<number, string> = {
  [ChainId.BASE_GOERLI]: '0xcfa40512babed4581be9a3ceaeae5aa7d1e8934bfe7d81aff4f832f6418e0f9d',
}

export const WETH9 = {
  [ChainId.BASE_GOERLI]: new ERC20Token(
    ChainId.BASE_GOERLI,
    '0x4200000000000000000000000000000000000016',
    18,
    'ETH',
    'Wrapped ETH',
    'https://www.zetachain.org'
  ),
}

export const WBNB = {
  
}

export const WNATIVE: Record<number, ERC20Token> = {
  [ChainId.BASE_GOERLI]: WETH9[ChainId.BASE_GOERLI],
}

export const NATIVE: Record<
  number,
  {
    name: string
    symbol: string
    decimals: number
  }
> = {
  [ChainId.BASE_GOERLI]: { name: 'ETH', symbol: 'ETH', decimals: 18 },
}
