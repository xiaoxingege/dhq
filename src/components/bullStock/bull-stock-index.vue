<style lang="scss">
@import '../../assets/css/base.css';
@import "../../assets/scss/style.scss";
* {
    box-sizing: border-box;
    font-family: "Microsoft YaHei";
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
    height: 100%;
    width: 75%;
}

.bullRight {
    background: #0d0e0f;
    width: 25%;
    height: 100%;
}
</style>
<template>
<div class="bullStock clearfix">
  <div class="bullLeft fl">
    <Bullstockleft @changeSelectValue="setSelectValue"></Bullstockleft>
  </div>
  <div class="bullRight fl">
    <BullStockRight :browseIndex='condition' />
  </div>
</div>
</template>
<script>
import Bullstockleft from '../../components/bullStock/bull-stock-left.vue'
import BullStockRight from '../../components/bullStock/bull-stock-right'
export default {
  data() {
    return {
      condition: ''
    }
  },
  components: {
    Bullstockleft,
    BullStockRight
  },
  methods: {
    setSelectValue: function(v) {
      this.condition = v;
    }
  }
}
</script>