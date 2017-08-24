/*
 * 前端页面入口文件
 */

import Vue from 'vue'
import Vuex from 'vuex'
import initVue from 'utils/initVue'
import App from 'components/ques-tg'

/*
 * 引入vuex
 */
Vue.use(Vuex)

/*
 * 实例化store
 */
import quesTg from 'stores/ques-tg'
import quesDetail from 'stores/ques-detail'
const store = new Vuex.Store({
  modules: {
    quesTg,
    quesDetail
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
