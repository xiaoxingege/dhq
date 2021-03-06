/*
 * 同步形式的store，设置好state中的值即可
 * namespaced为true，是为了避免store的module之间，getters、mutations、actions发生命名冲突
 */

// whatwg-fetch仅能在浏览器环境使用。
import 'whatwg-fetch'
import $ from 'jquery'
import sha1 from 'js-sha1'

// const PAGE_SIZE = 10

export default {
  namespaced: true,
  state: {
    focusResult: null,
    err: null
  },
  mutations: {
    setData(state, res) {
      state.focusResult = res.result
    },
    setError(state, err) {
      state.err = err
    }
  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    jsSdk({
      commit
    }) {
      $.getJSON('http://wx.jrj.com.cn/api/baidu.jsp?action=get_ticket&client_id=O8FVpeZ0w75ekNMvaWf5oBa63WSEfnIi&rnd=' + Math.random() + '&callback=?', function(data) {
        var nonce = '1234567890'
        var ts = Math.round($.now() / 1000)
        var link = location.href.split('#')[0]
        var str = 'jsapi_ticket=' + data.data.ticket + '&noncestr=' + nonce + '&timestamp=' + ts + '&url=' + link
        var hash = sha1.create()
        hash.update(str)
        var sign = hash.hex()
        var s = document.createElement('script')
        s.type = 'text/javascript'
        s.charset = 'utf-8'
        s.onload = function() {
          window.cambrian.isSubscribe({
            success: v => {
              commit('setData', v)
            }
          })
        }
        s.src = '//msite.baidu.com/sdk/c.js?' +
          'appid=' + '1569626229411689' +
          '&timestamp=' + ts +
          '&nonce_str=' + nonce +
          '&signature=' + sign +
          '&url=' + encodeURIComponent(link)
        document.body.appendChild(s)
      })
    }
  }
}