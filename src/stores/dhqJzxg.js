import fetch from '../dhq/util/z3fetch'
export default {
  namespaced: true,
  state: {
    subscriptions: '', // 订阅份数
    jzmncData: null, // 极智模拟仓
    bdyxData: null, // 波段选股
    zxjjData: null, // 中线掘金
    rdjjData: null, // 热点狙击
    zltjData: null // 主力天机
  },
  mutations: {
    setJzxgBeforeData(state, options) {
      const result = options.result
      if (result.retCode === 0) {
        state.subscriptions = result.data.orderNum
        state.jzmncData = result.data.strategies[0]
        state.bdyxData = result.data.strategies[1]
        state.zxjjData = result.data.strategies[2]
        state.rdjjData = result.data.strategies[3]
        state.zltjData = result.data.strategies[4]
      }
    }
  },
  actions: {
    // 极智选股购前
    getJzxgBeforeData({
      commit
    }) {
      const url = `//172.16.20.86:8031/mockjsdata/24/smartstock/api/excellent/buyPage.jspa`
      return fetch(url, {
        mode: 'cors'
      }).then(res => res.json()).then((result) => {
        if (result.errCode === 0) {
          commit('setJzxgBeforeData', result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    }
  }
}