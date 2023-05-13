import { ChainId } from '@baseswap/sdk'
import FarmsBaseGoerliPriceHelper from './84531'

export const getFarmsPriceHelperLpFiles = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.BASE_GOERLI:
      return FarmsBaseGoerliPriceHelper
    default:
      return []
  }
}
