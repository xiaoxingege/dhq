<style lang="scss">
@import '../assets/css/base.css';
body .app,
html {
    height: 100%;
}
* {
    box-sizing: border-box;
    font-size: 12px;
    font-family: 'Microsoft YaHei';
}
.map {
    background-color: #141518;
    height: 100%;
    min-width: 1217px;
}
.map_pad {
    padding: 0 13px;
}
.condition {
    text-align: left;
    display: inline-block;
}
.condition {
    color: #fff;
    opacity: 0.8;
}
.condition select {
    -webkit-appearance: none;
    color: #c9d0d7;
    border: none;
    padding-left: 10px;
    background: url("../assets/images/stock-map/down-arrow.png") no-repeat scroll right center transparent;
    background-color: #23272c;
    height: 22px;
    background-position-x: 95%;
    border-radius: 3px;
    line-height: 22px;
}
.condition select option:first-child {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}
.condition select option:last-child {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}

.code-select {
    width: 150px;
    margin-right: 30px;
}

.condition-select {
    width: 166px;
}
.condition select:focus {
    border: none;
    outline: none;
}

.condition select option {
    -webkit-appearance: none;
    display: inline-block;
    /* height: 30px;
    padding: 50px;*/
}
.condition_wrap {
    height: 35px;
    line-height: 35px;
    /*background-color: #23272c;*/
}
.mask {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
}
</style>
<template>
<div class="map" v-bind:class="{'map_pad':showCondition}">
  <div class="mask" :style="{height:maskHeight+'px'}" v-if="isShowMask"></div>
  <div class="condition_wrap" v-if="showCondition">
    <div class="condition" @click="isClickSelect">
      股票范围：
      <select v-model="rangeCode" class="code-select">
                <option value="">全部A股</option>
                <option value="000001.SH">上证A股</option>
                <option value="399001.SZ">深证A股</option>
                <option value="mainSH">上交所主板</option>
                <option value="mainSZ">深交所主板</option>
                <option value="399006.SZ">中小板</option>
                <option value="399005.SZ">创业板</option>
            </select> 浏览指标：
      <select v-model="condition" class="condition-select">
                <option value="mkt_idx.cur_chng_pct">涨跌幅</option>
                <option value="mkt_idx.chng_pct_week">近1周涨跌幅</option>
                <option value="perf_idx.chng_pct_month">近1月涨跌幅</option>
                <option value="perf_idx.chng_pct_3month">近3月涨跌幅</option>
                <option value="perf_idx.chng_pct_6month">近6月涨跌幅</option>
                <option value="perf_idx.chng_pct_year">近1年涨跌幅</option>
                <option value="perf_idx.chng_pct_year_sofar">今年以来涨跌幅</option>
                <option value="mkt_idx.rela_volume">相对成交量</option>
                <option value="mkt_idx.peg">PEG</option>
                <option value="mkt_idx.ps">市销率</option>
                <option value="mkt_idx.pb">市净率</option>
                <option value="mkt_idx.div_rate">股息率</option>
                <option value="mkt_idx.pe_ttm">市盈率(TTM)</option>
                <option value="mkt_idx.fir_fcst_pe">预测市盈率</option>
                <option value="fin_idx.eps_5year">EPS增长率(过去5年)</option>
                <option value="act_date">业绩公布日</option>
                <option value="mkt_idx.keep_days_today">连续涨跌天数</option>
            </select>
    </div>
    <StockSearch :rangeCode="rangeCode" :condition="condition" @focusStock="getFocusStockName"></StockSearch>
  </div>
  <StockMap :rangeCode="rangeCode" :condition="condition" :focusStockName="focusStockName" @isEnlarge="isShow" @isStopPlayback="isShowMaskFn" @toZdfCondition="toZdf"></StockMap>
</div>
</template>
<script type="text/javascript">
import StockSearch from 'components/search-map'
import StockMap from 'components/stock-map'
export default {
  data() {
    return {
      rangeCode: this.$route.query.rCode || '',
      condition: this.$route.query.condition || 'mkt_idx.cur_chng_pct',
      keyword: '',
      showCondition: true,
      focusStockName: '',
      mapHeight: 0,
      mapWidth: 0,
      maskHeight: window.innerHeight - 35,
      isShowMask: false
    }
  },
  props: [''],
  components: {
    StockMap,
    StockSearch
  },
  methods: {
    isShow: function(msg) {
      if (msg) {
        this.showCondition = false // 全屏
      } else {
        this.showCondition = true // 非全屏
      }
    },
    isShowMaskFn: function(mag) {
      this.isShowMask = mag
    },
    getFocusStockName: function(msg) {
      this.focusStockName = msg
    },
    toZdf: function(msg) {
      this.condition = msg
    }
  },
  mounted() {

  }

}
</script>
