
-----------------------

--------CINFIG---------

-----------------------


# Okt Network/chainID Config
 - SDK
 `src\constants.ts`
- KeyneSwapinterface
`**/tokens/index.ts`
`/.env.development`
`/.env.production`
`src\constants\multicall\index.ts --> MULTICALL_NETWORKS`

# KeyneSwap interface Config
- .env.development
- .env.production

# Contract Address Config
## Swap Base Contract Address
  - INIT_CODE_HASH
  `sdk: src\constants.ts`
  - FACTORY_ADDRESS
  `sdk: src\constants.ts`

   - ROUTER_ADDRESS
   `swap interface src\constants\index.ts`
   
   - WOKT
   SDK: src\entities\token.ts
   src\utils\tokenList.json
   src\constants\token\keyneswap.json

## KeyneSwap interface Pages config
  - Pools
    Token Address：`src/config/constants/tokens` (Publisher: William Liu)
    Contract Address `src/config/constants/contracts` (Publisher: William Liu)
  - Farms
    Token Address：`src/config/constants/farmTokens.ts` (Publisher: Winless)
    LP Address `src/config/constants/farms` (Publisher: Winless)
    Contract Address `src/config/constants/contracts` (Publisher: William Liu)
  - Ifo
    Lp and Contract Address `src\config\constants\ifo.ts`
  - Trade(Swap)
    Token Address：`src\constants\token\keyneswap.json` (Publisher: Daniel)
    Contract Address: ``

  - PreMiner
    Contract Address `src/config/constants/contracts` (Publisher: William Liu)
    Token Address：`src/config/constants/tokens` (Publisher: William Liu)


# 注：
farm OKB和其他地方的不一样，暂时无法统一，所以farm的token单独一个文件；
keyneswap.json放的是默认的代币列表，所以和上面其他的也不一样；

WOKT被引用的地方：
src\config\constants\tokens.ts;
src\constants\index.ts;
src\constants\multicall\index.ts;
src\hooks\useGetPriceData.ts;