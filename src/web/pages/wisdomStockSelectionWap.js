/*
 * 前端页面入口文件
 */

import Vue from 'vue'
import Vuex from 'vuex'
import initVue from 'utils/initVue'
import RoutedApp from 'components/routed-app'
import Index from 'components/intelligentStockSelectionWap/wisdomStockSelectionWap/wisdomStockSelectionIndex.vue'

/*
 * 引入vuex
 */
Vue.use(Vuex)

/*
 * 定义路由
 */
const routes = [
  { path: '/index', component: Index }
]
/*
 * 实例化store
 */
import wisdomStockSelection from 'stores/wisdomStockSelection'
const store = new Vuex.Store({
  modules: {
    wisdomStockSelection
  }
})

/*
 * 实例化vue对象，渲染页面
 * @store  vuex的数据仓库
 * @component  用于渲染的组件
 */
initVue({
  component: RoutedApp,
  store,
  route: {
    routes,
    historyMode: 'history',
    beforeEach (to, from, next) {
      alert('1')
      next()
    }
  }
})
