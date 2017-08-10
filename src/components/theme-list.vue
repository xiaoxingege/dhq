<style lang="scss" scoped>
    @import '../assets/css/base.css';
    *{
      text-align: justify;
    }
    body{

    }
    h3{
      font-weight: 400;
    }
    em,i{
      font-style: normal;
    }
    .fr{
      float: right;
    }
    .fl{
      float: right;
    }
    .blue{
      color: #2388da;
    }
    .red{
      color:#e6363a !important;
    }
    .green {
      color:#48a854 !important;
    }
    /*  */
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
    .theme-list{
      font-size: 12px;
      width: 100%;
    }
    .hot-top{
      padding: 15px 30px 11px 15px; 
      color: #191919;
    }
    .topic-num{
      width: 30px;
      text-align: right;
    }
    .topic-num3{
      width: 20px;
      text-align: right;
    }
    .theme-list-ul{
        padding-left: 10px;
        padding-right: 2px;
    }
    .theme-bar-li{
        width: 22%;
        background: #fff;
        padding: 11px;
       /*  float: left; */
        margin-right: 6px;
        border-radius: 3px;
        border: 1px solid #e5e5e5;
        background: #fff;

    }
    .top-content{
    }
    .bar-tit{

    }
    .bar-txt{
      line-height: 17px;
      margin: 18px 0 22px 0;
    }

    .bar-tit span{
      width: 57px;
      height: 18px;
      line-height: 18px;
      border-radius: 3px;
      border: 1px solid #2388da;
      text-align: center;
      display: inline-block;
    }
    .txt-con{
      /* height: 70px;
      width: 100%;
      white-space: nowrap;  
      overflow: hidden;  
      text-overflow: ellipsis; */ 
     
    }
    .txt-srcName{
      
    }
    .theme-bar-title{
      font-size: 14px;
      display: inline-block; 
      text-align: left;
      line-height: 18px;
    }
    span{
      text-align: left;
      color: #191919;
    }
    .li-bottom{
      padding:11px 0 3px 0;
      border-top:1px solid #e5e5e5;
    }
    .bottom-Market{
      width: 60px;
      text-align: center;
      display: inline-block;
    }
    .bottom-Market2{
      width: 40px;
      text-align: center;
      display: inline-block;

    }
    .bottom-Market3{
      width: 20px;
      text-align: center;
      display: inline-block;

    }
</style>
<template>
<div class="theme-list">
    <div class="hot-top">
        <span>精选热点主题概念</span>
        <div class="fr top-content">
            <span>平台实时精选主题概念  </span><span class="blue topic-num">{{summary.topicNum}}</span>,其中上涨<span class="red topic-num">{{summary.topicUpNum}}</span>,下跌<span class="green topic-num3" >{{summary.topicDownNum}}</span>
        </div>
    </div>
    <ul class="theme-list-ul display-box">
        <li class="theme-bar-li box-flex-1" v-for="topic of topicList">
          <div class="bar-tit">
            <a class="theme-bar-title blue">{{topic.topicName}}</a>
            <span class="blue bar-title2">主题简介</span>
          </div>
          <div class="bar-txt">
            <strong>最新事件：</strong>
            <span class="txt-con">
               <span>{{cutStr(topic.topicDesc,320)}}</span>
              （<span>{{format(topic.newsDeclareDate)}}</span>   <span>{{topic.srcName}}</span>）
            </span>
          </div>
          <div class="li-bottom">
              今日涨跌<a class="bottom-Market" :class="topic.topicMarket.chngPct>0 ? 'red':'green'">{{ changeTofixed(topic.topicMarket.chngPct)}}</a>
              上涨股票<span class="red bottom-Market2">{{topic.topicMarket.stkUpNum}}</span>下跌股票<span class="green bottom-Market3">{{topic.topicMarket.stkDownNum}}</span>
          </div>
         </li>
    </ul>
</div>
</template>

<script>
 import { mapState } from 'vuex'
 import { formatDate } from 'utils/date'
 import { cutString } from 'utils/date'
 export default {
   data () {
     return {}
   },
   props: ['placeholder'],
   computed: mapState({
     summary: state => state.topic.themeSummary, // state.topic.themeSummary,其中topic 是store 名字
     topicList: state => state.topic.hotlist
   }),
   components: {},
   methods: {
     format (date) {
       return formatDate(date)
     },
     changeTofixed (num) {
       return num > 0 ? '+' + num.toFixed(2) + '%' : num.toFixed(2) + '%'
     },
     cutStr (str, len) {
       return cutString(str, len)
     }
 
   },
   mounted () {
     this.$store.dispatch('topic/queryHot')
     this.$store.dispatch('topic/querySummary')
   }
 
 }
</script>
