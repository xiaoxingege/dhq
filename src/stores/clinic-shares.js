/*
 * 同步形式的store，设置好state中的值即可
 * namespaced为true，是为了避免store的module之间，getters、mutations、actions发生命名冲突
 */

// whatwg-fetch仅能在浏览器环境使用。
// import 'whatwg-fetch'
import fetch from '../z3tougu/util/z3fetch'
import {
  domain
} from '../z3tougu/config'

const mutationTypes = {
  UPDATE_NEWSINFO: 'UPDATE_NEWSINFO'
}

export default {
  namespaced: true,
  state: {
    // 初始化时，务必要把所有的数据成员做初始化，否则后面数据的更新，将不会触发显示的更

    smartStock: {
      score: 0,
      shortDescribe: '',
      midDescribe: '',
      wineRate: 0
    }, // 打分
    // radarData: [], // 雷达图
    radarData: {}, // 雷达图
    indexFace: [], // 资金面
    baseFace: [], // 基本面,
    techFace: [],
    industryFace: [],
    newsInfo: []
  },
  mutations: {

    updateSmartStock(state, smartStock) {

      state.smartStock = smartStock
    },

    updateRadarData(state, radarData) {
      state.radarData = radarData
      // console.log(state.radarData.fundValue)
    },
    updateIndexFace(state, indexFace) {
      state.indexFace = indexFace
      // console.log(state.indexFace[0])
    },
    updateBaseFace(state, baseFace) {
      state.baseFace = baseFace
    },
    updateTechFace(state, techFace) {
      state.techFace = techFace
    },
    updateIndustryFace(state, indusFace) {
      state.industryFace = indusFace
    },
    [mutationTypes.UPDATE_NEWSINFO](state, newsinfo) {
      state.newsInfo = newsinfo;
    }
  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {

    querySmartStock({
      commit
    }, {
      innerCode
    }) {
      return fetch(`${domain}/openapi/smartStock/${innerCode}.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {

        if (result.errCode === 0) {
          commit('updateSmartStock', result.data)
          // console.log(result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    queryRadarData({
      commit
    }, {
      innerCode
    }) {
      return fetch(`${domain}/openapi/smartStock/${innerCode}.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data)
          commit('updateRadarData', result.data.radarData)
          // console.log(result.data.radarData)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    queryIndexFace({
      commit
    }, {
      innerCode
    }) {
      return fetch(`${domain}/openapi/smartStock/capitalFace/${innerCode}.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data)
          commit('updateIndexFace', result.data)
          // console.log(result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    queryBaseFace({
      commit
    }, {
      innerCode
    }) {
      return fetch(`${domain}/openapi/smartStock/baseFace/${innerCode}.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data)
          commit('updateBaseFace', result.data)
          // console.log(result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    queryTechFace({
      commit
    }, {
      innerCode
    }) {
      return fetch(`${domain}/openapi/smartStock/techFace/${innerCode}.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data)
          commit('updateTechFace', result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    queryIndustryFace({
      commit
    }, {
      innerCode
    }) {
      return fetch(`${domain}/openapi/smartStock/induFace/${innerCode}.shtml`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          // console.log(result.data)
          commit('updateIndustryFace', result.data)
          // console.log(result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    },
    queryNewsInfo({
      commit
    }, {
      innerCode
    }) {
      const url = `${domain}/openapi/smartStock/infoFace/${innerCode}.shtml`
      fetch(url, {
        mode: 'cors'
      }).then((res) => res.json()).then((result) => {
        if (result.errCode === 0) {
          commit(mutationTypes.UPDATE_NEWSINFO, result.data);
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      })
    }
  }
}