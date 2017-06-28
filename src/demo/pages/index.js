import Vue from 'vue'
import Vuex from 'vuex'
import initVue from 'utils/initVue'
import Index from 'components/index'

Vue.use(Vuex)

const routes = [
  { path: '/', component: Index }
]

import sync from 'stores/sync'
import async from 'stores/async'
const store = new Vuex.Store({
  modules: {
    sync,
    async
  }
})

initVue({
  store,
  routes
})
