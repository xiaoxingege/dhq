import 'whatwg-fetch'
<<<<<<< HEAD
import config,{ domain } from '../z3tougu/config'
=======
import {
  domain
} from '../z3tougu/config'
>>>>>>> c5cb5d938ddc3e999f6c1a0061944850e15707f2
import fetch from '../z3tougu/util/z3fetch'

export const PAGE_SIZE = 8;
export const types = {
  SET_WISDOMHEADLINES_LIST: 'SET_WISDOMHEADLINES_LIST',
  UPDATE_WISDOMHEADLINES_RELSTOCK: 'UPDATE_WISDOMHEADLINES_RELSTOCK',
  SET_OPTIONALINFORMATION_LIST: 'SET_OPTIONALINFORMATION_LIST',
  SET_NEWSFLASH_LIST: 'SET_NEWSFLASH_LIST',
  SET_NEWSOPPORTUNITIES_LIST:'SET_NEWSOPPORTUNITIES_LIST',
  SET_LISTEDCOMPANY_LIST:'SET_LISTEDCOMPANY_LIST'
}
export default {
  state: {
<<<<<<< HEAD
   temporary:[],
   wisdomHeadlinesList:[], // 智头条
   optionalInformationList:[],// 自选情报
   newsOpportunities:[], // 机会挖掘
   newsFlash:[], // 自选情报
   listedCompany:[], // 上市公司
   relatedStocks:[],
  //  totalPage:0, // 总页数
   pageSize:PAGE_SIZE,
  //  flag:1, // 标识：1-表示智头条，2-表示7x24快讯
   innerCode:'',
   loadingShow:true,
   newTime:'',
   userId: '',
   stockPool: null
=======
    wisdomHeadlinesList: [], // 智头条
    totalPage: 0, // 总页数
    pageSize: 0, // 第几页
    flag: 1 // 标识：1-表示智头条，2-表示7x24快讯
>>>>>>> c5cb5d938ddc3e999f6c1a0061944850e15707f2
  },
  getters: {
    wisdomHeadlinesList: state => state.wisdomHeadlinesList,
    optionalInformationList: state => state.optionalInformationList,
    newsFlash: state => state.newsFlash,
    newsOpportunities: state => state.newsOpportunities,
    listedCompany: state => state.listedCompany,
    pageSize: state => state.pageSize,
    loadingShow: state => state.loadingShow,
    newTime: state => state.newTime,
    stockPool: state => state.stockPool
  },
  mutations: {
<<<<<<< HEAD
    [types.SET_WISDOMHEADLINES_LIST] (state,list){
      const stocks = {}
      state.temporary = list
      state.wisdomHeadlinesList = state.wisdomHeadlinesList.concat(state.temporary)
      // 取出websocket 要更新的字段
      for (let intelligence of state.wisdomHeadlinesList) {
        let equityList = intelligence.equityList
        // console.log(equityList.code)
        if(equityList.code !== null && equityList.code !== undefined){
          stocks[equityList.code] =equityList
        }
        // for (let stock of equityList) {
        //   stocks[stock.code] = stock
        // }
      }
      state.relatedStocks = stocks
    },
    [types.SET_OPTIONALINFORMATION_LIST] (state,list){
      const stocks = {}
      state.temporary = list
      state.optionalInformationList = state.optionalInformationList.concat(state.temporary)
      // 取出websocket 要更新的字段
      for (let intelligence of state.optionalInformationList) {
        let equityList = intelligence.equityList
        // console.log(equityList)
         stocks[equityList.code] =equityList
        // for (let stock of equityList) {
        //   stocks[stock.code] = stock
        // }
      }
      state.relatedStocks = stocks
    },
    [types.SET_NEWSFLASH_LIST] (state,list){
      state.newsFlash = list
    },
    [types.SET_NEWSOPPORTUNITIES_LIST] (state,list){
      state.newsOpportunities = list
    },
    [types.SET_LISTEDCOMPANY_LIST] (state,list){
      state.listedCompany = list
    },
    [types.UPDATE_WISDOMHEADLINES_RELSTOCK](state, stock) {
      const stocks = state.relatedStocks
      stocks[stock.innerCode].price = stock.price !== null ? parseFloat(stock.price).toFixed(2) : config.emptyValue
      stocks[stock.innerCode].chngPct = stock.curChngPct !== null ? parseFloat(stock.curChngPct).toFixed(2) : config.emptyValue
    },
    setMask (state, visible) {
      state.loadingShow = visible
    },
    getNewTime (state,time){
      state.newTime = time
    },
    setStockPool(state, result) {
      state.stockPool = result
    }
  },
  actions: {
    // 获取智头条数据
    getWisdomHeadlinesList ({ commit }, { page,istop,isTop,newTime }) {
      commit('setMask', true)
      const url = `${domain}/openapi/news/wisdomHeadline.shtml?&page=${page}&istop=${isTop}&newTime=${newTime}`
      return fetch(url, {
        method: 'GET',
        mode: 'cors'
      }).then((res) => { return res.json() }).then(result => {
        if(result.errCode === 0 && JSON.stringify(result.data)!== '{}'){
          commit(types.SET_WISDOMHEADLINES_LIST,result.data.rows)
          commit('getNewTime',result.data.newTime)
          commit('setMask', false)
        }else{
          commit('ERROR', result, { root: true })
        }
      }).catch(v2 => {
        console.log(v2)
      });
    },
    // 获取自选情报数据
    getOptionalInformation ({ commit }, { innerCode, page ,isTop,newTime }) {
      commit('setMask', true)
      const url = `${domain}/openapi/news/selfSelectNews.shtml?innerCode=${innerCode}&page=${page}&istop=${isTop}&newTime=${newTime}`
      return fetch(url, {
        method: 'GET',
        mode: 'cors'
      }).then((res) => { return res.json() }).then(result => {
        if(result.errCode === 0) {
          commit('setMask', false)
          commit('getNewTime', result.data.newTime)
          commit(types.SET_OPTIONALINFORMATION_LIST, result.data.rows)
        }else{
          commit('ERROR', result, { root: true })
        }
      }).catch(v2 => {
        console.log(v2)
      });
    },
    // 获取7*24快讯数据
    getNewsFlashList ({ commit }, { flag, page }) {
      const url = `${domain}/openapi/news/wisdomHeadline.shtml?flag=${flag}&page=${page}`
=======
    [types.SET_WISDOMHEADLINES_LIST](state, list) {
      state.wisdomHeadlinesList = list
    }
  },
  actions: {
    getWisdomHeadlinesList({
      commit
    }, {
      flag,
      pageSize
    }) {
      const url = `${domain}/openapi/news/wisdomHeadline.shtml?flag=${flag}&page=${pageSize}`
>>>>>>> c5cb5d938ddc3e999f6c1a0061944850e15707f2
      return fetch(url, {
        method: 'GET',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if(result.errCode === 0) {
          commit(types.SET_NEWSFLASH_LIST, result.data)
        }else{
          commit('ERROR', result, { root: true })
        }
      }).catch(v2 => {
        console.log(v2)
      });
    },

    // 获取机会挖掘数据
    getNewsOpportunities ({ commit }, { type, page }) {
      const url = `${domain}/openapi/news/newsExcavate.shtml?chance=${type}&page=${page}`
      return fetch(url, {
        method: 'GET',
        mode: 'cors'
      }).then((res) => { return res.json() }).then(result => {
        if(result.errCode === 0) {
          commit(types.SET_NEWSOPPORTUNITIES_LIST, result.data);
        }else{
          commit('ERROR', result, { root: true })
        }
      }).catch(v2 => {
        console.log(v2)
      });
    },
    // 获取上市公司数据
    getListedCompany ({ commit }, { page }) {
      const url = `${domain}/openapi/news/listedCom.shtml?page=${page}`
      return fetch(url, {
        method: 'GET',
        mode: 'cors'
      }).then((res) => { return res.json() }).then(result => {
        if(result.errCode === 0) {
          commit(types.SET_LISTEDCOMPANY_LIST, result.data);
        }else{
          commit('ERROR', result, { root: true })
        }
      }).catch(v2 => {
        console.log(v2)
      });
    },
    // 获取股票池列表
    getStockPool({ commit, state,   rootState   }) {
      const userId = rootState.user.userId
      if (!userId) {
        commit('setStockPool', [])
        return
      }
      return fetch(`${domain}/openapi/filter/stock/listEquityPool.shtml?userId=304f525a-9af2-4a60-b15e-00fc552917bb`, {
        mode: 'cors'
      }).then((res) => { return res.json() }).then(result => {
        if(result.errCode === 0){
          commit('setStockPool', result.data)
        }
      })
    }
  }
}