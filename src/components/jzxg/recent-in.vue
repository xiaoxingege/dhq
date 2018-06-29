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
        <td>调入后最高涨幅</td>
        <td></td>
      </tr>
    </table>
  </div>
  <div class="sti-tbl-body">
    <div class="yo-scroll" @scroll="onScroll($event)">
      <section class="inner">
        <div class="signal-table-wrap" slot="content">
          <table class="recentin-table">
            <tr v-for="(item,index) of recentInList">
              <td>{{formatData(item.stkcode)?item.stkcode:'--'}}</td>
              <td @click="toStockDetail(item.stkid)" style="cursor: pointer;">{{formatData(item.stkname)?item.stkname:'--'}}</td>
              <td>{{formatData(item.buyDate)?item.buyDate:'--'}}</td>
              <td>{{formatData(item.buyPrice)?item.buyPrice:'--'}}</td>
              <td>{{formatData(item.price)?item.price.toFixed(2):'--'}}</td>
              <td v-z3-updowncolor="item.maxRiseRatio">{{formatData(item.maxRiseRatio)?(100*item.maxRiseRatio).toFixed(2)+'%':'--'}}</td>
              <td>
                <span class="add-btn" @click="addStock(index,item.stkcode)" v-if="multiSelectionList.length>0 && !(multiSelectionList[index].add === 0)">+自选</span>
                <span class="remove-btn" @click="removeStock(index,item.stkcode)" v-if="multiSelectionList.length>0 && multiSelectionList[index].add === 0">-自选</span>
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
  props: ['dataList', 'strategyId', 'nextStart'],
  data() {
    return {
      noFlag: false, // 暂无更多数据显示,
      infiniteLoading: false,
      num: 5, //  一页显示多少条
      recentInList: this.dataList,
      pageStart: this.nextStart,
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
    dataList() {
      this.recentInList = this.dataList
      this.querySelSelection()
    }
  },
  computed: mapState({
    lateInData: state => state.jzxg.latestInData,
    multiSelectionData: state => state.jzxg.multiSelectionData
  }),
  methods: {
    onInfinite() {
      let more = this.$el.querySelector('.load-more')
      if (!more) {
        return
      }
      this.noFlag = false
      this.$store.dispatch('jzxg/getLatestInData', {
        strategyId: this.strategyId,
        pageSize: this.num,
        pageStart: this.pageStart
      }).then(() => {
        this.recentInList = this.recentInList.concat(this.lateInData.stocks)
        this.pageStart = this.lateInData.nextStart
        this.querySelSelection()
      })
      this.infiniteLoading = false
    },
    infinite() {
      this.loadFlag = true
      this.infiniteLoading = true
      setTimeout(() => {
        this.onInfinite();
      }, 1000);
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
    querySelSelection() {
      const codeArr = this.recentInList.map((stock) => {
        return stock.stkcode
      })
      this.$store.dispatch('jzxg/querySelection', {
        stockCode: codeArr.join(',')
      }).then(() => {
        this.multiSelectionList = this.multiSelectionData
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
    //  this.querySelSelection()
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/style";
@import "../../assets/css/base.css";
.sti-tbl-container {
    height: 185px;
    box-sizing: border-box;
    * {
        box-sizing: border-box;
    }
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
.recentin-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
.recentin-table td {
    text-align: center;
    height: 30px;
    border: 1px solid $lineAndTitleColor;
}
.recentin-table tr td:last-child {
    border-right-width: 0;
}
.recentin-table tr td:first-child {
    border-left-width: 0;
}
.recentin-table tr:first-child td {
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
</style>