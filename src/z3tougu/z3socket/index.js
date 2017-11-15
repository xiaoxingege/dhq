import SockJS from 'sockjs-client'
import {
  websocketDomain
} from '../config'
export default {
  ws: null,
  initWebsocket() {
    return new Promise((resolve, reject) => {
      const wsUrl = `${websocketDomain}/websocket/webSocketServer/sockjs`
      if (this.ws) {
        this.ws.close()
        this.ws = null
      }
      this.ws = new SockJS(wsUrl)
      this.ws.onopen = () => {
        resolve(this.ws)
      }
    })
  }
}