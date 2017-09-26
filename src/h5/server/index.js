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

require('./routes')(router);

app.use(router.routes());

/* 读取编译后的相应的html模板文件 */
const templatePath = getTemplatePath();
const templateMap = {
  neicanmsapp: fs.readFileSync(path.join(templatePath, 'neicanmsapp.html')).toString(),
  'jzxg-activity': fs.readFileSync(path.join(templatePath, 'jzxg-activity.html')).toString(),
  'mystock': fs.readFileSync(path.join(templatePath, 'mystock.html')).toString()
}
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
    let appid = ctx.headers.appid;
    let passportId = ctx.headers.passportId;
    if (appid) {
      ctx.body = ctx.body.replace('{{appid}}', appid).replace('{{passportId}}', passportId);
    }
  }
  await next();
});

app.listen(PORT || 3000);