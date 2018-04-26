// import 'whatwg-fetch'
import fetch from '../z3tougu/util/z3fetch'
import {
  domain
} from '../z3tougu/config'

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
      historyVolume: '',
      innerCode: ''
    },
    userId: '',
    stockPool: null,
    userStrategy: null,
    minmaxX: '',
    minmaxY: '',
    minmaxXDefault: '',
    minmaxYDefault: '',
    setDefaultX: '',
    setDefaultY: '',
    ztgBubblesData: {
      xDefault: '',
      xData: '',
      yData: '',
      bubblesSize: '',
      bubbleColor: '',
      innerCode: [],
      name: [],
      seriesData: []
    },
    ztgBubblesLine: [],
    stockListTime: '',
    isTop: false,
    ztgCompare: {
      up: [],
      openUp: [],
      down: [],
      openDown: []
    },
    zbgLine: null,
    newStockList: null,
    newStockSortType: '',
    newStockSort: ''

  },
  mutations: {
    setBubblesOptions(state, options) {
      state.parameterData.xData = options.xDefault
      state.parameterData.yData = options.yDefault
      state.parameterData.bubblesSize = options.sizeDefault
      state.parameterData.bubbleColor = options.colorDefault
      state.parameterData.indexScope = options.indexRangeDefault
      state.parameterData.industryScope = options.industryRangeDefault
      state.parameterData.topicScope = options.topicScope
      state.parameterData.marketValue = options.marketValueDefault
      state.parameterData.historyVolume = options.historyValueRangeDefault
      state.parameterData.innerCode = options.innerCode
    },
    setBubblesData(state, result) {
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
      // alert(result.errCode)
      if (result.errCode === 0) {
        for (var item of data) {
          if (item.xData !== null && item.yData !== null) {
            state.bubblesData.xData.push(item.xData)
            state.bubblesData.yData.push(item.yData)
            state.bubblesData.bubbleSize.push(item.bubbleSize)
            state.bubblesData.bubbleColor.push(item.bubbleColor)
            state.bubblesData.innerCode.push(item.innerCode)
            state.bubblesData.name.push(item.name)
            if (state.parameterData.xData === 'chi_spel' && state.parameterData.yData === 'chi_spel') {
              if (item.xData === null || item.yData === null) {
                continue
              }
              state.bubblesData.seriesData.push([item.xData.replace('*', '').substr(0, 1), item.yData.replace('*', '').substr(0, 1)])
              continue
            } else {
              if (state.parameterData.xData === 'chi_spel') {
                if (item.xData === null) {
                  continue
                }
                if (item.xData) state.bubblesData.seriesData.push([item.xData.replace('*', '').substr(0, 1), item.yData])
                continue
              } else if (state.parameterData.yData === 'chi_spel') {
                if (item.yData === null) {
                  continue
                }
                if (item.yData) state.bubblesData.seriesData.push([item.xData, item.yData.replace('*', '').substr(0, 1)])
                continue
              }
              state.bubblesData.seriesData.push([item.xData, item.yData])
            }
          }
        }
      } else {
        // alert(result.msg)
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
    setStockOptions(state, result) {
      state.userId = result
    },
    setStockPool(state, result) {
      if (result.errCode === 0) {
        state.stockPool = result.data
      }
    },
    setStrategyOptions(state, result) {
      state.userId = result
    },
    setStrategy(state, result) {
      if (result.errCode === 0) {
        state.userStrategy = result.data
      }
    },
    setZoomRange(state, options) {
      state.minmaxX = options.mmX
      state.minmaxY = options.mmY
      state.minmaxXDefault = options.mmXDefault
      state.minmaxYDefault = options.mmYDefault

    },
    setZoomRangeDefault(state, options) {
      state.setDefaultX = [options.X, options.XDefault]
      state.setDefaultY = [options.Y, options.YDefault]
    },
    setStockBubblesData(state, result) {
      const data = result.data
      state.ztgBubblesData = {
        xDefault: [],
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
          if (item.xData !== null && item.yData !== null) {
            state.ztgBubblesData.xDefault.push(item.xData)
            if (item.xData > 10) {
              state.ztgBubblesData.xData.push(Math.log(11))
            } else {
              state.ztgBubblesData.xData.push(Math.log(Number(item.xData) + 1))
            }
            state.ztgBubblesData.yData.push(item.yData)
            state.ztgBubblesData.bubbleSize.push(item.bubbleSize)
            state.ztgBubblesData.bubbleColor.push(item.bubbleColor)
            state.ztgBubblesData.innerCode.push(item.innerCode)
            state.ztgBubblesData.name.push(item.name)
            if (item.xData > 10) {
              state.ztgBubblesData.seriesData.push([Math.log(11), item.yData])
            } else {
              state.ztgBubblesData.seriesData.push([Math.log(Number(item.xData) + 1), item.yData])
            }
          }
        }
      } else {
        // alert(result.msg)
        state.ztgBubblesData = {
          xDefault: [],
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
    setBubblesLine(state, result) {
      if (result.errCode === 0) {
        state.ztgBubblesLine = result.data.reverse()
        state.stockListTime = state.ztgBubblesLine[0] && state.ztgBubblesLine[0].dateTime
      } else {
        state.ztgBubblesLine = null
      }
    },
    updateBubblesLine(state, result) {
      if (result.errCode === 0) {
        if (result.data.length !== 0) {
          state.ztgBubblesLine.unshift(result.data[0])
          state.stockListTime = state.ztgBubblesLine[0].dateTime
          state.isTop = true
        } else {
          state.isTop = false
        }

      }
    },
    setZdCompare(state, result) {
      if (result.errCode === 0) {
        state.ztgCompare = {
          up: [],
          openUp: [],
          down: [],
          openDown: []
        }
        for (var item of result.data) {
          state.ztgCompare.up.push(item[0])
          state.ztgCompare.down.push(item[1])
          state.ztgCompare.openUp.push(item[2])
          state.ztgCompare.openDown.push(item[3])

        }
      } else {
        state.ztgCompare = null
      }
    },
    setZbgLine(state, result) {
      if (result.errCode === 0) {
        state.zbgLine = result.data
      } else {
        state.zbgLine = null
      }
    },
    setNewStockList(state, result) {
      if (result.errCode === 0) {
        state.newStockList = result.data.sort(function(a, b) {
          return b.chg - a.chg
        })

        // state.newStockList = result.data
      } else {
        state.newStockList = null
      }
    },
    sortNewList(state, result) {

      function compare(propertyName) {
        return function(object1, object2) {
          var value1 = object1[propertyName];
          var value2 = object2[propertyName];
          if (value2 < value1) {
            return 1;
          } else if (value2 > value1) {
            return -1;
          } else {
            return 0;
          }
        }
      }
      state.newStockSortType = result.type
      state.newStockSort = result.sortType

      if (result.type === 'name') {
        if (result.sortType === 'desc') {
          state.newStockList.sort(compare('chiSpel')).reverse()
        } else {
          state.newStockList.sort(compare('chiSpel'))
        }
      } else if (result.type === 'innerCode') {
        if (result.sortType === 'desc') {
          state.newStockList = state.newStockList.sort(function(a, b) {
            return a.symbol - b.symbol
          })
        } else {
          state.newStockList = state.newStockList.sort(function(a, b) {
            return b.symbol - a.symbol
          })
        }
      } else if (result.type === 'price') {
        if (result.sortType === 'desc') {
          state.newStockList = state.newStockList.sort(function(a, b) {
            return a.price - b.price
          })
        } else {
          state.newStockList = state.newStockList.sort(function(a, b) {
            return b.price - a.price
          })
        }
      } else if (result.type === 'chg') {
        if (result.sortType === 'desc') {
          state.newStockList = state.newStockList.sort(function(a, b) {
            return a.chg - b.chg
          })
        } else {
          state.newStockList = state.newStockList.sort(function(a, b) {
            return b.chg - a.chg
          })
        }
      } else if (result.type === 'lznum') {
        if (result.sortType === 'desc') {
          state.newStockList = state.newStockList.sort(function(a, b) {
            return a.limitNum - b.limitNum
          })
        } else {
          state.newStockList = state.newStockList.sort(function(a, b) {
            return b.limitNum - a.limitNum
          })
        }
      } else if (result.type === 'zfnum') {
        if (result.sortType === 'desc') {
          state.newStockList = state.newStockList.sort(function(a, b) {
            return a.chgNum - b.chgNum
          })
        } else {
          state.newStockList = state.newStockList.sort(function(a, b) {
            return b.chgNum - a.chgNum
          })
        }
      }
    }
  },
  actions: {
    getBubblesData({
      commit
    }, {
      options
    }) {
      // alert(`&innerCode=${options.innerCode.substring(0, 20)}`)
      // 你alert(`&innerCode=${options.innerCode}`)
      commit('setBubblesOptions', options)
      return fetch(`${domain}/openapi/findBubbles`, {
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        body: `xData=${options.xDefault}&yData=${options.yDefault}&bubbleSize=${options.sizeDefault}&bubbleColor=${options.colorDefault}&indexScope=${options.indexRangeDefault}&industryScope=${options.industryRangeDefault}&topic=${options.topic}&marketValue=${options.marketValueDefault}&historyVolume=${options.historyValueRangeDefault}&innerCode=${options.innerCode}&strategy=${options.strategyDefault}&pools=${options.stockPoolDefault}`
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setBubblesData', body)
      })
    },
    getStrategy({
      commit,
      state,
      rootState
    }) {
      const userId = rootState.user.userId
      if (!userId) {
        commit('setStrategy', [])
        return
      }
      return fetch(`${domain}/openapi/filter/member/userStrategy.shtml?userId=${userId}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setStrategy', body)
      })
    },
    getStockPool({
      commit,
      state,
      rootState
    }) {
      const userId = rootState.user.userId
      if (!userId) {
        commit('setStockPool', [])
        return
      }
      return fetch(`${domain}/openapi/filter/stock/listEquityPool.shtml?userId=${userId}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setStockPool', body)
      })
    },
    setBubbleZoomRange({
      commit
    }, {
      mmX,
      mmY,
      mmXDefault,
      mmYDefault
    }) {
      commit('setZoomRange', {
        mmX,
        mmY,
        mmXDefault,
        mmYDefault
      })
    },
    setZoomRangeDefault({
      commit
    }, {
      X,
      Y,
      XDefault,
      YDefault
    }) {
      commit('setZoomRangeDefault', {
        X,
        Y,
        XDefault,
        YDefault
      })
    },
    getStockBubbles({
      commit
    }, {
      options
    }) {
      commit('setBubblesOptions', options)
      return fetch(`${domain}/openapi/dimension/bubbles`, {
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        body: `xData=${options.xDefault}&yData=${options.yDefault}&bubbleSize=${options.sizeDefault}&bubbleColor=${options.colorDefault}&type=${options.type}`
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setStockBubblesData', body)
      })
    },
    getBubblesLine({
      commit
    }, {
      type,
      currentTime
    }) {
      return fetch(`${domain}/openapi/dimension/abnormal/stock/${type}?startTime=${currentTime}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        if (currentTime === '') {
          commit('setBubblesLine', body)
        } else {
          commit('updateBubblesLine', body)
        }

      })
    },
    getZdCompare({
      commit
    }) {
      return fetch(`${domain}/openapi/dimension/upDownRatios`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setZdCompare', body)
      })
    },
    getZbgLine({
      commit
    }, {
      type
    }) {
      return fetch(`${domain}/openapi/dimension/monoLine/${type}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setZbgLine', body)
      })
    },
    getNewStockList({
      commit
    }, {
      type
    }) {
      return fetch(`${domain}/openapi/dimension/stocks/${type}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setNewStockList', body)
      })
    },
    sortNewStockList({
      commit
    }, {
      type,
      sortType
    }) {
      commit('sortNewList', {
        type,
        sortType
      })
    }

  }
}