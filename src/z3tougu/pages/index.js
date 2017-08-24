/*
 * 前端页面入口文件
 */
import Vue from 'vue'
import initVue from 'utils/initVue'
import routes from '../router'
import store from '../store'
import vueCookie from 'vue-cookie'
import Z3 from '../plugins/z3'

Vue.use(vueCookie)
Vue.use(Z3)
/*
 * 实例化vue对象，渲染页面
 * @store  vuex的数据仓库
 * @routes  路由配置
 */
initVue({
  el: 'app',
  store,
  route: {
    routes,
    historyMode: 'history'
  }
})
