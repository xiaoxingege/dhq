/*
 * 前端页面入口文件
 */

import Vue from 'vue'
import Vuex from 'vuex'
import initVue from 'utils/initVue'
import App from 'components/11th-activity2'

/*
 * 引入vuex
 */
Vue.use(Vuex)

/*
 * 实例化store
 */
import user from 'stores/user'
import reservation from 'stores/reservation'
import activity11Th from 'stores/11th-activity'
const store = new Vuex.Store({
  modules: {
    user,
    reservation,
    activity11Th
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
