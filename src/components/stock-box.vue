<template>
<div class="stock-box" :style="position" v-show="isShow || delayHide">
  <div class="stock-box-header"><span class="left">{{stock.stockName}}[{{stock.stockCode.substring(0,6)}}]</span><span class="right btn_add" @click="addStock" v-if="!isSelfSelection">+ 自选</span><span class="right btn_remove" @click="removeStock" v-if="isSelfSelection">- 自选</span>
    <span
      class="right" v-z3-updowncolor="stock.chgPx">({{updownMark + stock.chgPctPx}})</span><span class="right" v-z3-updowncolor="stock.chgPx">{{updownMark + stock.chgPx}}</span>
      <span class="right" v-z3-updowncolor="stock.chgPx">{{stock.lastPx}}</span>
  </div>
  <div>
    <StockKline :stockCode="stockCode" chartWidth="360" chartHeight="250"></StockKline>
  </div>
</div>
</template>

<script>
import StockKline from 'components/stock-kline'
import {
  mapState
} from 'vuex'
import config from '../z3tougu/config'
export default {
  props: ['stockCode', 'top', 'left'],
  data() {
    return {
      delayHide: false,
      isMouseover: false,
      isShow: false
    }
  },
  components: {
    StockKline
  },
  computed: {
    ...mapState({
      stock: state => state.stock.stock,
      isSelfSelection: state => state.stock.isSelfSelection
    }),
    position() {
      return 'top:' + this.top + 'px;left:' + this.left + 'px'
    },
    updownMark() {
      let flag = this.stock.chgPx
      let mark = ''
      if (flag === config.emptyValue) {
        flag = 0
      }
      if (flag > 0) {
        mark = '+'
      }
      return mark
    }
  },
  watch: {
    isShow() {
      // 当设置隐藏时，延迟200ms隐藏
      if (this.isShow === false) {
        this.delayHide = true;
        setTimeout(() => {
          if (!this.isMouseover) {
            this.delayHide = false;
          }
        }, 200)
      }
    },
    stockCode() {
      if (this.stockCode) {
        this.$store.dispatch('stock/querySelection', {
          stockCode: this.stockCode
        })
      }
    }
  },
  methods: {
    addStock() {
      if (this.stockCode) {
        this.$store.dispatch("stock/addSelection", {
          stockCode: this.stockCode
        })
      }

    },
    removeStock() {
      if (this.stockCode) {
        this.$store.dispatch("stock/removeSelection", {
          stockCode: this.stockCode
        })
      }
    }
  },
  mounted() {
    this.$el.addEventListener('mouseover', () => {
      this.delayHide = true;
      this.isMouseover = true;
    });
    this.$el.addEventListener('mouseout', () => {
      this.delayHide = false;
      this.isMouseover = false;
    });
  }
}
</script>

<style scoped>
.stock-box {
  position: absolute;
  padding: 10px;
  padding-top: 25px;
  border: 1px solid #eee;
  background: #fff;
  z-index: 999;
  /* -ms-box-shadow: rgb(204, 204, 204) 2px 3px 2px;
        -o-box-shadow: rgb(204, 204, 204) 2px 3px 2px;
        -webkit-box-shadow: rgb(204, 204, 204) 2px 3px 2px;
        -moz-box-shadow: rgb(204, 204, 204) 2px 3px 2px;
        box-shadow: rgb(204, 204, 204) 2px 3px 2px; */
}

.stock-box .stock-box-header {
  height: 30px;
  line-height: 30px;
  position: absolute;
  top: 0;
  left: 10px;
  right: 10px;
  font-size: 14px;
}

.stock-box .stock-box-header .left {
  float: left;
  margin-left: 10px;
  color: #1984ea;
}

.stock-box .stock-box-header .right {
  float: right;
  margin-right: 10px;
}

.stock-box .stock-box-header .btn_remove {
  border: 1px solid #FF2921;
  color: #FF2921;
  border-radius: 4px;
  height: 22px;
  line-height: 22px;
  display: inline-block;
  padding: 0 4px;
  font-size: 12px;
  margin-top: 3px;
  cursor: pointer;
}

.stock-box .stock-box-header .btn_add {
  border: 1px solid #FF2921;
  color: #fff;
  background: #FF2921;
  border-radius: 4px;
  display: inline-block;
  height: 22px;
  line-height: 22px;
  padding: 0 4px;
  font-size: 12px;
  margin-top: 3px;
  cursor: pointer;
}
</style>
