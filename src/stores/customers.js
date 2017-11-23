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
    customersList: {},
    customerInfo: {},
    customerTag: {},
    customerAnaly: {},
    customerPosition: {}
  },
  mutations: {
    updateCustomersList(state, customers) {

      state.customersList = customers
    },
    updateCustomerInfo(state, data) {
      state.customerInfo = data
    },
    updateCustomerTag(state, data) {
      state.customerTag = data.data
    },
    updateCustomerAnaly(state, data) {
      state.customerAnaly = data
    },
    updatePositonCommand(state, data) {
      state.customerPosition = data
    }
  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    queryCustomers({
      commit
    }) {
      return fetch(`${domain}/openapi/personas/123/customers`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data.kLine)
          commit('updateCustomersList', result.data.data)
        }
      })
    },
    getCustomerInfo({
      commit
    }) {
      return fetch(`${domain}/openapi/personas/userBaseInfo/JRJ2001803730/win_100036`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('updateCustomerInfo', result.data)
        }
      })
    },
    getCustomerTag({
      commit
    }) {
      return fetch(`${domain}/openapi/personas/userTag/JRJ2001803730/win_100036?dateTime=201711`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('updateCustomerTag', result.data)
        }
      })
    },
    getAnalyAbility({
      commit
    }) {
      return fetch(`${domain}/openapi/personas/userPower/JRJ2001803730/win_100036`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('updateCustomerAnaly', result.data)
        }
      })
    },
    getPositonCommand({
      commit
    }) {
      return fetch(`${domain}/openapi/personas/positionCommand`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('updatePositonCommand', result.data)
        }
      })
    }
  }
}