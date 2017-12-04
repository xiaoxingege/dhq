/*
 * 同步形式的store，设置好state中的值即可
 * namespaced为true，是为了避免store的module之间，getters、mutations、actions发生命名冲突
 */

// whatwg-fetch仅能在浏览器环境使用。
import 'whatwg-fetch'

export default {
    namespaced: true,
    state: {
        // 初始化时，务必要把所有的数据成员做初始化，否则后面数据的更新，将不会触发显示的更新
        dataList: {},
        LastLotteryData:{},
        getTopUserListData:{},
        getTopUserListData1:{},
        getTopUserListData2:{},
        getTopUserListData3:{},
        getWinerUserListData:{},
        id:0,
        letteryType:false,
        openType:false,
        closeType:false,
        err: null
    },
    mutations: {
        getLastLotteryData(state, res){
            state.LastLotteryData = res
        },
        getTopUserListData(state, res){
            state.getTopUserListData = res
        },
        getTopUserListData1(state, res){
            state.getTopUserListData1 = res
        },
        getTopUserListData2(state, res){
            state.getTopUserListData2 = res
        },
        getTopUserListData3(state, res){
            state.getTopUserListData3 = res
        },
        getWinerUserListData(state, res){
            state.getWinerUserListData = res
        },
        setId(state, res){
            state.id = res
        },
        letteryType(state, res){
            state.letteryType = res
        },
        openType(state, res){
            state.openType = res
        },
        closeType(state, res){
            state.closeType = res
        },
        setError(state, err) {
            state.err = err
        }
    },
    // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
    actions: {
        getLastLottery({
            commit,
            rootState
        }, options) {
            commit('setId', options.id || 0)
            fetch(`http://itougu.jrj.com.cn/smartstock/dlottery/getLastLottery.jspa?id=${options.id}`, {
              credentials: 'include'
            }).then(res => {
              return res.json()
            }).then(json => {
              if (json.retCode === 0) {
                commit('getLastLotteryData', json.data)
              } else {
                commit('setError', {
                  retCode: json.retCode,
                  msg: json.msg
                })
              }
            })
        },
        getTopUserList({
            commit,
            rootState
        }, options) {
            fetch(`http://itougu.jrj.com.cn/smartstock/dlottery/getTopUserList/${options.level}.jspa`, {
              credentials: 'include'
            }).then(res => {
              return res.json()
            }).then(json => {
              if (json.retCode === 0) {
                  if(options.type){
                      commit('getTopUserListData'+options.level, json.data)
                  }else{
                      commit('getTopUserListData', json.data)
                  }

              } else {
                commit('setError', {
                  retCode: json.retCode,
                  msg: json.msg
                })
              }
            })
        },
        lettery({
            commit,
            rootState
        }, options) {
            fetch(`http://itougu.jrj.com.cn/smartstock/dlottery/lettery/${options.level}.jspa`, {
              credentials: 'include'
            }).then(res => {
              return res.json()
            }).then(json => {
              if (json.retCode === 0) {
                commit('letteryType', true)
              } else {
                commit('setError', {
                  retCode: json.retCode,
                  msg: json.msg
                })
              }
            })
        },
        openLettery({
            commit,
            rootState
        }, options) {
            fetch(`http://itougu.jrj.com.cn/smartstock/dlottery/openLettery.jspa`, {
              credentials: 'include'
            }).then(res => {
              return res.json()
            }).then(json => {
              if (json.retCode === 0) {
                commit('openType', true)
              } else {
                commit('setError', {
                  retCode: json.retCode,
                  msg: json.msg
                })
              }
            })
        },
        closeDiagnose({
            commit,
            rootState
        }, options) {
            fetch(`http://itougu.jrj.com.cn/smartstock/dlottery/closeDiagnose.jspa`, {
              credentials: 'include'
            }).then(res => {
              return res.json()
            }).then(json => {
              if (json.retCode === 0) {
                commit('closeType', true)
              } else {
                commit('setError', {
                  retCode: json.retCode,
                  msg: json.msg
                })
              }
            })
        },
        getWinerUserList({
            commit,
            rootState
        }, options) {
            fetch(`http://itougu.jrj.com.cn/smartstock/dlottery/getWinerUserList/${options.level}.jspa`, {
              credentials: 'include'
            }).then(res => {
              return res.json()
            }).then(json => {
              if (json.retCode === 0) {
                commit('getWinerUserListData', json.data)
              } else {
                commit('setError', {
                  retCode: json.retCode,
                  msg: json.msg
                })
              }
            })
        }
        //
    }
}
