// import 'whatwg-fetch'
import fetch from '../dhq/util/z3fetch'
// import $ from 'jquery'
export default {
  namespaced: true,
  state: {
    conversation: [],
    messageList: []
  },
  mutations: {
    conversation(state, data) {
      state.conversation = data
    },
    messageList(state, data) {
      state.messageList.push(...data);
    },
    oldmessageList(state, data) {
      if (data.length) {
        data[0].showTime = true;

      }
      state.messageList = data.concat(state.messageList);
    }
  },
  actions: {
    // 发送消息接口
    sendSpaceConsultation({
      rootState,
      commit,
      state
    }, data) {
      const url = `https://sslapi.jrj.com.cn/itougu/mapi/wireless/im/message/send`;
      const content = JSON.stringify({
        'messageBody': {
          'content': `${data.message}`,
          'paramDesc': [],
          'contentType': 1,
          'senderId': rootState.auth.passportId
        },
        'sendType': 'userIds',
        'userIds': [`${data.adviserId}`]
      });
      return fetch(url, {
        method: 'POST',
        body: `data=${content}`
      }).then((res) => {
        return res.json()
      }).then((data) => {

      });
    },
    // 消息列表接口
    getSpaceConsultation({
      commit,
      state
    }, data) {
      const url = `https://sslapi.jrj.com.cn/itougu/mapi/wireless/im/message/list?maxId=${data.maxId}&userId=${data.adviserId}&size=10&`;
      return fetch(url).then((res) => {
        return res.json()
      }).then((data) => {
        if (data.retCode === 0) {
          commit('conversation', data.data.conversation);
          commit('messageList', data.data.messageList);
        }
      });
    },
    getSpaceConsultationold({
      commit,
      state
    }, data) {
      const url = `https://sslapi.jrj.com.cn/itougu/mapi/wireless/im/message/list?minId=${data.minId}&userId=${data.adviserId}&size=10&`;
      return fetch(url).then((res) => {
        return res.json()
      }).then((data) => {
        if (data.retCode === 0) {
          commit('oldmessageList', data.data.messageList);
        }
      });
    }

  }
}