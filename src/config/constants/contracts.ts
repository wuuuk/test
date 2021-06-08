import { getAddress } from 'utils/addressHelpers'

const address = {
  multiCall: {
    56: '',
    65: '0xd36dfce7e8348c9e030e0e1f2089125b40f9b6e4',
  },
  
  oktHeadMine: { // pool
    65: '0x862f9fa6060c739ceccd1ea0f2c28290cae4e0c7',
    56: ''
  },
  okbHeadMine: { // pool
    65: '0xfA27d13427C6175dE45Fc3fF81a4D5eb561E7774',
    56: ''
  },
  KNSPOOL: {
    65: '0x2993912F49F6E7267d454D525F2Ab2919077d788'
  },

  
  // farm
  masterChef: {
    // 65: '0x8E60da1C19EfB2bE601c279C8DBC0D5ea73864A1',
    65: '0xfFc163527cbb3B5cE03afc81fa9E3b2145F7Bc6F',
    56: '',
  },
  pointCenterIfo: {
    56: '',
    65: '0x14310fee9400db6b6b0e791ff5e43488bf3dee66',
  },

  /** OKT 测试网合约地址 Farms */
  oktChef: {
    65: '0xfFc163527cbb3B5cE03afc81fa9E3b2145F7Bc6F',
    56: ''
  },
  
}
export const KNS_ADDRESS = () => ({
  OKT: getAddress(address.oktHeadMine),
  OKB: getAddress(address.okbHeadMine),
})
export default address
