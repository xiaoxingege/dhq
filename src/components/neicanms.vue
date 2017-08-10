<style>
@import '../assets/css/reset.css';
.in {
  width: 1000px;
  margin: 0 auto;
}

.item {
  background: url(../assets/images/neicanms/web_01.jpg) no-repeat center top;
  height: 941px;
}

.item1 {
  background-image: url(../assets/images/neicanms/web_01.jpg);
}

.item2 {
  background-image: url(../assets/images/neicanms/web_02.jpg);
  height: 758px;
}

.item3 {
  background-image: url(../assets/images/neicanms/web_03.jpg);
  height: 699px;
  position: relative;
}

.item4 {
  background-image: url(../assets/images/neicanms/web_04.jpg);
  height: 830px;
}

.item5 {
  background-image: url(../assets/images/neicanms/web_05.jpg);
  height: 579px;
}

.item6 {
  background-image: url(../assets/images/neicanms/web_06.jpg);
  height: 831px;
}

.item1 .in {
  padding-top: 770px;
}

.item2 .in {
  padding-top: 85px;
  text-align: center;
  width: 1010px;
}

.kuaibao {
  color: #782501;
  font-size: 30px;
  padding-left: 200px;
}

.total01 {
  color: #f79e20;
}

.timebox {
  width: 1020px;
  padding-top: 282px;
}

.timebox li {
  float: left;
  width: 203px;
}

.timebox li:nth-child(2) {
  padding-top: 33px;
}

.timebox li:nth-child(3) {
  padding-top: 67px;
}

.timebox li:nth-child(4) {
  padding-top: 33px;
}

.timebox span {
  display: block;
  height: 77px;
  background: url(../assets/images/neicanms/webbtn.png) no-repeat;
  cursor: pointer;
}

.timebox .open {
  background-position: 0 0;
}

.timebox .gray {
  background-position: 0 -167px;
}

.timebox .time {
  background-position: 0 -83px;
}

.item3 a {
  position: absolute;
  left: 50%;
  top: 233px;
  width: 216px;
  height: 57px;
  margin-left: -416px;
}
.item3 span {
  position: absolute;
  left: 50%;
  top: 400px;
  margin-left:32px;
  text-align: center;width: 210px;
  color: #fdf06e;font-size: 19px;
}
.item3 b {
  position: absolute;
  top: 380px;
}
.navbar{ position: fixed;width:170px;height: 213px;background: url(../assets/images/neicanms/weblay03.png) no-repeat;top:20px;right:20px; padding-top: 200px;}
.navbar a{ display: block; height: 48px;}
.navbar a:nth-child(1){height:78px; }
/*弹层*/
.mask { display: none; position: fixed; width: 100%; height: 100%; background: #000; opacity: .6; filter: alpha(opacity=60); top: 0; left: 0; z-index: 20; }
.layer{display: none;width: 578px;height: 212px;position: fixed;top: 50%;left: 50%;margin-top: -106px;margin-left: -289px;z-index: 21;animation: haha .6s cubic-bezier(1,-0.49, 0, 1.5);background: url(https://i0.jrjimg.cn/zqt-red-1000/focus/focus20170414teacherlottery/laybg_1.png);background-size: 100% 100%;}
@keyframes haha {
from { transform: scale(6); opacity: 0; }
to { transform: scale(1); opacity: 1; }
}
.closebtn{position: absolute;width: 30px;height: 30px;cursor: pointer;right: 0;top: 0;}
</style>

<template>
<div class="nicanms">
  <div class="item item1">
    <div class="in">
      <div class="kuaibao">
        <neicanKuaibao/>
      </div>
    </div>
  </div>
  <div class="item item2" id="one">
    <div class="in">
      <div class="total01">
        已经有<span>100</span>人参与秒杀
      </div>
      <div class="timebox">
        <ul class="clearfix">
          <li><span class="open"></span></li>
          <li><span class="gray"></span></li>
          <li><span class="time"></span></li>
          <li><span class="time"></span></li>
          <li><span class="time"></span></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="item item3" id="two">
    <a href="javascript:;"></a>
    <b id="three"></b>
    <span>已有1000人购买</span>
  </div>
  <div class="item item4"></div>
  <div class="item item5"></div>
  <div class="item item6" id="four"></div>
  <div class="navbar">
    <a href="#one"></a>
    <a href="#two"></a>
    <a href="#three"></a>
    <a href="#four"></a>
  </div>
  <div class="mask"></div>
<!--抽中-->
<div class="layer layer_cz">
    <i class="closebtn"></i>
</div>
</div>
</template>

<script>
import neicanKuaibao from 'components/neican-kuaibao'

export default {
  components: {
    neicanKuaibao
  },
  mounted () {
    document.title = '内参秒杀'
  }
}
</script>
