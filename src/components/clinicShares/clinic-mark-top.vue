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
    /*background-color: $bgDeepColor;*/
}

body {
    background-color: $bgDeepColor;
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
    width: 331px;
}
.red {
    color: $upColor;
}

.green {
    color: $downColor;
}
.lightcolor {
    color: $wordsColorBase;
}
.c_txt {
    color: $wordsColorBase;
}
.topic-name {
    font-weight: 900;
    font-size: 24px;
    color: #c9d0d7;
    text-align: center;
    /*  width: 36%;
      margin-right: 5%;
      float: left;*/
    cursor: pointer;
    /* padding: 39px 0 10px;*/
    padding: 35px 0 10px;

}
.clinic-top {
    height: 100%;
    background-color: $bgConColor;
    min-height: 100%;
    padding: 18px 0;
    margin-bottom: 6px;
}

.mark-name {
    font-size: 14px;
    text-align: center;
}
/*.help-img {
      width: 15px;
      height: 15px;
      background: url("../../assets/images/z3img/help.png") no-repeat;
      position: relative;
      cursor: pointer;
      right: 7%;
      top: 2px;
  }
  .help-img2 {
      width: 15px;
      height: 15px;
      background: url("../../assets/images/z3img/help.png") no-repeat;
      position: relative;
      cursor: pointer;
      right: 2%;
      top: 2px;
  }*/
.help-img {
    width: 15px;
    height: 15px;
    background: url("../../assets/images/z3img/help.png") no-repeat;
    position: relative;
    left: -11%;
    top: 2px;
    cursor: pointer;
    z-index: 999999;
}
.help-img i {
    color: #1984ea;
    position: absolute;
    display: none;
    padding: 15px;
    color: #666666;
    background: #cccfd9;
    border-radius: 10px;
    z-index: 999;
    top: -8px;
    left: 34px;
    width: 300px;
    z-index: 999999;
}
.help-img:hover i {
    display: block;
}
.help-img2 {
    width: 15px;
    height: 15px;
    background: url("../../assets/images/z3img/help.png") no-repeat;
    position: relative;
    right: 2%;
    top: -17px;
    cursor: pointer;
    z-index: 999999;
}
.help-img2 i {
    color: #1984ea;
    position: absolute;
    display: none;
    padding: 15px;
    color: #666666;
    background: #cccfd9;
    border-radius: 10px;
    z-index: 999;
    top: -8px;
    right: 34px;
    width: 300px;
    z-index: 999999;
}
.help-img2:hover i {
    display: block;
}
.mark-num {
    font-size: 34px;
    text-align: center;
    padding: 32px 0 36px;

}
.mark-detail {
    text-align: center;
    font-size: 14px;
}
.mark-date {
    font-size: 14px;
    padding-left: 7px;
}
.clinic-top-center {
    border-right: 1px solid $lineAndTitleColor;
    width: 331px;
}
.radar-box {
    height: 180px;
    /* position: relative;
      left: 15%;*/
}
.radarChart {
    height: 100%;
    width: 100%;
    /*display: inline-block;
      position: relative;*/
}
.clinic-top-right {
    padding-left: 37px;
    width: 537px;
}
.short-title {
    padding-bottom: 5px;
    font-size: 14px;
}
.short-detail {
    padding-right: 20px;
    color: #a6a6a6;
    font-size: 14px;
}
.short-tit {
    font-size: 14px;
    font-weight: 900;
}
.center-title {
    font-size: 14px;
    padding: 15px 0 5px;
    font-weight: 900;
}
.value-box {
    padding: 10px 10px 0;
    background-color: $bgConColor;
}
.short-line-value {
    /* padding-bottom: 20px; */
    border-bottom: 1px solid $lineAndTitleColor;
}
.desc {
    padding: 7px 10px 7px 5px;
    border-radius: 3px;
    margin-left: 11px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    margin-bottom: 10px;
}
.desc i {
    display: none;

}
.desc:hover {
    color: #ff2e29;
    border: 1px solid #ff2e29;
}
.desc:hover i {
    display: block;
    position: absolute;
    padding: 6px;
    color: $grayWordsColor;
    background: #f1f2f7;
    /*border-radius: 10px;*/
    z-index: 999;
    /*line-height: 22px;*/

    /*right: 0;*/
    top: 82%;
    border: 1px solid $lineAndTitleColor;
    display: inline-block;
    text-align: left;
    /*  left: 150px; */
    /* min-width: 80px;
      max-width: 100px; */
    /* left: 50px; */
    left: -2px;
    min-width: 180px;
    max-width: 400px;
}
.desc-red {
    border: 1px solid $upColor;
}
.desc-red:hover {
    color: #ff2e29;
    border: 1px solid #ff2e29;
}
.desc-green {
    border: 1px solid $downColor;

}
.desc-green:hover {
    color: #06e607;
    border: 1px solid #06e607;
}
.desc-lightcolor {
    border: 1px solid #525a65;

}
.desc-lightcolor:hover {
    color: #fff;
    border: 1px solid #fff;
}
.messdesc-box {
    /* display: inline;
    position: relative;
    cursor: pointer; */
}
.messdesc-box i {
    display: none;

}
.messdesc-box:hover i {

    min-width: 80px;
    max-width: 100px;
}
.indu-desc:hover i {

    min-width: 80px;
    max-width: 100px;
}
.tech-desc:hover i {

    min-width: 200px;
    max-width: 400px;
}
.mess-desc {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 15%;
}
.short-fund {
    font-size: 14px;
    /*  margin-bottom: 10px; */
    /* display: inline-block;*/
}
.face-left-title {
    font-size: 14px;
    width: 5%;
    line-height: 35px;
}
.face-right-txt {
    width: 90%;
}
.fund-mess {
    margin-bottom: 6px;
}
.pl-5 {
    padding-left: 5px;
}
.mid-line-value {
    padding: 5px 0 0;
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
.short-line-value a {
    /*  display: block; */
}
.no-value {
    padding-left: 10px;
    line-height: 35px;
    font-size: 14px;

}
.label-tit {
    width: 60px;
    float: left;
    line-height: 32px;
    font-size: 14px;
}
.circleBox {
    position: relative;
    width: 133px;
    height: 78px;
    margin: 34px auto 30px;
}
.top {
    top: -1px;
    clip: rect(0,auto,70px,auto);
    width: 99pt;
    height: 99pt;
    background: #434345;
    transition: 1s ease-out;
    transform: rotate(0);
}
.mask,
.top {
    position: absolute;
    overflow: hidden;
    border-radius: 50%;
}
.mask {
    top: 4px;
    left: 4px;
    clip: rect(0,auto,62px,auto);
    width: 124px;
    height: 124px;
    background: #141519;
}
.circle {
    position: absolute;
    top: 0;
    left: 0;
    clip: rect(0,auto,65px,auto);
    width: 99pt;
    height: 99pt;
    border-radius: 50%;
    background: #cc4941;
    z-index: 0;
}
#num {
    position: relative;
    z-index: 99;
    margin-top: 13px;
    color: #cc4941;
    text-align: center;
    font-size: 48px;
}
.numL,
.numR {
    position: absolute;
    font-size: 14px;
    color: #c9d0d7;
    bottom: -7px;
}
.numL {
    left: -3px;
}
.numR {
    right: -3px;
}
</style>
<template>
<div class="clinic-top-wrap">
  <div class="clinic-top display-box">
    <div class="clinic-top-left box-flex-1">
      <div class="mark-name">{{smartStock.name || '--'}}[{{smartStock.symbol || '--'}}]综合评分
        <div class="help-img fr"><i>{{this.iconHelpMsg}}</i></div>
      </div>
      <!-- <div class="mark-num red">{{changeTofixed1(smartStock.score)}}</div> -->
      <div class="circleBox">
        <div class="numR">10</div>
        <div class="numL">0</div>
        <div class="circle">
          <div id="top-score" class="top" :style="{transform:'rotate('+((smartStock.score / 10) * 180)+'deg)'}"></div>
          <div id="num">{{changeTofixed1(smartStock.score)}}</div>
          <div class="mask"></div>
        </div>
      </div>
      <div class="mark-detail">打败了{{checkRecommend(smartStock.wineRate) || '--'}}的股票<span class="mark-date">{{changeDate(smartStock.tradeDate) || '--'}}</span></div>
    </div>
    <div class="clinic-top-center box-flex-1">
      <div class="radar-box">
        <div class="radarChart" ref="radarChart"></div>
      </div>
    </div>
    <div class="clinic-top-right box-flex-1">
      <div class="short-title">
        <div class="short-tit">短线评述</div>
        <div class="help-img2 fr"><i>{{this.iconHelpMsg2}}</i></div>
      </div>
      <div class="short-detail">{{smartStock.shortDescribe}}</div>
      <div class="center-title">中线评述</div>
      <div class="short-detail">{{smartStock.midDescribe}}</div>
    </div>
  </div>

  <div class="value-box clearfix">
    <div class="short-line-value clearfix">
      <div class="short-title">短线分析</div>
      <div class="short-fund clearfix" v-if="smartStock.shortCapital && smartStock.shortCapital.length>0">
        <div class="face-left-title fl">资金面：</div>
        <div class="face-right-txt fl">
          <a href="#wrap" class="desc pl-5" v-for="short of smartStock.shortCapital" :class="checkStatus(short.status)" v-if="short.title!==null" @click="fundShow($event,'capital')">{{short.title}}<i>{{short.tag==null?'--':short.tag}}</i></a>

        </div>
      </div>
      <div class="short-fund clearfix" v-else>
        <div class="face-left-title fl">资金面：</div>
        <div class="no-value fl">无</div>
      </div>
      <div class="short-fund clearfix" v-if="smartStock.shortTechs && smartStock.shortTechs.length>0">
        <div class="face-left-title fl">技术面：</div>
        <div class="face-right-txt fl">
          <a href="#wrap" class="desc pl-5 tech-desc" v-for="short of smartStock.shortTechs" :class="checkStatus(short.status)" v-if="short.title!==null" @click="fundShow($event,'techs')">{{short.title}}<i>{{short.tag==null?'--':short.tag}}</i></a>

        </div>
      </div>
      <div class="short-fund clearfix" v-else>
        <div class="face-left-title fl">技术面：</div>
        <div class="no-value fl">无</div>
      </div>
      <div class="short-fund clearfix" v-if="smartStock.shortMessages && smartStock.shortMessages.length>0">
        <div class="face-left-title fl">消息面：</div>
        <div class="face-right-txt fl">
          <a href="#wrap" class="desc pl-5 messdesc-box" v-for="short of smartStock.shortMessages" :class="checkStatus(short.status)" v-if="short.title!==null" @click="fundShow($event,'newsinfo')">{{short.title.length<=20?short.title:short.title.substring(0,21)+'…'}}<i>{{short.tag==null?'--':short.tag}}</i></a>

        </div>
      </div>
      <div class="short-fund clearfix" v-else>
        <div class="face-left-title fl">消息面：</div>
        <div class="no-value fl">无</div>
      </div>
    </div>
    <div class="mid-line-value clearfix">
      <div class="short-title">中线分析</div>
      <div class="short-fund clearfix" v-if="smartStock.midCapital && smartStock.midCapital.length>0">
        <div class="face-left-title fl">资金面：</div>
        <div class="face-right-txt fl">
          <a href="#wrap" class="desc pl-5" v-for="short of smartStock.midCapital" :class="checkStatus(short.status)" v-if="short.title!==null" @click="fundShow($event,'capital')">{{short.title}}<i>{{short.tag==null?'--':short.tag}}</i></a>

        </div>
      </div>
      <div class="short-fund clearfix" v-else>
        <div class="face-left-title fl">资金面：</div>
        <div class="no-value fl">无</div>
      </div>
      <div class="short-fund clearfix" v-if="smartStock.bases && smartStock.bases.length>0">
        <div class="face-left-title fl">基本面：</div>
        <div class="face-right-txt fl">
          <a href="#wrap" class="desc pl-5" v-for="short of smartStock.bases" :class="checkStatus(short.status)" v-if="short.title!==null" @click="fundShow($event,'base')">{{short.title}}<i>{{short.tag==null?'--':short.tag}}</i></a>

        </div>
      </div>
      <div class="short-fund clearfix" v-else>
        <div class="face-left-title fl">基本面：</div>
        <div class="no-value fl">无</div>
      </div>
      <div class="short-fund clearfix" v-if="smartStock.midTechs && smartStock.midTechs.length>0">
        <div class="face-left-title fl">技术面：</div>
        <div class="face-right-txt fl">
          <a href="#wrap" class="desc pl-5 tech-desc" v-for="short of smartStock.midTechs" :class="checkStatus(short.status)" v-if="short.title!==null" @click="fundShow($event,'techs')">{{short.title}}<i>{{short.tag==null?'--':short.tag}}</i></a>

        </div>
      </div>
      <div class="short-fund clearfix" v-else>
        <div class="face-left-title fl">技术面：</div>
        <div class="no-value fl">无</div>
      </div>
      <div class="short-fund clearfix" v-if="smartStock.midMessages && smartStock.midMessages.length>0">
        <div class="face-left-title fl">消息面：</div>
        <div class="face-right-txt fl">
          <a href="#wrap" class="desc pl-5 messdesc-box" v-for="short of smartStock.midMessages" :class="checkStatus(short.status)" v-if="short.title!==null" @click="fundShow($event,'newsinfo')">{{short.title.length<=20?short.title:short.title.substring(0,21)+'…'}}<i>{{short.tag==null?'--':short.tag}}</i></a>

        </div>
      </div>
      <div class="short-fund clearfix" v-else>
        <div class="face-left-title fl">消息面：</div>
        <div class="no-value fl">无</div>
      </div>
      <div class="short-fund clearfix" v-if="smartStock.indus && smartStock.indus.length>0">
        <div class="face-left-title fl">行业面：</div>
        <div class="face-right-txt fl">
          <a href="#wrap" class="desc pl-5 indu-desc" v-for="short of smartStock.indus" :class="checkStatus(short.status)" v-if="short.title!==null" @click="fundShow($event,'industry')">{{short.title}}<i>{{short.tag==null?'--':short.tag}}</i></a>

        </div>
      </div>
      <div class="short-fund clearfix" v-else>
        <div class="face-left-title fl">行业面：</div>
        <div class="no-value fl">无</div>
      </div>
    </div>
  </div>
</div>
</template>
<script type="text/javascript">
import {
  mapState
} from 'vuex'
import echarts from 'echarts'
export default {
  props: ['innerCode'],
  data() {
    return {
      iconHelpMsg: '基于资金面、基本面、技术面、消息面和行业面5维度的综合评分，越高越看好未来表现，越低说明存在未来不确定风险。',
      iconHelpMsg2: '综合资金面、基本面、技术面、消息面和行业面5维度表现，智能给出短线(3天)、中线(20天)行情解读和操盘建议。',
      labelPosition: 'top'
    }
  },
  computed: mapState({
    smartStock: state => state.clinicShares.smartStock,
    radars: state => {
      const radarDataChart = state.clinicShares.radarData
      // console.log(radarDataChart[0].fundValue)
      let radarAllData = [
        Number(radarDataChart.capitalValue).toFixed(1),
        Number(radarDataChart.induValue).toFixed(1),
        Number(radarDataChart.informValue).toFixed(1),
        Number(radarDataChart.techValue).toFixed(1),
        Number(radarDataChart.fundValue).toFixed(1)
      ]
      return {
        radarAllData: radarAllData
      }
    }
  }),
  components: {

  },
  methods: {
    initSmartStock() {
      this.$store.dispatch('clinicShares/querySmartStock', {
        innerCode: this.innerCode
      })
    },
    initradarChart() {
      this.chart = echarts.getInstanceByDom(this.$refs.radarChart) || echarts.init(this.$refs.radarChart)
      this.$store.dispatch('clinicShares/querySmartStock', {
        innerCode: this.innerCode
      }).then(() => {
        this.drawCharts(this.radars.radarAllData)
      })
    },
    /*    renderCharts() {
          this.$store.dispatch('clinicShares/queryRadarData', {
            innerCode: this.innerCode
          }).then(() => {
            this.drawCharts(this.radars.radarAllData)
          })
        }, */
    fundShow(e, type) {
      // console.log(type)
      e.preventDefault()
      this.$emit('changeShowValue', type)
    },
    drawCharts(radarAllData) {
      this.chart.setOption({
        radar: {
          indicator: [{
            text: '资金面',
            min: 0,
            max: 10
          }, {
            text: '行业面',
            min: 0,
            max: 10

          }, {
            text: '消息面',
            min: 0,
            max: 10
          }, {
            text: '技术面',
            min: 0,
            max: 10
          }, {
            text: '基本面',
            min: 0,
            max: 10
          }],
          radius: '85%',
          nameGap: 8,
          center: ['50%', '56%'],
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#444346',
              type: 'solid'
            }

          },
          splitLine: {
            lineStyle: {
              color: '#444346',
              type: 'solid'
            }
          },
          name: {
            textStyle: {
              color: '#d3d9dd',
              fontSize: '14'
            }
          }
          /* splitArea: {
               areaStyle: {

                   color: ['#C1C1C1', '#fff']
               }
           } */
        },
        series: [{
          name: '雷达图',
          type: 'radar',
          symbol: 'circle',
          itemStyle: {
            emphasis: {
              areaStyle: {
                color: '#ff2e29'
                /* ,
                                opacity: 0.5 */
              },
              label: {
                show: true,
                fontSize: 12,
                color: '#c9d0d7',
                formatter: function(params) {

                }
                /* ,
                                  position: 'top' */
              }
            },
            normal: {
              areaStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0,
                      color: '#ca4941'
                    }, {
                      offset: 1,
                      color: '#ca4941'
                    }],
                    globalCoord: false
                  }
                }
              }
            }
          },
          data: [{
            value: radarAllData,
            lineStyle: {
              normal: {
                color: '#fff',
                opacity: 0
              }
            }
          }]
        }]
      })
      window.addEventListener('resize', () => this.chart.resize(), false)
    },
    changeTofixed1(num) {
      return parseFloat(num).toFixed(1)
    },
    checkRecommend(num) {
      // return num*100>99?'':Math.round(num * 100) + '%'
      // return (num * 100).toFixed(0) + '%'
      return num * 100 >= 99 ? parseInt(num * 100) + '%' : Math.round(num * 100) + '%'
    },
    checkStatus(status) {
      if (status === 2) {
        return 'desc-red red'
      } else if (status === 1) {
        return 'desc-green green'
      } else {
        return 'desc-lightcolor lightcolor'
      }
    },
    changeDate(time) {
      if (time === undefined) {
        return '--'
      }
      if (time === 0) {
        return '--'
      } else {
        return (time + '').substring(0, 4) + '-' + (time + '').substring(4, 6) + '-' + (time + '').substring(6, (time + '').length)
      }
    }
  },
  watch: {
    innerCode: function() {
      // this.initSmartStock()
      this.initradarChart()
    }
  },
  mounted() {
    // this.initSmartStock()
    this.initradarChart()
  },
  destroyed() {

  }
}
</script>
