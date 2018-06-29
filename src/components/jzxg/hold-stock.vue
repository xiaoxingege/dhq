<template>
<div class="sti-tbl-container">
  <div class="sti-tbl-header">
    <table class="table table-bordered">
      <tr>
        <td>代码</td>
        <td>名称</td>
        <td>调入日期</td>
        <td>建议调入价格</td>
        <td>最新价格</td>
        <td>累计涨幅</td>
        <td>持仓天数</td>
        <td></td>
      </tr>
    </table>
  </div>
  <div class="sti-tbl-body">
    <div v-if="!(holdStockList.length>0)" class="no-data">当前暂无持仓股票</div>
    <div class="yo-scroll" @scroll="onScroll($event)" v-if="holdStockList.length>0">
      <section class="inner">
        <div class="signal-table-wrap">
          <table class="hold-stock-table">
            <tr v-for="(item,index) of holdStockList">
              <td>{{formatData(item.stkcode)?item.stkcode:'--'}}</td>
              <td @click="toStockDetail(item.stkid)" style="cursor: pointer;">{{formatData(item.stkname)?item.stkname:'--'}}</td>
              <td>{{formatData(item.buyDate)?item.buyDate:'--'}}</td>
              <td>{{formatData(item.buyPrice)?item.buyPrice:'--'}}</td>
              <td>{{formatData(item.price)?item.price.toFixed(2):'--'}}</td>
              <td v-z3-updowncolor="item.profitRatio">{{formatData(item.profitRatio)?(100*item.profitRatio).toFixed(2)+'%':'--'}}</td>
              <td>{{formatData(item.holdingDays)?item.holdingDays+'天':'--'}}</td>
              <td>
                <span class="add-btn" @click="addStock(index,item.stkcode)" v-if="multiSelectionList.length>0 && multiSelectionList[index] && !(multiSelectionList[index].add === 0)">+自选</span>
                <span class="remove-btn" @click="removeStock(index,item.stkcode)" v-if="multiSelectionList.length>0 && multiSelectionList[index] && multiSelectionList[index].add === 0">-自选</span>
              </td>
            </tr>
          </table>
        </div>
        <footer class="load-more" v-show="loadFlag">
          <span>正在加载</span>
        </footer>
        <div class="nullData" v-show="noFlag">到底啦！</div>
      </section>
    </div>
  </div>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import native from '../../utils/nativeApi'
export default {
  props: ['strategyId'],
  data() {
    return {
      noFlag: false, // 暂无更多数据显示,
      infiniteLoading: false,
      num: 5, //  一页显示多少条
      holdStockList: [],
      pageStart: 0,
      loadFlag: false,
      multiSelectionList: []
    }
  },
  directives: {
    'z3-selfSelect': {
      bind(el, binding, vnode) {
        const stockCode = binding.value.code;
        const vm = vnode.context;
        vm.querySelSelection(stockCode)
      }
    }
  },
  components: {

  },
  watch: {
    nextStart() {
      this.pageStart = this.nextStart
    },
    strategyId() {
      this.holdStockList = []
      this.multiSelectionList = []
      this.initHoldStock()
    }
  },
  computed: mapState({
    holdStockData: state => state.jzxg.holdStockData,
    multiSelectionData: state => state.jzxg.multiSelectionData
  }),
  methods: {
    initHoldStock: function() {
      this.$store.dispatch('jzxg/queryHoldStockData', {
        strategyId: this.strategyId,
        pageSize: 10,
        pageStart: 0
      }).then(() => {
        if (this.holdStockData) {
          this.pageStart = this.holdStockData.nextStart
          this.holdStockList = this.holdStockData.stocks
          this.querySelSelection()
        }
      })
    },
    onInfinite() {
      let more = this.$el.querySelector('.load-more')
      if (!more) {
        return
      }
      this.noFlag = false
      this.$store.dispatch('jzxg/queryHoldStockData', {
        strategyId: this.strategyId,
        pageSize: this.num,
        pageStart: this.pageStart
      }).then(() => {
        this.holdStockList = this.holdStockList.concat(this.holdStockData.stocks)
        this.pageStart = this.holdStockData.nextStart
        this.querySelSelection()
      })
      this.infiniteLoading = false
    },
    infinite() {
      this.loadFlag = true
      this.infiniteLoading = true
      setTimeout(() => {
        this.onInfinite();
      }, 1500);
    },
    onScroll(e) {
      if (this.pageStart === -1) {
        this.noFlag = true
        this.loadFlag = false
      }
      if (this.pageStart === -1 || this.infiniteLoading) { // 如果没数据了或者正在加载数据都不执行滚动事件了
        return
      }
      this.noFlag = false; // 到底啦隐藏
      let outerHeight = this.$el.clientHeight // 外框的高度
      let innerHeight = this.$el.querySelector('.inner').clientHeight // 数据表格的高度
      let scrollTop = e.target.scrollTop // 往上滑的距离
      if (scrollTop >= innerHeight - outerHeight) {
        this.infinite() // 开始请求接口加载数据
      }
    },
    querySelSelection(stockCode) {
      const codeArr = this.holdStockList.map((stock) => {
        return stock.stkcode
      })
      this.$store.dispatch('jzxg/querySelection', {
        stockCode: codeArr.join(',')
      }).then(() => {
        this.holdStockList.forEach((stock) => {
          this.multiSelectionList = this.multiSelectionData
        })
      })
    },
    addStock(index, code) {
      this.multiSelectionList[index].add = 0
      this.$store.dispatch('jzxg/addSelection', {
        stockCode: code
      })
    },
    removeStock(index, code) {
      this.multiSelectionList[index].add = -1
      this.$store.dispatch('jzxg/removeSelection', {
        stockCode: code
      })
    },
    formatData: function(value) {
      if (value || value === 0) {
        return true
      } else {
        return false
      }
    },
    toStockDetail: function(code) {
      native.openStock({
        stockCode: code.substring(2) + '.' + code.substring(0, 2).toUpperCase()
      })
    }
  },
  mounted() {
    this.initHoldStock()
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/style";
@import "../../assets/css/base.css";
.sti-tbl-container {
    height: 185px;
}
.sti-tbl-container .sti-tbl-body {
    height: 155px;
    background: #141518;
    position: relative;
}
.sti-tbl-body table,
.sti-tbl-header table {
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
.sti-tbl-header .table td {
    background: $borderColor;
    color: $wordsColorBase;
    border-right: none;
    height: 30px;
    text-align: center;
}
.hold-stock-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
.hold-stock-table td {
    text-align: center;
    height: 30px;
    border: 1px solid $lineAndTitleColor;
}
.hold-stock-table tr td:last-child {
    border-right-width: 0;
}
.hold-stock-table tr td:first-child {
    border-left-width: 0;
}
.hold-stock-table tr:first-child td {
    border-top-width: 0;
}
.yo-scroll {
    width: 100%;
    height: 100%;
    overflow: auto;
    z-index: 99;
    position: absolute;
    top: 0;
    left: 0;
}
.yo-scroll .inner {
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
}
.inner .load-more {
    height: 5rem;
    line-height: 5rem;
    text-align: center;
}
.inner .nullData {
    background: $bgConColor;
    font-size: 12px;
    color: $wordsColorBase;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
.inner .load-more {
    background: $bgConColor;
    font-size: 12px;
    color: $wordsColorBase;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
,
.add-btn,
.remove-btn {
    display: inline-block;
    width: 40px;
    height: 20px;
    line-height: 20px;
    border-radius: 2px;
    cursor: pointer;
    text-align: center;
}
.add-btn {
    background-color: $upColorDhq;
    color: #fff;
}
.remove-btn {
    border: 1px solid $upColorDhq;
    color: $upColorDhq;
}
.no-data {
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-bottom: 1px solid $lineAndTitleColor;
}
</style>