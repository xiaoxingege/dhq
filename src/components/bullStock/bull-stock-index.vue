<style lang="scss">
@import '../../assets/css/base.css';

* {
    box-sizing: border-box;
    font-family: '微软雅黑';
    font-size: 12px;
}

p {
    margin: 0;
}

.app,
body,
html {
    height: 100%;
}

body {
    background-color: #0d0e0f;
}

.bullStock {
    min-height: 710px;
    min-width: 1217px;
    height: 100%;
    background-color: #0d0e0f;
    font-size: 12px;
}

.bullLeft {
    background: #0d0e0f;
    padding-top: 5px;
}

.bullRight {
    background: white;
}
</style>
<template>
<div class="bullStock display-box">
  <div class="bullLeft box-flex-3">
    <Bullstockleft></Bullstockleft>
  </div>
  <div class="bullRight box-flex-1"></div>
</div>
</template>
<script>
import Bullstockleft from '../../components/bullStock/bull-stock-left.vue'
export default {
  components: {
    Bullstockleft
  }
}
</script>