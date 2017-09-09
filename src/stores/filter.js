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
    relatedStocks: {},
    sylbx: [], // 收益率表现
    nhsyl: [], // 年化收益率
    zdhc: [], // 最大回撤
    xpb: [], // 夏普率
    cesyl: []// 超额收益率
  },
  getters: {
    foundPoolList: state => state.foundPoolList,
    themeList: state => state.themeList,
    relatedStocks: state => state.relatedStocks,
    sylbx: state => state.sylbx,
    nhsyl: state => state.nhsyl,
    zdhc: state => state.zdhc,
    xpb: state => state.xpb,
    cesyl: state => state.cesyl
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
    },
    getSylbx (state, options) {
      state.sylbx = options
    },
    getNhsyl (state, options) {
      state.nhsyl = options
    },
    getZdhc (state, options) {
      state.zdhc = options
    },
    getXpb (state, options) {
      state.xpb = options
    },
    getCesyl (state, options) {
      state.cesyl = options
    }
  },
  actions: {
    getFundPool ({ commit }, { type, option }) {
      console.log(type, option)
      const url = `${domain}/openapi/fund/strategyByParam.shtml`
      return fetch(url, { method: 'GET', mode: 'cors' }).then((res) => {
        return res.json()
      }).then(result => {
        commit(types.ADD_FUNDPOLL, result.data)
      })
    },
    getSylbx ({ commit }, { idxId, jjlx }) {
      const url = `${domain}/openapi/fund/indexlist.shtml?idxId=${idxId}&jjlx=${jjlx}`
      return fetch(url, { method: 'GET', mode: 'cors' }).then(res => {
        return res.json()
      }).then(result => {
        commit('getSylbx', result.data)
      })
    },
    getNhsyl ({ commit }, { idxId, jjlx }) {
      const url = `${domain}/openapi/fund/indexlist.shtml?idxId=${idxId}&jjlx=${jjlx}`
      return fetch(url, { method: 'GET', mode: 'cors' }).then(res => {
        return res.json()
      }).then(result => {
        commit('getNhsyl', result.data)
      })
    },
    getZdhc ({ commit }, { idxId, jjlx }) {
      const url = `${domain}/openapi/fund/indexlist.shtml?idxId=${idxId}&jjlx=${jjlx}`
      return fetch(url, { method: 'GET', mode: 'cors' }).then(res => {
        return res.json()
      }).then(result => {
        commit('getZdhc', result.data)
      })
    },
    getXpb ({ commit }, { idxId, jjlx }) {
      const url = `${domain}/openapi/fund/indexlist.shtml?idxId=${idxId}&jjlx=${jjlx}`
      return fetch(url, { method: 'GET', mode: 'cors' }).then(res => {
        return res.json()
      }).then(result => {
        commit('getXpb', result.data)
      })
    },
    getCesyl ({ commit }, { idxId, jjlx }) {
      const url = `${domain}/openapi/fund/indexlist.shtml?idxId=${idxId}&jjlx=${jjlx}`
      return fetch(url, { method: 'GET', mode: 'cors' }).then(res => {
        return res.json()
      }).then(result => {
        commit('getCesyl', result.data)
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
