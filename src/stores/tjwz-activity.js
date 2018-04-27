/*
 * 同步形式的store，设置好state中的值即可
 * namespaced为true，是为了避免store的module之间，getters、mutations、actions发生命名冲突
 */

// whatwg-fetch仅能在浏览器环境使用。
// import $ from 'jquery'
import 'whatwg-fetch'

export default {
  namespaced: true,
  state: {
    // 初始化时，务必要把所有的数据成员做初始化，否则后面数据的更新，将不会触发显示的更新
    dataList: [],
    dataType: false, // repeatType 1未重复、2重复
    err: null
  },
  mutations: {
    setData(state, res) {
      state.dataList.push(res)
      state.dataList.sort(function(a, b) {
        return a.sort - b.sort;
      })
      state.dataType = true
    },
    setError(state, err) {
      state.err = err
    }
  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    whereList({
      commit,
      rootState,
      state
    }, options) {
      return $.ajax({
        url: 'http://itougu.jrj.com.cn/account/m/getAdviserProfile.jspa?adviserId=' + options.userId,
        dataType: 'jsonp'
        // jsonpCallback: 'callback'
      }).then(data => {
        if (data.retCode === 0) {
          data.data.sort = options.sort
          commit('setData', data.data)
        } else {
          commit('setError', {
            retCode: data.retCode,
            msg: data.msg
          })
        }
      })
    }
  }
}