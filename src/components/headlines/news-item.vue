<template>
<div :class="{news:true,active:!!active}">
  <div class="news-title">
    <span :class="{mark:true,good:model.isBear===1,bad:model.isBear===3}">{{model.isBear===1?'利好':(model.isBear===3?'利空':'')}}</span>
    <span class="title">{{model.title}}</span>
  </div>
  <div class="rel-stocks" v-if="model && model.infostocks && model.infostocks.length">
    影响股票：<span class="rel-stock" v-for="stock in model.infostocks.slice(0,4)" @click="openStock(stock.stockcode)">{{stock.stockname}}</span>
  </div>
  <div class="bottom">
    <span class="news-datetime">{{model.makedate}}</span>
    <span class="news-read">{{model.click}} 阅读</span>
  </div>
</div>
</template>

<script>
import native from '../../utils/nativeApi'
import util from '../../dhq/util'
export default {
  props: ['model', 'active'],
  data() {
    return {

    }
  },
  methods: {
    openStock(stockCode) {
      native.openStock({
        stockCode: util.formatterInnercode(stockCode)
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/style.scss";
.news.active {
    background: #2e4465;
}
.news {
    color: #808ba1;
    background: #141518;
    margin: 2px 0;
    cursor: pointer;

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
        .title {
            padding: 5px 0;
            color: $wordsColorBase;
        }
        .mark {
            display: inline-block;
            width: 40px;
            margin: 0 4px;
            padding: 2px 0;
            color: #fff;
            font-size: 12px;
            text-align: center;
        }
        .good {
            background: $upColor;
        }
        .bad {
            background: $downColor;
        }
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