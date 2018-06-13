<template>
<div class="income-chart-wrap">
  <div class="income-chart" ref="chart"></div>
</div>
</template>
<script>
import echarts from 'echarts'
export default {
  props: ['jzmncChartData'],
  data() {
    return {

    }
  },
  watch: {
    jzmncChartData() {
      this.init()
    }
  },
  computed: {
    xData: function() {
      if (this.jzmncChartData) {
        const xData = this.jzmncChartData.netAsset
        const dateArr = []
        xData.dataList.forEach((asset) => {
          dateArr.push(this.dateFormatUtil(asset.date))
        })
        return dateArr
      }
    },
    jzxgChartData: function() {
      if (this.jzmncChartData) {
        const jzxgData = this.jzmncChartData.netAsset
        const dateArr = []
        jzxgData.dataList.forEach((asset) => {
          dateArr.push(asset.value)
        })
        return dateArr
      }
    },
    zzqzChartData: function() {
      if (this.jzmncChartData) {
        const zzqzData = this.jzmncChartData.reference
        const dateArr = []
        zzqzData.dataList.forEach((asset) => {
          dateArr.push(asset.value)
        })
        return dateArr
      }
    }
  },
  methods: {
    init() {
      this.chart.setOption({
        legend: {
          left: 20,
          bottom: 10,
          data: [{
              name: '极智选股'
            },
            {
              name: '中证全指'
            }
          ]
        },
        tooltip: {
          trigger: 'axis',
          textStyle: {
            align: 'left',
            fontFamily: 'Microsoft YaHei',
            fontSize: 12,
            color: '#c9d0d7'
          },
          position: function(point, params, dom, rect, size) {
            return [point[0], '10%'];
          },
          formatter: function(params) {
            let s = params[0].name;
            let value;
            for (let i = 0; i < params.length; i++) {
              value = 100 * params[i].value.toFixed(2) + '%'
              s = s + ' <span style="color: ' + params[i].textColor + '">' + value + '</span>';
            }
            return s;
          }
        },
        grid: {
          show: true,
          borderColor: '#23272c',
          left: 10,
          top: 30,
          width: '90%',
          height: '80%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#23272c',
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#c9d0d7'
            }
          },
          data: this.xData
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: '#23272c'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#c9d0d7'
            },
            formatter: function(value) {
              return 100 * value.toFixed(2) + '%'
            }
          }
          /*,
                    min: 'dataMin',
                    max: 'dataMax'*/
        },
        color: ['#fc2721', '#1984ea'],
        animation: false,
        series: [{
          name: '极智选股',
          type: 'line',
          showSymbol: false,
          data: this.jzxgChartData
        }, {
          name: '中证全指',
          type: 'line',
          showSymbol: false,
          data: this.zzqzChartData
        }]
      });
    },
    dateFormatUtil: function(date) {
      const y = date.substring(0, 4)
      const m = date.substring(4, 6)
      const d = date.substring(6)
      return y + '-' + m + '-' + d
    }
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chart);
    this.init()
    window.addEventListener('resize', () => {
      const height = this.chart.clientHeight;
      const width = this.chart.clientWidth;
      this.chart && this.chart.resize({
        height: height,
        width: width
      })
    }, false)
  }
}
</script>
<style lang="scss" scoped>
.income-chart-wrap {
    width: 100%;
    height: 100%;
    .income-chart {
        height: 100%;
    }
}
</style>