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

    }
  },
  mutations: {
    setTopicAndIndustry(state, result) {
      if (result.errCode === 0) {
        for (var i = 0; i < result.data.题材板块.length; i++) {
          state.topicData[i] = {
            heatIndex: result.data.题材板块[i].topicMarket.heatIndex,
            chngPct: result.data.题材板块[i].topicMarket.chngPct,
            keepDaysToday: result.data.题材板块[i].topicMarket.keepDaysToday,
            name: result.data.题材板块[i].topicName,
            topicCode: result.data.题材板块[i].topicCode
          }
        }
        for (var j = 0; j < result.data.行业板块.length; j++) {
          state.industryData[j] = {
            heatIndex: result.data.行业板块[j].induMarket.heatIndex,
            chngPct: result.data.行业板块[j].induMarket.chngPct,
            keepDaysToday: result.data.行业板块[j].induMarket.keepDaysToday,
            name: result.data.行业板块[j].induName,
            induCode: result.data.行业板块[j].induCode
          }
        }
      }
    },
    updateStockStyle(state, stockStyle) {
      state.stockStyle = stockStyle
    },
    updateTopicAndIndustry(state, topicAndIndustry) {
      state.topicAndIndustry = topicAndIndustry
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
      return fetch(`${domain}/openapi/topicAndIndustry.shtml?index=${index}&limit=20`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        commit('setTopicAndIndustry', result)
      })
    }
  }
}