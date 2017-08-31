<style>
.lineChart{
    height:420px;
}
</style>
<template>
    <div class="lineChart" ref="lineChart"></div>
</template>
<script>
    import echarts from 'echarts'
    import { mapState } from 'vuex'

    export default{
      props: ['options', 'strategyId'],
      data () {
        return {

        }
      },
      watch: {

      },
      computed: mapState({
        lineData: state => state.goldStrategy.syqxtData
      }),
      methods: {
        initChart () {
          this.$store.dispatch('goldStrategy/getSyqxtData', { strategyId: this.strategyId }).then(() => {
            const lineData = this.$store.state.goldStrategy.syqxtData
            this.chart = echarts.init(document.getElementsByClassName('lineChart')[0])
            this.chart.setOption({
              backgroundColor: '#fff',
              legend: {
                left: 43,
                top: 10,
                itemWidth: 8,
                data: [{
                  name: '策略收益率',
                  icon: 'circle'
                }, {
                  name: '泸深300',
                  icon: 'circle'
                }]
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
                                        params[i].color + '"></span>策略累计收益率: ' +
                                        params[i].value + '%'
                    }
                    if (i === 1) {
                      s = s + '<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
                                        params[i].color + '"></span>基准累计收益率: ' +
                                        params[i].value + '%'
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
                    type: 'solid'
                  }
                },
                axisLabel: {
                            // show:false
                },
                data: lineData.xData
              },
              yAxis: {
                type: 'value',
                axisLabel: {
                  formatter: function (val) {
                    return val + '%'
                  }
                },
                position: 'left',
                min: 'dataMin',
                max: 'dataMax'
              },
              series: [
                {
                  data: lineData.data1,
                  name: '策略收益率',
                  type: 'line',
                  symbol: 'none'
                },
                {
                  data: lineData.data2,
                  name: '泸深300',
                  type: 'line',
                  symbol: 'none'
                }],
              color: ['#5597d3', '#f1975d', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)',
                'rgba(0,0,0,0)', 'rgba(0,0,0,0)'],
              grid: {
                width: '97.7%',
                height: '280px',
                left: '1%',
                x: 10,
                x2: 10,
                containLabel: true
              },
              dataZoom: [{
                type: 'slider',
                show: true,
                showDetail: false,
                xAxisIndex: [0],
                        // bottom:-10,
                left: 46,
                start: 0,
                end: 100,
                textStyle: {
                            // color: '#aed2ff'
                },
                        // borderColor: '#d5dbe4',
                width: '95%',
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
              }]
            })
          })
        },
        updateChart () {

        }

      },
      mounted () {
        this.initChart()
      }
    }
</script>
