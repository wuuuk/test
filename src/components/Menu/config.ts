import { MenuEntry } from 'uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/home',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    // status: {
    //   text: 'MIGRATE',
    //   color: 'warning',
    // },
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },

  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://keyneswap-info.ccian.cc',
        target: '_blank'
      },
      {
        label: 'Tokens',
        href: 'https://keyneswap-info.ccian.cc/tokens',
        target: '_blank'
      },
      {
        label: 'Pairs',
        href: 'https://keyneswap-info.ccian.cc/pairs',
        target: '_blank'
      },
      {
        label: 'Accounts',
        href: 'https://keyneswap-info.ccian.cc/accounts',
        target: '_blank'
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '/ifo',
  } ,
  {
    label: 'More',
    icon: 'MoreIcon',
    items:[
      {
        label: 'Github',
        href: 'https://github.com/KeyneSwap/swap',
        target: '_blank'
      },
      {
        label: 'Docs',
        href: 'https://github.com/KeyneSwap/swap/blob/dev/docs/KeyneSwepDocs.pdf',
        target: '_blank'
      },
      {
        label: 'Blog',
        href: 'https://github.com/KeyneSwap/swap',
        target: '_blank'
      }
    ]
  } 
]

export default config
