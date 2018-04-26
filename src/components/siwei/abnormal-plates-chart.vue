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

let pcId = "";
export default {
  data() {
    return {
      timeline: util.generateTimeline(),
      markPointData: [],
      markLineData: []
    }
  },
  computed: {
    ...mapState({
      indexData: state => state.marketBubble.indexData,
      // 处理为0的数据
      indexArr: state => state.marketBubble.indexData.data.map(value => value === 0 ? null : value),
      plates: state => state.marketBubble.abnormalPlateList
    }),
    indexRange: function() {
      // 过滤0数据，算最大最小值。
      const data = this.indexArr.filter(value => value !== null);
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
      let interval = (range.max - range.closePx) / range.closePx / 2;
      return {
        min: 2 * interval,
        max: -2 * interval,
        interval: interval
      }
    },
    mark: function() {

    }
  },
  methods: {
    initIndex() {
      let xData = [];
      this.timeline.forEach((value, index, arr) => {
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
          },
          boundaryGap: false,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#32343E'
            }
          },
          axisPointer: {

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
        series: [{
          type: 'line',
          lineStyle: {
            normal: {
              color: '#BAC3CB',
              width: 1
            }
          },
          data: this.indexArr,
          symbolSize: 0,
          markLine: {
            silent: true,
            data: this.markLineData
          },
          markPoint: {
            silent: true,
            symbol: 'roundRect',
            symbolSize: [60, 30],
            itemStyle: {
              normal: {
                color: '#fff',
                borderWidth: 1
              }
            },
            data: this.markPointData
          },
          smooth: true
        }]
      });
    },
    addMarkData() {
      const interval = this.indexRange.interval;
      this.plates.forEach((plate) => {
        const time = this.formatTime(plate.dateTime);
        const chg = plate.chg;
        const name = plate.industryName;
        const color = chg >= 0 ? config.upColor : config.downColor;
        const itemIndex = this.indexArr[this.timeline.indexOf(time)] || 0;
        if (itemIndex !== 0) {
          const coordY = chg >= 0 ? itemIndex + interval / 2 : itemIndex - interval / 2;
          let point = {
            coord: [time, coordY],
            itemStyle: {
              normal: {
                borderColor: color
              }
            },
            label: {
              normal: {
                position: 'inside',
                color: color,
                formatter: () => name
              }
            }
          };
          let line = [{
              coord: [time, itemIndex],
              symbol: 'circle',
              symbolSize: 6,
              lineStyle: {
                normal: {
                  width: 2,
                  type: 'solid',
                  color: color
                }
              }
            },
            {
              coord: [time, coordY],
              symbol: 'circle',
              symbolSize: 0.1
            }
          ];
          this.markPointData.push(point);
          this.markLineData.push(line);
        }
      });
    },
    updatePlates() {
      // this.this.$store.dispatch('marketBubble/updateAbnormalPlates').then();
      this.addMarkData();
      setTimeout(() => {
        this.chart.setOption({
          series: [{
            markPoint: {
              data: this.markPointData
            },
            markLine: {
              data: this.markLineData
            }
          }]
        })
      }, 0)

    },
    updateIndex() {
      this.$store.dispatch('marketBubble/updateIndexData').then(() => {
        this.chart.setOption({
          yAxis: [{
            min: this.indexRange.min,
            max: this.indexRange.max,
            interval: this.indexRange.interval
          }, {
            min: this.chgRange.min,
            max: this.chgRange.max,
            interval: this.chgRange.interval
          }],
          series: [{
            data: this.indexArr
          }]
        });
      })
    },
    formatTime(value) {
      value += "";
      if (value.length === 5) {
        value = "0" + value;
      }
      return value.substring(0, 2) + ":" + value.substring(2, 4)
    }
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chart);
    const p1 = this.$store.dispatch('marketBubble/updateIndexData');
    const p2 = this.$store.dispatch('marketBubble/updateAbnormalPlates', {
      startTime: ''
    })
    Promise.all([p1, p2]).then(() => {
      this.addMarkData();
      this.initIndex();
    })
    pcId = setInterval(() => {
      this.updateIndex();
    }, 60 * 1000);
  },
  destroyed() {
    if (pcId) {
      clearInterval(pcId);
    }
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