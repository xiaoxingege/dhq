import Vue from 'vue'
import Vuex from 'vuex'
import zhikuanSearch from 'stores/zhikuan-search'
import zhikuanSearchList from 'stores/zhikuan-search-list'
import zhikuanDetailPages from 'stores/zhikuan-detail-pages'
import stockMap from 'stores/stockmap'
import topic from 'stores/z3tougu-theme'
import bubbles from 'stores/bubbles'
import stock from 'stores/stock'
import z3sockjs from 'stores/z3sockjs'
/* import goldStrategy from 'stores/gold-strategy'*/

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    zhikuanSearch,
    zhikuanSearchList,
    stockMap,
    zhikuanDetailPages,
    topic,
    bubbles,
    stock,
    z3sockjs
    /*,
    goldStrategy*/
  }
})
