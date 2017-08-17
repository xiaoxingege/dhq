import 'whatwg-fetch'
import { domain } from '../z3tougu/config'

// initial state
const state = {
  stockCode: null,
  stockKlineData: []
}

// getters
const getters = {

}

const mutationsTypes = {
  UPDATE_KLINE_DATA: 'UPDATE_KLINE_DATA'
}

    // actions
const actions = {
  queryKline ({ commit }, { stockCode }) {
    const url = `${domain}/openapi/filter/kLineMktOrMin.shtml?innerCode=${stockCode}&exstatus=0&flag=day&timeType=mkt`
    return fetch(url, { mode: 'cors' }).then(res => res.json()).then((result) => {
      if (result.errCode === 0) {
        commit(mutationsTypes.UPDATE_KLINE_DATA, result.data.equityMktList)
      }
    })
  }
}

// mutations
const mutations = {
  [mutationsTypes.UPDATE_KLINE_DATA] (state, kline) {
    state.stockKlineData = kline
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
