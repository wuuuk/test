import React, { useState, useEffect, useMemo } from 'react'
import { useMedia } from 'react-use'
import { withRouter } from 'react-router-dom'
import { Space, Table, Tabs } from 'antd'
import styled from 'styled-components'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import useIntl from 'hooks/useIntl'
import { Box, Flex, Text } from 'rebass'
import { LINK_INFO_BASE_URL } from 'utils/config'
// import TokenLogo from '../TokenLogo'
import { IconAdd } from 'assets/svg/add'
import { IconSwap } from 'assets/svg/liquidty'
import { CustomLink } from '../Link/index'
import Row from '../Row'
import { Divider } from '..'
import ActionIconLink from '../ActionIconLink'

import { formattedNum, formattedPercent } from '../utils'
import { OVERVIEW_TOKEN_BLACKLIST } from '../constants'
import FormattedName from '../FormattedName'
import { TYPE } from '../Theme'

dayjs.extend(utc)

const PageButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2em;
  margin-bottom: 2em;
`

const Arrow = styled.div`
  color: ${({ theme }) => theme.primary1};
  opacity: ${(props) => (props.faded ? 0.3 : 1)};
  padding: 0 20px;
  user-select: none;
  :hover {
    cursor: pointer;
  }
`

const List = styled(Box)`
  -webkit-overflow-scrolling: touch;
`

const DashGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 100px 1fr 1fr;
  grid-template-areas: 'name liq vol';
  padding: 0 1.125rem;

  > * {
    justify-content: flex-end;

    &:first-child {
      justify-content: flex-start;
      text-align: left;
      width: 100px;
    }
  }

  @media screen and (min-width: 680px) {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 180px 1fr 1fr 1fr;
    grid-template-areas: 'name symbol liq vol ';

    > * {
      justify-content: flex-end;
      width: 100%;

      &:first-child {
        justify-content: flex-start;
      }
    }
  }

  @media screen and (min-width: 1080px) {
    display: grid;
    grid-gap: 0.5em;
    grid-template-columns: 1.5fr 0.6fr 1fr 1fr 1fr 1fr 0.6fr;
    grid-template-areas: 'name symbol liq vol price change';
  }
`

const ListWrapper = styled.div``

const ClickableText = styled(Text)`
  text-align: end;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
  user-select: none;
  color: ${({ theme }) => theme.primary1};

  @media screen and (max-width: 640px) {
    font-size: 0.85rem;
  }
`

const DataText = styled(Flex)`
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.text1};

  & > * {
    font-size: 14px;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`

const SORT_FIELD = {
  LIQ: 'totalLiquidityUSD',
  VOL: 'oneDayVolumeUSD',
  SYMBOL: 'symbol',
  NAME: 'name',
  PRICE: 'priceUSD',
  CHANGE: 'priceChangeUSD',
}

// @TODO rework into virtualized list
function TopTokenList ({ tokens, itemMax = 10 }) {
  
  const intl = useIntl()
  // page state
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)

  // sorting
  const [sortDirection, setSortDirection] = useState(true)
  const [sortedColumn, setSortedColumn] = useState(SORT_FIELD.LIQ)

  const below1080 = useMedia('(max-width: 1080px)')
  const below680 = useMedia('(max-width: 680px)')
  const below600 = useMedia('(max-width: 600px)')

  useEffect(() => {
    setMaxPage(1) // edit this to do modular
    setPage(1)
  }, [tokens])

  const formattedTokens = useMemo(() => {
    return (
      tokens &&
      Object.keys(tokens)
        .filter((key) => {
          return !OVERVIEW_TOKEN_BLACKLIST.includes(key)
        })
        .map((key) => tokens[key])
    )
  }, [tokens])

  useEffect(() => {
    if (tokens && formattedTokens) {
      let extraPages = 1
      if (formattedTokens.length % itemMax === 0) {
        extraPages = 0
      }
      setMaxPage(Math.floor(formattedTokens.length / itemMax) + extraPages)
    }
  }, [tokens, formattedTokens, itemMax])

  const filteredList = useMemo(() => {
    return (
      formattedTokens &&
      formattedTokens
        .sort((a, b) => {
          if (sortedColumn === SORT_FIELD.SYMBOL || sortedColumn === SORT_FIELD.NAME) {
            return a[sortedColumn] > b[sortedColumn] ? (sortDirection ? -1 : 1) * 1 : (sortDirection ? -1 : 1) * -1
          }
          return parseFloat(a[sortedColumn]) > parseFloat(b[sortedColumn])
            ? (sortDirection ? -1 : 1) * 1
            : (sortDirection ? -1 : 1) * -1
        })
        .slice(itemMax * (page - 1), page * itemMax)
    )
  }, [formattedTokens, itemMax, page, sortDirection, sortedColumn])

  const ListItem = ({ item, index }) => {
    // console.log('---item---', item)
    return (
      <DashGrid style={{ height: '48px' }} focus>
        <DataText area="name" fontWeight="500">
          <Row>
            {!below680 && <div style={{ marginRight: '1rem', width: '10px' }}>{index}</div>}
            <CustomLink style={{ marginLeft: '16px', whiteSpace: 'nowrap' }} target="_blank" href={`${LINK_INFO_BASE_URL}/token/${item.id}`}>
              <FormattedName
                text={below680 ? item.symbol : item.name}
                maxCharacters={below600 ? 8 : 16}
                adjustSize
                link={false}
              />
            </CustomLink>
          </Row>
        </DataText>
        {!below680 && (
          <DataText area="symbol" color="text" fontWeight="500">
            <FormattedName text={item.symbol.toUpperCase()} maxCharacters={5} />
          </DataText>
        )}
        <DataText area="liq">{formattedNum(item.totalLiquidityUSD, true, false)}</DataText>
        <DataText area="vol">{formattedNum(item.oneDayVolumeUSD, true, false)}</DataText>
        {!below1080 && (
          <DataText area="price" color="text" fontWeight="500">
            {formattedNum(item.priceUSD, true)}
          </DataText>
        )}
        {!below1080 && <DataText area="change">{formattedPercent(item.priceChangeUSD)}</DataText>}
        <Space size="middle">
          {/* <ActionIconLink to="/add">
            <IconAdd width={10} height={10} />
          </ActionIconLink> */}
          <ActionIconLink to="/swap">
            <IconSwap width={10} height={10} />
          </ActionIconLink>
        </Space>
      </DashGrid>
    )
  }

  return (
    <ListWrapper>
      <DashGrid center style={{ height: 'fit-content', padding: '0 1.125rem 1rem 1.125rem' }}>
        <Flex alignItems="center" justifyContent="flexStart">
          <ClickableText
            area="name"
            onClick={(e) => {
              setSortedColumn(SORT_FIELD.NAME)
              setSortDirection(sortedColumn !== SORT_FIELD.NAME ? true : !sortDirection)
            }}
          >
            {below680 ? intl('home.symbol', 'Symbol') : intl('home.name', 'Name')} {sortedColumn === SORT_FIELD.NAME ? (!sortDirection ? '↑' : '↓') : ''}
          </ClickableText>
        </Flex>
        {!below680 && (
          <Flex alignItems="center">
            <ClickableText
              area="symbol"
              onClick={(e) => {
                setSortedColumn(SORT_FIELD.SYMBOL)
                setSortDirection(sortedColumn !== SORT_FIELD.SYMBOL ? true : !sortDirection)
              }}
            >
              {intl('home.symbol', 'Symbol')} {sortedColumn === SORT_FIELD.SYMBOL ? (!sortDirection ? '↑' : '↓') : ''}
            </ClickableText>
          </Flex>
        )}

        <Flex alignItems="center">
          <ClickableText
            area="liq"
            onClick={(e) => {
              setSortedColumn(SORT_FIELD.LIQ)
              setSortDirection(sortedColumn !== SORT_FIELD.LIQ ? true : !sortDirection)
            }}
          >
            {intl('home.liquidity', 'Liquidity')} {sortedColumn === SORT_FIELD.LIQ ? (!sortDirection ? '↑' : '↓') : ''}
          </ClickableText>
        </Flex>
        <Flex alignItems="center">
          <ClickableText
            area="vol"
            onClick={(e) => {
              setSortedColumn(SORT_FIELD.VOL)
              setSortDirection(sortedColumn !== SORT_FIELD.VOL ? true : !sortDirection)
            }}
          >
            {intl('home.Volume24', 'Volume (24hrs)')}
            {sortedColumn === SORT_FIELD.VOL ? (!sortDirection ? '↑' : '↓') : ''}
          </ClickableText>
        </Flex>
        {!below1080 && (
          <Flex alignItems="center">
            <ClickableText
              area="price"
              onClick={(e) => {
                setSortedColumn(SORT_FIELD.PRICE)
                setSortDirection(sortedColumn !== SORT_FIELD.PRICE ? true : !sortDirection)
              }}
            >
              {intl('home.price', 'Price')} {sortedColumn === SORT_FIELD.PRICE ? (!sortDirection ? '↑' : '↓') : ''}
            </ClickableText>
          </Flex>
        )}
        {!below1080 && (
          <Flex alignItems="center">
            <ClickableText
              area="change"
              onClick={(e) => {
                setSortedColumn(SORT_FIELD.CHANGE)
                setSortDirection(sortedColumn !== SORT_FIELD.CHANGE ? true : !sortDirection)
              }}
            >
              {intl('home.priceChange24h', 'Price Change (24hrs)')}
              {sortedColumn === SORT_FIELD.CHANGE ? (!sortDirection ? '↑' : '↓') : ''}
            </ClickableText>
          </Flex>
        )}
        <Flex alignItems="center">
          <ClickableText
            area="action"
          >
            {intl('home.Action', 'Actions')}
          </ClickableText>
        </Flex>
      </DashGrid>
      <Divider />
      <List p={0}>
        {filteredList &&
          filteredList.map((item, index) => {
            return (
              <div key={item.id}>
                <ListItem key={item.id || index} index={(page - 1) * itemMax + index + 1} item={item} />
                <Divider />
              </div>
            )
          })}
      </List>
      <PageButtons>
        <div onClick={() => setPage(page === 1 ? page : page - 1)} aria-hidden="true">
          <Arrow faded={page === 1}>←</Arrow>
        </div>
        <TYPE.Body>Page {page} of {maxPage}</TYPE.Body>
        <div onClick={() => setPage(page === maxPage ? page : page + 1)} aria-hidden="true">
          <Arrow faded={page === maxPage}>→</Arrow>
        </div>
      </PageButtons>
    </ListWrapper>
  )
}

export default withRouter(TopTokenList)
