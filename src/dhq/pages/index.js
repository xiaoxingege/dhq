/*
 * 前端页面入口文件
 */
import Vue from 'vue'
import initVue from 'utils/initVue'
import routes from '../router'
import store from '../store'
import vueCookie from 'vue-cookie'
import z3 from '../plugins/z3'
import {
  nativeCalls
} from 'utils/nativeApi'
// import nativeCallJs from 'utils/nativeCallJs'
Vue.use(vueCookie)
Vue.use(z3)
/*
 * 实例化vue对象，渲染页面
 * @store  vuex的数据仓库
 * @routes  路由配置
 */

Vue.config.devtools = true;
Vue.config.keyCodes = {
  'up': 38,
  'down': 40,
  'left': 37,
  'right': 39
}
initVue({
  el: 'app',
  store,
  route: {
    transition: false,
    routes,
    historyMode: 'history',
    beforeEach(to, from, next) {
      if (!store.state.auth.accessToken) {
        store.dispatch('authSetting').then(next).catch(next)
      } else {
        next()
      }
    }
  }
});
// 客户端贯通H5
window.nativeCallJs = function(funId, params) {
  params = (params === undefined ? undefined : JSON.parse(params));
  nativeCalls[funId] && nativeCalls[funId](params);
}