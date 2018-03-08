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
const crypto = require('crypto');

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

function removeByValue(arr, val) {
  let newArr = []
  for (var i = 0; i < arr.length; i++) {
    let exists = val.some(data => {
      return data == arr[i]
    })
    if (!exists) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

function cryptPwd(password) {
  var md5 = crypto.createHash('md5');
  return md5.update(password).digest('hex');
}
const privateKey = 'hello2018'
const signature = function(params, t) {
  let keys = Object.keys(params)
  keys.sort()
  let str = keys.map(key => `${key}=${encodeURIComponent(params[key])}`).join('&')
  str += t + privateKey
  return cryptPwd(str)
}
const getQuota = async function() {
  let proxy = '';
  let proxyArr = ['', 'http://47.104.145.202:8118', 'http://ss.seon.im:18778'];
  let quota = 0
  for (var i = 0; i < proxyArr.length; i++) {
    quota = await request({
      headers: {
        'content-type': 'text/plain;charset=utf-8',
      },
      url: 'https://www.random.org/quota/?format=plain',
      proxy: proxyArr[i],
      method: 'get'
    });
    if (quota > 0) {
      proxy = proxyArr[i]
      break;
    }
  }
  return {
    proxy,
    quota
  }
}
const getRandomNum = async function({ max }) {
  // var rnd = [];
  // for (var i = 0; i < max; i++) {
  //   rnd.push(Math.ceil(Math.random() * max));
  // }
  // return rnd;

  let quotaInfo = await getQuota()
  let { proxy, quota } = quotaInfo
  let integersResult = await request({
    headers: {
      'content-type': 'text/plain;charset=utf-8',
    },
    proxy: proxy,
    url: `https://www.random.org/sequences/?num=${max}&min=1&max=${max}&col=1&base=10&format=plain&rnd=new`,
    method: 'get'
  });
  integersResult = integersResult.split('\n').filter(n => n)
  return integersResult
}
module.exports = function(router) {
  router.get('/lottery', async(ctx, next) => {
    let num = ctx.query.num || '20'; // 每次抽取的数量
    let max = ctx.query.max || '300'; // 最大中奖号码
    let lmax = ctx.query.lmax || '60'; // 每个奖项的最大中奖人数
    let level = ctx.query.level || '1'; // 奖项
    let createTime = Date.now();
    let lBatch = 1; // 每个奖项的抽奖批次
    let dataArr = [];
    // 获取所有已经抽过奖的记录，用于排除已经中奖的号码
    let lotteryDataResult = await request({
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      url: 'http://itougu.jrj.com.cn/act/crud/lotteryData?limit=100',
      method: 'get'
    });
    lotteryDataResult = JSON.parse(lotteryDataResult)
    if (lotteryDataResult.length > 0) {
      for (var i = 0; i < lotteryDataResult.length; i++) {
        // dataArr存放之前已经中过奖的所有号码
        dataArr = dataArr.concat(lotteryDataResult[i].lotteryData)
        if (level === lotteryDataResult[i].level) {
          lBatch++;
        }
      }
    }
    // 当前奖项全部中奖号码已经抽取完成
    if (lBatch * num > lmax) {
      ctx.body = {
        retcode: -1,
        msg: '此奖项已抽取完毕'
      };
      return;
    }
    // 因为random.org针对ip有调用限额，因此准备两组代理服务器
    // 先判断剩余配额，如果配额不足，则改用代理服务器请求

    // 调用random.org接口生成一组真随机数
    let integersResult = await getRandomNum({ max })
    // 从结果中排除已经中过奖的号码
    integersResult = removeByValue(integersResult, dataArr)
    integersResult = integersResult.slice(0, num)
    // 计算本次中奖数据的数字签名，防止奖项、批次、抽奖时间、中奖结果数据被篡改
    let key = cryptPwd(integersResult.toString() + level + lBatch + createTime)
    // 抽奖结果存入数据库
    let opt = {
      level: level,
      lotteryData: integersResult,
      batch: lBatch,
      createTime: createTime,
      key
    };
    let parsedBody = await request({
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      url: `http://itougu.jrj.com.cn/act/crud/lotteryData?t=${createTime}&sign=${signature(opt,createTime)}`,
      method: 'post',
      json: true,
      body: opt
    })
    // 返回本次抽奖结果和对应的数字签名
    ctx.body = {
      key,
      nums: integersResult
    };
  })
  router.get('/checkUserIsYG', async(ctx, next) => {
    let result = await request({
      headers: {
        'content-type': 'application/json',
      },
      url: `http://crm.jrj.com/jrjcrm/callCenter/interface/checkUserIsYG.do?userId=${ctx.query.userId}`,
      method: 'get'
    });
    result = JSON.parse(result)
    if (result.retCode === 0) {
      if (result.data.belongYG !== 0) {
        let ssoResult = await request({
          headers: {
            'content-type': 'application/json',
          },
          url: `http://sso.jrjc.local/sso/passport/userPassportById.jsp?passportIds=${ctx.query.userId}`,
          method: 'get'
        });
        ssoResult = JSON.parse(ssoResult)
        if (ssoResult.length !== 0 && ssoResult[0].bizSource.substring(0, 2) === 'YG') {
          ctx.body = { type: true }
        } else {
          ctx.body = { type: false }
        }
      } else {
        ctx.body = { type: true }
      }
    } else {
      let ssoResult = await request({
        headers: {
          'content-type': 'application/json',
        },
        url: `http://sso.jrjc.local/sso/passport/userPassportById.jsp?passportIds=${ctx.query.userId}`,
        method: 'get'
      });
      ssoResult = JSON.parse(ssoResult)
      if (ssoResult.length !== 0 && ssoResult[0].bizSource.substring(0, 2) === 'YG') {
        ctx.body = { type: true }
      } else {
        ctx.body = { type: false }
      }
    }
  })
  router.get('/listByUidAndProductId', async(ctx, next) => {
    let result = await request({
      headers: {
        'content-type': 'application/json',
      },
      url: `http://cashier.jrjc.local/order/listByUidAndProductId?uid=${ctx.query.uid}&productSubId=${ctx.query.productSubId}`,
      method: 'get'
    });
    result = JSON.parse(result)
    if (result.retCode === 0 && result.orderList.length !== 0 && Math.round(new Date().getTime() / 1000) < transdate('20171218000000')) {
      for (var i = 0; i < result.orderList.length; i++) {
        if (result.orderList[i].productType === parseInt(ctx.query.type)) {
          ctx.body = {
            type: false
          };
        } else {
          if (transdate(result.orderList[i].completeTime) > transdate('20171211000000') && transdate(result.orderList[i].completeTime) < transdate('20171218000000')) {
            ctx.body = {
              type: true
            };
          } else {
            ctx.body = {
              type: false
            };
          }
        }
      }
    } else {
      ctx.body = {
        type: false
      };
    }
  })
  router.get('/zcpz-activity', async(ctx, next) => {
    ctx.title = '春节钜献 资产配置礼包';
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
  router.get('/sdjg-activity', async(ctx, next) => {
    ctx.title = '金融界实地调研 直击2018A股价值王';
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
  router.get('/pqng-activity', async(ctx, next) => {
    ctx.title = '加微信 送盘前牛股';
    ctx.htmlHeader = `<script type="text/javascript">
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
  router.get('/zj-activity', async(ctx, next) => {
    ctx.title = '即将涨价，限时疯抢';
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
  router.get('/ydzxDetail', async(ctx, next) => {
    ctx.htmlHeader = '<meta name="format-detection" content="telephone=no"/>';
    ctx.htmlFooter = '';
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
