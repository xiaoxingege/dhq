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
    }
  },
  mutations: {
    setBubblesOptions (state, options) {
      state.parameterData.xData = options.xData
      state.parameterData.yData = options.yData
      state.parameterData.bubblesSize = options.bubblesSize
      state.parameterData.bubbleColor = options.bubbleColor
      state.parameterData.indexScope = options.indexScope
      state.parameterData.industryScope = options.industryScope
      state.parameterData.topicScope = options.topicScope
      state.parameterData.marketValue = options.marketValue
      state.parameterData.historyVolume = options.historyVolume
    },
    setBubblesData (state, result) {
      const data = result.data
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
        state.bubblesData = null
      }
    }
  },
  actions: {
    getBubblesData ({ commit }, { options }) {
            // commit('setBubblesOptions', options)
      return fetch('../../mock/bubbles.json', {}).then((res) => {
        return res.json()
      }).then(body => {
        commit('setBubblesData', body)
      })
    }

  }
}
