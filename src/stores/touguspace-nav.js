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
                         'APPVER': '7.0.0',
                         'accessToken': 'tqIFgibY1H2o16oipUVhUAVeWgbev2nkssmxKSw7HQfxcSvLuaXkh8kys44oUALr',
                         'passportId': '180626010006707696'
                             //  'passportId': '180522010063596180',
                             //  'accessToken': 'dNmwZmIWJLCjl1rl3igPNxsj8Vn2+97Aj72qoMaq7q92+FZHu8E5gcvaPSBS2/eh',
                             //  'APPVER': '7.0.0'
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
             return fetch(url, {
                 headers: {
                     'accessToken': 'tqIFgibY1H2o16oipUVhUAVeWgbev2nkssmxKSw7HQfxcSvLuaXkh8kys44oUALr',
                     'passportId': '180626010006707696'
                         //  'passportId': '180522010063596180',
                         //  'accessToken': 'dNmwZmIWJLCjl1rl3igPNxsj8Vn2+97Aj72qoMaq7q92+FZHu8E5gcvaPSBS2/eh',
                         //  'APPVER': '7.0.0'
                 }
             }).then((res) => {
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
 };