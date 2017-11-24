/*
 * 前端页面入口文件
 */

import Vue from 'vue'
import Vuex from 'vuex'
import user from 'stores/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  }
})

window.jrjs = {
  checkLogin(callback) {
    if (callback) {
      store.dispatch('user/checkLogin').then(() => {
        callback(store.state.user)
      })
    }
  },
  login(redirectUrl) {
    window.jrj.jsCallNative('108', JSON.stringify({
      returnUrl: encodeURI(redirectUrl)
    }))
  }
}
