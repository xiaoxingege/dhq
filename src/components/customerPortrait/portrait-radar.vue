<style lang="scss" scoped>
@import "../../assets/scss/style.scss";
.radarChart {
    width: 100%;
    height: 100%;
}
</style>
<template>
<div class="radarChart"></div>
</template>
<script>
import echarts from 'echarts'
export default {
  computed: {
    customerAnaly: function() {
      return this.$store.state.customerList.customerAnaly
    },
    customerName: function() {
      return this.$store.state.customerList.customerInfo.username
    }
  },
  watch: {
    'customerAnaly': function() {
      this.initradarChart()
    }
  },
  methods: {
    initradarChart() {
      this.chart = echarts.init(document.getElementsByClassName('radarChart')[0])
      let customerData = [
        Number(this.customerAnaly.data.choose_stock_ability).toFixed(0),
        Number(this.customerAnaly.data.stock_ability_buy).toFixed(0),
        Number(this.customerAnaly.data.timing_ability_sell).toFixed(0),
        Number(this.customerAnaly.data.timing_ability_buy).toFixed(0),
        Number(this.customerAnaly.data.stock_ability_sell).toFixed(0)
      ]
      let avgData = [
        Number(this.customerAnaly.avg.choose_stock_ability).toFixed(0),
        Number(this.customerAnaly.avg.stock_ability_buy).toFixed(0),
        Number(this.customerAnaly.avg.timing_ability_sell).toFixed(0),
        Number(this.customerAnaly.avg.timing_ability_buy).toFixed(0),
        Number(this.customerAnaly.avg.stock_ability_sell).toFixed(0)
      ]
      this.chart.setOption({

        backgroundColor: '#141518',
        legend: {
          right: '2%',
          data: [{
            name: this.customerName,
            icon: 'rect'
          }, {
            name: '全部客户',
            icon: 'rect'
          }],
          itemWidth: 12,
          itemHeight: 12,
          textStyle: {
            color: '#d3d9dd',
            padding: [0, 0, 3, 10]
          },
          orient: 'vertical',
          itemGap: 20
        },
        grid: {
          left: 0,
          right: 10,
          bottom: '5%',
          height: '80%',
          width: '50%'
        },
        radar: {
          indicator: [{
            text: '选股能力',
            min: 0,
            max: 100
          }, {
            text: '仓控入场能力',
            min: 0,
            max: 100

          }, {
            text: '择时卖出能力',
            min: 0,
            max: 100
          }, {
            text: '择时买入能力',
            min: 0,
            max: 100
          }, {
            text: '仓控离场能力',
            min: 0,
            max: 100
          }],
          radius: '80%',
          nameGap: 10,
          center: ['50%', '50%'],
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#444346'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#444346'
            }
          },
          name: {
            textStyle: {
              color: '#d3d9dd'
            }
          }
        },
        series: [{
            name: this.customerName,
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [{
              value: customerData
            }],
            // this.radarData.data,
            areaStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: '#2781ff'
                  }, {
                    offset: 1,
                    color: '#6daaff'
                  }],
                  globalCoord: false
                }
              }
            },
            lineStyle: {
              normal: {
                color: '#fff',
                opacity: 0
              }
            },
            label: {
              normal: {
                show: true,
                formatter: function(params) {},
                position: 'top'
              }
            }
          },
          {
            name: '全部客户',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [{
              value: avgData
            }],
            // this.radarData.data,
            areaStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: '#ff8054'
                  }, {
                    offset: 1,
                    color: '#fd9b79'
                  }],
                  globalCoord: false
                }
              }
            },
            lineStyle: {
              normal: {
                color: '#fff',
                opacity: 0
              }
            },
            label: {
              normal: {
                show: true,
                formatter: function(params) {},
                position: 'bottom'
              }
            }
          }
        ],
        color: ['#0063C7', '#D65838']
      })
      window.addEventListener('resize', () => this.chart.resize(), false)

    }
  },
  mounted() {
    // this.initradarChart()
  }
}
</script>