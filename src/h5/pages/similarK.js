/*
 * 前端页面入口文件
 */

// import Vue from 'vue'
// import Vuex from 'vuex'
import initVue from 'utils/initVue'
import App from 'components/similarK'

/*
 * 引入vuex
 */
// Vue.use(Vuex)

/*
 * 实例化store
 */

// const store = new Vuex.Store({
//   modules: {}
// })

/*
 * 实例化vue对象，渲染页面
 * @store  vuex的数据仓库
 * @component  用于渲染的组件
 */
initVue({
  component: App
})
