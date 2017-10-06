<style lang="scss" scoped>
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
  props: ['strategyId'],
  computed: {
    radarData: function () {
      return this.$store.state.goldStrategy.radarData
    }
  },
  methods: {
    initradarChart () {
      this.$store.dispatch('goldStrategy/getRadarData', {
        strategyId: this.strategyId
      }).then(() => {
        // const barData = this.$store.state.goldStrategy.drykData
        this.chart = echarts.init(document.getElementsByClassName('radarChart')[0])
        if (this.radarData !== null) {
          this.chart.setOption({

            backgroundColor: '#141518',
            legend: {
              bottom: '6px',
              data: [{
                name: this.radarData.legend[0],
                icon: 'circle'
              },
              {
                name: this.radarData.legend[1],
                icon: 'circle'
              },
              {
                name: this.radarData.legend[2],
                icon: 'circle'
              }
              ],
              itemWidth: 10,
              itemHeight: 10,
              textStyle: {
                color: '#d3d9dd'
              }

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
                name: '成长性',
                max: 5,
                min: -5
              }, // 10 ~ -10
              {
                name: '杠杆',
                max: 5,
                min: -5
              },
              {
                name: '流动性',
                max: 5,
                min: -5
              },
              {
                name: '动量',
                max: 5,
                min: -5
              },
              {
                name: '规模',
                max: 5,
                min: -5
              },
              {
                name: '估值',
                max: 5,
                min: -5
              },
              {
                name: '波动',
                max: 5,
                min: -5
              },
              {
                name: '质量',
                max: 5,
                min: -5
              },
              {
                name: '分析师预期',
                max: 5,
                min: -5
              },
              {
                name: '股东',
                max: 5,
                min: -5
              }
              ],
              radius: '60%',
              nameGap: 10,
              center: ['50%', '45%'],
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
              type: 'radar',
              // areaStyle: {normal: {}},
              data: this.radarData.data,
              label: {
                normal: {
                  color: '#d3d9dd'
                }
              }
            }]
          })
        }
      })
    }
  },
  mounted () {
    this.initradarChart()
  }
}
</script>
