import fetch from '../dhq/util/z3fetch'
import {
  domain
} from '../dhq/config'
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
    latestInData: [],
    holdStockData: [],
    isSelfSelection: false,
    multiSelectionData: []
  },
  mutations: {
    setJzxgBeforeData(state, jzxgData) {
      state.subscriptions = jzxgData.orderNum
      state.jzmncData = jzxgData.strategies[0]
      state.bdyxData = jzxgData.strategies[1]
      state.zxjjData = jzxgData.strategies[2]
      state.zltjData = jzxgData.strategies[3]
      state.rdjjData = jzxgData.strategies[4]
    },
    setAuthData(state, auth) {
      state.authData = auth
    },
    setNavData(state, navData) {
      state.navData = navData.strategies
    },
    setStrategyDetail(state, strategyDetail) {
      state.strategyDetail = strategyDetail
    },
    setLatestInData(state, latestInData) {
      state.latestInData = latestInData
    },
    setHoldStockData(state, holdStockData) {
      state.holdStockData = holdStockData
    },
    setSelection(state, isSelfSelection) {
      state.isSelfSelection = isSelfSelection;
    },
    setMultiSelection(state, selfSelectionInfo) {
      state.multiSelectionData = selfSelectionInfo;
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
    getAuthData({
      commit
    }) {
      const url = '//itougu.jrj.com.cn/smartstock/api/excellent/checkAuth.jspa'
      return fetch(url, {
        mode: 'cors'
      }).then(res => res.json()).then((result) => {
        if (result.retCode === 0) {
          commit('setAuthData', result.data)
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
    },
    // 当前持仓
    queryHoldStockData({
      commit
    }, {
      strategyId,
      pageSize,
      pageStart
    }) {
      const url = `//itougu.jrj.com.cn/smartstock/api/excellent/queryHoldStockList.jspa?strategyId=${strategyId}&pageSize=${pageSize}&pageStart=${pageStart}`
      return fetch(url, {
        mode: 'cors'
      }).then(res => res.json()).then((result) => {
        if (result.retCode === 0) {
          commit('setHoldStockData', result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    // 查询是否添加自选
    querySelection({
      rootState,
      commit
    }, {
      stockCode
    }) {
      const userId = rootState.user.userId || '';
      if (!userId) {
        return;
      }
      // stockCode = stockCode && stockCode.substring(0, 6);
      const url = `${domain}/openapi/selectStock/findStock.shtml?stock=${stockCode}&userId=${userId}`
      return fetch(url, {
        mode: 'cors',
        headers: {
          'Cache-Control': 'no-cache',
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res => res.json()).then((result) => {
        commit('setMultiSelection', result.data)
        /* if(stockCode.toString().indexOf(',') === -1){
             if (result.errCode === 0) {
                 commit('setSelection', true);
             } else if (result.errCode === -1) {
                 commit('setSelection', false);
             } else {
                 commit('ERROR', result, {
                     root: true
                 })
             }
         }else{
           if(result.errCode === 0){
             commit('setMultiSelection',result.data)
           }else{
               commit('ERROR', result, {
                   root: true
               })
           }
         }*/
      })
    },
    addSelection({
      rootState,
      commit
    }, {
      stockCode
    }) {
      const userId = rootState.user.userId || '';
      stockCode = stockCode && stockCode.substring(0, 6);
      if (!userId) {
        return;
      }
      const url = `${domain}/openapi/selectStock/add.shtml`
      return fetch(
        url, {
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: 'post',
          body: `stocks=${stockCode}&userId=${userId}`
        }
      ).then(res => res.json()).then((result) => {
        if (result.errCode === 0) {
          commit('setSelection', true);
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    removeSelection({
      rootState,
      commit
    }, {
      stockCode
    }) {
      const userId = rootState.user.userId || '';
      stockCode = stockCode && stockCode.substring(0, 6);
      if (!userId) {
        return;
      }
      const url = `${domain}/openapi/selectStock/del.shtml`
      return fetch(url, {
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        body: `stocks=${stockCode}&userId=${userId}`
      }).then(res => res.json()).then((result) => {
        if (result.errCode === 0) {
          commit('setSelection', false);
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    }
  }
}