import { ChainId } from '@baseswap/sdk'

export const verifyBscNetwork = (chainId: number) => {
  return chainId === ChainId.BASE_GOERLI || chainId === ChainId.BASE_GOERLI
}
