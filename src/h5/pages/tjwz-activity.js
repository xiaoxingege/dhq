/*
 * 前端页面入口文件
 */

import Vue from 'vue'
import Vuex from 'vuex'
import initVue from 'utils/initVue'
import App from 'components/tjwz-activity'

/*
 * 引入vuex
 */
Vue.use(Vuex)

/*
 * 实例化store
 */
import user from 'stores/user'
import topicComment from 'stores/topic-comment'
import tjwzActivity from 'stores/tjwz-activity'
const store = new Vuex.Store({
  modules: {
    user,
    topicComment,
    tjwzActivity
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
