import Vue from 'vue'
import Vuex from 'vuex'
import initVue from 'utils/initVue'

Vue.use(Vuex)

import demo from 'stores/demo'
const store = new Vuex.Store({
  modules: {
    demo
  }
})

initVue({
  store
})
