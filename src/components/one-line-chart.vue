<style lang="scss" scoped>
.lineChart {
    height: 420px;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 1217px) {
    .lineChart {
        width: 100%;
        height: 4.2rem;
        padding-bottom: 0.1rem;
    }
}
</style>
<template>
<div class="lineChart">

</div>
</template>
<script>
import echarts from 'echarts'
export default {
  props: ['strategyId'],
  methods: {
    initMrccChart() {
      this.$store.dispatch('goldStrategy/getMrccData', {
        strategyId: this.strategyId
      }).then(() => {
        const mrccData = this.$store.state.goldStrategy.mrccData
        this.chart = echarts.init(document.getElementsByClassName('lineChart')[0])
        this.chart.setOption({
          tooltip: {
            trigger: 'axis',
            padding: [10, 55, 10, 20],
            textStyle: {
              align: 'left',
              fontFamily: '微软雅黑'
            },
            formatter: function(params) {
              var s = params[0].name
              for (var i = 0; i < params.length; i++) {
                s = s + '<br/>每日仓位: ' + Number(params[i].value * 100).toFixed(2) + '%'
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
            data: mrccData.xData
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: function(val) {
                return val * 100 + '%'
              },
              color: '#808ba1'
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'solid',
                color: '#2A2E36'
              }
            },
            position: 'left'
          },
          series: [{
            data: mrccData.data1,
            name: '近1月',
            type: 'line',
            symbol: 'circle',
            symbolSize: 2,
            showAllSymbol: true,
            lineStyle: {
              normal: {
                width: 1
              }
            }
          }],
          color: ['#0C86ED'],
          grid: {
            width: '97%',
            height: '80%',
            left: '0.7%',
            top: '10%',
            bottom: '8%',
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
  mounted() {
    this.initMrccChart()
  }
}
</script>
