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
import fundIntell from 'stores/fund-intell'
import goldStrategy from 'stores/gold-strategy'
import z3touguIndex from 'stores/z3tougu-index'
import backtestDetail from 'stores/backtest-detail'
import smartPool from 'stores/smartPool'
// import filter from 'stores/filter'
import funcArchives from 'stores/fund-archives'
import fundRecord from 'stores/fund-record'
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
    z3sockjs,
    fundIntell,
    goldStrategy,
    z3touguIndex,
    backtestDetail,
    smartPool,
    funcArchives,
    fundRecord
    // filter
  }
})
