<template>
<div class="jzxg-wrap">
  <div class="jzxg-banner">
    <p class="banner-text">金融界顶级智能金融团队打造的策略选股产品，自创AI-Pattern Recognition（人工智能形态识别），AI-Martket Wave Band（人工智能市场波段）算法，Z-Timing择时算法选股，让您抢先享受人工智能选股服务。打造五大策略选出股票，实时送达调仓消息把握交易时机。投顾专家提供专属客服，辅助决策，更胜一筹。</p>
  </div>
  <div class="jzxgblock clearfix jzmnc">
    <div class="jzxgblock-left fl">
      <div class="feature-title">极智模拟仓</div>
      <ul class="income-labels clearfix">
        <li class="fl" v-for="item of jzmncLabelData">
          <span class="label-name">{{item.label}}</span>
          <span class="label-value">{{item.value}}</span>
        </li>
      </ul>
      <div style="height:275px;">
        <IncomeCharts :jzmncChartData="jzmncChartData"></IncomeCharts>
      </div>
      <div style="padding-left: 15px;">支付宝收益的<span style="color:#fc2721;">{{formatData(jzmncProfitMultiple)?jzmncProfitMultiple:'--'}}</span>倍!</div>
    </div>
    <div class="jzxgblock-right fl">
      <div class="jzxgblock-right-wrap">
        <p class="jzxgblock-right-text">运用z量化底层算法和AI-Pattern Recognition（人工智能形态识别）算法，通过分析资金面，k线走势形态，策略判断出即将出现主升浪的个股，轻松赢在起跑线；按照黄金盈亏比例预设止损止盈点，跟随策略调仓，无畏恐惧，战胜贪婪。</p>
        <div class="ten-stock-title">极智十大选股</div>
        <div class="ten-stock">
          <tenStocks :jzmncTenStockList="jzmncTenStockData"></tenStocks>
        </div>
        <div class=""><img src="../../assets/images/jzxg/tip.png" alt="" style="margin-right:3px;">策略由z量化团队提供技术支持</div>
      </div>
    </div>
  </div>
  <div class="jzxgblock clearfix bdyx">
    <div class="jzxgblock-left fl">
      <div class="feature-title">波段优选</div>
      <ul class="income-labels clearfix">
        <li class="fl" v-for="item of bdyxLabelData">
          <span class="label-name">{{item.label}}</span>
          <span class="label-value">{{item.value}}</span>
        </li>
      </ul>
      <div style="height:275px;">

      </div>
      <div style="padding-left: 15px;">支付宝收益的<span style="color:#fc2721;">{{formatData(bdyxProfitMultiple)?bdyxProfitMultiple:'--'}}</span>倍!</div>
    </div>
    <div class="jzxgblock-right fl">
      <div class="jzxgblock-right-wrap">
        <p class="jzxgblock-right-text">万物互联，AI-Martket Wave Band（人工智能市场波段）算法把物理学中电磁波和衍射分析的思想和市场行为结合，打造出波段优选策略。择天时，定低点，判洗盘，抓反转；高抛低吸，道法自然。</p>
        <div class="ten-stock-title">极智十大选股</div>
        <div class="ten-stock">
          <tenStocks :jzmncTenStockList="bdyxTenStockData"></tenStocks>
        </div>
        <div class=""><img src="../../assets/images/jzxg/tip.png" alt="" style="margin-right:3px;">策略由z量化团队提供技术支持</div>
      </div>
    </div>
  </div>
  <div class="jzxgblock clearfix zxjj">
    <div class="jzxgblock-left fl">
      <div class="feature-title">波段优选</div>
      <ul class="income-labels clearfix">
        <li class="fl" v-for="item of bdyxLabelData">
          <span class="label-name">{{item.label}}</span>
          <span class="label-value">{{item.value}}</span>
        </li>
      </ul>
      <div style="height:275px;">

      </div>
      <div style="padding-left: 15px;">支付宝收益的<span style="color:#fc2721;">{{formatData(bdyxProfitMultiple)?bdyxProfitMultiple:'--'}}</span>倍!</div>
    </div>
    <div class="jzxgblock-right fl">
      <div class="jzxgblock-right-wrap">
        <p class="jzxgblock-right-text">万物互联，AI-Martket Wave Band（人工智能市场波段）算法把物理学中电磁波和衍射分析的思想和市场行为结合，打造出波段优选策略。择天时，定低点，判洗盘，抓反转；高抛低吸，道法自然。</p>
        <div class="ten-stock-title">极智十大选股</div>
        <div class="ten-stock">
          <tenStocks :jzmncTenStockList="bdyxTenStockData"></tenStocks>
        </div>
        <div class=""><img src="../../assets/images/jzxg/tip.png" alt="" style="margin-right:3px;">策略由z量化团队提供技术支持</div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import IncomeCharts from 'components/jzxg/income-chart'
import tenStocks from 'components/jzxg/ten-stock'
import {
  mapState
} from 'vuex'
export default {
  props: [],
  data() {
    return {
      // 收益标签值
      jzmncLabelData: [],
      bdyxLabelData: [],
      zxjjLabelData: [],
      rdjjLabelData: [],
      zltjLabelData: [],
      // 收益曲线和饼图值
      jzmncChartData: null,
      // 十大牛股
      jzmncTenStockData: null,
      bdyxTenStockData: null,
      // 收益倍数
      jzmncProfitMultiple: '',
      bdyxProfitMultiple: '',

    }
  },
  watch: {

  },
  components: {
    IncomeCharts,
    tenStocks
  },
  computed: mapState({
    subscriptions: state => state.jzxg.subscriptions,
    jzmncData: state => state.jzxg.jzmncData,
    bdyxData: state => state.jzxg.bdyxData,
    zxjjData: state => state.jzxg.zxjjData,
    rdjjData: state => state.jzxg.rdjjData,
    zltjData: state => state.jzxg.zltjData
  }),
  methods: {
    init: function() {
      this.$store.dispatch('jzxg/getJzxgBeforeData').then(() => {
        // 收益标签值
        this.jzmncLabelData = this.jzmncData.indicators
        this.bdyxLabelData = this.bdyxData.indicators
        this.zxjjLabelData = this.zxjjData.indicators
        this.rdjjLabelData = this.rdjjData.indicators
        this.zltjLabelData = this.zltjData.indicators
        // 收益曲线和饼图值
        this.jzmncChartData = this.jzmncData.performCurve
        // 十大牛股
        this.jzmncTenStockData = this.jzmncData.hotStocks
        this.bdyxTenStockData = this.bdyxData.hotStocks
        // 收益倍数
        this.jzmncProfitMultiple = this.jzmncData.profitMultiple
        this.bdyxProfitMultiple = this.bdyxData.profitMultiple
      })
    },
    formatData: function(value) {
      if (value || value === 0) {
        return true
      } else {
        return false
      }
    }
  },
  mounted() {
    this.init()
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/base.css";
@import "../../assets/scss/style";
.jzxg-wrap {
    background-color: $bgDeepColor;
    font-size: 12px;
    min-width: 1217px;
    padding: 3px 1px;
    font-family: "Microsoft YaHei";
    color: $wordsColorBase;
}
.jzxg-wrap {
    box-sizing: border-box;
    * {
        box-sizing: border-box;
    }
}
.jzxg-banner {
    height: 220px;
    background: url("../../assets/images/jzxg/jzxg_banner.png") center;
    overflow: hidden;
}
.banner-text {
    font-size: 14px;
    color: #e3b45e;
    margin-top: 130px;
    padding: 22px 85px;
}
.jzxgblock {
    height: 355px;
    background-color: $bgConColor;
    position: relative;
}
.feature-title {
    position: absolute;
    top: 0;
    left: 0;
    width: 158px;
    height: 45px;
    text-align: center;
    line-height: 45px;
    font-size: 20.33px;
    color: #fff;
    background: -webkit-linear-gradient(left top, #3d99e7, #0d62db);
    background: -o-linear-gradient(bottom right, #3d99e7, #0d62db);
    background: -moz-linear-gradient(bottom right, #3d99e7, #0d62db);
    background: linear-gradient(to bottom right, #3d99e7, #0d62db);
    border-bottom: 1px solid rgba(125,196,216,0.5);
    border-right: 1px solid rgba(125,196,216,0.5);
}
.jzxgblock-left {
    width: 53.9%;
    height: 100%;
    padding-right: 20px;
    padding-bottom: 20px;
}
.jzxgblock-right {
    width: 45.1%;
    height: 100%;
    padding: 30px 0;
}
.jzxgblock-right-wrap {
    border-left: 1px solid $bgDeepColor;
    padding: 0 10px;
    height: 100%;
}
.jzxgblock-right-text {
    height: 80px;
    border-bottom: 1px solid $bgDeepColor;
    line-height: 23px;
}
.income-labels {
    padding: 20px 0 10px 200px;
}
.income-labels li {
    margin-left: 45px;
}
.income-labels li:first-child {
    margin-left: 0;
}
.label-name {
    color: $wordsColorBase;
    margin-right: 10px;
}
.label-value {
    color: $upColorDhq;
}
.ten-stock {
    height: 170px;
}
.ten-stock-title {
    height: 30px;
    padding-top: 10px;
}
</style>