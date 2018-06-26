 // import 'whatwg-fetch'
 import fetch from '../dhq/util/z3fetch'
 export default {
     namespaced: true,
     state: {
         roomData: [],
         roomTime: []
     },
     mutations: {
         setStudioData(state, data) {
             state.roomData = data
         },
         setStudioTime(state, data) {
             state.roomTime = data
         }
     },
     actions: {
         // 获取工作室信息
         getStudioInfo({ commit, state }, data) {
             return new Promise((resolve, reject) => {
                 // const url = ` http://mapi.itougu.jrj.com.cn/wireless/xlive/getStudioInfo?rid=${data.roomId}`;
                 const url = `https://sslapi.jrj.com.cn/itougu/mapi/wireless/xlive/getStudioInfo?rid=${data.roomId}`;
                 return fetch(url, {
                     headers: {
                         'APPVER': '7.0.0'
                     }
                 }).then((res) => {
                     return res.json()
                 }).then((data) => {
                     if (data.retCode) {
                         // 如果有code 则出现异常
                     } else {
                         commit('setStudioData', data);
                         resolve();
                     }
                 });
             });

         },
         // 获取服务时间
         getServerTime({ commit, state }, data) {
             const url = `https://itougu.jrj.com.cn/smartstock/api/excellent/checkAuth.jspa?adviserId=${data.adviserId}`;
             return fetch(url).then((res) => {
                 return res.json()
             }).then((data) => {
                 if (data.retCode === 0) {
                     commit('setStudioTime', data.data);
                 } else {
                     // 如果有code 则出现异常
                 }
             });

         }
     }
 }