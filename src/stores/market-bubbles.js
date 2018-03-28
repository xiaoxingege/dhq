import 'whatwg-fetch'
import {
  domain
} from '../z3tougu/config'
import fetch from '../z3tougu/util/z3fetch'

const state = {
  bubbleData: null,
  abnormalStockList: [], // 异动个股
  abnormalPlateList: [], // 异动板块
  indexData: [], // 指数数据
  marketCount: [] // 涨跌股票统计数据
}

const mutations_types = {
  UPDATE_BUBBLE: 'UPDATE_BUBBLE',
  UPDATE_ABNORMAL_STOCKS: 'UPDATE_ABNORMAL_STOCKS',
  UPDATE_PLATE_LIST: 'UPDATE_PLATE_LIST',
  UPDATE_INDEX: 'UPDATE_INDEX',
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
    color
  }) {
    const url = `${domain}/openapi/dimension/bubbles`
    fetch(url, {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      body: `xData=${x}&yData=${y}&bubbleSize=${size}&bubbleColor=${color}`
    }).then((res) => res.json()).then((result) => {
      if (result.errCode === -1) {
        commit(mutations_types.UPDATE_BUBBLE, result);
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
      if (result.errCode === -1) {
        commit(mutations_types.UPDATE_ABNORMAL_STOCKS, result)
      } else {
        commit('ERROR', result, {
          root: true
        })
      }
    });
  }
}

const mutations = {
  [mutations_types.UPDATE_BUBBLE](commit, bubbleData) {
    this.state.bubbleData = bubbleData.data || []
  },
  [mutations_types.UPDATE_ABNORMAL_STOCKS](commit, stocks) {
    this.state.abnormalStockList = stocks.data || []
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}