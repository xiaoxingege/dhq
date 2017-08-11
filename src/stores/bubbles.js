import 'whatwg-fetch'

// initial state
export default {
  namespaced: true,
  state: {
    bubblesData: {
      xData: [],
      yData: [],
      bubbleSize: [],
      bubbleColor: [],
      innerCode: [],
      name: [],
      seriesData: []
    },
    parameterData: {
      xData: '',
      yData: '',
      bubblesSize: '',
      bubbleColor: '',
      indexScope: '',
      industryScope: '',
      topicScope: '',
      marketValue: '',
      historyVolume: ''
    },
    userId: '',
    stockPool: null,
    userStrategy: null
  },
  mutations: {
    setBubblesOptions (state, options) {
      state.parameterData.xData = options.xDefault
      state.parameterData.yData = options.yDefault
      state.parameterData.bubblesSize = options.sizeDefault
      state.parameterData.bubbleColor = options.colorDefault
      state.parameterData.indexScope = options.indexRangeDefault
      state.parameterData.industryScope = options.industryRangeDefault
      state.parameterData.topicScope = options.topicScope
      state.parameterData.marketValue = options.marketValueDefault
      state.parameterData.historyVolume = options.historyValueRangeDefault
    },
    setBubblesData (state, result) {
      const data = result.data
      state.bubblesData = {
        xData: [],
        yData: [],
        bubbleSize: [],
        bubbleColor: [],
        innerCode: [],
        name: [],
        seriesData: []
      }
      if (result.errCode === 0) {
        for (var item of data) {
          state.bubblesData.xData.push(item.xData)
          state.bubblesData.yData.push(item.yData)
          state.bubblesData.bubbleSize.push(item.bubbleSize)
          state.bubblesData.bubbleColor.push(item.bubbleColor)
          state.bubblesData.innerCode.push(item.innerCode)
          state.bubblesData.name.push(item.name)
          state.bubblesData.seriesData.push([item.xData, item.yData])
        }
      } else {
        state.bubblesData = {
          xData: [],
          yData: [],
          bubbleSize: [],
          bubbleColor: [],
          innerCode: [],
          name: [],
          seriesData: []
        }
      }
    },
    setStockOptions (state, result) {
      state.userId = result
    },
    setStockPool (state, result) {
      if (result.errCode === 0) {
        state.stockPool = result.data
      }
    },
    setStrategyOptions (state, result) {
      state.userId = result
    },
    setStrategy (state, result) {
      if (result.errCode === 0) {
        state.userStrategy = result.data
      }
    }
  },
  actions: {
    getBubblesData ({ commit }, { options }) {
      commit('setBubblesOptions', options)
      return fetch('http://www.z3quant.com/openapi/findBubbles', {
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        body: `xData=${options.xDefault}&yData=${options.yDefault}&bubbleSize=${options.sizeDefault}&bubbleColor=${options.colorDefault}&indexScope=${options.indexRangeDefault}&industryScope=${options.industryRangeDefault}&topic=&marketValue=${options.marketValueDefault}&historyVolume=${options.historyValueRangeDefault}&innerCode=`
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setBubblesData', body)
      })
    },
    getStockPool ({ commit }, { userId }) {
      // commit('setStockOptions', userId)
      return fetch('http://www.z3quant.com/openapi/filter/stock/listEquityPool.shtml?userId=dc59c4c5-c174-417d-9c34-ccabf738c1fe', {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setStockPool', body)
      })
    },
    getStrategy ({ commit }, { userId }) {
        // commit('setStrategyOptions', userId)
      return fetch('http://www.z3quant.com/openapi/filter/member/userStrategy.shtml?userId=dc59c4c5-c174-417d-9c34-ccabf738c1fe', {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setStrategy', body)
      })
    }

  }
}
