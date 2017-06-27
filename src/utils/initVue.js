import Vue from 'vue'
import VueRouter from 'vue-router'
import { configRouter } from 'utils/routeConfig'
import App from 'components/app'
import RoutedApp from 'components/routed-app'

module.exports = function (opts) {
  const { routes, store, el } = opts
  if (routes) {
    Vue.use(VueRouter)
    configRouter(routes).then((router) => {
      new Vue({
        components: {
          App: RoutedApp
        },
        el: el || '#app',
        router,
        store
      })
    })
  } else {
    new Vue({
      components: {
        App: App
      },
      el: el || '#app',
      store
    })
  }
}
