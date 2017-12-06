import {
  domain
} from '../z3tougu/config'
import fetch from '../z3tougu/util/z3fetch'
export default {
  namespaced: true,
  state: {
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
      commit
    }, {
      clientPassport
    }) {
      const url = `${domain}/openapi/personas/timeStrategy.shtml?clientPassport=${clientPassport}`
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setTimeStrategyList', {
          result: body
        })
      })
    },
    getCustomerPosition({
      commit
    }, {
      clientPassport
    }) {
      const url = `${domain}/openapi/personas/positionStocks.shtml?clientPassport=${clientPassport}`
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setCustomerPosition', {
          result: body
        })
      })
    },
    getCustomerFilterStrategy({
      commit
    }, {
      clientPassport
    }) {
      const url = `${domain}/openapi/personas/filterStrategy.shtml?clientPassport=${clientPassport}`
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