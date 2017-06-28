import Vue from 'vue'
import Vuex from 'vuex'
import initVue from 'utils/initVue'

Vue.use(Vuex)

import sync from 'stores/sync'
import async from 'stores/async'
const store = new Vuex.Store({
  modules: {
    sync,
    async
  }
})

initVue({
  store
})
