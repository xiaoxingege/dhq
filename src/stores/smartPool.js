// whatwg-fetch仅能在浏览器环境使用。
import 'whatwg-fetch'
// import { domain } from '../z3tougu/config'

export const types = {
  SET_SMARTPOOLLIST: 'SET_SMARTPOOLLIST'
}

export default{
  state: {
    smartPoolList: []
  },
  getters: {
    smartPoolList: state => state.smartPoolList
  },
  mutations: {
    [types.SET_SMARTPOOLLIST] (state, list) {
      state.smartPoolList = list
    }
  },
  actions: {
    getSmartPoolList: function ({ commit }, { isRecommend, userId, orgCode }) {
      const url = `http://www.z3quant.com/openapi/fund/showFundPool.shtml?isRecommend=${isRecommend}&userId=${userId}&orgCode=${orgCode}`
      return fetch(url, { method: 'GET', mode: 'cors' }).then((res) => {
        return res.json()
      }).then(function (result) {
        if (result.errCode === 0) {
          commit(types.SET_SMARTPOOLLIST, result.data)
        }
      })
    }
  }
}
