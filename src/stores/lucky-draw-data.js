/*
 * 同步形式的store，设置好state中的值即可
 * namespaced为true，是为了避免store的module之间，getters、mutations、actions发生命名冲突
 */
import $ from 'jquery'
export default {
  namespaced: true,
  state: {
    // 初始化时，务必要把所有的数据成员做初始化，否则后面数据的更新，将不会触发显示的更新
    pricelist: null,
    LuckUsers: null,
    draw: null
  },
  mutations: {
    setPrizeList (state, pricelist) {
      state.pricelist = pricelist
    },
    setLuckUsers (state, LuckUsers) {
      state.LuckUsers = LuckUsers.data
    },
    setDraw (state, draw) {
      state.draw = draw
    }
  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    getPrizeList ({
      commit,
      state
    }) {
      return $.ajax({
        url: 'http://itougu.jrj.com.cn/marketing/prizeList.jspa'
      }).then(data => {
        commit('setPrizeList', data.data)
      })
    },
    getLuckUsers ({
      commit,
      state
    }) {
      return $.ajax({
        url: 'http://itougu.jrj.com.cn/marketing/luckUsers.jspa'
      }).then(data => {
        commit('setLuckUsers', data)
      })
    },
    getDraw ({
      commit,
      state,
      rootState
    }) {
      return $.ajax({
        url: `http://itougu.jrj.com.cn/marketing/draw.jspa?userId=${rootState.user.ssoId}`
      }).then(data => {
        commit('setDraw', data)
      })
    }

  }
}
