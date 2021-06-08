import BigNumber from 'bignumber.js'
import erc20 from 'config/abi/erc20.json'
import masterchefABI from 'config/abi/masterchef.json'
import multicall from 'utils/multicall'
import { BIG_TEN } from 'utils/bigNumber'
import { getAddress, getMasterChefAddress, getOKTChefAddress } from 'utils/addressHelpers'
import { FarmConfig } from 'config/constants/types'
import { DEFAULT_TOKEN_DECIMAL } from 'config'

const fetchFarms = async (farmsToFetch: FarmConfig[]) => {
  const data = await Promise.all(
    farmsToFetch.map(async (farmConfig) => {
      const lpAddress = getAddress(farmConfig.lpAddresses)
      const calls = [
        // Balance of token in the LP contract
        {
          address: getAddress(farmConfig.token.address),
          name: 'balanceOf',
          params: [lpAddress],
        },
        // Balance of quote token on LP contract
        {
          address: getAddress(farmConfig.quoteToken.address),
          name: 'balanceOf',
          params: [lpAddress],
        },
        // Balance of LP tokens in the master chef contract
        {
          address: lpAddress,
          name: 'balanceOf',
          // params: [getMasterChefAddress()],
          params: [getOKTChefAddress()]
        },
        // Total supply of LP tokens
        {
          address: lpAddress,
          name: 'totalSupply',
        },
        // Token decimals
        {
          address: getAddress(farmConfig.token.address),
          name: 'decimals',
        },
        // Quote token decimals
        {
          address: getAddress(farmConfig.quoteToken.address),
          name: 'decimals',
        },
      ]

      const [
        tokenBalanceLP,
        quoteTokenBalanceLP,
        lpTokenBalanceMC,
        lpTotalSupply,
        tokenDecimals,
        quoteTokenDecimals,
      ] = await multicall(erc20, calls) // 计算LP Token


      // Ratio in % a LP tokens that are in staking, vs the total number in circulation
      const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(new BigNumber(lpTotalSupply))
      // const lpTokenRatio = new BigNumber(10);

      // Total value in staking in quote token value
      const lpTotalInQuoteToken = new BigNumber(quoteTokenBalanceLP)
        .div(DEFAULT_TOKEN_DECIMAL)
        .times(new BigNumber(2))
        .times(lpTokenRatio)

      // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
      const tokenAmount = new BigNumber(tokenBalanceLP).div(BIG_TEN.pow(tokenDecimals)).times(lpTokenRatio) // 代币B余额
      const quoteTokenAmount = new BigNumber(quoteTokenBalanceLP) // 代币A余额
        .div(BIG_TEN.pow(quoteTokenDecimals))
        .times(lpTokenRatio)
        
        // console.log('---after multicall--', lpAddress)
        let info;
        /** tokenPriceVsQuote: 代币A/代币B = 交易对价格 */
      let totalAllocPoint;
      try {
        [info, totalAllocPoint] = await multicall(masterchefABI, [
          {
            address: getMasterChefAddress(),
            // address: getOKTChefAddress(), // OKT 合约地址
            name: 'poolInfo',
            params: [farmConfig.pid],
          },
          {
            address: getMasterChefAddress(),
            // address: getOKTChefAddress(), // OKT 合约地址
            name: 'totalAllocPoint',
          },
        ])
      } catch (e) {
        // console.log('error----------------->', e, farmConfig.pid, lpAddress)
      }
      // console.log('---multicall--', info, totalAllocPoint, lpAddress)

      const allocPoint = new BigNumber(info.allocPoint._hex)
      const poolWeight = allocPoint.div(new BigNumber(totalAllocPoint))

      return {
        ...farmConfig,
        tokenAmount: tokenAmount.toJSON(),
        quoteTokenAmount: quoteTokenAmount.toJSON(),
        lpTotalSupply: new BigNumber(lpTotalSupply).toJSON(),
        lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
        tokenPriceVsQuote: quoteTokenAmount.div(tokenAmount).toJSON(),
        poolWeight: poolWeight.toJSON(),
        multiplier: `${allocPoint.div(100).toString()}X`,
      }
    }),
  )
  return data
}

export default fetchFarms