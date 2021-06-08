import { ChainId, WETH } from '@keyneswap-libs/sdk'
// import { ChainId } from 'utils'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x7c2e817E1E9d40C022c2f08804d3e67D07526f83', // TODO
  [ChainId.OKT]: '0xBd09DF438AccA57476BcFe70A333B3204DB4C6e7',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS } 
 