import 'whatwg-fetch'
import config, {
  domain
} from '../z3tougu/config'
import {
  formatDate
} from 'utils/date'
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
    relatedStocks: [], // websocket推送数据
    pageSize: PAGE_SIZE, // 默认页数
    loadingShow: true, // 加载中状态
    newTime: '',
    lastTime:'',
    userId: '',
    optionalStockId:'',
    stockPool: null, // 股票池列表
    innerCode:'',
    isTops:true, // 是否在顶部
    noData:false,
    topicList:[],
    induList:[],
    topicCode:'',
    induCode:'',
    newsId:[]
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
    lastTime: state => state.lastTime,
    newsId: state => state.newsId,
    stockPool: state => state.stockPool,
    innerCode: state => state.innerCode,
    isTops: state => state.isTops,
    optionalStockId: state => state.optionalStockId,
    noData:state => state.noData,
    topicList: state => state.topicList
  },
  mutations: {
    [types.SET_WISDOMHEADLINES_LIST](state, list) {
      const stocks = {}
      const topics = {}
      const indus = {}
      let topicArr = []
      let indusArr = []
      let newsIdArr = []
      if(list.rows.length === 0 && state.isTops !== true){
        state.noData = true
      }
      state.temporary = list.rows
      if(state.isTops === true){
        state.wisdomHeadlinesList = state.temporary.concat(state.wisdomHeadlinesList)
      }else{
        state.wisdomHeadlinesList = state.wisdomHeadlinesList.concat(state.temporary)
      }
      // 取出websocket 要更新的字段
      for (let intelligence of state.wisdomHeadlinesList) {
        let equity = intelligence.equity
        let topic = intelligence.topic
        let indu = intelligence.indu
        let newsId = intelligence.newsId
        if(newsId !== null ){
          newsIdArr.push(newsId)
        }
        if (equity  !== null ) {
          stocks[equity.code] = equity
        }
        if(topic !== null ){
          topics[topic.code] = topic
          topicArr.push(topic.code)
        }
        if(indu !== null){
          indus[indu.code] = indu
          indusArr.push(indu.code)
        }
      }
      state.topicList = topics
      state.induList = indus
      state.topicCode = topicArr.join(',')
      state.induCode = indusArr.join(',')
      state.newsId = newsIdArr.join(',')
      state.relatedStocks = stocks
    },
    [types.SET_OPTIONALINFORMATION_LIST](state, list) {
      if(list.rows.length === 0 && state.isTops !== true){
        state.noData = true
      }
      const stocks = {}
      let newsIdArr = []
      state.temporary = list.rows
      if(state.isTops === true){
        state.optionalInformationList = state.temporary.concat(state.optionalInformationList)
      } else {
        state.optionalInformationList = state.optionalInformationList.concat(state.temporary)
      }
      // 取出websocket 要更新的字段
      for (let intelligence of state.optionalInformationList) {
        let equity = intelligence.equityList
        let newsId = intelligence.newsId
        if(newsId !== null ){
          newsIdArr.push(newsId)
        }
        if (equity  !== null ) {
          stocks[equity.code] = equity
        }
      }
      state.newsId = newsIdArr.join(',')
      state.relatedStocks = stocks
    },
    [types.SET_NEWSFLASH_LIST](state, list) {
      const stocks = {}
      const topics = {}
      const indus = {}
      let topicArr = []
      let indusArr = []
      let newsIdArr = []
      if(list.rows.length === 0 && state.isTops !== true){
        state.noData = true
      }
      state.temporary = list.rows
      if(state.isTops === true){
        state.newsFlash = state.temporary.concat(state.newsFlash)
      } else {
        state.newsFlash = state.newsFlash.concat(state.temporary)
      }
      // 取出websocket 要更新的字段
      for (let intelligence of state.newsFlash) {
        let equity = intelligence.equity
        let topic = intelligence.topic
        let indu = intelligence.indu
        let newsId = intelligence.newsId
        if(newsId !== null ){
          newsIdArr.push(newsId)
        }
        if (equity  !== null ) {
          stocks[equity.code] = equity
        }
        if(topic !== null ){
          topics[topic.code] = topic
          topicArr.push(topic.code)
        }
        if(indu !== null){
          indus[indu.code] = indu
          indusArr.push(indu.code)
        }
      }
      state.topicList = topics
      state.induList = indus
      state.topicCode = topicArr.join(',')
      state.induCode = indusArr.join(',')
      state.newsId = newsIdArr.join(',')
      state.relatedStocks = stocks
    },
    [types.SET_NEWSOPPORTUNITIES_LIST](state, list) {
      const stocks = {}
      const topics = {}
      const indus = {}
      let topicArr = []
      let indusArr = []
      let newsIdArr = []
      if(list.rows.length === 0 && state.isTops !== true){
        state.noData = true
      }
      state.temporary = list.rows
      if(state.isTops === true){
        state.newsOpportunities =  state.temporary.concat(state.newsOpportunities)
      } else {
        state.newsOpportunities = state.newsOpportunities.concat(state.temporary)
      }
      // 取出websocket 要更新的字段
      for (let intelligence of state.newsOpportunities) {
        let equity = intelligence.equity
        let topic = intelligence.topic
        let indu = intelligence.indu
        let newsId = intelligence.newsId
        if(newsId !== null ){
          newsIdArr.push(newsId)
        }
        if (equity  !== null ) {
          stocks[equity.code] = equity
        }
        if(topic !== null ){
          topics[topic.code] = topic
          topicArr.push(topic.code)
        }
        if(indu !== null){
          indus[indu.code] = indu
          indusArr.push(indu.code)
        }
      }
      state.topicList = topics
      state.induList = indus
      state.topicCode = topicArr.join(',')
      state.induCode = indusArr.join(',')
      state.newsId = newsIdArr.join(',')
      state.relatedStocks = stocks
    },
    [types.SET_LISTEDCOMPANY_LIST](state, list) {
      if(list.rows.length === 0 && state.isTops !== true){
        state.noData = true
      }
      const stocks = {}
      let newsIdArr = []
      state.temporary = list.rows
      if(state.isTops === true){
        state.listedCompany = state.temporary.concat(state.listedCompany)
      } else {
        state.listedCompany = state.listedCompany.concat(state.temporary)
      }
      // 取出websocket 要更新的字段
      for (let intelligence of state.listedCompany) {
        let equity = intelligence.equity
        let newsId = intelligence.newsId
        if(newsId !== null ){
          newsIdArr.push(newsId)
        }
        if (equity  !== null ) {
          stocks[equity.code] = equity
        }
      }
      state.newsId = newsIdArr.join(',')
      state.relatedStocks = stocks
    },
    [types.UPDATE_RELSTOCK](state, stock) {
      const stocks = state.relatedStocks
      if(stocks[stock.innerCode] !== undefined){
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
        console.log(state.newTime)
        console.log('newTime')
      }
    },
    getLastTime(state, time) {
      if(time === null || time === ''){
          state.lastTime = time
      }else{
        state.lastTime = formatDate(time,'yyyy-MM-dd hh:mm:ss')
        console.log(state.lastTime)
      }
    },
    setStockPool(state, result) {
      let data = result
      const stockPool = []
      let innerCode =[]
      for(let item in data){
        if(data[item].poolType === 1){
          stockPool.push(data[item])
        }
      }
      state.stockPool = stockPool
      for(let i = 0; i< stockPool.length; i++) {
        state.optionalStockId = stockPool[0].poolId
        let equityPool = stockPool[0].equityPool
        if(equityPool === null){
          state.innerCode = ''
        } else {
          for (let j = 0; j < equityPool.length; j++) {
            state.innerCode = innerCode.push(equityPool[j].innerCode)
          }
        }
      }
      var newArr =[]
      for(let i = 0; i<innerCode.length; i++) {
        if(newArr.indexOf(innerCode[i]) === -1) {
          newArr.push(innerCode[i])
        }
      }
      state.innerCode = newArr.join(',')
    },
    setOptionalStockId(state, result) {
      state.optionalStockId = result.id
      state.innerCode = result.innerCode
    },
    setOptionalinformationInit(state, result) {
      state.optionalInformationList = result
    },
    setNewsOpportunitiesInit(state, result) {
      state.newsOpportunities = result
    },
    setIsTop(state, result) {
      state.isTops = result
    },
    setNoData(state,result) {
      state.noData = result
    },
    updateTopic(state,result){
      const topics = state.topicList
      for(let topic of result){
        topics[topic.code].chngPct =topic.chngPct !==null && topic.chngPct !==undefined ? Number(topic.chngPct.toFixed(2)) : ''
      }
    },
    updateIndu(state,result){
      const inidus = state.induList
      for(let inidu of result){
        inidus[inidu.code].chngPct = Number(inidu.chngPct.toFixed(2))
      }
    }
  },
  actions: {
    // 获取智头条数据
    getWisdomHeadlinesList({
      commit
    }, {
      page,
      isTop,
      newTime,
      nextTime,
      ids
    }) {
      commit('setMask', true)
      const url = `${domain}/openapi/news/wisdomHeadline.shtml?page=${page}&istop=${isTop}&newTime=${newTime}&nextTime=${nextTime}&ids=${ids}`
      return fetch(url, {
        method: 'POST',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit(types.SET_WISDOMHEADLINES_LIST, result.data)
          commit('getNewTime', result.data.newTime)
          commit('getLastTime', result.data.nextTime)
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
    getOptionalInformation({
      commit
    }, {
      innerCode,
      page,
      isTop,
      newTime,nextTime,
      ids
    }) {
      commit('setMask', true)
      const url = `${domain}/openapi/news/selfSelectNews.shtml?innerCode=${innerCode}&page=${page}&istop=${isTop}&newTime=${newTime}&nextTime=${nextTime}&ids=${ids}`
      return fetch(url, {
        method: 'POST',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('setMask', false)
          commit('getNewTime', result.data.newTime)
          commit('getLastTime', result.data.nextTime)
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
    getNewsFlashList({
      commit
    }, {
      page,
      isTop,
      newTime,nextTime,
      ids
    }) {
      commit('setMask', true)
      const url = `${domain}/openapi/news/flashNews.shtml?page=${page}&istop=${isTop}&newTime=${newTime}&nextTime=${nextTime}&ids=${ids}`
      return fetch(url, {
        method: 'POST',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('setMask', false)
          commit('getNewTime', result.data.newTime)
          commit('getLastTime', result.data.nextTime)
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
    getAllChance({
      commit
    }, {
      page,
      isTop,
      newTime,nextTime,
      ids
    }) {
      commit('setMask', true)
      const url = `${domain}/openapi/news/allChance.shtml?page=${page}&istop=${isTop}&newTime=${newTime}&nextTime=${nextTime}&ids=${ids}`
      return fetch(url, {
        method: 'POST',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('setMask', false)
          commit('getNewTime', result.data.newTime)
          commit('getLastTime', result.data.nextTime)
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
    getStockChance({
      commit
    }, {
      page,
      isTop,
      newTime,nextTime,
      ids
    }) {
      commit('setMask', true)
      const url = `${domain}/openapi/news/stockChance.shtml?page=${page}&istop=${isTop}&newTime=${newTime}&nextTime=${nextTime}&ids=${ids}`
      return fetch(url, {
        method: 'POST',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('setMask', false)
          commit('getNewTime', result.data.newTime)
          commit('getLastTime', result.data.nextTime)
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
    getTopicChance({
      commit
    }, {
      page,
      isTop,
      newTime,nextTime,
      ids
    }) {
      commit('setMask', true)
      const url = `${domain}/openapi/news/topicChance.shtml?page=${page}&istop=${isTop}&newTime=${newTime}&nextTime=${nextTime}&ids=${ids}`
      return fetch(url, {
        method: 'POST',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('setMask', false)
          commit('getNewTime', result.data.newTime)
          commit('getLastTime', result.data.nextTime)
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
    getProductChance({
      commit
    }, {
      page,
      isTop,
      newTime,nextTime,
      ids
    }) {
      commit('setMask', true)
      const url = `${domain}/openapi/news/productChance.shtml?page=${page}&istop=${isTop}&newTime=${newTime}&nextTime=${nextTime}&ids=${ids}`
      return fetch(url, {
        method: 'POST',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('setMask', false)
          commit('getNewTime', result.data.newTime)
          commit('getLastTime', result.data.nextTime)
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
    getListedCompany({
      commit
    }, {
      page,
      isTop,
      newTime,
      nextTime,
      ids
    }) {
      commit('setMask', true)
      const url = `${domain}/openapi/news/listedCom.shtml?page=${page}&istop=${isTop}&newTime=${newTime}&nextTime=${nextTime}&ids=${ids}`
      return fetch(url, {
        method: 'POST',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('setMask', false)
          commit('getNewTime', result.data.newTime)
          commit('getLastTime', result.data.nextTime)
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
    getStockPool({
      commit,
      state,
      rootState
    }) {
      const userId = rootState.user.userId
      if (!userId) {
        commit('setStockPool', [])
        return
      }
      // return fetch(`${domain}/openapi/filter/stock/listEquityPool.shtml?userId=${userId}`, {
      return fetch(`${domain}/openapi/filter/stock/listEquityPool.shtml?userId=c245841c-53cd-4538-8c51-55bc2aff35b5`, {
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          commit('setStockPool', result.data)
        }
      })
    },

    getTopicIndu({ commit }, { code,flag } ) {
      const url = `${domain}/openapi/news/chngPctList.shtml?code=${code}&flag=${flag}`
      return fetch(url, {
        method: 'GET',
        mode: 'cors'
      }).then((res) => {
        return res.json()
      }).then(result => {
        if (result.errCode === 0) {
          if(flag === 'topic'){
            commit('updateTopic', result.data)
          }
          if(flag === 'indu'){
            commit('updateIndu', result.data)
          }
        } else {
          commit('ERROR', result, {
            root: true
          })
        }
      }).catch(v2 => {
        console.log(v2)
      });
    }
  }
}
