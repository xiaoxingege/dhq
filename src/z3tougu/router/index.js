import Index from 'components/components-list'
import Search from 'components/search'
import Map from 'components/stock-map'
import SearchBox from 'components/search-box'
import DetailPages from 'components/detail-pages'

export default [
    { path: '/', name: 'home', component: Index },
    { path: '/search-box', name: 'search-box', component: SearchBox },
    { path: '/search/:linkText/:keyword', name: 'search', component: Search },
    { path: '/detail-pages/:id', name: 'detailPages', component: DetailPages },
    { path: '/map', name: 'map', component: Map }
]
