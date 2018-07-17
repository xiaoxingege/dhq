/*
 * 前端页面入口文件
 */
import Vue from 'vue'
import initVue from 'utils/initVue'
import routes from '../router'
import store from '../store'
import vueCookie from 'vue-cookie'
import z3 from '../plugins/z3'
import sa from 'sa-sdk-javascript'

// 神策分析===开始
sa.init({
  'show_log': true,
  'server_url': 'https://sensor.jrj.com.cn/sa.gif?token=z3',
  heatmap: {
    // 是否开启点击图，默认 default 表示开启，自动采集 $WebClick 事件，可以设置 'not_collect' 表示关闭
    clickmap: 'default',
    // 是否开启触达注意力图，默认 default 表示开启，自动采集 $WebStay 事件，可以设置 'not_collect' 表示关闭
    'scroll_notice_map': 'not_collect'
  }
});
sa.quick('autoTrack');
// 神策分析===结束

Vue.use(vueCookie)
Vue.use(z3)
/*
 * 实例化vue对象，渲染页面
 * @store  vuex的数据仓库
 * @routes  路由配置
 */

Vue.config.devtools = true;
Vue.config.keyCodes = {
  'up': 38,
  'down': 40,
  'left': 37,
  'right': 39
}
initVue({
  el: 'app',
  store,
  route: {
    transition: false,
    routes,
    historyMode: 'history',
    beforeEach(to, from, next) {
      if (!store.state.auth.authorization) {
        store.dispatch('authSetting')
          .then(() => {
            console.info('sa login:' + store.state.user.userId);
            sa.login(store.state.user.userId);
          })
          .then(next).catch(next)
      } else {
        next()
      }
    }
  }
})