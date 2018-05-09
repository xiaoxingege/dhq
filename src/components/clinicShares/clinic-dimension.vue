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
      font-size: $fontSizeBase;
      color: $wordsColorBase;
      font-family: "Microsoft YaHei";
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
      font-size: 14px;
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
      /*  background-color: $bgConColor; */
      margin-top: 4px;
  }
  .dime-tab {
      overflow: hidden;
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
      font-size: 14px;
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
      width: 50%;
      background: $bgConColor;
      margin-bottom:6px;
      float: left;
  }
  .chart-barline {
      width: 100%;
      background: $bgConColor;
      margin: 0 0px 6px 0;
      float: left;
  }
  .chart-grop {
      width: 49.5%;
      background: $bgConColor;
      margin-bottom:6px;
      float: right;
  }
  .chart2-kline {
      width: 49.5%;
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
      width: 49.5%;
      display: inline-block;
      background: $bgConColor;
      margin: 0 5px 6px 0;
  }
  /* nth-of-type */
  .tech-charts1:nth-child(3) {
      margin-bottom: 0;
  }
  .tech-charts1:nth-child(4) {
      margin-bottom: 0;
  }
  .mb-0 {
      margin-bottom: 0;
  }
</style>
<template>
<div class="clinic-dime-wrap" id="wrap">
  <div class="dime-tab">
    <ul class="tab-ul fl">
      <li class="fl" @click="faceCheck('capital')" :class="curPage === 'capital'?'active':''">资金面</li>
      <li class="fl" @click="faceCheck('base')" :class="curPage === 'base'?'active':''">基本面</li>
      <li class="fl" @click="faceCheck('techs')" :class="curPage === 'techs'?'active':''">技术面</li>
      <li class="fl" @click="faceCheck('newsinfo')" :class="curPage === 'newsinfo'?'active':''">消息面</li>
      <li class="fl" @click="faceCheck('industry')" :class="curPage === 'industry'?'active':''">行业面</li>
    </ul>
  </div>
  <div class="dime-charts" v-if="curPage === 'capital'">
    <div class="chart-box1 ">
      <div class="chart-kline box-flex-1" v-for='(item,index) of indexFaceData' v-if='index===0'>
        <DimeKline :innerCode='code' :indexFace='item' :dataIndex='index' />
      </div>
      <div class="chart-grop box-flex-1" v-for='(item,index) of indexFaceData' v-if='index===1'>
        <Arealine :innerCode='code' :indexFace='item' :dataIndex='index' />
      </div>
    </div>
    <div class="chart-box2">
      <div class="chart-kline box-flex-1 mb-0" v-for='(item,index) of indexFaceData' v-if='index===2'>
        <Barline :innerCode='code' :indexFace='item' :dataIndex='index' />
      </div>
      <div class="chart-grop box-flex-1 mb-0">
        <Pieline :innerCode='code' />
      </div>
    </div>
  </div>
  <div class="charts-base" v-if="curPage === 'base'">
    <div class="box-flex-1 chart2-kline" v-for='(item,index) of baseFaceData' v-if='index<2'>
      <BasefaceCharts :baseFace='item' :dataIndex='index' :innerCode='code' />
    </div>
    <div class="box-flex-1 chart2-kline mb-0" v-for='(item,index) of baseFaceData' v-if='index>=2'>
      <FloatfactorCharts :baseFace='item' :dataIndex='index' :floatYname='floatYname' :legendName1='legendName1' :legendName2='legendName2' :legendShow='legendShow' :innerCode='code' />
    </div>
  </div>
  <div class="charts-base display-box" v-if="curPage === 'techs'">
    <div class="tech-charts1 box-flex-1" v-for='(item,index) of techFaceData'>
      <TechnicalCharts :techFace='item' :dataIndex='3' :legendShow='!legendShow' :innerCode='code' />
    </div>
  </div>
  <div class="dime-charts" v-if="curPage === 'industry'">
    <div class="chart-box1 ">
      <div class="chart-kline box-flex-1" v-for='(item,index) of industryFaceData' v-if='index===0'>
        <IndustryStklevelBarchart :innerCode='code' :industryFace='item' dataIndex='index' :legendName1='legendName1' :legendName2='legendName2' :legendShow='!legendShow' />
      </div>
      <div class="chart-kline box-flex-1" v-for='(item,index) of industryFaceData' v-if='index===1'>
        <IndustryLinechart :innerCode='code' :industryFace='item' dataIndex='index' :legendName1='legendNameInfo' :legendName2='legendNameTech' :legendShow='!legendShow' />
      </div>
    </div>
    <div class="chart-box2">
      <div class="chart-barline box-flex-1 mb-0" v-for='(item,index) of industryFaceData' v-if='index===2'>
        <IndustryvoBarchart :innerCode='code' :industryFace='item' dataIndex='index' :legendName1='legendNameIndu' :legendName2='legendName2' :legendShow='legendShow' :floatYname='industryYname' />
      </div>
    </div>

  </div>
  <div class="" v-if="curPage === 'newsinfo'">
    <newsInfo :innerCode='code' :newsInfo='newsInfo'></newsInfo>
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
import IndustryStklevelBarchart from 'components/clinicShares/industry-stklevel-barchart'
import IndustryLinechart from 'components/clinicShares/industry-linechart'
import IndustryvoBarchart from 'components/clinicShares/industry-vobarchart'
import newsInfo from 'components/clinicShares/news-info'

export default {
  props: ['innerCode', 'isShow'],
  data() {
    return {
      floatYname: '未来20日上涨概率',
      industryYname: '分值（满分10分）',
      legendName1: '行业均值',
      legendName2: '个股水平',
      legendNameInfo: '行业指数',
      legendNameTech: '舆情指数',
      legendNameIndu: '评分',
      legendShow: false,
      curPage: 'capital', // 'capital'|'base'|'techs'|'newsinfo'|'industry'
      code: ''
    }
  },
  computed: mapState({
    indexFaceData: state => state.clinicShares.indexFace,
    baseFaceData: state => state.clinicShares.baseFace,
    techFaceData: state => state.clinicShares.techFace,
    industryFaceData: state => state.clinicShares.industryFace,
    newsInfo: state => state.clinicShares.newsInfo
  }),
  components: {
    DimeKline,
    Barline,
    Pieline,
    BasefaceCharts,
    FloatfactorCharts,
    Arealine,
    TechnicalCharts,
    IndustryStklevelBarchart,
    IndustryLinechart,
    IndustryvoBarchart,
    newsInfo
  },
  methods: {
    /* init() {

    }, */
    initCapitalFace() {
      this.$store.dispatch('clinicShares/queryIndexFace', {
        innerCode: this.code
      })

    },
    initBaseFace() {
      this.$store.dispatch('clinicShares/queryBaseFace', {
        innerCode: this.code
      })
    },
    initTechFace() {
      this.$store.dispatch('clinicShares/queryTechFace', {
        innerCode: this.code
      })
    },
    initIndustryFace() {
      this.$store.dispatch('clinicShares/queryIndustryFace', {
        innerCode: this.code
      })
    },
    initNewsInfo() {
      this.$store.dispatch('clinicShares/queryNewsInfo', {
        innerCode: this.code
      })
    },
    initLegendName() {
      this.legendName.forEach((item) => {
        this.legends = item
        // console.log(this.legends)
      })
    },

    faceCheck(type) {
      this.curPage = type
      this.isShow = this.curPage
      this.typeOfJudgment(this.curPage)
    },
    typeOfJudgment(type) {
      this.curPage = type
      if (type === 'capital') {
        this.initCapitalFace()
      } else if (type === 'base') {
        this.initBaseFace()
      } else if (type === 'techs') {
        this.initTechFace()
      } else if (type === 'industry') {
        this.initIndustryFace()
      } else if (type === 'newsinfo') {
        this.initNewsInfo()
      }

    }
  },
  watch: {
    innerCode: function() {
      this.code = this.innerCode
    },
    isShow() {
      console.log(this.isShow)
      this.typeOfJudgment(this.isShow)
    }
  },
  mounted() {

  },
  destroyed() {

  }
}
</script>
