/*
 * 前端页面入口文件
 */

import Vue from 'vue'
import Vuex from 'vuex'
import initVue from 'utils/initVue'
import Index from 'components/index'
import ComponentsList from 'components/components-list'

/*
 * 引入vuex
 */
Vue.use(Vuex)

/*
 * 定义路由
 */
const routes = [
  { path: '/', component: Index },
  { path: '/components', component: ComponentsList }
]

/*
 * 实例化store
 */
import sync from 'stores/sync'
import async from 'stores/async'
const store = new Vuex.Store({
  modules: {
    sync,
    async
  }
})

/*
 * 实例化vue对象，渲染页面
 * @store  vuex的数据仓库
 * @routes  路由配置
 */
initVue({
  store,
  routes,
  historyMode: 'history'
})
