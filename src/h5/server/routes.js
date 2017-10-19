/*
 * 服务端渲染的路由处理
 */

import Vue from 'vue'
import Vuex from 'vuex'
import ComponentsList from 'components/components-list'
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
  render: h => h(ComponentsList),
  store
})

module.exports = function(router) {
    router.get('/wangLun-activity', async(ctx, next) => {
        ctx.title='央视嘉宾王伦全网限时回馈';
        ctx.metaDescription = '';
        ctx.metaKeywords = '王伦,伦哥量化,优惠券';
      ctx.template = ctx.path.substring(1);
      // 渲染vue对象为html字符串
      let html = '';
      // 向浏览器输出完整的html
      ctx.body = html;
      // 继续执行后面的中间件
      await next();
    });
  router.get('*', async(ctx, next) => {
    ctx.template = ctx.path.substring(1);
    // 渲染vue对象为html字符串
    let html = '';
    // 向浏览器输出完整的html
    ctx.body = html;
    // 继续执行后面的中间件
    await next();
  });
}
