/*
 * 同步形式的store，设置好state中的值即可
 * namespaced为true，是为了避免store的module之间，getters、mutations、actions发生命名冲突
 */
import $ from 'jquery'
import Promise from 'promise'

export default {
  namespaced: true,
  state: {
    // 初始化时，务必要把所有的数据成员做初始化，否则后面数据的更新，将不会触发显示的更新
    ssoId: '',
    spToken: '',
    loginStatus: 'unknown',
    riskAssessed: false,
    bindingMobile: false,
    bindingIdentity: false,
    beanNum: 0
  },
  mutations: {
    fetch(state, data) {
      state.ssoId = data.ssoId
      state.spToken = data.spToken
    },
    setLoginStatus(state, loginStatus) {
      state.loginStatus = loginStatus
    },
    setBindingInfo(state, bindingInfo) {
      state.riskAssessed = !!bindingInfo.riskAssessed
      state.bindingMobile = !!bindingInfo.bindingMobile
      state.bindingIdentity = !!bindingInfo.bindingIdentity
    },
    setBeanNum(state, num) {
      state.beanNum = num
    }
  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    fetch({
      commit
    }, options) {
      options = options || {}
      commit('fetch', {
        ssoId: window.ssoId,
        spToken: window.spToken
      })
    },
    checkLogin({
      commit
    }) {
      const promise = new Promise((resolve, reject) => {
        // App内，通过cookie判断
        if (window.app && window.app.name && window.app.name !== '{{appid}}') {
          const passportId = window.app.passportId
          commit('fetch', {
            ssoId: passportId || ''
          })
          if (passportId) {
            commit('setLoginStatus', 'yes')
          } else {
            commit('setLoginStatus', 'no')
          }
          resolve()
        } else {
          const script = document.createElement('script')
          script.addEventListener('load', function() {
            if (window.basicUserInfo) {
              commit('fetch', {
                ssoId: window.basicUserInfo.userId
              })
              if (window.basicUserInfo.userId) {
                commit('setLoginStatus', 'yes')
              } else {
                commit('setLoginStatus', 'no')
              }
            }
            document.getElementsByTagName('head')[0].removeChild(script)
            resolve()
          })
          script.addEventListener('error', function() {
            document.getElementsByTagName('head')[0].removeChild(script)
            resolve()
          })
          script.src = '//itougu.jrj.com.cn/account/getBasicUserInfo.jspa?' + (new Date()).getTime()
          document.getElementsByTagName('head')[0].appendChild(script)
        }
      })
      return promise
    },
    checkBindingInfo({
      commit,
      state
    }) {
      return $.ajax({
        url: '//itougu.jrj.com.cn/account/service/identityHasVerified.jspa',
        headers: {
          passportId: state.ssoId
        }
      }).then(data => {
        commit('setBindingInfo', data.data)
      })
    },
    getBeanNum({
      commit,
      state
    }) {
      return $.ajax({
        url: `//itougu.jrj.com.cn/marketing/getBeanNum.jspa?userId=${state.ssoId}`
      }).then(data => {
        commit('setBeanNum', data.num)
      })
    }
  }
}