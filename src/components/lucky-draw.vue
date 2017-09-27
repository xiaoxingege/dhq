<style>
@import '../assets/css/reset.css';
.lucky-draw {
  min-height: 20rem;
  font-size: 40px;
  color: #fff;
  background: #ff4200;
}
.banner{
  width:7.5rem;
  height: 5.24rem;
  background: url(../assets/images/lucky-draw/banner.png) center no-repeat;
  background-size: 100%;
}
.banner-top{
  height: 1.28rem;
  background: #fff;
}
.gold-bean-num{
  box-sizing:border-box;
  height: 0.48rem;
  width:3.6rem;
  margin:3.11rem auto 0;
  background: #44090d;
  border:2px solid #fff100;
  border-radius: 0.24rem;
  font-size: 0.28rem;
  overflow: hidden;
}
.gold-bean-icon{
  float: left;
  width:0.29rem;
  height: 0.29rem;
  margin:0.1rem 0.19rem 0;
  background: url(../assets/images/lucky-draw/gold-bean.png) center no-repeat;
  background-size: 100%;
}
.gold-bean-text{
  float: left;
  line-height: 0.46rem;
  color:#fff100;
}
.notification{
  height: 0.74rem;
  width:6.36rem;
  background: #9b29ba;
  border-radius: 2px;
  margin:0 auto;
}
.notification-icon{
  float: left;
  width:0.33rem;
  height: 0.33rem;
  margin:0.21rem 0.21rem 0.2rem;
  background: url(../assets/images/lucky-draw/notification-icon.png) center no-repeat;
  background-size: 100%;
}
.notification-text{
  float: left;
  padding-left:0.2rem;
  width:5.59rem;
  height: 0.7rem;
  box-sizing: border-box;
  background: #6b1f9f;
  border-radius: 0.02rem;
  margin:0.02rem 0.02rem 0.02rem 0;
  font-size: 0.28rem;
  line-height: 0.7rem;
}
.notification-text span{
  color: #fff;

}
.notification-text var{
  color: #fff;
  font-style: normal;
}
</style>

<template>
<div class="lucky-draw">
  <div class="banner">
    <div class="banner-top"></div>
    <div class="gold-bean-num">
      <span class="gold-bean-icon"></span>
      <p class="gold-bean-text">
        我的金豆数：10000
      </p>
    </div>
  </div>
  <div class="notification">
    <span class="notification-icon"></span>
    <p class="notification-text">
      <span>恭喜 “网******8” 抽中</span>
      <var>Z点操盘3日卡</var>
    </p>
  </div>
</div>
</template>

<script>
import 'whatwg-fetch'

export default {
  data () {
    return {

    }
  },
  mounted () {

  },
  filters: {

  },
  methods: {

  }
}
</script>
