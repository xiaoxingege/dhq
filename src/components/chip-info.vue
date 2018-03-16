<style>
@import '../assets/css/reset.css';
.chip {
  width: 100%;
  height: 100%;
  background-color: rgba(250, 250, 250, 1);
  font-family: PingFangSC;
}

.chip-title {
  font-size: 19px;
  color: rgba(51, 51, 51, 1);
  padding-top: 40px;
  text-align: center;
  font-family: PingFangSC-Medium;
}

.chip-text {
  margin: 30px 0.50rem auto 0.50rem;
  font-size: 15px;
  font-family: PingFangSC-Regular;
  color: rgba(102, 102, 102, 1);
  line-height: 24px;
}

.chip-graphic {
  font-size: 17px;
  font-family: PingFangSC-Regular;
  color: rgba(51, 51, 51, 1);
  line-height: 24px;
  margin: 40px 0.50rem auto 0.50rem;
}

.img-chipG img {
  width: 6.48rem;
  height: 3.05rem;
  margin: 13px auto auto 0.50rem;
}

.graphic-text {
  margin-top: 30px;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  align-items: center;
  margin-left: 0.50rem;
  margin-right: 0.50rem;
}

.text-two {
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  align-items: center;
}

.text {
  margin-left: 0.43rem;
}

.text-title {
  font-size: 16px;
  font-family: PingFangSC-Medium;
  color: rgba(51, 51, 51, 1);
  line-height: 22.5px;
}

.text-content {
  font-size: 15px;
  font-family: PingFangSC-Regular;
  color: rgba(102, 102, 102, 1);
  line-height: 24px;
  margin-top: 6px;
}

.text-two img {
  width: 10px;
  height: 10px;
  margin-right: 6px;
}

.icon-how {
  margin-top: 6px;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  align-items: baseline;
  margin-left: 0.50rem;
  margin-right: 0.50rem;
}

.icon-how img {
  width: 15px;
  height: 15px;
  margin-top: 3px;
  margin-right: 10px;
}

.icon-content {
  font-size: 15px;
  font-family: PingFangSC-Regular;
  color: rgba(102, 102, 102, 1);
  line-height: 24px;
}

.check p {
  font-size: 15px;
  font-family: PingFangSC-Regular;
  color: rgba(102, 102, 102, 1);
  line-height: 21px;
  margin: 10px 0.50rem auto 0.50rem;
}

.check-img {
  margin: 0.29rem 0.50rem 0.74rem 0.50rem;
  width: 6.50rem;
  height: 5.67rem;
}
</style>

<template>
<div class="chip">
  <p class="chip-title">筹码分布说明</p>
  <p class="chip-text">筹码分布是指“流通股票持仓成本”的分布，展示的是不同价位上投资者的持股数量，投资者可以据此推断此股票的成本分布情况。下面我们来看看如何用筹码分布工具来透视庄家底牌，发现资金异动：</p>
  <p class="chip-graphic">筹码分布图示：</p>
  <div class="img-chipG">
    <img src="../assets/images/chip-info/chip-g.png"></img>
  </div>
  <!--partone-->
  <div class="graphic-text" style="margin-top: 14px;">
    <img src="../assets/images/chip-info/chip-z.png" style="width: 67px;height: 36px;" />
    <div class="text">
      <p class="text-title">筹码柱</p>
      <p class="text-content">每一根筹码柱代表一个价位，柱子长度代表该价位对应的成交量；</p>
    </div>
  </div>
  <div class="graphic-text">
    <img src="../assets/images/chip-info/red-chipZ.png" style="width: 60px;height: 4px;" />
    <div class="text">
      <p class="text-title">红色筹码柱</p>
      <p class="text-content">代表低于收盘价的获利筹码；</p>
    </div>
  </div>
  <div class="graphic-text">
    <img src="../assets/images/chip-info/blue-chipZ.png" style="width: 60px;height: 4px;" />
    <div class="text">
      <p class="text-title">蓝色筹码柱</p>
      <p class="text-content">代表高于收盘价的套牢筹码；</p>
    </div>
  </div>
  <div class="graphic-text">
    <img src="../assets/images/chip-info/yellow-chipZ.png" style="width: 60px;height: 4px;" />
    <div class="text">
      <p class="text-title">黄色筹码柱</p>
      <p class="text-content">代表所有筹码的平均成本；</p>
    </div>
  </div>
  <div class="graphic-text">
    <img src="../assets/images/chip-info/average-chipZ.png" style="width: 57.5px;height:20.5px;" />
    <div class="text">
      <p class="text-title">筹码平均价成本线</p>
      <p class="text-content">每日的筹码平均成本连接而成的参考线；</p>
    </div>
  </div>
  <!--partone-->
  <p class="chip-graphic">筹码分布各项指标含义：</p>
  <div class="img-chipG">
    <img src="../assets/images/chip-info/meaning.png"></img>
  </div>
  <!--parttwo-->
  <div class="graphic-text" style="margin-top: 14px;">
    <img src="../assets/images/chip-info/scale.png" style="width: 67.5px; height:58.5px;" alt="获利占比" />
    <div class="text">
      <div class="text-two">
        <img src="../assets/images/chip-info/meaning-icon1.png">
        <p class="text-title">获利占比</p>
      </div>
      <p class="text-content">( 筹码获利占比 ) 当日获利盘比例，即收盘价以下的筹码所占所有筹码的比例；</p>
    </div>
  </div>
  <div class="graphic-text">
    <img src="../assets/images/chip-info/average-cost.png" style="width: 67px; height:58.5px;" alt="平均成本" />
    <div class="text">
      <div class="text-two">
        <img src="../assets/images/chip-info/meaning-icon2.png">
        <p class="text-title">平均成本</p>
      </div>
      <p class="text-content">( 筹码平均成本 ) 全部筹码的平均价，也就是筹码的重心所在；</p>
    </div>
  </div>
  <div class="graphic-text">
    <img src="../assets/images/chip-info/converge-part.png" style="width:67px; height:58.5px;" alt="集中区间" />
    <div class="text">
      <div class="text-two">
        <img src="../assets/images/chip-info/meaning-icon3.png">
        <p class="text-title">集中区间</p>
      </div>
      <p class="text-content">( 90%筹码集中价格区间 ) 是指市场上大多数筹码集中在哪个价格区间。换句话来说，就是在一只股票换手了90%的时候，他的价格区间是多少。</p>
    </div>
  </div>
  <div class="graphic-text">
    <img src="../assets/images/chip-info/converge.png" style="width: 67px; height:43px;" alt="集中度" />
    <div class="text">
      <div class="text-two">
        <img src="../assets/images/chip-info/meaning-icon4.png">
        <p class="text-title">集中度</p>
      </div>
      <p class="text-content">数值越小表示筹码越集中，数值越大表示成本越分散。</p>
    </div>
  </div>
  <!--parttwo-->
  <p class="chip-graphic">筹码分布的三个小窍门:</p>
  <div class="icon-how" style="margin-top: 20px;">
    <img src="../assets/images/chip-info/how-icon1.png" />
    <p class="icon-content">获利30%以上不抛的是主力筹码，散户很难做到获利30%仍然持有筹码；</p>
  </div>
  <div class="icon-how">
    <img src="../assets/images/chip-info/how-icon2.png" />
    <p class="icon-content">横盘时稳如泰山的是主力筹码；</p>
  </div>
  <div class="icon-how">
    <img src="../assets/images/chip-info/how-icon3.png" />
    <p class="icon-content">解套后仍然不卖的也是主力筹码。</p>
  </div>
  <p class="chip-graphic">如何找到筹码集中度高和获利30%以上的股票？</p>

  <div class="check">
    <p>我们已经为您做好了筛选</p>
  </div>
  <img src="../assets/images/chip-info/check-img.png" class="check-img" />
</div>
</template>

<script>
window.addEventListener('orientationchange', function() {
  window.location.reload()
}, false);

import 'whatwg-fetch'
export default {
  data() {
    return {
      name: '你的名字'
    }
  },
  beforecreated() {

  },
  created() {

  },
  mounted() {
    document.title = '筹码分布说明'
  },
  methods: {}
}
</script>