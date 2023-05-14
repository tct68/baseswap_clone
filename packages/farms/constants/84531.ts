import { baseGoerliTokens } from '@baseswap/tokens'
import { SerializedFarmConfig } from '@baseswap/farms'

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    v1pid: 0,
    lpSymbol: 'SNAP',
    lpAddress: '0xCa3d75e318cE84a5bCA0F441B89a6f0E153AAB72',
    token: baseGoerliTokens.syrup,
    quoteToken: baseGoerliTokens.wcmp,
  },
  {
    pid: 1,
    v1pid: 1,
    lpSymbol: 'SNAP-WCMP LP',
    lpAddress: '0xCF506651b80796D34085dADb1c761ebF71BB2b8d',
    token: baseGoerliTokens.tw,
    quoteToken: baseGoerliTokens.wcmp,
  },
  {
    pid: 2,
    v1pid: 2,
    lpSymbol: 'SNAP-BUSD LP',
    lpAddress: '0xa4B690F4F53caC099549e57e6309A11c79C6Bf56',
    token: baseGoerliTokens.tw,
    quoteToken: baseGoerliTokens.usdt,
  },
  {
    pid: 3,
    v1pid: 3,
    lpSymbol: 'BUSD_WCMP LP',
    lpAddress: '0x6b9dB0B7504e04E2a4E5C4B6B22bD84E9a8710fd',
    token: baseGoerliTokens.usdt,
    quoteToken: baseGoerliTokens.wcmp,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken?.serialize }))

export default farms
