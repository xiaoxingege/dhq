<template>
<div class="news">
  <div class="news-title">
    <span class="mark"></span>
    <span class="title">{{model.title}}</span>
  </div>
  <div class="rel-stocks" v-if="model && model.infostocks && model.infostocks.length">
    影响股票：<span class="rel-stock" v-for="stock in model.infostocks.slice(0,4)" @dblclick="openStock(stock.stockcode)">{{stock.stockname}}</span>
  </div>
  <div class="bottom">
    <span class="news-datetime">{{model.makedate}}</span>
    <span class="news-read">{{model.click}} 阅读</span>
  </div>
</div>
</template>

<script>
import native from '../../utils/nativeApi'
export default {
  props: ['model'],
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

<style lang="scss" scoped>
@import "../../assets/scss/style.scss";
.news {
    color: #808ba1;
    background: #141518;
    margin: 2px 0;
    cursor: pointer;
    .title {
        padding: 5px 0;
        color: $wordsColorBase;
    }
    .mark {
        display: inline-block;
        width: 48px;
    }
    .rel-stocks {
        padding: 10px 0 10px 48px;
    }
    .bottom {
        padding: 5px 0 5px 52px;
        font-size: 12px;
        overflow: hidden;
    }
    .rel-stock {
        margin-right: 20px;
        color: $blueWordsColor;
    }
    .news-title {
        padding: 5px 0;
    }
    .news-datetime {
        float: left;
    }
    .news-read {
        float: right;
        margin-right: 10px;
    }
}
</style>