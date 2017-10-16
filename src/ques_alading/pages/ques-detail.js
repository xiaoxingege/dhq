/*
 * 前端页面入口文件
 */

import Vue from 'vue'
import Vuex from 'vuex'
import initVue from 'utils/initVue'
import App from 'components/ques-detail'

/*
 * 引入vuex
 */
Vue.use(Vuex)

/*
 * 实例化store
 */
import quesDetail from 'stores/ques-detail'
import user from 'stores/user'
import quesFocus from 'stores/ques-focus'
const store = new Vuex.Store({
  modules: {
    quesDetail,
    user,
    quesFocus
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