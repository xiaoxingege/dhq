//  import fetchJsonp from 'z3fetch-jsonp'
import z3fetch from '../dhq/util/z3fetch'
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
  resetChart: [],
  setCount: [], // 存放功能区数据的数量，
  setHyList:[] // 会议日历的列表数据
 
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
  RESET_CHART: 'RESET_CHART',
  SET_COUNT: 'SET_COUNT',
  SET_HY_LIST:'SET_HY_LIST'
}

const actions = {
  setCount({
    commit
  }, value) {
    commit(mutationsTypes.SET_COUNT, value)
  },
  resetChart({
    commit
  }) {
    commit(mutationsTypes.DATE_CODE, null)
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
    // const userId = '461afaa0-39b4-4bd8-8c18-118b026d2017';
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
   //   console.log(hqData)
      commit(mutationsTypes.SET_HY_LIST, hqData)
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
  [mutationsTypes.RESET_CHART](state, res) {
    //   console.log(state.saveDate) //  清空复牌数据
    state.resetChart = res
  },
  [mutationsTypes.SET_COUNT](state, res) {
    state.setCount = res
  },
  [mutationsTypes.NEW_NEWS](state, res) {
    state.newNews = res
  },
  [mutationsTypes.NOT_OPEN_STOCK](state, res) {
    // console.log(res)
    state.notOpenStock = res
  },
  [mutationsTypes.NOT_OPEN_STOCK_LIST](state, res) {
    state.notOpenStockList = res

    for (var i = 0; i < state.notOpenStock.length; i++) {
      if (state.notOpenStock[i].STOCKCODE === state.notOpenStockList[i][1]) {
        let obj = state.notOpenStock[i];
        state.notOpenStock.splice(i,1,{ ...obj,  np:state.notOpenStockList[i][2].toFixed(2),id:state.notOpenStockList[i][0] })
       
        // obj.np = state.notOpenStockList[i][2].toFixed(2);
        // obj.id = state.notOpenStockList[i][0];

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
  }
}



// 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store


export default {
  namespaced: true,
  state,
  actions,
  mutations
}