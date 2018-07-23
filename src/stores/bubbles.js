// import 'whatwg-fetch'
import fetch from '../z3tougu/util/z3fetch'
import {
  domain
} from '../z3tougu/config'

function autoTimeline(starts, ends) {
    var timeline = []
    var startHour = starts.split(':')[0] * 1
    var startMin = starts.split(':')[1] * 1
    var endHour = ends.split(':')[0] * 1
    var endMin = ends.split(':')[1] * 1
    for (var i = startHour; i <= endHour; i++) {
        var start = (i === startHour) ? startMin : '0'
        var end = (i === endHour) ? endMin : '59'
        for (var j = start; j <= end; j++) {
            j = (j < 10) ? '0' + j : j
            timeline.push(i + ':' + j)
        }
    }
    return timeline
}
let beforenoon = autoTimeline('9:30', '11:30')
let afternoon = autoTimeline('13:00', '15:00')
beforenoon.splice(beforenoon.length - 1, 1)
afternoon[0] = '11:30/13:00'
let timeline = beforenoon.concat(afternoon)

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
    zbgLine: [],
    newStockList: null,
    newStockSortType: '',
    newStockSort: '',
    cxLineData: {
      condition: [],
      szIndex: []
    },
    ystLineData: [],
    cxgZoom: {
      startValue: null,
      endValue: null
    },
    isInit: true,
    stockLine:[]

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
      const data = result.body.data
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
      if (result.body.errCode === 0) {
        for (let item of data) {
          if (item.xData !== null) {
            state.isInit = false
            state.cxgZoom.startValue = 0.45
            state.cxgZoom.endValue = 0.55
            break
          }
        }
        for (let item of data) {
          if (result.options.type === 1 || result.options.type === 2 || result.options.type === 3 || result.options.type === 4 || result.options.type === 7) {
            if (item.xData !== null && item.yData !== null && item.xData !== 'null' && item.yData !== 'null') {
              state.ztgBubblesData.xDefault.push(item.xData)
              if (item.xData > 10) {
                state.ztgBubblesData.xData.push(Math.log(11))
                state.ztgBubblesData.seriesData.push([Math.log(11), item.yData])
              } else if (Number(item.xData) === 0) {
                state.ztgBubblesData.xData.push(Math.log(1))
                state.ztgBubblesData.seriesData.push([Math.log(1), item.yData])
              } else {
                state.ztgBubblesData.xData.push(Math.log(Number(item.xData)))
                state.ztgBubblesData.seriesData.push([Math.log(Number(item.xData)), item.yData])
              }
              state.ztgBubblesData.yData.push(item.yData)
              state.ztgBubblesData.bubbleSize.push(item.bubbleSize)
              state.ztgBubblesData.bubbleColor.push(item.bubbleColor)
              state.ztgBubblesData.innerCode.push(item.innerCode)
              state.ztgBubblesData.name.push(item.name)
            }
          } else if (result.options.type === 6 || result.options.type === 5) {
            if (item.xData !== null && item.yData !== null) {
              state.ztgBubblesData.xDefault.push(item.xData)
              state.ztgBubblesData.xData.push(Math.log(Number(item.xData) / 100 + 2))
              state.ztgBubblesData.seriesData.push([Math.log(Number(item.xData) / 100 + 2), item.yData])
              state.ztgBubblesData.yData.push(item.yData)
              state.ztgBubblesData.bubbleSize.push(item.bubbleSize)
              state.ztgBubblesData.bubbleColor.push(item.bubbleColor)
              state.ztgBubblesData.innerCode.push(item.innerCode)
              state.ztgBubblesData.name.push(item.name)
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
      if (result.body.errCode === 0) {
        if (result.type === 3) {
          state.ztgBubblesLine = result.body.data.sort(function(a, b) {
            return b.chg - a.chg
          })
        } else {
          state.ztgBubblesLine = result.body.data.reverse()
          state.stockListTime = state.ztgBubblesLine[0] && state.ztgBubblesLine[0].tradeTime
        }
      } else {
        state.ztgBubblesLine = null
      }
    },
    updateBubblesLine(state, result) {
      if (result.errCode === 0) {
        if (result.data.length !== 0) {
          state.ztgBubblesLine.unshift(result.data[0])
          state.stockListTime = state.ztgBubblesLine[0].tradeTime
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

        let lineResult = {}

        for (let key in result.data) {
          let time = String(key).length === 3 ? key.substring(0, 1) + ':' + key.substring(1) : key.substring(0, 2) + ':' + key.substring(2)
          if (time === '11:30' || time === '13:00') {
            lineResult['11:30/13:00'] = result.data[key]
          } else {
            lineResult[time] = result.data[key]
          }

        }
        timeline.forEach(function(k, v) {
          if (lineResult[k] !== undefined) {
            state.ztgCompare.up.push([k, lineResult[k][0]])
            state.ztgCompare.down.push([k, lineResult[k][1]])
            state.ztgCompare.openUp.push([k, lineResult[k][2]])
            state.ztgCompare.openDown.push([k, lineResult[k][3]])
          } else {
            state.ztgCompare.up.push([k, null])
            state.ztgCompare.down.push([k, null])
            state.ztgCompare.openUp.push([k, null])
            state.ztgCompare.openDown.push([k, null])
          }

        })
      } else {
        state.ztgCompare = null
      }
    },
    setZbgLine(state, result) {

      if (result.errCode === 0) {
        state.zbgLine = []
        let lineResult = {}

        for (let key in result.data) {
          let time = String(key).length === 3 ? key.substring(0, 1) + ':' + key.substring(1) : key.substring(0, 2) + ':' + key.substring(2)
          if (time === '11:30' || time === '13:00') {
            lineResult['11:30/13:00'] = result.data[key]
          } else {
            lineResult[time] = result.data[key]
          }
        }
        timeline.forEach(function(k, v) {
          if (lineResult[k] !== undefined) {
            state.zbgLine.push([k, lineResult[k]])
          } else {
            state.zbgLine.push([k, null])
          }

        })
      } else {
        state.zbgLine = []
      }
    },
    setNewStockList(state, result) {
      function dealNull(arr, key) {
        let apendArr = []
        for (var i = 0, flag = true, len = arr.length; i < len; flag ? i++ : i) {

          if (arr[i] && arr[i][key] === null) {
            apendArr.push(arr[i])
            arr.splice(i, 1);
            flag = false;
          } else {
            flag = true;
          }
        }
        return arr.concat(apendArr)
      }
      if (result.body.errCode === 0) {
        if (result.type === 0 || result.type === 1) {
          state.newStockList = result.body.data.sort(function(a, b) {
            return b.chgNum - a.chgNum
          })
          state.newStockList = dealNull(state.newStockList, 'chgNum')
        } else if (result.type === 2) {
          state.newStockList = result.body.data.sort(function(a, b) {
            return b.chg - a.chg
          })
          state.newStockList = dealNull(state.newStockList, 'chg')
        }

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

      function dealNull(arr, key) {
        let apendArr = []
        for (var i = 0, flag = true, len = arr.length; i < len; flag ? i++ : i) {

          if (arr[i] && arr[i][key] === null) {
            apendArr.push(arr[i])
            arr.splice(i, 1);
            flag = false;
          } else {
            flag = true;
          }
        }
        return arr.concat(apendArr)
      }

      if (result.type === 'name') {
        if (result.sortType === 'desc') {
          state.newStockList.sort(compare('chiSpel')).reverse()
        } else {
          state.newStockList.sort(compare('chiSpel'))
        }
      } else if (result.type === 'innerCode') {
        if (result.sortType === 'desc') {
          state.newStockList = state.newStockList.sort(function(a, b) {
            return a.symbol.substring(0, 6) - b.symbol.substring(0, 6)
          })
        } else {
          state.newStockList = state.newStockList.sort(function(a, b) {
            return b.symbol.substring(0, 6) - a.symbol.substring(0, 6)
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
          state.newStockList = dealNull(state.newStockList, 'chg')
        } else {
          state.newStockList = state.newStockList.sort(function(a, b) {
            return b.chg - a.chg
          })
          state.newStockList = dealNull(state.newStockList, 'chg')
        }
      } else if (result.type === 'lznum' || result.type === 'ystlbNum' || result.type === 'beforeKb') {
        if (result.sortType === 'desc') {
          state.newStockList = state.newStockList.sort(function(a, b) {
            return a.limitNum - b.limitNum
          })
        } else {
          state.newStockList = state.newStockList.sort(function(a, b) {
            return b.limitNum - a.limitNum
          })
        }
      } else if (result.type === 'zfnum' || result.type === 'afterKb') {
        if (result.sortType === 'desc') {
          state.newStockList = state.newStockList.sort(function(a, b) {
            return a.chgNum - b.chgNum
          })
          state.newStockList = dealNull(state.newStockList, 'chgNum')

        } else {
          state.newStockList = state.newStockList.sort(function(a, b) {
            return b.chgNum - a.chgNum
          })
          state.newStockList = dealNull(state.newStockList, 'chgNum')
        }
      } else if (result.type === 'ysdisKb') {
        if (result.sortType === 'desc') {
          state.newStockList.sort(compare('open')).reverse()
        } else {
          state.newStockList.sort(compare('open'))
        }
      } else if (result.type === 'ssts') {
        if (result.sortType === 'desc') {
          state.newStockList = state.newStockList.sort(function(a, b) {
            return a.listDate - b.listDate
          })
        } else {
          state.newStockList = state.newStockList.sort(function(a, b) {
            return b.listDate - a.listDate
          })
        }

      }
    },
    setCxLine(state, result) {

      if (result.errCode === 0) {
        state.cxLineData = {
          condition: [],
          szIndex: []
        }
        let lineConditionResult = {}
        let lineszIndexResult = {}

        for (let key in result.data.condition) {
          let time = String(key).length === 3 ? key.substring(0, 1) + ':' + key.substring(1) : key.substring(0, 2) + ':' + key.substring(2)
          if (time === '11:30' || time === '13:00') {
            lineConditionResult['11:30/13:00'] = result.data.condition[key]
          } else {
            lineConditionResult[time] = result.data.condition[key]
          }
        }
        for (let key in result.data.szIndex) {
          let time = String(key).length === 3 ? key.substring(0, 1) + ':' + key.substring(1) : key.substring(0, 2) + ':' + key.substring(2)
          if (time === '11:30' || time === '13:00') {
            lineszIndexResult['11:30/13:00'] = result.data.szIndex[key]
          } else {
            lineszIndexResult[time] = result.data.szIndex[key]
          }
        }
        timeline.forEach(function(k, v) {
          if (lineConditionResult[k] !== undefined) {
            state.cxLineData.condition.push([k, lineConditionResult[k]])
          } else {
            state.cxLineData.condition.push([k, null])
          }
          if (lineszIndexResult[k] !== undefined) {
            state.cxLineData.szIndex.push([k, lineszIndexResult[k]])
          } else {
            state.cxLineData.szIndex.push([k, null])
          }

        })
      } else {
        state.cxLineData = {
          condition: [],
          szIndex: []
        }
      }
    },
    setYstLine(state, result) {
      if (result.errCode === 0) {
        state.ystLineData = []
        let lineResult = {}

        for (let key in result.data) {
          let time = String(key).length === 3 ? key.substring(0, 1) + ':' + key.substring(1) : key.substring(0, 2) + ':' + key.substring(2)
          if (time === '11:30' || time === '13:00') {
            lineResult['11:30/13:00'] = result.data[key]
          } else {
            lineResult[time] = result.data[key]
          }
        }
        timeline.forEach(function(k, v) {
          if (lineResult[k] !== undefined) {
            state.ystLineData.push([k, lineResult[k]])
          } else {
            state.ystLineData.push([k, null])
          }

        })
      } else {
        state.ystLineData = []
      }
    },
    setStockLine(state, result) {
        if (result.errCode === 0) {
            state.stockLine = []
            let stockResult = []
            let lineResult = {}

            for(let i =0; i<result.data.dataArray.length; i++) {
                stockResult[result.data.dataArray[i].tradeMin] = result.data.dataArray[i].currentPx
            }

            for (let key in stockResult) {
                let time = String(key).length === 3 ? key.substring(0, 1) + ':' + key.substring(1) : key.substring(0, 2) + ':' + key.substring(2)
                if (time === '11:30' || time === '13:00') {
                    lineResult['11:30/13:00'] = stockResult[key]
                } else {
                    lineResult[time] = stockResult[key]
                }
            }
            timeline.forEach(function(k, v) {
                if (lineResult[k] !== undefined) {
                    state.stockLine.push([k, lineResult[k]])
                } else {
                    state.stockLine.push([k, null])
                }
            })
        } else {
            state.stockLine = []
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
        commit('setStockBubblesData', {
          body,
          options
        })
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
          commit('setBubblesLine', {
            body,
            type
          })
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
        commit('setNewStockList', {
          body,
          type
        })
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
    },
    getCxLine({
      commit
    }, {
      type: type
    }) {
      return fetch(`${domain}/openapi/dimension/doubleLine/${type}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setCxLine', body)
      })
    },
    getYstLine({
      commit
    }, {
      type: type
    }) {
      return fetch(`${domain}/openapi/dimension/monoLine/${type}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(body => {
        commit('setYstLine', body)
      })
    },
    getStockLine({ commit }, { innerCode: innerCode }){
        return fetch(`${domain}/openapi/stock/minRealTime/${innerCode}.shtml`, {
            mode: 'cors'
        }).then((res) => {
            return res.json()
        }).then(body => {
            commit('setStockLine', body)
        })
    }

  }
}