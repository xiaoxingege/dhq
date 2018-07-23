import 'whatwg-fetch'
import {
  domain
} from '../z3tougu/config'
import fetch from '../z3tougu/util/z3fetch'

const state = {
  bubbleData: [],
  abnormalStockList: [], // 异动个股
  abnormalPlateList: [], // 异动板块
  indexPlateList: [], // 指数显示的异动板块（规则过滤后的）
  indexData: {
    closePx: 0,
    data: []
  }, // 指数数据
  marketCount: [],
  // 涨跌股票统计数据
  abnormalStockTotal: [],
  updateAbnormalStockList: []
}

const mutationsTypes = {
  UPDATE_BUBBLE: 'UPDATE_BUBBLE',
  UPDATE_ABNORMAL_STOCKS: 'UPDATE_ABNORMAL_STOCKS',
  UPDATE_PLATE_LIST: 'UPDATE_PLATE_LIST',
  UPDATE_INDEX_DATA: 'UPDATE_INDEX_DATA',
  UPDATE_MARKET_COUNT: 'UPDATE_MARKET_COUNT',
  UPDATE_INDEX_PLATES: 'UPDATE_INDEX_PLATES'
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
    return fetch(url, {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      body: `xData=${x}&yData=${y}&bubbleSize=${size}&bubbleColor=${color}&type=${type}`
    }).then((res) => res.json()).then((result) => {
      if (result.errCode === 0) {
        commit(mutationsTypes.UPDATE_BUBBLE, result.data);
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
    type,
    startTime
  }) {
    const url = `${domain}/openapi/dimension/abnormal/stock/${type}?startTime=${startTime}`
    fetch(url, {
      mode: 'cors'
    }).then((res) => res.json()).then((result) => {
      if (result.errCode === 0) {
        commit(mutationsTypes.UPDATE_ABNORMAL_STOCKS, result.data)
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
    return fetch(url, {
      mode: 'cors'
    }).then((res) => res.json()).then((result) => {
      if (result.errCode === 0) {
        commit(mutationsTypes.UPDATE_PLATE_LIST, result.data)
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
    const url = `${domain}/openapi/dimension/replay`;
    return fetch(url).then((res) => res.json()).then((result) => {
      if (result.errCode === 0) {
        commit(mutationsTypes.UPDATE_INDEX_DATA, result.data);
        commit(mutationsTypes.UPDATE_MARKET_COUNT, result.msg);
      } else {
        commit('ERROR', result, {
          root: true
        })
      }
    })
  },
  updateIndexPlates({
    commit,
    state
  }) {
    const url = `${domain}/openapi/dimension/abnormal/idx/section`
    return fetch(url).then((res) => res.json()).then((result) => {
      if (result.errCode === 0) {
        commit(mutationsTypes.UPDATE_INDEX_PLATES, result.data);
      } else {
        commit('ERROR', result, {
          root: true
        })
      }
    })
  },
  addAbnormalStocks({
    commit,
    state
  }, {
    bottomTime
  }) {

    commit('addBottomAbnormalStocks', bottomTime)

  }

}

const mutations = {
  addBottomAbnormalStocks(state, bottomTime) {
    if (bottomTime > state.abnormalStockTotal.length) {
      state.updateAbnormalStockList = []
    } else {
      state.updateAbnormalStockList = state.abnormalStockTotal[bottomTime] && state.abnormalStockTotal[bottomTime].reverse()
    }


  },
  [mutationsTypes.UPDATE_BUBBLE](state, bubbleData) {
    state.bubbleData = bubbleData || []
  },
  [mutationsTypes.UPDATE_ABNORMAL_STOCKS](state, stocks) {

    let result = [].concat(stocks).reverse() // 数据时间倒叙
    let dealData = []
    if (result.length > 1000) {
      for (let i = 0; i < parseInt(result.length / 100); i++) {
        dealData.push(result.slice(i * 100, (i + 1) * 100))
      }
      dealData.push(result.slice(parseInt(result.length / 100) * 100))
      state.abnormalStockTotal = [].concat(dealData)
      state.abnormalStockList = dealData[0].reverse()
    } else {
      state.abnormalStockList = result.reverse() || []
    }

  },
  [mutationsTypes.UPDATE_PLATE_LIST](state, plates) {
    state.abnormalPlateList = plates || []
  },
  [mutationsTypes.UPDATE_INDEX_DATA](state, data) {
    state.indexData.data = data.priceArr || [];
    state.indexData.closePx = data.line || null;
  },
  [mutationsTypes.UPDATE_MARKET_COUNT](state, countList) {
    state.marketCount = JSON.parse(countList);
  },
  [mutationsTypes.UPDATE_INDEX_PLATES](state, plates) {
    state.indexPlateList = plates;
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}