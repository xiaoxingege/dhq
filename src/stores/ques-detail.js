/*
 * 同步形式的store，设置好state中的值即可
 * namespaced为true，是为了避免store的module之间，getters、mutations、actions发生命名冲突
 */

// whatwg-fetch仅能在浏览器环境使用。
import 'whatwg-fetch'
// import getQueryString from 'utils/getQueryString'

// const PAGE_SIZE = 10

export default {
  namespaced: true,
  state: {
    dataList: null,
    textContent: '',
    answeredTimes: '',
    err: null
  },
  mutations: {
    setData (state, res) {
      state.dataList = res.answers
      state.textContent = res.textContent
      state.answeredTimes = res.answeredTimes
    },
    setError (state, err) {
      state.err = err
    }
  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    fetch ({ commit, rootState }, options) {
    //   fetch(`http://itougu.jrj.com.cn/xlive/course/getCourseDetail.jspa?courseId=${options.courseId}&tgUserId=${options.userId}`, {
      fetch('http://itougu.jrj.com.cn/ques/ask/baidu/detail.jspa?askid=5402&passportId=141120010079383950', {
        credentials: 'include'
      }).then(res => {
        return res.json()
      }).then(json => {
        if (json.resCode === 0) {
          commit('setData', json.data)
        } else {
          commit('setError', {
            retCode: json.retCode,
            msg: json.msg
          })
        }
      })
    }
  }
}
