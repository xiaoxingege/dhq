<style>
@import '../assets/css/reset.css';
.conpon{
  font-family: PingFang SC;
  margin-top: 0.89rem;
}
.conpon p{
  width:6.88rem;
  line-height: 0.46rem;
  font-size: 0.28rem;
  color: #888888;
  margin: 0 0.32rem 0.26rem 0.3rem;
}
.strong-two{
  color: #333333;
}
.telphone{
  color: #2E7CD7;
}
.work-time{
  font-family: PingFang-SC-Medium;
  font-size: 0.24rem;
  margin-left: 0.2rem;
}

</style>

<template>
  <div class="conpon">
    <p>1.同时带有“可叠加使用”的优惠券可叠加使用；</p>
    <p>2.带有“可叠加使用”的优惠券不可与不带有此标识的优惠券叠加使用；</p>
    <p>3.在支付时每次最多只能使用<span class="strong-two">2</span>张可叠加优惠券，优惠券使用问题请咨询金融界客服：</p>
    <p>客服电话<a class="telphone" @click="tel"> 400-166-1188</a>
    <span class="work-time">(工作时间 8：00-22：00)</span>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '你的名字'
    }
  },
  mounted () {
    document.title = '可叠加优惠券使用说明'
  },
  methods: {
    tel(){
      window.jrj.jsCallNative(1112, JSON.stringify({
     tel:'400-166-1188'
    }))
      }
  }
}
</script>
