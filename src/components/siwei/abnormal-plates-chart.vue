<template>
<div class="abnormal-plates-chart">
  <div class="chart" ref="chart" @dblclick="openIndex"></div>
</div>
</template>

<script>
import echarts from 'echarts'
import config from '../../z3tougu/config'
import util from '../../z3tougu/util'
import {
  mapState
} from 'vuex'
import {
  ctx
} from '../../z3tougu/config'
let pcId = "";
export default {
  data() {
    return {
      timeline: util.generateTimeline(),
      markPointData: [],
      markLineData: [],
      lastPlateTime: ''
    }
  },
  computed: {
    ...mapState({
      indexData: state => state.marketBubble.indexData,
      // 处理为0的数据
      indexArr: state => state.marketBubble.indexData.data.map(value => value === 0 ? null : value),
      plates: state => state.marketBubble.indexPlateList
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
      let _interval = max - closePx;
      max = max + 1 / 4 * _interval;
      min = min - 1 / 4 * _interval;
      let interval = (max - closePx) / 2;
      return {
        min: min,
        max: max,
        interval: interval,
        closePx: closePx
      };
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
          min: this.indexRange.min,
          max: this.indexRange.max,
          interval: this.indexRange.interval,
          splitNumber: 4,
          axisLabel: {
            inside: true,
            formatter: (value) => ((value - this.indexRange.closePx) / this.indexRange.closePx * 100).toFixed(2) + '%',
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
            silent: false,
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
      this.chart.on('dblclick', (params) => {
        if (params.componentType === 'markPoint') {
          params.event.event.stopPropagation();
          this.openPlate(this.plates[params.dataIndex].idxCode)
        }
      })
    },
    addMarkData() {
      const interval = this.indexRange.interval;
      this.markPointData = [];
      this.markLineData = [];
      this.plates.forEach((plate) => {
        const time = this.formatTime(plate.tradeMin);
        const riseSpeed = plate.riseSpeed;
        const name = plate.idxName;
        const color = riseSpeed >= 0 ? config.upColor : config.downColor;
        const itemIndex = this.indexArr[this.timeline.indexOf(time)] || 0;
        const markPointSize = 60 + (name.length - 4) * 10;
        if (itemIndex !== 0) {
          // 如果coordY超过min max 则显示不出来，避免因为计算（四舍五入）导致超界，做-1操作。
          const coordY = riseSpeed >= 0 ? itemIndex + (interval / 2 - 1) : itemIndex - (interval / 2 - 1);
          console.info();
          let point = {
            coord: [time, coordY],
            symbolSize: [markPointSize, 20],
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
      this.$store.dispatch('marketBubble/updateIndexPlates').then(() => {
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
      });
    },
    updateIndex() {
      this.$store.dispatch('marketBubble/updateIndexData').then(() => {
        this.chart.setOption({
          yAxis: [{
            min: this.indexRange.min,
            max: this.indexRange.max,
            interval: this.indexRange.interval
          }, {
            min: this.indexRange.min,
            max: this.indexRange.max,
            interval: this.indexRange.interval
          }],
          series: [{
            data: this.indexArr
          }]
        });
      })
    },
    formatTime(value) {
      value += '';
      if (value.length === 5) {
        value = '0' + value;
      }
      return value.substring(0, 2) + ':' + value.substring(2, 4)
    },
    openIndex() {
      console.info('openindex');
      window.open('stock/000001.SH');
    },
    openPlate(code) {
      const path = code.length === 6 ? `${ctx}/industry/${code}` : `${ctx}/topic/${code}`;
      window.open(path);
    }
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chart);
    const p1 = this.$store.dispatch('marketBubble/updateIndexData');
    const p2 = this.$store.dispatch('marketBubble/updateIndexPlates', {
      startTime: this.lastPlateTime
    })
    Promise.all([p1, p2]).then(() => {
      this.addMarkData();
      this.initIndex();
    })
    pcId = setInterval(() => {
      this.updateIndex();
      this.updatePlates();
    }, 60 * 1000);
    window.addEventListener('resize', () => {
      const chartWrapper = this.$refs.chart;
      let height = chartWrapper.clientHeight;
      let width = chartWrapper.clientWidth;
      this.chart && this.chart.resize({
        height: height,
        width: width
      })
    }, false)
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