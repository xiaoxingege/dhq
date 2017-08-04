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
    keyword: '',
    id: '',
    dataList: null
  },
  mutations: {
    setDetail (state, result) {
      if (result.errCode === 0) {
        state.dataList = result.data.news
      } else {
        state.dataList = null
      }
    },
    setDetailOptions (state, options) {
      state.id = options.id
    }
  },
    // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    getDetailPages ({ commit }, { id }) {
      commit('setDetailOptions', { id })
      fetch(`http://www.z3quant.com/openapi/news/${id}.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setDetail', body)
      })
    }
  }
}
