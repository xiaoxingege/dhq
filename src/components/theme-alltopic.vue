<style lang="scss" scoped>
    @import '../assets/css/base.css';
    *{
      text-align: justify;
    }
    em,i{
      font-style: normal;
    }
    
    .blue{
      color: #2388da;
      font-size: 12px;
    }
    .red{
      color:#e6363a !important;
    }
    .green {
      color:#48a854 !important;
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
    .alltopic{
      width: 100%;
      font-size: 12px;
      color: #191919;
    }
    span{
      color: #191919;
    }
    .topic-head{
      font-weight: normal;
      padding-left: 15px;
      margin:12px 0 -4px 0; 
    }
    .topic-head em{
      padding-right: 65px;
      font-size: 12px;
    }
    .topic-head span{
      width: 82px; 
      height: 20px;
      float: right;
      line-height: 20px;
      /* display: inline-block; */
      border-radius: 3px;
      border: 1px solid #e5e5e5;
      color: #4f5256;
      text-align: center;
      background: #fff;
      margin-left: 14px;
      cursor: pointer;
      font-size: 12px;
      /* padding: 4px 8px 5px 15px; */
    }
    .alltopic span.active{
      color: #2388da;
      background: #fff;
      border: 1px solid #2388da;
    }
    span.active .hot_icon{
      background-position: -2px 1px;

    }
    span.active .time_icon{
      background-position: 1px -34px;

    }
    .hot_icon,.time_icon{
      height: 10px;
      display: inline-block;
      background: url(../assets/images/z3img/theme_icon.png) no-repeat;
    }
    .hot_icon{
      width: 6px;
      background-position: -2px -10px;
      margin-left: 5px;
    }
    .time_icon{
      width: 11px;
      background-position: 1px -22px;
      margin-left: 4px;
    }
    .changelist{
      margin-right: 16px;
      margin-top: 5px;
    }
    .changelist a{
      width: 11px;
      height: 11px;
      display: inline-block;
      background: url(../assets/images/z3img/theme_icon.png) no-repeat 1px -45px;
      cursor: pointer;
    }
    a.list_icon{
      background-position: 1px -45px;
      margin-right: 10px;
    }
    a.kuai_icon{
      background-position: 1px -69px;
    }
    .list_icon.active{
      background-position: 1px -57px;
    }
    .kuai_icon.active{
      background-position: 1px -82px;
    }
    .con-left{
      width: 36%;
      float: left;
      margin-right: 5%;
    }
    .content{
      line-height: 24px;
      cursor: pointer;
    }
    .content:hover{
      color: #2388da;
    }
    .content-head{
      margin-bottom: 20px;
    }
    .content-box{

    }
    .con-cen{
      width: 18%;
      float: left;
      line-height: 24px;
     /*  margin-top: -6px; */

    }
    .con-right{
      width: 40%;
      float: left;
      line-height: 24px;
     
    }
    .topic-ol{
      padding-left: 8px;
      padding-right: 8px;
    }
    .topic-ol li{
      padding: 10px 15px 40px 13px;
      background: #ffffff;
      border-radius: 3px;
      margin-bottom: 8px;
      border: 1px solid #e5e5e5;
    }
    
    .topic-name{
      font-weight: 900;
      width: 36%;
      margin-right: 5%;
      float: left;
      cursor: pointer;

    }
    
    .topic-time{
      float: left;

    }
    .topic-time span{
      display: inline-block;
    }
    .time-num{
      width: 90px;
      text-align: center;
    }
    .time-num2{
      width: 49px;
      text-align: center;
    }
    .time-num3{
      width: 60px;
      text-align: center;
    }
    .time-num4{
      width: 37px;
      text-align: center;
    }
    .equ-name{
      width: 60px;
      display: inline-block;
      text-align: left;
    }
    .equ-price{
      width: 26%;
      display: inline-block;
      text-align: center;

    }
    .new-tit{
      width: 50%;
      text-align: left;
      float: left;
      white-space: nowrap;  
      overflow: hidden;  
      text-overflow: ellipsis; 
      cursor: pointer;

    }
    .new-tit:hover{
      color:#2388da;
    }
    .new-date{
      color: #7e7e7e;
      margin-left: 18px;
      line-height: 24px;
      float: left;
    }
    .new-srcname{
      color: #7e7e7e;
      margin-left: 18px;
      line-height: 24px;
      float: left;

    }
    .sortaz-wrap{
     /*  display: none; */
      padding: 0 8px;
      margin-top: 12px;
    }
    .az-main{
        background: #fff;
        border-radius: 3px;
        border-top:1px solid #e5e5e5;
    }
    .sort-hot{
      width: 62%;
      margin: 13px auto 13px;

    }
    .hot-name{
     /*  margin-left: 19px; */
     width: 10%;
     display: inline-block;
     text-align: center;
    }
    .alltopic .page{
      text-align: center;
      padding: 0;
      background: #f2f2f2;
    }
</style>
<template>
<div class="alltopic clearfix">
    <div class="clearfix topic-head">
       <div class="fl">
            <em>全部主题概念</em>
            <span :class="sortField==='updown'?'active':''" @click="query('updown')" :style="{display:isStyle}">涨跌幅排序<i class="hot_icon"></i></span>
            <span :class="sortField==='time'?'active':''" @click="query('time')" :style="{display:isStyle}">时间排序<i class="time_icon"></i></span>
            <span @click="query('hot')" :class="sortField==='hot'?'active':''" :style="{display:isStyle}">热度排序<i class="hot_icon"></i></span>
        </div>
        <div class="fr changelist"><a @click="toggleShow()" class="list_icon" :class="this.isShow==true?'active':''"></a><a class="kuai_icon" @click="toggleShow('kuai')" :class="this.isShow==!true?'active':''"></a></div>
    </div>
    <div class="main-list" v-show="isShow">
      <ol class="topic-ol" >
        <li v-for="allTopic of themeList" class="clearfix">
           <div class="content-head clearfix">
                <div class="topic-name">
                 <router-link :to="{name:'topicDetail',params:{topicId:allTopic.topicCode}}" class="blue "> {{ allTopic.topicName }}</router-link>
                </div>
                <div class="topic-time">
                    <span class="">发布时间</span><span class="blue time-num">{{format(allTopic.declareDate)}}</span><span>成分股数</span><span class="blue time-num2">{{allTopic.equityNum}}只</span><span>相关新闻</span><span class="blue time-num2">{{allTopic.eventNum}}条</span>
                    <span>今日涨跌</span>
                    <span class="time-num3" :class="allTopic.topicMarket.chngPct>0 ? 'red':'green'">{{ allTopic.topicMarket==null || allTopic.topicMarket.chngPct==null?'--':changeTofixed(allTopic.topicMarket.chngPct)}}</span><span>上涨股票</span><span class="red time-num4">{{allTopic.topicMarket==null || allTopic.topicMarket.stkUpNum ==null?'--':allTopic.topicMarket.stkUpNum}}</span><span>下跌股票</span><span class="green time-num4">{{allTopic.topicMarket==null || allTopic.topicMarket.stkDownNum ==null?'--':allTopic.topicMarket.stkDownNum}}</span>
                </div>
           </div>
           <div class="content-box clearfix">
               <div  class="con-left">
                   <strong>主题简介:</strong><router-link :to="{name:'topicDetail',params:{topicId:allTopic.topicCode}}" ><span class='content' :title="allTopic.topicDesc" ref="txtheight">{{allTopic.topicDesc}}</span></router-link>
               </div>
               <div  class="con-cen">
                  <div v-for="equity of allTopic.relatedEquity"><span class="blue equ-name">{{equity.name}}</span><span class="equ-price" :class="equity.curChngPct>0 ? 'red':'green'">{{equity.price==null?'--':equity.price}}</span><span class="equ-price" :class="equity.curChngPct>0 ? 'red':'green'">{{equity.curChngPct==null?'--':changeTofixed(equity.curChngPct)}}</span></div>
               </div>
               <div  class="con-right" >
                   <div v-for="news of allTopic.relatedNews" class="clearfix">
                      <router-link :to="{name:'detailPages',params:{id : news.newsId, detailType:'news'}}"> <span class="new-tit" :title="news.title">{{news.title}}</span>
                       <span class="new-date">{{format(news.declareDate)}}</span>
                       <span class="new-srcname">{{news.srcName}}</span></router-link>
                    </div>
                </div>
           </div>
        </li>
      </ol>
     <Pagination  @getPageFromChild="goToPage" :totalPage="totalPage"/>
    </div>
    <div class="sortaz-wrap clearfix" v-show="!isShow">
      <div class="az-main">
            <div class="sort-hot" >
                 <a class="blue hot-name" v-for="(allTopic,index) of themeList">{{allTopic.topicName}}</a>
            </div>
            <ThemeSortAz/>
      </div>
    </div>
</div>
</template>

<script>
 import { mapState } from 'vuex'
 import { formatDate } from 'utils/date'
 import Pagination from './pagination'
 import ThemeSortAz from './theme-sort-az'
 export default {
   data () {
     return {
       FIELDS: { hot: 'topicMarket.realChngPctWeek', time: 'declareDate', updown: 'topicMarket.chngPct' },
       sortField: '',
       page: '',
       pagesize: '',
       isShow: true,
       isStyle: ''
     }
   },
 
   computed: mapState({
     themeList: state => state.topic.themeList,
     totalPage: state => state.topic.total
     /*,
     tota
     page: state => state.topic.page,
     pagesize: state => state.topic.pagesize,
     totalPage: state => state.topic.totalPage*/
   }),
   components: {
     Pagination,
     ThemeSortAz
   },
   methods: {
     query (type, page) {
       // if (this.sortField === type && page) {
       //   return
       // }
       this.sortField = type
      // sortField, page, pagesize, totalPages
       // this.$store.dispatch('topic/queryAllTopic', { sortField: this.FIELDS[this.sortField] })
       this.$store.dispatch('topic/queryAllTopic', { sortField: this.FIELDS[this.sortField], page: this.page, pagesize: this.pagesize })
     },
     goToPage (page) {
       this.page = page
     },
     init () {
      /* this.H = this.$refs.txtheight.style.cssText
       alert(this.H)*/
     },
     toggleShow (type) {
       this.isShow = !this.isShow
       if (type === 'kuai') {
         this.query('updown')
         this.isStyle = 'none'
       } else {
         this.query('hot')
         this.isStyle = ''
       }
     },
     format (date) {
       return formatDate(date)
     },
     changeTofixed (num) {
       return num > 0 ? '+' + parseFloat(num).toFixed(2) + '%' : parseFloat(num).toFixed(2) + '%'
     }
   },
   watch: {
     page () {
       this.query(this.sortField, this.page)
     }/*,
     isShow: function (val) {
       val ? this.btnStyle = 'Primary' : this.btnStyle = 'Default'
     }*/
   },
   mounted () {
     this.query('hot')
     this.init()
   }
 
 }
</script>
