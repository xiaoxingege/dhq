import fetch from '../z3tougu/util/z3fetch'
import {
  domain
} from '../z3tougu/config'

// initial state
const state = {
  industries: null,
  stockData: null,
  stockChartData: null,
  calendarsData: null,
  curTimeItem: '0930',
  industryAvg: '',
  industryChngPct: '',
  topicStock: null,
  topicStockValue: null,
  topicValue: null,
  topicStockLine: null,
  industryStockLine: null
}

// getters
const getters = {

}

const mutationsTypes = {
  QUERY_RANGE_BY_CODE: 'QUERY_RANGE_BY_CODE',
  UPDATE_DATA: 'UPDATE_DATA',
  STOCK_CHART_DATA: 'STOCK_CHART_DATA',
  INDUSTRY_AVG: '',
  CALENDARS_DATA: 'CALENDARS_DATA',
  CUR_TIME_ITEM: 'CUR_TIME_ITEM',
  TOPIC_STOCK_DATA: 'TOPIC_STOCK_DATA',
  ERROR: 'ERROR'
}
// actions
const actions = {
  queryRangeByCode({
    commit,
    state
  }) {
    let url = `${domain}/openapi/openjson/tx/section.json`
    // let url = '../mock/' +  'section.json'
    return fetch(url).then((res) => {
      console.log(res.headers.get('Content-Type'))
      return res.json()
    }).then((data) => {
      commit(mutationsTypes.QUERY_RANGE_BY_CODE, data.data)
    }).catch(() => {
      commit(mutationsTypes.ERROR)
    })
  },
  queryTopicValue({
    commit
  }, {
    isContinue,
    condition
  }) {
    const url = `${domain}/openapi/timedQuerySection?isContinue=${isContinue}&condition=${condition}`
    return fetch(url).then((res) => {
      return res.json()
    }).then((body) => {
      commit('setTopicValue', {
        result: body
      });
      return {
        result: body,
        condition: condition
      };
    })
  },
  updateDataByDate({
    commit,
    state
  }, {
    date,
    code
  }) {
    const url = domain + '/openapi/openjson/tx/' + date + '.json'
    return fetch(url).then((res) => {
      return res.json()
    }).then((data) => {
      commit(mutationsTypes.UPDATE_DATA, data)
    }).catch(() => {
      commit(mutationsTypes.ERROR)
    })
  },
  updateDataByTime({
    commit,
    state
  }, {
    time
  }) {
    const url = `${domain}/openapi/openjson/tx/map/${time}.json`
    return fetch(url).then((res) => {
      return res.json()
    }).then((data) => {
      commit(mutationsTypes.UPDATE_DATA, data.data)
    }).catch(() => {

    })
  },
  queryCurTimeItem({
    commit,
    state
  }) {
    const url = `${domain}/openapi/time/map`
    return fetch(url).then((res) => {
      return res.json()
    }).then((result) => {
      if (result.errCode === 0) {
        commit(mutationsTypes.CUR_TIME_ITEM, result.data);
      }
    }).catch(() => {
      commit(mutationsTypes.ERROR)
    })
  },
  queryCalendarsData({
    commit,
    state
  }) {
    const url = `${domain}/openapi/calendars`
    return fetch(url).then((res) => {
      return res.json()
    }).then((data) => {
      commit(mutationsTypes.CALENDARS_DATA, data.data.reverse())
    }).catch(() => {
      commit(mutationsTypes.ERROR)
    })
  },
  /*
   * 题材板块下股票
   */
  queryTopicStock({
    commit,
    state
  }, {
    topicCode
  }) {
    const url = domain + '/openapi/openjson/tx/section_' + topicCode + '.json'
    return fetch(url).then((res) => {
      return res.json()
    }).then((data) => {
      commit(mutationsTypes.TOPIC_STOCK_DATA, data.data)
    }).catch(() => {
      commit(mutationsTypes.ERROR)
    })
  },
  /*
   * 题材板块下股票浏览指标值
   */
  queryTopicStockValue({
    commit
  }, {
    isContinue,
    condition,
    topicCode
  }) {
    const url = `${domain}/openapi/timedQuerySection/${topicCode}?isContinue=${isContinue}&condition=${condition}`
    return fetch(url).then((res) => {
      return res.json()
    }).then((body) => {
      commit('setTopicStockValue', {
        result: body
      });
      return {
        result: body,
        condition: condition
      };
    })
  },
  /*
   * 题材k线
   */
  queryTopicStockLine({
    commit
  }, {
    stockId
  }) {
    const url = `${domain}/openapi/section/${stockId}`
    return fetch(url).then((res) => {
      return res.json()
    }).then((body) => {
      commit('setTopicStockLine', {
        result: body
      });
      return {
        result: body,
        catId: stockId
      };
    })
  },
  /*
   * 行业k线
   */
  queryIndustryStockLine({
    commit
  }, {
    stockId
  }) {
    const url = `${domain}/openapi/section/industry${stockId}`
    return fetch(url).then((res) => {
      return res.json()
    }).then((body) => {
      commit('setIndustryStockLine', {
        result: body
      })
    })
  }
}
// mutations
const mutations = {
  [mutationsTypes.QUERY_RANGE_BY_CODE](state, industries) {
    state.industries = industries
  },
  [mutationsTypes.UPDATE_DATA](state, stockData) {
    state.stockData = stockData
  },
  [mutationsTypes.STOCK_CHART_DATA](state, result) {
    if (result.errCode === 0) {
      state.stockChartData = result.data
      state.industryChngPct = parseFloat(result.msg.split(':')[1]).toFixed(2);
      state.industryAvg = parseFloat(result.msg.split(':')[1]).toFixed(2);
    }
  },
  [mutationsTypes.CALENDARS_DATA](state, calendarsData) {
    state.calendarsData = calendarsData
  },
  [mutationsTypes.CUR_TIME_ITEM](state, curTime) {
    state.curTimeItem = curTime;
  },
  [mutationsTypes.TOPIC_STOCK_DATA](state, topicStock) {
    state.topicStock = topicStock;
  },
  setTopicStockValue(state, options) {
    const result = options.result
    if (result.errCode === 0) {
      state.topicStockValue = result.data
    }
  },
  setTopicValue(state, options) {
    const result = options.result
    if (result.errCode === 0) {
      state.topicValue = result.data
    }
  },
  setTopicStockLine(state, options) {
    const result = options.result
    if (result.errCode === 0) {
      state.topicStockLine = result.data
    }
  },
  setIndustryStockLine(state, options) {
    const result = options.result
    if (result.errCode === 0) {
      state.industryStockLine = result.data
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