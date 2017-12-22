import {
  domain
} from '../z3tougu/config'
import fetch from '../z3tougu/util/z3fetch'
export default {
  namespaced: true,
  state: {
    filterStrategyList: [],
    goldStrategyList: [],
    timeStrategyList: [],
    filerIncome: []
  },
  mutations: {
    setFilterStrategyList(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.filterStrategyList = result.data
      }
    },
    setGoldStrategyList(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.goldStrategyList = result.data
      }
    },
    setTimeStrategyList(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.timeStrategyList = result.data
      }
    },
    setFilterIncome(state, options) {
      const result = options.result
      if (result.errCode === 0) {
        state.filerIncome = result.data
      }
    }
  },
  actions: {
    getFilterStrategyList({
      commit
    }, {
      innerCode,
      limit
    }) {
      const url = `${domain}/openapi/backtest/filterStrategy/equityStrategy.shtml?innerCode=${innerCode}&limit=${limit}`
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setFilterStrategyList', {
          result: body
        })
      })
    },
    getGoldStrategyList({
      commit
    }, {
      innerCode,
      limit
    }) {
      const url = `${domain}/openapi/backtest/goldStrategy/equityStrategy.shtml?innerCode=${innerCode}&limit=${limit}`
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setGoldStrategyList', {
          result: body
        })
      })
    },
    getTimeStrategyList({
      commit
    }, {
      innerCode,
      limit
    }) {
      const url = `${domain}/openapi/backtest/timeStrategy/equityStrategy.shtml?innerCode=${innerCode}&limit=${limit}`
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setTimeStrategyList', {
          result: body
        })
      })
    },
    getFilterIncome({
      commit
    }, {
      strategyId,
      startDate,
      endDate
    }) {
      const url = `${domain}/openapi/backtest/filterStrategy/returns.shtml?strategyId=${strategyId}&startDate=${startDate}&endDate=${endDate}`
      return fetch(url).then((res) => {
        return res.json()
      }).then((body) => {
        commit('setFilterIncome', {
          result: body
        })
      })
    }
  }
}