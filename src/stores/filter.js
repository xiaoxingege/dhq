import 'whatwg-fetch'
import { domain } from '../z3tougu/config'
export const types = {
  ADD_FUNDPOLL: 'ADD_FUNDPOLL'
}
export default {
  state: {
    foundPoolList: []
  },
  getters: {
    foundPoolList: state => state.foundPoolList
  },
  mutations: {
    [types.ADD_FUNDPOLL] (state, list) {
      state.foundPoolList = list
    }
  },
  actions: {
    getFundPool ({ commit }) {
      const url = `${domain}/openapi/fund/strategyByParam.shtml`
      return fetch(url, { method: 'GET', mode: 'cors' }).then((res) => {
        return res.json()
      }).then(result => {
        commit(types.ADD_FUNDPOLL, result.data)
      })
    }
  }

}
