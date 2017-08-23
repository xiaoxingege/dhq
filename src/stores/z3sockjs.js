
import z3websocket from '../z3tougu/z3socket'

const mutationTypes = {
  'UPDATE_CONNECTION_STATUS': 'UPDATE_CONNECTION_STATUS',
  'UPDATE_MESSAGE': 'UPDATE_MESSAGE'
}
const state = {
  isConnection: false,
  message: ''
}

const actions = {
  init ({ state, commit }) {
    return new Promise((resolve, reject) => {
      z3websocket.initWebsocket()
      z3websocket.ws.onopen = () => {
        commit(mutationTypes.UPDATE_CONNECTION_STATUS, true)
        resolve()
      }
      z3websocket.ws.onmessage = (event) => {
        commit(mutationTypes.UPDATE_MESSAGE, event.data)
      }
      z3websocket.ws.onclose = () => {
        commit(mutationTypes.UPDATE_CONNECTION_STATUS, false)
      }
    })
  },
  send ({ state, commit }, msg) {
    console.info('[websocket:send message]' + JSON.stringify(msg))
    z3websocket.ws.send(JSON.stringify(msg))
  }
}

const mutations = {
  [mutationTypes.UPDATE_MESSAGE] (state, msg) {
    state.message = JSON.parse(msg)
  },
  [mutationTypes.UPDATE_CONNECTION_STATUS] (state, status) {
    state.isConnection = status
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
