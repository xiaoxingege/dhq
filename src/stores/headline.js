import fetch from '../dhq/util/z3fetch'
// import {
//   domain
// } from '../dhq/config'

const state = {
  headlineList: []
}

const mutationTypes = {
  UPDATE_HEADLINE_LIST: 'UPDATE_HEADLINE_LIST'
}

const actions = {
  queryHeadline({
    commit
  }, {
    pageNo,
    pageSize
  }) {
    const url = `https://sslapi.jrj.com.cn/itougu/mapi/wireless/information/getMajorInfoList.jspa?pn=${pageNo}&ps=${pageSize}`;
    return fetch(url).then(res => res.json()).then((result) => {
      if (result.retCode === 0) {
        commit(mutationTypes.UPDATE_HEADLINE_LIST, result.data);
      } else {
        commit('ERROR', result, {
          root: true
        })
      }
    });
  }
}

const mutations = {
  [mutationTypes.UPDATE_HEADLINE_LIST](state, headlineList) {
    state.headlineList.push(...headlineList);
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}