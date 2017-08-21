import 'whatwg-fetch'
import config, { domain } from '../z3tougu/config'

// initial state
const state = {
  stockKlineData: [],
  stock: {
    stockCode: config.emptyValue,
    stockName: config.emptyValue,
    ma20: config.emptyValue,
    ma60: config.emptyValue,
    ma120: config.emptyValue,
    lastPx: config.emptyValue,
    chgPx: config.emptyValue,
    chgPctPx: config.emptyValue
  }
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
    if (kline && kline.length > 0) {
      const lastRecord = kline[kline.length - 1]
      const chgPx = (lastRecord.closePx - lastRecord.prevClosePx).toFixed(2)
      const chgPctPx = (chgPx / lastRecord.prevClosePx * 100).toFixed(2)
      state.stock = {
        stockCode: lastRecord.name,
        stockName: lastRecord.innerCode,
        ma20: lastRecord.ma20,
        ma60: lastRecord.ma60,
        ma120: lastRecord.ma120,
        lastPx: lastRecord.closePx,
        chgPx: chgPx,
        chgPctPx: chgPctPx + '%'
      }
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
