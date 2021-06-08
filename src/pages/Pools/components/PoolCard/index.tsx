import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { BottomGrouping } from 'components/swap/styleds'
import { ETHER } from '@keyneswap-libs/sdk'
import { Button, Flex, Input, Text } from 'uikit'
import Modal from 'components/Modal'
import { baseColors } from 'uikit/theme/colors'
import ConnectWalletButton from 'components/ConnectWalletButton'
import styled from 'styled-components'
import Title from 'antd/lib/typography/Title'
import { Contract } from 'web3-eth-contract';
import AppBody from 'pages/AppBody'
import Row, { AutoRow, RowBetween } from 'components/Row'
import { ContentHeader, Section, Wrapper as HelperWrapper } from 'components/TransactionConfirmationModal/helpers'
import { useActiveWeb3React } from 'hooks'
import { useKnsBalance } from 'state/hooks'
import { PLATFORM_COIN } from 'utils/config'
import { PlusOutlined } from '@ant-design/icons'
import { formatNumber } from 'utils/formatBalance'
import { GetWeb3Account } from 'utils/web3'
import { KNS_ADDRESS } from 'config/constants/contracts'
import { getKnsPoolContract } from 'utils/contractHelpers'
import { getKnsPoolAddress, get_KNS_address, get_OKB_address } from 'utils/addressHelpers'
import { APPROVE_MAX, calcInputRange, getContract, getHasApprove } from 'utils'
import tokens from 'config/constants/tokens';
import { useAllTokenBalances, useCurrencyBalances } from 'state/wallet/hooks'
import { AppState } from 'state'
import { useAllowance } from 'hooks/useAllowance'
import BigNumber from 'bignumber.js'
import kns_kns from 'assets/svg/kns_kns.svg'
import useIntl from 'hooks/useIntl'
import { knsUnStake, InterfaceUnStake, supplyContractParams } from './stake'
import { InitKnsPoolContract, InitKnsContract } from './contract'
import CardFooter from './CardFooter'

type onSupply = (params: supplyContractParams) => Promise<void>
type unStake = (data: InterfaceUnStake) => Promise<void>
interface props {
  type?: 'KNS';
  balance: string;
  knsBalance: string;
  onSupply: onSupply;
  unStake: unStake;
  APR: string;
  totalStake: number;
}


let handleType: 'supply' | 'unStake' | '' = ''
let inputValue = ''
/**
 * frist mine
 * @param param0 {type balance knsBalance}
 * @returns JSX
 */
export default function PoolsCard ({ type = 'KNS', balance = '', knsBalance, onSupply, unStake, APR, totalStake }: props) {
  const { account } = useActiveWeb3React()
  const intl = useIntl()
  // const relevantTokenBalances = useCurrencyBalances(account ?? undefined, [ETHER])[0]
  // const tokenAllBalance = useAllTokenBalances()
  const stakeBalance = useKnsBalance({ account })
  // const currency = relevantTokenBalances?.currency
  const contract: { KNS: Contract; } = {
    KNS: getKnsPoolContract(GetWeb3Account()),
  }
  const GO_APPROVE_CONTRACT = InitKnsContract()
  const fristMine = useSelector((state: AppState) => state.fristMine)
  const globalKnsBalance: string | void = fristMine.knsBalance[KNS_ADDRESS()[type]] ?? '0'
  const item = {
    title: `${type} POOL`,
    stakeText: `${balance} ${type}`,
    earn: formatNumber(parseFloat(knsBalance)),
    apr: `${APR}%`,
  }
  const _onSupply = () => {
    handleType = 'supply'
    setIsOpenModel(true)
    initInput()
  }
  const onUnstake = () => {
    handleType = 'unStake'
    setIsOpenModel(true)
    initInput()
  }

  const allowance: BigNumber = useAllowance(GO_APPROVE_CONTRACT, getKnsPoolAddress())
  const hasApprove: boolean = getHasApprove(allowance)

  const onApprove = () => {
    GO_APPROVE_CONTRACT.methods.approve(getKnsPoolAddress(), APPROVE_MAX).send({ from: account })
  }

  const [isOpenModel, setIsOpenModel] = useState(false)
  const onDismissModel = () => {
    setIsOpenModel(false)
  }
  const getAmount = () => {
    const amount: number = parseFloat(inputValue)
    return amount
  }
  const onConfirm = async () => {
    if (handleType === 'supply') {
      const amount: number = getAmount()
      const decimals: number = parseInt(await GO_APPROVE_CONTRACT.methods.decimals().call())
      onSupply({
        contract: contract[type],
        amount,
        account,
        decimals
      })
    }
    if (handleType === 'unStake') {
      const amount: number = getAmount()
      unStake({ contract: contract[type], amount, account })
    }
    setIsOpenModel(false)
  }
  const [jsxInputValue, setJsxInputValue] = useState('')
  const onInputChange = (v: { target: { value: string } }) => {
    inputValue = v.target.value
    setJsxInputValue(inputValue)
    // TODO error handle
  }

  const currencyBalance = stakeBalance
  const _balance = Number.isNaN(Number(currencyBalance)) ? '0.000' : parseFloat(currencyBalance)?.toFixed(3)
  const availbleBalance = _balance.substring(0, _balance.length - 1)
  const tipsBalance = handleType === 'supply' ? (availbleBalance ?? '0.00') : balance ?? '0.00'

  const confirmDisabled = calcInputRange({ value: jsxInputValue, max: tipsBalance })
  const onMax = () => {
    if (handleType === 'supply') {
      inputValue = availbleBalance
    }
    if (handleType === 'unStake') {
      inputValue = balance
    }
    setJsxInputValue(inputValue)
  }
  const initInput = () => {
    inputValue = ''
    setJsxInputValue(inputValue)
  }
  useEffect(initInput, [])

  const onCompound = () => {
    onSupply({
      contract: contract[type],
      amount: parseFloat(knsBalance),
      account,
      decimals: 18
    })
  }

  // const { toastError, toastSuccess } = useToast()
  const onHandleClaim = async () => {
    onSupply({
      contract: contract[type],
      amount: 0,
      account,
      decimals: 18
    })
  }


  return <HeadMineAppBody>
    <AppBody>
      <Wrapper>
        <CardTitle>{item.title}</CardTitle>
        <RowBetween>
          <img width={56} src={kns_kns} alt={`$${PLATFORM_COIN}-${type}`} />
          {parseFloat(item.earn) ? (
            <ClaimButtonStyle onClick={onHandleClaim} type="button"><div>{intl('farms.harvest')}</div></ClaimButtonStyle>
          ) : (
            <ClaimButtonStyle type="button"><div style={{background: '#E0E0E0', color: '#fff'}}>{intl('farms.harvest')}</div></ClaimButtonStyle>
           )}
        </RowBetween>
        <RowBetween>
          <div>
            <Text fontSize="22px" className="earn">{item.earn}</Text>
            <Text color={baseColors.unimportant}>{PLATFORM_COIN} {intl('farms.yourEarn')}</Text>
          </div>
          {(account && hasApprove) && <Compound onClick={onCompound}>{intl('farms.compound')}</Compound>}
        </RowBetween>
        <BottomGrouping>
          {!account ? (
            <ConnectWalletButton width="100%" />
          ) : (<div>
            {!hasApprove ? <AutoRow justify="center"><Button onClick={onApprove}>{intl('swap.approve')}</Button></AutoRow>
              : <RowBetween>
                {
                  parseFloat(item.earn) ? (
                    <Button variant="gradual" onClick={onUnstake}>{intl({ id: 'farms.unstakeType', data: { initType: type } })}</Button>
                  ) : (
                    <Button variant="tertiary" style={{background: '#E0E0E0', color: '#fff'}}>{intl({ id: 'farms.unstakeType', data: { initType: type } })}</Button>
                  )
                }
                
                <Button onClick={_onSupply}>
                  <PlusOutlined />
                </Button>
              </RowBetween>}
          </div>
          )}
        </BottomGrouping>
        <Info>
          <RowBetween>
            <Text>{intl('farms.apr')}</Text>
            <Text>{item.apr}</Text>
          </RowBetween>
          <RowBetween>
            <Text>{intl('farms.yourStaked')}</Text>
            <Text>{item.stakeText}</Text>
          </RowBetween>
        </Info>
        {account && <CardFooter pool={{ earningToken: tokens[type.toLowerCase()], isFinished: false }} totalStake={totalStake} account={account} />}
        <Modal isOpen={isOpenModel as any} onDismiss={onDismissModel} maxHeight={200}>
          <HelperWrapper>
            <Section>
              <ContentHeader color={baseColors.title} onDismiss={onDismissModel}>{
                handleType === 'unStake' ? intl({ id: 'pools.withdrawTokens', data: { typeParam: type } }) :
                  handleType === 'supply' ? intl({ id: 'pools.depositTokens', data: { typeParam: type } }) :
                    intl('farms.waitForConfirmation')
              }</ContentHeader>
              <RowBetween>
                <span />
                <AvailbleText>{tipsBalance} {type} Availble</AvailbleText>
              </RowBetween>
              <PriceInputRow className="flex flex-center-y">
                <RowBetween>
                  <Input placeholder={intl('pools.input')} value={jsxInputValue} onChange={onInputChange} />
                  <Flex>
                    <RightMaxHandle className="flex flex-center-y">
                      <Text>{type}</Text>
                      <Button onClick={onMax} size="sm">{intl('swap.max')}</Button>
                    </RightMaxHandle>
                  </Flex>
                </RowBetween>
              </PriceInputRow>
              <Flex>
                <RowBetween>
                  <Button variant="secondary" onClick={onDismissModel}>{intl('farms.cancel')}</Button>
                  <Button disabled={confirmDisabled} width={250} variant="gradual" type="submit" onClick={onConfirm}>{intl('farms.confirm')}</Button>
                </RowBetween>
              </Flex>
            </Section>
          </HelperWrapper>
        </Modal>
      </Wrapper>
    </AppBody>
  </HeadMineAppBody>
}


const HeadMineAppBody = styled.div`
  #noshade{
    box-shadow: none;
    background-color: rgba(255,255,255,0.7);
  }
`
const AvailbleText = styled.span`
color: ${({ theme }) => theme.colors.unimportant};
font-size: 12px;
margin-top: 30px;
`
const CardTitle = styled(Title)`
font-size: 21px!important;
`
const Wrapper = styled.div`
padding: 20px;
img{
  width: 45px;
}
.earn{
  /* display: inline-block; */
  margin-top: 10px;
}
`
const Info = styled.div`
margin-top: 20px;
`
const RightMaxHandle = styled.div`
margin-left: 20px;
button{
  zoom: 0.7;
  margin-left: 8px;
  border-radius: 25px;
}
`
const PriceInputRow = styled.div`
margin-top: 10px;
margin-bottom: 50px;
input{
  /* color: ${({ theme }) => theme.colors.unimportant}!important; */
  background-color: ${({ theme }) => theme.colors.inputBackground}!important;
  border-width: 0px!important;
  &:focus:not(:disabled){

  }
}
`
const Compound = styled.div`
  width: 96px;
  height: 24px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid;
  border-radius: 12px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  position: relative;
  top: 5px;
`
const ClaimButtonStyle = styled.button<{ type: string }>`
position: relative;
width: 0px;
height: 0px;
margin: 0px;
padding: 0px;
border-color: transparent;
cursor: pointer;
font-size: 12px;
>div{
  width: 66px;
  height: 24px;
  line-height: 20px;
  position: absolute;
  top: -12px;
  left: -65px;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid;
  border-radius: 12px;
}
`