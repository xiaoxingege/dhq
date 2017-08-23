/*
 * 同步形式的store，设置好state中的值即可
 * namespaced为true，是为了避免store的module之间，getters、mutations、actions发生命名冲突
 */

// whatwg-fetch仅能在浏览器环境使用。
import 'whatwg-fetch'
// import getQueryString from 'utils/getQueryString'

// const PAGE_SIZE = 10

export default {
  namespaced: true,
  state: {
    dataList: [],
    userInfo: {},
    err: null
  },
  mutations: {
    setData (state, res) {
      state.dataList = res.askList
      state.userInfo = res.userInfo
    },
    setError (state, err) {
      state.err = err
    }
  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    fetch ({ commit, rootState }, options) {
      fetch('http://mapi.itougu.jrj.com.cn/wireless/ssearch/baidu/baidu_myanswer/141120010079383950/1?ps=10&', {
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
    }
  }
}
