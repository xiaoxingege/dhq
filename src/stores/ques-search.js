/*
 * 同步形式的store，设置好state中的值即可
 * namespaced为true，是为了避免store的module之间，getters、mutations、actions发生命名冲突
 */

// whatwg-fetch仅能在浏览器环境使用。
import 'whatwg-fetch'
import $ from 'jquery'

export default {
  namespaced: true,
  state: {
    // 初始化时，务必要把所有的数据成员做初始化，否则后面数据的更新，将不会触发显示的更新
    CodeData: null
  },
  mutations: {
    setData (state, res) {
      state.CodeData = res.CodeData
    },
    setError (state, err) {
      state.err = err
    }
  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    fetch ({ commit, rootState, dispatch }, options) {
      $.ajax({
        url: `http://code.jrjimg.cn/code?1=1&item=5&type=cn&typepri=s|i&areapri=cn&inc=utf8&otc=utf8&key=${options.key}&d=105301`,
        dataType: 'script',
        success: function () {
          console.log(window.SCodeData.CodeData)
          commit('setData', window.SCodeData.CodeData)
        }
      })
    //   fetch('/package.json').then((res) => {
    //     return res.json()
    //   }).then(body => {
    //     commit('fetch', body.name)
    //   })
    }
  }
}
