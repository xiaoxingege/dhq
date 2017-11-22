/*
 * 同步形式的store，设置好state中的值即可
 * namespaced为true，是为了避免store的module之间，getters、mutations、actions发生命名冲突
 */

// whatwg-fetch仅能在浏览器环境使用。
import $ from 'jquery'
import 'whatwg-fetch'

export default {
  namespaced: true,
  state: {
    // 初始化时，务必要把所有的数据成员做初始化，否则后面数据的更新，将不会触发显示的更新
    dataList: {},
    repeatType: 0, // repeatType 1未重复、2重复
    err: null
  },
  mutations: {
    setWhereList(state, res) {
      state.dataList = res
    },
    repeatType(state, res) {
      state.repeatType = res
    },
    setError(state, err) {
      state.err = err
    }
  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    whereList({
      commit,
      rootState
    }, options) {
      $.ajax({
        url: 'http://itougu.jrj.com.cn/act/crud/11thActivity?limit=10&order=-createdAt',
        type: 'get',
        dataType: 'json'
      }).then(data => {
        commit('setWhereList', data)
      })
    },
    addData({
      commit,
      rootState
    }, options) {
      $.ajax({
        url: 'http://itougu.jrj.com.cn/act/crud/11thActivity',
        type: 'post',
        dataType: 'json',
        headers: {
          'content-type': 'application/json'
        },
        data: JSON.stringify({
          'userName': options.userName,
          'phone': options.phone,
          'bizsource': options.bizsource,
          'tgqdcode': options.tgqdcode,
          'createDataTime': options.createDataTime,
          'msg': options.msg,
          'boolean': options.boolean
        })
      }).then(data => {
        // console.log(data)
      })
    },
    repeatFind({
      commit,
      rootState
    }, options) {
      $.ajax({
        url: 'http://itougu.jrj.com.cn/act/crud/11thActivity?where={"phone":"' + options.phone + '","boolean":true}',
        type: 'get',
        dataType: 'json'
      }).then(data => {
        if (data.length === 0) {
          commit('repeatType', 1)
        } else {
          commit('repeatType', 2)
        }
      })
    }
  }
}