import { configureScope } from '@sentry/nextjs'
import { Dispatch } from '@reduxjs/toolkit'
import { resetUserState, toggleFarmTransactionModal } from 'state/global/actions'
import { PREDICTION_TOOLTIP_DISMISS_KEY } from 'config/constants'

export const clearUserStates = (
  dispatch: Dispatch<any>,
  {
    chainId,
    newChainId,
  }: {
    chainId?: number
    newChainId?: number
  },
) => {
  dispatch(resetUserState({ chainId, newChainId }))
  dispatch(toggleFarmTransactionModal({ showModal: false }))
  configureScope((scope) => scope.setUser(null))
  window?.localStorage?.removeItem(PREDICTION_TOOLTIP_DISMISS_KEY)
}
