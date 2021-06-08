# DEV


```
yarn link @keyneswap-libs/sdk
"@keyneswap-libs/sdk": "1.0.1",
```

# locales

### use
```ts
const intl = useIntl()

intl('home.xx', 'XXX')
intl({id: 'test', data: {name: 'fc'}})
```

# pc css响应式

```tsx
${({ theme }) => theme.mediaQueries.sm} {
}

const isMobile = useIsMobile()
```


farm合约已经就绪了， 合约地址： https://www.oklink.com/okexchain-test/address/0xce416f904c3d1bd5b7c574551b4a1bd9ea0887d4

现在添加了4中挖矿的币：
1. SODA-OKT， 地址： 0x8896c1E850266e93Ea4543034fb2c6479DE80db6， 系数： 40   pid 1
2. SODA-OKB， 地址： 0x340F0355DEd2DBf7c665CdD39f5A8cae3aC426bD， 系数： 40   pid 2
3. OKT-USDT， 地址： 0xD036883465613481b275493cf1034DB8f33555B6， 系数： 8   pid 3
4. OKB-USDT， 地址： 0xe5f8F211B40e9DdC81C819364244c267f9b69f2F， 系数： 8   pid 4




1. SODA-OKT， 地址： 0x8896c1E850266e93Ea4543034fb2c6479DE80db6， 系数： 40   pid 1

SODA就是KNS对吧，对应的是这个地址 0x14d768a9fC75A089Fe97A0aC9b0e26D9865c36D8

okt对应的是0x7c2e817e1e9d40c022c2f08804d3e67d07526f83么



合约地址

https://www.notion.so/KeyneSwap-cbf9d17865464f618772e82c642d32d2




### uniswap LP地址生成

```ts
import { pack, keccak256 } from '@ethersproject/solidity'
import { getCreate2Address } from '@ethersproject/address'

const b = '0xff'
const a = '0xff'
getCreate2Address(
    FACTORY_ADDRESS,
    keccak256(['bytes'], [pack(['address', 'address'], [a, b])]),
    INIT_CODE_HASH
)
```


Keyneswap
网站：http://192.168.80.35/#/pool

okb地址：0xDa9d14072Ef2262c64240Da3A93fea2279253611
wokt地址： 0x2219845942d28716c0F7C605765fABDcA1a7d9E0
KeyneFactory地址： 0xDF60c899e56AB3bB6B37134174a6031542bBD43E
kns地址： 0x1385e693b2B5B9942E18377C9139c43A72D16c5c
Ifo合约地址：0x902F930C53A7B475cAF9782ea02d00EaDaFEb20E



seller私钥：12c6b455fb31650d671898413f72eb7a1c23bfe945cd2695faf653d66d724f6b
seller地址：0x37F64C9C6bB9AE58a1f8E575b8CD79984f0014A4

ifo pool1（okt-kns）
sell token: 0x294D88b17f858b9a57B23bd922D4Ef8C1a23416c
Okt-kns lp token: 0xd73ffd2cd1b7ec86a5085708f1cca6331d4b1c64
seller地址：0x37F64C9C6bB9AE58a1f8E575b8CD79984f0014A4
amountTotal0：10000
amountTotal1：10000
duration：172800
openAt：1622455000
claimDelaySec：60


ifo pool2 (okb-kns)
sell token: 0x46724c2a365474a0c7981E4BC2Df81586BF6834B
Okb-kns lp token: 0x10bbdac70052d81c26c0827560b7a8c0de2f428e
seller地址：0x37F64C9C6bB9AE58a1f8E575b8CD79984f0014A4
amountTotal0：10000
amountTotal1：10000
duration：172800
openAt：1622455000
claimDelaySec：60

ifo pool1（okt-kns）
sell token: 0x294D88b17f858b9a57B23bd922D4Ef8C1a23416c
Okt-kns lp token: 0x8b61e6513233b2c1d2d7cdabd7d6423cace832b3
seller地址：0x37F64C9C6bB9AE58a1f8E575b8CD79984f0014A4
amountTotal0：100000
amountTotal1：100000
duration：172800
openAt：1622534000
claimDelaySec：60


ifo pool2 (okb-kns)
sell token: 0x46724c2a365474a0c7981E4BC2Df81586BF6834B
Okb-kns lp token: 0x2f491993f4025c668d356fc04a79b477eec9624e

seller地址：0x37F64C9C6bB9AE58a1f8E575b8CD79984f0014A4
amountTotal0：10000
amountTotal1：10000
duration：172800
openAt：1622534000
claimDelaySec：60