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

let pify = require('pify');
let MongoClient = require('mongodb').MongoClient;
let ObjectId = require('mongodb').ObjectId;
let assert = require('assert');
let db = null;

const connectDb = async(dbName) => {
  if (!db) {
    try {
      let url = 'mongodb://mongodb:27017/' + dbName;
      db = await pify(MongoClient.connect)(url)
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = function(router) {

  router.post('/crud/:className', async(ctx, next) => {
    let className = ctx.params.className;
    let data = ctx.request.body;
    if (!data) {
      ctx.body = {
        code: 1,
        message: 'no valid data'
      }
      return;
    }

    // Connection URL
    await connectDb('crud');
    if (!db) {
      ctx.body = {
        code: 1,
        message: 'failed connect to mongodb'
      }
      return;
    }
    let collection = db.collection(className);
    data.createdAt = new Date().toISOString();
    let r = await collection.insertOne(data);
    assert.equal(1, r.insertedCount);
    ctx.body = r.ops[0]
  });

  router.put('/crud/:className/:objectId', async(ctx, next) => {
    let className = ctx.params.className;
    let objectId = ctx.params.objectId;
    let data = ctx.request.body;
    if (!data) {
      ctx.body = {
        code: 1,
        message: 'no valid data'
      }
      return;
    }

    // Connection URL
    await connectDb('crud');
    if (!db) {
      ctx.body = {
        code: 1,
        message: 'failed connect to mongodb'
      }
      return;
    }
    let collection = db.collection(className);
    data.updatedAt = new Date().toISOString();
    let r = await collection.findOneAndUpdate({
      _id: new ObjectId(objectId)
    }, {
      $set: data
    }, {
      returnOriginal: false
    });
    ctx.body = r.value
  });

  router.delete('/crud/:className/:objectId?', async(ctx, next) => {
    let className = ctx.params.className;
    let objectId = ctx.params.objectId;
    let query = ctx.request.query;
    let where = query.where;
    if (!objectId && !where) {
      ctx.body = {
        code: 1,
        message: 'missing objectId or where'
      }
      return;
    }
    if (where) {
      try {
        where = JSON.parse(query.where);
      } catch (e) {
        ctx.body = {
          code: 1,
          message: 'JSON.parse failed: where'
        }
        return;
      }
    }

    // Connection URL
    await connectDb('crud');
    if (!db) {
      ctx.body = {
        code: 1,
        message: 'failed connect to mongodb'
      }
      return;
    }
    let collection = db.collection(className);
    if (objectId) {
      await collection.findOneAndDelete({
        _id: new ObjectId(objectId)
      });
    } else {
      await collection.deleteMany(where)
    }
    ctx.body = {}
  });

  router.get('/crud/:className/:objectId?', async(ctx, next) => {
    let className = ctx.params.className;
    let objectId = ctx.params.objectId;
    let query = ctx.request.query;
    let where = query.where || undefined;
    if (where) {
      try {
        where = JSON.parse(query.where);
      } catch (e) {
        ctx.body = {
          code: 1,
          message: 'JSON.parse failed: where'
        }
        return;
      }
    }
    let limit = query.limit ? query.limit * 1 : 10;
    let skip = query.skip ? query.skip * 1 : 0;
    let order = query.order;
    let dir = 1;
    if (order) {
      if (order.charAt(0) === '-') {
        dir = -1;
        order = order.substring(1);
      }
    }
    await connectDb('crud');
    if (!db) {
      ctx.body = {
        code: 1,
        message: 'failed connect to mongodb'
      }
      return;
    }
    let collection = db.collection(className);
    let result;
    if (objectId) {
      result = await collection.findOne({
        _id: new ObjectId(objectId)
      })
    } else {
      result = [];
      let cursor = collection.find(where).skip(skip).limit(limit);
      if (order) {
        cursor = cursor.sort({
          [order]: dir
        })
      }
      await pify(cursor.forEach.bind(cursor))(doc => {
        result.push(doc);
      })
    }
    ctx.body = result
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
