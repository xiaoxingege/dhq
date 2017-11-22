'use strict'

const assert = require("assert");
const co = require('co');
const thunkify = require('thunkify');
const _request = thunkify(require('request'));
const urlBase = 'http://itougu.jrj.com.cn/act/crud'

const createDoc = function(data) {
  data.__test = true;
  return data;
}

const request = function*(options) {
  options = options || {}
  options.headers = {
    'content-type': 'application/json'
  }
  return JSON.parse((yield _request(options))[1])
}

describe('crud', function() {

  this.timeout(10 * 1000);

  describe('clean', function() {

    it('delete all', function(done) {
      co(function*() {
        yield request({
          url: `${urlBase}/test?where=${JSON.stringify({__test: true})}`,
          method: 'delete'
        })
        let result = yield request({
          url: `${urlBase}/test`,
        });
        assert.equal(0, result.length)
      }).then(done, done);
    });

  });

  describe('post', function() {

    it('create a new doc', function(done) {
      co(function*() {
        let result = yield request({
          url: `${urlBase}/test`,
          method: 'post',
          body: JSON.stringify(createDoc({
            name: 'a1'
          }))
        });
        assert.equal('a1', result.name)
      }).then(done, done);
    });

    it('create some doc', function(done) {
      co(function*() {
        let result = yield request({
          url: `${urlBase}/test`,
          method: 'post',
          body: JSON.stringify(createDoc({
            name: 'a3'
          }))
        });
        assert.equal('a3', result.name)
        result = yield request({
          url: `${urlBase}/test`,
          method: 'post',
          body: JSON.stringify(createDoc({
            name: 'a5'
          }))
        });
        assert.equal('a5', result.name)
        result = yield request({
          url: `${urlBase}/test`,
          method: 'post',
          body: JSON.stringify(createDoc({
            name: 'a2'
          }))
        });
        assert.equal('a2', result.name)
        result = yield request({
          url: `${urlBase}/test`,
          method: 'post',
          body: JSON.stringify(createDoc({
            name: 'a4'
          }))
        });
        assert.equal('a4', result.name)
      }).then(done, done);
    });

  });

  describe('get', function() {

    it('get all docs', function(done) {
      co(function*() {
        let result = yield request({
          url: `${urlBase}/test`,
        });
        assert.equal(5, result.length)
      }).then(done, done);
    });

    it('limit', function(done) {
      co(function*() {
        let result = yield request({
          url: `${urlBase}/test`,
          qs: {
            limit: 2
          }
        });
        assert.equal(2, result.length)
      }).then(done, done);
    });

    it('skip', function(done) {
      co(function*() {
        let result = yield request({
          url: `${urlBase}/test`,
          qs: {
            skip: 2,
            limit: 2
          }
        });
        assert.equal(2, result.length)
        assert.equal('a5', result[0].name)
      }).then(done, done);
    });

    it('order asc', function(done) {
      co(function*() {
        let result = yield request({
          url: `${urlBase}/test`,
          qs: {
            order: 'name'
          }
        });
        assert.equal('a5', result[4].name)
      }).then(done, done);
    });

    it('order desc', function(done) {
      co(function*() {
        let result = yield request({
          url: `${urlBase}/test`,
          qs: {
            order: '-name'
          }
        });
        assert.equal('a5', result[0].name)
      }).then(done, done);
    });

    it('where', function(done) {
      co(function*() {
        let result = yield request({
          url: `${urlBase}/test`,
          qs: {
            where: JSON.stringify({
              name: 'a3'
            })
          }
        });
        assert.equal('a3', result[0].name)
      }).then(done, done);
    });

    it('objectId', function(done) {
      co(function*() {
        let result = yield request({
          url: `${urlBase}/test`,
          qs: {
            where: JSON.stringify({
              name: 'a3'
            })
          }
        });
        result = yield request({
          url: `${urlBase}/test/${result[0]._id}`,
        });
        assert.equal('a3', result.name)
      }).then(done, done);
    });

  });

  describe('put', function() {

    it('update a3 to a6', function(done) {
      co(function*() {
        let result = yield request({
          url: `${urlBase}/test`,
          qs: {
            where: JSON.stringify({
              name: 'a3'
            })
          }
        });
        let objectId = result[0]._id
        result = yield request({
          url: `${urlBase}/test/${objectId}`,
          method: 'put',
          body: JSON.stringify({
            name: 'a6'
          })
        });
        result = yield request({
          url: `${urlBase}/test/${objectId}`,
        });
        assert.equal('a6', result.name)
        assert.ok(result.updatedAt)
      }).then(done, done);
    });

  });

  describe('delete', function() {

    it('delete a5', function(done) {
      co(function*() {
        let result = yield request({
          url: `${urlBase}/test`,
          qs: {
            where: JSON.stringify({
              name: 'a5'
            })
          }
        });
        let objectId = result[0]._id
        result = yield request({
          url: `${urlBase}/test/${objectId}`,
          method: 'delete'
        });
        result = yield request({
          url: `${urlBase}/test`,
          qs: {
            where: JSON.stringify({
              name: 'a5'
            })
          }
        });
        assert.equal(result.length, 0)
      }).then(done, done);
    });

    it('delete others', function(done) {
      co(function*() {
        yield request({
          url: `${urlBase}/test?where=${JSON.stringify({__test: true})}`,
          method: 'delete'
        })
        let result = yield request({
          url: `${urlBase}/test`,
        });
        assert.equal(0, result.length)
      }).then(done, done);
    });

  });

});