<template>
<div class="ten-stock-wrap">
  <div class="left-arrow" @click="rightScroll"><span class="arrowl"></span></div>
  <div class="right-arrow" @click="leftScroll"><span class="arrowr"></span></div>
  <div class="stock-list-wrap" ref="stockListWrap">
    <ul class="clearfix stock-ul" :style="{left:stockUiLeft+'px'}">
      <li class="fl stock-li" v-for="item of tenStockList">
        <p @click="toStockDetail(item.stkid)">{{item.stkname}}</p>
        <ul class="stockLabelList">
          <li>
            <span>累计收益</span>
            <span v-z3-updowncolor='item.profitRatio'>{{formatData(item.profitRatio)?(100*item.profitRatio).toFixed(2)+'%':'--'}}</span>
          </li>
          <li>
            <span>调入价格</span>
            <span>{{formatData(item.buyPrice)?item.buyPrice:'--'}}</span>
          </li>
          <li>
            <span>入选时间</span>
            <span>{{formatData(item.buyDate)?item.buyDate:'--'}}</span>
          </li>
          <li>
            <span>调出价格</span>
            <span>{{formatData(item.sellPrice)?item.sellPrice:'--'}}</span>
          </li>
          <li>
            <span>调出时间</span>
            <span>{{formatData(item.sellDate)?item.sellDate:'--'}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import native from '../../utils/nativeApi'
export default {
  props: ['tenStockList'],
  data() {
    return {
      stockUiLeft: 0
    }
  },
  computed: {

  },
  methods: {
    formatData: function(value) {
      if (value || value === 0) {
        return true
      } else {
        return false
      }
    },
    leftScroll: function() {
      const wrapWidth = this.$refs.stockListWrap.offsetWidth // 外框的宽度
      const stockUlWidth = document.getElementsByClassName('stock-ul')[0].offsetWidth // 牛股列表的总宽度
      const scrollNum = Math.floor(wrapWidth / 160) // 滚动的个数
      if (stockUlWidth - wrapWidth - Math.abs(this.stockUiLeft) < wrapWidth) {
        this.stockUiLeft = -(stockUlWidth - wrapWidth)
      } else {
        this.stockUiLeft = -160 * scrollNum + this.stockUiLeft
      }
    },
    rightScroll: function() {
      const wrapWidth = this.$refs.stockListWrap.offsetWidth // 外框的宽度
      const scrollNum = Math.floor(wrapWidth / 160) // 滚动的个数
      if (Math.abs(this.stockUiLeft) < wrapWidth) {
        this.stockUiLeft = 0
      } else {
        this.stockUiLeft = 160 * scrollNum + this.stockUiLeft
      }
    },
    toStockDetail: function(code) {
      native.openStock({
        stockCode: code.substring(2) + '.' + code.substring(0, 2).toUpperCase()
      })
    }
  },
  mounted() {

  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/base.css";
@import "../../assets/scss/style";
.ten-stock-wrap {
    height: 100%;
    position: relative;
    padding: 0 24px;
    * {
        box-sizing: border-box;
    }
    .stock-list-wrap {
        overflow: hidden;
        position: relative;
        height: 100%;
    }
    .stock-ul {
        height: 100%;
        width: 1740px;
        position: absolute;
        /*  left:0;*/
        top: 10px;
        transition: left 1.5s;
    }
    .stock-li {
        width: 160px;
        height: 146px;
        margin-right: 15px;
        border: 1px solid #515866;
        padding: 15px;
        cursor: pointer;
    }
    .stock-li:hover {
        border: 1px solid #1984ea;
        position: relative;
        top: -10px;
        z-index: 9999;
        box-shadow: 0 0 8px rgba(25,132,234,0.6);
    }
    .stock-li:last-child {
        margin-right: 0;
    }
    .left-arrow {
        position: absolute;
        left: 0;
        top: 43px;
        width: 15px;
        height: 60px;
        background-color: #23272c;
        cursor: pointer;
    }
    .right-arrow {
        position: absolute;
        right: 0;
        top: 43px;
        width: 15px;
        height: 60px;
        background-color: #23272c;
        cursor: pointer;
    }
    .stock-li > p {
        text-align: center;
        margin-bottom: 5px;
    }
    .stock-li li {
        margin-bottom: 5px;
    }
    .stock-li li span {
        display: inline-block;
        height: 100%;
    }
    .stock-li li span:first-child {
        text-align: left;
        width: 40%;
    }
    .stock-li li span:last-child {
        text-align: right;
        width: 56%;
    }
    .arrowl {
        border-color: transparent #3d444d transparent transparent;
        left: 0;
        top: 25px;
    }
    .arrowr {
        border-color: transparent transparent transparent #3d444d;
        right: 0;
        top: 25px;
    }
    .arrowl,
    .arrowr {
        display: inline-block;
        width: 0;
        height: 0;
        border-width: 5px;
        border-style: solid;
        align-self: center;
        position: absolute;
    }
    .stockLabelList > li > span:first-child {
        color: $grayWordsColor;
    }
}
</style>