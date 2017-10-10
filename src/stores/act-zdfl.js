/*
 * z点福利专题
 */

export default {
  namespaced: true,
  state: {
    // 初始化时，务必要把所有的数据成员做初始化，否则后面数据的更新，将不会触发显示的更新
    ssoId: '',
    spToken: ''
  },
  mutations: {
    fetch(state, data) {
      state.ssoId = data.ssoId
      state.spToken = data.spToken
    }
  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    fetch({
      commit
    }, options) {
      options = options || {}
      commit('fetch', {
        ssoId: window.ssoId,
        spToken: window.spToken
      })
    }
  }
}