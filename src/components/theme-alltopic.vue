<style lang="scss" scoped>
@import '../assets/css/base.css';
* {
    text-align: justify;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-family: "Microsoft YaHei";
    box-sizing: border-box;
}
em,
i {
    font-style: normal;
}

body {
    background: #141518;
}
.blue {
    color: #1984ea;
}
.red {
    color: #ca4941;
}
.green {
    color: #56a870;
}

.lightcolor {
    color: #c9d0d7;
}

.gray {
    color: #808ba1;
}

.display-box {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -o-box;
    display: box;
}
.box-flex-1 {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    -o-box-flex: 1;
    box-flex: 1;
}
.box-flex-2 {
    -webkit-box-flex: 2;
    -moz-box-flex: 2;
    -ms-flex: 2;
    -o-box-flex: 2;
    box-flex: 2;
}
.box-flex-3 {
    -webkit-box-flex: 3;
    -moz-box-flex: 3;
    -ms-flex: 3;
    -o-box-flex: 3;
    box-flex: 3;
}
.box-flex-4 {
    -webkit-box-flex: 4;
    -moz-box-flex: 4;
    -ms-flex: 4;
    -o-box-flex: 4;
    box-flex: 4;
}
.alltopic {
    width: 100%;
    font-size: 12px;
    background: #141518;
    color: #c9d0d7;
    border-bottom: 3px solid #0d0e0f;
    border-left: 1px solid #0d0e0f;
    /* padding: 0 20px 20px 0; */
    /* padding-right: 20px;*/
    padding-bottom: 10px;
}
span {
    color: #c9d0d7;
}
.topic-head {
    font-weight: normal;
    z-index: 1;
    /* padding-left: 15px;
    margin: 12px 0 -4px; */
    /* padding: 9px 7px 9px 10px; */
    padding: 2px 7px 2px 10px;
    border-bottom: 1px solid #0d0e0f;
    background: #23272c;
    position: fixed;
    width: 100%;
}
.topic-head .head-title {
    margin-right: 10px;
    font-size: 14px;

}
.topic-head strong {
    font-weight: 400;
}
.main-list {
    padding-top: 30px;
}
.topic-num {
    margin-left: 6px;
    margin-right: 6px;
    font-size: 14px;
}
.sum1 {
    width: 20px;
    height: 20px;
    display: inline-block;
    /* border: 1px solid #23272c; */
    background: #36404b;
    text-align: center;
    line-height: 20px;
    margin-right: 6px;
    font-size: 14px;
    border-radius: 3px;
}
.sum2 {
    margin-left: 12px;
    font-size: 14px;
}
.sum3 {
    margin-left: 6px;
    font-size: 14px;
}
.head-left {
    padding-top: 3px;
}
/* .topic-head em {
    padding-right: 65px;
    font-size: 12px;
} */
.sort-head strong {
    color: #808ba1;
    cursor: pointer;
    font-size: 12px;
    margin-right: 30px;
    /* width: 82px; */
    /* height: 20px; */
    /* float: right;
    line-height: 20px; */
    /* display: inline-block; */
    /*  border-radius: 3px;
    border: 1px solid #e5e5e5; */
    /*  color: #4f5256; */
    /* color: #696969;
    text-align: center;
    background: #fff;
    margin-left: 14px;
    cursor: pointer;
    font-size: 12px; */
    /* padding: 4px 8px 5px 15px; */
}
.sort-head strong.active {
    color: #1984ea;
}
strong.active .hot_icon {
    background-position: 0 1px;

}
strong.active .time_icon {
    background-position: 0 1px;

}
.all-ti {
    width: 85px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    background: #525a65;
    display: inline-block;
    border-radius: 3px;
    margin-left: 2px;
    cursor: pointer;
}
.all-ti1.active {
    background: #1984ea;
    color: #c9d0d7;
}
.all-ti2.active {
    background: #1984ea;
    color: #c9d0d7;
}
.hot_icon,
.time_icon {
    width: 9px;
    height: 13px;
    display: inline-block;
    background: url("../assets/images/z3img/theme_icon2.png") no-repeat;
    position: relative;
    top: 2px;
    left: 4px;
}
.hot_icon {
    background-position: 0 -14px;
    /* margin-left: 5px; */
}
.time_icon {
    background-position: 0 -14px;
    /* margin-left: 4px; */
}
.changelist {
    margin-right: 16px;
    margin-top: 5px;
}
.changelist a {
    width: 11px;
    height: 11px;
    display: inline-block;
    background: url("../assets/images/z3img/theme_icon.png") no-repeat 1px -45px;
    cursor: pointer;
}
a.list_icon {
    background-position: 1px -45px;
    margin-right: 10px;
}
a.kuai_icon {
    background-position: 1px -69px;
}
.list_icon.active {
    background-position: 1px -57px;
}
.kuai_icon.active {
    background-position: 1px -82px;
}
.con-left {
    /* width: 36%; */
    width: 37%;
    margin-right: 5%;
}
.con-left strong {
    display: inline-block;
}
.con-left a {
    width: 37%;
    display: inline-block;
}
.content {
    line-height: 24px;
    cursor: pointer;
    /*  position: relative; */
}
.content:hover {
    color: #2388da;
}
/* .content i{
      display: none;
      position: absolute;
      top: 10px;
      left: 0;
      min-width: 400px;
      border: 1px solid #e5e5e5;
      color: #696969;
      border-radius: 3px;
      background: #fff;
      padding: 0 5px;
      box-shadow: 2px 3px 2px #ccc;
      line-height: 20px;
      min-height: 22px;
      font-style: normal;
    }
    .content:hover i{
      display: block
    } */
.content-head {
    margin-bottom: 20px;
}
.content-box {}
.con-cen {
    /* width: 18%; */
    /* width: 25%; */
    width: 17%;
    /* line-height: 24px; */
    line-height: 28px;
    padding-top: 15px;
    /*  margin-top: -6px; */

}
.con-right {
    /* width: 41%; */
    /* width: 35%; */
    /* width: 35.4%; */
    /* width: 20.4%; */
    width: 27%;
    line-height: 26px;
    padding-top: 18px;

}
.news-box {
    position: relative;
}
.news-cons {
    color: #c9d0d7;
}
.news-cons2 .img {
    background-position: 0 -17px;
}
.news-cons2 .new-tit {
    color: #1984ea;
}
.news-cons2 .new-date {
    color: #1984ea;
}
.news-box i {

    position: absolute;
    display: none;
    padding: 9px 20px 9px 12px;
    color: #666666;
    background: #cccfd9;
    border-radius: 3px;
    z-index: 999;
    line-height: 18px;
    /* top: 25px; */
    top: 23px;
    left: 199px;
    /* left: -56px; */
    /* right: 0px;
    
    width: 290px; */
}

.img {
    width: 17px;
    height: 23px;
    display: inline-block;
    background: url("../assets/images/z3img/topic-news2.png") no-repeat 0 6px;
    margin-right: 10px;
}
.topic-ol {
    /*  padding-left: 8px;
    padding-right: 8px;
    margin-top: 8px; */
    /* padding: 0 7px 0 10px; */
    padding: 0 7px 0 0;
}
.topic-ol li {
    /* padding: 10px 15px 40px 13px; */
    /* padding: 2px 21px 2px 2px; */
    /* margin-bottom: 8px; */
    padding: 0 21px 0 0;
    border-bottom: 1px solid #0d0e0f;
}
.con-bar-1 {
    /* width: 168px; */
    width: 14%;
    /* height: 124px; */
    background-color: #2e4465;
    text-align: center;
}
.topic-name {
    font-weight: 900;
    font-size: 24px;
    color: #c9d0d7;
    text-align: center;
    /*  width: 36%;
    margin-right: 5%;
    float: left;*/
    cursor: pointer;
    padding: 39px 0 10px;

}
.con-bar-1:hover {
    background: #1984ea;

}
.topic-chng-box {
    text-align: center;
    padding-bottom: 39px;
}
.topic-chng {
    font-weight: 900;
    font-size: 16px;
    text-align: center;

}
.con-bar-2 {
    /* margin-left: 30px; */
    width: 22%;
    padding-left: 2%;
}
.topic-date-box {
    padding: 18px 0 34px;
}
.topic-stk-box {
    padding: 20px 0;
}
.topic-time {
    float: left;

}
.topic-time span {
    display: inline-block;
}
.time-num {
    width: 90px;
    text-align: center;
}
.time-num2 {
    width: 47px;
    text-align: left;
    display: inline-block;
}
.time-num3 {
    width: 60px;
    text-align: center;
    display: inline-block;
}
.time-num4 {
    width: 47px;
    text-align: left;
    display: inline-block;
}
.equ-name {
    width: 60px;
    display: inline-block;
    text-align: left;
    cursor: pointer;
}
.equ-price {
    width: 26%;
    display: inline-block;
    text-align: center;

}
.new-tit {
    /* width: 50%; */
    /* width: 61%; */
    /* width: 56%; */
    width: 55%;
    text-align: left;
    float: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;

}
/* .new-tit:hover {
    color: #2388da;
} */
.new-date {

    margin-left: 18px;
    line-height: 24px;
    float: left;
}
.new-srcname {
    color: #7e7e7e;
    /* margin-left: 18px; */
    line-height: 24px;
    float: right;
    /*  width: 18%; */
    margin-right: 5px;

}
.con-bar-3 {
    /* width: 26%; */
    width: 18%;
    padding-top: 20px;
    line-height: 18px;
    padding-bottom: 10px;
}
.desc-con {
    position: relative;
    line-height: 18px;
    /* height: 190px; */
    display: inline-block;
}
/* .desc-con:hover {
    color: #1984ea;
} */
.desc-con i {
    display: none;
}
.desc-con:hover i {
    display: block;
    position: absolute;
    padding: 18px 16px;
    color: #666666;
    background: #cccfd9;
    border-radius: 10px;
    z-index: 999;
    /* cursor: pointer; */
    line-height: 18px;
    /* left: -56px; */
    right: 0;
    top: 50%;
    width: 300px;
}
.sortaz-wrap {
    /*  display: none; */
    /* padding: 0 8px;
    margin-top: 12px; */
    padding-top: 30px;
    background: #141518;
}
.az-main {
    background: #141518;

    /* border-top: 1px solid #0d0e0f; */
    /* position:relative; */
}
.sort-title {
    /* position: absolute;
        top: 1.5%; */
    /* left: 1%; */
    /* left: 1.5%; */
    /* line-height: 20px; */
    /* width: 5.4%; */
    /* width: 5.1%; */
    /* padding-left: 20px; */
    /* width: 5.5%; */
    /* padding-left: 25px; */
    padding-left: 20px;
    line-height: 55px;
    font-size: 14px;
    /* text-align: center; */
}
.sort-title i {
    margin-left: 8px;
}
.sort-hot-wrap {
    font-size: 14px;
    height: 55px;
    line-height: 55px;
    border: 1px solid #0d0e0f;
    /* font-size: 12px;
    padding: 7px 16px 9px;
    margin: 13px auto; */
}
.sort-hot {
    /*  width: 62%;
      margin: 13px auto 13px; */
    width: 90%;
    font-size: 14px;
    /* padding-left: 2.1%; */
    /* padding-left: 0.2%; */
}
.hot-name {
    /*  margin-left: 19px; */
    /* width: 10%;
     display: inline-block;
     text-align: center; */
    /* width: 10%; */
    width: 9%;
    line-height: 20px;
    display: inline-block;
    cursor: pointer;
    white-space: nowrap;

}
.hot-name a {
    font-size: 14px;
    /* margin-left: 10px; */
    margin-left: 30px;
    color: #1984ea;
}
.hot-name:nth-child(1) a {
    font-size: 14px;
    /*  padding-left: 40px; */
    margin-left: 61px;
    color: #1984ea;
}
.alltopic .page {
    text-align: center;
    /* padding: 0 0 20px;
     background: #f2f2f2; */
    padding: 30px 0;
}

.tooltip-box {
    position: absolute;
    background: #fff;
    padding: 25px 10px 10px;
    border: 1px solid #eee;
    z-index: 999;
}

.tooltip-box .lenged_l {
    position: absolute;
    right: 10px;
    top: 14px;
    font-size: 14px;
    color: #000;
    z-index: 999;
}

.tooltip-box .name {
    position: absolute;
    top: 14px;
    left: 23px;
    font-size: 14px;
    color: #666;
    z-index: 9;
}

.tooltip-box .txt {
    position: absolute;
    top: 38px;
    left: 3px;
    font-size: 12px;
    z-index: 9;
}

.tooltip-box .txt > div {
    float: left;
    margin-right: 10px;
}
.sort-hot a:hover {
    text-decoration: underline;
}
</style>
<template>
<div class="alltopic clearfix">
  <div class="clearfix topic-head">
    <div class="fl head-left">
      <strong class="head-title gray">题材累计总数</strong><em class="sum1" v-for="sum of this.summary.topicNum">{{sum}}</em><strong class="sum2 gray">上涨题材</strong><em class="red topic-num">{{checkNull(this.summary.topicUpNum)}}</em><strong class="sum3 gray">下跌题材</strong>
      <em class="green topic-num">{{checkNull(this.summary.topicDownNum)}}</em>
    </div>
    <div class="fr sort-head">
      <!-- <em>全部主题概念</em> -->
      <strong :class="sortField==='updown'?'active':''" @click="query('updown')" :style="{display:isStyle}">涨跌幅排序<i class="hot_icon"></i></strong>
      <strong @click="query('hot')" :class="sortField==='hot'?'active':''" :style="{display:isStyle}">热度排序<i class="hot_icon"></i></strong>
      <strong :class="sortField==='time'?'active':''" @click="query('time')" :style="{display:isStyle}">时间排序<i class="time_icon"></i></strong>
      <em class="all-ti all-ti1 lightcolor" :class="this.showList==true?'active':''" @click="azClick($event)" v-show="showList">全部题材</em>
      <em class="all-ti all-ti2 lightcolor" :class="this.showAz==true?'active':''" @click="listClick($event)" v-show="showAz" id="ss">返回列表</em>
    </div>
    <!-- <div class="fr changelist"><a @click="listClick($event)" class="list_icon" :class="this.showList==true?'active':''"></a><a class="kuai_icon" @click="azClick($event)" :class="this.showAz==true?'active':''"></a>
      </div> -->
  </div>
  <div class="main-list" v-show="showList">
    <ol class="topic-ol" :style="{  minHeight: fullHeight + 'px' }">
      <li v-for="allTopic of themeList" class="clearfix">
        <div class="content-box clearfix display-box">
          <div class="con-bar-1 box-flex-1">
            <router-link :to="{name:'topicDetail',params:{topicId:allTopic.topicCode}}" class="blue ">
              <div class="topic-name lightcolor">{{ allTopic.topicName }}</div>
              <div class="topic-chng-box">
                <span class="topic-chng" v-z3-updowncolor="allTopic.topicMarket===null || allTopic.topicMarket.chngPct===null?'--':allTopic.topicMarket.chngPct">{{ allTopic.topicMarket===null || allTopic.topicMarket.chngPct===null?'--':changeTofixed(allTopic.topicMarket.chngPct)}}</span>
              </div>
            </router-link>
          </div>
          <div class="con-bar-2 box-flex-1">
            <div class="topic-date-box"><span class="topic-date">发布时间：</span><span class="time-num">{{allTopic.declareDate==null?'--':format(allTopic.declareDate)}}</span></div>
            <div><span>成份股数：</span><span class="time-num2">{{allTopic.equityNum}}</span><span>近1年事件数：</span><span class="time-num2">{{allTopic.eventNum}}</span></div>
            <div class="topic-stk-box"><span>上涨家数：</span><span class="red time-num4">{{allTopic.topicMarket===null || allTopic.topicMarket.stkUpNum ===null?'--':allTopic.topicMarket.stkUpNum}}</span><span>下跌家数：</span><span class="green time-num4">{{allTopic.topicMarket===null || allTopic.topicMarket.stkDownNum ===null?'--':allTopic.topicMarket.stkDownNum}}</span></div>
          </div>
          <div class="con-cen box-flex-1">
            <div v-for="equity of allTopic.relatedEquity">
              <a :href="'/stock/'+equity.innerCode" target="_blank"><span class="blue equ-name" ref="equityname" v-z3-stock="{ref:'stockbox',code:equity.innerCode}" :value='equity.innerCode'>{{relatedStocks[equity.innerCode].name}}</span></a>
              <span class="equ-price" v-z3-updowncolor="relatedStocks[equity.innerCode].curChngPct">{{relatedStocks[equity.innerCode].price==null?'--':relatedStocks[equity.innerCode].price}}</span>
              <span class="equ-price" v-z3-updowncolor="relatedStocks[equity.innerCode].curChngPct">{{relatedStocks[equity.innerCode].curChngPct==null?'--':changeTofixed(relatedStocks[equity.innerCode].curChngPct)}}</span>
            </div>
            <div class="tooltip-box clearfix" v-if="hoverChartShow">
              <a href="##" target="_blank" class="name" v-stock-popup.name="direName"></a>
              <Stockkline :chartWidth="300" :chartHeight="200"></Stockkline>
              <div class="lenged_l">
                <span class="mr-10">--</span>
                <span class="mr-10">--</span>
                <span id="curChngPctTip">--</span>
              </div>
            </div>
          </div>
          <div class="con-right box-flex-1">
            <div v-for="news of allTopic.relatedNews" class="clearfix news-box">
              <router-link :to="{name:'detailPages',params:{id : news.newsId, detailType:'news'}}">
                <span @mouseenter="enterTopictit($event)" @mouseleave="leaveTopictit($event)" class="news-cons">
                        <i>{{news.title}}</i>
                        <span class="img fl"></span>
                <span class="new-tit">{{news.title==null?'--':news.title}}</span>
                <span class="new-date">[{{news.declareDate==null?'--':format(news.declareDate)}}]</span>
                <!-- <span class="new-srcname">{{news.srcName==null?'--':news.srcName}}</span> -->
                </span>
              </router-link>
            </div>
          </div>
          <div class="con-bar-3 box-flex-1">
            <!-- <router-link :to="{name:'topicDetail',params:{topicId:allTopic.topicCode}}"> -->
            <span class="desc-con" ref='text'><strong>主题简介：</strong>{{cutStr(allTopic.topicDesc,180)}}<i>{{allTopic.topicDesc}}</i></span>
            <!-- </router-link> -->
          </div>

        </div>

      </li>
    </ol>
    <Pagination @getPageFromChild="goToPage" :totalPage="totalPage" />
  </div>
  <div class="sortaz-wrap clearfix" v-show="showAz">
    <div class="az-main">
      <div class="sort-hot-wrap">
        <div class="sort-title fl">推荐<i>></i></div>
        <div class="sort-hot fl">
          <a class="blue hot-name" v-for="(updownTopic,index) of listChange">
            <router-link :to="{name:'topicDetail',params:{topicId:updownTopic.topicCode}}">{{updownTopic.topicName}}</router-link>
          </a>
        </div>
      </div>
      <ThemeSortAz :islink="true" />
    </div>
  </div>
  <StockBox ref="stockbox"></StockBox>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
import {
  formatDate,
  cutString
} from 'utils/date'
import Pagination from './pagination'
import ThemeSortAz from './theme-sort-az'
//  import { mutationTypes } from 'stores/z3tougu-theme'
import z3websocket from '../z3tougu/z3socket'
import StockBox from 'components/stock-box'
export default {
  data() {
    return {
      FIELDS: {
        hot: 'topicMarket.realChngPctWeek',
        time: 'declareDate',
        updown: 'topicMarket.chngPct'
      },
      sortField: '',
      fullHeight: document.documentElement.clientHeight - 133,
      page: 0,
      pagesize: '',
      isShow: true,
      isStyle: '',
      showList: true,
      showAz: false,
      hoverChartShow: false,
      showNewTit: false,
      direName: '',
      equity: {
        code: '',
        name: '',
        price: '',
        chg: '',
        curChngPct: ''

      },
      themeList: []
    }
  },

  computed: mapState({
    /* themeList: state => state.topic.themeList,*/
    themeListData: state => {
      const listData = state.topic.themeList
      return listData
    },
    totalPage: state => state.topic.total,
    listChange: state => state.topic.listChange,
    relatedStocks: state => state.topic.relatedStocks,
    socketState: state => state.z3sockjs.readystate,
    summary: state => {
      const startdata = state.topic.themeSummary
      // let summaryArr = []
      console.log(startdata.topicNum)
      const topicNum = startdata.topicNum + ''.split('')
      console.log(topicNum)
      return {
        topicNum: topicNum,
        topicUpNum: startdata.topicUpNum,
        topicDownNum: startdata.topicDownNum

      }
    },
    stockMessage: state => {
      const msg = state.z3sockjs.message
      if (msg && msg.data && msg.data.subject === 'snapshot') {
        const record = msg.data
        console.log(record)
        return {
          innerCode: record.stockCode,
          //  name: record.stockName,
          price: record.lastpx,
          chg: record.pxchg,
          curChngPct: record.pxchgratio
        }
      } else {
        return null
      }
    }
  }),
  components: {
    Pagination,
    ThemeSortAz,
    StockBox
  },
  methods: {
    query(type, page) {
      // if (this.sortField === type && page) {
      //   return
      // }
      this.sortField = type
      // sortField, page, pagesize, totalPages
      // this.$store.dispatch('topic/queryAllTopic', { sortField: this.FIELDS[this.sortField] })
      this.themeList = []
      this.$store.dispatch('topic/queryAllTopic', {
        sortField: this.FIELDS[this.sortField],
        page: this.page,
        pagesize: this.pagesize
      }).then(() => {
        this.themeList = this.themeListData
      })
    },
    list(type, page) {
      this.$store.dispatch('topic/queryListChange', {
        sortField: this.FIELDS.hot,
        page: this.page,
        pagesize: this.pagesize
      })
    },
    goToPage(page) {
      this.page = Number(page) - 1
    },
    updateVal() {
      this.direName = 'df'
    },
    /* showList: false,
          showAz: false,*/
    listClick(e) {
      e.preventDefault()
      this.showList = true
      this.showAz = false
      this.query('hot')
      this.isStyle = ''
    },
    azClick(e) {
      e.preventDefault()
      this.showList = false
      this.showAz = true
      this.list('updown')
      this.isStyle = 'none'
    },
    enterTopictit(e) {
      e.preventDefault()
      this.showNewTit = true
      /* console.log(e.currentTarget.children[0])*/
      e.currentTarget.children[0].style.display = 'block'
      e.currentTarget.setAttribute('class', 'news-cons news-cons2')
    },
    leaveTopictit(e) {
      e.preventDefault()
      this.showNewTit = false
      e.currentTarget.children[0].style.display = 'none'
      e.currentTarget.setAttribute('class', 'news-cons')
    },
    /* listChangeClick (type, e) {
      e.preventDefault()
      this.isShow = !this.isShow
      if (type === 'kuai') {
        this.list('updown')
        this.isStyle = 'none'
      } else {
        this.query('hot')
        this.isStyle = ''
      }
    },*/
    format(date) {
      return formatDate(date)
    },
    cutStr(str, len) {
      return cutString(str, len)
    },
    changeTofixed(num) {
      return num > 0 ? '+' + parseFloat(num).toFixed(2) + '%' : parseFloat(num).toFixed(2) + '%'
    },
    checkNull(str) {
      if (str === null) {
        return '--'
      } else {
        return str
      }
    },
    updateStock(stock) {
      this.$store.commit('topic/UPDATE_TOPIC_RELSTOCK', stock)
    },
    subscribeStock() {
      const msg = {
        subject: 'snapshot',
        type: '1',
        actionType: '1',
        stockCodeList: Object.keys(this.relatedStocks),
        token: ''
      }
      this.$store.dispatch('z3sockjs/send', msg)
    }
  },
  watch: {
    page() {
      this.themeList = []
      this.query(this.sortField, this.page)
    },
    relatedStocks() {
      console.log(this.relatedStocks)
      if (z3websocket.ws) {
        z3websocket.ws && z3websocket.ws.close()
      } else {
        this.$store.dispatch('z3sockjs/init')
      }
    },
    stockMessage() {
      console.log(this.stockMessage)
      if (this.stockMessage) {
        this.updateStock(this.stockMessage)
      }
    },

    socketState() {
      if (this.socketState === 1) {
        // 建立连接
        this.subscribeStock()
      } else if (this.socketState === 3) {
        // 断开连接，重新建立连接
        this.$store.dispatch('z3sockjs/init')
      }
    }
  },
  mounted() {
    this.query('hot')
    var _this = this
    this.$store.dispatch('topic/querySummary')
    this.sumTime = setInterval(function() {
      _this.$store.dispatch('topic/querySummary')
    }, 30000)
  },
  destroyed() {
    z3websocket.ws && z3websocket.ws.close()
    this.sumTime && clearInterval(this.sumTime)
  }
}
</script>
