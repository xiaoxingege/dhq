//  import fetchJsonp from 'z3fetch-jsonp'
import z3fetch from '../dhq/util/z3fetch' // 需要校验token的
import 'whatwg-fetch'
import $ from 'jquery'
import {
  domain
} from '../dhq/config'

const state = {
  guide: [],
  getStock: [],
  setStock: [],
  stopStock: [], //   停牌前五天新闻
  newNews: [], //    最新资讯
  dateAndCode: [], //  存放股票代码和停牌时间
  notOpenStock: [], // 未开板新股  
  notOpenStockList: [],
  isSelfSelection: [],
  addSelection: [],
  removeSelection: [],
  setStockLine: [],
  saveDate: [],
  setCount: [], // 存放功能区数据的数量，
  setHyList:[] ,// 会议日历的列表数据
  setHyName:null,
  saveHyUrl:'',//  存储会议URL
  saveHyIndex:'',
  savaHyList:[],
  getNewsBroadcast:[] ,// 新闻联播
  todayHotStock:[] ,// 今日热点股
  todayHotStockPrice:[]
}
const mutationsTypes = {
  SET_GUIDE: 'SET_GUIDE',
  GET_STOCK: 'GET_STOCK',
  SET_STOCK: 'SET_STOCK',
  STOP_STOCK: 'STOP_STOCK',
  DATE_CODE: 'DATE_CODE',
  NEW_NEWS: 'NEW_NEWS',
  NOT_OPEN_STOCK: 'NOT_OPEN_STOCK',
  NOT_OPEN_STOCK_LIST: 'NOT_OPEN_STOCK_LIST',
  UPDATE_SELF_SELECTION: 'UPDATE_SELF_SELECTION',
  SET_STOCK_LINE: 'SET_STOCK_LINE',
  SAVE_DATE: 'SAVE_DATE',
  SET_COUNT: 'SET_COUNT',
  SET_HY_LIST:'SET_HY_LIST',
  SET_HY_NAME:'SET_HY_NAME',
  SAVE_HY_URL:'SAVE_HY_URL',
  SAVE_HY_INDEX:'SAVE_HY_INDEX',
  GET_NEWS_BROADCAST:'GET_NEWS_BROADCAST',
  TODAY_HOT_STOCKS:'TODAY_HOT_STOCKS',
  TODAY_HOT_STOCKS_PRICE:'TODAY_HOT_STOCKS_PRICE',
  SAVE_HY_LIST:'SAVE_HY_LIST'
}

const actions = {
  savaHyList({ commit }){
    commit( mutationsTypes.SAVE_HY_LIST , null)
  },
  saveHyIndex({ commit },value){
    commit(mutationsTypes.SAVE_HY_INDEX,value)
  },
  saveHyUrl({ commit },value){
    commit(mutationsTypes.SAVE_HY_URL,value)
  },
  setCount({
    commit
  }, value) {
    commit(mutationsTypes.SET_COUNT, value)
  },

  saveDate({
    commit
  }, value) { // 存放日期 
    commit(mutationsTypes.SAVE_DATE, value)
  },
  storeData({
    commit
  }, value) { //  存放股票代码和停牌时间
    commit(mutationsTypes.DATE_CODE, value)
  },
  setGuide({
    commit
  }, date) {
    const url = `https://sslapi.jrj.com.cn/itougu/mapi/wireless/information/investCalendarHomePage.jspa?tradeDate=${date}`
    return z3fetch(url, {
      mode: 'cors'
    }).then(res => {
      return res.json()
    }).then(json => {
      commit(mutationsTypes.SET_GUIDE, json.data)
    })
  },
  getStock({
    commit
  }, tradeDate) {
    const url = `https://sslapi.jrj.com.cn/itougu/mapi/wireless/information/stopResumeTrading.jspa?tradeDate=${tradeDate}`
    const mode = 'cors';
    return z3fetch(url, {
      mode
    }).then(res => {
      return res.json()
    }).then(json => {
      commit(mutationsTypes.GET_STOCK, json.data)
    })
  },
  setStock({
    commit
  }, stockCode) {
    const vname = stockCode.split(',').join('')
   // debugger
    return $.ajax({
      type: 'get',
      dataType: 'script',
      url: 'https://sslapi.jrj.com.cn/jrjimg/q/?q=cn|s&i=' + stockCode + '&c=np,hlp,pl,lcp,op,name,code,id&n=hqData_' + vname
    }).then(data => {
      var hqData = window['hqData_' + vname];
      //  console.log(hqData)
      commit(mutationsTypes.SET_STOCK, hqData.HqData)
    })
  },
  stopStock({
    commit
  }, stockCode) {
    const url = `https://sslapi.jrj.com.cn/genius/glink/base/SEC_DISC_INFO/limit=20&full=2&filter-SEC_CODE-in-str=${stockCode.stockCode}&sort=DECLAREDATE&skip=0&filter-DECLAREDATE-gte-str=${stockCode.date}&filter-TYPE-int=1 `
    const mode = 'cors';
    return fetch(url, {
      mode
    }).then(res => {
      return res.json()
    }).then(json => {
      //  console.log(json.rows)
      commit(mutationsTypes.STOP_STOCK, json.rows)
    })
  },

  newNews({
    commit
  }, stockCode) {
    const url = `https://mystock.jrj.com.cn/news/content/getNewsByStockid?seq=desc&by=t&ids=${stockCode.stockCode}&currentPage=1&pageSize=20`
    return $.ajax({
      type: 'get',
      dataType: 'script',
      url: url + '&vname=newsData_' + stockCode.stockCode
    }).then(data => {
      var newsData = window['newsData_' + stockCode.stockCode]
      //      console.log(newsData)
      commit(mutationsTypes.NEW_NEWS, newsData.data)
    })
  },
  notOpenStock({
    commit
  }, date) { //  未开板新股
    const url = `https://sslapi.jrj.com.cn/itougu/mapi/wireless/information/notOpenNewStock.jspa?tradeDate=${date}`
    const mode = 'cors'
    return z3fetch(url, {
      mode
    }).then(res => {
      return res.json()
    }).then(json => {
      commit(mutationsTypes.NOT_OPEN_STOCK, json.data)
    })
  },
  notOpenStockList({ // 获取价格
    commit
  }, stockCode) {
    const vname = stockCode.split(',').join('')
    return $.ajax({
      type: 'get',
      dataType: 'script',
      url: 'https://sslapi.jrj.com.cn/jrjimg/q/?q=cn|s&i=' + stockCode + '&c=np,code,id&n=hqData_' + vname
    }).then(data => {
      var hqData = window['hqData_' + vname];
      // console.log(hqData.HqData)
      commit(mutationsTypes.NOT_OPEN_STOCK_LIST, hqData.HqData)
    })
  },
  setStockLine({
    commit
  }, date) {
    const url = `https://itougu.jrj.com.cn/wireless/information/stockPlateMarketByCrossDomain.jspa?tradeDate=${date}`
    return $.ajax({
      type: 'get',
      dataType: 'jsonp',
      jsonp: 'callback',
      url: url
    }).then(res => {
      commit(mutationsTypes.SET_STOCK_LINE, res.data)
    })
  },

  //   股票是否添加自选操作

  querySelection({ // 检查是否自选过
      rootState,
      commit
    },
   value
  ) {
   // debugger
    const userId = rootState.user.userId || '';
    if (!userId) {
      return;
    }
    const url = `${domain}/openapi/selectStock/findStock.shtml?stock=${value.stockCode}&userId=${userId}`
    return z3fetch(url, {
      mode: 'cors',
      headers: {
        'Cache-Control': 'no-cache',
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res => res.json()).then((result) => {
      if (result.errCode === 0) { // 在自选中
        commit(mutationsTypes.UPDATE_SELF_SELECTION, true);
      } else if (result.errCode === -1) { // 不在自选中
        commit(mutationsTypes.UPDATE_SELF_SELECTION, false);
      } else {
        commit('ERROR', result, {
          root: true
        })
      }
    })

  },
  addSelection({ // 添加自选
    rootState,
    commit
  }, {
    stockCode
  }) {
    // debugger;
    const userId = rootState.user.userId || '';
    stockCode = stockCode && stockCode.substring(0, 6);
    if (!userId) {
      return;
    }
    const url = `${domain}/openapi/selectStock/add.shtml`
    return z3fetch(
      url, {
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        body: `stocks=${stockCode}&userId=${userId}`
      }
    ).then(res => res.json()).then((result) => {
      if (result.errCode === 0) {
        commit(mutationsTypes.UPDATE_SELF_SELECTION, true);
      } else {
        commit('ERROR', result, {
          root: true
        })
      }
    })
  },
  removeSelection({ //  取消自选
    rootState,
    commit
  }, {
    stockCode
  }) {
    const userId = rootState.user.userId || '';
    stockCode = stockCode && stockCode.substring(0, 6);
    if (!userId) {
      return;
    }
    const url = `${domain}/openapi/selectStock/del.shtml`
    return z3fetch(url, {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
  
      },
      method: 'post',
      body: `stocks=${stockCode}&userId=${userId}`
    }).then(res => res.json()).then((result) => {
      if (result.errCode === 0) {

        commit(mutationsTypes.UPDATE_SELF_SELECTION, false);
      } else {
        commit('ERROR', result, {
          root: true
        })
      }
    })
  },
  setHyList({ commit }, date){  
    const url = `https://mapp.jrj.com.cn/json/invest/get?month=${date}&vname=content` // 需要年月份
    return $.ajax({
      type: 'get',
      dataType: 'script',
      url: url
    }).then(res => {
       var hqData = window['content']; 
      commit(mutationsTypes.SET_HY_LIST, hqData)
    })
  },
  setHyName({
    state, // 获取名字
    commit
  }, stockCode) {
    const vname = stockCode.split(',').join('')
    return $.ajax({
      type: 'get',
      dataType: 'script',
      url: 'https://sslapi.jrj.com.cn/jrjimg/q/?q=cn|s&i=' + stockCode + '&c=code,name,id&n=hqData_' + vname
    }).then(data => {
      var hqData = window['hqData_' + vname];
      commit(mutationsTypes.SET_HY_NAME, hqData.HqData)
    })
  },
  getNewsBroadcast({ commit },date){
    const url = `https://sslapi.jrj.com.cn/itougu/mapi/wireless/information/newsBroadcast.jspa?tradeDate=${date}`
    return $.ajax({
      type: 'get',
      dataType: 'jsonp',
      url: url
    }).then(res => {
   //   console.log(res)
      commit(mutationsTypes.GET_NEWS_BROADCAST, res.data)
    })
  },
  todayHotStock({ commit }){
    const url =  `https://sslapi.jrj.com.cn/itougu/mapi/wireless/information/hotConcept.jspa`
    return $.ajax({
      type: 'get',
      dataType: 'jsonp',
      url: url
    }).then(res => {
    //  console.log(res.data)
      commit(mutationsTypes.TODAY_HOT_STOCKS, res.data)
    })
  },
  todayHotStockPrice( { commit } ,stockCode){
    const vname = stockCode.split(',').join('')
   // debugger
    return $.ajax({
      type: 'get',
      dataType: 'script',
      url: 'https://sslapi.jrj.com.cn/jrjimg/q/?q=cn|s&i=' + stockCode + '&c=np,pl,name,code,id&n=hqData_' + vname
    }).then(data => {
      var hqData = window['hqData_' + vname];
   //  console.log(hqData)
      commit(mutationsTypes.TODAY_HOT_STOCKS_PRICE, hqData.HqData)
    })
  }

}


const mutations = {
  [mutationsTypes.SET_GUIDE](state, list) {
    state.guide = list;
  },

  [mutationsTypes.GET_STOCK](state, res) {
    state.getStock = res;
  },
  [mutationsTypes.STOP_STOCK](state, res) {
    state.stopStock = res
  },
  [mutationsTypes.DATE_CODE](state, res) {
    //  console.log(state.dateAndCode) //  存放股票代码和停牌时间
    state.dateAndCode = res
  },
  [mutationsTypes.SAVE_DATE](state, res) {
    //   console.log(state.saveDate) //  存放日历时间
    state.saveDate = res
  },

  [mutationsTypes.SET_COUNT](state, res) {
    state.setCount = res
  },
  [mutationsTypes.NEW_NEWS](state, res) {
    state.newNews = res
  },
  [mutationsTypes.NOT_OPEN_STOCK](state, res) {
    state.notOpenStock = res
  },
  [mutationsTypes.NOT_OPEN_STOCK_LIST](state, res) {
    state.notOpenStockList = res
    for (var i = 0; i < state.notOpenStock.length; i++) {
      if (state.notOpenStock[i].STOCKCODE === state.notOpenStockList[i][1]) {
        let obj = state.notOpenStock[i];
        state.notOpenStock.splice(i,1,{ ...obj,  np:state.notOpenStockList[i][2].toFixed(2),id:state.notOpenStockList[i][0] })
      }
    }
  },
  //  是否添加自选
  [mutationsTypes.UPDATE_SELF_SELECTION](state, isSelfSelection) {
    state.isSelfSelection = isSelfSelection
  },
  [mutationsTypes.SET_STOCK](state, res) {
    state.setStock = res;

  },
  [mutationsTypes.SET_STOCK_LINE](state, setStockLine) {
    state.setStockLine = setStockLine
  },
  [mutationsTypes.SET_HY_LIST](state,setHyList){
    
    state.setHyList=setHyList
  },

  [mutationsTypes.SET_HY_NAME](state,setHyName){
    state.setHyName = {};
 
    setHyName.map((item) => {
      if(!state.setHyName[item[1]]){
        state.setHyName[item[1]] = item;
      }
    }) 
  // console.log(state.setHyName)
  },
  [mutationsTypes.SAVE_HY_URL](state,saveHyUrl){
    state.saveHyUrl=saveHyUrl
  },
  [mutationsTypes.SAVE_HY_INDEX](state,saveHyIndex){
    state.saveHyIndex=saveHyIndex
  },
  [mutationsTypes.SAVE_HY_LIST](state,savaHyList){
    state.savaHyList=savaHyList
  },

  [mutationsTypes.GET_NEWS_BROADCAST](state,getNewsBroadcast){
    state.getNewsBroadcast=getNewsBroadcast
  },
  [mutationsTypes.TODAY_HOT_STOCKS](state,todayHotStock){
    state.todayHotStock=todayHotStock
 //   console.log(state.todayHotStock)
  },
  [mutationsTypes.TODAY_HOT_STOCKS_PRICE](state,todayHotStockPrice){
    state.todayHotStockPrice=todayHotStockPrice
 //   debugger
    for (var i=0; i<state.todayHotStock.length; i++){
      if(state.todayHotStock[i].STOCKCODE === state.todayHotStockPrice[i][1] ){
        let obj =state.todayHotStock[i]
        state.todayHotStock.splice(i,1,{ ...obj, np:state.todayHotStockPrice[i][3].toFixed(2),pl:state.todayHotStockPrice[i][4].toFixed(2) })
      }
    }
   
  }
}



// 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store


export default {
  namespaced: true,
  state,
  actions,
  mutations
}