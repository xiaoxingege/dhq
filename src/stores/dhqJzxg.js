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
    setJzxgBeforeData(state, jzxgData) {
      state.subscriptions = jzxgData.orderNum
      state.jzmncData = jzxgData.strategies[0]
      state.bdyxData = jzxgData.strategies[1]
      state.zxjjData = jzxgData.strategies[2]
      state.rdjjData = jzxgData.strategies[3]
      state.zltjData = jzxgData.strategies[4]
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
        if (result.retCode === 0) {
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