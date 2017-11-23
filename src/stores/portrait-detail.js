import {
  domain
} from '../z3tougu/config'
import fetch from '../z3tougu/util/z3fetch'
export default {
  namespaced: true,
  state: {
    timeStrategyList: [],
    customerPositionList: []
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
    }
  }
}