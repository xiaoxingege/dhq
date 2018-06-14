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
        const url = `http://mapi.itougu.jrj.com.cn/wireless/information/getMajorInfoList.jspa?pn=${pageNo}&ps=${pageSize}`;
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
<<<<<<< HEAD
    [mutationTypes.UPDATE_HEADLINE_LIST](state, headlineList) {
        state.headlineList = headlineList;
    }
=======
  [mutationTypes.UPDATE_HEADLINE_LIST](state, headlineList) {
    state.headlineList.push(...headlineList);
  }
>>>>>>> e45fd392a7597dae9e17e9988687c32df5d8fde0
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}