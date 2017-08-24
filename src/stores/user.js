/*
 * 同步形式的store，设置好state中的值即可
 * namespaced为true，是为了避免store的module之间，getters、mutations、actions发生命名冲突
 */

export default {
  namespaced: true,
  state: {
    // 初始化时，务必要把所有的数据成员做初始化，否则后面数据的更新，将不会触发显示的更新
    ssoId: '',
    spToken: ''
  },
  mutations: {
    fetch (state, data) {
      state.ssoId = data.ssoId
      state.spToken = data.spToken
    }
  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    fetch ({ commit }, options) {
      options = options || {}
      commit('fetch', {
        ssoId: window.ssoId,
        spToken: window.spToken
      })
    },
    fetchFromBasicUserInfo ({ commit }) {
      var script = document.getElementById('getBasicUserInfo')
      if (script) {
        document.getElementsByTagName('head')[0].removeChild(script)
      }
      script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'http://itougu.jrj.com.cn/account/getBasicUserInfo.jspa'
      script.id = 'getBasicUserInfo'
      script.onload = function () {
        if (window.basicUserInfo) {
          commit('fetch', {
            ssoId: window.basicUserInfo.userId
          })
        } else {
          commit('fetch', {
            ssoId: ''
          })
        }
      }
      document.getElementsByTagName('head')[0].appendChild(script)
    }
  }
}
