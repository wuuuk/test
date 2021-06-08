import farmTokens from './farmTokens';
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  // {
  //   pid: 0,
  //   lpSymbol: 'KEYNE',
  //   lpAddresses: {
  //     65: '0x1385e693b2b5b9942e18377c9139c43a72d16c5c',
  //     56: '',
  //   },
  //   token: farmTokens.okt,
  //   quoteToken: farmTokens.cake,
  // },
  /** KNS-OKT */
  {
    pid: 5,
    lpSymbol: 'KNS-OKT LP',
    multiplier: '40X',
    lpAddresses: {
      // 65: '0x8896c1E850266e93Ea4543034fb2c6479DE80db6',
      65: '0x8b61e6513233b2c1d2d7cdabd7d6423cace832b3',
      56: '',
    },
    token: farmTokens.kns,
    quoteToken: farmTokens.okt,
  },
  // /** OKT-USDT */
  // {
  //   pid: 3,
  //   lpSymbol: 'OKT-USDT LP',
  //   multiplier: '8X',
  //   lpAddresses: {
  //     65: '0xD036883465613481b275493cf1034DB8f33555B6',
  //     // 65: '0x9E5739652271b0aE5F0dA04a3A718C9B8ce041e6',
  //     56: '',
  //   },
  //   token: farmTokens.okt,
  //   quoteToken: farmTokens.usdt,
  // },
  // /** SODA-OKB */
  // {
  //   pid: 2,
  //   lpSymbol: 'KNS-OKB LP',
  //   multiplier: '40X',
  //   lpAddresses: {
  //     65: '0x340F0355DEd2DBf7c665CdD39f5A8cae3aC426bD',
  //     // 65: '0x8b61e6513233b2c1d2d7cdabd7d6423cace832b3',
  //     56: '',
  //   },
  //   token: farmTokens.kns,
  //   quoteToken: farmTokens.okb,
  // },
  // /** OKB-USDT */
  // {
  //   pid: 4,
  //   lpSymbol: 'OKB-USDT LP',
  //   multiplier: '8X',
  //   lpAddresses: {
  //     65: '0xe5f8F211B40e9DdC81C819364244c267f9b69f2F',
  //     // 65: '0x9E5739652271b0aE5F0dA04a3A718C9B8ce041e6',
  //     56: '',
  //   },
  //   token: farmTokens.okb,
  //   quoteToken: farmTokens.usdt,
  // },

]

export default farms
