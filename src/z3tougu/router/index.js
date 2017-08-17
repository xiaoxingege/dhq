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

export default [
    { path: '/', name: 'home', component: Index },
    { path: '/search-box', name: 'search-box', component: SearchBox },
    { path: '/search/:linkText/:keyword', name: 'search', component: Search },
    { path: '/detail-pages/:id/:detailType', name: 'detailPages', component: DetailPages },
    { path: '/map', name: 'map', component: Map },
    { path: '/themeList', name: 'themelist', component: ThemeList },
    { path: '/themeIndex', name: 'themeindex', component: ThemeIndex },
    { path: '/siwei', name: 'bubbles', component: Siwei },
    { path: '/informatList/:inforId', name: 'themeInformat', component: ThemeInformat },
    { path: '/topic/:topicId', name: 'topicDetail', component: TopicDetail },
    { path: '/test/stock', name: 'teststock', component: StockTest }
]
