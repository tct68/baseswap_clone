import { Heading, Flex, Text, ChartIcon, CommunityIcon, SwapIcon } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import useTheme from 'hooks/useTheme'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
import GradientLogo from '../GradientLogoSvg'

const Stats = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const UsersCardData: IconCardData = {
    icon: <CommunityIcon color="secondary" width="36px" />,
  }

  const TradesCardData: IconCardData = {
    icon: <SwapIcon color="primary" width="36px" />,
  }

  const StakedCardData: IconCardData = {
    icon: <ChartIcon color="failure" width="36px" />,
  }

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <GradientLogo height="100px" width="100px" mb="24px" />
      <Heading textAlign="center" color="#42fff4" scale="xl" mb="32px">
        {t('Tower Token')}
      </Heading>
      <Text textAlign="center" color="textSubtle">
        {t('Tower token is the main token token in TowerSwap')}
      </Text>

      <Text textAlign="center" color="textSubtle" bold mb="32px">
        {t('')}
      </Text>

      <Flex flexDirection={['column', null, null, 'row']}>
        <IconCard {...UsersCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '16px']}>
          <StatCardContent
            headingText={t('Name')}
            bodyText={t('TowerSwap Token')}
            highlightColor={theme.colors.secondary}
          />
        </IconCard>
        <IconCard {...TradesCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent headingText={t('Symbol')} bodyText={t('TW')} highlightColor={theme.colors.primary} />
        </IconCard>
        <IconCard {...StakedCardData}>
          <StatCardContent
            headingText={t('Supply')}
            bodyText={t('12.000.000 TW')}
            highlightColor={theme.colors.failure}
          />
        </IconCard>

        <Text textAlign="center" color="textSubtle" bold mb="32px">
          {t('')}
        </Text>
      </Flex>
      <Flex flexDirection={['column', null, null, 'row']}>
        <IconCard {...UsersCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent headingText={t('Decimal')} bodyText={t('18')} highlightColor={theme.colors.secondary} />
        </IconCard>
        <IconCard {...TradesCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent headingText={t('Chain')} bodyText={t('Caduceus')} highlightColor={theme.colors.primary} />
        </IconCard>
        <IconCard {...StakedCardData}>
          <StatCardContent
            headingText={t('Function')}
            bodyText={t('Utility Token')}
            highlightColor={theme.colors.failure}
          />
        </IconCard>
      </Flex>
    </Flex>
  )
}

export default Stats
