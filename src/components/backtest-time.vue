<style lang="scss" scoped>
    @import '../assets/css/base.css';
    *{
      text-align: justify;
    }
    body{
      font-size: 12px;
      background: #f2f2f2;
    }
    .blue{
      color: #2388da;
      font-size: 12px;
    }
    .red{
      color:#e6363a ;
    }
    .green {
      color:#48a854 ;
    }
    .fr{
      float: right;
    }
    .fl{
      float: left;
    }
    .backtest-time{
        background: #f2f2f2;
        color: #191919;
        width: 100%;
        font-size: 12px;
    }
    .btime-main{
       padding: 0 10px 0;
       position: relative;
    }
    .icon{
      position: absolute;
      right: 15px;
      top: 3px;
    }
    .weixin{
      height: 18px;
      width: 22px;
      display: inline-block;
      background: url(../assets/images/z3img/back-weixin.png) no-repeat;
      margin-right: 12px;
      cursor:pointer;
    }
    .copy{
      height: 22px;
      width: 22px;
      display: inline-block;
      background: url(../assets/images/z3img/back-copy.png) no-repeat;
      cursor:pointer;
    }
    
</style>
<template> 
   <div class="backtest-time">
      <div class="btime-main">
           <div class="fr icon"><a class="weixin"></a><a class="copy"></a></div>
           <BackTimeStra/> 
           <BackTimeKline/>
              
      </div>
      
      
   </div>
       
</template>

<script>
 import { mapState } from 'vuex'
 import BackTimeStra from './back-time-stra'
 import BackTimeKline from './back-time-kline'
 export default {
   data () {
     return {
 
     }
   },
   computed: mapState({
 
   }),
   components: {
     BackTimeStra,
     BackTimeKline
   },
   methods: {
 
   },
   mounted () {
 
   }
 
 }
</script>
