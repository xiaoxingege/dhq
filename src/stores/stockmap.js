import 'whatwg-fetch'

// initial state
const state = {
  industries: null,
  stockData: null
}

// getters
const getters = {

}

const mutationsTypes = {
  QUERY_RANGE_BY_CODE: 'QUERY_RANGE_BY_CODE',
  UPDATE_DATA: 'UPDATE_DATA',
  STOCK_CHART_DATA: 'STOCK_CHART_DATA',
  CALENDARS_DATA: 'CALENDARS_DATA',
  ERROR: 'ERROR'
}
    // actions
const actions = {
  queryRangeByCode ({ commit, state }, { code }) {
    /* const url = 'http://www.z3quant.com/openapi/json/'.json'*/
    let url
    if (code === '') {
      url = 'http://www.z3quant.com/openapi/dbus-web/src/main/webapp/json/' + code + '.json'
    } else {
      url = 'http://www.z3quant.com/openapi/dbus-web/src/main/webapp/json/auth/' + code + '.json'
    }
    return fetch(url).then((res) => {
      return res.json()
    }).then((data) => {
      commit(mutationsTypes.QUERY_RANGE_BY_CODE, data.children)
    }).catch(() => { commit(mutationsTypes.ERROR) })
  },
  updateData ({ commit, state }, { isContinue, condition, code }) {
    const url = `http://www.z3quant.com/openapi/timedQueryMap?isContinue=${isContinue}&condition=${condition}&code=${code}`
    return fetch(url).then((res) => {
      return res.json()
    }).then((data) => {
      commit(mutationsTypes.UPDATE_DATA, data.data)
    }).catch(() => { commit(mutationsTypes.ERROR) })
  },
  updateDataByDate ({ commit, state }, { date, code }) {
    const url = 'http://www.z3quant.com/openapi/dbus-web/src/main/webapp/json/' + date + '.json'
    return fetch(url).then((res) => {
      return res.json()
    }).then((data) => {
      commit(mutationsTypes.UPDATE_DATA, data)
    }).catch(() => { commit(mutationsTypes.ERROR) })
  },
  stockChartData ({ commit, state }, { id, code }) {
    const url = 'http://www.z3quant.com/openapi/industries/' + id + '.json?indexCode=' + code
    return fetch(url).then((res) => {
      return res.json()
    }).then((data) => {
      commit(mutations.STOCK_CHART_DATA, data)
    }).catch(() => { commit(mutationsTypes.ERROR) })
  },
  calendarsData ({ commit, state }, { id, code }) {
    const url = 'http://www.z3quant.com/openapi/calendars'
    return fetch(url).then((res) => {
      return res.json()
    }).then((data) => {
      commit(mutations.CALENDARS_DATA, data)
    }).catch(() => { commit(mutationsTypes.ERROR) })
  }
}
// mutations
const mutations = {
  [mutationsTypes.QUERY_RANGE_BY_CODE] (state, industries) {
    state.industries = industries
  },
  [mutationsTypes.UPDATE_DATA] (state, stockData) {
    state.stockData = stockData
  },
  [mutationsTypes.STOCK_CHART_DATA] (state, stockChartData) {
    state.stockChartData = stockChartData
  },
  [mutationsTypes.CALENDARS_DATA] (state, calendarsData) {
    state.calendarsData = calendarsData
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
