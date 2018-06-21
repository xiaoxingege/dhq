// import 'whatwg-fetch'
import fetch from '../dhq/util/z3fetch'
import config, {
  domain
} from '../dhq/config'

// initial state
const state = {
  stockKlineData: [],
  isSelfSelection: false,
  stock: {
    stockCode: config.emptyValue,
    stockName: config.emptyValue,
    lastPx: config.emptyValue,
    chgPx: config.emptyValue,
    chgPctPx: config.emptyValue
  }
}

// getters
const getters = {

}

const mutationsTypes = {
  UPDATE_KLINE_DATA: 'UPDATE_KLINE_DATA',
  UPDATE_STOCK_MTK: 'UPDATE_STOCK_MTK',
  UPDATE_SELF_SELECTION: 'UPDATE_SELF_SELECTION'
}

// actions
const actions = {
  queryKline({
    commit
  }, {
    stockCode
  }) {
    const url = `${domain}/openapi/filter/kLineMktOrMin.shtml?innerCode=${stockCode}&exstatus=0&flag=day&timeType=mkt`
    return fetch(url, {
      mode: 'cors',
      headers: {
        'Cache-Control': 'no-cache'
      }
    }).then(res => res.json()).then((result) => {
      if (result.errCode === 0) {
        commit(mutationsTypes.UPDATE_KLINE_DATA, result.data.equityMktList)
      } else {
        commit('ERROR', result, {
          root: true
        })
      }
    })
  },
  queryMkt({
    commit
  }, {
    stockCode
  }) {
    const url = `${domain}/openapi/equity/${stockCode}.shtml`
    return fetch(url, {
      mode: 'cors',
      headers: {
        'Cache-Control': 'no-cache'
      }
    }).then(res => res.json()).then((result) => {
      if (result.errCode === 0) {
        commit(mutationsTypes.UPDATE_STOCK_MTK, result.data)
      } else {
        commit('ERROR', result, {
          root: true
        })
      }
    })
  },
  querySelection({
    rootState,
    commit
  }, {
    stockCode
  }) {
    /*  for(var key in rootState.user){
        alert(key+','+rootState.user[key])
      } */
    const userId = rootState.user.userId || '';
    // const userId = '461afaa0-39b4-4bd8-8c18-118b026d2017';
    if (!userId) {
      return;
    }
    stockCode = stockCode && stockCode.substring(0, 6);
    const url = `${domain}/openapi/selectStock/findStock.shtml?stock=${stockCode}&userId=${userId}`
    
    return fetch(url, {
      mode: 'cors',
      headers: {
        'Cache-Control': 'no-cache',
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res => res.json()).then((result) => {
      if (result.errCode === 0) {
        commit(mutationsTypes.UPDATE_SELF_SELECTION, true);
      } else if (result.errCode === -1) {
        commit(mutationsTypes.UPDATE_SELF_SELECTION, false);
      } else {
        commit('ERROR', result, {
          root: true
        })
      }
    })
  },
  addSelection({
    rootState,
    commit
  }, {
    stockCode
  }) {
    const userId = rootState.user.userId || '';
    // const userId = '171003010002481622'
    // const userId = '461afaa0-39b4-4bd8-8c18-118b026d2017';
    stockCode = stockCode && stockCode.substring(0, 6);
    if (!userId) {
      return;
    }
    const url = `${domain}/openapi/selectStock/add.shtml`
    return fetch(
      url, {
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
          /*  'clientid': 'z3client_dhq',
           'deviceid': 'test_device_id',
           'userId': '171003010002481622',
           "accessToken": "JyX/ixccgzj1D1iZCBpv+i57OmMpJ8oZZNDM36nm2Esg9tRW3U5D3wr3lBMkolsk"
           'passportId': '171003010002481622' */
        },
        method: 'post',
        body: `stocks=${stockCode}&userId=${userId}`
      }
    ).then(res => res.json()).then((result) => {
      if (result.errCode === 0) {
        commit(mutationsTypes.UPDATE_SELF_SELECTION, true);
      } else {
        commit('ERROR', result, {
          root: true
        })
      }
    })
  },
  removeSelection({
    rootState,
    commit
  }, {
    stockCode
  }) {
    const userId = rootState.user.userId || '';
    // const userId = '461afaa0-39b4-4bd8-8c18-118b026d2017';
    stockCode = stockCode && stockCode.substring(0, 6);
    if (!userId) {
      return;
    }
    const url = `${domain}/openapi/selectStock/del.shtml`
    return fetch(url, {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
        /*  'clientid': 'z3client_dhq',
          'deviceid': 'test_device_id',
          'userId': '171003010002481622',
          'accessToken': 'JyX/ixccgzj1D1iZCBpv+htvr+MMihHcwT585kqpHCkgmTrULvQo4yf4DFL3eR4b',
          'passportId': '171003010002481622' */
      },
      method: 'post',
      body: `stocks=${stockCode}&userId=${userId}`
    }).then(res => res.json()).then((result) => {
      if (result.errCode === 0) {
        commit(mutationsTypes.UPDATE_SELF_SELECTION, false);
      } else {
        commit('ERROR', result, {
          root: true
        })
      }
    })
  }
}

// mutations
const mutations = {
  [mutationsTypes.UPDATE_KLINE_DATA](state, kline) {
    state.stockKlineData = kline
  },
  [mutationsTypes.UPDATE_STOCK_MTK](state, stock) {
    state.stock = {
      stockCode: stock.innerCode,
      stockName: stock.name,
      lastPx: stock.price !== null ? stock.price.toFixed(2) : config.emptyValue,
      chgPx: stock.chg !== null ? stock.chg.toFixed(2) : config.emptyValue,
      chgPctPx: (stock.curChngPct !== null ? stock.curChngPct.toFixed(2) : config.emptyValue) + '%'
    }
  },
  [mutationsTypes.UPDATE_SELF_SELECTION](state, isSelfSelection) {
    state.isSelfSelection = isSelfSelection;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}