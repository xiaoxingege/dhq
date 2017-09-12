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
    return fetch(url, { mode: 'cors', headers: { 'Cache-Control': 'no-cache' }}).then(res => res.json()).then((result) => {
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
      const lastRecord = kline[0]
      let chgPx = config.emptyValue
      let chgPctPx = config.emptyValue
      if (lastRecord.prevClosePx !== config.emptyValue && lastRecord.prevClosePx !== 0) {
        chgPx = (lastRecord.closePx - lastRecord.prevClosePx).toFixed(2)
        chgPctPx = (chgPx / lastRecord.prevClosePx * 100).toFixed(2)
      }
      state.stock = {
        stockCode: lastRecord.innerCode || config.emptyValue,
        stockName: lastRecord.name || config.emptyValue,
        ma20: lastRecord.ma20,
        ma60: lastRecord.ma60,
        ma120: lastRecord.ma120,
        lastPx: lastRecord.closePx ? lastRecord.closePx.toFixed(2) : config.emptyValue,
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
