// 搜索
const Search = () =>
  import ( /* webpackChunkName: "search" */ 'components/search')
const SearchBox = () =>
  import ( /* webpackChunkName: "search" */ 'components/search-box')
const DetailPages = () =>
  import ( /* webpackChunkName: "detail-pages" */ 'components/detail-pages')
// 板块
const ThemeList = () =>
  import ( /* webpackChunkName: "plate" */ 'components/theme-list')
const ThemeIndex = () =>
  import ( /* webpackChunkName: "plate" */ 'components/theme-index')
const ThemeInformat = () =>
  import ( /* webpackChunkName: "plate" */ 'components/theme-informat-list')
const TopicDetail = () =>
  import ( /* webpackChunkName: "plate" */ 'components/topic-detail')
const IndustryIndex = () =>
  import ( /* webpackChunkName: "plate" */ 'components/industry-index')
const IndustryDetail = () =>
  import ( /* webpackChunkName: "plate" */ 'components/industry-detail')
// 大盘云图
const Map = () =>
  import ( /* webpackChunkName: "map" */ 'components/z3tougu-map')
const PlateMap = () =>
  import ( /* webpackChunkName: "map" */ 'components/plate-map/plate-map-index')

// 四维图析
const Siwei = () =>
  import ( /* webpackChunkName: "siwei" */ 'components/siwei')
const SiweiIndex = () =>
  import ( /* webpackChunkName: "siwei" */ 'components/siwei/siwei-index')
const stockZtg = () =>
  import ( /* webpackChunkName: "siwei" */ 'components/siwei/stock-ztg')
const stockZbg = () =>
  import ( /* webpackChunkName: "siwei" */ 'components/siwei/stock-zbg')
const marketBubble = () =>
  import ( /* webpackChunkName: "siwei" */ 'components/siwei/market')
const stockQsg = () =>
  import ( /* webpackChunkName: "siwei" */ 'components/siwei/stock-qsg')
const stockDtg = () =>
  import ( /* webpackChunkName: "siwei" */ 'components/siwei/stock-dtg')
const stockNew = () =>
  import ( /* webpackChunkName: "siwei" */ 'components/siwei/stock-new')
const stockCxg = () =>
  import ( /* webpackChunkName: "siwei" */ 'components/siwei/stock-cxg')
const stockZrzt = () =>
  import ( /* webpackChunkName: "siwei" */ 'components/siwei/stock-ystzt')

// 首页
import z3TouguIndex from 'components/z3touguhome/z3tougu-index'
import NewsList from 'components/z3touguhome/newslist'
import StrategyList from 'components/z3touguhome/strategy-list'
import errorPage from 'components/z3tougu-error-page'

// 策略
const GoldStrategy = () =>
  import ( /* webpackChunkName: "strategy" */ 'components/gold-strategy')
const GoldStrategyH5 = () =>
  import ( /* webpackChunkName: "strategy" */ 'components/gold-strategy-h5')
const BacktestDetailH5 = () =>
  import ( /* webpackChunkName: "strategy" */ 'components/backtest-detail-h5')
const foundpoollist = () =>
  import ( /* webpackChunkName: "strategy" */ 'components/foundpoollist')
const foundpooldetail = () =>
  import ( /* webpackChunkName: "strategy" */ 'components/foundpooldetail')
const ownstrategylist = () =>
  import ( /* webpackChunkName: "strategy" */ 'components/ownstrategylist')
const editstrategy = () =>
  import ( /* webpackChunkName: "strategy" */ 'components/editstrategy')
const runstatestrategy = () =>
  import ( /* webpackChunkName: "strategy" */ 'components/runstatestrategy')
const Filter = () =>
  import ( /* webpackChunkName: "strategy" */ 'components/filter/filter')
const BacktestFilter = () =>
  import ( /* webpackChunkName: "strategy" */ 'components/backtest-filter')
const BacktestFilterH5 = () =>
  import ( /* webpackChunkName: "strategy" */ 'components/backtest-filter-h5')
const BacktestFilterBuysell = () =>
  import ( /* webpackChunkName: "strategy" */ 'components/backtest-filter-buysell')
const BacktestFilterBuysell2 = () =>
  import ( /* webpackChunkName: "strategy" */ 'components/backtest-filter-buysell2')
const BacktestTime = () =>
  import ( /* webpackChunkName: "strategy" */ 'components/backtest-time')
const BacktestTimeH5 = () =>
  import ( /* webpackChunkName: "strategy" */ 'components/backtest-time-h5')
const backtestHelp = () =>
  import ( /* webpackChunkName: "strategy" */ 'components/help.vue')
// import FundChart from 'components/fund-chart'
// import FundFile from 'components/fund-file'




// 基金
// import SmartPoolList from 'components/smartPool/smartPoolList'
// import SmartPoolListDetails from 'components/smartPool/smartPoolListDetails'
// import FundArchives from 'components/fund-archives/fund-archives'
// import FundRecommend from 'components/fund-recommend'

// 客户端嵌套的“财”页面
const finance = () =>
  import ( /* webpackChunkName: "finance" */ 'components/finance')
// import TimeIndex from 'components/time-index'

// import blank from 'components/z3touguhome/blank'


// 客户画像
const CustomerList = () =>
  import ( /* webpackChunkName: "personas" */ 'components/customer-list')
const PortraitDetail = () =>
  import ( /* webpackChunkName: "personas" */ 'components/customerPortrait/portrait-detail')
const OptionalStock = () =>
  import ( /* webpackChunkName: "personas" */ 'components/optional-stock/optional-stock')


// const BullStockList = () => import(/* webpackChunkName: "bullstock" */ 'components/bull-stock-list')
const BullStock = () =>
  import ( /* webpackChunkName: "bullstock" */ 'components/bullStock/bull-stock-index')
// import AutoinpBox from 'components/autoinp-box'

import FilterStrategyList from 'components/z3-filter-strategy-list'
import DragonListDialog from 'components/dragon-list-dialog'

// 智能诊股
const ClinicSharesIndex = () =>
  import ( /* webpackChunkName: "stock-clinic" */ 'components/clinicShares/clinic-shares-index')

// 智能资讯
const wisdomHeadlines = () =>
  import ( /* webpackChunkName: "wisdom-newsinfo" */ 'components/intelligence-info/wisdom-headlines')
const optionalInformation = () =>
  import ( /* webpackChunkName: "wisdom-newsinfo" */ 'components/intelligence-info/optional-information')
const newsFlash = () =>
  import ( /* webpackChunkName: "wisdom-newsinfo" */ 'components/intelligence-info/news-flash')
const newsOpportunities = () =>
  import ( /* webpackChunkName: "wisdom-newsinfo" */ 'components/intelligence-info/news-opportunities')
const listedCompany = () =>
  import ( /* webpackChunkName: "wisdom-newsinfo" */ 'components/intelligence-info/listed-company')
const zInfo = () =>
  import ( /* webpackChunkName: "wisdom-newsinfo" */ 'components/intelligence-info/z-info')

import {
  ctx
} from '../config'

export default [{
    path: ctx,
    component: z3TouguIndex
  },
  {
    path: ctx + '/',
    name: 'homeRoot',
    component: z3TouguIndex
  },
  {
    path: ctx + '/home',
    name: 'home',
    component: z3TouguIndex
  },
  {
    path: ctx + '/search-box',
    name: 'search-box',
    component: SearchBox
  },
  {
    path: ctx + '/search/:linkText/:keyword',
    name: 'search',
    component: Search
  },
  {
    path: ctx + '/detail-pages/:detailType/:id',
    name: 'detailPages',
    component: DetailPages
  },
  {
    path: ctx + '/map',
    name: 'map',
    component: Map
  },
  {
    path: ctx + '/map/fullScreen',
    name: 'bigMap',
    component: Map
  },
  {
    path: ctx + '/map/normal',
    name: 'normalMap',
    component: Map
  },
  {
    path: ctx + '/themeList',
    name: 'themelist',
    component: ThemeList
  },
  {
    path: ctx + '/themeIndex',
    name: 'themeindex',
    component: ThemeIndex
  },
  {
    path: ctx + '/industryIndex',
    name: 'industryindex',
    component: IndustryIndex
  },
  {
    path: ctx + '/siwei',
    name: 'bubbles',
    component: Siwei
  },
  {
    path: ctx + '/siwei/:isFilter',
    name: 'bubble',
    component: Siwei
  },
  {
    path: ctx + '/informatList/:inforId',
    name: 'themeInformat',
    component: ThemeInformat
  },
  {
    path: ctx + '/topic/:topicId',
    name: 'topicDetail',
    component: TopicDetail
  },
  {
    path: ctx + '/industry/:industryId',
    name: 'industryDetail',
    component: IndustryDetail
  },
  {
    path: ctx + '/gold-strategy/:strategyId',
    name: 'goldStrategy',
    component: GoldStrategy
  },
  {
    path: ctx + '/gold-strategy/:strategyId/:showType',
    name: 'goldStrategyType',
    component: GoldStrategy
  },
  {
    path: ctx + '/gold-strategy-h5/:strategyId',
    name: 'goldStrategyH5',
    component: GoldStrategyH5
  },
  {
    path: ctx + '/backtest-detail-h5/:strategyId/:backtestId',
    name: 'BacktestDetailH5',
    component: BacktestDetailH5
  },
  {
    path: ctx + '/foundpoollist',
    name: 'foundpoollist',
    component: foundpoollist
  },
  {
    path: ctx + '/foundpooldetail/:id',
    name: 'foundpooldetail',
    component: foundpooldetail
  },
  {
    path: ctx + '/ownstrategylist',
    name: 'ownstrategylist',
    component: ownstrategylist
  },
  {
    path: ctx + '/editstrategy',
    name: 'editstrategy',
    component: editstrategy
  },
  {
    path: ctx + '/runstatestrategy',
    name: 'runstatestrategy',
    component: runstatestrategy
  },
  {
    path: ctx + '/z3touguIndex',
    name: 'z3touguIndex',
    component: z3TouguIndex
  },
  {
    path: ctx + '/filter',
    name: 'filter',
    component: Filter
  },
  {
    path: ctx + '/backtestFilter/:strategyId',
    name: 'backtestfilter',
    component: BacktestFilter
  },
  {
    path: ctx + '/backtestFilterBuysell',
    name: 'backtestfilterbuysell',
    component: BacktestFilterBuysell
  },
  {
    path: ctx + '/backtestFilterBuysell2',
    name: 'backtestfilterbuysell2',
    component: BacktestFilterBuysell2
  },
  {
    path: ctx + '/backtestFilterH5/:strategyId',
    name: 'backtestfilterh5',
    component: BacktestFilterH5
  },
  {
    path: ctx + '/backtestTime/:strategyId',
    name: 'backtesttime',
    component: BacktestTime
  },
  {
    path: ctx + '/backtestTimeH5/:strategyId',
    name: 'backtesttimeh5',
    component: BacktestTimeH5
  },
  // {
  //   path: ctx + '/fundRecommend',
  //   name: 'fundrecommend',
  //   component: FundRecommend
  // },
  // { path: ctx+'/intellCombList', name: 'intellcomblist', component: IntellCombList },
  // {
  //   path: ctx + '/fund-chart',
  //   name: 'fundchart',
  //   component: FundChart
  // },
  // {
  //   path: ctx + '/fund-file',
  //   name: 'fundfile',
  //   component: FundFile
  // },
  {
    path: ctx + '/newslist',
    name: 'newslist',
    component: NewsList
  },
  // {
  //   path: ctx + '/smartPool',
  //   name: 'smartPoolList',
  //   component: SmartPoolList
  // },
  // {
  //   path: ctx + '/smartPoolListDetails/:id',
  //   name: 'smartPoolListDetails',
  //   component: SmartPoolListDetails
  // },
  // {
  //   path: ctx + '/fundArchives',
  //   name: 'fundArchives',
  //   component: FundArchives
  // },
  {
    path: ctx + '/strategyList',
    name: 'strategyList',
    component: StrategyList
  },
  {
    path: ctx + '/backtestHelp',
    name: 'backtestHelp',
    component: backtestHelp
  },
  {
    path: ctx + '/finance',
    name: 'finance',
    component: finance
  },
  // {
  //   path: ctx + '/blank',
  //   name: 'blank',
  //   component: blank
  // },
  {
    path: ctx + '/error',
    name: 'error',
    component: errorPage
  },
  {
    path: ctx + '/customerList',
    name: 'customerlist',
    component: CustomerList
  },
  {
    path: ctx + '/portraitDetail/:clientPassport',
    name: 'portraitDetail',
    component: PortraitDetail
  },
  {
    path: ctx + '/optionalStock',
    name: 'optionalStock',
    component: OptionalStock
  },
  {
    path: ctx + '/bullStock',
    name: 'bullStock',
    component: BullStock
  },
  // {
  //   path: ctx + '/test/timeIndex',
  //   name: 'timeindex',
  //   component: TimeIndex
  // },
  // {
  //   path: ctx + '/bullStockList',
  //   name: 'bullstocklist',
  //   component: BullStockList
  // },
  // {
  //   path: ctx + '/test/autoinpBox',
  //   name: 'autoinpbox',
  //   component: AutoinpBox
  // },
  {
    path: ctx + '/plateMap',
    name: 'plateMap',
    component: PlateMap
  },
  {
    path: ctx + '/filterStrategyList',
    name: 'filterStrategyList',
    component: FilterStrategyList
  },
  {
    path: ctx + '/dragonList',
    name: 'dragonListDialog',
    component: DragonListDialog
  },
  {
    path: ctx + '/clinicSharesIndex/:innerCode',
    name: 'clinicsharesindex',
    component: ClinicSharesIndex
  },
  {
    path: ctx + '/zInfo',
    component: zInfo,
    children: [{
      path: 'wisdomHeadlines',
      name: 'wisdomHeadlines',
      component: wisdomHeadlines
    }, {
      path: 'optionalInformation',
      name: 'optionalInformation',
      component: optionalInformation
    }, {
      path: 'newsFlash',
      name: 'newsFlash',
      component: newsFlash
    }, {
      path: 'newsOpportunities',
      name: 'newsOpportunities',
      component: newsOpportunities
    }, {
      path: 'listedCompany',
      name: 'listedCompany',
      component: listedCompany
    }]
  },
  {
    path: ctx + '/siweiIndex',
    name: 'siweiIndex',
    component: SiweiIndex,
    children: [{
        path: '',
        component: marketBubble,
        name: 'dingpan'
      },
      {
        path: 'dingpan',
        component: marketBubble,
        name: 'dingpan'
      },
      {
        path: 'ztg',
        component: stockZtg,
        name: 'ztg'
      },
      {
        path: 'zbg',
        component: stockZbg,
        name: 'zbg'
      },
      {
        path: 'qsg',
        component: stockQsg,
        name: 'qsg'
      },
      {
        path: 'dtg',
        component: stockDtg,
        name: 'dtg'
      },
      {
        path: 'new',
        component: stockNew,
        name: 'new'
      },
      {
        path: 'cxg',
        component: stockCxg,
        name: 'cxg'
      },
      {
        path: 'zrzt',
        component: stockZrzt,
        name: 'zrzt'
      }
    ]
  }
  /* {
    path: ctx + '/stockMapOld/fullScreen',
    name: 'stockMapOldBig',
    component: StockMapOld
  },
  {
    path: ctx + '/stockMapOld/normal',
    name: 'stockMapOldNormal',
    component: StockMapOld
  } */

]