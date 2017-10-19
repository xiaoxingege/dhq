<style lang="scss" scoped>
@import '../assets/css/base.css';

.finance {
    background: #141518;
    color: #c9d0d7;
    font-size: 12px;
    padding: 10px 0 10px 10px;
    line-height: 20px;
    font-family: 'Microsoft Yahei';
}

.finance p span {
    color: #c9d0d7;
}
</style>
<template>
<div class="finance">
  <p><span>总股本(万股)：</span><span v-if="financeData !== null">{{financeData.totlNum === null ? '--':(financeData.totlNum/10e3).toFixed(2)}}</span></p>

  <p><span>流通A股(万股)：</span><span v-if="financeData !== null">{{financeData.aMktNum === null ? '--':(financeData.aMktNum/10e3).toFixed(2)}}</span></p>

  <p><span>股东总数(A股)：</span><span v-if="financeData !== null">{{financeData.total_hld_a === null ? '--':financeData.total_hld_a}}</span>
  </p>

  <p><span>市盈率(LYR)：</span><span v-if="financeData !== null">{{financeData.marketData.peLyr === null ? '--':financeData.marketData.peLyr.toFixed(2)}}</span>
  </p>

  <p><span>市盈率(TTM)：</span><span v-if="financeData !== null">{{financeData.marketData.peTtm === null ? '--':financeData.marketData.peTtm.toFixed(2)}}</span>
  </p>

  <p><span>预测市盈率：</span><span v-if="financeData !== null">{{financeData.marketData.firFcstPe === null ? '--':financeData.marketData.firFcstPe.toFixed(2)}}</span>
  </p>

  <p><span>PEG：</span><span v-if="financeData !== null">{{financeData.marketData.peg === null ? '--':financeData.marketData.peg.toFixed(2)}}</span>
  </p>

  <p><span>市净率：</span><span v-if="financeData !== null">{{financeData.marketData.pb === null ? '--':financeData.marketData.pb.toFixed(2)}}</span>
  </p>

  <p><span>市销率：</span><span v-if="financeData !== null">{{financeData.marketData.ps === null ? '--':financeData.marketData.ps.toFixed(2)}}</span>
  </p>

  <p><span>市现率：</span><span v-if="financeData !== null">{{financeData.marketData.pc === null ? '--':financeData.marketData.pc.toFixed(2)}}</span>
  </p>

  <p><span>股价/自由现金流：</span><span v-if="financeData !== null">{{financeData.marketData.priceCash === null ? '--':financeData.marketData.priceCash.toFixed(2)}}</span>
  </p>

  <p><span>流动比率：</span><span v-if="financeData !== null">{{financeData.finData.currentRatio === null ? '--':financeData.finData.currentRatio.toFixed(2)}}</span>
  </p>

  <p><span>速动比率：</span><span v-if="financeData !== null">{{financeData.finData.quickRatio === null ? '--':financeData.finData.quickRatio.toFixed(2)}}</span>
  </p>

  <p><span>总市值(亿元)：</span><span v-if="financeData !== null">{{financeData.marketData.tcap === null ? '--':(financeData.marketData.tcap/10e7).toFixed(2)}}</span>
  </p>

  <p><span>流通A股市值(亿元)：</span><span v-if="financeData !== null">{{financeData.marketData.mktcapA === null ? '--':(financeData.marketData.mktcapA/10e7).toFixed(2)}}</span>
  </p>

  <p><span>每股收益(元)：</span><span v-if="financeData !== null">{{financeData.marketData2.epsTtm === null ? '--':financeData.marketData2.epsTtm.toFixed(2)}}</span>
  </p>

  <p><span>每股净资产(元)：</span><span v-if="financeData !== null">{{financeData.marketData2.bps === null ? '--':financeData.marketData2.bps.toFixed(2)}}</span>
  </p>

  <p><span>每股现金流(元)：</span><span v-if="financeData !== null">{{financeData.marketData2.cps === null ? '--':financeData.marketData2.cps.toFixed(2)}}</span>
  </p>

  <p><span>每股分红(年度)：</span><span v-if="financeData !== null">{{financeData.marketData2.psCashBt1Year === null ? '--':financeData.marketData2.psCashBt1Year.toFixed(2)}}</span>
  </p>

  <p><span>股息率：</span><span v-if="financeData !== null">{{financeData.marketData.divRate === null ? '--':financeData.marketData.divRate.toFixed(2)+'%'}}</span>
  </p>

  <p><span>总资产收益率：</span><span v-if="financeData !== null">{{financeData.finData.roa === null ? '--':financeData.finData.roa.toFixed(2)+'%'}}</span>
  </p>

  <p><span>净资产收益率：</span><span v-if="financeData !== null">{{financeData.finData.duRoe === null ? '--':financeData.finData.duRoe.toFixed(2)+'%'}}</span>
  </p>

  <p><span>投资回报率：</span><span v-if="financeData !== null">{{financeData.finData.roic === null ? '--':financeData.finData.roic.toFixed(2)+'%'}}</span>
  </p>

  <p><span>营业收入(万元)：</span><span v-if="financeData !== null">{{financeData.finData.sale === null ? '--':(financeData.finData.sale/10e3).toFixed(2)}}</span>
  </p>

  <p><span>营业总收入(万元)：</span><span v-if="financeData !== null">{{financeData.finData.totRevenue === null ? '--':(financeData.finData.totRevenue/10e3).toFixed(2)}}</span>
  </p>

  <p><span>资产总计(万元)：</span><span v-if="financeData !== null">{{financeData.finData.total_asset === null ? '--':(financeData.finData.total_asset/10e3).toFixed(2)}}</span>
  </p>

  <p><span>总负债(万元)：</span><span v-if="financeData !== null">{{financeData.finData.total_debts === null ? '--':(financeData.finData.total_debts/10e3).toFixed(2)}}</span>
  </p>

  <p><span>股东权益(万元)：</span><span v-if="financeData !== null">{{financeData.marketData2.netAsset === null ? '--':(financeData.marketData2.netAsset/10e3).toFixed(2)}}</span>
  </p>

  <p><span>资本公积(万元)：</span><span v-if="financeData !== null">{{financeData.finData.cap_reserve === null ? '--':(financeData.finData.cap_reserve/10e3).toFixed(2)}}</span>
  </p>

  <p><span>总负债/股东权益：</span><span v-if="financeData !== null">{{financeData.finData.totLiabEqu === null ? '--':financeData.finData.totLiabEqu}}</span>
  </p>

  <p><span>长期负债/股东权益：</span><span v-if="financeData !== null">{{financeData.finData.liabEqu === null ? '--':financeData.finData.liabEqu}}</span>
  </p>

  <p><span>毛利率：</span><span v-if="financeData !== null">{{financeData.finData.selRint === null ? '--':financeData.finData.selRint.toFixed(2)+'%'}}</span>
  </p>

  <p><span>营业利润率：</span><span v-if="financeData !== null">{{financeData.finData.trTp === null ? '--':financeData.finData.trTp.toFixed(2)+'%'}}</span>
  </p>

  <p><span>净利率：</span><span v-if="financeData !== null">{{financeData.finData.selNint === null ? '--':financeData.finData.selNint.toFixed(2)+'%'}}</span>
  </p>

  <p><span>股息支付率：</span><span v-if="financeData !== null">{{financeData.divPct === null ? '--':financeData.divPct.toFixed(2)+'%'}}</span>
  </p>

  <p><span>净利润(万元)：</span><span v-if="financeData !== null">{{financeData.finData.net_profit === null ? '--':(financeData.finData.net_profit/10e3).toFixed(2)}}</span>
  </p>

  <p><span>报告日期：</span><span v-if="financeData !== null">{{financeData.finData.finEnddate === null ? '--':formatDate(new Date(financeData.finData.finEnddate))}}</span>
  </p>

</div>
</template>
<script>
import {
  mapState
} from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    formatDate(time) {
      const year = time.getFullYear()
      let month = time.getMonth() + 1
      const date = time.getDate()
      if (month < 10) {
        month = '0' + month
      }
      return year + '-' + month + '-' + date
    }
  },
  computed: mapState({
    financeData: state => state.finance.financeData
  }),
  mounted() {
    const stockCode = this.$route.query.stockCode
    this.$store.dispatch('finance/getFinData', {
      stockCode: stockCode
    })
  }
}
</script>
