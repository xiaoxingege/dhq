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
    }
   
   
    
</style>
<template> 
   <div class="backtest-time">
      <div class="btime-main">
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
