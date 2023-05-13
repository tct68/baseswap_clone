import { Token } from '@baseswap/sdk'
import { Modal, Box, InjectedModalProps } from '@baseswap/uikit'
import ImportToken from 'components/SearchModal/ImportToken'
import { useTranslation } from '@baseswap/localization'

interface Props extends InjectedModalProps {
  tokens: Token[]
  onCancel: () => void
}

const ImportTokenWarningModal: React.FC<React.PropsWithChildren<Props>> = ({ tokens, onDismiss, onCancel }) => {
  const { t } = useTranslation()
  return (
    <Modal
      title={t('Import Token')}
      onDismiss={() => {
        onDismiss?.()
        onCancel()
      }}
    >
      <Box maxWidth="380px">
        <ImportToken tokens={tokens} handleCurrencySelect={onDismiss} />
      </Box>
    </Modal>
  )
}

export default ImportTokenWarningModal
