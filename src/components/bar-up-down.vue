<style lang="scss" scoped>
.barChart {
    height: 420px;
    width: 100%;
    padding-top: 20px;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 1217px) {
    .barChart {
        width: 100%;
        height: 4.2rem;
        padding-top: 0;
        padding-bottom: 0.1rem;
    }
}
</style>
<template>
<div class="barChart">

</div>
</template>
<script>
import echarts from 'echarts'
export default {
  props: ['strategyId'],
  methods: {
    checkUnit (num) {
      num = parseFloat(num) // returns
      if (typeof (num) === 'undefined' || typeof (num) === 'string') {
        num = 0
      }
      var result = 0
      if (num) {
        if (num > 100000000 || num < (-100000000)) {
          result = (num / 100000000).toFixed(2)
          return result + '亿元'
        } else if (num > 10000 || num < (-10000)) {
          result = (num / 10000).toFixed(2)
          return result + '万元'
        } else {
          result = num.toFixed(2)
          return result + '元'
        }
      } else {
        result = '0.00元'
      }
      return result
    },
    initdrykChart () {
      this.$store.dispatch('goldStrategy/getDrykData', {
        strategyId: this.strategyId
      }).then(() => {
        const that = this
        const barData = this.$store.state.goldStrategy.drykData
        this.chart = echarts.init(document.getElementsByClassName('barChart')[0])
        this.chart.setOption({
          legend: {
            left: '1%',
            top: 0,
            itemWidth: 8,
            textStyle: {
              color: '#808ba1'
            },
            data: [{
              name: '当日盈利',
              icon: 'circle'
            },
            {
              name: '当日亏损',
              icon: 'circle'
            }
            ]
          },
          tooltip: {
            show: true,
            trigger: 'axis',
            padding: [10, 55, 10, 20],
            textStyle: {
              align: 'left',
              fontFamily: '微软雅黑'
            },
            axisPointer: {
              type: 'line'
            },
            formatter: function (params) {
              var s = params[0].name
              for (var i = 0; i < params.length; i++) {
                if (i === 0) {
                  s = s + '<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
                    params[i].color + '"></span>当日盈利: ' + that.checkUnit(params[i].value)
                }
                if (i === 1) {
                  s = s + '<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
                    params[i].color + '"></span>当日亏损: ' + that.checkUnit(params[i].value)
                }
              }
              return s
            }
          },
          xAxis: {
            type: 'category',
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
            axisTick: {
              alignWithLabel: true
            },
            data: barData.xData
          },
          yAxis: {
            axisLabel: {
              formatter: function (val) {
                var result = ''
                if (val >= 100000000 || val <= -100000000) {
                  result = val / 100000000
                  return result + '亿元'
                } else if (val >= 10000 || val <= -10000) {
                  result = val / 10000
                  return result + '万元'
                } else {
                  return val + '元'
                }
              },
              color: '#808ba1'
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'solid',
                color: '#2A2E36'
              }
            }
          },
          series: [{
            data: barData.data1,
            name: '当日盈利',
            type: 'bar'
          },
          {
            data: barData.data2,
            name: '当日亏损',
            type: 'bar'
          }
          ],
          color: ['#E73E3A', '#1EC96C'],
          grid: {
            width: '97%',
            height: '75%',
            left: 0,
            top: '15%',
            containLabel: true
          },
          dataZoom: [{
            type: 'slider',
            show: true,
            showDetail: false,
            xAxisIndex: [0],
            bottom: 0,
            left: '1.5%',
            start: 0,
            end: 100,
            textStyle: {
              // color: '#aed2ff'
            },
            // borderColor: '#d5dbe4',
            width: '94%',
            height: '5%',
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
      })
    }
  },
  mounted () {
    this.initdrykChart()
  }
}
</script>
