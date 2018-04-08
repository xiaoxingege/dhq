<template>
<div class="abnormal-plates-chart">
  <div class="chart" ref="chart"></div>
</div>
</template>

<script>
import echarts from 'echarts'
import config from '../../z3tougu/config'
import util from '../../z3tougu/util'
import {
  mapState
} from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      indexData: state => state.marketBubble.indexData
    }),
    indexRange: function() {
      const data = this.indexData.data;
      const closePx = Number(this.indexData.closePx.toFixed(2));
      const maxData = Math.max(...data);
      const minData = Math.min(...data);
      let max = closePx * 1.01;
      let min = closePx * 0.99;
      if (Math.abs(closePx - maxData) >= Math.abs(closePx - minData)) {
        max = closePx + Math.abs(closePx - maxData);
        min = closePx - Math.abs(closePx - maxData);
      } else {
        max = closePx + Math.abs(closePx - minData);
        min = closePx - Math.abs(closePx - minData);
      }
      let interval = (max - closePx) / 2;
      return {
        min: min,
        max: max,
        interval: interval,
        closePx: closePx
      };
    },
    chgRange: function() {
      let range = this.indexRange;
      let interval = range.interval / (range.max - range.min / 2);
      return {
        min: 2 * interval,
        max: -2 * interval,
        interval
      }
    }
  },
  methods: {
    initPlates() {
      this.chart = echarts.init(this.$refs.chart);
      let xData = [];
      util.generateTimeline().forEach((value, index, arr) => {
        let align = '';
        if (index === 0) {
          align = 'left';
        } else if (index === arr.length - 1) {
          align = 'right';
        }
        xData.push({
          value: value,
          textStyle: {
            align: align
          }
        });
      })
      this.chart.setOption({
        grid: {
          containLabel: false,
          width: 'auto',
          top: 10,
          left: 60,
          right: 10,
          bottom: 40
        },
        xAxis: {
          type: 'category',
          axisTick: {
            length: 0
          },
          axisLabel: {
            interval: 29,
            color: '#ccc'
            // formatter:(value, index) => {
            //     if(index === 0){
            //         return '{start|'+value +'}'
            //     }else if(index === 240){
            //         return '{end|'+value +'}'
            //     }else{
            //         return value;
            //     }
            // },
            // rich:{
            //     start:{
            //         align:'left'
            //     },
            //     end:{
            //         align:'right'
            //     }
            // },
          },
          boundaryGap: false,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#32343E'
            }
          },

          data: xData
        },
        yAxis: [{
          type: 'value',
          axisLine: {
            onZero: false
          },
          min: this.indexRange.min,
          max: this.indexRange.max,
          interval: this.indexRange.interval,
          splitNumber: 4,
          axisLabel: {
            formatter: (value) => value.toFixed(2),
            color: (value, index) => index < 2 ? config.downColor : (index === 2 ? config.flatColor : config.upColor)
          },
          axisTick: {
            length: 0
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#32343E'
            }
          }
        }, {
          type: 'value',
          position: 'right',
          axisLine: {
            onZero: false
          },
          min: this.chgRange.min,
          max: this.chgRange.max,
          interval: this.chgRange.interval,
          splitNumber: 4,
          axisLabel: {
            inside: true,
            formatter: (value) => (value * 100).toFixed(2) + '%',
            color: (value, index) => index < 2 ? config.downColor : (index === 2 ? config.flatColor : config.upColor)
          },
          axisTick: {
            length: 0
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#32343E'
            }
          }
        }],
        // tooltip:{
        //     trigger:'item',
        //     axisPointer:{
        //         type:'cross'
        //     }
        // },
        series: [{
          type: 'line',
          lineStyle: {
            normal: {
              color: '#BAC3CB',
              width: 1
            }
          },
          data: this.indexData.data,
          symbolSize: 0,
          markLine: {
            silent: true,
            data: [
              [{
                  coord: ['10:00', 3030],
                  symbol: 'circle',
                  symbolSize: 6,
                  lineStyle: {
                    normal: {
                      width: 2,
                      type: 'solid',
                      color: config.downColor
                    }
                  }
                },
                {
                  coord: ['10:00', 2980],
                  symbol: 'circle',
                  symbolSize: 0.1
                }
              ],
              [{
                  coord: ['10:30', 3000],
                  symbol: 'circle',
                  symbolSize: 6,
                  lineStyle: {
                    normal: {
                      width: 2,
                      type: 'solid',
                      color: config.upColor
                    }
                  }
                },
                {
                  coord: ['10:30', 3050],
                  symbol: 'circle',
                  symbolSize: 0.1
                }
              ]
            ]
          },
          markPoint: {
            silent: true,
            symbol: 'roundRect',
            symbolSize: [60, 30],
            data: [{
                name: '金融',
                coord: ['10:00', 2980],
                value: '金融',
                itemStyle: {
                  normal: {
                    color: '#fff',
                    borderWidth: 1,
                    borderColor: config.downColor
                  }
                },
                label: {
                  normal: {
                    position: 'inside',
                    color: config.downColor,
                    formatter: () => '金融'
                  }
                }
              },
              {
                name: '地产',
                value: '地产',
                coord: ['10:30', 3050],
                itemStyle: {
                  normal: {
                    color: '#fff',
                    borderWidth: 1,
                    borderColor: config.upColor
                  }
                },
                label: {
                  normal: {
                    position: 'inside',
                    color: config.upColor,
                    formatter: () => '地产'
                  }
                }
              }
            ]
          },
          smooth: true
        }]
      });
    },
    update() {
      this.$store
    }
  },
  mounted() {
    this.$store.dispatch('marketBubble/updateIndexData').then(() => {
      this.initPlates();
    })
  }
}
</script>
<style lang="scss" scoped>
.abnormal-plates-chart {
    width: 100%;
    height: 100%;
    .chart {
        height: 100%;
    }
}
</style>