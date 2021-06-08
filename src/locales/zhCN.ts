import global from './zhCN/global'
import { Language } from "./type"

const locale = {
  ...global,

  'preMiner.days': '天',
  'preMiner.hours': '时',
  'preMiner.mins': '分',
  'preMiner.left': '剩余',
  'preMiner.unstake': '赎回 {n}',
  'preMiner.stake': '质押 {n}',
  'preMiner.volumeMined': '挖矿进度',
  'preMiner.youStake': '您的质押',
  'preMiner.ofTotal': '总进度',
  'preMiner.yourCoinEarn': '您{coinName}的收益',

  'home.statistics': '数据统计',
  'home.totalLiquidity': '总流动资金',
  'home.volume': '交易量',
  'home.priceKns': 'KNS价格',
  'home.pools': '资金池',
  'home.tokens': '代币',
  'home.name': '名称',
  'home.liquidity': '流动性',
  'home.symbol': '代币符号',
  'home.Volume24': '交易量(24时)',
  'home.Volume7d': '交易量 (7天)',
  'home.fees24h': '手续费(24时)',
  'home.fees1y': '年手续费/流动性',
  'home.Action': '操作',
  'home.price': '价格',
  'home.priceChange24h': '价格变化(24时)',
  'home.Search': '搜索',
  'home.SearchKeyneSwap': '搜索KeyneSwap',
  'home.SearchPairsAndTokens': '正在搜索代币对和代币...',
  'home.SearchKeyneSwapPairsAndTokens': '搜索KeyneSwap代币对和代币...',
  'home.volumeAnnualized': '基于24小时年化交易量',
  'home.pairs': '代币对',
  'home.noResults': '没有找到相关结果',
  'home.seeMore': '查看更多',
  'home.topText': 'OkexChain上的第一个AMM交易平台和收益农场',

  'menu.Home': '首页',
  'menu.Trade': '交易',
  'menu.Farms': '农场',
  'menu.Pools': '资金池',
  'menu.Info': '数据',
  'menu.IFO': 'IFO',
  'menu.More': '更多',
  'menu.Exchange': '兑换',
  'menu.Liquidity': '流动性',
  'menu.Overview': '概况',
  'menu.Tokens': '代币',
  'menu.Pairs': '交易对',
  'menu.Accounts': '账户',
  'menu.Contect': '联系',
  'menu.Github': 'Github',
  'menu.Docs': '文档',
  'menu.Blog': '博客',
  'menu.connect': '连接钱包',

  'swap.swap': '兑换',
  'swap.liquidity': '流动性',
  'swap.exchange': '兑换',
  'swap.exchangeInfo': '代币即时交易',
  'swap.from': '从',
  'swap.FromEstimated': '从 (预估)',
  'swap.to': '到',
  'swap.toEstimated': '到 (预估)',
  'swap.addSend': '新增发送 (可选)',
  'swap.removeSend': '移除发送',
  'swap.insufficientLiquidity': '本次交易流动性不足.',
  'swap.approving': '授权中',
  'swap.approved': '已授权',
  'swap.approve': '授权',
  'swap.priceImpactHigh': '价格影响大',
  'swap.balance': '余额',
  'swap.max': '最大',
  'swap.selectToken': '选择一个代币',
  'swap.selectTokenHint': '通过搜索代币名称或符号或将其地址粘贴到下方查找代币。',
  'swap.selectTokenPlaceholder': '代币搜索占位符',
  'swap.selectTokenInput': '搜索名称或粘贴地址',
  'swap.selectCurrency': '选择货币',
  'swap.enterAmount': '输入数量',
  'swap.tokenName': '代币名称',
  'swap.settings': '设置',
  'swap.slippageTolerance': '滑点容许范围',
  'swap.slippageHint': '如果价格变动超过这个百分比，您的交易将被撤回.',
  'swap.slippageToleranceZero1': '您的交易可能失败',
  'swap.slippageToleranceNotInput': '输入有效的滑点百分比',
  'swap.slippageToleranceError': '您的交易可能被提前成交',
  'swap.transactionDeadline': '交易截止时间',
  'swap.transactionDeadlineNotInput': '请输入有效的截止时间',
  'swap.minutes': '分钟',
  'swap.transactionDeadlineHint': '如果等待确认的时长超过该时间，您的交易将被撤回。',
  'swap.recentTransactions': '最近交易',
  'swap.approveUSDT': '授权USDT',
  'swap.price': '价格',
  'swap.minimumReceived': '至少收到',
  'swap.maximumSold': '最多售出',
  'swap.minimumReceivedHint': '如果在确认前有一个较大的、不利的价格变动，您的交易将被撤回。',
  'swap.priceImpact': '价格影响',
  'swap.priceImpactHint': '由于交易规模，市场价格和估计价格之间的差异。',
  'swap.priceImpactHintSec': '市场价格与您的价格因交易规模而产生的差异',
  'swap.liquidityProviderFee': '流动性提供者费用',
  'swap.liquidityProviderFeeHint': '每笔交易都要支付0.3%的费用。0.15%给到流动性提供者，0.05%流向KeyneSwap，0.10%拿去销毁。',
  'swap.swapButtonError': '价格影响大',
  'swap.swapButtonInputError': ' OKT余额不足',
  'swap.unlockWallet': '解锁钱包',
  'swap.connectWalletInfo': '请连接您的钱包以查看您最近的交易。',
  'swap.connectWallet': '连接您的钱包',
  'swap.learnConnectWallet': '了解如何连接钱包',
  'swap.change': '切换',
  'swap.selectList': '选择列表',
  'swap.connectWallet2': '连接钱包',
  'swap.invalidPair': '无效的代币对',
  'swap.enterRecipient': '输入接收方',
  'swap.invalidRecipient': '无效的接收方',
  'swap.swapAnyway': '仍然兑换',
  'swap.route': '路线',
  'swap.routeTokens': '通过这些代币的兑换路线，您的交易能获得最佳价格。',
  'swap.balanceInsufficient': '{symbol}余额不足',
  'swap.tokenStakePool': '您需要{tokenSymbol}才能在资金池质押',
  'swap.buyTokenHint': '购买一些{tokenSymbol},或确保您的{tokenSymbol} 不在其他资金池和流动性池中.',
  'swap.buyToken': '购买{tokenSymbol}',
  'swap.tokenRequired': '需要{tokenSymbol} ',
  'swap.locateAssets': '查找资产',
  'swap.closeWindow': '关闭窗口',

  'pool.liquidity': '流动性',
  'pool.addLiquidity': '增加流动性',
  'pool.addLiquidityHint': '增加流动性来获取LP代币',
  'pool.yourLiquidity': '您的流动性',
  'pool.yourLiquidityHint': '当您添加流动性时，您会得到代表您份额的资金池代币。如果您在这个列表中没有看到您加入的资金池，请尝试在下面导入一个资金池。',
  'pool.connectWalletLiquidity': '连接到钱包，查看您的流动性资产',
  'pool.noLiquidity': '没有发现流动性资产',
  'pool.loading': '加载中',
  'pool.notSeePool': "没有找到您加入的流动性池吗？",
  'pool.importIt': "导入",
  'pool.pooled': "{symbolName}总量",
  'pool.yourPoolTokens': "您的流动性池代币：",
  'pool.yourPoolShare': "您的流动性池份额：",
  'pool.remove': "移除",
  'pool.noTransactions': "没有最近的交易记录",
  'pool.unstakeTokensHint': "或者，如果您把您的LP代币质押在农场，可以把它们赎回，再到这里来看看。",

  'find.connectWalletPools': "连接到一个钱包来寻找流动性池",
  'find.add': "添加",
  'find.remove': "移除",
  'find.importPool': "导入流动性池",
  'find.importPoolHint': "使用这个工具可以找到没有自动出现在界面上的流动性池。",
  'find.selectToken': "选择一个代币",
  'find.selectTokenInfo': "选择一个代币来寻找您的流动性池",
  'find.yourLiquidityHint': '当您增加流动性时，您会得到代表您份额的资金池代币。这些代币会自动赚取与您在流动性池中的份额成比例的费用，并可在任何时候赎回。',
  'find.removeTokensHint': '移除您的流动性池代币会将您的份额按当前比率转换回基础代币，与您在资金池中的份额成比例。赚取的费用将包含在您收到的金额中。',
  'find.poolFound': '找到流动性池！',
  'find.notLiquidityPool': '您还没有在这个池子中添加流动性', 
  'find.noPoolFound': "没有找到池子。",
  'find.createPool': "创建池子。",
  'find.invalidPair': "无效的代币对。",

  'add.creatingPool': '您正在创建一个池子。',
  'add.youWillReceive': '您将收到',
  'add.firstProviderHint': '您是第一个流动性提供者。',
  'add.pricePoolHint': '您添加的代币比率将决定这个流动性池子的代币对价格。',
  'add.clickSupplyHint': '如果您满意这个价格，请点击“供应”进一步核对。',
  'add.initialPriceAndPool': '初始价格和池子的份额',
  'add.priceAndPool': '价格和池子的份额',
  'add.supply': '供应',
  'add.input': '输入',
  'add.lpTokens': '您钱包内的LP代币',
  'add.shareOfPool': '池子的份额',
  'add.symbolDeposited': '{symbol} 质押量',
  'add.rates': '费率',
  'add.createPoolSupply': '创建流动性池&供应',
  'add.confirmSupply': '确认供应',

  'farms.farms': '农场',
  'farms.stakeLiquidityPool': '投入流动性池（LP）代币来赚取。',
  'farms.stakedOnly': '只显示我质押的',
  'farms.sortBy': '排序',
  'farms.search': '搜索',
  'farms.hot': '热门',
  'farms.apr': '年化利率',
  'farms.multiplier': '倍数',
  'farms.earned': '已赚取',
  'farms.liquidity': '流行性',
  'farms.details': '详细信息',
  'farms.searchFarms': '搜索...',
  'farms.toTop': '回到顶部',
  'farms.rowTableLabel': '{label2}',
  'farms.totalFunds': '该农场流动性池中资金的总价值',
  'farms.multiplierRepresents': '倍数代表每个农场得到的KNS奖励的数量。',
  'farms.multiplierNumberRatio': '例如，如果一个1x农场每一块得到一个KNS奖励，{number}x农场每一块得到{number2}个KNS。',
  'farms.totalLiquidity': '流动性总量',
  'farms.viewContract': '查看合约',
  'farms.seePairInfo': '查看代币对信息',
  'farms.startFarming': '开始耕种',
  'farms.staked': '已质押',
  'farms.stake': '质押',
  'farms.stakeLP': '质押LP代币',
  'farms.enableFarm': '启用农场',
  'farms.enable': '启用',

  'farms.live': '正在进行',
  'farms.finished': '已结束',
  'farms.earn': '赚取',
  'farms.approveContract': '授权合约',
  'farms.harvest': '收获',
  'farms.yourEarn': '已赚取',
  'farms.compound': '复利',
  'farms.unstakeType': '赎回{initType}',
  'farms.yourStaked': '已质押',
  'farms.waitForConfirmation': '正在等待确认',
  'farms.detailsHide': '隐藏',
  'farms.detailsOpen': '详情',
  'farms.stakeLPTokens': '质押LP代币',
  'farms.stakeSingle': '质押',
  'farms.cancel': '取消',
  'farms.pendingConfirmation': '正在等待确认…',
  'farms.confirm': '确认',
  'farms.get': '获取',
  'farms.timeframe': '时间表',
  'farms.roi': '投资回报率',
  'farms.calculatedInfo': '按现行汇率计算，每天重算一次。费率只是为方便您而提供的估算，绝不是保证实际回报。',

  'pools.depositTokens': '质押 {typeParam} 代币',
  'pools.withdrawTokens': '赎回 {typeParam} 代币',
  'pools.input': '输入',
  'pools.addToMetamask': '添加到Metamask',
  'pools.OKTPOOLS': 'OKT池子',
  'pools.OKTPOOLSInfo': '质押OKT赚取新的代币。您可以在任何时候赎回代币。奖励按块计算。',

  'ifo.applyFor': '申请',
  'ifo.yourProject': '您的项目',
  'ifo.createIFO': '为您的代币创建一个IFO项目',
  'ifo.applyNow': '现在申请',
  'ifo.launchTime': '启动时间',
  'ifo.forSale': '待售',
  'ifo.raiseUSD': '募款目标(USD)',
  'ifo.totalRaised': '已募集(%占目标)',
  'ifo.launchIFOHint': '也想启动自己的IFO项目？',
  'ifo.launchProject': '通过Keyneswap启动您的项目，Keyneswap是Okchain&apos最受欢迎的AMM项目和流动性提供商，将您的代币直接带到Okchain上最活跃和快速增长的社区。',
  'ifo.takePartHint': '如何加入',
  'ifo.activateProfile': '激活您的个人资料',
  'ifo.activatePartIFo': '您需要一个已激活的KeyneSwap档案来参加IFO!',
  'ifo.stakeLiquidity': 'Stake OKT and ASD in the liquidity pool to get LP tokens.',
  'ifo.buySaleTokens': 'You’ll spend them to buy IFO sale tokens.',
  'ifo.getLPTokens': 'Get LP tokens',
  'ifo.commitLPTokens': 'Commit LP Tokens',
  'ifo.salesLive': 'When the IFO sales are live, you can “commit” your LP tokens to buy the tokens being sold.',
  'ifo.recommendCommit': 'We recommend committing to the Basic Sale first, but you can do both if you want.',
  'ifo.claimTokens': 'Claim your tokens and achievement',
  'ifo.afterSalesFinish': 'After the IFO sales finish,you can claim any IFO tokens that you bought,and any unspent OKT-ASD LP tokens will be returned to your wallet.',
  'ifo.foldableText': '{text}',
  'ifo.initialFarm': 'IFO: Initial Farm Offerings',
  'ifo.buyTokens': 'Buy new tokens with a brand new token sale model.',

  'question1': 'What’s the difference between a Basic Sale and Unlimited Sale?',
  'description1forQ1': 'In the Basic Sale, every user can commit a maximum of about 100 USD worth of CAKE-OKT LP Tokens. We calculate the maximum LP amount about 30 minutes before each IFO. The Basic Sale has no participation fee.',
  'description2forQ1': 'In the Unlimited Sale, there’s no limit to the amount of CAKE-OKT LP Tokens you can commit. However, there’s a fee for participation: see below.',
  
  'question2': 'Which sale should I commit to? Can I do both?',
  'description1forQ2': 'You can choose one or both at the same time! If you’re only committing a small amount, we recommend the Basic Sale first. Just remember you need a PancakeSwap Profile in order to participate.',
  
  'question3': 'How much is the participation fee?',
  'description1forQ3': 'There’s only a participation fee for the Unlimited Sale: there’s no fee for the Basic Sale.',
  'description2forQ3': 'The fee will start at 1%.',
  'description3forQ3': 'The 1% participation fee decreases in cliffs, based on the percentage of overflow from the “Unlimited” portion of the sale.',
  
  'question4': 'Where does the participation fee go?',
  'description1forQ4': 'We burn it. The CAKE-OKT LP tokens from the participation fee will be decomposed, then we use the OKT portion to market buy the CAKE equivalent, then finally throw all of the CAKE into the weekly token burn.',
  
  'question5': 'How can I get an achievement for participating in the IFO?',
  'description1forQ5': 'You need to contribute a minimum of about 10 USD worth of CAKE-OKT LP Tokens to either sale.',
  'description2forQ5': 'You can contribute to one or both, it doesn’t matter: only your overall contribution is counted for the achievement.',

   // 补充添加
  'supple.transactionSubmitted': '交易已提交',
  'supple.viewOklink': '在oklink查看',
  'supple.close': '关闭',
  'supple.confirmSwap': '确认兑换',
  'supple.priceUpdated': '价格更新',
  'supple.accept': '接受',
  'supple.outputEstimated': '预估的输出量。您将至少收到 ',
  'supple.transactionRevert': ' 否则交易将被撤回',
  'supple.inputEstimated': '预估的输入量，您将最多出售 ',
  'supple.outputSent': '输出结果将被发送到',
  'supple.feePaid': '每笔交易都要支付0.3%的费用。0.15%给到流动性提供者，0.05%流向KeyneSwap，0.10%拿去销毁。',
  'supple.confirmTransaction': '在您的钱包中确认此交易',
  'supple.recipient': '接收人',
  'supple.viewBscScan': '(在BscScan查看)',
  'supple.walletAddress': '钱包地址或ENS姓名',
  'supple.tokenImported': '已导入代币',
  'supple.createHint': '任何人都可以在OKExchain上创建和命名任何KIP20令牌，包括创建现有令牌的山寨版本和声称代表没有令牌的项目的令牌。',
  'supple.interfaceHint': '这个接口可以通过代币地址加载任意的代币。在操作任何的KIP20代币时，请格外小心，并做好研究。',
  'supple.purchaseHint': '如果您购买任何一个代币，您都有可能无法将其卖出',
  'supple.IUnderstand': '我明白',
  'supple.continue': '继续',
  'supple.error': '错误',
  'supple.dismiss': '撤销',

  'fetch.transactionTokensIssue': '交易无法成功，因为出现错误：{reason}。这可能是您正在兑换其中一个代币出现问题。',
  'fetch.transactionTransfer': '由于价格变动或兑换手续费，此交易不成功。试着提高你的滑点容许范围',
  'fetch.gasUnexpected': 'Gas费估算的意外问题，请再试一次。',
  'fetch.missDependencies': '当前缺少某些支持',
  'fetch.contactSupportError': '意外的错误，请联系技术支持：所有调用均未引发错误',
  'fetch.transactionRejected': '交易被拒绝。',
  'fetch.swapFailed': '兑换失败：{message}',
}

const ZHCN: Language = { code: 'zhCN', language: '简体中文', locale }
export default ZHCN
