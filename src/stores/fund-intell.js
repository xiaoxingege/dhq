/*
 * 同步形式的store，设置好state中的值即可
 * namespaced为true，是为了避免store的module之间，getters、mutations、actions发生命名冲突
 */

// whatwg-fetch仅能在浏览器环境使用。
import 'whatwg-fetch'
import { domain } from '../z3tougu/config'

export default {
  namespaced: true,
  state: {
        // 初始化时，务必要把所有的数据成员做初始化，否则后面数据的更新，将不会触发显示的更
    fundRecommendInfo: {// 基金推荐表
      symbol: '',
      name: '',
      fundTypeName: '',
      fundYieldYearSofar: '',
      riskLevelName: '',
      reasonList: [],
      xDate: [],
      fundReturn: [],
      huShenReturn: []
    },
    excellentSelectPlan: []// 优选定投

  },
  mutations: {
    updateFundRecommendInfo (state, recommendInfo) {
      // console.log(filterdetail)
      state.fundRecommendInfo = recommendInfo
    },
    updateExcellentSelectPlan (state, selectPlan) {
      state.excellentSelectPlan = selectPlan
    }
  },
    // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    queryfundRecommendInfo ({ commit }) {
      return fetch(`${domain}/openapi/fund/fundRecommendInfo.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data)
          // console.log(result.data.evaluationIndexs.winRatio)
          commit('updateFundRecommendInfo', result.data)
        }
      })
    },
    queryExcellentSelectPlan ({ commit }) {
      return fetch(`${domain}/openapi/fund/excellentSelectPlan.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          console.log(result.data[0].name)
          // console.log(result.data.evaluationIndexs.winRatio)
          commit('updateExcellentSelectPlan', result.data)
        }
      })
    }

  }
}

