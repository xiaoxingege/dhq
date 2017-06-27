import Vue from 'vue'
import Vuex from 'vuex'
import initVue from 'utils/initVue'
import Index from 'components/index'

Vue.use(Vuex)

const routes = [
  { path: '/', component: Index }
]

import demo from 'stores/demo'
const store = new Vuex.Store({
  modules: {
    demo
  }
})

initVue({
  store,
  routes
})
