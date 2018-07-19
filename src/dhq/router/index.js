// 板块
const ThemeIndex = () =>
  import ( /* webpackChunkName: "plate" */ 'components/theme-index')
const TopicDetail = () =>
  import ( /* webpackChunkName: "plate" */ 'components/topic-detail')
const IndustryIndex = () =>
  import ( /* webpackChunkName: "plate" */ 'components/industry-index')
const IndustryDetail = () =>
  import ( /* webpackChunkName: "plate" */ 'components/industry-detail')
const DetailPages = () =>
  import ( /* webpackChunkName: "detail-pages" */ 'components/detail-pages')
// 大盘云图
const Map = () =>
  import ( /* webpackChunkName: "map" */ 'components/z3tougu-map')
const PlateMap = () =>
  import ( /* webpackChunkName: "map" */ 'components/plate-map/plate-map-index')
// 首页
import DhqIndex from 'components/dhqHome/dhqIndex'
import NewsList from 'components/dhqHome/newslist'
// 工具-资讯
const Replay = () =>
  import ( /* webpackChunkName: "info" */ 'components/jjrl/replay')
const Headline = () =>
  import ( /* webpackChunkName: "info" */ 'components/headlines/headline')
const DhqNews = () =>
  import ( /* webpackChunkName: "info" */ 'components/dhq-news-detail')
// 工具-决策
const Jzxg = () =>
  import ( /* webpackChunkName: "strategy" */ 'components/jzxg/jzxg')
const TouguStudio = () =>
  import ( /* webpackChunkName: "strategy" */ 'components/touguStudio/touguStudio')
const TouguWorkspace = () =>
  import ( /* webpackChunkName: "strategy" */ 'components/touguStudio/tougu-workspace')
const SignalIndex = () =>
  import ( /* webpackChunkName: "strategy" */ 'components/toolCenter/signal-index')
const AireplayIndex = () =>
  import ( /* webpackChunkName: "strategy" */ 'components/toolCenter/ai-replay-index')
// 测试贯通页
const TestNative = () =>
  import ('components/test/test-native')
/* import DhqIndex from 'components/dhqHome/dhqIndex'
import NewsList from 'components/dhqHome/newslist'
import TopicDetail from 'components/topic-detail'
import IndustryDetail from 'components/industry-detail'
import ThemeIndex from 'components/theme-index'
import IndustryIndex from 'components/industry-index'
import DetailPages from 'components/detail-pages'
import Jzxg from 'components/jzxg/jzxg'
import Replay from 'components/jjrl/replay'
import TouguStudio from 'components/touguStudio/touguStudio'
import Map from 'components/z3tougu-map'
import PlateMap from 'components/plate-map/plate-map-index'
import TouguWorkspace from 'components/touguStudio/tougu-workspace'
import Headline from 'components/headlines/headline'
import SignalIndex from 'components/toolCenter/signal-index'
import TestNative from 'components/test/test-native'
import DhqNews from 'components/dhq-news-detail'
import AireplayIndex from 'components/toolCenter/ai-replay-index'*/
// import notOpenStock from 'components/jjrl/notOpenStock'
// import Search from 'components/search'
// import SearchBox from 'components/search-box'
// import ThemeList from 'components/theme-list'
// import Siwei from 'components/siwei'
// import ThemeInformat from 'components/theme-informat-list'
// import GoldStrategy from 'components/gold-strategy'
// import GoldStrategyH5 from 'components/gold-strategy-h5'
// import BacktestDetailH5 from 'components/backtest-detail-h5'
// import foundpoollist from 'components/foundpoollist'
// import foundpooldetail from 'components/foundpooldetail'
// import ownstrategylist from 'components/ownstrategylist'
// import editstrategy from 'components/editstrategy'
// import runstatestrategy from 'components/runstatestrategy'
// import Filter from 'components/filter/filter'
// import BacktestFilter from 'components/backtest-filter'
// import BacktestFilterH5 from 'components/backtest-filter-h5'
// import BacktestFilterBuysell from 'components/backtest-filter-buysell'
// import BacktestFilterBuysell2 from 'components/backtest-filter-buysell2'
// import BacktestTime from 'components/backtest-time'
// import BacktestTimeH5 from 'components/backtest-time-h5'
// import FundChart from 'components/fund-chart'
// import FundFile from 'components/fund-file'
// import z3TouguIndex from 'components/z3touguhome/z3tougu-index'
// import SmartPoolList from 'components/smartPool/smartPoolList'
// import SmartPoolListDetails from 'components/smartPool/smartPoolListDetails'
/* import FundArchives from 'components/fund-archives/fund-archives'
 import FundRecommend from 'components/fund-recommend'
 import StrategyList from 'components/z3touguhome/strategy-list'
 import backtestHelp from 'components/help'
 import finance from 'components/finance'
 import blank from 'components/z3touguhome/blank'
 import errorPage from 'components/z3tougu-error-page'
 import CustomerList from 'components/customer-list'
 import PortraitDetail from 'components/customerPortrait/portrait-detail'
 import OptionalStock from 'components/optional-stock/optional-stock'
 import TimeIndex from 'components/time-index'
 import BullStockList from 'components/bull-stock-list'
import BullStock from 'components/bullStock/bull-stock-index'
import AutoinpBox from 'components/autoinp-box'
import FilterStrategyList from 'components/z3-filter-strategy-list'
import DragonListDialog from 'components/dragon-list-dialog'
import ClinicSharesIndex from 'components/clinicShares/clinic-shares-index'*/
/* import wisdomHeadlines from 'components/intelligence-info/wisdom-headlines'
import optionalInformation from 'components/intelligence-info/optional-information'
import newsFlash from 'components/intelligence-info/news-flash'
import newsOpportunities from 'components/intelligence-info/news-opportunities'
import listedCompany from 'components/intelligence-info/listed-company'
import zInfo from 'components/intelligence-info/z-info' */
/* import SiweiIndex from 'components/siwei/siwei-index'
import stockZtg from 'components/siwei/stock-ztg'
import stockZbg from 'components/siwei/stock-zbg'
import marketBubble from 'components/siwei/market'
import stockQsg from 'components/siwei/stock-qsg'
import stockDtg from 'components/siwei/stock-dtg'
import stockNew from 'components/siwei/stock-new'
import stockCxg from 'components/siwei/stock-cxg'
import stockZrzt from 'components/siwei/stock-ystzt' */
import {
  ctx
} from '../config'

export default [{
    path: ctx,
    component: DhqIndex
  },
  {
    path: ctx + '/',
    name: 'homeRoot',
    component: DhqIndex
  },
  {
    path: ctx + '/home',
    name: 'home',
    component: DhqIndex
  },
  {
    path: ctx + '/newslist',
    name: 'newslist',
    component: NewsList
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
    path: ctx + '/jzxg',
    name: 'jzxg',
    component: Jzxg
  },
  {
    path: ctx + '/jjrl',
    name: 'replay',
    component: Replay
  },
  /*   {
      path: ctx + '/jjrl',
      name: 'notOpenStock',
      component: notOpenStock
    }, */
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
    path: ctx + '/detail-pages/:detailType/:id',
    name: 'detailPages',
    component: DetailPages
  },
  {
    path: ctx + '/touguStudio',
    name: 'touguStudio',
    component: TouguStudio
  },
  {
    path: ctx + '/tougu-workspace/:roomId',
    name: 'touguWorkspace',
    component: TouguWorkspace
  },
  {
    path: ctx + '/headline',
    name: 'headline',
    component: Headline
  },
  {
    path: ctx + '/signalIndex',
    name: 'signalindex',
    component: SignalIndex
  },
  {
    path: ctx + '/aireplayIndex',
    name: 'aireplayindex',
    component: AireplayIndex
  },
  /* {
     path: ctx + '/search-box',
     name: 'search-box',
     component: SearchBox
   },*/
  /* {
     path: ctx + '/search/:linkText/:keyword',
     name: 'search',
     component: Search
   },*/
  {
    path: ctx + '/map',
    name: 'map',
    component: Map
  },
  {
    path: ctx + '/plateMap',
    name: 'plateMap',
    component: PlateMap
  },
  {
    path: ctx + '/testNative',
    name: 'testNative',
    component: TestNative
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
    path: ctx + '/dhqNews',
    name: 'dhqNews',
    component: DhqNews,
    props: (route) => ({
      iiid: route.query.id || '',
      newsUrl: route.query.sourceUrl ? decodeURIComponent(route.query.sourceUrl) : ''
    })
  }
  /* {
     path: ctx + '/themeList',
     name: 'themelist',
     component: ThemeList
   },*/
  /*  {
      path: ctx + '/siwei',
      name: 'bubbles',
      component: Siwei
    },*/
  /* {
     path: ctx + '/siwei/:isFilter',
     name: 'bubble',
     component: Siwei
   },*/
  /* {
     path: ctx + '/informatList/:inforId',
     name: 'themeInformat',
     component: ThemeInformat
   },*/
  /* {
     path: ctx + '/gold-strategy/:strategyId',
     name: 'goldStrategy',
     component: GoldStrategy
   },*/
  /* {
     path: ctx + '/gold-strategy/:strategyId/:showType',
     name: 'goldStrategyType',
     component: GoldStrategy
   },*/
  /* {
     path: ctx + '/gold-strategy-h5/:strategyId',
     name: 'goldStrategyH5',
     component: GoldStrategyH5
   },*/
  /* {
     path: ctx + '/backtest-detail-h5/:strategyId/:backtestId',
     name: 'BacktestDetailH5',
     component: BacktestDetailH5
   },*/
  /* {
     path: ctx + '/foundpoollist',
     name: 'foundpoollist',
     component: foundpoollist
   },*/
  /* {
     path: ctx + '/foundpooldetail/:id',
     name: 'foundpooldetail',
     component: foundpooldetail
   },*/
  /* {
     path: ctx + '/ownstrategylist',
     name: 'ownstrategylist',
     component: ownstrategylist
   },*/
  /* {
     path: ctx + '/editstrategy',
     name: 'editstrategy',
     component: editstrategy
   },*/
  /* {
     path: ctx + '/runstatestrategy',
     name: 'runstatestrategy',
     component: runstatestrategy
   },*/
  /* {
     path: ctx + '/z3touguIndex',
     name: 'z3touguIndex',
     component: z3TouguIndex
   },*/
  /* {
     path: ctx + '/filter',
     name: 'filter',
     component: Filter
   },*/
  /* {
     path: ctx + '/backtestFilter/:strategyId',
     name: 'backtestfilter',
     component: BacktestFilter
   },*/
  /* {
     path: ctx + '/backtestFilterBuysell',
     name: 'backtestfilterbuysell',
     component: BacktestFilterBuysell
   },*/
  /* {
     path: ctx + '/backtestFilterBuysell2',
     name: 'backtestfilterbuysell2',
     component: BacktestFilterBuysell2
   },*/
  /* {
     path: ctx + '/backtestFilterH5/:strategyId',
     name: 'backtestfilterh5',
     component: BacktestFilterH5
   },*/
  /* {
     path: ctx + '/backtestTime/:strategyId',
     name: 'backtesttime',
     component: BacktestTime
   },*/
  /* {
     path: ctx + '/backtestTimeH5/:strategyId',
     name: 'backtesttimeh5',
     component: BacktestTimeH5
   },*/
  /* {
     path: ctx + '/fundRecommend',
     name: 'fundrecommend',
     component: FundRecommend
   },*/
  // { path: ctx+'/intellCombList', name: 'intellcomblist', component: IntellCombList },
  /* {
     path: ctx + '/fund-chart',
     name: 'fundchart',
     component: FundChart
   },*/
  /* {
     path: ctx + '/fund-file',
     name: 'fundfile',
     component: FundFile
   },*/
  /* {
     path: ctx + '/fundArchives',
     name: 'fundArchives',
     component: FundArchives
   },
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
   {
     path: ctx + '/blank',
     name: 'blank',
     component: blank
   },
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
   {
     path: ctx + '/test/timeIndex',
     name: 'timeindex',
     component: TimeIndex
   },
   {
     path: ctx + '/bullStockList',
     name: 'bullstocklist',
     component: BullStockList
   },
   {
     path: ctx + '/test/autoinpBox',
     name: 'autoinpbox',
     component: AutoinpBox
   }*/


  /*
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
     path: ctx + '/clinicSharesIndex',
     name: 'clinicsharesindex',
     component: ClinicSharesIndex
   }*/
  /* {
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
  }, */
  /* {
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
  } */
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