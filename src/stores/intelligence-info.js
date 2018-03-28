import 'whatwg-fetch'
import {
  domain
} from '../z3tougu/config'
import fetch from '../z3tougu/util/z3fetch'

export const types = {
  SET_WISDOMHEADLINES_LIST: 'SET_WISDOMHEADLINES_LIST'
}
export default {
  state: {
    wisdomHeadlinesList: [], // 智头条
    totalPage: 0, // 总页数
    pageSize: 0, // 第几页
    flag: 1 // 标识：1-表示智头条，2-表示7x24快讯
  },
  getters: {
    wisdomHeadlinesList: state => state.wisdomHeadlinesList
  },
  mutations: {
    [types.SET_WISDOMHEADLINES_LIST](state, list) {
      state.wisdomHeadlinesList = list
    }
  },
  actions: {
    getWisdomHeadlinesList({
      commit
    }, {
      flag,
      pageSize
    }) {
      const url = `${domain}/openapi/news/wisdomHeadline.shtml?flag=${flag}&page=${pageSize}`
      return fetch(url, {
        method: 'GET',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        commit(types.SET_WISDOMHEADLINES_LIST, result.data);
      }).catch(v2 => {
        console.log(v2)
      });
    }
  }
}