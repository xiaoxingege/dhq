/*
 * 同步形式的store，设置好state中的值即可
 * namespaced为true，是为了避免store的module之间，getters、mutations、actions发生命名冲突
 */

// whatwg-fetch仅能在浏览器环境使用。
// import 'whatwg-fetch'
import fetch from '../dhq/util/z3fetch'
/* import config, {
  domain
} from '../dhq/config'
 */
export const mutationTypes = {

}

export default {
  namespaced: true,
  state: {
    // 初始化时，务必要把所有的数据成员做初始化，否则后面数据的更新，将不会触发显示的更
    summary: {},
    indexResume: []
  },
  mutations: {
    updateResume(state, option) {
      state.summary = option.summary
      state.indexResume = option.index
      console.log(option.summary)

    }

  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    // http://172.16.20.86:8031/mockjsdata/24/smartstock/api/market/queryResume.jspa
    queryResume({
      commit
    }) {
      return fetch('https://itougu.jrj.com.cn/smartstock/api/market/queryResume.jspa', {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.retCode === 0) {
          commit('updateResume', result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    }
  }
}