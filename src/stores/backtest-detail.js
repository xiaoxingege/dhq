/*
 * 同步形式的store，设置好state中的值即可
 * namespaced为true，是为了避免store的module之间，getters、mutations、actions发生命名冲突
 */

// whatwg-fetch仅能在浏览器环境使用。
import 'whatwg-fetch'
import { domain } from '../z3tougu/config'

const STOCK_PAGE_SIZE = 10
const TRADE_PAGE_SIZE = 10

export default {
  namespaced: true,
  state: {
        // 初始化时，务必要把所有的数据成员做初始化，否则后面数据的更新，将不会触发显示的更

    basicFilter: {// 筛股页头部
      strategyId: '',
      strategyName: '',
      strategyDesc: '',
      filterParams: '',
      createDate: '',
      backtestStartDate: '',
      backtestEndDate: '',
      evaluationIndexs: {}
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
      evaluationIndexs: {},
      filterSummary: {}

    },
    kLineData: {},
    stockPage: 0,
    stockPageSize: STOCK_PAGE_SIZE,
    stockTotal: 0,
    tradePage: 0,
    tradePageSize: TRADE_PAGE_SIZE,
    tradeTotalPage: 0,
    /* evaluationIndexs: {
      winRatio:'',
      avgReturnExcess:'',
      avgReturn:'',
      winLossRatio:'',
      holdDay:'',
      maxWin:'',
      maxLoss:''
    },*/
    detail: { eventNum: 0, equityNum: 0, declareDate: 0, topicMarket: {}}
  },
  mutations: {
    updateBasicFilter (state, filterdetail) {
      // console.log(filterdetail)
      state.basicFilter = filterdetail
      // console.log(state.basicFilter)

     /* state.themeList = themeList
      const stocks = {}
      for (const topic of themeList) {
        const relatedEquity = topic.relatedEquity
        for (const stock of relatedEquity) {
          stocks[stock.innerCode] = stock
        }
      }
      state.relatedStocks = stocks*/
    },
    updateTradeDetail (state, tradeDetail) {
      state.tradeDetail = tradeDetail
    },
    updateNowStock (state, stock) {
      state.nowStock = stock
    },
    updateTimeStrategy (state, timestra) {
      // console.log(timestra)
      state.timeStrategy = timestra
      // console.log(state.timeStrategy.buyStrategyIndexList[0].indexParams)
    },
    updateKline (state, kLineData) {
      console.log(kLineData)
      state.kLineData = kLineData
    },
    updateStockPage (state, options) {
      console.log(options.totalPages)
      state.stockTotal = options.totalPages
    },
    updateTradePage (state, options) {
      console.log(options.totalPages)
      state.tradeTotalPage = options.totalPages
    }
  },
    // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    queryBasicFilter ({ commit }) {
      fetch(`${domain}/openapi/backtest/filterStrategy/basicAndIndex.shtml?strategyId=8fd07573-2963-489d-ad60-26cd72670865`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          console.log(result.data.filterSummary)
          // console.log(result.data.evaluationIndexs.winRatio)
          commit('updateBasicFilter', result.data)
        }
      })
    },
    queryTradeDetail ({ commit }, { tradePage, tradePagesize, tradeTotalPages }) {
      fetch(`${domain}/openapi/backtest/filterStrategy/tradeDetail.shtml?strategyId=8fd07573-2963-489d-ad60-26cd72670865&pageSize=${tradePagesize}&pageNum=${tradePage}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data)
          commit('updateTradeDetail', result.data.content)
          commit('updateTradePage', { totalPages: result.data.totalPages })
        }
      })
    },
    queryNowStock ({ commit }, { stockPage, stockPagesize, totalPages }) {
      stockPage = stockPage || 0
      stockPagesize = stockPagesize || STOCK_PAGE_SIZE
      fetch(`${domain}/openapi/backtest/filterStrategy/stock.shtml?strategyId=8fd07573-2963-489d-ad60-26cd72670865&pageSize=${stockPagesize}&pageNum=${stockPage}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
         // console.log(result.data)
          commit('updateNowStock', result.data.content)
          /* commit('updatePage', { page: result.data.number, pageSize: result.data.size, totalPages: result.data.totalPages })*/
          commit('updateStockPage', { totalPages: result.data.totalPages })
        }
      })
    },
    queryTimeStrategy ({ commit }) {
      fetch(`${domain}/openapi/backtest/timeStrategy/8fd07573-2963-489d-ad60-26cd72670865.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data)
          commit('updateTimeStrategy', result.data)
        }
      })
    },
    queryKline ({ commit }) {
      return fetch(`${domain}/openapi/backtest/timeStrategy/klineDay.shtml?innerCode=002109.SZ`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data.kLine)
          commit('updateKline', result.data)
        }
      })
    }
  }
}

