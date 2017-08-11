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
      line-height: 20px;
      border-radius: 3px;
      border: 1px solid #e5e5e5;
      display: inline-block;
      color: #4f5256;
      text-align: center;
      background: #fff;
      margin-left: 14px;
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
      margin-right: 12px;
      margin-top: 5px;
    }
    .changelist a{
      width: 11px;
      height: 11px;
      display: inline-block;
      background: url(../assets/images/z3img/theme_icon.png) no-repeat 1px -45px;
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
      padding-left: 9px;
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

    }
    .new-date{
      color: #7e7e7e;
      margin-left: 18px;
      line-height: 24px;
      float: left;
    }
</style>
<template>
<div class="alltopic clearfix">
    <div class="clearfix topic-head">
       <div class="fl">
        <em>全部主题概念</em><span @click="query('hot')" :class="sortField==='hot'?'active':''" >热度排序<i class="hot_icon"></i></span><span :class="sortField==='time'?'active':''" @click="query('time')">时间排序<i class="time_icon"></i></span><span :class="sortField==='updown'?'active':''" @click="query('updown')">涨跌幅排序<i class="hot_icon"></i></span>
        </div>
        <div class="fr changelist"><a href="#" class="list_icon active"></a><a href="#" class="kuai_icon"></a></div>
    </div>
     <ol class="topic-ol">
        <li v-for="allTopic of themeList" class="clearfix">
           <div class="content-head clearfix">
                <div class="topic-name">
                  <span class="blue "> {{ allTopic.topicName }}</span>
                </div>
                <div class="topic-time">
                    <span class="">发布时间</span><span class="blue time-num">{{format(allTopic.declareDate)}}</span><span>成分股数</span><span class="blue time-num2">{{allTopic.equityNum}}只</span><span>相关新闻</span><span class="blue time-num2">{{allTopic.eventNum}}条</span>
                    <span>今日涨跌</span>
                    <span class="time-num3" :class="allTopic.topicMarket.chngPct>0 ? 'red':'green'">{{ changeTofixed(allTopic.topicMarket.chngPct)}}</span><span>上涨股票</span><span class="red time-num4">{{allTopic.topicMarket.stkUpNum}}</span><span>下跌股票</span><span class="green time-num4">{{allTopic.topicMarket.stkDownNum}}</span>
                </div>
           </div>
           <div class="content-box clearfix">
               <div  class="con-left">
                   <strong>主题简介:</strong><span class='content'>{{allTopic.topicDesc}}</span>
               </div>
               <div  class="con-cen">
                  <div v-for="equity of allTopic.relatedEquity"><span class="blue equ-name">{{equity.name}}</span><span class="equ-price" :class="equity.curChngPct>0 ? 'red':'green'">{{equity.price==null?'--':equity.price}}</span><span class="equ-price" :class="equity.curChngPct>0 ? 'red':'green'">{{equity.curChngPct==null?'--':changeTofixed(equity.curChngPct)}}</span></div>
               </div>
               <div  class="con-right" >
                   <div v-for="news of allTopic.relatedNews" class="clearfix">
                       <span class="new-tit">{{news.title}}</span>
                       <span class="new-date">{{format(news.declareDate)}}</span>
                       <span class="new-date">{{news.srcName}}</span>
                    </div>
                </div>
           </div>
        </li>
    </ol>
</div>
</template>

<script>
 import { mapState } from 'vuex'
 import { formatDate } from 'utils/date'
 export default {
   data () {
     return {
       FIELDS: { hot: 'topicMarket.realChngPctWeek', time: 'declareDate', updown: 'topicMarket.chngPct' },
       sortField: ''
     }
   },
   props: ['placeholder'],
   computed: mapState({
     themeList: state => state.topic.themeList
   }),
   components: {},
   methods: {
     query (type) {
       if (this.sortField === type) {
         return
       }
       this.sortField = type
       this.$store.dispatch('topic/queryAllTopic', { sortField: this.FIELDS[this.sortField] })
     },
     format (date) {
       return formatDate(date)
     },
     changeTofixed (num) {
       return num > 0 ? '+' + parseFloat(num).toFixed(2) + '%' : parseFloat(num).toFixed(2) + '%'
     }
 
   },
   mounted () {
     this.query('hot')
   }
 
 }
</script>
