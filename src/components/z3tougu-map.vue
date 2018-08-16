<style lang="scss">
@import '../assets/css/base.css';
@import '../assets/scss/style';
body .app,
html {
    height: 100%;
}
* {
    box-sizing: border-box;
    font-size: $fontSizeBase;
    font-family: 'Microsoft YaHei';
}
.map {
    background-color: $bgConColor;
    height: 100%;
    min-width: 1217px;
}
.map_pad {
    padding: 0 13px;
}
.condition {
    text-align: left;
    display: inline-block;
    color: #fff;
    opacity: 0.8;
    margin-right: 3px;
}
.condition select {
    -webkit-appearance: none;
    color: $wordsColorBase;
    border: none;
    padding-left: 10px;
    background: url("../assets/images/stock-map/down-arrow.png") no-repeat scroll right center transparent;
    background-color: $lineAndTitleColor;
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
}
.condition_wrap {
    height: 35px;
    line-height: 35px;
}
.condition_wrap > div {
    float: left;
}
.mask {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
}
.tab-type {
    display: inline-block;
    color: #fff;
    opacity: 0.8;
    width: 122px;
    height: 100%;
    padding-top: 6px;
    margin-right: 36px;
}
.tab-type span {
    float: left;
    width: 60px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    cursor: pointer;
}
.tab-type span:nth-child(1) {
    margin-right: 2px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
}
.tab-type span:nth-child(2) {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}
.selected-color {
    background-color: $blueWordsColor;
}
.unselected-color {
    background-color: $lineAndTitleColor;
}
</style>
<template>
<div class="map" v-bind:class="{'map_pad':showCondition}">
  <div class="mask" :style="{height:maskHeight+'px'}" v-show="isShowMask"></div>
  <div class="condition_wrap clearfix" v-if="showCondition">
    <div class="tab-type clearfix">
      <span class="selected-color">个股</span>
      <router-link class="unselected-color" tag='span' :to="{name:'plateMap'}">板块</router-link>
    </div>
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
                <option value="margin">融资融券</option>
            </select> 浏览指标：
      <select v-model="condition" class="condition-select">
                <option value="margin_buy_value" v-show="rangeCode === 'margin'">融资买入额</option>
                <option value="margin_buy_net_value" v-show="rangeCode === 'margin'">融资净买入额</option>
                <option value="mkt_idx.cur_chng_pct">涨跌幅</option>
                <option value="mkt_idx.chng_pct_week">近1周涨跌幅</option>
                <option value="perf_idx.chng_pct_month">近1月涨跌幅</option>
                <option value="perf_idx.chng_pct_3month">近3月涨跌幅</option>
                <option value="perf_idx.chng_pct_6month">近6月涨跌幅</option>
                <option value="perf_idx.chng_pct_year">近1年涨跌幅</option>
                <option value="perf_idx.chng_pct_year_sofar">今年以来涨跌幅</option>
                <option value="mkt_idx.rising_rate">涨速</option>
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
  <StockMap :rangeCode="rangeCode" :condition="condition" :focusStockName="focusStockName" @isEnlarge="isShow" @isStopPlayback="isShowMaskFn" @toZdfCondition="toZdf" :conditionList="conditionList"></StockMap>
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
      isShowMask: false,
      conditionList: {
        'margin_buy_value': '融资买入额',
        'margin_buy_net_value': '融资净买入额',
        'mkt_idx.cur_chng_pct': '涨跌幅',
        'mkt_idx.chng_pct_week': '近1周涨跌幅',
        'perf_idx.chng_pct_month': '近1月涨跌幅',
        'perf_idx.chng_pct_3month': '近3月涨跌幅',
        'perf_idx.chng_pct_6month': '近6月涨跌幅',
        'perf_idx.chng_pct_year': '近1年涨跌幅',
        'perf_idx.chng_pct_year_sofar': '今年以来涨跌幅',
        'mkt_idx.rising_rate': '涨速',
        'mkt_idx.rela_volume': '相对成交量',
        'mkt_idx.peg': 'PEG',
        'mkt_idx.ps': '市销率',
        'mkt_idx.pb': '市净率',
        'mkt_idx.div_rate': '股息率',
        'mkt_idx.pe_ttm': '市盈率(TTM)',
        'mkt_idx.fir_fcst_pe': '预测市盈率',
        'fin_idx.eps_5year': 'EPS增长率(过去5年)',
        'act_date': '业绩公布日',
        'mkt_idx.keep_days_today': '连续涨跌天数'
      }
    }
  },
  watch: {
    rangeCode() {
      if (this.rangeCode !== 'margin' && (this.condition === 'margin_buy_value' || this.condition === 'margin_buy_net_value')) {
        this.condition = 'mkt_idx.cur_chng_pct'
      }
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
