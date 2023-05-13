import { getFarmsPriceHelperLpFiles } from '@baseswap/farms/constants/priceHelperLps/getFarmsPriceHelperLpFiles'
import { ChainId } from '@baseswap/sdk'
import PoolsBaseGoerliPriceHelper from './pools/84531'

export { getFarmsPriceHelperLpFiles }

export const getPoolsPriceHelperLpFiles = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.BASE_GOERLI:
      return PoolsBaseGoerliPriceHelper
    default:
      return []
  }
}
