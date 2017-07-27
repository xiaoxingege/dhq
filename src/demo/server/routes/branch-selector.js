/*
 * 服务端渲染的路由处理
 */

import Vue from 'vue'
import Vuex from 'vuex'
import BranchSelector from 'components/branch-selector'
import renderToString from 'utils/renderToString'

Vue.use(Vuex)

/*
 * 初始化store仓库
 */

const store = new Vuex.Store({
  modules: {}
})

// 实例化vue对象
const app = new Vue({
  render: h => h(BranchSelector),
  store
})

module.exports = function(router) {
  router.get('/branch-selector', async(ctx, next) => {
    ctx.template = 'branchSelector';
    // 渲染vue对象为html字符串
    let html = await renderToString(app);
    // 向浏览器输出完整的html
    ctx.body = html;
    // 继续执行后面的中间件
    await next();
  });
}
