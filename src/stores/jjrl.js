//  import fetchJsonp from 'fetch-jsonp'
import fetch from '../dhq/util/z3fetch'
import $ from 'jquery'

const state = {
  guide: [],
  getStock: [],
  setStock: [],
  stopStock: [], //   停牌前五天新闻
  newNews: [], //    最新资讯
  dateAndCode: [] //  存放股票代码和停牌时间

}
const mutationsTypes = {
  SET_GUIDE: 'SET_GUIDE',
  GET_STOCK: 'GET_STOCK',
  SET_STOCK: 'SET_STOCK',
  STOP_STOCK: 'STOP_STOCK',
  DATE_CODE: 'DATE_CODE',
  NEW_NEWS: ''
}

const actions = {
  storeData({
    commit
  }, value) { //  存放股票代码和停牌时间
    commit(mutationsTypes.DATE_CODE, value)
  },
  setGuide({
    commit
  }) {
    const mode = location.hostname.indexOf('localhost') !== -1 ? 'cors' : 'no-cors'
    const url = `//mapi.itougu.jrj.com.cn/wireless/information/investCalendarHomePage.jspa?tradeDate=2018-06-06`
    return fetch(url, {
      mode,
      credentials: 'include'
    }).then(res => {
      return res.json()
    }).then(json => {
      // console.log(json)
      commit(mutationsTypes.SET_GUIDE, json.data)
    })
  },
  getStock({
    commit
  }, tradeDate) {
    const url = `//itougu.jrj.com.cn/wireless/information/stopResumeTrading.jspa?tradeDate=${tradeDate}`
    const mode = location.hostname.indexOf('localhost') !== -1 ? 'cors' : 'no-cors'
    return fetch(url, {
      mode
    }).then(res => {
      return res.json()
    }).then(json => {
      //   console.log(json.data)
      commit(mutationsTypes.GET_STOCK, json.data)
    })
  },
  setStock({
    commit
  }, stockCode) {
    // const url=`//q.jrjimg.cn/?q=cn|s&i=${stoceCode}&c=np,hlp,pl,lcp,op,name`
    const vname = stockCode.split(',').join('')
    return $.ajax({
      type: 'get',
      dataType: 'script',
      url: 'http://q.jrjimg.cn/?q=cn|s&i=' + stockCode + '&c=np,hlp,pl,lcp,op,name,code&n=hqData_' + vname
    }).then(data => {
      var hqData = window['hqData_' + vname];
      commit(mutationsTypes.SET_STOCK, hqData.HqData)
    })
  },
  stopStock({
    commit
  }, stockCode) {
    const url = `//glink.genius.com.cn/base/SEC_DISC_INFO/limit=20&full=2&filter-SEC_CODE-in-str=${stockCode.stockCode}&sort=DECLAREDATE&skip=0&filter-DECLAREDATE-gte-str=${stockCode.date}`
    const mode = location.hostname.indexOf('localhost') !== -1 ? 'cors' : 'no-cors'
    return fetch(url, {
      mode
    }).then(res => {
      return res.json()
    }).then(json => {
      commit(mutationsTypes.STOP_STOCK, json.rows)
    })
  },
  newNews({
    commit
  }, stockCode) {
    const url = `//mystock.jrj.com.cn/news/content/getNewsByStockid?seq=desc&by=t&ids=${stockCode.stockCode}&currentPage=1&pageSize=20`
    return $.ajax({
      type: 'get',
      dataType: 'script',
      url: url + "&vname=newsData_" + stockCode.stockCode
    }).then(data => {
      var newsData = window['newsData_' + stockCode.stockCode]
      console.log(newsData)
      commit(mutationsTypes.NEW_NEWS, newsData.data)
    })
  }


}
const mutations = {
  [mutationsTypes.SET_GUIDE](state, list) {
    state.guide = list;
  },
  [mutationsTypes.SET_STOCK](state, res) {
    state.setStock = res;
  },
  [mutationsTypes.GET_STOCK](state, res) {
    state.getStock = res;
  },
  [mutationsTypes.STOP_STOCK](state, res) {
    state.stopStock = res
  },
  [mutationsTypes.DATE_CODE](state, res) { //  存放股票代码和停牌时间
    state.dateAndCode = res
  },
  [mutationsTypes.NEW_NEWS](state, res) {
    state.newNews = res
  }
}
// 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store


export default {
  namespaced: true,
  state,
  actions,
  mutations
}