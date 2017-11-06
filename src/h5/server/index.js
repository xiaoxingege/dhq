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
    let appid = ctx.headers.appid || '';
    let passportId = ctx.headers.passportid || '';
    if (appid) {
      ctx.body = ctx.body.replace('{{appid}}', appid).replace('{{passportId}}', passportId);
    }
    ctx.body = ctx.body.replace('{{meta_keywords}}', ctx.metaKeywords || '');
    ctx.body = ctx.body.replace('{{meta_description}}', ctx.metaDescription || '');
    ctx.body = ctx.body.replace('{{title}}', ctx.title || '');
    ctx.body = ctx.body.replace('<!--html_header-->', ctx.htmlHeader || '');
    ctx.body = ctx.body.replace('<!--html_footer-->', ctx.htmlFooter || '');
  }
  ctx.set('Cache-Control', 'no-cache');
  await next();
});

app.listen(PORT || 3000);
