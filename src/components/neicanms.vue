<style>
@import '../assets/css/reset.css';
.in{ width:1000px; margin:0 auto;}
.item{ background:url(../assets/images/neicanms/web_01.jpg) no-repeat center top; height: 941px; }
.item1{background-image:url(../assets/images/neicanms/web_01.jpg);}
.item2{background-image:url(../assets/images/neicanms/web_02.jpg); height:758px; }
.item3{background-image:url(../assets/images/neicanms/web_03.jpg); height:699px; }
.item4{background-image:url(../assets/images/neicanms/web_04.jpg); height:840px; }
.item5{background-image:url(../assets/images/neicanms/web_05.jpg); height:581px; }
.item6{background-image:url(../assets/images/neicanms/web_06.jpg); height:831px; }
.item1 .in{ padding-top: 770px;}
.item2 .in{ padding-top: 85px; text-align: center;}
.kuaibao{ color: #782501;font-size: 30px;padding-left: 200px;}
.total01{ color: #f79e20;}
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
  <div class="item item2">
    <div class="in">

      <div class="total01">
        已经有<span>100</span>人参与秒杀
      </div>
      <div class="timebox">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="item item3"></div>
  <div class="item item4"></div>
  <div class="item item5"></div>
  <div class="item item6"></div>
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
