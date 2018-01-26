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
  industryChngPct: ''
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
  ERROR: 'ERROR'
}
// actions
const actions = {
  queryRangeByCode({
    commit,
    state
  }, {
    code
  }) {
    let url
    if (code === '' || code === 'margin') {
      url = domain + '/openapi/openjson/tx/' + code + '.json'
    } else {
      url = domain + '/openapi/openjson/tx/auth/' + code + '.json'
    }
    /* code = 'all'
    const url = 'mock/' + code + '.json'*/
    return fetch(url).then((res) => {
      console.log(res.headers.get('Content-Type'))
      return res.json()
    }).then((data) => {
      commit(mutationsTypes.QUERY_RANGE_BY_CODE, data.children)
    }).catch(() => {
      commit(mutationsTypes.ERROR)
    })
  },
  updateData({
    commit,
    state
  }, {
    isContinue,
    condition,
    code
  }) {
    const url = `${domain}/openapi/timedQueryMap?isContinue=${isContinue}&condition=${condition}&code=${code}`
    return fetch(url).then((res) => {
      return res.json()
    }).then((data) => {
      commit(mutationsTypes.UPDATE_DATA, data.data);
      return {
        result: data.data,
        condition: condition,
        code: code
      };
    }).catch(() => {
      commit(mutationsTypes.ERROR)
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
  stockChartData({
    commit,
    state
  }, {
    stockId,
    code,
    condition
  }) {
    const url = `${domain}/openapi/industries/${stockId}.shtml?t=sec&indexCode=${code}&condition=${condition}`;
    return fetch(url).then((res) => {
      return res.json()
    }).then((data) => {
      commit(mutationsTypes.STOCK_CHART_DATA, data);
      return {
        result: data,
        catId: stockId
      }
    }).catch(() => {
      commit(mutationsTypes.ERROR)
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}