<style>
@import '../assets/css/reset.css';
.lucky-draw {
  font-size: 40px;
  color: #fff;
  background: #ff4200;
  padding-bottom: 2.25rem;
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
  margin:0.07rem 0.19rem 0;
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
  color: #ffe136;
  font-style: normal;
}
.award-pool{
  width:7.1rem;
  height: 6.27rem;
  margin:0.39rem auto 0.19rem;
  background: url(../assets/images/lucky-draw/award-pool.png) center no-repeat;
  background-size: 100%;
}
.awards {
  padding-top:0.36rem;
  width:6.48rem;
  margin:0 auto;
  overflow:hidden;
}
.awards li{
  float: left;
  width:2.08rem;
  height: 1.68rem;
  margin:0 0.04rem 0.05rem;
  position: relative;
}
.award-item{
  background: url(../assets/images/lucky-draw/award-item.png) center no-repeat;
  background-size: 100%;
}
.award-item-active{
  background: url(../assets/images/lucky-draw/award-item-active.png) center no-repeat;
  background-size: 100%;
}
.get-award{
  background: url(../assets/images/lucky-draw/get-award.png) center no-repeat;
  background-size: 100%;
}
.get-award:active{
  background: url(../assets/images/lucky-draw/get-award-active.png) center no-repeat;
  background-size: 100%;
}
.awards li .award-icon{
  
}
.awards .award-icon :nth-child(1){
  width:1.52rem;
  height: 0.75rem;
  margin:0.22rem auto 0.17rem;
  background: url(../assets/images/lucky-draw/award-icon0.png) center no-repeat;
  background-size: 100%;
}
.award-icon:nth-child(2){
  width:1.52rem;
  height: 0.75rem;
  margin:0.22rem auto 0.17rem;
  background: url(../assets/images/lucky-draw/award-icon0.png) center no-repeat;
  background-size: 100%;
}
/*.awards li .award-icon:nth-child(1){
  background: url(../assets/images/lucky-draw/award-icon1.png) center no-repeat;
  background-size: 100%;
}
.awards li .award-icon:nth-child(2){
  background: url(../assets/images/lucky-draw/award-icon2.png) center no-repeat;
  background-size: 100%;
}
.awards li .award-icon:nth-child(3){
  background: url(../assets/images/lucky-draw/award-icon3.png) center no-repeat;
  background-size: 100%;
}
.awards li .award-icon:nth-child(4){
  background: url(../assets/images/lucky-draw/award-icon4.png) center no-repeat;
  background-size: 100%;
}
.awards li .award-icon:nth-child(5){
  background: url(../assets/images/lucky-draw/award-icon5.png) center no-repeat;
  background-size: 100%;
}
.awards li .award-icon:nth-child(6){
  background: url(../assets/images/lucky-draw/award-icon6.png) center no-repeat;
  background-size: 100%;
}
.awards li .award-icon:nth-child(7){
  background: url(../assets/images/lucky-draw/award-icon7.png) center no-repeat;
  background-size: 100%;
}*/
.awards li .award-text{
  width:100%;
  position:absolute;
  left:0;
  top:1.14rem;
  color: #a83200;
  font-size: 0.28rem;
  text-align: center;
}
.award-info{
  background: #6b1f9f;
  width:7.1rem;
  margin:0 auto;
  min-height: 1rem;
  border-radius: 0.18rem;
  padding:0 0.3rem 0.6rem;
  box-sizing: border-box;
}
.award-info{

}
.award-info h2,.award-info p{
  color:#fff;
  font-size:0.26rem;
  font-weight:normal;
}
.award-info h2{
  line-height: 1.16rem;
}
.award-info p{
  line-height: 0.36rem;
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
  <div class="award-pool">
    <ul class="awards">
      <li class="award-item">
        <h4 class="award-icon"></h4>
        <p class="award-text">Level2月卡</p>
      </li>
      <li class="award-item">
        <h4 class="award-icon"></h4>
        <p class="award-text">18金豆</p>
      </li>
      <li class="award-item">
        <h4 class="award-icon"></h4>
        <p class="award-text">Z点操盘3日卡</p>
      </li>
      <li class="award-item">
        <h4 class="award-icon"></h4>
        <p class="award-text">优惠券</p>
      </li>
      <li class="get-award"></li>
      <li class="award-item-active">
        <h4 class="award-icon"></h4>
        <p class="award-text">88金豆</p>
      </li>
      <li class="award-item">
        <h4 class="award-icon"></h4>
        <p class="award-text">Z点操盘月卡</p>
      </li>
      <li class="award-item">
        <h4 class="award-icon"></h4>
        <p class="award-text">优惠券</p>
      </li>
      <li class="award-item">
        <h4 class="award-icon"></h4>
        <p class="award-text">Level2年卡</p>
      </li>
    </ul>
  </div>
  <div class="award-info">
    <h2>一. 活动简介</h2>
    <p>活动期间，用户登录进入大转盘，每次抽奖需要扣除20金豆（具体扣除以实际活动为准），扣除的金豆不退还，每天参与抽奖次数不限;</p>
    <p>请注意：此次活动点击“开始抽奖”会立即金豆，请知晓，谢谢。</p>
    <h2>二.面向用户</h2>
    <p>金融界App所有登录用户</p>
    <h2>三.中奖商品发放期限及方式</h2>
    <p>金豆类：直接累加至金豆总数；</p>
    <p>优惠券类:可重复获得，获得后可于“用户中心”－“优惠券”查看；</p>
    <p>Level-2行情、Z点操盘:使用权限从获奖当日计算，多次获得则累加。</p>
    <h2>四.中奖资格的排除</h2>
    <p>活动过程中如发现您有碍其他用户公平参加本活动或违反本活动目的之行为的（包括但不限于作弊领取、机器刷奖、恶意套现等）金融界有权取消您参加本次活动的资格或您因参加活动所获商品或因此享有的所有利益。</p>
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
