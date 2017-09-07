import 'whatwg-fetch'
import { domain } from '../z3tougu/config'

// initial state
export default {
  namespaced: true,
  state: {
    backtestResult: null,
    strategyResult: null,
    strategyId: '',
    backtestId: '',
    backtestStartDate: '',
    backtestEndDate: '',
    syqxtData: {
      xData: [],
      data1: [],
      data2: []
    },
    drykData: {
      xData: [],
      data1: [],
      data2: []
    },
    mrccData: {
      xData: [],
      data1: []
    },
    syytjData: {
      xData: [],
      data1: [],
      data2: []
    },
    sylfbData: {
      xData: [],
      data1: [],
      data2: []
    },
    mrjyData: null,
    dqxgData: null,
    radarData: {
      legend: [],
      data: []
    }
  },
  mutations: {
    setBacktestOptions (state, result) {
      state.strategyId = result
    },
    setBacktestInfo (state, result) {
      if (result.errCode === 0) {
        const data = result.data
        state.backtestId = data.backtestId
        state.backtestStartDate = data.backtestStartDate.split('-').join('')
        state.backtestEndDate = data.backtestEndDate.split('-').join('')
      } else {
        state.backtestId = ''
        state.backtestStartDate = ''
        state.backtestEndDate = ''
      }
    },
    setBacktestData (state, result) {
      if (result.errCode === 0) {
        state.backtestResult = result.data
      } else {
        state.backtestResult = null
      }
    },
    setStrategyData (state, result) {
      if (result.errCode === 0) {
        state.strategyResult = result.data
      } else {
        state.strategyResult = null
      }
    },
    setSyqxtData (state, result) {
      if (result.errCode === 0) {
        const data = result.data
        for (var i = 0; i < data.length; i++) {
          state.syqxtData.xData.push(data[i].backtestDate)
          state.syqxtData.data1.push(Number(data[i].totalReturn).toFixed(2))
          state.syqxtData.data2.push(Number(data[i].benchmarkPeriodReturn).toFixed(2))
        }
      } else {
        state.syqxtData.xData = []
        state.syqxtData.data1 = []
        state.syqxtData.data2 = []
      }
    }

  },
  actions: {
    getBacktestInfo ({ commit }, { strategyId }) {
      commit('setBacktestOptions', strategyId)
      return fetch(`${domain}/openapi/backtest/basic.shtml?strategyId=${strategyId}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setBacktestInfo', body)
      })
    },
    getBacktestData ({ commit }, { backtestId }) {
      commit('setBacktestOptions', backtestId)
      return fetch(`${domain}/openapi/backtest/basicAndIndex.shtml?backtestId=${backtestId}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setBacktestData', body)
      })
    },
    getStrategyData ({ commit }, { strategyId }) {
      // commit('setBacktestOptions', strategyId)
      return fetch(`${domain}/openapi/backtest/strategy/${strategyId}.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setStrategyData', body)
      })
    },
    getSyqxtData ({ commit }, { backtestId, startDate, endDate }) {
      // commit('setGoldOptions', backtestId)
      return fetch(`http://www.z3quant.com/openapi/backtest/returns.shtml?backtestId=${backtestId}&startDate=${startDate}&endDate=${endDate}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setSyqxtData', body)
      })
    }
  }
}
