import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@baseswap/uikit'
import Page from 'components/Layout/Page'
import { useTranslation } from '@baseswap/localization'
import Link from 'next/link'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const NotFound = ({ statusCode = 404 }: { statusCode?: number }) => {
  const { t } = useTranslation()

  return (
    <Page>
      <StyledNotFound>
        <LogoIcon width="64px" mb="8px" />
        <Heading scale="xxl">{statusCode}</Heading>
        <Text mb="16px">{t('We are sorry, The page under development.')}</Text>
        <Link href="/swap" passHref>
          <Button as="a" scale="sm">
            {t('Back Home')}
          </Button>
        </Link>
      </StyledNotFound>
    </Page>
  )
}

export default NotFound
