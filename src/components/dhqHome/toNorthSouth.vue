<template>
<div class="margin-balance">
  <div class="margin-balance-top">
    <NavBar :data="navText" :type="type" v-on:changeType="changeNavType" :styleObject="styleObjOut" :styleLiObj="styleLiObjOut"></NavBar>
    <div class="ns-help-img fr" v-z3-help="iconHelpMsg"></div>
  </div>
  <div class="chart-wrap">
    <div class="timeTab">
      <NavBar :data="navTimeText" :type="timeType" :styleLiObj="styleLiObj" :styleObject="styleObj" v-on:changeType="changeTimeNavType"></NavBar>
    </div>
    <div class="margin-balance-chart" ref="chart"></div>
  </div>
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
        ['北向资金走势', 'toNorth'],
        ['南向资金走势', 'toSouth']
      ],
      navTimeText: [
        ['近1月', '1mon'],
        ['近6月', '6mon'],
        ['近1年', '12mon'],
        ['全部', 'all']
      ],
      type: 'toNorth',
      timeType: '1mon',
      updateDataPid: null,
      intervalTime: 60 * 5,
      styleLiObjOut: {
        width: '85px'
      },
      styleLiObj: {
        width: '38px'
      },
      styleObj: {
        backgroundColor: '#2e4465',
        borderRadius: '0px'
      },
      styleObjOut: {
        backgroundColor: '#525a65'
      },
      iconHelpMsg: '南北向资金走势：代表海外资金动向，北向资金净流入越多，代表海外资金越看好a股。'
    }
  },
  watch: {
    isResizeBottomChart() {
      this.chart.resize({
        height: (window.innerHeight * 0.285) * 0.85 < 710 * 0.285 * 0.85 ? 710 * 0.285 * 0.85 : (window.innerHeight * 0.285) * 0.85
      })
    },
    type() {
      this.init()
    },
    timeType() {
      this.init()
    }
  },
  components: {
    NavBar
  },
  computed: {
    /* 北向资金走势时间轴 */
    chartNorthDateData: function() {
      const hgtData = this.$store.state.dhqIndex.toNorthData.sh.dataList
      const sgtData = this.$store.state.dhqIndex.toNorthData.sz.dataList
      const toNorthData = hgtData.length >= sgtData.length ? hgtData : sgtData
      const dateArr = []
      toNorthData.forEach((position) => {
        dateArr.push(this.dateFormatUtil(position.date))
      })
      return dateArr
    },
    /* 南向资金走势时间轴 */
    chartSouthDateData: function() {
      const hgtData = this.$store.state.dhqIndex.toSouthData.sh.dataList
      const sgtData = this.$store.state.dhqIndex.toSouthData.sz.dataList
      const toSouthData = hgtData.length >= sgtData.length ? hgtData : sgtData
      const dateArr = []
      toSouthData.forEach((position) => {
        dateArr.push(this.dateFormatUtil(position.date))
      })
      return dateArr
    },
    /*  北向资金走势 沪股通 */
    toNorthHgtData: function() {
      const toNorthData = this.$store.state.dhqIndex.toNorthData.sh.dataList
      const dataArr = []
      toNorthData.forEach((position) => {
        dataArr.push([this.dateFormatUtil(position.date), position.value])
      })
      return dataArr
    },
    /*  北向资金走势 深股通 */
    toNorthSgtData: function() {
      const toNorthData = this.$store.state.dhqIndex.toNorthData.sz.dataList
      const dataArr = []
      toNorthData.forEach((position) => {
        dataArr.push([this.dateFormatUtil(position.date), position.value])
      })
      return dataArr
    },
    /* 南向资金走势 沪股通 */
    toSouthHgtData: function() {
      const toSouthData = this.$store.state.dhqIndex.toSouthData.sh.dataList
      const dataArr = []
      toSouthData.forEach((position) => {
        dataArr.push([this.dateFormatUtil(position.date), position.value])
      })
      return dataArr
    },
    /* 南向资金走势 沪股通 */
    toSouthSgtData: function() {
      const toSouthData = this.$store.state.dhqIndex.toSouthData.sz.dataList
      const dataArr = []
      toSouthData.forEach((position) => {
        dataArr.push([this.dateFormatUtil(position.date), position.value])
      })
      return dataArr
    }
  },
  methods: {
    init: function() {
      if (this.type === 'toNorth') {
        this.$store.dispatch('dhqIndex/getToNorthData', {
          type: this.timeType
        }).then(() => {
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
                  name: '沪股通',
                  icon: 'rect'
                },
                {
                  name: '深股通',
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
                let s = params[0].axisValue;
                let value;
                for (let i = 0; i < params.length; i++) {
                  value = parseFloat(params[i].value[1]).toFixed(2) + '亿'
                  s = s + '<br/>' + params[i].seriesName + ': <span style="color: ' + params[i].textColor + '">' + value + '</span>';
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
            xAxis: {
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
                }
              },
              data: this.chartNorthDateData
            },
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
            color: ['#1984ea', '#fc2721'],
            animation: false,
            series: [{
                name: '沪股通',
                type: 'line',
                showSymbol: false,
                data: this.toNorthHgtData
              },
              {
                name: '深股通',
                type: 'line',
                showSymbol: false,
                yAxisIndex: 1,
                data: this.toNorthSgtData
              }
            ]
          })
        })
      } else if (this.type === 'toSouth') {
        this.$store.dispatch('dhqIndex/getToSouthData', {
          type: this.timeType
        }).then(() => {
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
                  name: '港股通（沪）',
                  icon: 'rect'
                },
                {
                  name: '港股通（深）',
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
                let s = params[0].axisValue;
                let value;
                for (let i = 0; i < params.length; i++) {
                  value = parseFloat(params[i].value[1]).toFixed(2) + '亿'
                  s = s + '<br/>' + params[i].seriesName + ': <span style="color: ' + params[i].textColor + '">' + value + '</span>';
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
                }
              },
              data: this.chartSouthDateData
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
            color: ['#1984ea', '#fc2721'],
            animation: false,
            series: [{
                name: '港股通（沪）',
                type: 'line',
                showSymbol: false,
                data: this.toSouthHgtData
              },
              {
                name: '港股通（深）',
                type: 'line',
                showSymbol: false,
                yAxisIndex: 1,
                data: this.toSouthSgtData
              }
            ]
          })
        })
      }
    },
    changeNavType(msg) {
      this.type = msg
    },
    changeTimeNavType: function(msg) {
      this.timeType = msg
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
.chart-wrap {
    width: 100%;
    height: 85%;
    position: relative;
}
.margin-balance-chart {
    height: 100%;
}
.timeTab {
    position: absolute;
    top: 5px;
    left: 112px;
    height: 24px;
    z-index: 1;
}
.timeTab > div {
    padding-left: 0;
}
.timeTab li {
    width: 41px;
}
.ns-help-img {
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