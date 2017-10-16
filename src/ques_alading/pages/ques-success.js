/*
 * 前端页面入口文件
 */

import Vue from 'vue'
import Vuex from 'vuex'
import initVue from 'utils/initVue'
import App from 'components/ques-success'

/*
 * 引入vuex
 */
Vue.use(Vuex)

/*
 * 实例化store
 */
import quesSuccess from 'stores/ques-success'
import user from 'stores/user'
import quesFocus from 'stores/ques-focus'
import quesDetail from 'stores/ques-detail'

const store = new Vuex.Store({
  modules: {
    quesSuccess,
    user,
    quesFocus,
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