import cookie from 'component-cookie'
// initial state
const state = {
  list: [],
  users: []
}

// getters
const getters = {

}

const buildQL = function(params, { dispatch }) {
  if (params.nickname) {
    return Promise.resolve(`assignee = ${params.nickname}`)
  } else {
    return dispatch('fetchUsers', { limit: 999 }).then(users => {
      let ql = users.map(user => {
        return `assignee = ${user.name}`
      }).join(' OR ')
      return Promise.resolve(ql)
    })
  }
}

// actions
const actions = {
  fetch({ commit, dispatch }, params) {
    const $ = require('jquery')
    return buildQL(params, { dispatch }).then(ql => {
      ql = `(${ql}) AND issuetype = Sub-task AND (status = "In Progress" OR status = 开始)`
      return $.ajax({
        url: 'http://itougu.jrj.com.cn/actm/proxy',
        method: 'POST',
        dataType: 'json',
        data: {
          url: `http://jira2.jrj.com.cn/rest/api/latest/search?jql=${encodeURIComponent(ql)}`,
          headers: {
            Authorization: 'Basic c2hpaHVhbmcucGlhbzpTZW9ubXl5dDc3'
          }
        }
      }).then(data => {
        data.issues = data.issues.filter((item) => {
          return item.fields.customfield_10900
        })
        commit('fetch', data.issues)
      })
    })
  },
  fetchUsers({ commit }, params) {
    const $ = require('jquery')
    const t = Date.now()
    const sign = require('utils/sign')
    const team = cookie('_p_team')
    if (!team) return
    params.where = params.where || '{}'
    let where = JSON.parse(params.where)
    where.team = team
    params.where = JSON.stringify(where)
    return $.ajax({
      url: 'http://itougu.jrj.com.cn/act/crud/projectUser',
      data: {
        ...params,
        t,
        sign: sign(params, t)
      },
      dataType: 'json'
    }).then(data => {
      commit('setUsers', data)
      return Promise.resolve(data)
    })
  },
  addUser({ commit }, data) {
    const $ = require('jquery')
    const sign = require('utils/sign')
    const t = Date.now()
    const team = cookie('_p_team')
    if (!team) return
    data.team = team
    return $.ajax({
      url: `http://itougu.jrj.com.cn/act/crud/projectUser?t=${t}&sign=${sign(data,t)}`,
      method: 'post',
      data: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      dataType: 'json'
    }).then(data => {
      void commit
      return Promise.resolve()
    })
  },
  delUser({ commit }, data) {
    const $ = require('jquery')
    const sign = require('utils/sign')
    const t = Date.now()
    return $.ajax({
      url: `http://itougu.jrj.com.cn/act/crud/projectUser/${data.id}?t=${t}&sign=${sign({},t)}`,
      method: 'delete',
      data: JSON.stringify({}),
      headers: {
        'content-type': 'application/json'
      },
      dataType: 'json'
    }).then(data => {
      void commit
      return Promise.resolve()
    })
  }
}

// mutations
const mutations = {
  fetch(state, projects) {
    state.list = projects
  },
  setUsers(state, users) {
    state.users = users
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
