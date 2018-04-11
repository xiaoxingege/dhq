import 'whatwg-fetch'
import config, { domain } from '../z3tougu/config'
import { formatDate } from 'utils/date'
import fetch from '../z3tougu/util/z3fetch'

export const PAGE_SIZE = 8;
export const types = {
  SET_WISDOMHEADLINES_LIST: 'SET_WISDOMHEADLINES_LIST',
  UPDATE_WISDOMHEADLINES_RELSTOCK: 'UPDATE_WISDOMHEADLINES_RELSTOCK',
  UPDATE_OPTIONALINFORMATION_RELSTOCK:'UPDATE_OPTIONALINFORMATION_RELSTOCK',
  SET_OPTIONALINFORMATION_LIST: 'SET_OPTIONALINFORMATION_LIST',
  SET_NEWSFLASH_LIST: 'SET_NEWSFLASH_LIST',
  SET_NEWSOPPORTUNITIES_LIST: 'SET_NEWSOPPORTUNITIES_LIST',
  SET_LISTEDCOMPANY_LIST: 'SET_LISTEDCOMPANY_LIST'
}
export default {
  state: {
    temporary: [],
    wisdomHeadlinesList: [], // 智头条
    optionalInformationList: [], // 自选情报
    newsOpportunities: [], // 机会挖掘
    newsFlash: [], // 7*24小时快讯
    listedCompany: [], // 上市公司
    relatedStocks: [],
    pageSize: PAGE_SIZE,
    loadingShow: true,
    newTime: '',
    userId: '',
    stockPool: null,
    optionalStockId:'',
    innerCode:''
  },
  getters: {
    wisdomHeadlinesList: state => state.wisdomHeadlinesList,
    optionalInformationList: state => state.optionalInformationList,
    newsOpportunities: state => state.newsOpportunities,
    newsFlash: state => state.newsFlash,
    listedCompany: state => state.listedCompany,
    pageSize: state => state.pageSize,
    loadingShow: state => state.loadingShow,
    newTime: state => state.newTime,
    stockPool: state => state.stockPool,
    optionalStockId: state => state.optionalStockId,
    innerCode: state => state.innerCode
  },
  mutations: {
    [types.SET_WISDOMHEADLINES_LIST](state, list) {
      const stocks = {}
      state.temporary = list
      state.wisdomHeadlinesList = state.wisdomHeadlinesList.concat(state.temporary)
      // 取出websocket 要更新的字段
      for (let intelligence of state.wisdomHeadlinesList) {
        let equityList = intelligence.equityList
        if (equityList.code !== null && equityList.code !== undefined) {
          stocks[equityList.code] = equityList
        }
        // for (let stock of equityList) {
        //   stocks[stock.code] = stock
        // }
      }
      state.relatedStocks = stocks
    },
    [types.SET_OPTIONALINFORMATION_LIST](state, list) {
      let newTime = list.newTime
      const stocks = {}
      state.temporary = list.rows
      if(newTime === null){
        state.optionalInformationList = state.optionalInformationList.concat(state.temporary)
      }else{
        state.optionalInformationList = state.temporary.concat(state.optionalInformationList)
      }
      // 取出websocket 要更新的字段
      for (let intelligence of state.optionalInformationList) {
        let equityList = intelligence.equityList
        stocks[equityList.code] = equityList
      }
      state.relatedStocks = stocks
    },
    [types.SET_NEWSFLASH_LIST](state, list) {
      state.newsFlash = list
    },
    [types.SET_NEWSOPPORTUNITIES_LIST](state, list) {
      state.newsOpportunities = list
    },
    [types.SET_LISTEDCOMPANY_LIST](state, list) {
      state.listedCompany = list
    },
    [types.UPDATE_WISDOMHEADLINES_RELSTOCK](state, stock) {
      const stocks = state.relatedStocks
      stocks[stock.innerCode].price = stock.price !== null ? parseFloat(stock.price).toFixed(2) : config.emptyValue
      stocks[stock.innerCode].chngPct = stock.curChngPct !== null ? parseFloat(stock.curChngPct).toFixed(2) : config.emptyValue
    },
    [types.UPDATE_OPTIONALINFORMATION_RELSTOCK](state, stock) {
      const stocks = state.relatedStocks
      stocks[stock.innerCode].price = stock.price !== null ? parseFloat(stock.price).toFixed(2) : config.emptyValue
      stocks[stock.innerCode].chngPct = stock.curChngPct !== null ? parseFloat(stock.curChngPct).toFixed(2) : config.emptyValue
    },
    setMask(state, visible) {
      state.loadingShow = visible
    },
    getNewTime(state, time) {
      if(time === null){
          state.newTime = time
      }else{
        state.newTime = formatDate(time,'yyyy-MM-dd hh:mm:ss')
      }
    },
    setStockPool(state, result) {
      state.stockPool = result
      for(let i = 0; i< 1; i++) {
        state.optionalStockId = result[0].poolId
        var equityPool = result[0].equityPool
        if(equityPool === null){
          state.innerCode = ''
        }else{
          for(let j = 0; j < equityPool.length; j++) {
            state.innerCode  += equityPool[j].innerCode + ','
          }
          var str = state.innerCode.substring(0,state.innerCode.length-1)
          state.innerCode = str
        }
      }
    },
    setOptionalStockId(state,result){
      state.optionalStockId = result.id
      state.innerCode = result.innerCode
    },
    setOptionalinformationInit(state,result){
      state.optionalInformationList = result
    }
  },
  actions: {
    // 获取智头条数据
    getWisdomHeadlinesList({ commit }, { page, isTop, newTime }) {
      commit('setMask', true)
      const url = `${domain}/openapi/news/wisdomHeadline.shtml?&page=${page}&istop=${isTop}&newTime=${newTime}`
      return fetch(url, {
        method: 'GET',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0 && JSON.stringify(result.data) !== '{}') {
          commit(types.SET_WISDOMHEADLINES_LIST, result.data.rows)
          commit('getNewTime', result.data.newTime)
          commit('setMask', false)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      }).catch(v2 => {
        console.log(v2)
      });
    },
    // 获取自选情报数据
    getOptionalInformation({ commit }, { innerCode, page, isTop, newTime }) {
      commit('setMask', true)
      const url = `${domain}/openapi/news/selfSelectNews.shtml?innerCode=${innerCode}&page=${page}&istop=${isTop}&newTime=${newTime}`
      return fetch(url, {
        method: 'GET',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0 && JSON.stringify(result.data) !== '{}') {
          commit('getNewTime', result.data.newTime)
          commit(types.SET_OPTIONALINFORMATION_LIST, result.data)
          commit('setMask', false)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      }).catch(v2 => {
        console.log(v2)
      });
    },
    // 获取7*24快讯数据
    getNewsFlashList({ commit }, { page, isTop, newTime }) {
      const url = `${domain}/openapi/news/flashNews.shtml?&page=${page}&istop=${isTop}&newTime=${newTime}`
      return fetch(url, {
        method: 'GET',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit(types.SET_NEWSFLASH_LIST, result.data)
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      }).catch(v2 => {
        console.log(v2)
      });
    },

    // 获取机会挖掘数据
    getNewsOpportunities({ commit }, { type, page }) {
      const url = `${domain}/openapi/news/newsExcavate.shtml?chance=${type}&page=${page}`
      return fetch(url, {
        method: 'GET',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit(types.SET_NEWSOPPORTUNITIES_LIST, result.data);
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      }).catch(v2 => {
        console.log(v2)
      });
    },
    // 获取上市公司数据
    getListedCompany({ commit }, { page }) {
      const url = `${domain}/openapi/news/listedCom.shtml?page=${page}`
      return fetch(url, {
        method: 'GET',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit(types.SET_LISTEDCOMPANY_LIST, result.data);
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      }).catch(v2 => {
        console.log(v2)
      });
    },
    // 获取股票池列表
    getStockPool({ commit, state, rootState }) {
      const userId = rootState.user.userId
      if (!userId) {
        commit('setStockPool', [])
        return
      }
      return fetch(`${domain}/openapi/filter/stock/listEquityPool.shtml?userId=304f525a-9af2-4a60-b15e-00fc552917bb`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('setStockPool', result.data)
        }
      })
    }
  }
}
