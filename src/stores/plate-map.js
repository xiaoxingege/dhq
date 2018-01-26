import fetch from '../z3tougu/util/z3fetch'
import {
  domain
} from '../z3tougu/config'

// initial state
const state = {
  topicData: null,
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
  industryStockLine: null,
  industryData: null,
  industryStockData: null,
  industryValue: null,
  industryStockValue: null,
  bestTopicStock: null,
  bestIndustryStock: null
}

// getters
const getters = {

}

const mutationsTypes = {
  QUERY_RANGE_BY_CODE: 'QUERY_RANGE_BY_CODE',
  UPDATE_DATA: 'UPDATE_DATA',
  INDUSTRY_AVG: '',
  CALENDARS_DATA: 'CALENDARS_DATA',
  CUR_TIME_ITEM: 'CUR_TIME_ITEM',
  TOPIC_STOCK_DATA: 'TOPIC_STOCK_DATA',
  ERROR: 'ERROR'
}
// actions
const actions = {
  /*
   * 题材板块
   */
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
  /*
   * 题材板块浏览指标值
   */
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
      if (body.errCode === 0) {
        commit('setTopicValue', body.data);
      }
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
  updateTopicDataByTime({
    commit,
    state
  }, {
    time
  }) {
    const url = `${domain}/openapi/openjson/tx/section/${time}.json`
    return fetch(url).then((res) => {
      return res.json()
    }).then((data) => {
      commit('setTopicValue', data.data)
    }).catch(() => {

    })
  },
  updateIndustryDataByTime({
    commit,
    state
  }, {
    time
  }) {
    const url = `${domain}/openapi/openjson/tx/level/${time}.json`
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
        condition: condition,
        topicCode: topicCode
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
    const url = `${domain}/openapi/section/industry/${stockId}`
    return fetch(url).then((res) => {
      return res.json()
    }).then((body) => {
      commit('setIndustryStockLine', {
        result: body
      });
      return {
        result: body,
        catId: stockId
      };
    })
  },
  /*
   * 行业板块
   */
  queryIndustry({
    commit,
    state
  }) {
    const url = `${domain}/openapi/openjson/tx/industry.json`
    return fetch(url).then((res) => {
      return res.json()
    }).then((body) => {
      commit('setIndustry', {
        result: body
      })
    })
  },
  /*
   * 行业板块下股票
   */
  queryIndustryStock({
    commit,
    state
  }, {
    industryCode
  }) {
    const url = domain + '/openapi/openjson/tx/industry_' + industryCode + '.json'
    return fetch(url).then((res) => {
      return res.json()
    }).then((body) => {
      commit('setIndustryStock', {
        result: body
      })
    })
  },
  /*
   * 行业板块浏览指标值
   */
  queryIndustryValue({
    commit
  }, {
    isContinue,
    condition
  }) {
    const url = `${domain}/openapi/timedQueryMapLevel?isContinue=${isContinue}&condition=${condition}`
    return fetch(url).then((res) => {
      return res.json()
    }).then((body) => {
      commit('setIndustryValue', {
        result: body
      });
      return {
        result: body,
        condition: condition
      };
    })
  },
  /*
   * 行业板块下股票浏览指标值
   */
  queryIndustryStockValue({
    commit
  }, {
    isContinue,
    condition,
    industryCode
  }) {
    const url = `${domain}/openapi/timedQueryMapLevel?isContinue=${isContinue}&condition=${condition}&innerCode=${industryCode}`
    return fetch(url).then((res) => {
      return res.json()
    }).then((body) => {
      commit('setIndustryStockValue', {
        result: body
      });
      return {
        result: body,
        condition: condition,
        industryCode: industryCode
      };
    })
  }
}
// mutations
const mutations = {
  [mutationsTypes.QUERY_RANGE_BY_CODE](state, topicData) {
    state.topicData = topicData
  },
  [mutationsTypes.UPDATE_DATA](state, stockData) {
    state.stockData = stockData
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
      state.bestTopicStock = JSON.parse(result.msg)
    }
  },
  setTopicValue(state, topicValue) {
    state.topicValue = topicValue
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
  },
  setIndustry(state, options) {
    const result = options.result
    if (result) {
      state.industryData = result.data
    }
  },
  setIndustryStock(state, options) {
    const result = options.result
    if (result) {
      state.industryStockData = result.data
    }
  },
  setIndustryValue(state, options) {
    const result = options.result
    if (result.errCode === 0) {
      state.industryValue = result.data
    }
  },
  setIndustryStockValue(state, options) {
    const result = options.result
    if (result.errCode === 0) {
      state.industryStockValue = result.data
      state.bestIndustryStock = JSON.parse(result.msg)
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