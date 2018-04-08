import 'whatwg-fetch'
import {
  domain
} from '../z3tougu/config'
import fetch from '../z3tougu/util/z3fetch'

const state = {
  hotStocks: [],
  hotWords: [],
  ambushedStocks: [],
  ambushedPlates: []
}

const mutationsTypes = {
  SET_HOT_STOCKS: 'SET_HOT_STOCKS',
  SET_HOT_WORDS: 'SET_HOT_WORDS',
  SET_AMBUSHED_STOCKS: 'SET_AMBUSHED_STOCKS',
  SET_AMBUSHED_PLATES: 'SET_AMBUSHED_PLATES'
}

const actions = {
  retrieveHotStocks({
    commit,
    state
  }, {
    size
  }) {
    const url = `${domain}/openapi/stock/equityHotIndex.shtml?size=${size}`
    fetch(url, {
      mode: 'cors'
    }).then(res => res.json()).then(result => {
      if (result.errCode === 0) {
        commit(mutationsTypes.SET_HOT_STOCKS, result.data)
      } else {
        commit('ERROR', result, {
          root: true
        })
      }
    })
  },
  retrieveHotWords({
    commit,
    state
  }, {
    size
  }) {
    const url = `${domain}/openapi/hotWord/hotWordList.shtml?size=${size}`;
    fetch(url, {
      mode: 'cors'
    }).then(res => res.json()).then(result => {
      if (result.errCode === 0) {
        commit(mutationsTypes.SET_HOT_WORDS, result.data)
      } else {
        commit('ERROR', result, {
          root: true
        })
      }
    })
  }
}

const mutations = {
  [mutationsTypes.SET_HOT_STOCKS](state, stocks) {
    state.hotStocks = stocks;
  },
  [mutationsTypes.SET_HOT_WORDS](state, words) {
    state.hotWords = words;
  },
  [mutationsTypes.SET_AMBUSHED_STOCKS](state, stocks) {
    state.ambushedStocks = stocks;
  },
  [mutationsTypes.SET_AMBUSHED_PLATES](state, plates) {
    state.ambushedPlates = plates;
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}