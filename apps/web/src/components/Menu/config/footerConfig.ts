import { FooterLinkType } from '@baseswap/uikit'
import { ContextApi } from '@baseswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://towerswap.gitbook.io/towerswap-finance/team',
      },
      {
        label: t('Whitepaper'),
        href: 'https://towerswap.gitbook.io/towerswap-finance',
      },
      {
        label: t('Community'),
        href: 'https://t.me/towerfi',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Guides'),
        href: 'https://towerswap.gitbook.io/towerswap-finance',
      },
    ],
  },
]
