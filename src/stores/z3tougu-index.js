import 'whatwg-fetch'
import fetchJsonp from 'fetch-jsonp'
export default {
  namespaced: true,
  state: {
    strategyList: []
  },
  mutations: {
    setStrategyList (state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.strategyList = result.data
      }
    },
    setFinanceNews (state, options) {
      const result = options.result
      state.financeNewsList = result.data
    },
    setListedCompanyNews (state, options) {
      const result = options.result
      state.listedCompanyNewsList = result.data
    },
    setNewsDetails (state, options) {
      const result = options.result
      state.newsDetails = result.data
    }
  },
  actions: {
    getStrategyList ({ commit }, { sort, direction, size }) {
      const url = `http://www.z3quant.com/openapi/backtest/goldStrategy/sort.shtml?sort=${sort}&direction=${direction}&size=${size}`
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setStrategyList', {
          result: body
        })
      })
    },
    getFinanceNews  ({ commit }, { size }) {
      const url = 'http://finance.jrj.com.cn/zs/yw/top' + size + '.js'
      return fetchJsonp(url, { jsonpCallbackFunction: 'jsonp' }).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setFinanceNews', {
          result: body
        })
      })
    },
    getListedCompanyNews  ({ commit }, { size }) {
      const url = 'http://finance.jrj.com.cn/zs/company/top' + size + '.js'
      return fetchJsonp(url, { jsonpCallbackFunction: 'jsonp' }).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setListedCompanyNews', {
          result: body
        })
      })
    },
    getNewsDetails  ({ commit }, { newsId }) {
      const url = 'http://finance.jrj.com.cn/zs/content/' + newsId + '.js'
      return fetchJsonp(url, { jsonpCallbackFunction: 'jsonp' }).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setNewsDetails', {
          result: body
        })
      })
    }
  }
}
