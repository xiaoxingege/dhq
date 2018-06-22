import fetch from '../dhq/util/z3fetch'
export default {
  namespaced: true,
  state: {
    authentication: 0, // 鉴权
    subscriptions: '', // 订阅份数
    jzmncData: null, // 极智模拟仓
    bdyxData: null, // 波段选股
    zxjjData: null, // 中线掘金
    rdjjData: null, // 热点狙击
    zltjData: null, // 主力天机
    navData: [],
    strategyDetail: null,
    latestInData: []
  },
  mutations: {
    setJzxgBeforeData(state, jzxgData) {
      state.subscriptions = jzxgData.orderNum
      state.jzmncData = jzxgData.strategies[0]
      state.bdyxData = jzxgData.strategies[1]
      state.zxjjData = jzxgData.strategies[2]
      state.rdjjData = jzxgData.strategies[3]
      state.zltjData = jzxgData.strategies[4]
    },
    setAuthentication(state, authentication) {
      state.authentication = authentication.valid
    },
    setNavData(state, navData) {
      state.navData = navData.strategies
    },
    setStrategyDetail(state, strategyDetail) {
      state.strategyDetail = strategyDetail
    },
    setLatestInData(state, latestInData) {
      state.latestInData = latestInData
    }
  },
  actions: {
    // 极智选股购前
    getJzxgBeforeData({
      commit
    }) {
      const url = '//itougu.jrj.com.cn/smartstock/api/excellent/buyPage.jspa'
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
    },
    // 鉴权接口
    getAuthentication({
      commit
    }) {
      const url = '//itougu.jrj.com.cn/smartstock/api/excellent/checkAuth.jspa'
      return fetch(url, {
        mode: 'cors'
      }).then(res => res.json()).then((result) => {
        if (result.retCode === 0) {
          commit('setAuthentication', result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    // 左侧导航栏-购后
    getNavData({
      commit
    }) {
      const url = '//itougu.jrj.com.cn/smartstock/api/excellent/homePage.jspa'
      return fetch(url, {
        mode: 'cors'
      }).then(res => res.json()).then((result) => {
        if (result.retCode === 0) {
          commit('setNavData', result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    // 策略详情 - 极智选股购后
    getStrategyDetail({
      commit
    }, {
      strategyId
    }) {
      const url = `//itougu.jrj.com.cn/smartstock/api/excellent/queryStrategyInfo.jspa?strategyId=${strategyId}`
      return fetch(url, {
        mode: 'cors'
      }).then(res => res.json()).then((result) => {
        if (result.retCode === 0) {
          commit('setStrategyDetail', result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    // 最新调入股票数据(下拉刷新) - 购后
    getLatestInData({
      commit
    }, {
      strategyId,
      pageSize,
      pageStart
    }) {
      const url = `//itougu.jrj.com.cn/smartstock/api/excellent/queryLastExcellent.jspa?strategyId=${strategyId}&pageSize=${pageSize}&pageStart=${pageStart}`
      return fetch(url, {
        mode: 'cors'
      }).then(res => res.json()).then((result) => {
        if (result.retCode === 0) {
          commit('setLatestInData', result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    }
  }
}