import 'whatwg-fetch'
export default {
  namespaced: true,
  state: {
    strategyList: []
  },
  mutations: {
    setStrategyList (state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.strategyList = result.data
      }
    },
    error: 'ERROR'
  },
  actions: {
    getStrategyList ({ commit }, { sort, direction, size }) {
      const url = `http://www.z3quant.com/openapi/backtest/goldStrategy/sort.shtml?sort=${sort}&direction=${direction}&size=${size}`
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setStrategyList', {
          result: body
        })
      }).catch(() => { commit('error') })
    }
  }
}
