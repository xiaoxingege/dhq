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
    width: 27%;
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
}
.mark-date {
    padding-left: 7px;
}
.clinic-top-center {
    border-right: 1px solid $lineAndTitleColor;
    width: 33%;
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
    padding-left: 70px;
    width: 37%;
}
.short-title {
    padding-bottom: 12px;
    font-size: 14px;
}
.short-detail {}
.short-tit {
    font-size: 14px;
}
.center-title {
    font-size: 14px;
    padding: 47px 0 12px;
}
.value-box {
    padding: 10px;
    background-color: $bgConColor;
}
.short-line-value {
    padding-bottom: 20px;
    border-bottom: 1px solid $lineAndTitleColor;
}
.desc {
    padding: 7px 10px 7px 5px;
    border-radius: 3px;
    margin-left: 11px;
    position: relative;
    cursor: pointer;
    display: inline-block;
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
    left: 50px;
    /*right: 0;*/
    top: 82%;
    border: 1px solid $lineAndTitleColor;
    display: inline-block;
    min-width: 250px;
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
.short-title {
    padding-bottom: 21px;
}
.short-fund {
    margin-bottom: 10px;
    /* display: inline-block;*/
}
.pl-5 {
    padding-left: 5px;
}
.mid-line-value {
    padding: 10px 0;
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
}
</style>
<template>
<div class="clinic-top-wrap">
  <div class="clinic-top display-box">
    <div class="clinic-top-left box-flex-1">
      <div class="mark-name">{{smartStock.name}}[{{smartStock.innerCode}}]综合评分
        <div class="help-img fr"><i>{{this.iconHelpMsg}}</i></div>
      </div>
      <div class="mark-num red">{{changeTofixed1(smartStock.score)}}</div>
      <div class="mark-detail">打败了{{checkRecommend(smartStock.wineRate)}}的股票<span class="mark-date">{{changeDate(smartStock.tradeDate)}}</span></div>
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
  <div class="value-box">
    <div class="short-line-value">
      <div class="short-title">短线价值</div>
      <!-- <a href="#wrap"> -->
      <div class="short-fund" v-if="smartStock.shortCapital && smartStock.shortCapital.length>0">资金面：
        <a href="#wrap" class="desc pl-5" v-for="short of smartStock.shortCapital" v-if="short.status!==0" :class="short.status===-1?'desc-green green':'desc-red red'" @click="fundShow($event)">{{short.content}}<i>{{short.tag}}</i></a>
        <span v-for="short of smartStock.shortCapital" v-if="short.status===0" class="no-value">无</span>
      </div>

      <div class="short-fund" v-else>资金面：
        <span class="no-value">无</span>
      </div>
      <!-- </a> -->
      <div class="short-fund" v-if="smartStock.shortTechs && smartStock.shortTechs.length>0">技术面：
        <a href="#wrap" class="desc pl-5" v-for="short of smartStock.shortTechs" v-if="short.status!==0" :class="short.status===-1?'desc-green green':'desc-red red'">{{short.content}}<i>{{short.tag}}</i></a>
        <span v-for="short of smartStock.shortTechs" v-if="short.status===0" class="no-value">无</span>

      </div>
      <div class="short-fund" v-else>技术面：
        <span class="no-value">无</span>
      </div>

      <div class="short-fund" v-if="smartStock.shortMessages && smartStock.shortMessages.length>0">消息面：
        <a href="#wrap" class="desc pl-5" v-for="short of smartStock.shortMessages" v-if="short.status!==0" :class="short.status===-1?'desc-green green':'desc-red red'">{{short.content}}<i>{{short.tag}}</i></a>
        <span v-for="short of smartStock.shortMessages" v-if="short.status===0" class="no-value">无</span>

      </div>
      <div class="short-fund" v-else>消息面：
        <span class="no-value">无</span>
      </div>

    </div>
    <div class="mid-line-value">
      <div class="short-title">中线价值</div>
      <!-- <a href="#wrap"> -->
      <div class="short-fund" v-if="smartStock.midCapital && smartStock.midCapital.length>0">资金面：
        <a href="#wrap" class="desc pl-5" v-for="short of smartStock.midCapital" v-if="short.status!==0" :class="short.status===-1?'desc-green green':'desc-red red'">{{short.content}}<i>{{short.tag}}</i></a>
        <span v-for="short of smartStock.midCapital" v-if="short.status===0" class="no-value">无</span>
      </div>
      <div class="short-fund" v-else>资金面：
        <span class="no-value">无</span>
      </div>
      <!--  </a> -->
      <div class="short-fund" v-if="smartStock.bases && smartStock.bases.length>0">基本面：
        <a href="#wrap" class="desc pl-5" v-for="short of smartStock.bases" v-if="short.status!==0" :class="short.status===-1?'desc-green green':'desc-red red'">{{short.content}}<i>{{short.tag}}</i></a>
        <span v-for="short of smartStock.bases" v-if="short.status===0" class="no-value">无</span>
      </div>
      <div class="short-fund" v-else>基本面：
        <span class="no-value">无</span>
      </div>
      <div class="short-fund" v-if="smartStock.midTechs && smartStock.midTechs.length>0">技术面：
        <a href="#wrap" class="desc pl-5" v-for="short of smartStock.midTechs" v-if="short.status!==0" :class="short.status===-1?'desc-green green':'desc-red red'">{{short.content}}<i>{{short.tag}}</i></a>
        <span v-for="short of smartStock.midTechs" v-if="short.status===0" class="no-value">无</span>

      </div>
      <div class="short-fund" v-else>技术面：
        <span class="no-value">无</span>
      </div>

      <div class="short-fund" v-if="smartStock.midMessages && smartStock.midMessages.length>0">消息面：
        <a href="#wrap" class="desc pl-5" v-for="short of smartStock.midMessages" v-if="short.status!==0" :class="short.status===-1?'desc-green green':'desc-red red'">{{short.content}}<i>{{short.tag}}</i></a>
        <span v-for="short of smartStock.midMessages" v-if="short.status===0" class="no-value">无</span>

      </div>
      <div class="short-fund" v-else>消息面：
        <span class="no-value">无</span>
      </div>
      <div class="short-fund" v-if="smartStock.indus && smartStock.indus.length>0">行业面：
        <a href="#wrap" class="desc pl-5" v-for="short of smartStock.indus" v-if="short.status!==0" :class="short.status===-1?'desc-green green':'desc-red red'">{{short.content}}<i>{{short.tag}}</i></a>
        <span v-for="short of smartStock.indus" v-if="short.status===0" class="no-value">无</span>

      </div>
      <div class="short-fund" v-else>行业面：
        <span class="no-value">无</span>
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
      iconHelpMsg: '基于资金面、基本面、技术面、消息面和行业面5各维度的综合评分，越高越看好未来表现，越低说明存在未来不确定风险。',
      iconHelpMsg2: '综合资金面、基本面、技术面、消息面和行业面5各维度表现，智能给出短线(3天)、中线(20天)行情解读和操盘建议。'
    }
  },
  computed: mapState({
    smartStock: state => state.clinicShares.smartStock,
    radars: state => {
      const radarDataChart = state.clinicShares.radarData
      // console.log(radarDataChart[0].fundValue)
      let radarAllData = [
        Number(radarDataChart.fundValue).toFixed(0),
        Number(radarDataChart.induValue).toFixed(0),
        Number(radarDataChart.informValue).toFixed(0),
        Number(radarDataChart.techValue).toFixed(0),
        Number(radarDataChart.capitalValue).toFixed(0)
      ]
      return {
        radarAllData: radarAllData

      }
    }
    /* customerName: function() {
      return this.$store.state.customerList.customerInfo.username
    }
    customerAnaly: function() {
      return this.$store.state.customerList.customerAnaly
    }, */

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
      this.renderCharts()
    },
    renderCharts() {

      this.$store.dispatch('clinicShares/queryRadarData', {
        innerCode: this.innerCode
      }).then(() => {
        this.drawCharts(this.radars.radarAllData)

      })
      // this.chart.on('mouseover', (params) => {
      //  console.log(params)
      /* const dataZoom = this.chart.getOption().dataZoom[0];
       const startValue = params.startValue || dataZoom.startValue;
       const endValue = params.endValue || dataZoom.endValue;
       this.zoomStart = startValue;
       this.zoomEnd = endValue;
       this.zoomRange = endValue - startValue;
       console.info('start:' + startValue + ', end:' + endValue + ', range:' + this.zoomRange);*/
      //  }) 
    },
    goAnchor(selector) {

      var anchor = document.getElementById(selector)
      console.log(anchor.offsetTop)
      document.documentElement.scrollTop = anchor.offsetTop
    },
    fundShow(e) {
      // this.showTechs = true
      this.$emit("changeShowValue", 'base')
      //  this.$emit('changeSelectValue', this.bullSelected)
    },
    drawCharts(radarAllData) {
      this.chart.setOption({
        // backgroundColor:'#fff',

        tooltip: {
          trigger: 'axis'
        },
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
          radius: '70%',
          nameGap: 8,
          center: ['50%', '50%'],
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
              color: '#d3d9dd'
            }
          }
          /* splitArea: {
               areaStyle: {
                   
                   color: ['#C1C1C1', '#fff']
               }
           } */
        },
        series: [{
          type: 'radar',
          symbol: 'none',
          /* tooltip: {
              trigger: 'item'
          }, */
          /* symbol: 'circle',
          symbolSize: 5,
          radius:'', */
          data: [{
            value: radarAllData
          }],
          lineStyle: {
            normal: {
              color: '#fff',
              opacity: 0
            }
          },
          itemStyle: {
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
              },

              label: {
                normal: {
                  show: false,
                  formatter: function(params) {},
                  position: 'top'
                }
              }

            },
            emphasis: {
              areaStyle: {
                color: '#ff2e29'
              }
              /* ,
                                    lineStyle: {
                                        color:'#ff2e29'
                                       
                                    },
                                    itemStyle: {
                                        color: '#ff0',
                                        borderColor: '#000'
                                      
                                    }  */
            }
          },
          color: ['#ca4941', '#D65838']
        }]
      })

      window.addEventListener('resize', () => this.chart.resize(), false)

    },
    changeTofixed1(num) {
      return parseFloat(num).toFixed(1)
    },
    checkRecommend(num) {
      return Math.round(num * 100) + '%'
    },
    changeDate(time) {
      if (time === 0) {
        return '--'
      } else {
        return (time + '').substring(0, 4) + '-' + (time + '').substring(4, 6) + '-' + (time + '').substring(6, (time + '').length)

      }
    }
  },
  watch: {
    innerCode: function() {

      this.initSmartStock()
      this.initradarChart()
    }
    /* customerAnaly() {
      this.initradarChart()
    } */
  },
  mounted() {

    this.initSmartStock()
    this.initradarChart()
  },
  destroyed() {

  }
}
</script>
