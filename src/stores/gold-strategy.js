// import 'whatwg-fetch'
import fetch from '../z3tougu/util/z3fetch'
import {
  domain
} from '../z3tougu/config'

// initial state
export default {
  namespaced: true,
  state: {
    goldResult: null,
    strategyId: '',
    startDate: '',
    endDate: '',
    syqxtData: {
      firstDate: '',
      lastDate: '',
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
    mrxhData: null,
    mcxhData: null,
    dqccData: null,
    radarData: {
      legend: [],
      data: []
    },
    attentionData: null,
    simulationData: null,
    addAttention: false,
    delAttention: false
  },
  mutations: {
    setGoldOptions(state, result) {
      state.strategyId = result.strategyId
      state.startDate = result.startDate
      state.endDate = result.endDate
    },
    setGoldData(state, result) {
      if (result.errCode === 0) {
        state.goldResult = result.data
      } else {
        state.goldResult = null
      }
    },
    setSyqxtData(state, result) {
      if (result.errCode === 0) {
        if (state.startDate === '' && state.endDate === '') {
          state.syqxtData.firstDate = ''
          state.syqxtData.lastDate = ''
        }

        state.syqxtData.xData = []
        state.syqxtData.data1 = []
        state.syqxtData.data2 = []
        const data = result.data
        const dataLen = data.length - 1
        if (state.startDate === '' && state.endDate === '') {
          state.syqxtData.firstDate = data[0].backtestDate
          state.syqxtData.lastDate = data[dataLen].backtestDate
        }
        for (var i = 0; i < data.length; i++) {
          state.syqxtData.xData.push(data[i].backtestDate)
          state.syqxtData.data1.push(Number(data[i].totalReturn))
          state.syqxtData.data2.push(Number(data[i].benchmarkPeriodReturn))
        }
      } else {
        state.syqxtData.firstDate = ''
        state.syqxtData.lastDate = ''
        state.syqxtData.xData = []
        state.syqxtData.data1 = []
        state.syqxtData.data2 = []
      }
    },
    setDrykData(state, result) {
      if (result.errCode === 0) {
        state.drykData.xData = []
        state.drykData.data1 = []
        state.drykData.data2 = []
        const data = result.data
        for (var i = 0; i < data.length; i++) {
          state.drykData.xData.push(data[i].backtestDate)
          if (data[i].profit > 0) {
            state.drykData.data1.push(Number(data[i].profit).toFixed(2))
            state.drykData.data2.push(0)
          } else if (data[i].profit < 0) {
            state.drykData.data1.push(0)
            state.drykData.data2.push(Number(data[i].profit).toFixed(2))
          } else {
            state.drykData.data1.push(0)
            state.drykData.data2.push(0)
          }
        }
      } else {
        state.drykData.xData = []
        state.drykData.data1 = []
        state.drykData.data2 = []
      }
    },
    setMrccData(state, result) {
      if (result.errCode === 0) {
        state.mrccData.xData = []
        state.mrccData.data1 = []
        const data = result.data
        for (var i = 0; i < data.length; i++) {
          state.mrccData.xData.push(data[i].backtestDate)
          state.mrccData.data1.push(Number(data[i].positionRatio).toFixed(4))
        }
      } else {
        state.mrccData.xData = []
        state.mrccData.data1 = []
      }
    },
    setSyytjData(state, result) {
      if (result.errCode === 0) {
        state.syytjData.xData = []
        state.syytjData.data1 = []
        state.syytjData.data2 = []
        const data = result.data
        state.syytjData.xData = data.backtestDate
        state.syytjData.data1 = data.backtestData
        state.syytjData.data2 = data.benchmarkData
      } else {
        state.syytjData.xData = []
        state.syytjData.data1 = []
        state.syytjData.data2 = []
      }
    },
    setSylfbData(state, result) {
      if (result.errCode === 0) {
        state.sylfbData.xData = []
        state.sylfbData.data1 = []
        state.sylfbData.data2 = []
        const data = result.data
        for (var i = 0; i < data.rates.length; i++) {
          state.sylfbData.xData.push((Number(data.rates[i]) * 100).toFixed(2) + '%')
          if (data.rates[i] < 0) {
            state.sylfbData.data1.push(data.counts[i])
            state.sylfbData.data2.push(0)
          } else {
            state.sylfbData.data1.push(0)
            state.sylfbData.data2.push(data.counts[i])
          }
        }
      } else {
        state.sylfbData.xData = []
        state.sylfbData.data1 = []
        state.sylfbData.data2 = []
      }
    },
    setMrjyData(state, result) {
      if (result.errCode === 0) {
        state.mrjyData = null
        state.mrjyData = result.data
      } else {
        state.mrjyData = null
      }
    },
    setRadarData(state, result) {
      if (result.errCode === 0) {
        const radarData = result.data
        const colorArr = ['#246AF4', '#26B27A', '#EEB235']
        for (var i = 0; i < radarData.length; i++) {
          state.radarData.legend.push(radarData[i].tradeDate)
          state.radarData.data.push({
            value: [radarData[i].growth, radarData[i].leverage, radarData[i].liquidity, radarData[i].momentum, radarData[i].size, radarData[i].value, radarData[i].volatility, radarData[i].quality, radarData[i].analystExpect, radarData[i].shareHolder],
            name: radarData[i].tradeDate,
            itemStyle: {
              normal: {
                color: colorArr[i]
              }
            }

          })
        }
      } else {
        state.radarData = null
      }
    },
    setMrxhData(state, result) {
      if (result.errCode === 0) {
        state.mrxhData = null
        state.mrxhData = result.data
      } else {
        state.mrxhData = null
      }
    },
    setMcxhData(state, result) {
      if (result.errCode === 0) {
        state.mcxhData = null
        state.mcxhData = result.data
      } else {
        state.mcxhData = null
      }
    },
    setDqccData(state, result) {
      if (result.errCode === 0) {
        state.dqccData = null
        state.dqccData = result.data
      } else {
        state.dqccData = null
      }
    },
    setAttentionData(state, result) {
      if (result.errCode === 0) {
        state.attentionData = true
      } else if (result.errCode === 1233) {
        state.attentionData = false
      } else {
        state.attentionData = null
      }
    },
    setSimulation(state, result) {
      if (result.errCode === 0) {
        state.simulationData = result.data
      } else if (result.errCode === 1233) {
        state.simulationData = false
      } else {
        state.simulationData = null
      }
    },
    addAttentionData(state, result) {
      if (result.errCode === 0) {
        state.addAttention = true
      } else {
        state.addAttention = false
      }
    },
    delAttentionData(state, result) {
      if (result.errCode === 0) {
        state.delAttention = true
      } else {
        state.delAttention = false
      }
    }
  },
  actions: {
    getGoldStrategyData({
      commit,
      rootState
    }, {
      strategyId,
      share
    }) {
      commit('setGoldOptions', strategyId)
      return fetch(`${domain}/openapi/backtest/goldStrategy/basicAndIndex.shtml?strategyId=${strategyId}&share=${share}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        if (body.errCode === 0) {
          commit('setGoldData', body)
        } else {
          commit('ERROR', body, {
            root: true
          })
        }
      })
    },
    getSyqxtData({
      commit
    }, {
      strategyId,
      startDate,
      endDate
    }) {
      commit('setGoldOptions', {
        strategyId,
        startDate,
        endDate
      })
      // return fetch(`${domain}/openapi/backtest/goldStrategy/returns.shtml?strategyId=${strategyId}`, {
      return fetch(`${domain}/openapi/backtest/goldStrategy/returns.shtml?strategyId=${strategyId}&startDate=${startDate || ''}&endDate=${endDate || ''}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setSyqxtData', body)
      })
    },
    getDrykData({
      commit
    }, {
      strategyId
    }) {
      commit('setGoldOptions', strategyId)
      return fetch(`${domain}/openapi/backtest/goldStrategy/profits.shtml?strategyId=${strategyId}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setDrykData', body)
      })
    },
    getMrccData({
      commit
    }, {
      strategyId
    }) {
      commit('setGoldOptions', strategyId)
      return fetch(`${domain}/openapi/backtest/goldStrategy/positionRatios.shtml?strategyId=${strategyId}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setMrccData', body)
      })
    },
    getSyytjData({
      commit
    }, {
      strategyId
    }) {
      commit('setGoldOptions', strategyId)
      return fetch(`${domain}/openapi/backtest/goldStrategy/monthProfit.shtml?strategyId=${strategyId}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setSyytjData', body)
      })
    },
    getSylfbData({
      commit
    }, {
      strategyId
    }) {
      commit('setGoldOptions', strategyId)
      return fetch(`${domain}/openapi/backtest/goldStrategy/sellProfit.shtml?strategyId=${strategyId}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setSylfbData', body)
      })
    },
    getMrjyData({
      commit
    }, {
      strategyId,
      page
    }) {
      commit('setGoldOptions', strategyId)
      return fetch(`${domain}/openapi/backtest/goldStrategy/tradeDetail.shtml?strategyId=${strategyId}&size=10&page=${page || 0}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setMrjyData', body)
      })
    },
    getRadarData({
      commit
    }, {
      strategyId
    }) {
      commit('setGoldOptions', strategyId)
      return fetch(`${domain}/openapi/backtest/strategy/risk.shtml?strategyId=${strategyId}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setRadarData', body)
      })
    },
    getMrxhData({
      commit
    }, {
      strategyId,
      type,
      page
    }) {
      return fetch(`${domain}/openapi/backtest/goldStrategy/buySellSignal.shtml?strategyId=${strategyId}&buySellType=${type}&page=${page || 0}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        if (type === 'buy') {
          commit('setMrxhData', body)
        } else if (type === 'sell') {
          commit('setMcxhData', body)
        }
      })
    },
    getDqccData({
      commit
    }, {
      strategyId
    }) {
      return fetch(`${domain}/openapi/backtest/commend/strategy/${strategyId}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setDqccData', body)
      })
    },
    getAttention({
      commit,
      rootState
    }, {
      strategyId,
      strategyType
    }) {
      const userId = rootState.user.userId
      return fetch(`${domain}/openapi/backtest/follows.shtml?strategyId=${strategyId}&strategyType=${strategyType}&userId=${userId}`, {
        method: 'GET',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setAttentionData', body)
      })
    },
    createAttention({
      commit,
      rootState
    }, {
      strategyId,
      strategyType
    }) {
      const userId = rootState.user.userId
      return fetch(`${domain}/openapi/backtest/follows.shtml?strategyId=${strategyId}&strategyType=${strategyType}&userId=${userId}`, {
        method: 'POST',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('addAttentionData', body)
      })
    },
    cancleAttention({
      commit,
      rootState
    }, {
      strategyId,
      strategyType
    }) {
      const userId = rootState.user.userId
      return fetch(`${domain}/openapi/backtest/follows.shtml?strategyId=${strategyId}&strategyType=${strategyType}&userId=${userId}`, {
        method: 'DELETE',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('delAttentionData', body)
      })
    },
    getSimulation({
      commit,
      rootState
    }, {
      strategyId
    }) {
      const userId = rootState.user.userId
      return fetch(`${domain}/openapi/backtest/strategySimulate.shtml?strategyId=${strategyId}&userId=${userId}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setSimulation', body)
      })
    }
  }
}