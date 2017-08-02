import 'whatwg-fetch'

// initial state
const state = {
  industries: null,
  newData: null
}

// getters
const getters = {

}

const mutationsTypes = {
  QUERY_RANGE_BY_CODE: 'QUERY_RANGE_BY_CODE',
  ERROR: 'ERROR'
}
    // actions
const actions = {
  queryRangeByCode ({ commit, state }, { code }) {
        // const url = '/dbus/json/' + (code ? 'auth/' : '') + code + '.json'
    const url = 'mock/' + code + '.json'
    return fetch(url).then((res) => {
      return res.json()
    }).then((data) => {
      commit(mutationsTypes.QUERY_RANGE_BY_CODE, data.children)
    }).catch(() => { commit(mutationsTypes.ERROR) })
  }
}

// mutations
const mutations = {
  [mutationsTypes.QUERY_RANGE_BY_CODE] (state, industries) {
    state.industries = industries
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
