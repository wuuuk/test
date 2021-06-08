import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from 'uikit'
import useI18n from 'hooks/useI18n'
import useIntl from 'hooks/useIntl'

function Nav({ activeIndex = 0 }: { activeIndex?: number }) {
  const TranslateString = useI18n()
  const intl = useIntl()
  return (
    <StyledNav>
      {/* <ButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle">
        <ButtonMenuItem id="swap-nav-link" to="/swap" as={Link}>
          {TranslateString(1142, 'Swap')}
        </ButtonMenuItem>
        <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link}>
          {TranslateString(262, 'Liquidity')}
        </ButtonMenuItem>
      </ButtonMenu> */}
      <Link className={`${activeIndex === 0 ? 'active' : ''}`} to="/swap">{intl('swap.swap', 'Swap')}</Link>
      <Link className={`${activeIndex === 1 ? 'active' : ''}`} to="/pool">{intl('swap.liquidity', 'Liquidity')}</Link>
    </StyledNav>
  )
}

export default Nav


const StyledNav = styled.div`
  margin-bottom: 100px;
  margin-top: 0px;
  a{
    color: rgba(189, 189, 189, 1);
    font-size: 21px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    position: relative;
    &:nth-child(2){
      margin-left: 63px;
    }
  }
  .active{
    color: rgba(51, 51, 51, 1);
    &::before{
      content: "";
      display: block;
      background-image: url('data:image/svg+xml;%20charset=utf8,%3Csvg%20width%3D%2234%22%20height%3D%2223%22%20viewBox%3D%220%200%2034%2023%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M13.8535%2021.549C15.5423%2023.4012%2018.4577%2023.4012%2020.1465%2021.549L32.5019%207.99792C34.9945%205.26411%2033.0549%200.870972%2029.3554%200.870972H4.64462C0.945061%200.870972%20-0.99449%205.26411%201.4981%207.99792L13.8535%2021.549Z%22%20fill%3D%22%235DAFFD%22%20style%3D%22mix-blend-mode%3Amultiply%22%2F%3E%0A%3C%2Fsvg%3E%0A');
      position: absolute;
      top: -27px;
      left: 50%;
      transform: translate3d(-50%, 0px, 0px);
      width: 28px;
      height: 19px;
      background-size: 100%;
    }
    &::after{
      content: "";
      display: block;
      background-image: url('data:image/svg+xml;%20charset=utf8,%3Csvg%20width%3D%2234%22%20height%3D%2223%22%20viewBox%3D%220%200%2034%2023%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M13.8535%201.45102C15.5423%20-0.401215%2018.4577%20-0.401213%2020.1465%201.45102L32.5019%2015.0021C34.9945%2017.7359%2033.0549%2022.129%2029.3554%2022.129H4.64462C0.945061%2022.129%20-0.99449%2017.7359%201.4981%2015.0021L13.8535%201.45102Z%22%20fill%3D%22%23FF3C88%22%20style%3D%22mix-blend-mode%3Amultiply%22%2F%3E%0A%3C%2Fsvg%3E%0A');
      position: absolute;
      bottom: -27px;
      left: 50%;
      transform: translate3d( -50%, 0px, 0px);
      width: 28px;
      height: 19px;
      background-size: 100%;
    }
  }
`