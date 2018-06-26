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
            <tr v-for="item of recentInList">
              <td>{{item.stkid}}</td>
              <td>{{item.stkname}}</td>
              <td>{{item.buyDate}}</td>
              <td>{{item.buyPrice}}</td>
              <td>{{item.price}}</td>
              <td>{{item.maxRiseRatio}}</td>
              <td></td>
            </tr>
          </table>
        </div>
        <footer class="load-more">
          <span v-show="loadFlag">正在加载</span>
        </footer>
        <div class="nullData" v-show="noFlag">到底啦！</div>
      </section>
    </div>
  </div>
</div>
</template>
<script>
import Vscroll from 'components/jzxg/load-more'
import {
  mapState
} from 'vuex'
export default {
  props: ['recentInData', 'strategyId', 'nextStart'],
  data() {
    return {
      noFlag: false, // 暂无更多数据显示,
      infiniteLoading: false,
      num: 10, //  一页显示多少条
      recentInList: this.recentInData,
      pageStart: this.nextStart,
      loadFlag: false
    }
  },
  components: {
    Vscroll
  },
  watch: {
    nextStart() {
      this.pageStart = this.nextStart
    },
    recentInData() {
      this.recentInList = this.recentInData
    }
  },
  computed: mapState({
    lateInData: state => state.jzxg.latestInData
  }),
  methods: {
    onInfinite() {
      this.$store.dispatch('jzxg/getLatestInData', {
        strategyId: this.strategyId,
        pageSize: this.num,
        pageStart: this.pageStart
      }).then(() => {
        this.recentInList = this.recentInList.concat(this.lateInData.stocks)
        this.pageStart = this.lateInData.nextStart
      })
    },
    infinite() {
      this.loadFlag = true
      setTimeout(() => {
        this.onInfinite();
      }, 1000);
    },
    onScroll(e) {
      if (this.pageStart === -1) {
        return
      }
      this.noFlag = false; // 到底啦隐藏
      let outerHeight = this.$el.clientHeight // 外框的高度
      let innerHeight = this.$el.querySelector('.inner').clientHeight // 数据表格的高度
      let scrollTop = this.$el.scrollTop // 往上滑的距离
      console.log(scrollTop)
      if (scrollTop >= innerHeight - outerHeight) {
        this.infinite() // 开始请求接口加载数据
      }
    }
  },
  mounted() {

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
    z-index: 9999;
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
    display: none;
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
</style>