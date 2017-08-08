import Vue from 'vue'
import Vuex from 'vuex'
import zhikuanSearch from 'stores/zhikuan-search'
import zhikuanSearchList from 'stores/zhikuan-search-list'
import zhikuanDetailPages from 'stores/zhikuan-detail-pages'
import stockMap from 'stores/stockmap'
import topic from 'stores/z3tougu-theme'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    zhikuanSearch,
    zhikuanSearchList,
    stockMap,
    zhikuanDetailPages,
    topic
  }
})
