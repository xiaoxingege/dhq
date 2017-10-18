/*
 * 服务端渲染的入口文件
 */

import Koa from 'koa'
import Router from 'koa-router'
import fs from 'fs'
import path from 'path'
import getTemplatePath from 'utils/getTemplatePath'

const app = new Koa();

const router = new Router();

/*
 * 读取routes路径下的全部路由文件进行路由注册
 */
require('./routes')(router);

app.use(router.routes());

/* 读取编译后的相应的html模板文件 */
/* 读取编译后的相应的html模板文件 */
const templatePath = getTemplatePath();
const templateCache = {};
const loadTemplate = function(name) {
  if (templateCache[name]) return templateCache[name];
  try {
    let content = fs.readFileSync(path.join(templatePath, `${name}.html`)).toString();
    templateCache[name] = content;
    return content;
  } catch (e) {
    return null;
  }
};
app.use(async function(ctx, next) {
  let template = loadTemplate(ctx.template || 'default');
  if (template) {
    ctx.type = 'text/html';
    ctx.body = template.replace(/<!--content-->/, ctx.body);
    if (ctx.metaKeywords) {
      ctx.body = ctx.body.replace('{{meta_keywords}}', ctx.metaKeywords);
    }
    if (ctx.metaDescription) {
      ctx.body = ctx.body.replace('{{meta_description}}', ctx.metaDescription);
    }
    if (ctx.title) {
      ctx.body = ctx.body.replace('{{title}}', ctx.title);
    }
  }
  ctx.set('Cache-Control', 'no-cache');
  await next();
});

app.listen(PORT || 3000);
