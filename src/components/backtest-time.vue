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
      top: 8px;
    }
    .weixin{
      height: 22px;
      width: 24px;
      display: inline-block;
      background: url(../assets/images/z3img/back-weixin.png) no-repeat;
      margin-right: 12px;
      cursor:pointer;
    }
    .copy{
      height: 22px;
      width: 24px;
      display: inline-block;
      background: url(../assets/images/z3img/back-copy.png) no-repeat;
      cursor:pointer;
    }
    .qrcode{
      position:absolute;
      top:40px;
      right:10px;
      box-shadow:4px 4px 4px 2px #eee;
      border:1px solid #eee
    }
    
</style>
<template> 
   <div class="backtest-time">
      <div class="btime-main">
           <div class="fr icon"><span class="weixin" @click="showQrcode"></span><span class="copy"></span></div>
           <BackTimeStra/> 
           <BackTimeKline/>     
      </div>
      <div v-show="showQrcodeBox" class="qrcode" >
          <div><canvas ref="qrcode"></canvas></div>
      </div>
   </div>
       
</template>

<script>
 import { mapState } from 'vuex'
 import BackTimeStra from './back-time-stra'
 import BackTimeKline from './back-time-kline'
 import qrcode from 'qrcode'
 export default {
   data () {
     return {
       showQrcodeBox: false,
       strategyId: this.$route.params.strategyId
     }
   },
   computed: mapState({
 
   }),
   components: {
     BackTimeStra,
     BackTimeKline
   },
   methods: {
     showQrcode () {
       this.showQrcodeBox = !this.showQrcodeBox
     }
   },
   mounted () {
     const url = window.location.protocol + '//' + window.location.host + '/backtestTimeH5/' + this.strategyId
     console.info(url)
     qrcode.toDataURL(this.$refs.qrcode, url, function () {})
   }
 
 }
</script>
