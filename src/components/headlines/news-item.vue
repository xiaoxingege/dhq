<template>
<div>
  <div>
    <span class="mark"></span>
    <span>{{title}}</span>
  </div>
  <div>
    影响股票：<span class="">{{stockName}}</span>
  </div>
  <div>
    <span class="left">{{dateTime}}</span>
    <span class="right">{{readCount}}阅读</span>
  </div>
</div>
</template>

<script>
import native from '../../utils/nativeApi'
export default {
  data() {
    return {

    }
  },
  methods: {
    openStock(innerCode) {
      native.openStock({
        stockCode: innerCode
      });
    }
  }
}
</script>