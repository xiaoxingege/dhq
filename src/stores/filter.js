import 'whatwg-fetch'
import { domain } from '../z3tougu/config'

const PAGE_SIZE = 10

export const types = {
  ADD_FUNDPOLL: 'ADD_FUNDPOLL'
}
export default {
  state: {
    foundPoolList: [],
    desc: true,   // 降序
    pagesize: PAGE_SIZE,
    page: 1,
    total: 0
  },
  getters: {
    foundPoolList: state => state.foundPoolList
  },
  mutations: {
    [types.ADD_FUNDPOLL] (state, list) {
      state.foundPoolList = list
    },
    upDataPage (state, options) {
      state.pagesize = options.pageSize || PAGE_SIZE
      state.page = options.page || 1
      state.total = options.totalPages
    }
  },
  actions: {
    getFundPool ({ commit }, { page, pagesize, totalPages }) {
      page = page || 0
      pagesize = pagesize || PAGE_SIZE
      const url = `${domain}/openapi/fund/strategyByParam.shtml?sort=desc&page=${page}&size=${pagesize}`
      return fetch(url, { method: 'GET', mode: 'cors' }).then((res) => {
        return res.json()
      }).then(result => {
        commit(types.ADD_FUNDPOLL, result.data)
        commit('upDataPage', { page: 0, pageSize: 10, totalPages: 25 })
      })
    }
  }
}
