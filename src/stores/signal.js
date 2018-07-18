/*
 * 同步形式的store，设置好state中的值即可
 * namespaced为true，是为了避免store的module之间，getters、mutations、actions发生命名冲突
 */

// whatwg-fetch仅能在浏览器环境使用。
// import 'whatwg-fetch'
import fetch from '../dhq/util/z3fetch'
/* import config, {
  domain
} from '../dhq/config'
 */
export const mutationTypes = {

}
const PAGE_SIZE = 20
export default {
  namespaced: true,
  state: {
    // 初始化时，务必要把所有的数据成员做初始化，否则后面数据的更新，将不会触发显示的更
    signalRealTime: [],
    signalTrend: {},
    signalType: [],
    pagesize: PAGE_SIZE,
    page: 0,
    total: 0
  },
  mutations: {
    updateSignalRealTime(state, signalRealTime) {
      state.signalRealTime = signalRealTime
    },
    updateSignalTrend(state, signalTrend) {
      state.signalTrend = signalTrend
    },
    updateSignalType(state, signalType) {
      state.signalType = signalType
      //   console.log(state.signalType)
    },
    updatePage(state, options) {
      // console.log(options.totalPages)
      state.pagesize = options.pageSize || PAGE_SIZE
      state.page = options.page || 1
      state.total = options.totalPages
    }

  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    querySignalRealTime({
      commit
    }, {
      type,
      size
    }) {
      return fetch(`https://sslapi.jrj.com.cn/zxhq/sapi/discover/signal-list?type=${type}&size=${size}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.retcode === 0) {
          commit('updateSignalRealTime', result.data.signalList)        
        } else {
          // commit('ERROR', result, {
          //   root: true
          // })
          commit('updateSignalRealTime',[])
        }
      })
    },
    querySignalType({
      commit
    }) {
      return fetch('https://sslapi.jrj.com.cn/zxhq/sapi/discover/signal-type', {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.retcode === 0) {
          commit('updateSignalType', result.data.items)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    querySignalTrend({
      commit
    }, {
      trendTypeId,
      page,
      pagesize
    }) {
      page = page || 0
      pagesize = pagesize || PAGE_SIZE
      return fetch(`https://sslapi.jrj.com.cn/itougu/mapi/wireless/smartStock/choiceStock/trendAnalysis2List/${trendTypeId}?start=${page}`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.retCode === 0) {
          commit('updateSignalTrend', result.data)
        //  console.log(result.data)
          commit('updatePage', {
            page: result.data.nextStart,
            totalPages: result.data.num
          })
        } else {
          // commit('ERROR', result, {
          //   root: true
          // })
          commit('updateSignalTrend', [])
        }
      })
    }

  }
}