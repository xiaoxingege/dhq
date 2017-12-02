/*
 * 同步形式的store，设置好state中的值即可
 * namespaced为true，是为了避免store的module之间，getters、mutations、actions发生命名冲突
 */

// whatwg-fetch仅能在浏览器环境使用。
// import 'whatwg-fetch'
import fetch from '../z3tougu/util/z3fetch'
import {
  domain
} from '../z3tougu/config'


export default {
  namespaced: true,
  state: {
    // 初始化时，务必要把所有的数据成员做初始化，否则后面数据的更新，将不会触发显示的更
    stockStyle: {},
    /* topicData:{
     heatIndex:[],
     chngPct:[],
     keepDaysToday:[],
     name:[]
     },
     industryData:{
     heatIndex:[],
     chngPct:[],
     keepDaysToday:[],
     name:[]
     } */
    topicData: [],
    industryData: []
  },
  mutations: {
    updateStockStyle(state, stockStyle) {
      state.stockStyle = stockStyle
    },
    setTopicAndIndustry(state, result) {
      if (result.errCode === 0) {
        for (var i = 0; i < result.data.题材板块.length; i++) {
          state.topicData[i] = {
            heatIndex: result.data.题材板块[i].topicMarket.heatIndex,
            chngPct: result.data.题材板块[i].topicMarket.chngPct,
            keepDaysToday: result.data.题材板块[i].topicMarket.keepDaysToday,
            name: result.data.题材板块[i].topicName
          }
        }
        for (var j = 0; j < result.data.行业板块.length; j++) {
          state.industryData[j] = {
            heatIndex: result.data.行业板块[j].induMarket.heatIndex,
            chngPct: result.data.行业板块[j].induMarket.chngPct,
            keepDaysToday: result.data.行业板块[j].induMarket.keepDaysToday,
            name: result.data.行业板块[j].induName
          }
        }
      }
      /* function compare(property){
       return function(a,b){
       var value1 = a[property];
       var value2 = b[property];
       return value1 - value2;
       }
       }
       let arr1 = result.data.题材板块.sort(compare('chngPct'))
       console.log(arr1)*/
      // if(result.errCode === 0){
      //   for(var i=0; i<result.data.题材板块.length; i++){
      //       state.topicData.heatIndex.push(result.data.题材板块[i].topicMarket.heatIndex)
      //       state.topicData.chngPct.push(result.data.题材板块[i].topicMarket.chngPct)
      //       state.topicData.keepDaysToday.push(result.data.题材板块[i].topicMarket.keepDaysToday)
      //       state.topicData.name.push(result.data.题材板块[i].topicName)
      //   }
      //   for(var j=0; j<result.data.行业板块.length; j++){
      //       state.industryData.heatIndex.push(result.data.行业板块[j].induMarket.heatIndex)
      //       state.industryData.chngPct.push(result.data.行业板块[j].induMarket.chngPct)
      //       state.industryData.keepDaysToday.push(result.data.行业板块[j].induMarket.keepDaysToday)
      //       state.industryData.name.push(result.data.行业板块[j].induName)
      //   }
      // }else{
      //     state.topicData = null
      //     state.industryData = null
      // }
    }
  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    queryCustomers({
      commit
    }, {
      sortField

    }) {

      return fetch(`${domain}/openapi/personas/JRJ2001803730/customers?sort=${sortField}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data.kLine)
          commit('updateCustomersList', result.data)
          // console.log(result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    queryStockStyle({
      commit
    }) {
      return fetch(`${domain}/openapi/stockStyle.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('updateStockStyle', result.data)
        }
      })
    },
    getTopicAndIndustry({
      commit
    }) {
      return fetch(`${domain}/openapi/topicAndIndustry.shtml?index=keepDaysToday&limit=20`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        commit('setTopicAndIndustry', result)
      })
    }
  }
}