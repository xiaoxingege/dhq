<template>
<div class="jzxg-wrap">
  <div class="jzxg-banner">
    <p class="banner-text">金融界顶级智能金融团队打造的策略选股产品，自创AI-Pattern Recognition（人工智能形态识别），AI-Martket Wave Band（人工智能市场波段）算法，Z-Timing择时算法选股，让您抢先享受人工智能选股服务。打造五大策略选出股票，实时送达调仓消息把握交易时机。投顾专家提供专属客服，辅助决策，更胜一筹。</p>
  </div>
  <div class="jzmnc">
    <div class="jzmnc-left">
      <div class="feature-title">极智模拟仓</div>
      <div class="income-labels">
        累计收益<span style="margin-right:43px;">{{jzmncData}}</span> 年化收益
        <span style="margin-right:43px;">{{}}</span> 月收益
        <span>{{}}</span>
      </div>
    </div>
    <div class="jzmnc-right">

    </div>
  </div>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
export default {
  props: [],
  data() {
    return {

    }
  },
  watch: {

  },
  components: {

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
      this.$store.dispatch('jzxg/getJzxgBeforeData')
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
    font-family: "Microsoft YaHei";
    color: $wordsColorBase;
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
.jzmnc {
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
.jzmnc-left {
    width: 53.9%;
    height: 100%;
    padding-right: 40px;
    padding-bottom: 20px;
}
.jzmnc-right {
    width: 45.1%;
    height: 100%;
}
.income-labels {
    padding: 20px 0 10px 200px;
}
.income-labels span {
    }
</style>