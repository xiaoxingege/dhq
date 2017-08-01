/*
 * 同步形式的store，设置好state中的值即可
 * namespaced为true，是为了避免store的module之间，getters、mutations、actions发生命名冲突
 */

// whatwg-fetch仅能在浏览器环境使用。
import 'whatwg-fetch'

const PAGE_SIZE = 10

export default {
  namespaced: true,
  state: {
        // 初始化时，务必要把所有的数据成员做初始化，否则后面数据的更新，将不会触发显示的更新
    keyword: '',
    result: {
      stock: null
    },
    pagesize: PAGE_SIZE,
    page: 1,
    total: 0
  },
  mutations: {
    setResult (state, result) {
      if (result.errCode === 0) {
        state.result = result.data.list
        state.total = result.data.recordNum
      } else {
        state.result = null
      }
    },
    setSearchOptions (state, options) {
      state.pagesize = options.pagesize || PAGE_SIZE
      state.page = options.page || 1
      state.keyword = options.keyword
    }
  },
    // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    search ({ commit }, { keyword, page, pagesize }) {
      commit('setSearchOptions', { keyword, page, pagesize })
      fetch(`http://10.77.4.23:8899/openapi/search/stock.shtml?w=${keyword}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setResult', body)
      })
    }
  }
}
