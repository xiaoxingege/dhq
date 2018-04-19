import Vue from 'vue'
import Vuex from 'vuex'
import dhqIndex from 'stores/dhqIndex'
import z3sockjs from 'stores/z3sockjs'
import stock from 'stores/dhqStock'
/* import fetch from '../util/z3fetch' */
/* import zhikuanSearch from 'stores/zhikuan-search'
import zhikuanSearchList from 'stores/zhikuan-search-list'
import zhikuanDetailPages from 'stores/zhikuan-detail-pages'
import stockMap from 'stores/stockmap'
import topic from 'stores/z3tougu-theme'
import industry from 'stores/z3tougu-industry'
import bubbles from 'stores/bubbles'
import fundIntell from 'stores/fund-intell'
import goldStrategy from 'stores/gold-strategy'
import z3touguIndex from 'stores/z3tougu-index'
import backtestDetail from 'stores/backtest-detail'
import smartPool from 'stores/smartPool'
import filter from 'stores/filter'
import funcArchives from 'stores/fund-archives'
import fundRecord from 'stores/fund-record'
import backtestDetailH5 from 'stores/backtest-detail-h5'
import indexChart from 'stores/indexChart'
import finance from 'stores/finance'
import customerList from 'stores/customers'
import portraitDetail from 'stores/portrait-detail'
import optionalStock from 'stores/optional-stock'
import bullStock from 'stores/bullStock'
import plateMap from 'stores/plate-map'
import dragonList from 'stores/dragon-list-dialog'
import intelligenceInfo from 'stores/intelligence-info'
import marketBubble from 'stores/market-bubbles'
import zInfoPublic from 'stores/z-info-public'
import clinicShares from 'stores/clinic-shares'*/
Vue.use(Vuex)

const mutationTypes = {
  'ERROR': 'ERROR',
  'UPDATE_AUTH_SETTING': 'UPDATE_AUTH_SETTING'
}
const state = {
  error: {
    errorCode: null,
    errorMsg: null
  },
  auth: {
    authorization: '', // 'Bearer test_z3quant_accesss_token', // test access_token
    clientid: '', // 'test_client_id',
    deviceid: '', // 'test_device_id',
    updateTime: null, // updateTime
    expires: 0 // second
  },
  user: {
    userId: null
  }
}
const getters = {
  authHeader: state => {
    if (state.auth.authorization) {
      return {
        authorization: state.auth.authorization,
        clientid: state.auth.clientid,
        deviceid: state.auth.deviceid,
        userId: state.user.userId
      }
    }
    return {}
  }
}
const actions = {
  authSetting({
    state,
    commit
  }) {
    return new Promise((resolve, reject) => {
      if (window.Z3) {
        window.Z3.SndTokenInfo((info) => {
          const authInfo = JSON.parse(info)
          commit(mutationTypes.UPDATE_AUTH_SETTING, authInfo)
          resolve(authInfo)
        })
      } else {
        // 如果不是从客户端过来的，则给予测试信息
        /* const loginInfo = {
            loginID:'17600699368',
            passwd:'43a8ab956449007a2b04f76d0493bb62',
            passwd1:'43A8AB956449007A2B04F76D0493BB62',
            bizSource:'ZNTF_ZS_PC'
        }
        const url = '/sso/appLoginReturnAccessToken.jsp?loginID='+loginInfo.loginID+'&passwd='+loginInfo.passwd+'&passwd1='+loginInfo.passwd1+'&bizSource'+loginInfo.bizSource
        fetch(url).then(res => res.json()).then((result) => {
            debugger
            if (result.resultCode === 0) {
               const accessTokenInfo = result
            }
        }) */
        const authInfo = {
          authorization: 'Bearer test_z3quant_accesss_token', // test access_token
          clientid: 'test_client_id',
          deviceid: 'test_device_id',
          updateTime: null, // updateTime
          expires: -1, // second
          userid: 'userId' // test userid
          //   accessToken:accessTokenInfo.accessToken,
          //  passportId:accessTokenInfo.passportId
        }
        commit(mutationTypes.UPDATE_AUTH_SETTING, authInfo)
        resolve()
      }
    })
  }
}
const mutations = {
  [mutationTypes.ERROR](state, error) {
    state.error = {
      errorCode: error.errCode,
      errorMsg: error.msg
    };
  },
  [mutationTypes.UPDATE_AUTH_SETTING](state, authInfo) {
    state.auth = {
      authorization: authInfo.authorization,
      clientid: authInfo.clientid,
      deviceid: authInfo.deviceid,
      expires: authInfo.expires,
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
    dhqIndex,
    z3sockjs,
    stock
    /* zhikuanSearch,
     zhikuanSearchList,
     stockMap,
     zhikuanDetailPages,
     topic,
     industry,
     bubbles,
     fundIntell,
     goldStrategy,
     z3touguIndex,
     backtestDetail,
     smartPool,
     funcArchives,
     fundRecord,
     filter,
     backtestDetailH5,
     indexChart,
     finance,
     customerList,
     portraitDetail,
     optionalStock,
     bullStock,
     plateMap,
     dragonList,
     intelligenceInfo,
     zInfoPublic,
     marketBubble,
     clinicShares */
  }
})