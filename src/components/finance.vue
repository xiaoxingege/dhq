<style lang="scss" scoped>
@import '../assets/css/base.css';
</style>
<template>
<div class="finance">
  <p><span>总股本(万股):</span><span></span></p>
  <p><span>流通A股(万股):</span><span></span></p>
  <p><span>股东总数(A股):</span><span></span></p>
  <p><span>市盈率(LYR):</span><span></span></p>
  <p><span>市盈率(TTM):</span><span></span></p>
  <p><span>预测市盈率:</span><span></span></p>
  <p><span>PEG:</span><span></span></p>
  <p><span>市净率：</span><span></span></p>
  <p><span>市销率：</span><span></span></p>
  <p><span>市现率：</span><span></span></p>
  <p><span>股价/自由现金流:</span><span></span></p>
  <p><span>流动比率:</span><span></span></p>
  <p><span>速动比率:</span><span></span></p>
  <p><span>总市值(亿元):</span><span></span></p>
  <p><span>流通A股市值(亿元):</span><span></span></p>
  <p><span>每股收益(元):</span><span></span></p>
  <p><span>每股净资产(元):</span><span></span></p>
  <p><span>每股现金流(元):</span><span></span></p>
  <p><span>每股分红(年度):</span><span></span></p>
  <p><span>股息率:</span><span></span></p>
  <p><span>总资产收益率:</span><span></span></p>
  <p><span>净资产收益率:</span><span></span></p>
  <p><span>投资回报率:</span><span></span></p>
  <p><span>营业收入(万元):</span><span></span></p>
  <p><span>营业总收入(万元):</span><span></span></p>
  <p><span>资产总计(万元):</span><span></span></p>
  <p><span>总负债(万元):</span><span></span></p>
  <p><span>股东权益(万元):</span><span></span></p>
  <p><span>资本公积(万元):</span><span></span></p>
  <p><span>总负债/股东权益:</span><span></span></p>
  <p><span>长期负债/股东权益:</span><span></span></p>
  <p><span>毛利率:</span><span></span></p>
  <p><span>营业利润率:</span><span></span></p>
  <p><span>净利率:</span><span></span></p>
  <p><span>股息支付率:</span><span></span></p>
  <p><span>净利润(万元):</span><span></span></p>
  <p><span>报告日期:</span><span></span></p>

</div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {},
  mounted () {
    this.$store.dispatch('finance/getFinData', {
      stockCode: '002087.SZ'
    })
  }
}
</script>
