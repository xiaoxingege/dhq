/**
 * Created by admin on 2017/9/4.
 */
import 'whatwg-fetch'
export default {
  namespaced: true,
  state: {
    basicInfo: null
  },
  mutations: {
    setBasicInfo (state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.basicInfo = result.data
      }
    }
  },
  actions: {
    getBasicInfo ({ commit }, { innerCode }) {
      const url = 'http://www.z3quant.com/openapi/fund/fundInfo/' + innerCode + '.shtml?orgCode=23545784'
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setBasicInfo', {
          result: body
        })
      })
    }
  }
}
