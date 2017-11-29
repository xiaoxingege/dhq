/*
 * 同步形式的store，设置好state中的值即可
 * namespaced为true，是为了避免store的module之间，getters、mutations、actions发生命名冲突
 */

// whatwg-fetch仅能在浏览器环境使用。
import 'whatwg-fetch'

export default {
  namespaced: true,
  state: {
    // 初始化时，务必要把所有的数据成员做初始化，否则后面数据的更新，将不会触发显示的更新
    dataList: {},
    remainCnt: 0,
    lotteryResult: null,
    err: null
  },
  mutations: {
    setData(state, res) {
      state.dataList = res.prizeList
      state.remainCnt = res.remainCnt
    },
    setLotteryResult(state, res) {
      state.lotteryResult = res
    },
    setError(state, err) {
      state.err = err
    }
  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    whereList({
      commit,
      rootState
    }, options) {
      fetch(`http://itougu.jrj.com.cn/marketing/getUserLotteryInfo.jspa?userId=${options.userId}`, {
        credentials: 'include'
      }).then(res => {
        return res.json()
      }).then(json => {
        if (json.retCode === 1) {
          commit('setData', json.data)
        } else {
          commit('setError', {
            retCode: json.retCode,
            msg: json.msg
          })
        }
      })
    },
    lotteryDraw({
      commit,
      rootState
    }, options) {
      fetch(`http://itougu.jrj.com.cn/marketing/lotteryDraw.jspa?userId=${options.userId}`, {
        credentials: 'include',
        headers: {
          'passportId': options.userId
        }
      }).then(res => {
        return res.json()
      }).then(json => {
        if (json.retCode === 1) {
          commit('setLotteryResult', json.data)
        } else {
          commit('setError', {
            retCode: json.retCode,
            msg: json.msg
          })
        }
      })
    }
  }
}