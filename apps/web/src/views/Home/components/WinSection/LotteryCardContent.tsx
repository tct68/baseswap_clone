import {
  Flex,
  Text,
  Button,
  ArrowForwardIcon,
  NextLinkFromReactRouter,
} from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import styled from 'styled-components'

const StyledLink = styled(NextLinkFromReactRouter)`
  width: 100%;
`

const LotteryCardContent = () => {
  const { t } = useTranslation()
  return (
    <>
      <Flex flexDirection="column" alignItems="center" justifyContent="center" mt="10px">
        <Text color="black" mb="15px">
          {t('Aremsoon')}
        </Text>
        <Text color="#280D5F" mb="15px">
          {t('TowerSwap Frontend & Backend Developer')}
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        <StyledLink to="https://www.linkedin.com/in/habeeb-aliu-a15b001b0" id="homepage-prediction-cta">
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

export default LotteryCardContent
