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
// import BacktestDetailH5 from 'components/backtest-detail-h5'
import foundpoollist from 'components/foundpoollist'
import foundpooldetail from 'components/foundpooldetail'
import ownstrategylist from 'components/ownstrategylist'
import editstrategy from 'components/editstrategy'
import Filter from 'components/filter/filter'
import BacktestFilter from 'components/backtest-filter'
import BacktestFilterH5 from 'components/backtest-filter-h5'
import BacktestTime from 'components/backtest-time'
import BacktestTimeH5 from 'components/backtest-time-h5'
import FundChart from 'components/fund-chart'
import FundFile from 'components/fund-file'
import z3TouguIndex from 'components/z3touguhome/z3tougu-index'
import NewsList from 'components/z3touguhome/newslist'
import NewsDetails from 'components/z3touguhome/news-details'
import SmartPoolList from 'components/smartPool/smartPoolList'
import SmartPoolListDetails from 'components/smartPool/smartPoolListDetails'
import FundArchives from 'components/fund-archives/fund-archives'
import FundRecommend from 'components/fund-recommend'
import StrategyList from 'components/z3touguhome/strategy-list'

export default [
    { path: '/', name: 'homeRoot', component: z3TouguIndex },
    { path: '/home', name: 'home', component: z3TouguIndex },
    { path: '/search-box', name: 'search-box', component: SearchBox },
    { path: '/search/:linkText/:keyword', name: 'search', component: Search },
    { path: '/detail-pages/:id/:detailType', name: 'detailPages', component: DetailPages },
    { path: '/map', name: 'map', component: Map },
    { path: '/map/fullScreen', name: 'bigmap', component: Map },
    { path: '/map/normal', name: 'normalmap', component: Map },
    { path: '/themeList', name: 'themelist', component: ThemeList },
    { path: '/themeIndex', name: 'themeindex', component: ThemeIndex },
    { path: '/siwei', name: 'bubbles', component: Siwei },
    { path: '/informatList/:inforId', name: 'themeInformat', component: ThemeInformat },
    { path: '/topic/:topicId', name: 'topicDetail', component: TopicDetail },
    { path: '/gold-strategy/:strategyId', name: 'goldStrategy', component: GoldStrategy },
    { path: '/gold-strategy/:strategyId/:showType', name: 'goldStrategyType', component: GoldStrategy },
    { path: '/gold-strategy-h5/:strategyId', name: 'goldStrategyH5', component: GoldStrategyH5 },
    // { path: '/backtest-detail-h5/:strategyId', name: 'BacktestDetailH5', component: BacktestDetailH5 },
    { path: '/foundpoollist', name: 'foundpoollist', component: foundpoollist },
    { path: '/foundpooldetail/:id', name: 'foundpooldetail', component: foundpooldetail },
    { path: '/ownstrategylist', name: 'ownstrategylist', component: ownstrategylist },
    { path: '/editstrategy', name: 'editstrategy', component: editstrategy },
    { path: '/z3touguIndex', name: 'z3touguIndex', component: z3TouguIndex },
    { path: '/filter', name: 'filter', component: Filter },
    { path: '/backtestFilter/:strategyId', name: 'backtestfilter', component: BacktestFilter },
    { path: '/backtestFilterH5/:strategyId', name: 'backtestfilterh5', component: BacktestFilterH5 },
    { path: '/backtestTime/:strategyId', name: 'backtesttime', component: BacktestTime },
    { path: '/backtestTimeH5/:strategyId', name: 'backtesttimeh5', component: BacktestTimeH5 },
    { path: '/fundRecommend', name: 'fundrecommend', component: FundRecommend },
    // { path: '/intellCombList', name: 'intellcomblist', component: IntellCombList },
    { path: '/fund-chart', name: 'fundchart', component: FundChart },
    { path: '/fund-file', name: 'fundfile', component: FundFile },
    { path: '/home/:newsType', name: 'newslist', component: NewsList },
    { path: '/home/:newsType/newsDetail/:newsId', name: 'newsdetails', component: NewsDetails },
    { path: '/smartPool', name: 'smartPoolList', component: SmartPoolList },
    { path: '/smartPoolListDetails/:id', name: 'smartPoolListDetails', component: SmartPoolListDetails },
     { path: '/fundArchives', name: 'fundArchives', component: FundArchives },
    { path: '/strategyList', name: 'strategyList', component: StrategyList }

]
