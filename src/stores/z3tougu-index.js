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
    hotTopic: [],
    preferredIndustryData: [],
    preferredTopicData: [],
    preferredStategyData: [],
    preferredSignalData: [],
    preferredGoldData: [],
    preferredFilterData: [],
    preferredTimeData: [],
    bullStockList: [],
    positionList: [],
    positionListFilter: []
  },
  mutations: {
    setStrategyList(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.strategyList = result.data
      }
    },
    setStrategyName(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.strategyNames = result.data
      }
    },
    setStrategyIndexs(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.strategyIndexs = result.data
      }
    },
    setTradeSignal(state, options) {
      const result = options.result
      if (result.errCode === 0 && result.data) {
        state.tradeSignal = result.data.content
      } else {
        state.tradeSignal = []
      }
    },
    setStrategyBlock(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.strategyBlock = result.data
      }
    },
    setIncomeList(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.incomeListData = result.data
      }
    },
    setFinanceNews(state, options) {
      const result = options.result
      state.financeNewsList = result.data
    },
    setListedCompanyNews(state, options) {
      const result = options.result
      state.listedCompanyNewsList = result.data
    },
    setNewsDetails(state, options) {
      const result = options.result
      state.newsDetails = result.data
    },
    setSectorsData(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.zXBRank = result.data['2'] // 中小板
        state.cYBRank = result.data['6'] // 创业板
        state.shangZRank = result.data['SH'] // 上证A股
        state.shenZRank = result.data['SZ'] // 深证A股
      }
    },
    setTopIndustry(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.topIndustry = result.data
      }
    },
    setHotTopic(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.hotTopic = result.data
      }
    },
    setPreferredIndustryData(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.preferredIndustryData = result.data
      }
    },
    setPreferredTopicData(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.preferredTopicData = result.data
      }
    },
    setPreferredStrategyData(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.preferredStrategyData = result.data
      }
    },
    setPreferredSignalData(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.preferredSignalData = result.data
      }
    },
    setPreferredGoldData(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.preferredGoldData = result.data
      }
    },
    setPreferredFilterData(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.preferredFilterData = result.data
      }
    },
    setPreferredTimeData(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.preferredTimeData = result.data
      }
    },
    setBullStock(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.bullStockList = result.data
      }
    },
    setPositionList(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.positionList = result.data
      }
    },
    setPositionListFilter(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.positionListFilter = result.data
      }
    }
  },
  actions: {
    getStrategyList({
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
    getStrategyName({
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
    getStrategyIndexs({
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
    getTradeSignal({
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
    getStrategyBlock({
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
    getIncomeList({
      commit
    }, {
      strategyId,
      startDate,
      endDate
    }) {
      const url = `${domain}/openapi/backtest/goldStrategy/returns.shtml?strategyId=${strategyId}&startDate=${startDate}&endDate=${endDate}`
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setIncomeList', {
          result: body
        })
      })
    },
    getFinanceNews({
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
    getListedCompanyNews({
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
    getNewsDetails({
      commit
    }, {
      newsId
    }) {
      const timestamp = new Date().getTime()
      const url = window.location.protocol + '//finance.jrj.com.cn/zs/content/' + newsId + '.js?time=' + timestamp
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
    getSectorsData({
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
    getTopIndustry({
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
    getHotTopic({
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
    }, // 行业优选
    getPreferredIndustryData({
      commit
    }) {
      const url = domain + '/openapi/industry/indexEquity.shtml'
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setPreferredIndustryData', {
          result: body
        })
      })
    }, // 题材优选
    getPreferredTopicData({
      commit
    }) {
      const url = domain + '/openapi/topic/indexEquity.shtml'
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setPreferredTopicData', {
          result: body
        })
      })
    }, // 策略优选
    getPreferredStrategyData({
      commit
    }, {
      type,
      id,
      limit
    }) {
      const url = `${domain}/openapi/backtest/equityStrategy/listEquities.shtml?type=${type}&id=${id}&limit=${limit}`
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setPreferredStrategyData', {
          result: body
        })
      })
    }, // 信号优选
    getPreferredSignalData({
      commit
    }) {
      const url = domain + '/openapi/backtest/equityStrategy/signal/listEquities.shtml'
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setPreferredSignalData', {
          result: body
        })
      })
    }, // 金牌优选
    getPreferredGoldData({
      commit
    }) {
      const url = domain + '/openapi/backtest/prior/gold'
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setPreferredGoldData', {
          result: body
        })
      })
    }, // 筛股优选
    getPreferredFilterData({
      commit
    }) {
      const url = domain + '/openapi/backtest/prior/filter?pageSize=7'
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setPreferredFilterData', {
          result: body
        })
      })
    }, // 择时优选
    getPreferredTimeData({
      commit
    }) {
      const url = domain + '/openapi/backtest/prior/time?pageSize=7'
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setPreferredTimeData', {
          result: body
        })
      })
    }, // 牛股风格
    getBullStock({
      commit
    }) {
      const url = domain + '/openapi/stockStyle.shtml'
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setBullStock', {
          result: body
        })
      })
    }, // 获取金牌当前持仓列表
    getPositionList({
      commit
    }, {
      strategyId,
      pageSize
    }) {
      const url = domain + '/openapi/backtest/prior/gold/' + strategyId + '?pageSize=' + pageSize
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setPositionList', {
          result: body
        })
      })
    }, // 获取筛股当前持仓列表
    getPositionListFilter({
      commit
    }, {
      strategyId,
      pageSize
    }) {
      const url = domain + '/openapi/backtest/prior/filter/' + strategyId + '?pageSize=' + pageSize
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setPositionListFilter', {
          result: body
        })
      })
    }
  }
}