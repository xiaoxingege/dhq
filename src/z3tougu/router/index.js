import Index from 'components/components-list'
import Search from 'components/search'
import Map from 'components/z3tougu-map'
import SearchBox from 'components/search-box'
import DetailPages from 'components/detail-pages'
import ThemeList from 'components/theme-list'
import ThemeIndex from 'components/theme-index'
import Siwei from 'components/siwei'
import ThemeInformat from 'components/theme-informat-list'
import TopicDetail from 'components/topic-detail'
import StockTest from 'components/test-stock'
import GoldStrategy from 'components/gold-strategy'
import GoldStrategyH5 from 'components/gold-strategy-h5'
import foundpoollist from 'components/foundpoollist'

import z3TouguIndex from 'components/z3tougu-index'
// import GoldStrategy from 'components/gold-strategy'
// import Kgraph from 'components/kgraph'

export default [
    { path: '/', name: 'home', component: Index },
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
    { path: '/test/stock', name: 'teststock', component: StockTest },
    { path: '/gold-strategy/:strategyId', name: 'goldStrategy', component: GoldStrategy },
    { path: '/gold-strategy-h5', name: 'goldStrategyH5', component: GoldStrategyH5 },
    { path: '/test/stock', name: 'teststock', component: StockTest },
    { path: '/foundpoollist', name: 'foundpoollist', component: foundpoollist },
    { path: '/foundpoollist', name: 'foundpoollist', component: foundpoollist },
    { path: '/z3touguIndex', name: 'z3touguIndex', component: z3TouguIndex }
    // { path: '/gold-strategy', name: 'goldStrategy', component: GoldStrategy },
    // { path: '/kgraph', name: 'Kgraph', component: Kgraph }
]
