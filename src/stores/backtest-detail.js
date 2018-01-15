/*
 * 同步形式的store，设置好state中的值即可
 * namespaced为true，是为了避免store的module之间，getters、mutations、actions发生命名冲突
 */

// whatwg-fetch仅能在浏览器环境使用。
// import 'whatwg-fetch'
import fetch from '../z3tougu/util/z3fetch'
import {
  domain
} from '../z3tougu/config'

const STOCK_PAGE_SIZE = 10
const TRADE_PAGE_SIZE = 10
const BUY_PAGE_SIZE = 10

export default {
  namespaced: true,
  state: {
    // 初始化时，务必要把所有的数据成员做初始化，否则后面数据的更新，将不会触发显示的更

    basicFilter: { // 筛股页头部
      strategyId: '',
      strategyName: '',
      strategyDesc: '',
      filterParams: '',
      createDate: '',
      backtestStartDate: '',
      backtestEndDate: '',
      holdDay: '',
      evaluationIndexs: {},
      filterSummary: {}
    },
    tradeDetail: [], // 当日交易
    nowStock: [], // 当前选股
    timeStrategy: {
      strategyId: '',
      strategyName: '',
      strategyDesc: '',
      createDate: '',
      backtestStartDate: '',
      backtestEndDate: '',
      buyStrategyIndexList: [],
      sellStrategyIndexList: [],
      buyConExp: '',
      sellConExp: '',
      evaluationIndexs: {}

    },
    kLineData: {},
    stockPage: 0,
    stockPageSize: STOCK_PAGE_SIZE,
    stockTotal: 0,
    tradePage: 0,
    tradePageSize: TRADE_PAGE_SIZE,
    tradeTotalPage: 0,
    searchList: [],
    buyStocks: [], // 买入卖出
    buyPageSize: BUY_PAGE_SIZE,
    buyPage: 1,
    buyTotalPage: 0,
    buysell: [], // 新买入卖出
    attentionData: null,
    addAttention: false,
    delAttention: false,
    stockList: [],
    syqxtData: {
      firstDate: '',
      lastDate: '',
      xData: [],
      data1: [],
      data2: []
    },
    sylfbData: {
      xData: [],
      data1: [],
      data2: []
    },
    startDate: '',
    endDate: '',
    strategyId: ''
    /* evaluationIndexs: {
     winRatio:'',
     avgReturnExcess:'',
     avgReturn:'',
     winLossRatio:'',
     holdDay:'',
     maxWin:'',
     maxLoss:''
     },*/

  },
  mutations: {
    setFilterOptions(state, result) {
      state.strategyId = result.strategyId
      state.startDate = result.startDate
      state.endDate = result.endDate
    },
    updateBasicFilter(state, filterdetail) {
      state.basicFilter = filterdetail
      state.basicFilter.filterSummary = JSON.parse(filterdetail.filterSummary)
    },
    updateTradeDetail(state, tradeDetail) {
      state.tradeDetail = tradeDetail
    },
    updateBuyStocks(state, buyStocks) {
      state.buyStocks = buyStocks
    },
    updateBuyPage(state, options) {
      state.buyTotalPage = options.totalPages
    },
    updateBuysellStocks(state, buysell) {
      state.buysell = buysell
    },
    updateNowStock(state, stock) {
      state.nowStock = stock
    },
    updateTimeStrategy(state, timestra) {
      // console.log(timestra)
      state.timeStrategy = timestra
      // console.log(state.timeStrategy.buyStrategyIndexList[0].indexParams)
    },
    updateKline(state, kLineData) {
      // console.log(kLineData)
      state.kLineData = kLineData
    },
    updateStockPage(state, options) {
      state.stockTotal = options.totalPages
    },
    updateTradePage(state, options) {
      state.tradeTotalPage = options.totalPages
    },
    updateSearch(state, search) {
      state.searchList = search
    },
    setStockList(state, options) {
      state.stockList = options
    },
    setAttentionData(state, result) {
      if (result.errCode === 0) {
        state.attentionData = true
      } else if (result.errCode === 1233) {
        state.attentionData = false
      } else {
        state.attentionData = null
      }
    },
    addAttentionData(state, result) {
      if (result.errCode === 0) {
        state.addAttention = true
      } else {
        state.addAttention = false
      }
    },
    delAttentionData(state, result) {
      if (result.errCode === 0) {
        state.delAttention = true
      } else {
        state.delAttention = false
      }
    },
    setSylqxData(state, result) {
      if (result.errCode === 0) {
        if (state.startDate === '' && state.endDate === '') {
          state.syqxtData.firstDate = ''
          state.syqxtData.lastDate = ''
        }

        state.syqxtData.xData = []
        state.syqxtData.data1 = []
        state.syqxtData.data2 = []
        const data = result.data
        const dataLen = data.length - 1
        if (state.startDate === '' && state.endDate === '') {
          state.syqxtData.firstDate = data[0].backtestDate
          state.syqxtData.lastDate = data[dataLen].backtestDate
        }
        for (var i = 0; i < data.length; i++) {
          state.syqxtData.xData.push(data[i].backtestDate)
          state.syqxtData.data1.push(Number(data[i].totalReturn))
          state.syqxtData.data2.push(Number(data[i].benchmarkPeriodReturn))
        }
      } else {
        state.syqxtData.firstDate = ''
        state.syqxtData.lastDate = ''
        state.syqxtData.xData = []
        state.syqxtData.data1 = []
        state.syqxtData.data2 = []
      }
    },
    setSylfbData(state, result) {
      if (result.errCode === 0) {
        state.sylfbData.xData = []
        state.sylfbData.data1 = []
        state.sylfbData.data2 = []
        const data = result.data
        for (var i = 0; i < data.rates.length; i++) {
          state.sylfbData.xData.push((Number(data.rates[i]) * 100).toFixed(2) + '%')
          if (data.rates[i] < 0) {
            state.sylfbData.data1.push(data.counts[i])
            state.sylfbData.data2.push(0)
          } else {
            state.sylfbData.data1.push(0)
            state.sylfbData.data2.push(data.counts[i])
          }
        }
      } else {
        state.sylfbData.xData = []
        state.sylfbData.data1 = []
        state.sylfbData.data2 = []
      }
    }

  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    queryBasicFilter({
      commit
    }, {
      strategyId,
      share
    }) {
      fetch(`${domain}/openapi/backtest/filterStrategy/basicAndIndex.shtml?strategyId=${strategyId}&share=${share}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data)
          // console.log(result.data.evaluationIndexs.winRatio)
          commit('updateBasicFilter', result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    queryTradeDetail({
      commit
    }, {
      tradePage,
      tradePagesize,
      tradeTotalPages,
      strategyId
    }) {
      fetch(`${domain}/openapi/backtest/filterStrategy/tradeDetail.shtml?strategyId=${strategyId}&size=${tradePagesize}&page=${tradePage}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data)
          commit('updateTradeDetail', result.data.content)
          commit('updateTradePage', {
            totalPages: result.data.totalPages
          })
        }
      })
    },
    queryBuyStocks({
      commit
    }, {
      stockType,
      strategyId,
      backtestDate,
      buyPage,
      buyPageSize
    }) {
      buyPage = buyPage || 0
      buyPageSize = buyPageSize || BUY_PAGE_SIZE
      fetch(`${domain}/openapi/backtest/filterStrategy/${stockType}.shtml?strategyId=${strategyId}&backtestDate=${backtestDate}&page=${buyPage}&size=${buyPageSize}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data)
          commit('updateBuyStocks', result.data.content)
          commit('updateBuyPage', {
            totalPages: result.data.totalPages
          })
        }
      })
    },
    queryBuysellStocks({
      commit
    }, {
      strategyId,
      backtestDate,
      sort
    }) {
      fetch(`${domain}/openapi/backtest/filterStrategy/buySellStocks.shtml?strategyId=${strategyId}&backtestDate=${backtestDate}&direction=${sort}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('updateBuysellStocks', result.data)
        }
      })
    },
    queryNowStock({
      commit
    }, {
      stockPage,
      stockPagesize,
      totalPages,
      strategyId
    }) {
      stockPage = stockPage || 0
      stockPagesize = stockPagesize || STOCK_PAGE_SIZE
      fetch(`${domain}/openapi/backtest/filterStrategy/stock.shtml?strategyId=${strategyId}&pageSize=${stockPagesize}&pageNum=${stockPage}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data)
          commit('updateNowStock', result.data.content)
          /* commit('updatePage', { page: result.data.number, pageSize: result.data.size, totalPages: result.data.totalPages })*/
          commit('updateStockPage', {
            totalPages: result.data.totalPages
          })
        }
      })
    },
    queryTimeStrategy({
      commit
    }, {
      strategyId,
      share
    }) {
      fetch(`${domain}/openapi/backtest/timeStrategy/${strategyId}.shtml?share=${share}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data)
          commit('updateTimeStrategy', result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    queryKline({
      commit
    }, {
      innerCode,
      strategyId,
      month
    }) {
      return fetch(`${domain}/openapi/backtest/timeStrategy/klineDay.shtml?strategyId=${strategyId}&innerCode=${innerCode}&month=${month}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data.kLine)
          commit('updateKline', result.data)
        }
      })
    },
    querySearch({
      commit
    }, {
      keyword
    }) {
      return fetch(`${domain}/openapi/search/stock.shtml?w=${keyword}&size=20`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data.kLine)
          commit('updateSearch', result.data.list)
        }
      })
    },
    queryStockList({
      commit
    }, {
      strategyId
    }) {
      return fetch(`${domain}/openapi/backtest/timeStrategy/listEquities.shtml?strategyId=${strategyId}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('setStockList', result.data)
        }
      })
    },
    getAttention({
      commit,
      rootState
    }, {
      strategyId,
      strategyType
    }) {
      const userId = rootState.user.userId
      // return fetch(`${domain}/openapi/backtest/strategy/risk.shtml?strategyId=${strategyId}`, {
      return fetch(`${domain}/openapi/backtest/follows.shtml?strategyId=${strategyId}&strategyType=${strategyType}&userId=${userId}`, {
        method: 'GET',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setAttentionData', body)
      })
    },
    createAttention({
      commit,
      rootState
    }, {
      strategyId,
      strategyType
    }) {
      const userId = rootState.user.userId
      // return fetch(`${domain}/openapi/backtest/strategy/risk.shtml?strategyId=${strategyId}`, {
      return fetch(`${domain}/openapi/backtest/follows.shtml?strategyId=${strategyId}&strategyType=${strategyType}&userId=${userId}`, {
        method: 'POST',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('addAttentionData', body)
      })
    },
    cancleAttention({
      commit,
      rootState
    }, {
      strategyId,
      strategyType
    }) {
      const userId = rootState.user.userId
      // return fetch(`${domain}/openapi/backtest/strategy/risk.shtml?strategyId=${strategyId}`, {
      return fetch(`${domain}/openapi/backtest/follows.shtml?strategyId=${strategyId}&strategyType=${strategyType}&userId=${userId}`, {
        method: 'DELETE',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('delAttentionData', body)
      })
    },
    getFilterReturns({
      commit
    }, {
      strategyId,
      startDate,
      endDate
    }) {
      commit('setFilterOptions', {
        strategyId,
        startDate,
        endDate
      })
      return fetch(`${domain}/openapi/backtest/filterStrategy/returns.shtml?strategyId=${strategyId}&startDate=${startDate || ''}&endDate=${endDate || ''}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setSylqxData', body)
      })
    },
    getFilterProfit({
      commit
    }, {
      strategyId
    }) {

      return fetch(`${domain}/openapi/backtest/filterStrategy/sellProfit.shtml?strategyId=${strategyId}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setSylfbData', body)
      })
    }
  }
}