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
    // 初始化时，务必要把所有的数据成员做初始化，否则后面数据的更新，将不会触发显示的更新
    dragonList: [],
    dragonDetail: {}
  },
  mutations: {
    setDragonList(state, result) {
      if (result.errCode === 0) {
        state.dragonList = result.data
      } else {
        state.dragonList = []
      }
    },
    setDragonDetail(state, result) {
      if (result.errCode === 0) {
        state.dragonDetail = result.data[0]
      } else {
        state.dragonDetail = []
      }
    }
  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    getDragonList({
      commit
    }, {
      innerCode
    }) {
      fetch(`${domain}/openapi/heroChart.shtml?innerCode=${innerCode}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setDragonList', body)
      })
    },
    getDragonDetail({
      commit
    }, {
      innerCode,
      date
    }) {
      fetch(`${domain}/openapi/heroChart/details.shtml?innerCode=${innerCode}&date=${date}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setDragonDetail', body)
      })
    }
  }
}