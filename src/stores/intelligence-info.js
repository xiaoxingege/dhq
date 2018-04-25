import 'whatwg-fetch'
import config, { domain } from '../z3tougu/config'
import { formatDate } from 'utils/date'
import fetch from '../z3tougu/util/z3fetch'

export const PAGE_SIZE = 8;
export const types = {
  SET_WISDOMHEADLINES_LIST: 'SET_WISDOMHEADLINES_LIST',
  SET_OPTIONALINFORMATION_LIST: 'SET_OPTIONALINFORMATION_LIST',
  SET_NEWSFLASH_LIST: 'SET_NEWSFLASH_LIST',
  SET_NEWSOPPORTUNITIES_LIST: 'SET_NEWSOPPORTUNITIES_LIST',
  SET_LISTEDCOMPANY_LIST: 'SET_LISTEDCOMPANY_LIST',
  UPDATE_RELSTOCK: 'UPDATE_RELSTOCK'
}
export default {
  state: {
    temporary: [], // 临时数据
    wisdomHeadlinesList: [], // 智头条
    optionalInformationList: [], // 自选情报
    newsOpportunities: [], // 机会挖掘
    newsFlash: [], // 7*24小时快讯
    listedCompany: [], // 上市公司
    relatedStocks: [],// websocket推送数据
    pageSize: PAGE_SIZE,// 默认页数
    loadingShow: true, // 加载中状态
    newTime: '',
    userId: '',
    optionalStockId:'',
    stockPool: null, // 股票池列表
    innerCode:'',
    isTops:true, // 是否在顶部
    noData:false
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
    innerCode: state => state.innerCode,
    isTops: state => state.isTops,
    optionalStockId: state => state.optionalStockId,
    noData:state => state.noData
  },
  mutations: {
    [types.SET_WISDOMHEADLINES_LIST](state, list) {
      if(list.rows.length === 0 && state.isTops !== true){
        state.noData = true
      }
      const stocks = {}
      state.temporary = list.rows
      if(state.isTops === true){
        state.wisdomHeadlinesList = state.temporary.concat(state.wisdomHeadlinesList)
      }else{
        state.wisdomHeadlinesList = state.wisdomHeadlinesList.concat(state.temporary)
      }
      // 取出websocket 要更新的字段
      for (let intelligence of state.wisdomHeadlinesList) {
        let equity = intelligence.equity
        if (equity  !== null ) {
          stocks[equity.code] = equity
        }
      }
      state.relatedStocks = stocks
    },
    [types.SET_OPTIONALINFORMATION_LIST](state, list) {
      if(list.rows.length === 0 && state.isTops !== true){
        state.noData = true
      }
      const stocks = {}
      state.temporary = list.rows
      if(state.isTops === true){
        state.optionalInformationList = state.temporary.concat(state.optionalInformationList)
      }else{
        state.optionalInformationList = state.optionalInformationList.concat(state.temporary)
      }
      // 取出websocket 要更新的字段
      for (let intelligence of state.optionalInformationList) {
        let equity = intelligence.equityList
        if (equity  !== null ) {
          stocks[equity.code] = equity
        }
      }
      state.relatedStocks = stocks
    },
    [types.SET_NEWSFLASH_LIST](state, list) {
      if(list.rows.length === 0 && state.isTops !== true){
        state.noData = true
      }
      const stocks = {}
      state.temporary = list.rows
      if(state.isTops === true){
        state.newsFlash = state.temporary.concat(state.newsFlash)
      }else{
        state.newsFlash = state.newsFlash.concat(state.temporary)
      }
      // 取出websocket 要更新的字段
      for (let intelligence of state.newsFlash) {
        let equity = intelligence.equity
        if (equity  !== null ) {
          stocks[equity.code] = equity
        }
      }
      state.relatedStocks = stocks
    },
    [types.SET_NEWSOPPORTUNITIES_LIST](state, list) {
      if(list.rows.length === 0 && state.isTops !== true){
        state.noData = true
      }
      const stocks = {}
      state.temporary = list.rows
      if(state.isTops === true){
        state.newsOpportunities = state.temporary.concat(state.newsOpportunities)
      }else{
        state.newsOpportunities = state.newsOpportunities.concat(state.temporary)
      }
      // 取出websocket 要更新的字段
      for (let intelligence of state.newsOpportunities) {
        let equity = intelligence.equity
        if (equity  !== null ) {
          stocks[equity.code] = equity
          // console.log(stocks[equity.code])
        }
      }
      state.relatedStocks = stocks
    },
    [types.SET_LISTEDCOMPANY_LIST](state, list) {
      if(list.rows.length === 0 && state.isTops !== true){
        state.noData = true
      }
      const stocks = {}
      state.temporary = list.rows
      if(state.isTops === true){
        state.listedCompany = state.temporary.concat(state.listedCompany)
      }else{
        state.listedCompany = state.listedCompany.concat(state.temporary)
      }
      // 取出websocket 要更新的字段
      for (let intelligence of state.listedCompany) {
        let equity = intelligence.equity
        if (equity  !== null ) {
          stocks[equity.code] = equity
        }
      }
      state.relatedStocks = stocks
    },
    [types.UPDATE_RELSTOCK](state, stock) {
      const stocks = state.relatedStocks
      if(stocks[stock.innerCode] !== undefined){
        console.log(stocks[stock.innerCode].code,stocks[stock.innerCode].price)
        stocks[stock.innerCode].price = stock.price !== null && stock.price !== undefined ?  Number(parseFloat(stock.price).toFixed(2)) : config.emptyValue
        stocks[stock.innerCode].chngPct = stock.curChngPct !== null && stock.price !== undefined ? Number(parseFloat(stock.curChngPct).toFixed(2)) : config.emptyValue
      }
    },
    setMask(state, visible) {
      state.loadingShow = visible
    },
    getNewTime(state, time) {
      if(time === null || time === ''){
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
    },
    setNewsOpportunitiesInit(state,result){
      state.newsOpportunities = result
    },
    setIsTop(state,result) {
      state.isTops = result
    },
    setNoData(state,result) {
      state.noData = result
    }
  },
  actions: {
    // 获取智头条数据
    getWisdomHeadlinesList({ commit }, { page, isTop, newTime }) {
      commit('setMask', true)
      const url = `${domain}/openapi/news/wisdomHeadline.shtml?page=${page}&istop=${isTop}&newTime=${newTime}`
      return fetch(url, {
        method: 'GET',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit(types.SET_WISDOMHEADLINES_LIST, result.data)
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
        if (result.errCode === 0) {
          commit('setMask', false)
          commit('getNewTime', result.data.newTime)
          commit(types.SET_OPTIONALINFORMATION_LIST, result.data)
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
      commit('setMask', true)
      const url = `${domain}/openapi/news/flashNews.shtml?page=${page}&istop=${isTop}&newTime=${newTime}`
      return fetch(url, {
        method: 'GET',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('setMask', false)
          commit('getNewTime', result.data.newTime)
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

    // 获取全部机会挖掘数据
    getAllChance({ commit }, { page, isTop, newTime }) {
      commit('setMask', true)
      const url = `${domain}/openapi/news/allChance.shtml?page=${page}&istop=${isTop}&newTime=${newTime}`
      return fetch(url, {
        method: 'GET',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('setMask', false)
          commit('getNewTime', result.data.newTime)
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
    // 获取个股挖掘数据
    getStockChance({ commit }, { page, isTop, newTime }) {
      commit('setMask', true)
      const url = `${domain}/openapi/news/stockChance.shtml?page=${page}&istop=${isTop}&newTime=${newTime}`
      return fetch(url, {
        method: 'GET',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('setMask', false)
          commit('getNewTime', result.data.newTime)
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
    // 获取板块挖掘数据
    getTopicChance({ commit }, { page, isTop, newTime }) {
      commit('setMask', true)
      const url = `${domain}/openapi/news/topicChance.shtml?page=${page}&istop=${isTop}&newTime=${newTime}`
      return fetch(url, {
        method: 'GET',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('setMask', false)
          commit('getNewTime', result.data.newTime)
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
    // 获取板块挖掘数据
    getProductChance({ commit }, { page, isTop, newTime }) {
      commit('setMask', true)
      const url = `${domain}/openapi/news/productChance.shtml?page=${page}&istop=${isTop}&newTime=${newTime}`
      return fetch(url, {
        method: 'GET',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('setMask', false)
          commit('getNewTime', result.data.newTime)
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
    getListedCompany({ commit }, { page, isTop, newTime }) {
      commit('setMask', true)
      const url = `${domain}/openapi/news/listedCom.shtml?page=${page}&istop=${isTop}&newTime=${newTime}`
      return fetch(url, {
        method: 'GET',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('setMask', false)
          commit('getNewTime', result.data.newTime)
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
      return fetch(`${domain}/openapi/filter/stock/listEquityPool.shtml?userId=${userId}`, {
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
