import Koa from 'koa'
import Router from 'koa-router'
import fs from 'fs'
import path from 'path'

const app = new Koa();

const router = new Router();

let routesDir = path.join(__dirname, 'routes');
let routeFiles = fs.readdirSync(routesDir);

routeFiles.forEach(file => {
  require('./routes/' + file)(router);
});

app.use(router.routes());

app.listen(3000);
