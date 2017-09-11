import 'whatwg-fetch'
import fetchJsonp from 'fetch-jsonp'
export default {
  namespaced: true,
  state: {
    strategyList: [],
    financeNewsList: [],
    listedCompanyNewsList: [],
    newsDetails: null,
    homeMapData: [],
    homeRangeData: null,
    strategyBlock: null
  },
  mutations: {
    setStrategyList (state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.strategyList = result.data
      }
    },
    setStrategyBlock (state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.strategyBlock = result.data
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
    },
    setHomeMapData (state, options) {
      const result = options.result
      state.homeMapData = result.voList
    },
    setHomeRangeData (state, options) {
      const result = options.result
      state.homeRangeData = result.data
    }
  },
  actions: {
    getStrategyList ({ commit }, { sort, direction, size }) {
      const url = `http://test.z3quant.com/openapi/backtest/goldStrategy/sort.shtml?sort=${sort}&direction=${direction}&size=${size}`
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setStrategyList', {
          result: body
        })
      })
    },
    getStrategyBlock ({ commit }, { query, size, page }) {
      const url = `http://test.z3quant.com/openapi/backtest/goldStrategy/indexAndReturns.shtml?query=${query}&size=${size}&page=${page}`
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setStrategyBlock', {
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
    },
    getHomeMapData ({ commit }, { date }) {
      const url = 'http://test.z3quant.com/openapi/openjson/tx/chg/' + date + '.json'
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setHomeMapData', {
          result: body
        })
      })
    },
    getHomeRangeData ({ commit }) {
      const url = 'http://test.z3quant.com/openapi/tx/chg/'
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setHomeRangeData', {
          result: body
        })
      })
    }
  }
}
