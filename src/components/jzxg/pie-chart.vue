<template>
<div class="pie-chart-wrap">
  <div class="pie-chart" ref="chart"></div>
</div>
</template>
<script>
import echarts from 'echarts'
export default {
  props: ['PieData'],
  data() {
    return {

    }
  },
  watch: {
    PieData() {
      this.init()
    }
  },
  computed: {
    xData: function() {
      if (this.PieData) {
        const xData = this.PieData
        const dateArr = [{
            name: '5%-10%',
            value: xData.less10Num
          },
          {
            name: '10%-20%',
            value: xData.less20Num
          },
          {
            name: '20%以上',
            value: xData.greater20Num
          },
          {
            name: '5%以下',
            value: xData.less5Num
          }
        ]
        return dateArr
      }
    }
  },
  methods: {
    init() {
      if (this.PieData) {
        this.chart.setOption({
          color: ['#0168a3', '#e9573e', '#6798d3', '#4ac4ed'],
          animation: false,
          tooltip: {
            show: false
          },
          series: [{
            name: '波段优选',
            center: ['50%', '55%'],
            radius: ['25%', '55%'],
            type: 'pie',
            label: {
              normal: {
                formatter: (params) => {
                  return '{a|' + params.value + '只}' + '\n' + '{b|' + '盈利\n' + params.name + '}';
                },
                rich: {
                  a: {
                    color: '#c9d0d7',
                    width: 40,
                    align: 'center',
                    lineHeight: 15
                  },
                  b: {
                    color: '#808ba1',
                    width: 40,
                    align: 'center',
                    lineHeight: 15
                  }
                }
              }
            },
            labelLine: {
              normal: {
                length: 30,
                length2: 36,
                lineStyle: {
                  color: '#808ba1'
                }
              }
            },
            data: this.xData
          }]
        });
      }
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
.pie-chart-wrap {
    width: 100%;
    height: 100%;
    * {
        box-sizing: border-box;
    }
    .pie-chart {
        height: 100%;
    }
}
</style>