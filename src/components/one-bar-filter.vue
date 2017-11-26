<style lang="scss" scoped>
.barChart {
    width: 100%;
    height: 100%;
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
<div class="barChart" :style="{  height: height + 'px' }">

</div>
</template>
<script>
import echarts from 'echarts'
export default {
  props: ['strategyId', 'height'],
  methods: {
    initSylfbChart() {
      this.$store.dispatch('backtestDetail/getFilterProfit', {
        strategyId: this.strategyId
      }).then(() => {
        const sylfbData = this.$store.state.backtestDetail.sylfbData
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
                name: '负收益次数',
                icon: 'circle'
              },
              {
                name: '正收益次数',
                icon: 'circle'
              }
            ]
          },
          tooltip: {
            trigger: 'axis',
            padding: [10, 55, 10, 20],
            textStyle: {
              align: 'left'
            },
            showContent: true,
            axisPointer: {
              type: 'cross',
              label: {
                show: true,
                formatter: function(params) {
                  let yLabelData = ''
                  if (params.seriesData.length > 0) {
                    yLabelData = params.seriesData[0].data === 0 ? params.seriesData[1].data : params.seriesData[0].data
                    return params.seriesData[0].name
                  } else {
                    /* if (typeof(yLabelData) !== 'undefined') {
                       return yLabelData
                     } else {
                       return ''
                     }*/
                  }
                },
                backgroundColor: '#777',
                // padding:[20,0,10,10],
                textStyle: {
                  /* color:'#000',
                   fontWeight:'bold'*/
                }
              },
              crossStyle: {
                color: '#666'
              }
            },
            formatter: function(params) {
              var s = ''
              for (var i = 0; i < params.length; i++) {
                if (i === 0) {
                  s = s + '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + params[i].color + '"></span>' + params[i].seriesName + ' : ' + params[i].value
                }
                if (i === 1) {
                  s = s + '<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + params[i].color + '"></span>' +
                    params[i].seriesName + ' : ' + params[i].value
                }
              }
              return s
            }
          },
          xAxis: {
            // interval:0,
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

            data: sylfbData.xData
          },
          yAxis: {
            // type: 'value',
            splitLine: {
              show: true,
              lineStyle: {
                type: 'solid',
                color: '#2A2E36'
              }
            },
            axisLabel: {
              formatter: function(val) {
                return val
              },
              color: '#808ba1'
            }
          },
          series: [{
              data: sylfbData.data1,
              name: '负收益次数',
              type: 'bar',
              stack: '收益率分布'
            },
            {
              data: sylfbData.data2,
              name: '正收益次数',
              type: 'bar',
              stack: '收益率分布'
            }
          ],
          color: ['#1EC96C', '#E73E3A'],
          grid: {
            width: '97%',
            height: '80%',
            left: 0,
            top: '10%',
            containLabel: true
          }
        })
      })
    }
  },
  mounted() {
    this.initSylfbChart()
  }
}
</script>
