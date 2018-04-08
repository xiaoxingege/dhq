import 'whatwg-fetch'
import {
  domain
} from '../z3tougu/config'
import fetch from '../z3tougu/util/z3fetch'

const state = {
  bubbleData: [],
  abnormalStockList: [], // 异动个股
  abnormalPlateList: [], // 异动板块
  indexData: {
    line: 0,
    data: []
  }, // 指数数据
  marketCount: [] // 涨跌股票统计数据
}

const mutationsTypes = {
  UPDATE_BUBBLE: 'UPDATE_BUBBLE',
  UPDATE_ABNORMAL_STOCKS: 'UPDATE_ABNORMAL_STOCKS',
  UPDATE_PLATE_LIST: 'UPDATE_PLATE_LIST',
  UPDATE_INDEX_DATA: 'UPDATE_INDEX_DATA',
  UPDATE_MARKET_COUNT: 'UPDATE_MARKET_COUNT'
}

const actions = {
  updateBubble({
    commit,
    state
  }, {
    x,
    y,
    size,
    color,
    type
  }) {
    const url = `${domain}/openapi/dimension/bubbles`
    fetch(url, {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      body: `xData=${x}&yData=${y}&bubbleSize=${size}&bubbleColor=${color}&type=${type}`
    }).then((res) => res.json()).then((result) => {
      if (result.errCode === -1) {
        commit(mutationsTypes.UPDATE_BUBBLE, result);
      } else {
        commit('ERROR', result, {
          root: true
        })
      }
    })
  },
  updateAbnormalStocks({
    commit,
    state
  }, {
    type
  }) {
    const url = `${domain}/openapi/dimension/abnormal/stock/${type}`
    fetch(url, {
      mode: 'cors'
    }).then((res) => res.json()).then((result) => {
      if (result.errCode === 0) {
        commit(mutationsTypes.UPDATE_ABNORMAL_STOCKS, result)
      } else {
        commit('ERROR', result, {
          root: true
        })
      }
    });
  },
  updateAbnormalPlates({
    commit,
    state
  }, {
    startTime
  }) {
    const url = `${domain}/openapi/dimension/abnormal/section?startTime=${startTime}`;
    fetch(url, {
      mode: 'cors'
    }).then((res) => res.json()).then((result) => {
      if (result.errCode === 0) {
        commit(mutationsTypes.UPDATE_PLATE_LIST, result)
      } else {
        commit('ERROR', result, {
          root: true
        })
      }
    });
  },
  updateIndexData({
    commit,
    state
  }) {
    const url = "/mock/indexData.json";
    return fetch(url).then((res) => res.json()).then((result) => {
      if (result.errCode === 0) {
        commit(mutationsTypes.UPDATE_INDEX_DATA, result)
      } else {
        commit('ERROR', result, {
          root: true
        })
      }
    })
  }
}

const mutations = {
  [mutationsTypes.UPDATE_BUBBLE](state, bubbleData) {
    state.bubbleData = bubbleData.data || []
  },
  [mutationsTypes.UPDATE_ABNORMAL_STOCKS](state, stocks) {
    state.abnormalStockList = stocks.data || []
  },
  [mutationsTypes.UPDATE_PLATE_LIST](state, plates) {
    state.abnormalPlateList = plates.data || []
  },
  [mutationsTypes.UPDATE_INDEX_DATA](state, data) {
    state.indexData.data = data.data.priceArr;
    state.indexData.closePx = data.data.line;
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}