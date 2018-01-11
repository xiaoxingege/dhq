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
const request = require('request-promise');

// 实例化vue对象
const app = new Vue({
  render: h => h(ComponentsList),
  store
})
function transdate(endTime) {
    var date = new Date();
    date.setFullYear(endTime.substring(0, 4));
    date.setMonth(endTime.substring(4, 6) - 1);
    date.setDate(endTime.substring(6, 8));
    date.setHours(endTime.substring(8, 10));
    date.setMinutes(endTime.substring(10, 12));
    date.setSeconds(endTime.substring(12, 14));
    return Date.parse(date) / 1000;
}
module.exports = function(router) {
    router.get('/checkUserIsYG', async(ctx, next) => {
        let result = await request({
          headers:{
            'content-type':'application/json',
          },
          url: `http://crm.jrj.com/jrjcrm/callCenter/interface/checkUserIsYG.do?userId=${ctx.query.userId}`,
          method: 'get'
        });
        result = JSON.parse(result)
        if(result.retCode === 0){
            if(result.data.belongYG !== 0){
                let ssoResult = await request({
                  headers:{
                    'content-type':'application/json',
                  },
                  url: `http://sso.jrjc.local/sso/passport/userPassportById.jsp?passportIds=${ctx.query.userId}`,
                  method: 'get'
                });
                ssoResult = JSON.parse(ssoResult)
                if(ssoResult.length !== 0 && ssoResult[0].bizSource.substring(0,2) === 'YG'){
                    ctx.body = {type:true}
                }else{
                    ctx.body = {type:false}
                }
            }else{
                ctx.body = {type:true}
            }
        }else {
            let ssoResult = await request({
              headers:{
                'content-type':'application/json',
              },
              url: `http://sso.jrjc.local/sso/passport/userPassportById.jsp?passportIds=${ctx.query.userId}`,
              method: 'get'
            });
            ssoResult = JSON.parse(ssoResult)
            if(ssoResult.length !== 0 && ssoResult[0].bizSource.substring(0,2) === 'YG'){
                ctx.body = {type:true}
            }else{
                ctx.body = {type:false}
            }
        }
    })
    router.get('/listByUidAndProductId', async(ctx, next) => {
        let result = await request({
          headers:{
            'content-type':'application/json',
          },
          url: `http://cashier.jrjc.local/order/listByUidAndProductId?uid=${ctx.query.uid}&productSubId=${ctx.query.productSubId}`,
          method: 'get'
        });
        result = JSON.parse(result)
        if(result.retCode === 0 && result.orderList.length !== 0 && Math.round(new Date().getTime() / 1000) < transdate('20171218000000')){
            for(var i=0;i<result.orderList.length;i++){
                if(result.orderList[i].productType === parseInt(ctx.query.type)){
                    ctx.body = {
                        type: false
                    };
                }else{
                    if(transdate(result.orderList[i].completeTime) > transdate('20171211000000') && transdate(result.orderList[i].completeTime) < transdate('20171218000000')){
                        ctx.body = {
                            type: true
                        };
                    }else{
                        ctx.body = {
                            type: false
                        };
                    }
                }
            }
        }else{
            ctx.body = {
                type: false
            };
        }
    })
    router.get('/pqng-activity', async(ctx, next) => {
      ctx.title = '加微信 送盘前牛股';
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
    router.get('/zdcpQxsj-activity', async(ctx, next) => {
      ctx.title = 'Z点操盘全心升级，好礼矩献';
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
    router.get('/yearEnd-activity', async(ctx, next) => {
      ctx.title = '领航2018 布局“复兴牛”-金融界';
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
    router.get('/12th-activity', async(ctx, next) => {
      ctx.title = '双12 就要爱-金融界';
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
    router.get('/12th-activity2', async(ctx, next) => {
      ctx.title = '双12 就要爱-金融界';
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
