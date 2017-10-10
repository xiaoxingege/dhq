/*
 * z点福利专题
 */
import $ from 'jquery'

export default {
  namespaced: true,
  state: {
    err: null,
    lotteryInfo: null,
    lotteryResult: null
  },
  mutations: {
    setError (state, msg) {
      state.err = msg
    },
    setLotteryInfo (state, data) {
      state.lotteryInfo = data
    },
    setLotteryResult (state, data) {
      state.lotteryResult = data
    }
  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    getZPoint ({
      commit,
      rootState
    }, options) {
      commit('setError', null)
      return $.ajax({
        url: `http://itougu.jrj.com.cn/marketing/createZpointOperate.jspa?userId=${rootState.user.ssoId}`,
        dataType: 'json'
      }).then(data => {
        if (data.retCode) {
          commit('setError', data.msg)
        }
      }).catch(() => {
        commit('setError', '网络错误，请稍后重试')
      })
    },
    getLotteryInfo ({
      commit,
      rootState
    }, options) {
      commit('setError', null)
      return $.ajax({
        url: `http://itougu.jrj.com.cn/marketing/zOperateNewUserIndex.jspa?userId=${rootState.user.ssoId}`,
        dataType: 'json'
      }).then(data => {
        commit('setLotteryInfo', data)
      }).catch(() => {
        commit('setError', '网络错误，请稍后重试')
      })
    },
    playLottery ({
      commit,
      rootState
    }, options) {
      commit('setError', null)
      return $.ajax({
        url: `http://itougu.jrj.com.cn/marketing/zOperateDrawPrize.jspa?userId=${rootState.user.ssoId}`,
        dataType: 'json'
      }).then(data => {
        if (!data.retCode) {
          commit('setLotteryResult', data)
        }
      }).catch(() => {
        commit('setError', '网络错误，请稍后重试')
      })
    }
  }
}
