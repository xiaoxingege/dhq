// import 'whatwg-fetch'
import fetch from '../z3tougu/util/z3fetch'
import {
  domain
} from '../z3tougu/config'

// initial state
export default {
  namespaced: true,
  state: {
    chartData: {
      szzsChartData: null,
      lsChartData: null,
      szczChartData: null,
      cybzChartData: null
    },
    barData: null
  },
  mutations: {
    setSzzsChartData (state, result) {
      if (result.errCode === 0) {
        state.chartData.szzsChartData = result.data
      } else {
        state.chartData.szzsChartData = null
      }
    },
    setLsChartData (state, result) {
      if (result.errCode === 0) {
        state.chartData.lsChartData = result.data
      } else {
        state.chartData.lsChartData = null
      }
    },
    setSzczChartData (state, result) {
      if (result.errCode === 0) {
        state.chartData.szczChartData = result.data
      } else {
        state.chartData.szczChartData = null
      }
    },
    setCybzChartData (state, result) {
      if (result.errCode === 0) {
        state.chartData.cybzChartData = result.data
      } else {
        state.chartData.cybzChartData = null
      }
    },
    setBarData (state, result) {
      if (result.errCode === 0) {
        state.barData = result.data
      } else {
        state.barData = null
      }
    }
  },
  actions: {
    getIndexChartData ({
      commit
    }, {
      stockCode
    }) {
      return fetch(`${domain}/openapi/lines/${stockCode}.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        if (stockCode === '000001.SH') {
          commit('setSzzsChartData', body)
        } else if (stockCode === '000300.SH') {
          commit('setLsChartData', body)
        } else if (stockCode === '399001.SZ') {
          commit('setSzczChartData', body)
        } else if (stockCode === '399006.SZ') {
          commit('setCybzChartData', body)
        }
      })
    },
    getBarData ({
      commit
    }) {
      return fetch(`${domain}/openapi/bars.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setBarData', body)
      })
    }
  }
}
