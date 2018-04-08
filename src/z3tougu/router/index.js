import Search from 'components/search'
import Map from 'components/z3tougu-map'
import SearchBox from 'components/search-box'
import DetailPages from 'components/detail-pages'
import ThemeList from 'components/theme-list'
import ThemeIndex from 'components/theme-index'
import Siwei from 'components/siwei'
import ThemeInformat from 'components/theme-informat-list'
import TopicDetail from 'components/topic-detail'
import GoldStrategy from 'components/gold-strategy'
import GoldStrategyH5 from 'components/gold-strategy-h5'
import BacktestDetailH5 from 'components/backtest-detail-h5'
import foundpoollist from 'components/foundpoollist'
import foundpooldetail from 'components/foundpooldetail'
import ownstrategylist from 'components/ownstrategylist'
import editstrategy from 'components/editstrategy'
import runstatestrategy from 'components/runstatestrategy'
import Filter from 'components/filter/filter'
import BacktestFilter from 'components/backtest-filter'
import BacktestFilterH5 from 'components/backtest-filter-h5'
import BacktestFilterBuysell from 'components/backtest-filter-buysell'
import BacktestFilterBuysell2 from 'components/backtest-filter-buysell2'
import BacktestTime from 'components/backtest-time'
import BacktestTimeH5 from 'components/backtest-time-h5'
import FundChart from 'components/fund-chart'
import FundFile from 'components/fund-file'
import z3TouguIndex from 'components/z3touguhome/z3tougu-index'
import NewsList from 'components/z3touguhome/newslist'
import SmartPoolList from 'components/smartPool/smartPoolList'
import SmartPoolListDetails from 'components/smartPool/smartPoolListDetails'
import FundArchives from 'components/fund-archives/fund-archives'
import FundRecommend from 'components/fund-recommend'
import StrategyList from 'components/z3touguhome/strategy-list'
import backtestHelp from 'components/help'
import finance from 'components/finance'
import blank from 'components/z3touguhome/blank'
import errorPage from 'components/z3tougu-error-page'
import CustomerList from 'components/customer-list'
import PortraitDetail from 'components/customerPortrait/portrait-detail'
import OptionalStock from 'components/optional-stock/optional-stock'
import IndustryIndex from 'components/industry-index'
import IndustryDetail from 'components/industry-detail'
import TimeIndex from 'components/time-index'
import BullStockList from 'components/bull-stock-list'
import BullStock from 'components/bullStock/bull-stock-index'
import AutoinpBox from 'components/autoinp-box'
import PlateMap from 'components/plate-map/plate-map-index'
import FilterStrategyList from 'components/z3-filter-strategy-list'
import DragonListDialog from 'components/dragon-list-dialog'
import wisdomHeadlines from 'components/intelligence-info/wisdom-headlines'
import optionalInformation from 'components/intelligence-info/optional-information'
import newsFlash from 'components/intelligence-info/news-flash'
import newsOpportunities from 'components/intelligence-info/news-opportunities'
import listedCompany from 'components/intelligence-info/listed-company'
/* import StockMapOld from 'components/stockmap-old/stockmap-old' */
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
  {
    path: ctx + '/fundRecommend',
    name: 'fundrecommend',
    component: FundRecommend
  },
  // { path: ctx+'/intellCombList', name: 'intellcomblist', component: IntellCombList },
  {
    path: ctx + '/fund-chart',
    name: 'fundchart',
    component: FundChart
  },
  {
    path: ctx + '/fund-file',
    name: 'fundfile',
    component: FundFile
  },
  {
    path: ctx + '/newslist',
    name: 'newslist',
    component: NewsList
  },
  {
    path: ctx + '/smartPool',
    name: 'smartPoolList',
    component: SmartPoolList
  },
  {
    path: ctx + '/smartPoolListDetails/:id',
    name: 'smartPoolListDetails',
    component: SmartPoolListDetails
  },
  {
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
  },
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
    path: ctx + '/wisdomHeadlines',
    name: 'wisdomHeadlines',
    component: wisdomHeadlines
  },
  {
    path: ctx + '/optionalInformation',
    name: 'optionalInformation',
    component: optionalInformation
  },
  {
    path: ctx + '/newsFlash',
    name: 'newsFlash',
    component: newsFlash
  },
  {
    path: ctx + '/newsOpportunities',
    name: 'newsOpportunities',
    component: newsOpportunities
  },
  {
    path: ctx + '/listedCompany',
    name: 'listedCompany',
    component: listedCompany

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
