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
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 0.48rem;
  color:#333;
  font-weight: 600;
}
/* .order-num{
  font-size: 0.28rem;
  color:#888;
} */
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
      <img v-if="status === 1" class="hint-img" src="../assets/images/payment/order-success.png" alt="">
      <img v-else-if="status === 0 || status === 2 || status === 3 || status === 4 || status === 5" class="hint-img" src="../assets/images/payment/order-others.png" alt="">
      <img v-else class="hint-img" src="../assets/images/payment/order-fail.png" alt="">

      <div v-if="status === 1" class="hint-text">订单支付成功</div>
      <div v-else-if="status === 0" class="hint-text">订单待支付</div>
      <div v-else-if="status === 2" class="hint-text">订单退款中</div>
      <div v-else-if="status === 3" class="hint-text">订单退款成功</div>
      <div v-else-if="status === 4" class="hint-text">订单已关闭</div>
      <div v-else-if="status === 5" class="hint-text">订单分单支付中</div>
      <div v-else class="hint-text">未获取到订单</div>
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
      timeStamp:'',
      bizCode:this.getQueryString('bizCode') ? this.getQueryString('bizCode'):'5',
      sellerOrderId:this.getQueryString('sellerOrderId') ? this.getQueryString('sellerOrderId'):'0',
      status:10
    }
  },
  beforecreated() {

  },
  created() {
    document.title = '订单状态'
  },
  mounted() {
    console.log(this.bizCode)
    console.log(this.sellerOrderId)
    this.containerHeight = $(window).height()
    this.getTimeStamp()
  },
  methods: {
    toDownload(){
      window.location.href='http://appcms.jrj.com.cn/download.jspa?channel=transfer1&tgqdcode=transfer'
    },
    getQueryString (name,chinese) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
      var r = window.location.search.substr(1).match(reg)
			if (chinese) {
				if (r != null) return decodeURI(r[2])
			}else{
				if (r != null) return unescape(r[2])
			}
      return null
    },
    getTimeStamp(){
      var url='https://cashier.jrj.com.cn/order/resultquery'
      fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
      }).then((res) => {
        return res.json()
      }).then(d => {
        if (d.retCode === 1) {
          if (d.data.timeStamp) {
            console.log('getTimeStamp-d-timeStamp：'+d.data.timeStamp)
            console.log('getTimeStamp-timeStamp：'+this.timeStamp)
            this.timeStamp = d.data.timeStamp
            this.getPaymentResult()
          }
        }else{
          console.log(d.msg)
        }
      }).catch(v2 => {
        console.log(v2)
      })
    },
    getPaymentResult(){
      // https://cashier.jrj.com.cn/order/resultquery?version=1.0&signType=2&timeStamp=20180306144934&sign=abc&bizCode=5&sellerOrderId=13072576524616656076862400000581
      // https://cashier.jrj.com.cn/order/resultquery?version=1.0&signType=2&timeStamp=20180306164934&sign=abc&bizCode=5&sellerOrderId=1.3072576524616655e+31&callback=jQuery321011057758869628476_1520331495885&_=1520331495886
      console.log('getPaymentResult-timeStamp：'+this.timeStamp)
      var url='https://cashier.jrj.com.cn/order/resultquery'
      url=url+'?version=1.0&signType=2&timeStamp='+this.timeStamp+'&sign=abc&bizCode='+this.bizCode+'&sellerOrderId='+this.sellerOrderId
      console.log(url)
      fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
      }).then((res) => {
        return res.json()
      }).then(d => {
        if (d.retCode === 0) {
          if (d.data) {
            console.log(d.data.status)
            console.log( typeof (d.data.status) )
						this.status=d.data.status
          }
        }else{
          console.log(d.msg)
        }
      }).catch(v2 => {
        console.log(v2)
      })
    }


  }
}
</script>
