import Vue from 'vue'
import Vuex from 'vuex'
import zhikuanSearch from 'stores/zhikuan-search'
import stockMap from 'stores/stockmap'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    zhikuanSearch,
    stockMap
  }
})
