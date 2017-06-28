/*
 * 前端页面入口文件
 */

import Vue from 'vue'
import Vuex from 'vuex'
import initVue from 'utils/initVue'

/*
 * 引入vuex
 */
Vue.use(Vuex)

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
 */
initVue({
  store
})
