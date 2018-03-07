<style>
@import '../assets/css/reset.css';
.payment-success{
  box-sizing: border-box;
  position: relative;
  font-family: Microsoft Yahei, Helvetica, Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif;
}
.top{
  box-sizing: border-box;
  height: 47%;
  padding:1.76rem 0 0 1.35rem;
}
.bottom{
  box-sizing: border-box;
  height: 53%;
  position: relative;
}
.top-content{
  height: 1.2rem;
  overflow: hidden;
}
.hint-img{
  display: block;
  width:1.2rem;
  height: 1.2rem;
  float: left;
}
.hint-text{
  float: left;
  margin-left:0.25rem;
}
.hint-text h3{
  font-size: 0.48rem;
  color:#333;
  font-weight: 600;
  height: 0.54rem;
  line-height: 0.54rem;
  margin-top:0.05rem;
}
.hint-text p{
  font-size: 0.28rem;
  color:#888;
  margin-top:0.15rem;
}
.download-text{
  font-size: 0.32rem;
  line-height: 0.46rem;
  color:#333;
  text-align: center;
}
.download-logo{
  display: block;
  width:1.79rem;
  height: 1.79rem;
  margin:0.3rem auto 0.35rem;;
}
.download-btn{
  width:4.2rem;
  height: 0.9rem;
  background: RGBA(245, 73, 73, 1);
  color:#fff;
  font-size: 0.32rem;
  line-height: 0.9rem;
  text-align: center;
  margin:0 auto;
}
.phone{
  font-size:0.26rem;
  color:rgba(170,170,170,1);
  line-height:0.3rem;
  text-align: center;
  width:100%;
  position: absolute;
  bottom: 0.65rem;
}
</style>

<template>
<div class="payment-success" :style="{height:containerHeight+'px'}">
  <div class="top">
    <div class="top-content">
      <img v-if="status === 0" class="hint-img" src="../assets/images/payment/order-success.png" alt="">
      <img v-if="status === 1" class="hint-img" src="../assets/images/payment/order-fail.png" alt="">
      <img v-if="status === 1" class="hint-img" src="../assets/images/payment/order-others.png" alt="">

      <div  class="hint-text">
        <h3>订单支付成功</h3>
        <p>订单号：11034389898943</p>
      </div>
    </div>
  </div>
  <div class="bottom">
    <div class="download-text">
      请下载金融界App <br>
      获取智能投顾工作室服务
    </div>
    <img class="download-logo" src="../assets/images/payment/logo.png" alt="">
    <div class="download-btn" @click="toDownload()">
      立即下载
    </div>
    <p class="phone">客服电话：400-166-1188</p>
  </div>
</div>
</template>

<script>
import 'whatwg-fetch'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery

export default {
  data() {
    return {
      containerHeight:600,
      timeStamp:20180306164934,
      bizCode:5,
      // sellerOrderId:13072357130764862668861200000552,
      sellerOrderId:'13072576524616656076862400000581',
      status:0
    }
  },
  beforecreated() {

  },
  created() {
    document.title = '订单状态'
  },
  mounted() {
    console.log(this.sellerOrderId)
    this.containerHeight=window.screen.height
    this.getPaymentResult()
  },
  methods: {
    toDownload(){
      window.location.href='http://appcms.jrj.com.cn/download.jspa?channel=transfer1&tgqdcode=transfer'
    },
    getPaymentResult(){
      // https://cashier.jrj.com.cn/order/resultquery?version=1.0&signType=2&timeStamp=20180306144934&sign=abc&bizCode=5&sellerOrderId=13072576524616656076862400000581
      // https://cashier.jrj.com.cn/order/resultquery?version=1.0&signType=2&timeStamp=20180306164934&sign=abc&bizCode=5&sellerOrderId=1.3072576524616655e+31&callback=jQuery321011057758869628476_1520331495885&_=1520331495886
      var url='http://cashier.jrj.com.cn/order/resultquery'
      url=url+'?version=1.0&signType=2&timeStamp='+this.timeStamp+'&sign=abc&bizCode='+this.bizCode+'&sellerOrderId='+this.sellerOrderId
      console.log(url)
      $.ajax({
        url:url,
        type:'get',
        cache:false,
        dataType:'json',
        success:function(d){
          if (d.retcode === 0) {
            if (d.data) {
              alert(d.data.status)
              console.log(d.data.status)
							this.status=d.data.status
            }
          }else{
            console.log(d.msg)
          }
        },
        error:function(){
          console.log('error')
        }
      })

    }
  }
}
</script>
