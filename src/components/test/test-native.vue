<template>
<div class="test-native">
  <ul>
    <li v-for="api in apiList" @click="callNative(api.handler)">{{api.name}}</li>
  </ul>
</div>
</template>

<script>
import nativeApi from '../../utils/nativeApi'
export default {
  data() {
    return {
      apiList: [{
          name: '跳转个股分时图',
          handler: 'openStock'
        },
        {
          name: '跳转个股K线',
          handler: 'openStockKline'
        }
      ]
    }
  },
  methods: {
    callNative(handler) {
      this[handler] && this[handler]();
    },
    openStock() {
      nativeApi.openStock({
        stockCode: '600000.SH'
      });
    },
    openStockKline() {
      nativeApi.openStock({
        stockCode: '600000.SH'
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.test-native {
    padding: 20px;
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li {
        height: 30px;
        line-height: 30px;
        text-align: center;
        background: green;
        color: #fff;
        margin: 15px 0;
        cursor: pointer;
    }
}
</style>