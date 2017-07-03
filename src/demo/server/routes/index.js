/*
 * 服务端渲染的路由处理
 */

import Vue from 'vue'
import Vuex from 'vuex'
import Index from 'components/index'
import renderToString from 'utils/renderToString'

Vue.use(Vuex)

/*
 * 初始化store仓库
 */
import sync from 'stores/sync'
import asyncStore from 'stores/async'
import fs from 'fs'
import path from 'path'
import getTemplatePath from 'utils/getTemplatePath'

const store = new Vuex.Store({
  modules: {
    sync,
    async: asyncStore
  }
})
/*
 * 向异步的store中写入数据
 * 这个数据，在实际项目中，应该先从接口获取
 * 因为store设置了namespaced:true，因此，commit时，需要指定命名空间async
 */
store.commit('async/fetch', 'store on server');

// 实例化vue对象
const app = new Vue({
  render: h => h(Index),
  store
})

/* 读取编译后的相应的html模板文件 */
const templatePath = getTemplatePath(path.basename(__filename, '.js'));
const template = fs.readFileSync(templatePath).toString();
module.exports = function(router) {
  router.get('/', async(ctx, next) => {
    // 渲染vue对象为html字符串
    let html = await renderToString(app);
    // 向浏览器输出完整的html
    let arr = template.split(/<div class="app">.*<\/div>/);
    arr.splice(1, 0, `<div class="app">${html}</div>`)
    ctx.body = arr.join('');
  });
}
