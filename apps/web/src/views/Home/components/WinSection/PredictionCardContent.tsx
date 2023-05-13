import styled from 'styled-components'
import {
  ArrowForwardIcon,
  Button,
  Flex,
  Text,
  NextLinkFromReactRouter,
} from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'

const StyledLink = styled(NextLinkFromReactRouter)`
  width: 100%;
`

const PredictionCardContent = () => {
  const { t } = useTranslation()

  return (
    <>
      <Flex flexDirection="column" alignItems="center" justifyContent="center" mt="10px">
        <Text color="#280D5F" mb="15px">
          {t('Oky')}
        </Text>
        <Flex alignItems="center" justifyContent="center">
          <Text color="#280D5F" mb="15px">
            {t('TowerSwap Marketing & Parnership Staff')}
          </Text>
        </Flex>
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        <StyledLink to="https://t.me/mailu03" id="homepage-prediction-cta">
          <Button width="100%">
            <Text bold color="invertedContrast">
              {t('Profile')}
            </Text>
            <ArrowForwardIcon ml="4px" color="invertedContrast" />
          </Button>
        </StyledLink>
      </Flex>
    </>
  )
}

export default PredictionCardContent
