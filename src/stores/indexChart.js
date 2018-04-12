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
    setSzzsChartData(state, result) {
      if (result.errCode === 0) {
        state.chartData.szzsChartData = result.data
      } else {
        state.chartData.szzsChartData = null
      }
    },
    setLsChartData(state, result) {
      if (result.errCode === 0) {
        state.chartData.lsChartData = result.data
      } else {
        state.chartData.lsChartData = null
      }
    },
    setSzczChartData(state, result) {
      if (result.errCode === 0) {
        state.chartData.szczChartData = result.data
      } else {
        state.chartData.szczChartData = null
      }
    },
    setCybzChartData(state, result) {
      if (result.errCode === 0) {
        state.chartData.cybzChartData = result.data
      } else {
        state.chartData.cybzChartData = null
      }
    },
    setBarData(state, result) {
      if (result.errCode === 0) {
        state.barData = result.data
      } else {
        state.barData = null
      }
    },
    chartSocket(state, result) {
      if (result.stockCode === '000001.SH') {
        state.chartData.szzsChartData.avgArr[result.list[0].time] = result.list[0].avgpx
        state.chartData.szzsChartData.priceArr[result.list[0].time] = result.list[0].lastpx
        state.chartData.szzsChartData.upDown = result.list[0].pxchg
        state.chartData.szzsChartData.upDownExtent = result.list[0].pxchgRatio
        state.chartData.szzsChartData.stockVal = result.list[0].lastpx
      } else if (result.stockCode === '000300.SH') {
        state.chartData.lsChartData.avgArr[result.list[0].time] = result.list[0].avgpx
        state.chartData.lsChartData.priceArr[result.list[0].time] = result.list[0].lastpx
        state.chartData.lsChartData.upDown = result.list[0].pxchg
        state.chartData.lsChartData.upDownExtent = result.list[0].pxchgRatio
        state.chartData.lsChartData.stockVal = result.list[0].lastpx
      } else if (result.stockCode === '399001.SZ') {
        state.chartData.szczChartData.avgArr[result.list[0].time] = result.list[0].avgpx
        state.chartData.szczChartData.priceArr[result.list[0].time] = result.list[0].lastpx
        state.chartData.szczChartData.upDown = result.list[0].pxchg
        state.chartData.szczChartData.upDownExtent = result.list[0].pxchgRatio
        state.chartData.szczChartData.stockVal = result.list[0].lastpx
      } else if (result.stockCode === '399006.SZ') {
        state.chartData.cybzChartData.avgArr[result.list[0].time] = result.list[0].avgpx
        state.chartData.cybzChartData.priceArr[result.list[0].time] = result.list[0].lastpx
        state.chartData.cybzChartData.upDown = result.list[0].pxchg
        state.chartData.cybzChartData.upDownExtent = result.list[0].pxchgRatio
        state.chartData.cybzChartData.stockVal = result.list[0].lastpx
      }
    },
    barSocket(state, result) {
      state.barData = result
    }
  },
  actions: {
    getIndexChartData({
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
    getBarData({
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