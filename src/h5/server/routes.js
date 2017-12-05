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
    router.get('/endYear-activity', async(ctx, next) => {
      ctx.title = '每日3只强势股-金融界';
      ctx.metaDescription = '';
      ctx.metaKeywords = '';
      ctx.template = ctx.path.substring(1);
      // 渲染vue对象为html字符串
      let html = '';
      // 向浏览器输出完整的html
      ctx.body = html;
      // 继续执行后面的中间件
      await next();
    });
  router.get('/wangLun-activity', async(ctx, next) => {
    ctx.title = '央视嘉宾王伦全网限时回馈';
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
  router.get('/blackTechnology-activity', async(ctx, next) => {
    ctx.title = '股市惊现“黑科技”';
    ctx.metaDescription = '';
    ctx.metaKeywords = '';
    ctx.template = ctx.path.substring(1);
    // 渲染vue对象为html字符串
    let html = '';
    // 向浏览器输出完整的html
    ctx.body = html;
    // 继续执行后面的中间件
    await next();
  });
  router.get('/11th-activity', async(ctx, next) => {
    ctx.title = '双11疯狂送-金融界';
    ctx.metaDescription = '';
    ctx.metaKeywords = '';
    ctx.template = ctx.path.substring(1);
    // 渲染vue对象为html字符串
    let html = '';
    // 向浏览器输出完整的html
    ctx.body = html;
    // 继续执行后面的中间件
    await next();
  });
  router.get('/11th-activity2', async(ctx, next) => {
    ctx.title = '订阅抽大奖，100%中奖-金融界';
    ctx.metaDescription = '';
    ctx.metaKeywords = '';
    ctx.template = ctx.path.substring(1);
    // 渲染vue对象为html字符串
    let html = '';
    // 向浏览器输出完整的html
    ctx.body = html;
    // 继续执行后面的中间件
    await next();
  });
  router.get('/ydzxDetail', async(ctx, next) => {
    ctx.htmlHeader = '<link rel="stylesheet" href="http://static.yidianzixun.com/apps/ant_media_v1.0.0.5/main.css" type="text/css">';
    ctx.htmlFooter = '<script src="http://static.yidianzixun.com/apps/ant_media_v1.0.0.5/main.js"></script>';
    ctx.template = ctx.path.substring(1);
    // 渲染vue对象为html字符串
    let html = '';
    // 向浏览器输出完整的html
    ctx.body = html;
    // 继续执行后面的中间件
    await next();
  });
  router.get('/endYear-activity', async(ctx, next) => {
    ctx.htmlHeader = '';
    ctx.htmlFooter = `<script type="text/javascript">
        (function(root) {
            root._tt_config = true;
            var ta = document.createElement('script'); ta.type = 'text/javascript'; ta.async = true;
            ta.src = document.location.protocol + '//' + 's3.pstatp.com/bytecom/resource/track_log/src/toutiao-track-log.js';
            ta.onerror = function () {
                var request = new XMLHttpRequest();
                var web_url = window.encodeURIComponent(window.location.href);
                var js_url  = ta.src;
                var url = '//ad.toutiao.com/link_monitor/cdn_failed?web_url=' + web_url + '&js_url=' + js_url + '&convert_id=78777396907';
                request.open('GET', url, true);
                request.send(null);
            }
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ta, s);
        })(window);
    </script>`;
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
