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

const PAGE_SIZE = 10
export default {
  namespaced: true,
  state: {
    // 初始化时，务必要把所有的数据成员做初始化，否则后面数据的更新，将不会触发显示的更
    customersList: {
      total: 0,
      code: 0,
      datas: []
    }, // paixu
    customersFuzzy: {
      total: 0,
      code: 0,
      datas: []
    }, // 模糊
    customerInfo: {},
    customerTag: {},
    customerAnaly: {},
    pagesize: PAGE_SIZE,
    page: 1,
    total: 0,
    customerPosition: {},
    customerAttention: {},
    fcId: 'JRJ2001803730'
  },
  mutations: {
    updateCustomersList(state, customers) {
      state.customersList = customers
      console.log(state.customersList)
    },
    updateCustomersFuzzy(state, customers) {
      state.customersFuzzy = customers
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
    },
    updatePage(state, options) {
      console.log(options.totalPages)
      state.pagesize = options.pageSize || PAGE_SIZE
      state.page = options.page || 1
      /* var total = Math.ceil(options.totalPages/state.pagesize) */
      console.log(state.page)
      console.log(state.pagesize)
      state.total = options.totalPages
    },
    updateAttention(state, data) {
      state.customerAttention = data
    },
    setFcId(state, data) {
      state.fcId = data
    }
  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    queryCustomers({
      commit
    }, {
      sortField,
      phone,
      name,
      acct,
      page,
      pagesize,
      fcId
    }) {
      page = page || 0
      pagesize = pagesize || PAGE_SIZE
      // pagesize 是第几页， pageNum 是每页显示的个数
      return fetch(`${domain}/openapi/personas/${fcId}/customers?sort=${sortField}&phone=${phone}&name=${name}&acct=${acct}&pageSize=${page}&pageNum=${pagesize}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data.kLine)
          commit('setFcId', fcId)
          commit('updateCustomersList', result.data)
          commit('updatePage', {
            totalPages: result.data.total
          })
          // console.log(result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    queryCustomersFuzzy({
      commit
    }, {
      field,
      paramValue,
      fcId
    }) {
      return fetch(`${domain}/openapi/personas/${fcId}/tips?field=${field}&value=${paramValue}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data.kLine)
          commit('updateCustomersFuzzy', result.data)
          // console.log(result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    getCustomerInfo({
      commit
    }, {
      clientPassport,
      fcId
    }) {
      return fetch(`${domain}/openapi/personas/userBaseInfo/${fcId}/${clientPassport}`, {
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
    }, {
      dateTime,
      clientPassport,
      fcId
    }) {
      return fetch(`${domain}/openapi/personas/userTag/${fcId}/${clientPassport}?dateTime=${dateTime}`, {
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
    }, {
      clientPassport,
      fcId
    }) {
      return fetch(`${domain}/openapi/personas/userPower/${fcId}/${clientPassport}`, {
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
    },
    setAttention({
      commit
    }, {
      star,
      clientPassport,
      fcId
    }) {
      const timestamp = Date.parse(new Date())
      return fetch(`${domain}/openapi/personas/stars/${fcId}/${clientPassport}?star=${star}&time=${timestamp}`, {
        method: 'PUT',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        commit('updateAttention', result.data)
      })
    }
  }
}