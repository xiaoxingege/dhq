/*
 * 前端页面入口文件
 */

import Vue from 'vue'
import Vuex from 'vuex'
import initVue from 'utils/initVue'
import App from 'components/ssjj-activity-h5'

/*
 * 引入vuex
 */
Vue.use(Vuex)

/*
 * 实例化store
 */
import reservation from 'stores/reservation'
const store = new Vuex.Store({
  modules: {
    reservation
  }
})

/*
 * 实例化vue对象，渲染页面
 * @store  vuex的数据仓库
 * @component  用于渲染的组件
 */
initVue({
  store,
  component: App
})