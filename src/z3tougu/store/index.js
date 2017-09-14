import Vue from 'vue'
import Vuex from 'vuex'
import zhikuanSearch from 'stores/zhikuan-search'
import zhikuanSearchList from 'stores/zhikuan-search-list'
import zhikuanDetailPages from 'stores/zhikuan-detail-pages'
import stockMap from 'stores/stockmap'
import topic from 'stores/z3tougu-theme'
import bubbles from 'stores/bubbles'
import stock from 'stores/stock'
import z3sockjs from 'stores/z3sockjs'
import fundIntell from 'stores/fund-intell'
import goldStrategy from 'stores/gold-strategy'
import z3touguIndex from 'stores/z3tougu-index'
import backtestDetail from 'stores/backtest-detail'
import smartPool from 'stores/smartPool'
import filter from 'stores/filter'
import funcArchives from 'stores/fund-archives'
import fundRecord from 'stores/fund-record'
import backtestDetailH5 from 'stores/backtest-detail-h5'
Vue.use(Vuex)

const mutationTypes = {
  'REQUEST_ERROR': 'REQUEST_ERROR',
  'UPDATE_AUTH_SETTING': 'UPDATE_AUTH_SETTING'
}
const state = {
  request: {
    statusCode: null,
    errMsg: null
  },
  auth: {
    authorization: null, // access_token
    clientid: null,
    deviceid: null,
    updateTime: null, // updateTime
    expires: 0// second
  },
  user: {
    userId: null
  }
}
const getters = {
  authHeader: state => {
    if (state.authorization) {
      return {
        authorization: state.authorization,
        clientid: state.clientid,
        deviceid: state.deviceid
      }
    }
    return {}
  }
}
const actions = {
  authSetting ({ state, commit }) {
    return new Promise((resolve, reject) => {
      if (window.Z3) {
        window.Z3.SndTokenInfo((info) => {
          const authInfo = JSON.parse(info)
          commit(mutationTypes.UPDATE_AUTH_SETTING, authInfo)
          resolve()
        })
      } else {
        resolve()
      }
    })
  }
}
const mutations = {
  [mutationTypes.REQUEST_ERROR] (state, error) {
    // state.error = error.message
  },
  [mutationTypes.UPDATE_AUTH_SETTING] (state, authInfo) {
    state.auth = {
      authorization: state.authorization,
      clientid: state.clientid,
      deviceid: state.deviceid,
      expires: state.expires,
      updateTime: new Date().getTime()
    }
    state.user = {
      userId: authInfo.userid
    }
  }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    zhikuanSearch,
    zhikuanSearchList,
    stockMap,
    zhikuanDetailPages,
    topic,
    bubbles,
    stock,
    z3sockjs,
    fundIntell,
    goldStrategy,
    z3touguIndex,
    backtestDetail,
    smartPool,
    funcArchives,
    fundRecord,
    filter,
    backtestDetailH5
  }
})
