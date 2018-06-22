import fetch from '../dhq/util/z3fetch'
// import {
//   domain
// } from '../dhq/config'

const state = {
  news: {}
}

const mutationTypes = {
  UPDATE_NEWS: 'UPDATE_NEWS'
}

const actions = {
  queryNewsDetail({
    commit
  }, {
    newsUrl,
    iiid
  }) {
    const infoUrl = encodeURIComponent(newsUrl);
    const url = `https://sslapi.jrj.com.cn/itougu/mapi/wireless/information/queryNewsDetail?infourl=${infoUrl}&iiid=${iiid}`
    return fetch(url).then(res => res.json()).then((result) => {
      if (result.retCode === 0) {
        commit(mutationTypes.UPDATE_NEWS, result.data);
      } else {
        commit('ERROR', result, {
          root: true
        });
      }
    })
  }
}

const mutations = {
  [mutationTypes.UPDATE_NEWS](state, news) {
    state.news = news;
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}