<template>
<div class="margin-balance">
  <div class="margin-balance-top">
    <NavBar :data="navText" :type="type" :styleObject="styleObj" :styleLiObj="styleLiObj"></NavBar>
    <div class="mb-help-img fr" v-z3-help="iconHelpMsg"></div>
  </div>
  <div class="margin-balance-chart" ref="chart"></div>
</div>
</template>
<script>
import NavBar from 'components/dhqHome/nav-bar'
import echarts from 'echarts'
export default {
  props: ['isResizeBottomChart'],
  data() {
    return {
      navText: [
        ['两融余额', 'marginBalance']
      ],
      type: 'marginBalance',
      updateDataPid: null,
      intervalTime: 60 * 5,
      styleObj: {
        backgroundColor: '#525a65'
      },
      styleLiObj: {
        width: '85px'
      },
      iconHelpMsg: '两融余额：代表杠杆资金动向，牛市初期为先行看好指标，牛市后期为先行见顶指标；'
    }
  },
  watch: {
    isResizeBottomChart() {
      this.chart.resize({
        height: (window.innerHeight * 0.33) * 0.85 < 710 * 0.33 * 0.85 ? 710 * 0.33 * 0.85 : (window.innerHeight * 0.33) * 0.85
      })
    }
  },
  components: {
    NavBar
  },
  computed: {
    chartDateData: function() {
      const suggestPosition = this.$store.state.dhqIndex.marginBalanceData.marginBalance
      const dateArr = []
      suggestPosition.dataList.forEach((position) => {
        dateArr.push(this.dateFormatUtil(position.date))
      })
      return dateArr
    },
    /*  上证指数 */
    referenceData: function() {
      const referenceData = this.$store.state.dhqIndex.marginBalanceData.reference
      const dataArr = []
      referenceData.dataList.forEach((position) => {
        dataArr.push(position.value)
      })
      return dataArr
    },
    /* 两融余额 */
    balanceData: function() {
      const marginBalance = this.$store.state.dhqIndex.marginBalanceData.marginBalance
      const dataArr = []
      marginBalance.dataList.forEach((position) => {
        dataArr.push(position.value)
      })
      return dataArr
    }
  },
  methods: {
    init: function() {
      this.$store.dispatch('dhqIndex/getMarginBalance').then(() => {
        this.chart.setOption({
          title: {
            text: '单位：亿',
            textStyle: {
              color: '#707b8f',
              fontSize: 12,
              fontFamily: 'Microsoft YaHei',
              fontWeight: 400
            },
            left: 50,
            top: 5
          },
          legend: {
            data: [{
                name: '两融余额',
                icon: 'rect'
              },
              {
                name: '上证指数',
                icon: 'rect'
              }
            ],
            itemWidth: 20,
            itemHeight: 1,
            right: '0%',
            top: 0,
            textStyle: {
              color: '#707b8f',
              fontFamily: 'Microsoft YaHei',
              fontSize: 12
            }
          },
          tooltip: {
            trigger: 'axis',
            textStyle: {
              align: 'left',
              fontFamily: '微软雅黑',
              fontSize: 12,
              color: '#c9d0d7'
            },
            formatter: function(params) {
              let s = params[0].name;
              let value;
              for (let i = 0; i < params.length; i++) {
                if (i === 0) {
                  value = parseFloat(params[i].value).toFixed(2) + '亿'
                  s = s + '<br/>' + params[i].seriesName + ': <span style="color: ' + params[i].textColor + '">' + value + '</span>';
                }
              }
              return s;
            }
          },
          grid: {
            left: 10,
            top: 30,
            width: '95%',
            height: '80%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
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
              },
              interval: 150
            },
            // splitNumber:2,
            data: this.chartDateData
          }],
          yAxis: [{
              type: 'value',
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
                },
                formatter: function(value) {
                  return value.toFixed(2)
                }
              },
              min: 'dataMin',
              max: 'dataMax'
            },
            {
              type: 'value',
              position: 'right',
              offset: 2,
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
                },
                formatter: function(value) {
                  return value.toFixed(2)
                }
              },
              max: function(value) {
                return value.max + (value.max - value.min) / 8
              },
              min: function(value) {
                return value.min - (value.max - value.min) / 8
              }
            }
          ],
          dataZoom: [{
            type: 'inside'
          }],
          color: ['#1984ea', '#fc2721'],
          animation: false,
          series: [{
            name: '两融余额',
            type: 'line',
            showSymbol: false,
            data: this.balanceData
          }, {
            name: '上证指数',
            type: 'line',
            showSymbol: false,
            yAxisIndex: 1,
            data: this.referenceData
          }]
        })
      })
    },
    dateFormatUtil: function(date) {
      const y = date.substring(0, 4)
      const m = date.substring(4, 6)
      const d = date.substring(6)
      return y + '/' + m + '/' + d
    }
  },
  mounted() {
    this.chart = echarts.getInstanceByDom(this.$refs.chart) || echarts.init(this.$refs.chart)
    this.init()
  },
  destroyed() {
    this.updateDataPid && clearInterval(this.updateDataPid)
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/style.scss";
.margin-balance {
    width: 100%;
}
.margin-balance-top {
    height: 15%;
    position: relative;
}
.margin-balance-chart {
    width: 100%;
    height: 85%;
}
.mb-help-img {
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