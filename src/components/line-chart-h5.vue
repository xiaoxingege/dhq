<style lang="scss" scoped>
.lineChart {
    width: 100%;
    height: 420px;
    padding-top: 20px;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 1217px) {
    .lineChart {
        width: 100%;
        height: 4.2rem;
        padding-top: 0;
        padding-bottom: 0.1rem;
    }
}
</style>
<template>
<div class="lineChart" ref="lineChart"></div>
</template>
<script>
import echarts from 'echarts'
import {
  mapState
} from 'vuex'

export default {
  props: ['options', 'strategyId'],
  data() {
    return {}
  },
  watch: {},
  computed: mapState({
    lineData: state => state.goldStrategy.syqxtData
  }),
  methods: {
    initChart() {
      this.$store.dispatch('goldStrategy/getSyqxtData', {
        strategyId: this.strategyId
      }).then(() => {
        const lineData = this.$store.state.goldStrategy.syqxtData
        this.chart = echarts.init(document.getElementsByClassName('lineChart')[0], {
          width: window.screen.width / 100 + 'rem',
          height: 2.1 + 'rem'
        })

        this.chart.setOption({
          legend: {
            right: '1%',
            top: 0,
            itemWidth: 8,
            orient: 'vertical',
            textStyle: {
              color: '#808ba1'
            },
            data: [{
              name: '策略收益率',
              icon: 'circle'
            }, {
              name: '沪深300',
              icon: 'circle'
            }]
          },
          tooltip: {
            show: true,
            trigger: 'axis',
            // padding: [10, 55, 10, 20],
            textStyle: {
              align: 'left',
              fontFamily: '微软雅黑'
            },
            axisPointer: {
              type: 'line'
            },
            formatter: function(params) {
              var s = params[0].name
              for (var i = 0; i < params.length; i++) {
                if (i === 0) {
                  s = s + '<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
                    params[i].color + '"></span>策略累计收益率: ' +
                    (params[i].value * 100).toFixed(2) + '%'
                }
                if (i === 1) {
                  s = s + '<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
                    params[i].color + '"></span>基准累计收益率: ' +
                    (params[i].value * 100).toFixed(2) + '%'
                }
              }
              return s
            }
          },
          xAxis: {
            interval: 0,
            type: 'category',
            boundaryGap: false,
            splitLine: {
              show: true,
              lineStyle: {
                type: 'solid',
                color: '#2A2E36'
              }
            },
            axisLabel: {
              // show:false
              color: '#808ba1'
            },
            data: lineData.xData

          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: function(val) {
                return (val * 100).toFixed(2) + '%'
              },
              color: '#808ba1'
            },
            nameTextStyle: {
              fontSize: 10
            },
            position: 'left',
            min: 'dataMin',
            max: 'dataMax',
            splitLine: {
              show: true,
              lineStyle: {
                type: 'solid',
                color: '#2A2E36'
              }
            }
          },
          series: [{
              data: lineData.data1,
              name: '策略收益率',
              type: 'line',
              symbol: 'none',
              lineStyle: {
                normal: {
                  width: 1
                }
              }
            },
            {
              data: lineData.data2,
              name: '沪深300',
              type: 'line',
              symbol: 'none',
              lineStyle: {
                normal: {
                  width: 1
                }
              }
            }
          ],
          color: ['#E73E3A', '#0C86ED', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)',
            'rgba(0,0,0,0)', 'rgba(0,0,0,0)'
          ],
          grid: {
            width: '97%',
            height: '75%',
            left: 0,
            top: '15%',
            containLabel: true
          },
          dataZoom: [{
            type: 'inside',
            show: true,
            showDetail: false,
            xAxisIndex: [0],
            // bottom:-10,
            left: '2%',
            bottom: 0,
            start: 0,
            end: 100,
            textStyle: {
              // color: '#aed2ff'
            },
            // borderColor: '#d5dbe4',
            width: '95%',
            height: '8%',
            handleSize: '100%',
            dataBackground: {
              areaStyle: {
                // color: '#cad2db'
              },
              lineStyle: {
                /* opacity: 0.9,
                 color: '#a7b7cc'*/
              }
            },
            handleStyle: {
              // color: '#a7b7cc'
            }
          }]
        })
        const that = this
        window.onresize = function() {
          that.chart.resize()
        }
      })
    },
    updateChart() {

    }
  },
  mounted() {
    this.initChart()
  }
}
</script>
