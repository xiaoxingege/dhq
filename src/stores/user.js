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
    bindingIdentity: false
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
            const script = document.createElement('script') <<
              << << < HEAD
            script.addEventListener('load', function() {
              if (window.basicUserInfo) {
                commit('fetch', {
                  ssoId: window.basicUserInfo.userId
                })
                if (window.basicUserInfo.userId) {
                  commit('setLoginStatus', 'yes')
                } else {
                  commit('setLoginStatus', 'no')
                } ===
                === =
                script.addEventListener('load', function() {
                  commit('fetch', {
                    ssoId: window.sso_userID
                  })
                  if (window.sso_userID) {
                    commit('setLoginStatus', 'yes')
                  } else {
                    commit('setLoginStatus', 'no') >>>
                      >>> > 5 a911718250bd361692577b7c12b5aee95a73b8d
                  }
                  document.getElementsByTagName('head')[0].removeChild(script)
                  resolve()
                })
                script.addEventListener('error', function() {
                  document.getElementsByTagName('head')[0].removeChild(script)
                  resolve()
                })
                script.src = 'http://itougu.jrj.com.cn/account/getBasicUserInfo.jspa?' + (new Date()).getTime()
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
                passportId: state.ssoId || '170907010029048531'
              }
            }).then(data => {
              commit('setBindingInfo', data.data)
            })
          }
        }
      }