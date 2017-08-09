<style>
@import '../assets/css/reset.css';

.item{ background:url(../assets/images/neicanms/web_01.jpg) no-repeat center top; height: 425px; }
.item1{background-image:url(../assets/images/neicanms/web_01.jpg);}
.item2{background-image:url(../assets/images/neicanms/web_02.jpg); height:340px; }
.item3{background-image:url(../assets/images/neicanms/web_03.jpg); height:372px; }
.item4{background-image:url(../assets/images/neicanms/web_04.jpg); height:345px; }
.item5{background-image:url(../assets/images/neicanms/web_05.jpg); height:359px; }
.item6{background-image:url(../assets/images/neicanms/web_06.jpg); height:425px; }
</style>

<template>
<div class="nicanms">
  <div class="item item1"></div>
  <div class="item item2"></div>
  <div class="item item3"></div>
  <div class="item item3"></div>
  <div class="item item4"></div>
</div>
</template>

<script>

export default {
  mounted () {
    document.title = '内参秒杀'
  }
}
</script>
