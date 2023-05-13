import { Token } from '@baseswap/sdk'
import { Pool } from '@baseswap/uikit'
import StakeModal from '../../Modals/StakeModal'

export default Pool.withStakeActions<Token>(StakeModal)
