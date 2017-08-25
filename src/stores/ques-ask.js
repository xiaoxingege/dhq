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
    askTimes: '10',
    err: null
  },
  mutations: {
    setAsk (state, res) {
      state.askTimes = res.askTimes
    },
    setError (state, err) {
      state.err = err
    }
  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    ask ({ commit, rootState }, options) {
      fetch('http://itougu.jrj.com.cn/ques/ask/baidu/askNum.jspa?passportId=' + options.userId, {
        credentials: 'include'
      }).then(res => {
        return res.json()
      }).then(json => {
        commit('setAsk', json)
      })
    },
    askto ({ commit, rootState }, options) {
      fetch('http://itougu.jrj.com.cn/ques/ask/baidu/askto.jspa?textcont=' + encodeURI(options.textCont) + '&passportId=' + options.passportId + '&isopen=1', {

        credentials: 'include'
      }).then(res => {
        return res.json()
      }).then(json => {
        if (json.retCode === 0 || json.retCode === 1) {
          window.location.href = 'http://itougu.jrj.com.cn/activity/app/ques-success.jspa?stockCode=' + json.stockCode + '&showTime=' + json.showTime
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
