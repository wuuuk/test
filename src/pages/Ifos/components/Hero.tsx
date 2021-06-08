import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from 'uikit'
import Container from 'components/layout/Container'
import useI18n from 'hooks/useI18n'
import useIntl from 'hooks/useIntl'

const StyledHero = styled.div`
  background: repeating-linear-gradient(to right, #FF3C88, #FF3C88 40px, #5DAFFD 40px, #5DAFFD 80px);
  padding-top: 45px;
`

const CurtainBottom = styled.div`
  background-image: url('/images/curtain-bottom-light.png');
  background-repeat: repeat-x;
  background-size: contain;
  height: 20px;
`

const Hero = () => {
  const TranslateString = useI18n()
  const intl = useIntl()

  return (
    <Box mb="95px">
      <StyledHero>
        <Container>
          <Heading as="h1" color="#fff" fontSize="22px">
            {intl('ifo.initialFarm')}
          </Heading>
          <Text bold fontSize="14px"  mt="12px" color="#fff" style={{lineHeight: '1.7'}}>
            {intl('ifo.buyTokens')}
          </Text>
        </Container>
      </StyledHero>
      <CurtainBottom />
    </Box>
  )
}

export default Hero
