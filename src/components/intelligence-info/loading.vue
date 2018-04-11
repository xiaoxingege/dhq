<template>
  <!-- 加载中 使用方法如下-->
  <!-- <Loading :maskShow="loadingShow"></Loading> -->
  <!-- import Loading from 'components/intelligence-info/loading' -->
  <div v-if="maskShow" class="mask">
    <div class="loading">
      <div>
        <div class="c1"></div>
        <div class="c2"></div>
        <div class="c3"></div>
        <div class="c4"></div>
      </div>
      <span>数据加载中...</span>
    </div>
  </div>
</template>
<script>
  export default {
    props:['maskShow']
  }
</script>
