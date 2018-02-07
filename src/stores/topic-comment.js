/*
 * 同步形式的store，设置好state中的值即可
 * namespaced为true，是为了避免store的module之间，getters、mutations、actions发生命名冲突
 */

// whatwg-fetch仅能在浏览器环境使用。
// import $ from 'jquery'
import 'whatwg-fetch'

export default {
  namespaced: true,
  state: {
    // 初始化时，务必要把所有的数据成员做初始化，否则后面数据的更新，将不会触发显示的更新
    dataList: null,
    data:null,
    dataType: false, // repeatType 1未重复、2重复
    err: null,
    appItemId:8
  },
  mutations: {
    setData(state, res) {
      state.dataList = res.data.data
      state.data = res.data
      state.dataType = true
    },
    setAppItemId(state, res){
        state.appItemId = res
    },
    setError(state, err) {
      state.err = err
    }
  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
      whereList({
        commit,
        rootState,
        state
      }, options) {
        commit('setAppItemId', options.appItemId)
        fetch(`http://itougu.jrj.com.cn/match/v7/cment/commentList.jspa?appItemId=${state.appItemId}&bizType=8&pageSize=10`, {
          credentials: 'include'
        }).then(res => {
          return res.json()
        }).then(json => {
            if(json.retCode === 0){
                commit('setData', json)
            }else{
                commit('setError', {
                    retCode: json.retCode,
                    msg: json.msg
                })
            }
        })
    },
    addComment({
      commit,
      rootState,
      dispatch,
      state
    }, options) {
        // `http://itougu.jrj.com.cn/comment/addComment.jspa?appItemId=${options.appItemId}&bizType=${options.bizType}&itemTitle=爱投顾&senderId=${options.senderId}&appId=${options.appId}&content=${options.content}&pubType=1&v=3.0&frm=${options.frm}&appVer=3.0&appType=3&receiverId=${options.receiverId || ''}&receiverName=${options.receiverName || ''}&replyRootId=${options.replyRootId || ''}&replyToId=${options.replyToId || ''}`







      fetch(`http://mapi.itougu.jrj.com.cn/wireless/comment/addComment/${options.appId}/${options.bizType}/${options.appItemId}`, {
        method: 'POST',
        body:`itemTitle=股市学院&content=${options.content}&type=1&receiverId=${options.receiverId || ''}&receiverName=${options.receiverName || ''}&replyRootId=${options.replyRootId || ''}&replyToId=${options.replyToId || ''}&senderName=大地震`,
        credentials: 'include'
      }).then(res => {
        return res.json()
      }).then(json => {
          if(json.retCode === 0){
              dispatch('whereList',{
                  appItemId:state.appItemId
              })
          }else{
              commit('setError', {
                  retCode: json.retCode,
                  msg: json.msg
              })
          }
          // if(json.success){
          //     dispatch('whereList',{
          //         appItemId:state.appItemId
          //     })
          // }else{
          //     commit('setError', {
          //         retCode: json.code,
          //         msg: json.message
          //     })
          // }
      })
    }
  }
}
