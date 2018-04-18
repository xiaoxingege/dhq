<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
* {
    text-align: justify;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    box-sizing: border-box;
    font-family: '微软雅黑';
    font-size: $fontSizeBase;
    color: $wordsColorBase;
}
/*$bgDeepColor:#0d0e0f;/* 最深背景 */
/*$bgConColor:#141518;/* 内容背景 */
/*$lineAndTitleColor:#23272c;/* 线条颜色和内容标题背景 */
/*$bgNavColor:#404852;/* 导航外框背景 */
/*$wordsColorBase:#c9d0d7;/* 最亮文字颜色 */
/*$grayWordsColor:#808ba1;/* 灰色文字颜色 所有图标颜色 */
/*$menuSelColor:#525a65;/* 二级菜单选中颜色 */
/*$blueWordsColor:#1984ea;/* 蓝色文字色 */
/*$hoverBgColor:#2e4465;/* 鼠标滑过列表背景色 */
/*$upColor:#ca4941;/* 所有红色 上涨 */
/*$downColor:#56a870;/* 所有绿色 上涨 */
/*$backupYellow:#f0b540;/* 备用黄色 */
/*$fontSizeBase:12px; /* 基本字体 */
.topic-detail {
    width: 100%;
    background: #141518;
    font-size: 12px;
    color: #c9d0d7;
    /* height: 100%; */
    border-left: 1px solid #0d0e0f;
    border-bottom: 3px solid #0d0e0f;
}
.app,
body,
html {
    height: 100%;
    /*  background-color: $bgDeepColor;*/
}

body {
    /* background-color: $bgDeepColor;*/
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
.box-flex-2 {
    -webkit-box-flex: 2;
    -moz-box-flex: 2;
    -ms-flex: 2;
    -o-box-flex: 2;
    box-flex: 2;
}
.box-flex-3 {
    -webkit-box-flex: 3;
    -moz-box-flex: 3;
    -ms-flex: 3;
    -o-box-flex: 3;
    box-flex: 3;
}
.clinic-top-left {

    border-right: 1px solid $lineAndTitleColor;
}
.red {
    color: $upColor;
}

.green {
    color: $downColor;
}

.c_txt {
    color: $wordsColorBase;
}

.radar-box {
    height: 180px;
    position: relative;
    left: 15%;
}
.radarChart {
    height: 100%;
    width: 100%;

}

.desc-red {
    border: 1px solid $upColor;

}
.desc-green {
    border: 1px solid $downColor;

}

.pl-5 {
    padding-left: 5px;
}

.clinic-dime-wrap {
    background-color: $bgConColor;
}
.tab-ul {
    width: 100%;
    background: $bgNavColor;
}
.tab-ul li {
    width: 70px;
    height: 30px;
    line-height: 30px;
    background: $bgNavColor;
    text-align: center;
    border-right: 1px solid $bgDeepColor;
    cursor: pointer;
}
.tab-ul li.active {
    background: $menuSelColor;
}
.dime-charts {
    background: $bgDeepColor;
}
.chart-box1 {
    width: 100%;

}
.chart-kline {
    width: 49%;
    background: $bgConColor;
    margin: 0 5px 6px 0;
    float: left;
}
.chart-grop {
    width: 49%;
    background: $bgConColor;
    margin: 0 5px 6px 0;
    float: left;
}
.chart2-kline {
    width: 49%;
    background: $bgConColor;
    margin: 0 5px 6px 0;
    float: left;
}
.chart-grop2 {
    /*width: 50%;*/
}
.charts-base {
    /* height: 264px;*/
    background: $bgDeepColor;
    width: 100%;
    display: inline-block;
}
.tech-charts1 {
    width: 49%;
    display: inline-block;
    background: $bgConColor;
    margin: 0 5px 6px 0;
}
</style>
<template>
<div class="clinic-dime-wrap" id="wrap">
  <div class="dime-tab">
    <ul class="tab-ul fl">
      <li class="fl" @click="faceCheck('fund')" :class="showFund===true?'active':''">资金面</li>
      <li class="fl" @click="faceCheck('smart')" :class="showSmart===true?'active':''">基本面</li>
      <li class="fl" @click="faceCheck('techs')" :class="showTechs===true?'active':''">技术面</li>
      <li class="fl">消息面</li>
      <li class="fl">行业面</li>
    </ul>
  </div>
  <div class="dime-charts" v-if='showFund'>
    <div class="chart-box1 ">
      <div class="chart-kline box-flex-1">
        <DimeKline :innerCode='innerCode' />
      </div>
      <div class="chart-grop box-flex-1">
        <Arealine :innerCode='innerCode' />
      </div>
    </div>
    <div class="chart-box2">
      <div class="chart-kline box-flex-1">
        <Barline :innerCode='innerCode' />
      </div>
      <div class="chart-grop box-flex-1">
        <Pieline :innerCode='innerCode' />
      </div>
    </div>
  </div>
  <div class="charts-base" v-if='showSmart'>
    <div class="box-flex-1 chart2-kline" v-for='(item,index) of baseFaceData' v-if='index<2'>
      <BasefaceCharts :baseFace='item' :dataIndex='index' :innerCode='innerCode' />
    </div>
    <div class="box-flex-1 chart2-kline" v-for='(item,index) of baseFaceData' v-if='index>=2'>
      <FloatfactorCharts :baseFace='item' :dataIndex='index' :floatYname='floatYname' :legendName1='legendName1' :legendName2='legendName2' :legendShow='legendShow' :innerCode='innerCode' />
    </div>
  </div>
  <div class="charts-base display-box" v-if='showTechs'>
    <div class="tech-charts1 box-flex-1" v-for='(item,index) of techFaceData'>
      <TechnicalCharts :techFace='item' :dataIndex='index' :legendName1='legendName1' :legendName2='legendName2' :legendShow='legendShow' :innerCode='innerCode' />
    </div>

  </div>
</div>
</template>
<script type="text/javascript">
import {
  mapState
} from 'vuex'
// import echarts from 'echarts'
import DimeKline from 'components/clinicShares/dime-kline'
import Barline from 'components/clinicShares/dime-barline'
import Pieline from 'components/clinicShares/dime-pieline'
import Arealine from 'components/clinicShares/dime-arealine'
import BasefaceCharts from 'components/clinicShares/base-face-charts'
import FloatfactorCharts from 'components/clinicShares/float-factor-charts'
import TechnicalCharts from 'components/clinicShares/technical-charts'

export default {
  props: ['innerCode'],
  data() {
    return {
      floatYname: '未来20日上涨概率',
      legendName1: '',
      legendName2: '',
      legendShow: true,
      showFund: true,
      showSmart: false


    }
  },
  computed: mapState({
    baseFaceData: state => state.clinicShares.baseFace,
    techFaceData: state => state.clinicShares.techFace
  }),
  components: {
    DimeKline,
    Barline,
    Pieline,
    BasefaceCharts,
    FloatfactorCharts,
    Arealine,
    TechnicalCharts
  },
  methods: {
    init() {
      this.$store.dispatch('clinicShares/queryBaseFace', {
        innerCode: this.innerCode
      })

      this.$store.dispatch('clinicShares/queryTechFace', {
        innerCode: this.innerCode
      })
    },
    initLegendName() {
      this.legendName.forEach((item) => {
        this.legends = item
        console.log(this.legends)
      })
    },
    faceCheck(type) {
      if (type === 'fund') {
        this.showFund = true
        this.showSmart = false
        this.showTechs = false
      } else if (type === 'smart') {
        this.showFund = false
        this.showSmart = true
        this.showTechs = false
      } else if (type === 'techs') {
        this.showFund = false
        this.showSmart = false
        this.showTechs = true
      }
    }
  },
  watch: {
    innerCode: function() {
      this.init()
    }
  },
  mounted() {
    console.log(this.showSmart)

    console.log(this.techFaceData)
    // this.initLegendName()

  },
  destroyed() {

  }
}
</script>
