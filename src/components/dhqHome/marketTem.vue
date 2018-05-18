<template>
<div class="market-tem">
  <div class="market-tem-top">
    <NavBar :data="navText" :type="type" :styleObject="styleObj" :styleLiObj="styleLiObj"></NavBar>
    <div class="dptem-help-img fr" v-z3-help="iconHelpMsg" @mouseover="helpMaiDian"></div>
  </div>
  <div class="market-tem-chart" ref="chart" @mouseover="chartMaiDian"></div>
  <div class="suggestion">解读：{{suggestion}}</div>
</div>
</template>
<script>
import NavBar from 'components/dhqHome/nav-bar'
import echarts from 'echarts'
import util from '../../dhq/util'
export default {
  props: ['isResizeBottomChart'],
  data() {
    return {
      navText: [
        ['大盘温度计', 'marketTem']
      ],
      type: 'marketTem',
      suggestion: '',
      updateDataPid: null,
      intervalTime: 60 * 5,
      styleObj: {
        backgroundColor: '#525a65'
      },
      styleLiObj: {
        width: '85px'
      },
      iconHelpMsg: '大盘温度计是基于趋势交易理论设计的预测算法：以上证指数为假想可操作标的，通过仓位调整，得出类似基金的净值曲线。该预测算法在历史上经过了极为严格的量化回测，可以给出0-100%等多种仓位建议，使这条净值曲线获得最佳收益。',
      userId: this.$store.state.user.userId
    }
  },
  watch: {

  },
  components: {
    NavBar
  },
  computed: {
    chartDateData: function() {
      const suggestPosition = this.$store.state.dhqIndex.marketTemData.barData
      const dateArr = []
      suggestPosition.dataList.forEach((position) => {
        dateArr.push(this.dateFormatUtil(position.date))
      })
      return dateArr
    },
    chartBarData: function() {
      const suggestPosition = this.$store.state.dhqIndex.marketTemData.barData
      const dataArr = []
      suggestPosition.dataList.forEach((position) => {
        dataArr.push(position.value)
      })
      return dataArr
    },
    chartLineData: function() {
      const reference = this.$store.state.dhqIndex.marketTemData.lineData
      const dataArr = []
      reference.dataList.forEach((position) => {
        dataArr.push(position.value)
      })
      return dataArr
    },
    dottedBarData: function() {
      const suggestPosition = this.$store.state.dhqIndex.marketTemData.barData
      const length = suggestPosition.dataList.length
      let arr = []
      for (let i = 0; i < length; i++) {
        arr[i] = 1
      }
      return arr
    }
  },
  methods: {
    init: function() {
      const _this = this
      this.$store.dispatch('dhqIndex/getMarketTemData').then(() => {
        this.suggestion = this.$store.state.dhqIndex.marketTemData.barData.suggestion
        this.chart.setOption({
          tooltip: {
            trigger: 'axis',
            textStyle: {
              align: 'left',
              fontFamily: 'Microsoft YaHei',
              fontSize: 12,
              color: '#c9d0d7'
            },
            formatter: function(params) {
              let s = params[0].name;
              let value;
              for (let i = 0; i < params.length; i++) {
                if (i === 0) {
                  value = params[i].value * 100 + '%'
                } else if (i === 2) {
                  value = parseFloat(params[i].value).toFixed(2)
                }
                if (i !== 1) {
                  s = s + '<br/><span style="display:inline-block;margin-right:5px;border-radius:4px;width:7px;height:7px;background-color:' + params[i].color + '"></span>' + params[i].seriesName + ': ' + value;
                }
              }
              return s;
            }
          },
          grid: {
            left: 10,
            top: 30,
            width: '99%',
            height: '70%'
            //   containLabel: true
          },
          xAxis: [{
            type: 'category',
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: function(params) {
                  return '#707b8f'
                }
              }
            },
            data: this.chartDateData
          }],
          yAxis: [{
              type: 'value',
              boundaryGap: [0, '100%'],
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              min: 0,
              max: 1
            },
            {
              show: false,
              type: 'value',
              boundaryGap: [0, '100%'],
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              position: 'right',
              min: function(params) {
                return params.min - (params.max - params.min) * 0.1
              },
              max: function(params) {
                return params.max + (params.max - params.min) * 0.1
              }
            }
          ],
          color: ['#525a65', '#1984ea'],
          animation: false,
          series: [{
              name: '仓位',
              type: 'bar',
              showSymbol: false,
              barWidth: '50%',
              barGap: '-100%',
              itemStyle: {
                normal: {
                  borderWidth: 2,
                  borderColor: '#525a65'
                }
              },
              data: this.chartBarData
            },
            {
              name: '仓位',
              type: 'bar',
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  color: '#707b8f',
                  formatter: function(params) {
                    return (_this.chartBarData[params.dataIndex]) * 100 + '%'
                  }
                }
              },
              showSymbol: false,
              barWidth: '50%',
              itemStyle: {
                normal: {
                  color: 'transparent',
                  borderWidth: 1,
                  borderColor: '#525a65',
                  borderType: 'dashed'
                }
              },
              data: this.dottedBarData
            },
            {
              name: '指数',
              type: 'line',
              symbolSize: 3,
              yAxisIndex: 1,
              itemStyle: {
                color: '#1984ea',
                normal: {
                  label: {
                    show: true,
                    position: 'top',
                    color: '#c9d0d7',
                    formatter: function(params) {
                      return params.value
                    }
                  }
                }
              },
              data: _this.chartLineData
            }
          ]
        })
      })
      window.onresize = function() {
        const timestampResize = new Date().getTime()
        _this.$emit('isResize', timestampResize)
        _this.chart.resize({
          height: (window.innerHeight * 0.33) * 0.75 < 710 * 0.33 * 0.75 ? 710 * 0.33 * 0.75 : (window.innerHeight * 0.33) * 0.75
        })
      }
    },
    autoUpdate: function() {
      if (this.updateDataPid) {
        clearInterval(this.updateDataPid)
      } else {
        this.updateDataPid = setInterval(() => {
          this.init()
        }, 1000 * this.intervalTime)
      }
    },
    dateFormatUtil: function(date) {
      let m;
      let d;
      if (date.substring(4, 5) === 0) {
        m = date.substring(5, 6)
      } else {
        m = date.substring(4, 6)
      }
      if (date.substring(6, 7) === 0) {
        d = date.substring(7)
      } else {
        d = date.substring(6)
      }
      return m + '/' + d
    },
    chartMaiDian: function() {
      util.dcsMultiTrack('DCS.dcsuri', this.$route.fullPath + '?point=click_sywdj_ck&userId=' + this.userId, 'WT.ti', document.title) // 滑动至图表区域打点
    },
    helpMaiDian: function() {
      util.dcsMultiTrack('DCS.dcsuri', this.$route.fullPath + '?point=click_sywdj_ask&userId=' + this.userId, 'WT.ti', document.title) // 滑动至图表区域打点
    }
  },
  mounted() {
    this.chart = echarts.getInstanceByDom(this.$refs.chart) || echarts.init(this.$refs.chart)
    this.init()
    this.autoUpdate()
  },
  destroyed() {
    this.updateDataPid && clearInterval(this.updateDataPid)
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/style.scss";
.market-tem {
    width: 100%;
}
.market-tem-top {
    height: 15%;
    position: relative;
}
.market-tem-chart {
    width: 100%;
    height: 75%;
}
.suggestion {
    height: 10%;
    color: #707b8f;
    padding-left: 25px;
}
.dptem-help-img {
    width: 15px;
    height: 15px;
    background: url("../../assets/images/z3img/help.png") no-repeat;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}
</style>