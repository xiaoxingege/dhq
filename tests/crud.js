'use strict'

const assert = require("assert");
require('request')
const request = require('request-promise');
const urlBase = 'http://itougu.jrj.com.cn/act/crud'

const createDoc = function(data) {
  data.__test = true;
  return data;
}

describe('crud', function() {

  this.timeout(10 * 1000);

  describe('clean', function() {

    it('delete all', async function() {
      await request({
        headers: {
          'content-type': 'application/json',
        },
        url: `${urlBase}/test?where=${JSON.stringify({__test: true})}`,
        method: 'delete'
      })
      let result = await request({
        headers: {
          'content-type': 'application/json',
        },
        url: `${urlBase}/test?where=${JSON.stringify({__test: true})}`,
      });
      result = JSON.parse(result)
      assert.equal(0, result.length)
    });

  });

  describe('post', function() {

    it('create a new doc', async function() {
      let result = await request({
        headers: {
          'content-type': 'application/json',
        },
        url: `${urlBase}/test`,
        method: 'post',
        body: JSON.stringify(createDoc({
          name: 'a1'
        }))
      });
      result = JSON.parse(result)
      assert.equal('a1', result.name)
    });

    it('create some doc', async function() {
      let result = await request({
        headers: {
          'content-type': 'application/json',
        },
        url: `${urlBase}/test`,
        method: 'post',
        body: JSON.stringify(createDoc({
          name: 'a3'
        }))
      });
      result = JSON.parse(result)
      assert.equal('a3', result.name)
      result = await request({
        headers: {
          'content-type': 'application/json',
        },
        url: `${urlBase}/test`,
        method: 'post',
        body: JSON.stringify(createDoc({
          name: 'a5'
        }))
      });
      result = JSON.parse(result)
      assert.equal('a5', result.name)
      result = await request({
        headers: {
          'content-type': 'application/json',
        },
        url: `${urlBase}/test`,
        method: 'post',
        body: JSON.stringify(createDoc({
          name: 'a2'
        }))
      });
      result = JSON.parse(result)
      assert.equal('a2', result.name)
      result = await request({
        headers: {
          'content-type': 'application/json',
        },
        url: `${urlBase}/test`,
        method: 'post',
        body: JSON.stringify(createDoc({
          name: 'a4'
        }))
      });
      result = JSON.parse(result)
      assert.equal('a4', result.name)
    });

  });

  describe('get', async function() {

    it('get all docs', async function() {
      let result = await request({
        headers: {
          'content-type': 'application/json',
        },
        url: `${urlBase}/test?where=${JSON.stringify({__test: true})}`,
      });
      result = JSON.parse(result)
      assert.equal(5, result.length)
    });

    it('limit', async function() {
      let result = await request({
        headers: {
          'content-type': 'application/json',
        },
        url: `${urlBase}/test?where=${JSON.stringify({__test: true})}`,
        qs: {
          limit: 2
        }
      });
      result = JSON.parse(result)
      assert.equal(2, result.length)
    });

    it('skip', async function() {
      let result = await request({
        headers: {
          'content-type': 'application/json',
        },
        url: `${urlBase}/test?where=${JSON.stringify({__test: true})}`,
        qs: {
          skip: 2,
          limit: 2
        }
      });
      result = JSON.parse(result)
      assert.equal(2, result.length)
      assert.equal('a5', result[0].name)
    });

    it('order asc', async function() {
      let result = await request({
        headers: {
          'content-type': 'application/json',
        },
        url: `${urlBase}/test?where=${JSON.stringify({__test: true})}`,
        qs: {
          order: 'name'
        }
      });
      result = JSON.parse(result)
      assert.equal('a5', result[4].name)
    });

    it('order desc', async function() {
      let result = await request({
        headers: {
          'content-type': 'application/json',
        },
        url: `${urlBase}/test?where=${JSON.stringify({__test: true})}`,
        qs: {
          order: '-name'
        }
      });
      result = JSON.parse(result)
      assert.equal('a5', result[0].name)
    });

    it('where', async function() {
      let result = await request({
        headers: {
          'content-type': 'application/json',
        },
        url: `${urlBase}/test`,
        qs: {
          where: JSON.stringify({
            name: 'a3',
            __test: true
          })
        }
      });
      result = JSON.parse(result)
      assert.equal('a3', result[0].name)
    });

    it('objectId', async function() {
      let result = await request({
        headers: {
          'content-type': 'application/json',
        },
        url: `${urlBase}/test`,
        qs: {
          where: JSON.stringify({
            name: 'a3'
          })
        }
      });
      result = JSON.parse(result)
      result = await request({
        headers: {
          'content-type': 'application/json',
        },
        url: `${urlBase}/test/${result[0]._id}`,
      });
      result = JSON.parse(result)
      assert.equal('a3', result.name)
    });

  });

  describe('put', function() {

    it('update a3 to a6', async function() {
      let result = await request({
        headers: {
          'content-type': 'application/json',
        },
        url: `${urlBase}/test`,
        qs: {
          where: JSON.stringify({
            name: 'a3'
          })
        }
      });
      result = JSON.parse(result)
      let objectId = result[0]._id
      result = await request({
        headers: {
          'content-type': 'application/json',
        },
        url: `${urlBase}/test/${objectId}`,
        method: 'put',
        body: JSON.stringify({
          name: 'a6'
        })
      });
      result = await request({
        headers: {
          'content-type': 'application/json',
        },
        url: `${urlBase}/test/${objectId}`,
      });
      result = JSON.parse(result)
      assert.equal('a6', result.name)
      assert.ok(result.updatedAt)
    });

  });

  describe('delete', function() {

    it('delete a5', async function() {
      let result = await request({
        headers: {
          'content-type': 'application/json',
        },
        url: `${urlBase}/test`,
        qs: {
          where: JSON.stringify({
            name: 'a5'
          })
        }
      });
      result = JSON.parse(result)
      let objectId = result[0]._id
      result = await request({
        headers: {
          'content-type': 'application/json',
        },
        url: `${urlBase}/test/${objectId}`,
        method: 'delete'
      });
      result = await request({
        headers: {
          'content-type': 'application/json',
        },
        url: `${urlBase}/test`,
        qs: {
          where: JSON.stringify({
            name: 'a5'
          })
        }
      });
      result = JSON.parse(result)
      assert.equal(result.length, 0)
    });

    it('delete others', async function() {
      await request({
        headers: {
          'content-type': 'application/json',
        },
        url: `${urlBase}/test?where=${JSON.stringify({__test: true})}`,
        method: 'delete'
      })
      let result = await request({
        headers: {
          'content-type': 'application/json',
        },
        url: `${urlBase}/test?where=${JSON.stringify({__test: true})}`,
      });
      result = JSON.parse(result)
      assert.equal(0, result.length)
    });

  });

});