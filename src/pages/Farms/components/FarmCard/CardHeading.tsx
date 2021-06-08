import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Image } from 'uikit'
import { CommunityTag, CoreTag } from 'components/Tags'
import { HEAD_NAV_HEIGHT } from 'utils/config'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  farmImage?: string
  tokenSymbol?: string
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 4px;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  isCommunityFarm,
  farmImage,
  tokenSymbol,
}) => {
  // console.log('fra', farmImage)
  const leftImage = farmImage.split('-')[0];
  const rightImage = farmImage.split('-')[1];
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <div style={{ width: `${HEAD_NAV_HEIGHT}px`, height: `${HEAD_NAV_HEIGHT}px`, display: 'flex'}}>
          <Image src={`/images/farms/${leftImage}.svg`} alt={tokenSymbol} width={32} height={32} />
          <Image src={`/images/farms/${rightImage}.svg`} alt={tokenSymbol} width={32} height={32} />
      </div>
      {/* <Image src={`/images/farms/${farmImage}.svg`} alt={tokenSymbol} width={64} height={64} /> */}
      <Flex flexDirection="column" alignItems="flex-end">
        <Heading mb="4px">{lpLabel.split(' ')[0]}</Heading>
        <Flex justifyContent="center">
          {isCommunityFarm ? <CommunityTag /> : <CoreTag />}
          <MultiplierTag variant="primary">{multiplier}</MultiplierTag>
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
