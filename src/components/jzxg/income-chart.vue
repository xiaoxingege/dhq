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
        const xData = this.jzmncChartData.netAsset[0]
        const dateArr = []
        xData.dataList.forEach((asset) => {
          dateArr.push(this.dateFormatUtil(asset.date))
        })
        return dateArr
      }
    },
    jzxgChartData: function() {
      if (this.jzmncChartData) {
        const jzxgData = this.jzmncChartData.netAsset[0]
        const dateArr = []
        jzxgData.dataList.forEach((asset) => {
          dateArr.push(asset.value)
        })
        return dateArr
      }
    },
    zzqzChartData: function() {
      if (this.jzmncChartData) {
        const zzqzData = this.jzmncChartData.reference[0]
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
        grid: {
          left: 10,
          top: 30,
          width: '90%',
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
              color: '#c9d0d7'
            }
          },
          // splitNumber:2,
          data: this.xData
        }],
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#c9d0d7'
            },
            formatter: function(value) {
              return 100 * value.toFixed(2) + '%'
            }
          },
          min: 'dataMin',
          max: 'dataMax'
        },
        color: ['#1984ea', '#fc2721'],
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