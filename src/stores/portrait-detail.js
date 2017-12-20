import {
  domain
} from '../z3tougu/config'
import fetch from '../z3tougu/util/z3fetch'
export default {
  namespaced: true,
  state: {
    fcId: 'JRJ2001803730',
    timeStrategyList: [],
    customerPositionList: [],
    customerFilterStrategy: [],
    dayStockSelection: []
  },
  mutations: {
    setTimeStrategyList(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.timeStrategyList = result.data
      }
    },
    setCustomerPosition(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.customerPositionList = result.data
      }
    },
    setCustomerFilterStrategy(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.customerFilterStrategy = result.data
      }
    },
    setDayStockSelection(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.dayStockSelection = result.data.content
      }
    }
  },
  actions: {
    getTimeStrategyList({
      state,
      commit
    }, {
      clientPassport
    }) {
      const url = `${domain}/openapi/personas/timeStrategy.shtml?fcId=${state.fcId}&&userId=${clientPassport}`
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setTimeStrategyList', {
          result: body
        })
      })
    },
    getCustomerPosition({
      state,
      commit
    }, {
      clientPassport
    }) {
      const url = `${domain}/openapi/personas/positionStocks.shtml?fcId=${state.fcId}&&userId=${clientPassport}`
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setCustomerPosition', {
          result: body
        })
      })
    },
    getCustomerFilterStrategy({
      state,
      commit
    }, {
      clientPassport
    }) {
      const url = `${domain}/openapi/personas/filterStrategy.shtml?fcId=${state.fcId}&&userId=${clientPassport}`
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setCustomerFilterStrategy', {
          result: body
        })
      })
    },
    getDayStockSelection({
      commit
    }, {
      strategyId,
      pageNum,
      pageSize
    }) {
      const url = `${domain}/openapi/backtest/filterStrategy/stock.shtml?strategyId=${strategyId}&pageNum=${pageNum}&pageSize=${pageSize}`
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setDayStockSelection', {
          result: body
        })
      })
    }
  }
}