<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
* {
    text-align: justify;
    font-size: $fontSizeBase;
    color: $wordsColorBase;
    font-family: "Microsoft YaHei";
}
.display-box {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -o-box;
    display: box;
}
.box-flex-1 {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    -o-box-flex: 1;
    box-flex: 1;
}

.hot-block-wrap {
    width: 100%;
    padding: 0 2px 5px;
}
.table-box {}

.tr-title {
    color: $wordsColorBase;
    padding-left: 5px;
    font-size: 12px;
    display: inline-block;
    line-height: 24px;
}
.td-chngPct {
    /*  text-align: right; */
}
.td-chngPct > div {
    /*  text-align: right; */
    padding: 6px 10px;
}
.no-data {
    width: 99px;
    height: 68px;
    margin: 54px auto 18px;
    background: url("../../assets/images/dhq/no-data.png") no-repeat;
}
.no-data-txt {
    color: $menuSelColor;
    text-align: center;
    padding-bottom: 89px;
}

.redbg {
    background: $upColorDhq;
    border-top-left-radius: 2em;
    border-bottom-left-radius: 2em;
}

.greenbg {
    background: $downColorDhq;
    border-top-right-radius: 2em;
    border-bottom-right-radius: 2em;
}
.name-box {}
.block-num {
    font-size: 14px;
    display: inline-block;
    width: 48px;
    height: 24px;
    line-height: 24px;
    background: #ffd31a;
    color: $menuSelColor;
    text-align: center;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-top-right-radius: 3px;
}
.block-name {
    padding-left: 4px;
    line-height: 22px;
    height: 21px;
    border-bottom: 2px solid #ffd31a;
    color: #ffd31a;
    display: inline-block;
    font-size: 14px;
}
.block-chg {
    padding-left: 9px;
}
.leading-stock {
    /*  line-height: 21px; */
    padding-top: 9px;
    padding-left: 2px;
}
.recent-day {
    padding: 11px 0 5px 2px;
}
.line-charts {
    height: 65px;
}
</style>
<template>
<div class="hot-block-wrap">
  <div class="name-box">
    <span class="block-num">No.1</span><span class="block-name">海南概念</span><span class="block-chg">+232%</span>
  </div>
  <div class="leading-stock">
    <span>相关事件：</span><span>海南自贸区宣布成立！</span>
  </div>
  <div class="leading-stock clearfix">
    <span class="fl">龙头股：</span>
    <div class="fl">
      <span>海南概念</span><span>+232%</span>
    </div>
  </div>
  <div class="recent-day">近20日走势</div>
  <div class="line-charts"></div>
</div>
</template>
<script>
// import config from '../../dhq/config'
import util from '../../dhq/util'
import native from 'utils/nativeApi'
import {
  mapState
} from 'vuex'
export default {
  props: ['indexResume'],
  data() {
    return {
      type: '',
      thTitle: ['指数', '最新', '涨幅', '成交额', '涨跌比', '近期资金流向', '可操作性'],
      alltimers: '',
      size: '',
      data: {
        fundDays: []
      }

    }
  },

  watch: {

  },
  components: {

  },
  computed: mapState({}),
  methods: {

    toNative(stockCode) {
      return native.openStock(stockCode)
    },
    concats(code) {
      return util.formatterInnercode(code)
    },
    formatDuring(time) {
      var date = new Date(time)
      var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours())
      var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes())
      return h + ':' + m
    },
    checkClass(index) {
      return index === 4 ? 'tr-img2' : index === 3 ? 'tr-img3' : ''
    },
    checkUnit(str) {
      return str + '亿'
    },
    checkChngPct(value) {
      if (value === null || value === '') {
        return '--';
      } else {
        if (value > 0) {
          return '+' + (Number(value) * 100).toFixed(2) + '%';
        } else {
          return (Number(value) * 100).toFixed(2) + '%';
        }
      }
    }

  },
  mounted() {


  },
  destroyed() {}
}
</script>
