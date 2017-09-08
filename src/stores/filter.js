import 'whatwg-fetch'
import { domain } from '../z3tougu/config'

const PAGE_SIZE = 10

export const types = {
  ADD_FUNDPOLL: 'ADD_FUNDPOLL'
}
export default {
  state: {
    topic: null,
    foundPoolList: [],
    desc: true,   // 降序
    pagesize: PAGE_SIZE,
    page: 1,
    total: 0,
    themeList: [],
    relatedStocks: {}
  },
  getters: {
    foundPoolList: state => state.foundPoolList,
    themeList: state => state.themeList,
    relatedStocks: state => state.relatedStocks,
    totalPage: state => state.total
  },
  mutations: {
    [types.ADD_FUNDPOLL] (state, list) {
      state.foundPoolList = list
    },
    upDataPage (state, options) {
      state.pagesize = options.pageSize || PAGE_SIZE
      state.page = options.page || 1
      state.total = options.totalPages
    },
    updatePage (state, options) {
      state.pagesize = options.pageSize || PAGE_SIZE
      state.page = options.page || 1
      state.total = options.totalPages
    }
  },
  actions: {
    getFundPool ({ commit }, { sortField, page, pagesize, totalPages }) {
      page = page || 0
      pagesize = pagesize || PAGE_SIZE
      const url = `${domain}/openapi/fund/strategyByParam.shtml?`
      return fetch(url, { method: 'POST', mode: 'cors' }).then((res) => {
        return res.json()
      }).then(result => {
        commit(types.ADD_FUNDPOLL, result.data)
      })
    }
    // getFundPool ({ commit }, { sortField, page, pagesize, totalPages }) {
    //   page = page || 0
    //   pagesize = pagesize || PAGE_SIZE
    //   const url = `${domain}/openapi/fund/strategyByParam.shtml?sort=desc&page=${page}&size=${pagesize}`
    //   return fetch(url, { method: 'GET', mode: 'cors' }).then((res) => {
    //     return res.json()
    //   }).then(result => {
    //     commit(types.ADD_FUNDPOLL, result.data)
    //     commit('upDataPage', { page: result.data.number, pageSize: result.data.size, totalPages: result.data.totalPages })
    //   })
    // }
  }
}
