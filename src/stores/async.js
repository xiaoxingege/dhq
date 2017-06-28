import 'whatwg-fetch'

export default {
  namespaced: true,
  state: {
    content: ''
  },
  mutations: {
    fetch (state, content) {
      state.content = content
    }
  },
  actions: {
    fetch ({ commit }) {
      fetch('/package.json').then((res) => {
        return res.json()
      }).then(body => {
        commit('fetch', body.name)
      })
    }
  }
}
