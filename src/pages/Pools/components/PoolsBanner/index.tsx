import React from 'react'
import styled from 'styled-components'
import BannerPng from './banner.png'

export const PoolsBannerBox = styled.div`
  display: flex;
  max-width: 1200px;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 33px 48px;
  margin: 0 auto;
  position: relative;
  // border-bottom: 0.254545px solid #C4C4C4 !important;

  h3 {
    margin-top: 36px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.title};
    position: relative;
    z-index: 1;
    font-size: 32px;
    position: relative;
    z-index: 1;
    top: 13px;
    ${({ theme }) => theme.mediaQueries.sm} {
        top: 0px;
        font-size: 38px;
        font-size: 46px;
      }
    }
  p {
    font-size: 14px;
    line-height: 17px;
    margin-top: 30px;
    width: 240px;
    position: relative;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    background-color: #c4c4c4;
    width: calc(100% - 97px);
    height: 0.25px;
    left: 48px;
    bottom: 0px;
    -webkit-transform: scaleY(0.25);
    transform: scaleY(0.25);
  }
  img{
    position: absolute;
    top: -5px;
    left: 40px;
    filter: blur(4px);
    zoom: 0.8;
    ${({ theme }) => theme.mediaQueries.sm} {
      position: relative;
      top: 0px;
      left: 0px;
      filter: none;
    }
  }
`
interface PoolsBannerProps {
  title: string
  describe: string
}

const PoolsBanner: React.FC<PoolsBannerProps> = ({ title, describe }) => {
  return (
    <PoolsBannerBox>
      <div>
        <h3>{title}</h3>
        <p>{describe}</p>
      </div>
      <img src={BannerPng} alt="" />
    </PoolsBannerBox>
  )
}

export default PoolsBanner
