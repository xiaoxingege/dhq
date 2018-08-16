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
    /*   width: 100%; */
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
    /* width: 48px; */
    height: 24px;
    line-height: 24px;
    background: #ffd31a;
    color: $menuSelColor;
    /*  text-align: center; */
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-top-right-radius: 3px;
    font-style: italic;
    padding: 0 12px 0 8px;
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
.chartbox {
    height: 166px;
    width: 80%;
}
.line-charts {
    height: 100%;
    width: 80%;
    /*  height: 266px; */
}
.blue {
    color: $blueWordsColor;
    cursor: pointer;
}
.tonative {
    cursor: pointer;
}
.leading-chg {
    padding-left: 7px;
}
.leading-box {
    margin-right: 32px;
}
.leading-title {
    display: inline-block;
    width: 71%;
}
</style>
<template>
<div class="hot-block-wrap">
  <div class="name-box">
    <em class="block-num">No.{{index+1}}</em><span class="block-name">{{blockData.name ||'--'}}</span><span class="block-chg" v-z3-updowncolor="blockData.changeRatio">{{checkChngPct(blockData.changeRatio) ||'--'}}</span>
  </div>
  <div class="leading-stock leading-title">
    <span>相关事件：</span>
    <span v-for="(item,index) of blockData.event"><router-link :to="{name: 'dhqNews',query:{sourceUrl:item.url}}" target="_blank" class="blue">{{item.title ||'--'}}</router-link></span>
  </div>
  <div class="leading-stock clearfix">
    <span class="fl">龙头股：</span>
    <div class="fl leading-box" v-for="(item,index) of blockData.leadingStock">
      <span @click='toNative({stockCode:concats(item.stkcode)})' class="blue">{{item.stkname ||'--'}}</span><span v-z3-updowncolor="blockData.changeRatio" class="leading-chg">{{checkChngPct(item.changeRatio) ||'--'}}</span>
    </div>
  </div>
  <div class="recent-day">近20日走势</div>
  <div class="chartbox">
    <div class="line-charts" ref="lineCharts"></div>
  </div>

</div>
</template>
<script>
// import config from '../../dhq/config'
import util from '../../dhq/util'
import native from 'utils/nativeApi'
import echarts from 'echarts'
import {
  mapState
} from 'vuex'
export default {
  props: ['blockData', 'index'],
  data() {
    return {
      type: '',
      alltimers: '',
      size: '',
      data: {
        fundDays: []
      },
      isNews: false,
      toNews: null

    }
  },

  watch: {
    blockData() {
      this.initLine()
    }
  },
  components: {

  },
  computed: mapState({}),
  methods: {
    initLine() {
      this.chart = echarts.getInstanceByDom(this.$refs.lineCharts) || echarts.init(this.$refs.lineCharts)

      if (this.blockData) {
        this.drawCharts(this.blockData.recent20DayQuote)

      }

    },
    drawCharts(recent20DayQuote) {
      const opt = {
        // tooltip: {
        //   trigger: 'axis',
        //   padding: [10, 55, 10, 20],
        //   textStyle: {
        //     align: 'left',
        //     color: '#c9d0d7'
        //   },
        //   showContent: true,
        //   axisPointer: {
        //     type: 'cross',
        //     label: {
        //       show: true,
        //       formatter: function(params) {
        //         let yLabelData = ''
        //         if (params.seriesData.length > 0) {
        //           yLabelData = params.seriesData[0].data === 0 ? params.seriesData[1].data : params.seriesData[0].data
        //           return params.seriesData[0].name
        //         } else {
        //           if (typeof yLabelData !== 'undefined') {
        //             return yLabelData
        //           } else {
        //             return ''
        //           }
        //         }
        //       },
        //       backgroundColor: '#777',
        //       // padding:[20,0,10,10],
        //       textStyle: {
        //         /* color:'#000',
        //          fontWeight:'bold'*/
        //       }
        //     },
        //     crossStyle: {
        //       color: '#666'
        //     }
        //   },
        //   formatter: function(params) {
        //     var s = ''
        //     for (var i = 0; i < params.length; i++) {
        //       if (i === 0) {
        //         s = s + '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + params[i].color + '"></span>' + params[i].name + '评分: ' + params[i].value + '</br>'
        //       }
        //       if (i === 1) {
        //         s = s + '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + params[i].color + '"></span>' + params[i].seriesName + ' : ' + params[i].value
        //       }

        //     }
        //     return s
        //   }
        // },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          splitLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: '#23272c'
            }
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false,
            color: '#c9d0d7'
          },
          axisTick: {
            show: false
          },
          data: ['2018-06-01', '2018-06-02', '2018-06-03', '2018-06-04', '2018-06-05', '2018-06-06', '2018-06-07', '2018-06-08', '2018-06-09', '2018-06-10', '2018-06-11', '2018-06-12', '2018-06-13', '2018-06-14', '2018-06-15', '2018-06-16', '2018-06-17', '2018-06-18', '2018-06-19', '2018-06-20']
        },
        yAxis: {
          // type: 'category',
          type: 'value',
          min: 'dataMin',
          max: 'dataMax',
          splitLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: '#23272c'
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false,
            alignWithLabel: false
          },
          axisLabel: {
            show: false
          }
        },
        series: [{
            data: recent20DayQuote,
            name: 'this.legendName1',
            type: 'line',
            symbol: 'none',
            itemStyle: {
              normal: {
                color: '#ffd31a'

              }
            }

          }

        ],
        grid: {
          left: 0,
          right: 10,
          top: 3,
          // width:'60%',
          // height: '81%',
          show: true,
          borderColor: '#23272c',
          borderWidth: 1
        }
      };
      this.chart.setOption(opt)
      window.addEventListener('resize', () => this.chart.resize(), false)
    },
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
    this.initLine()
    console.log(this.chartHeight)

  },
  destroyed() {}
}
</script>
