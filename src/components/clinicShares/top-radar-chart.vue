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
    /*background-color: $bgDeepColor;*/
}

body {
    background-color: $bgDeepColor;
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
</style>
<template>
<div>
  <div class="radar-box">
    <div class="radarChart" ref="radarCha"></div>
  </div>
</div>
</template>
<script type="text/javascript">
import {
  mapState
} from 'vuex'
import echarts from 'echarts'

export default ({
  data() {
    return {
      showX: true
    }
  },
  computed: {
    ...mapState({

      radars: state => {
        const radarDataChart = state.clinicShares.radarData
        console.log(radarDataChart[0].fundValue)
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
    })
  },
  methods: {
    initradarChart() {
      this.chart = echarts.getInstanceByDom(this.$refs.radarCha) || echarts.init(this.$refs.radarCha)
      this.$store.dispatch('clinicShares/querySmartStock').then(() => {
        this.drawCharts(this.radars.radarAllData)
      })
    },
    renderCharts() {
      this.$store.dispatch('clinicShares/queryRadarData')
        .then(() => {
          this.drawCharts(this.radars.radarAllData)
        })

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

    }

  },
  watch: {

  },

  mounted() {
    console.log(this.radars.radarAllData)
    this.initradarChart()

  }

})
</script>
