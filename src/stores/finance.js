// import 'whatwg-fetch'
import fetch from '../z3tougu/util/z3fetch'
import {
  domain
} from '../z3tougu/config'

// initial state
export default {
  namespaced: true,
  state: {
    financeData: null
  },
  mutations: {
    setFinData (state, result) {
      if (result.errCode === 0) {
        state.financeData = result.data
      } else {
        state.financeData = null
      }
    }
  },
  actions: {
    getFinData ({
      commit
    }, {
      stockCode
    }) {
      return fetch(`${domain}/openapi/stocks/${stockCode}.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setFinData', body)
      })
    }
  }
}
