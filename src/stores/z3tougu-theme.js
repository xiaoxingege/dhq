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
    themeSummary: { topicNum: 0, topicUpNum: 0, topicDownNum: 0 }, // 上涨下跌
    sortby: 'hot', // hot | time,
    desc: true,   // 降序
    pagesize: PAGE_SIZE,
    page: 1,
    total: 0
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
    },
    [mutationTypes.UPDATE_TOPIC_SUMMARY] (state, topic) {
      state.topic || (state.topic = {})
      state.topic = topic
    },
    [mutationTypes.UPDATE_TOPIC_LINEDATA] (state, lineData) {
      state.topic || (state.topic = {})
      state.topic.lineDate = lineData
    },
    [mutationTypes.UPDATE_TOPIC_NEWS] (state, news) {
      state.topic || (state.topic = {})
      state.topic.news = news
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
    queryAllTopic ({ commit }, { sortField, page, pagesize }) {
      page = page || 1
      pagesize = pagesize || PAGE_SIZE
      fetch(`http://www.z3quant.com/openapi/topic/pageTopic.shtml?sort=${sortField},desc&page=${page}&size=${pagesize}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        console.log(result.data.content[0].relatedEquity)
        if (result.errCode === 0) {
          commit('updateAllTopic', result.data.content)
          commit('updatePage', { page, pagesize })
          console.log(page)
        }
      })
    },
    queryTopicSummary ({ commit }, { topicId }) {
      const url = `http://www.z3quant.com/openapi/topic/${topicId}.sthml`
      fetch(url, { mode: 'cors' }).then(res => res.json).then(result => {
        commit(mutationTypes.UPDATE_TOPIC_SUMMARY)
      })
    },
    queryTopicLineData ({ commit }, { topicId, period }) {
      const url = `http://www.z3quant.com/openapi/topic/${topicId}.sthml?period=${period}`
      fetch(url, { mode: 'cors' }).then(res => res.json).then(result => {
        commit(mutationTypes.UPDATE_TOPIC_LINEDATA)
      })
    },
    queryTopicLineDataRealtime ({ commit }) {

    }
  }
}

