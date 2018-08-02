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


export default {
  namespaced: true,
  state: {
    // 初始化时，务必要把所有的数据成员做初始化，否则后面数据的更新，将不会触发显示的更
    topicData: [],
    industryData: [],
    stockStyle: [],
    topicAndIndustry: {
      instury: [],
      topic: []

    },
    smartEvaluate: '',
    tradeDate: null,
    marketStyle: [],
    stockStyleNew: []
  },
  mutations: {
    setTopicAndIndustry(state, result) {
      if (result.errCode === 0) {
        for (var i = 0; i < result.data.topic_list.length; i++) {
          state.topicData[i] = {
            heatIndex: result.data.topic_list[i].topicMarket.heatIndex,
            chngPct: result.data.topic_list[i].topicMarket.chngPct,
            keepDaysToday: result.data.topic_list[i].topicMarket.keepDaysToday,
            name: result.data.topic_list[i].topicName,
            topicCode: result.data.topic_list[i].topicCode
          }
        }
        for (var j = 0; j < result.data.indu_list.length; j++) {
          state.industryData[j] = {
            heatIndex: result.data.indu_list[j].induMarket.heatIndex,
            chngPct: result.data.indu_list[j].induMarket.chngPct,
            keepDaysToday: result.data.indu_list[j].induMarket.keepDaysToday,
            name: result.data.indu_list[j].induName,
            induCode: result.data.indu_list[j].induCode
          }
        }
      }
    },
    updateStockStyle(state, stockStyle) {
      state.stockStyle = stockStyle
    },
    updateTopicAndIndustry(state, topicAndIndustry) {
      state.topicAndIndustry = topicAndIndustry
    },
    updateSmartEvaluate(state, smartEvaluate) {
      state.smartEvaluate = smartEvaluate
    },
    updateCheckTradeDate(state, tradeDate) {
      state.tradeDate = tradeDate
      //  console.log(state.tradeDate)
    },
    updateMarketStyle(state, marketStyle) {
      state.marketStyle = marketStyle
    },
    updateStockStyleNew(state, stockStyle) {
      state.stockStyleNew = stockStyle
    }
  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    queryTopicAndIndustry({
      commit
    }, {
      browseIndex
    }) {
      return fetch(`${domain}/openapi/topicAndIndustry.shtml?index=${browseIndex}&limit=5`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data.kLine)
          commit('updateTopicAndIndustry', result.data)
          // console.log(result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    queryStockStyle({
      commit
    }) {
      return fetch(`${domain}/openapi/stockStyle.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('updateStockStyle', result.data)
        }
      })
    },
    getTopicAndIndustry({
      commit
    }, {
      index
    }) {
      return fetch(`${domain}/openapi/marketVane/topicAndIndustry.shtml?index=${index}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        commit('setTopicAndIndustry', result)
      })
    },
    // test.z3quant.com/openapi/checkTradeDate.shtml?date=20180729
    queryCheckTradeDate({
      commit
    }, {
      date
    }) {
      return fetch(`${domain}/openapi/checkTradeDate.shtml?date=${date}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        commit('updateCheckTradeDate', result.data)
      })
    },
    querySmartEvaluate({
      commit
    }) {
      return fetch(`${domain}/openapi/marketVane/smartEvaluate.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('updateSmartEvaluate', result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    queryMarketStyle({
      commit
    }) {
      return fetch(`${domain}/openapi/marketVane/marketStyle.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('updateMarketStyle', result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    queryStockStyleNew({
      commit
    }) {
      return fetch(`${domain}/openapi/marketVane/stockStyle.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('updateStockStyleNew', result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    }
  }
}