import React, { useEffect, useMemo, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import Page from 'components/layout/Page'
import styled from 'styled-components'
import message from 'antd/lib/message'
import { getTokenPriceUsd } from 'contexts/GlobalData'
import { useAppDispatch } from 'state'
import { getKnsPoolContract } from 'utils/contractHelpers'
import { GetWeb3Account } from 'utils/web3'
import { formatNumber } from 'utils/formatBalance'
import { PageContainerStyle } from 'components/styles'
import { getApr } from 'utils/apr'
import { useActiveWeb3React } from 'hooks'
import useIntl from 'hooks/useIntl'
import backgroundPng from 'assets/png/background.png'
import { useKnsPoolInfo, useKnsReward, usePoolLastTime, usePoolTotalStake } from 'state/hooks'
import TransactionConfirmationModal from 'components/TransactionConfirmationModal'
import PoolsCard from './components/PoolCard'
import PoolTabButtons from './components/PoolTabButtons'
import PoolsBanner from './components/PoolsBanner'
import knsStake, { InterfaceUnStake, knsUnStake, supplyContractParams } from './components/PoolCard/stake'

interface pool {
  stakeBalance: string
  earnBalance: string
}
type pools = Array<pool>



export const PoolPage = styled.div`
  background-image: url(${backgroundPng});
  background-repeat: no-repeat;
  z-index: -1;
  background-attachment: fixed;
  background-size: cover;
`;

const Pools: React.FC = () => {
  const { isExact } = useRouteMatch()
  const [stakedOnly, setStakedOnly] = useState(false)
  const stakedOnlyPools = false
  const hasStakeInFinishedPools = false
  const intl = useIntl()

  const [showConfirm, setShowConfirm] = useState(false)
  const [attemptingTxn, setAttemptingTxn] = useState(false)
  const [txHash, setTxHash] = useState('')
  const [pendingText, setPendingText] = useState('')
  const dispatch = useAppDispatch()
  const { account } = useActiveWeb3React()
  const knsInfo = useKnsPoolInfo({ account })
  const stakeBalance = knsInfo.amount
  const earnBalance = useKnsReward({ account, contract: getKnsPoolContract (GetWeb3Account())})

  const pools = [{ stakeBalance, earnBalance, id: 0 }]
  const [knsApr, setKnsApr] = useState('0')
  const knsTotalStake = usePoolTotalStake({ contract: getKnsPoolContract(GetWeb3Account()) })
  // GetWeb3Account().eth.getBlock(time).then((e) => {
  //   console.log('----getBlockTransactionCount---',e)
  // })

  const onDismiss = () => {
    setShowConfirm(false)
  }
  const handleTx = (promise: any) => {
    promise
      .on('transactionHash', (hash: string) => {
        setTxHash(hash)
      })
      .on('receipt', async (receipt: any) => {
        setAttemptingTxn(false)
      })
      .on('error', (err) => {
        console.error(err)
        message?.error('error')
        setShowConfirm(false)
      })
  }
  const onSupply = async (data: supplyContractParams) => {
    setShowConfirm(true)
    setAttemptingTxn(true)
    handleTx(knsStake(data))
  }
  const unStake = async (data: InterfaceUnStake) => {
    setShowConfirm(true)
    setAttemptingTxn(true)
    handleTx(knsUnStake(data))
  }


  useEffect(() => {
    const init = async () => {
      // const knsUsdPrice = await getTokenPriceUsd('KNS')
      // setKnsApr(getApr({ stake: parseFloat(stakeBalance), totalStake: knsTotalStake}))
      setKnsApr(getApr({ totalStake: knsTotalStake }))
      // setKnsApr(getApr({ stake: 1.8, totalStake: 18 }))
    }
    if (knsTotalStake) {
      init()
    }
  }, [knsTotalStake, stakeBalance])

  return (
    <PoolPage>
      <PageContainerStyle>
        <PoolsBanner
          title={intl('pools.OKTPOOLS')}
          describe={intl('pools.OKTPOOLSInfo')}
        />
        <Page>
          {/* <PoolTabButtons
            stakedOnly={stakedOnly}
            setStakedOnly={setStakedOnly}
            hasStakeInFinishedPools={hasStakeInFinishedPools}
          /> */}

          <OKTCard>
            {pools.map((item) => <PoolsCard
              balance={item.stakeBalance}
              knsBalance={item.earnBalance}
              onSupply={onSupply}
              unStake={unStake}
              APR={knsApr}
              totalStake={knsTotalStake}
              type="KNS"
              key={item.id}
            />)}
          </OKTCard>

          <TransactionConfirmationModal
            isOpen={showConfirm}
            onDismiss={onDismiss}
            attemptingTxn={attemptingTxn}
            hash={txHash}
            pendingText={pendingText}
            content={() => (<div />)}
          />
      </Page>
      
      </PageContainerStyle>
      </PoolPage>
  )
}

export default Pools


const CardWidth = '280px'
const OKTCard = styled.div`
width: ${CardWidth};
margin: auto;
${({ theme }) => theme.mediaQueries.sm} {
  margin: 0px;
}
.totalVolume{
  margin-top: 5px;
}
`