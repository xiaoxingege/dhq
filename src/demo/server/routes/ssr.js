import Vue from 'vue'
import Vuex from 'vuex'
import Index from 'components/index'
import renderToString from 'utils/renderToString'

Vue.use(Vuex)

import demo from 'stores/demo'
const store = new Vuex.Store({
  modules: {
    demo
  }
})

const app = new Vue({
  template: '<div><index name="haha"/></div>',
  components: {
    Index
  },
  store
})

module.exports = function(router) {
  router.get('/hello', async(ctx, next) => {
    let html = await renderToString(app);
    ctx.body = `
    <html>
      <head>
      </head>
      <body>
        <div id="app">
          ${html}
        </div>
      </body>
    </html>
    `;
  });
}
