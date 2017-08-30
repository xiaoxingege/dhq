<style lang="scss" scoped>
    .lineChart{height:420px;}
</style>
<template>
    <div class="lineChart">

    </div>
</template>
<script>
    import echarts from 'echarts'
    export default{
      methods: {
        initMrccChart () {
          this.$store.dispatch('goldStrategy/getMrccData', {}).then(() => {
            const mrccData = this.$store.state.goldStrategy.mrccData
            this.chart = echarts.init(document.getElementsByClassName('lineChart')[0])
            this.chart.setOption({
              backgroundColor: '#fff',
              tooltip: {
                trigger: 'axis',
                textStyle: { align: 'left' },
                showContent: false
              },
              xAxis: {
                interval: 0,
                type: 'category',
                boundaryGap: false,
                splitLine: {
                  show: true,
                  lineStyle: {
                    type: 'solid'
                  }
                },
                data: mrccData.xData
              },
              yAxis: {
                type: 'value',
                axisLabel: {
                  formatter: function (val) {
                    return val + '%'
                  }
                },
                position: 'left'
              },
              series: [
                {
                  data: mrccData.data1,
                  name: '近1月',
                  type: 'line',
                  symbol: 'circle',
                  symbolSize: 2,
                  showAllSymbol: true
                }
              ],
              color: ['#16be69'],
              grid: {
                width: '94%',
                left: 68,
                bottom: 70
              },
              dataZoom: [
                {
                  type: 'slider',
                  show: true,
                  showDetail: false,
                  xAxisIndex: [0],
                  bottom: 0,
                  left: 68,
                  start: 0,
                  end: 100,
                  textStyle: {
                                    // color: '#aed2ff'
                  },
                                // borderColor: '#d5dbe4',
                  width: '94%',
                  height: '30',
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
                }
              ]
            })
          })
        }
      },
      mounted () {
        this.initMrccChart()
      }
    }
</script>
