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
    updateAllTopic (state, themeList) {
      state.themeList = themeList
      const stocks = {}
      for (const topic of themeList) {
        const relatedEquity = topic.relatedEquity
        for (const stock of relatedEquity) {
          stocks[stock.innerCode] = stock
        }
      }
      state.relatedStocks = stocks
    },
    updatePage (state, options) {
      state.pagesize = options.pageSize || PAGE_SIZE
      state.page = options.page || 1
      state.total = options.totalPages
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
    // getFundPool ({ commit }, { sortField, page, pagesize, totalPages }) {
    //   page = page || 0
    //   pagesize = pagesize || PAGE_SIZE
    //   const url = `${domain}/openapi/fund/strategyByParam.shtml?sort=desc&page=${page}&size=${pagesize}`
    //   return fetch(url, { method: 'GET', mode: 'cors' }).then((res) => {
    //     return res.json()
    //   }).then(result => {
    //     commit(types.ADD_FUNDPOLL, result.data)
    //     commit('upDataPage', { page: 0, pageSize: 10, totalPages: 25 })
    //   })
    // }
    // queryAllTopic ({ commit }, { sortField, page, pagesize, totalPages }) {
    //   page = page || 0
    //   pagesize = pagesize || PAGE_SIZE
    //   return fetch(`${domain}/openapi/topic/pageTopic.shtml?sort=${sortField},desc&page=${page}&size=${pagesize}`, {
    //     mode: 'cors'
    //   }).then((res) => {
    //     return res.json()
    //   }).then(result => {
    //     if (result.errCode === 0) {
    //       commit('updateAllTopic', result.data.content)
    //       commit('updatePage', { page: result.data.number, pageSize: result.data.size, totalPages: result.data.totalPages })
    //     }
    //   })
    // }
  }
}
