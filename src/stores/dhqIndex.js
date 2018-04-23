// import 'whatwg-fetch'
import fetchJsonp from 'fetch-jsonp'
import {
  domain
} from '../dhq/config'
import {
  protocol
} from '../dhq/config'
import fetch from '../z3tougu/util/z3fetch'
const chartLineObj = {
  priceArr: [],
  upDownExtent: '',
  stockVal: '',
  avgArr: [],
  upDown: '',
  line: ''
}
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
    preferredStrategyData: [],
    preferredSignalData: [],
    preferredGoldData: [],
    preferredFilterData: [],
    preferredTimeData: [],
    bullStockList: [],
    positionList: [],
    positionListFilter: [],
    chartData: {
      '000001.SH': chartLineObj,
      '399001.SZ': chartLineObj,
      '399006.SZ': chartLineObj,
      '399005.SZ': chartLineObj,
      '000300.SH': chartLineObj,
      '000016.SH': chartLineObj,
      '399905.SZ': chartLineObj,
      '000985.SH': chartLineObj
    },
    marketTemData: {
      barData: null,
      lineData: null
    },
    marginBalanceData: {
      marginBalance: null,
      reference: null
    },
    toNorthData: [],
    toSouthData: [],
    dpIndexData: []
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
    },
    setMarketTemData(state, options) {
      const result = options.result
      if (result.retCode === 0) {
        state.marketTemData = result.data
        state.marketTemData.barData = result.data.suggestPosition
        state.marketTemData.lineData = result.data.reference
      }
    },
    setMarginBalance(state, options) {
      const result = options.result
      if (result.retCode === 0) {
        state.marginBalanceData = result.data
        state.marginBalanceData.marginBalance = result.data.marginBalance
        state.marginBalanceData.reference = result.data.reference
      }
    },
    setToNorthData(state, options) {
      const result = options.result
      if (result.retCode === 0) {
        state.toNorthData = result.data.fund
      }
    },
    setToSouthData(state, options) {
      const result = options.result
      if (result.retCode === 0) {
        state.toSouthData = result.data.fund
      }
    },
    setDpIndexData(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.dpIndexData = result.data
      }
    },
    setLsChartData(state, result) {
      if (result.body.errCode === 0) {
        state.chartData[result.stockCode] = result.body.data
      } else {
        state.chartData[result.stockCode] = {}
      }
    },
    chartSocket(state, result) {
      if (state.chartData.hasOwnProperty(result.stockCode)) {
        state.chartData[result.stockCode].avgArr[result.list[0].time] = result.list[0].avgpx // 均值
        state.chartData[result.stockCode].priceArr[result.list[0].time] = result.list[0].lastpx // 当前价
        state.chartData[result.stockCode].stockVal = result.list[0].lastpx // 最新价
        state.chartData[result.stockCode].upDown = result.list[0].pxchg // 涨跌
        state.chartData[result.stockCode].upDownExtent = result.list[0].pxchgRatio // 涨跌幅
      }
      if (state.dpIndexData.length > 0) {
        state.dpIndexData.forEach(function(data) {
          if (data.stockCode === result.stockCode) {
            data.upDown = result.list[0].pxchg // 涨跌
            data.upDownExtent = result.list[0].pxchgRatio // 涨跌幅
            data.stockVal = result.list[0].lastpx // 最新价
            data.amount = result.list[0].totalTradeValue // 金额（总成交量）
          }
        })
      }
    }
  },
  actions: {
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
    /* 股票涨幅榜 */
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
    /* 行业板块 */
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
    /* 题材板块 */
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
    },
    /* 日内行情图 */
    getIndexChartData({
      commit
    }, {
      stockCode
    }) {
      return fetch(`${domain}/openapi/lines/${stockCode}.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setLsChartData', {
          body,
          stockCode
        })
      })
    },
    /* 大盘温度计 */
    getMarketTemData({
      commit
    }) {
      const url = `${protocol}://itougu.jrj.com.cn/smartstock/api/market/queryPerformance.jspa`
      return fetch(url, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setMarketTemData', {
          result: body
        })
      })
    },
    /* 两融余额 */
    getMarginBalance({
      commit
    }) {
      const url = `${protocol}://itougu.jrj.com.cn/smartstock/api/fund/queryMarginBalance.jspa`
      return fetch(url, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setMarginBalance', {
          result: body
        })
      })
    },
    /* 北向资金走势 */
    getToNorthData({
      commit
    }, {
      type
    }) {
      const url = `${protocol}://itougu.jrj.com.cn/smartstock/api/fund/queryToNorth.jspa?type=${type}`
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setToNorthData', {
          result: body
        })
      })
    },
    /* 南向资金走势 */
    getToSouthData({
      commit
    }, {
      type
    }) {
      const url = `${protocol}://itougu.jrj.com.cn/smartstock/api/fund/queryToSouth.jspa?type=${type}`
      return fetch(url, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setToSouthData', {
          result: body
        })
      })
    },
    /* 大盘指数 */
    getDpIndexData({
      commit
    }, {
      stockCode
    }) {
      const url = `${domain}/openapi/stockIndex/${stockCode}.shtml`
      return fetch(url, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setDpIndexData', {
          result: body
        })
      })
    }
  }
}