import SockJS from 'sockjs-client'
export default{
  ws: null,
  initWebsocket () {
    const wsUrl = 'http://10.77.4.83:8082/websocket/webSocketServer/sockjs'
    const ws = this.ws
    if (ws === null || ws.readyState === 3) {
      if (ws) {
        ws.close()
      }
      this.ws = new SockJS(wsUrl)
    }
    return ws
  },
  getWs () {
    return this.ws
  }
}
