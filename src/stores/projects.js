// initial state
const state = {
  list: []
}

// getters
const getters = {

}

// actions
const actions = {
  fetch({ commit }, params) {
    const $ = require('jquery')
    $.ajax({
      url:'http://jira2.jrj.com.cn/rest/api/latest/search?jql=parent=JRJZBXM-7819'
    }).then(data => {
      alert(data)
    })
  }
}

// mutations
const mutations = {
  fetch(state, projects) {
    state.list = projects
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
