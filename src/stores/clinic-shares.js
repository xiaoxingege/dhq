/*
 * 同步形式的store，设置好state中的值即可
 * namespaced为true，是为了避免store的module之间，getters、mutations、actions发生命名冲突
 */

// whatwg-fetch仅能在浏览器环境使用。
// import 'whatwg-fetch'
import fetch from '../z3tougu/util/z3fetch'
import config, {
  domain
} from '../z3tougu/config'

export const mutationTypes = {
  UPDATE_HOTLIST: 'UPDATE_HOTLIST',
  UPDATE_TOPIC_SUMMARY: 'UPDATE_TOPIC_SUMMARY',
  UPDATE_TOPIC_LINEDATA: 'UPDATE_TOPIC_LINEDATA',
  UPDATE_TOPIC_NEWS: 'UPDATE_TOPIC_NEWS',
  UPDATE_TOPIC_STOCKLIST: 'UPDATE_TOPIC_STOCKLIST',
  UPDATE_TOPIC_RELSTOCK: 'UPDATE_TOPIC_RELSTOCK'
}
const PAGE_SIZE = 10
const INFOR_PAGESIZE = 10
const STOCK_PAGESIZE = 11
export default {
  namespaced: true,
  state: {
    // 初始化时，务必要把所有的数据成员做初始化，否则后面数据的更新，将不会触发显示的更
    topic: null,
    hotlist: [], // 热点主题
    themeList: [], // 全部主题
    informatList: [], // 资讯
    stockList: [], // 成分股
    smartStock: {
      score: 0,
      shortDescribe: '',
      midDescribe: '',
      wineRate: 0
    }, // 打分
    // radarData: [], // 雷达图
    radarData: {}, // 雷达图
    indexFace: [], // 资金面
    baseFace: [], // 基本面,
    techFace: {
      technicalTitle: '',
      moonDetailVoMap: {},
      technicalSummary: '',
      valueRange: '',
      rangeDatas: []
    },
    desc: true, // 降序
    pagesize: PAGE_SIZE,
    page: 1,
    total: 0,
    detail: {
      eventNum: 0,
      equityNum: 0,
      declareDate: 0,
      topicMarket: {}
    },
    allCharts: [],
    allLimit: [],
    realtimeLimit: [],
    listChange: [],
    realtimeCharts: [],
    relatedStocks: {},
    groupTopics: [],
    inforPage: 0,
    inforPageSize: INFOR_PAGESIZE,
    inforTotal: 0,
    inforTotalElements: 0,
    numberTopic: [],
    stockPage: 0,
    stockPageSize: STOCK_PAGESIZE,
    stockTotal: 0,
    topicTechAndInfo: [] // 题材涨跌和舆情
    /* topicReturnRate: [],
     hs300ReturnRate: [],
     tradeDate: []*/ // 全部charts
  },
  mutations: {

    updateAllTopic(state, themeList) {
      state.themeList = themeList
      const stocks = {}
      for (const topic of themeList) {
        const relatedEquity = topic.relatedEquity
        for (const stock of relatedEquity) {
          stocks[stock.innerCode] = stock
        }
      }
      state.relatedStocks = stocks
    },
    updateSmartStock(state, smartStock) {

      state.smartStock = smartStock
    },

    updateRadarData(state, radarData) {
      state.radarData = radarData
      console.log(state.radarData.fundValue)
    },
    updateIndexFace(state, indexFace) {
      state.indexFace = indexFace
      // console.log(state.indexFace[0])
    },
    updateBaseFace(state, baseFace) {
      state.baseFace = baseFace
    },
    updateTechFace(state, techFace) {
      state.techFace = techFace
    },
    updateStockList(state, stockList) {
      state.stockList = stockList
      const stocks = {}
      for (const stock of stockList) {
        stocks[stock.innerCode] = stock
      }
      state.relatedStocks = stocks
    },
    updateStockPage(state, options) {
      state.stockPageSize = options.stockPageSize || STOCK_PAGESIZE
      state.stockPage = options.stockPage || 1
      state.stockTotal = options.stockTotal
    },
    updateDetailHead(state, detailHead) {
      state.detail = detailHead
    },

    upAllChartsLimit(state, allLimit) {
      state.allLimit = allLimit
    },
    updateRealtimeChartsLimit(state, realtimeLimit) {
      state.realtimeLimit = realtimeLimit
    },
    updateListChange(state, listChange) {
      state.listChange = listChange
    },
    updateRealtimeCharts(state, realtime) {
      state.realtimeCharts = realtime
    },
    updateGroupTopics(state, group) {
      state.groupTopics = group
    },
    updateStockNumberTopic(state, numberTopic) {
      state.numberTopic = numberTopic
    },

    [mutationTypes.UPDATE_TOPIC_LINEDATA](state, lineData) {
      state.topic || (state.topic = {})
      state.topic.lineDate = lineData
    },
    [mutationTypes.UPDATE_TOPIC_NEWS](state, news) {
      state.topic || (state.topic = {})
      state.topic.news = news // 资讯
    },
    [mutationTypes.UPDATE_TOPIC_STOCKLIST](state, news) {
      state.topic || (state.topic = {})
      state.topic.news = news
    },
    [mutationTypes.UPDATE_TOPIC_RELSTOCK](state, stock) {
      const stocks = state.relatedStocks
      stocks[stock.innerCode].price = stock.price !== null ? parseFloat(stock.price).toFixed(2) : config.emptyValue
      stocks[stock.innerCode].chg = stock.chg !== null ? parseFloat(stock.chg).toFixed(2) : config.emptyValue
      stocks[stock.innerCode].curChngPct = stock.curChngPct !== null ? parseFloat(stock.curChngPct).toFixed(2) : config.emptyValue
      // state.topic.relatedStocks = { ...stocks, stock }
    }
  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {

    querySmartStock({
      commit
    }, {
      innerCode
    }) {
      return fetch(`${domain}/openapi/smartStock/${innerCode}.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {

        if (result.errCode === 0) {
          commit('updateSmartStock', result.data)
          // console.log(result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    queryRadarData({
      commit
    }, {
      innerCode
    }) {
      return fetch(`${domain}/openapi/smartStock/${innerCode}.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data)
          commit('updateRadarData', result.data.radarData)
          // console.log(result.data.radarData)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    queryIndexFace({
      commit
    }, {
      innerCode
    }) {
      return fetch(`${domain}/openapi/smartStock/capitalFace/${innerCode}.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data)
          commit('updateIndexFace', result.data)
          // console.log(result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    queryBaseFace({
      commit
    }, {
      innerCode
    }) {
      return fetch(`${domain}/openapi/smartStock/baseFace/${innerCode}.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data)
          commit('updateBaseFace', result.data)
          // console.log(result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    queryTechFace({
      commit
    }, {
      innerCode
    }) {
      return fetch(`${domain}/openapi/diag/stock/technical.shtml?innerCode=${innerCode}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data)
          commit('updateTechFace', result.data)
          console.log(result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    queryTopicLineDataRealtime({
      commit
    }) {

    }
  }
}