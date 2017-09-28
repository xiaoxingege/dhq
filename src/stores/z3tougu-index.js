// import 'whatwg-fetch'
import fetchJsonp from 'fetch-jsonp'
import {
  domain
} from '../z3tougu/config'
import fetch from '../z3tougu/util/z3fetch'
export default {
  namespaced: true,
  state: {
    strategyList: [],
    financeNewsList: [],
    listedCompanyNewsList: [],
    newsDetails: null,
    homeMapData: [],
    homeRangeData: null,
    strategyBlock: null,
    incomeListData: [],
    strategyNames: [],
    strategyIndexs: null,
    tradeSignal: [],
    shangZRank: null,
    shenZRank: null,
    zXBRank: null,
    cYBRank: null,
    topIndustry: [],
    hotTopic: []
  },
  mutations: {
    setStrategyList (state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.strategyList = result.data
      }
    },
    setStrategyName (state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.strategyNames = result.data
      }
    },
    setStrategyIndexs (state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.strategyIndexs = result.data
      }
    },
    setTradeSignal (state, options) {
      const result = options.result
      if (result.errCode === 0 && result.data) {
        state.tradeSignal = result.data.content
      } else {
        state.tradeSignal = []
      }
    },
    setStrategyBlock (state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.strategyBlock = result.data
      }
    },
    setIncomeList (state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.incomeListData = result.data
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
    setSectorsData (state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.zXBRank = result.data['2'] // 中小板
        state.cYBRank = result.data['6'] // 创业板
        state.shangZRank = result.data['SH'] // 上证A股
        state.shenZRank = result.data['SZ'] // 深证A股
      }
    },
    setTopIndustry (state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.topIndustry = result.data
      }
    },
    setHotTopic (state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.hotTopic = result.data
      }
    }
  },
  actions: {
    getStrategyList ({
      commit
    }, {
      sort,
      direction,
      size
    }) {
      const url = `${domain}/openapi/backtest/goldStrategy/sort.shtml?sort=${sort}&direction=${direction}&size=${size}`
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setStrategyList', {
          result: body
        })
      })
    },
    getStrategyName ({
      commit
    }, {
      sort,
      direction,
      size
    }) {
      const url = `${domain}/openapi/backtest/goldStrategy/top.shtml?sort=${sort}&direction=${direction}&size=${size}`
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setStrategyName', {
          result: body
        })
      })
    },
    getStrategyIndexs ({
      commit
    }, {
      strategyId
    }) {
      const url = `${domain}/openapi/backtest/goldStrategy/indexAndFollows.shtml?strategyId=${strategyId}`
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setStrategyIndexs', {
          result: body
        })
      })
    },
    getTradeSignal ({
      commit
    }, {
      strategyId,
      buySellType,
      page,
      size
    }) {
      const url = `${domain}/openapi/backtest/goldStrategy/buySellSignal.shtml?strategyId=${strategyId}&buySellType=${buySellType}&page=${page}&size=${size}`
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setTradeSignal', {
          result: body
        })
      })
    },
    getStrategyBlock ({
      commit
    }, {
      query,
      size,
      page
    }) {
      const url = `${domain}/openapi/backtest/goldStrategy/indexAndReturns.shtml?query=${query}&size=${size}&page=${page}`
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setStrategyBlock', {
          result: body
        })
      })
    },
    getIncomeList ({
      commit
    }, {
      strategyId
    }) {
      const url = `${domain}/openapi/backtest/goldStrategy/returns.shtml?strategyId=${strategyId}`
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setIncomeList', {
          result: body
        })
      })
    },
    getFinanceNews ({
      commit
    }, {
      size
    }) {
      const timestamp = new Date().getTime()
      const url = window.location.protocol + '//finance.jrj.com.cn/zs/yw/top' + size + '.js?time=' + timestamp
      return fetchJsonp(url, {
        jsonpCallbackFunction: 'jsonp',
        cache: 'reload'
      }).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setFinanceNews', {
          result: body
        })
      })
    },
    getListedCompanyNews ({
      commit
    }, {
      size
    }) {
      const timestamp = new Date().getTime()
      const url = window.location.protocol + '//finance.jrj.com.cn/zs/company/top' + size + '.js?time=' + timestamp
      return fetchJsonp(url, {
        jsonpCallbackFunction: 'jsonp'
      }).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setListedCompanyNews', {
          result: body
        })
      })
    },
    getNewsDetails ({
      commit
    }, {
      newsId
    }) {
      const url = window.location.protocol + '//finance.jrj.com.cn/zs/content/' + newsId + '.js'
      return fetchJsonp(url, {
        jsonpCallbackFunction: 'jsonp'
      }).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setNewsDetails', {
          result: body
        })
      })
    },
    getSectorsData ({
      commit
    }, {
      size
    }) {
      const url = domain + '/openapi/top/' + size
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setSectorsData', {
          result: body
        })
      })
    },
    getTopIndustry ({
      commit
    }, {
      size
    }) {
      const url = domain + '/openapi/topIndustry/' + size
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setTopIndustry', {
          result: body
        })
      })
    },
    getHotTopic ({
      commit
    }, {
      limit,
      sortField
    }) {
      const url = `${domain}/openapi/topic/indexHotTopic.shtml?limit=${limit}&sortField=${sortField}`
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setHotTopic', {
          result: body
        })
      })
    }
  }
}
