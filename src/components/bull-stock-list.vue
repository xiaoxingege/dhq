<style lang="scss">
@import '../assets/css/base.css';
input {
    outline: none;
}

* {
    /* font-size: 12px; */
    font-family: "Microsoft YaHei";
    box-sizing: border-box;
}

body {
    background: #0d0e0f;
}

.bull-stock-index {
    /* background: #0d0e0f; */
    background: #f2f2f2;
}
.bull-left {
    width: 74%;
    height: 200px;
    background: pink;

}
.bull-right {
    width: 26%;

}
</style>
<template>
<div class="bull-stock-index display-box">
  <div class="bull-left box-flex-3"></div>
  <div class="bull-right box-flex-1">
    <BullStockRight/>
  </div>
</div>
</template>

<script>
import BullStockRight from 'components/bull-stock-right'
export default {
  data() {
    return {}
  },
  components: {
    BullStockRight
  }

}
</script>
