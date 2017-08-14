/*
 * 同步形式的store，设置好state中的值即可
 * namespaced为true，是为了避免store的module之间，getters、mutations、actions发生命名冲突
 */

// whatwg-fetch仅能在浏览器环境使用。
import 'whatwg-fetch'
const mutationTypes = {
  UPDATE_HOTLIST: 'UPDATE_HOTLIST',
  UPDATE_TOPIC_SUMMARY: 'UPDATE_TOPIC_SUMMARY',
  UPDATE_TOPIC_LINEDATA: 'UPDATE_TOPIC_LINEDATA',
  UPDATE_TOPIC_NEWS: 'UPDATE_TOPIC_NEWS',
  UPDATE_TOPIC_STOCKLIST: 'UPDATE_TOPIC_STOCKLIST'
}
const PAGE_SIZE = 10

export default {
  namespaced: true,
  state: {
        // 初始化时，务必要把所有的数据成员做初始化，否则后面数据的更新，将不会触发显示的更
    topic: null,
    hotlist: [], // 热点主题
    themeList: [], // 全部主题
    informatList: [], // 资讯
    stockList: [], // 成分股
    themeSummary: { topicNum: 0, topicUpNum: 0, topicDownNum: 0 }, // 上涨下跌
    sortby: 'hot', // hot | time,
    desc: true,   // 降序
    pagesize: PAGE_SIZE,
    page: 1,
    total: 0,
    detail: { eventNum: 0, equityNum: 0, declareDate: 0, topicMarket: {}},
    allCharts: []
   /* topicReturnRate: [],
    hs300ReturnRate: [],
    tradeDate: []*/ // 全部charts
  },
  mutations: {
    [mutationTypes.UPDATE_HOTLIST] (state, hotList) {
      state.hotlist = hotList
    },
    updateSummary (state, summary) {
      state.themeSummary = summary
    },
    updateAllTopic (state, themeList) {
      state.themeList = themeList
    },
    updatePage (state, options) {
      console.log(options)
      state.pagesize = options.size || PAGE_SIZE
      state.page = options.page || 1
      state.total = options.totalPages
    },
    updateInformat (state, infor) {
      state.informatList = infor
    },
    updateStockList (state, stock) {
      state.stockList = stock
    },
    updateDetailHead (state, detailHead) {
      state.detail = detailHead
    },
    updateAllCharts (state, allCharts) {
      state.allCharts = allCharts

     /* state.allCharts && state.allCharts.forEach(item => {
        state.topicReturnRate.push(item.topicReturnRate)
        state.hs300ReturnRate.push(item.hs300ReturnRate)
        state.tradeDate.push(item.tradeDate)
      })*/
    },
    [mutationTypes.UPDATE_TOPIC_SUMMARY] (state, detail) {
      /* state.topic || (state.topic = {})
      state.topic = topic*/
      state.detail = detail
    },
    [mutationTypes.UPDATE_TOPIC_LINEDATA] (state, lineData) {
      state.topic || (state.topic = {})
      state.topic.lineDate = lineData
    },
    [mutationTypes.UPDATE_TOPIC_NEWS] (state, news) {
      state.topic || (state.topic = {})
      state.topic.news = news// 资讯
    },
    [mutationTypes.UPDATE_TOPIC_STOCKLIST] (state, news) {
      state.topic || (state.topic = {})
      state.topic.news = news
    }
  },
    // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    queryHot ({ commit }) {
      fetch('http://www.z3quant.com/openapi/topic/hotTopic.shtml', {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit(mutationTypes.UPDATE_HOTLIST, result.data)
        }
      })
    },
    querySummary ({ commit }) {
      fetch('http://www.z3quant.com/openapi/topic/topicStat.shtml', {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('updateSummary', result.data)
        }
      })
    },
    queryAllTopic ({ commit }, { sortField, page, pagesize, totalPages }) {
      page = page || 0
      pagesize = pagesize || PAGE_SIZE
      return fetch(`http://www.z3quant.com/openapi/topic/pageTopic.shtml?sort=${sortField},desc&page=${page}&size=${pagesize}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        console.log(result)
        // console.log(result.data.content[0].relatedEquity)
        if (result.errCode === 0) {
          commit('updateAllTopic', result.data.content)
          // commit('updatePage', result.data)
          commit('updatePage', { page: result.data.number, pageSize: result.data.pagesize, totalPages: result.data.totalPages })
          console.log(page)
        }
      })
    },
    queryInformatList ({ commit }, { topicCode }) {
      // fetch('http://www.z3quant.com/openapi/news/topic/topicCode.shtml?page=1&size=10', {
      fetch(`http://www.z3quant.com/openapi/news/topic/${topicCode}.shtml?page=0&size=20`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data.content[0].topicName)
          commit('updateInformat', result.data.content)
        }
      })
    },
    // queryTopicSummary ({ commit }, { topicId }) {
 /*   queryTopicSummary ({ commit }) {
      const url = 'http://www.z3quant.com/openapi/topic/400130195.sthml'
      // const url = `http://www.z3quant.com/openapi/topic/${topicId}.sthml`
      fetch(url, { mode: 'cors' }).then(res => res.json).then(result => {
        if (result.errCode === 0) {
          // console.log(result)
          commit(mutationTypes.UPDATE_TOPIC_SUMMARY)
        }
      })
    },*/
    queryTopicLineData ({ commit }, { topicId, period }) {
      const url = `http://www.z3quant.com/openapi/topic/${topicId}.sthml?period=${period}`
      fetch(url, { mode: 'cors' }).then(res => res.json).then(result => {
        commit(mutationTypes.UPDATE_TOPIC_LINEDATA)
      })
    },
    queryStockList ({ commit }, { topicCode }) {
      fetch(`http://www.z3quant.com/openapi/topic/${topicCode}/stock.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        // console.log(result.data.content[0])
        if (result.errCode === 0) {
          commit('updateStockList', result.data.content)
        }
      })
    },
    queryDetailHead ({ commit }, { topicCode }) {
      fetch(`http://www.z3quant.com/openapi/topic/${topicCode}.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        // console.log(result)
        if (result.errCode === 0) {
          commit('updateDetailHead', result.data)
        }
      })
    },
    queryAllCharts ({ commit }, { period, topicCode }) {
      return fetch(`http://www.z3quant.com/openapi/topic/history/${topicCode}.shtml?period=${period}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        console.log(result)
        if (result.errCode === 0) {
          commit('updateAllCharts', result.data.reverse())
        }
      })
    },
    queryTopicLineDataRealtime ({ commit }) {

    }
  }
}

