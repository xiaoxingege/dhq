<style lang="scss">
@import '../../assets/css/base.css';
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
    color: #fff;
    opacity: 0.8;
    margin-right: 3px;
}
.condition select {
    -webkit-appearance: none;
    color: #c9d0d7;
    border: none;
    padding-left: 10px;
    background: url("../../assets/images/stock-map/down-arrow.png") no-repeat scroll right center transparent;
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
    display: inline-block;
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
    background-color: #1984ea;
}
.unselected-color {
    background-color: #23272c;
}
</style>
<template>
<div class="map map_pad">
  <div class="mask" :style="{height:maskHeight+'px'}" v-if="isShowMask"></div>
  <div class="condition_wrap">
    <div class="tab-type clearfix">
      <router-link class="unselected-color" tag='span' :to="{name:'map'}">个股</router-link>
      <span class="selected-color">板块</span>
    </div>
    <div class="condition">
      板块类型：
      <select v-model="plateType" class="code-select">
                    <option value="theme">题材</option>
                    <option value="industry">行业</option>
                </select> 浏览指标：
      <select v-model="conditionTopic" class="condition-select" v-show="mapType === 'plate' && plateType === 'theme'">
                    <option value="topic_market.tech_index">热度指数</option>
                    <option value="chg_pct">涨跌幅</option>
                    <option value="chg_pct_week">近1周涨跌幅</option>
                    <option value="chg_pct_month">近1月涨跌幅</option>
                    <option value="chg_pct_3month">近3月涨跌幅</option>
                    <option value="chg_pct_6month">近6月涨跌幅</option>
                    <option value="chg_pct_year">近1年涨跌幅</option>
                    <option value="chg_pct_year_sofar">今年以来涨跌幅</option>
                    <option value="rela_volume">相对成交量</option>
                    <option value="peg">PEG</option>
                    <option value="ps">市销率</option>
                    <option value="pb">市净率</option>
                    <option value="div_rate">股息率</option>
                    <option value="pe_ttm">市盈率(TTM)</option>
                    <option value="fir_fcst_pe">预测市盈率</option>
                    <option value="eps_5year">EPS增长率(过去5年)</option>
                    <option value="keep_days">连续涨跌天数</option>
                </select>
      <select v-model="conditionStock" class="condition-select" v-show="mapType === 'stock' && plateType === 'theme'">
                    <option value="tech_index">热度指数</option>
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
                    <option value="mkt_idx.keep_days_today">连续涨跌天数</option>
                </select>
      <select v-model="conditionIndustry" class="condition-select" v-show="mapType === 'plate' && plateType === 'industry'">
                    <option value="indu_market.tech_index">热度指数</option>
                    <option value="chg_pct">涨跌幅</option>
                    <option value="chg_pct_week">近1周涨跌幅</option>
                    <option value="chg_pct_month">近1月涨跌幅</option>
                    <option value="chg_pct_3month">近3月涨跌幅</option>
                    <option value="chg_pct_6month">近6月涨跌幅</option>
                    <option value="chg_pct_year">近1年涨跌幅</option>
                    <option value="chg_pct_year_sofar">今年以来涨跌幅</option>
                    <option value="rela_volume">相对成交量</option>
                    <option value="peg">PEG</option>
                    <option value="ps">市销率</option>
                    <option value="pb">市净率</option>
                    <option value="div_rate">股息率</option>
                    <option value="pe_ttm">市盈率(TTM)</option>
                    <option value="fir_fcst_pe">预测市盈率</option>
                    <option value="eps_5year">EPS增长率(过去5年)</option>
                    <option value="keep_days">连续涨跌天数</option>
                </select>
      <select v-model="conditionStockI" class="condition-select" v-show="mapType === 'stock' && plateType === 'industry'">
                    <option value="tech_index">热度指数</option>
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
                    <option value="mkt_idx.keep_days_today">连续涨跌天数</option>
                </select>
    </div>
  </div>
  <ThemeMap v-if="plateType === 'theme'" :plateType="plateType" :conditionTopic="conditionTopic" :conditionStock='conditionStock' :topicIndexs='topicIndexs' :topicStockIndexs='topicStockIndexs' @isStopPlayback="isShowMaskFn" @toZdfCondition="toZdf" @passMapType="getMapType"
    @passConditionStock="getConditionStock" @passConditionTopic="getConditionTopic" @changeCondition="getChangeCondition" :conditionList="topicConditionList"></ThemeMap>
  <IndustryMap v-if="plateType === 'industry'" :plateType="plateType" :conditionIndustry="conditionIndustry" :conditionStockI='conditionStockI' :industryIndexs='industryIndexs' :industryStockIndexs='industryStockIndexs' @isStopPlayback="isShowMaskFn" @toZdfCondition="toZdf"
    @passMapType="getMapType" @passConditionStockI="getConditionStockI" @passConditionIndustry="getConditionIndustry" @changeCondition="getChangeCondition" :conditionList="industryConditionList"></IndustryMap>
</div>
</template>
<script type="text/javascript">
import ThemeMap from 'components/plate-map/theme-map'
import IndustryMap from 'components/plate-map/industry-map'
export default {
  data() {
    return {
      plateType: 'theme',
      conditionIndex: 1,
      conditionTopic: 'chg_pct',
      conditionStock: 'mkt_idx.cur_chng_pct',
      keyword: '',
      mapHeight: 0,
      mapWidth: 0,
      maskHeight: window.innerHeight - 35,
      isShowMask: false,
      mapType: 'plate',
      conditionIndustry: 'chg_pct',
      conditionStockI: 'mkt_idx.cur_chng_pct',
      industryIndexs: ['indu_market.tech_index', 'chg_pct', 'chg_pct_week', 'chg_pct_month', 'chg_pct_3month', 'chg_pct_6month', 'chg_pct_year', 'chg_pct_year_sofar', 'rela_volume', 'peg', 'ps', 'pb', 'div_rate', 'pe_ttm', 'fir_fcst_pe', 'eps_5year', 'keep_days'],
      industryStockIndexs: ['tech_index', 'mkt_idx.cur_chng_pct', 'mkt_idx.chng_pct_week', 'perf_idx.chng_pct_month', 'perf_idx.chng_pct_3month', 'perf_idx.chng_pct_6month', 'perf_idx.chng_pct_year', 'perf_idx.chng_pct_year_sofar', 'mkt_idx.rela_volume', 'mkt_idx.peg', 'mkt_idx.ps', 'mkt_idx.pb', 'mkt_idx.div_rate', 'mkt_idx.pe_ttm', 'mkt_idx.fir_fcst_pe', 'fin_idx.eps_5year', 'mkt_idx.keep_days_today'],
      topicIndexs: ['topic_market.tech_index', 'chg_pct', 'chg_pct_week', 'chg_pct_month', 'chg_pct_3month', 'chg_pct_6month', 'chg_pct_year', 'chg_pct_year_sofar', 'rela_volume', 'peg', 'ps', 'pb', 'div_rate', 'pe_ttm', 'fir_fcst_pe', 'eps_5year', 'keep_days'],
      topicStockIndexs: ['tech_index', 'mkt_idx.cur_chng_pct', 'mkt_idx.chng_pct_week', 'perf_idx.chng_pct_month', 'perf_idx.chng_pct_3month', 'perf_idx.chng_pct_6month', 'perf_idx.chng_pct_year', 'perf_idx.chng_pct_year_sofar', 'mkt_idx.rela_volume', 'mkt_idx.peg', 'mkt_idx.ps', 'mkt_idx.pb', 'mkt_idx.div_rate', 'mkt_idx.pe_ttm', 'mkt_idx.fir_fcst_pe', 'fin_idx.eps_5year', 'mkt_idx.keep_days_today'],
      topicConditionList: {
        'topic_market.tech_index': '热度指数',
        'chg_pct': '涨跌幅',
        'chg_pct_week': '近1周涨跌幅',
        'chg_pct_month': '近1月涨跌幅',
        'chg_pct_3month': '近3月涨跌幅',
        'chg_pct_6month': '近6月涨跌幅',
        'chg_pct_year': '近1年涨跌幅',
        'chg_pct_year_sofar': '今年以来涨跌幅',
        'rela_volume': '相对成交量',
        'peg': 'PEG',
        'ps': '市销率',
        'pb': '市净率',
        'div_rate': '股息率',
        'pe_ttm': '市盈率(TTM)',
        'fir_fcst_pe': '预测市盈率',
        'eps_5year': 'EPS增长率(过去5年)',
        'keep_days': '连续涨跌天数'
      },
      industryConditionList: {
        'indu_market.tech_index': '热度指数',
        'chg_pct': '涨跌幅',
        'chg_pct_week': '近1周涨跌幅',
        'chg_pct_month': '近1月涨跌幅',
        'chg_pct_3month': '近3月涨跌幅',
        'chg_pct_6month': '近6月涨跌幅',
        'chg_pct_year': '近1年涨跌幅',
        'chg_pct_year_sofar': '今年以来涨跌幅',
        'rela_volume': '相对成交量',
        'peg': 'PEG',
        'ps': '市销率',
        'pb': '市净率',
        'div_rate': '股息率',
        'pe_ttm': '市盈率(TTM)',
        'fir_fcst_pe': '预测市盈率',
        'eps_5year': 'EPS增长率(过去5年)',
        'keep_days': '连续涨跌天数'
      }
    }
  },
  props: [''],
  watch: {
    plateType() {
      this.mapType = 'plate'
      if (this.plateType === 'theme') { // 题材板块
        this.conditionTopic = this.topicIndexs[this.conditionIndex]
      } else if (this.plateType === 'industry') {
        this.conditionIndustry = this.industryIndexs[this.conditionIndex]
      }
    }
  },
  components: {
    ThemeMap,
    IndustryMap
  },
  methods: {
    isShowMaskFn: function(mag) {
      this.isShowMask = mag
    },
    getFocusStockName: function(msg) {
      this.focusStockName = msg
    },
    toZdf: function(msg) {
      this.condition = msg
    },
    getMapType: function(msg) {
      this.mapType = msg
    },
    // 题材个股的浏览指标变化(msg是题材板块的指标)
    getConditionStock: function(msg) {
      this.conditionStock = this.topicStockIndexs[this.topicIndexs.indexOf(msg)]
    },
    // 行业板块浏览指标变化(msg是题材个股的指标)
    getConditionTopic: function(msg) {
      this.conditionTopic = this.topicIndexs[this.topicStockIndexs.indexOf(msg)]
    },
    // 行业个股的浏览指标变化(msg是行业板块的指标)
    getConditionStockI: function(msg) {
      this.conditionStockI = this.industryStockIndexs[this.industryIndexs.indexOf(msg)]
    },
    // 行业板块浏览指标变化(msg是行业个股的指标)
    getConditionIndustry: function(msg) {
      this.conditionIndustry = this.industryIndexs[this.industryStockIndexs.indexOf(msg)]
    },
    getChangeCondition: function(msg) {
      this.conditionIndex = msg
    }
  },
  mounted() {

  }

}
</script>
