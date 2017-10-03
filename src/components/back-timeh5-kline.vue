<style lang="scss" scoped>
@import '../assets/css/base.css';
* {
    text-align: justify;
    box-sizing: border-box;
    font-family: "Microsoft YaHei";
}
body {
    font-size: 12px;
    background: #f2f2f2;
}
h3 {
    font-weight: 400;
}
em,
i {
    font-style: normal;
}
.fr {
    float: right;
}
.fl {
    float: left;
}
.blue {
    color: #1984ea;
}
.red {
    color: #ca4941;
}
.green {
    color: #56a870;
}

.lightcolor {
    color: #c9d0d7;
}

.gray {
    color: #808ba1;
}
.fr {
    float: right;
}
.fl {
    float: left;
}
.time-kline-wrap {
    background: #fff;
    color: #c9d0d7;
    width: 100%;
    font-size: 12px;
}
/*  .kline-main{
       padding: 0 10px 0;
    } */

.time-inp-box {

    /* padding: 14px 10px 14px 11px; */
    /* padding: 48px 20px 30px 20px; */
    /* padding-top: 47px; */
    /*  padding: 47px 0 0 20px; */
    position: relative;
    border-radius: 0;
    outline: none;
}
.time-inp {
    padding-left: 0.1rem;
    height: 0.63rem;
    /* border: 1px solid #2388da;
        border-radius: 3px; */
    width: 4.8rem;
    font-size: 0.24rem;
    background: #fafafa;
    border: 0.01rem solid #e6e6e6;
    outline: none;
    color: #333333;
    border-radius: 0;
    border-top: 0.01rem solid #e6e6e6;
}
.inp-box {
    padding: 0.4rem 0.5rem 0.2rem 0.3rem;
}
.ana-btn {
    width: 1.56rem;
    height: 0.64rem;
    text-align: center;
    line-height: 0.64rem;
    background: #ff4040;
    color: #ffffff;
    cursor: pointer;
    border: none;
    font-size: 0.28rem;
}
.label-txt {
    /* padding-right: 50px; */
    padding-left: 0.35rem;
    font-size: 0.22rem;
    color: #c3c3c3;
}
.k-line-box {
    /* padding: 11px 7px 20px 6px; */
    /* padding-bottom: 20px; */
    position: relative;

}
.kcharts {
    height: 2.97rem;
}
.ma-box {
    position: absolute;
    top: 10%;
    left: 3%;
    width: 50%;
}
.ma5 {
    color: #e75443;
}
.ma10 {
    color: #942a52;
}
.ma20 {
    color: #f6bc4d;
}
.ma30 {
    color: #2388da;
}
.mawidth {
    width: 6%;
    display: inline-block;
}
.search-ul {
    /* width: 206px; */
    /* width: 208px; */
    /* width: 204px; */

    width: 4.8rem;
    /* top: 82%; */
    top: 53%;
    left: 0.3rem;
    position: absolute;
    /* left: 14.7%; */
    /* left: 276px; */
    /* left: 50%;
        margin-left: -26.7%; */
    /* top: 77%; */
    z-index: 99999;
    color: #666666;
    font-size: 12px;
    /* background: #f2f2f2; */
    background: #fafafa;
    padding: 0 10px;
    border-radius: 3px;
}
.search-ul li {
    line-height: 30px;
    /* border-bottom: 1px solid #262931; */
    border-bottom: 1px solid #e5e5e5;
    /*border-bottom: 1px solid #808ba1;*/
    cursor: pointer;
}
.search-ul li span:first-child {
    margin-right: 10px;
}
.desc-title {
    padding-bottom: 23px;
    font-size: 14px;
}
</style>
<template>
<div class="time-kline-wrap">

  <div class="time-inp-box">
    <!-- <div class="desc-title">机会分析</div> -->
    <div class="inp-box clearfix">
      <input type="text" name="inp" placeholder="请输入一只股票代码/简称" class="time-inp fl" @input="search($event)" ref="keyword" autocomplete="off" v-model="message" @keyup="keyEnter($event)">
      <span class="ana-btn fl" @click="submitSearch($event)">分析</span>
    </div>
    <label class="label-txt clearfix">*适用范围：{{timeStrategy.stockScope}}，超出范围可能不准</label>
    <ul class="search-ul" v-if="searchData.searchList && searchData.searchList.length > 0 && message!=''">
      <li v-for="list of searchData.searchList" @click="focusStock($event)"><span>{{list.stockUrl.substring(7,16) }}</span><span>{{list.stockName}}</span></li>
    </ul>
    <!-- <ul class="search-ul" v-else>
                  <li>暂无数据</li>
                  
               </ul> -->
  </div>
  <div class="k-line-box">

    <div class="kcharts" ref="kcharts"></div>
  </div>

</div>
</template>

<script>
import {
  mapState
} from 'vuex'
import echarts from 'echarts'

export default {
  data () {
    return {
      ma5: '--',
      ma10: '--',
      ma20: '--',
      ma30: '--',
      message: '',
      showSearchList: true,
      innerCode: '',
      // showMa: false,
      strategyId: this.$route.params.strategyId,
      searchList: [],
      fullHeight1: document.documentElement.clientHeight - 562
    }
  },
  computed: mapState({
    // searchList: state => state.backtestDetail.searchList,
    timeStrategy: state => state.backtestDetail.timeStrategy,
    searchData: state => {
      const listData = state.backtestDetail.searchList
      return {
        searchList: listData

      }
    },
    kLineDataAll: state => {
      const dataAll = state.backtestDetail.kLineData
      const kLine = dataAll.kLine
      const sellData = dataAll.sellDay
      const buyData = dataAll.buyDay
      // console.log(sellData)
      const kLineXdata = []
      const kLineYdata = []
      const ma5 = []
      const ma10 = []
      const ma20 = []
      const ma30 = []
      let name = ''
      let code = ''
      const pointData = []
      const seriesData = []
      kLine && kLine.forEach(item => {
        const openPx = item.openPx // 开盘价
        const closePx = item.closePx // 收盘价
        const highPx = item.highPx // 最高价
        const lowPx = item.lowPx // 最低价
        const endDate = (item.endDate + '').substring(0, 4) + '-' + (item.endDate + '').substring(4, 6) + '-' + (item.endDate + '').substring(6, (item.endDate + '').length)
        // console.log(endDate)
        kLineXdata.push(endDate)
        kLineYdata.push([openPx, closePx, highPx, lowPx])
        ma5.push(item.ma5)
        ma10.push(item.ma10)
        ma20.push(item.ma20)
        ma30.push(item.ma30)
        name = item.name
        code = item.innerCode
        // console.log(sellData[0])
        // console.log(sellData[0] === item.endDate)
        for (let i = 0; i < sellData.length; i++) {
          // console.log(sellData[i] === item.endDate)
          if (sellData[i] === item.endDate) {
            // const ss = sellData[i]
            // console.log(sellData[i])
            // console.log(highPx)
            seriesData.push([endDate, highPx])
            // console.log(seriesData)
            const point = {
              name: 'XX标点',
              coord: [endDate, highPx],
              symbol: 'image://http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170321jizz/kline-green4.png',
              symbolSize: [19, 22],
              symbolOffset: ['0', '-50%'],
              itemStyle: {
                normal: {
                  color: 'rgb(41,60,85)'
                }
              },
              label: {
                normal: {
                  show: true,
                  formatter: function (params, ticket, callback) {
                    return ''
                  },
                  textStyle: {
                    fontSize: 0
                  }
                }
              }

            }
            pointData.push({
              name: 'XX标点',
              coord: [endDate + '', highPx],
              symbol: 'circle',
              symbolSize: 10,
              itemStyle: {
                normal: {
                  color: '#000',
                  /* color: '#fff',*/
                  /* borderColor: '#fff',*/
                  /* borderColor: '#000',*/
                  borderWidth: 3
                }
              },
              label: {
                normal: {
                  show: true,
                  formatter: function (params, ticket, callback) {
                    return ''
                  },
                  textStyle: {
                    fontSize: 0
                  }
                }
              }
            })
            pointData.push(point)
          }
        }
        for (let i = 0; i < buyData.length; i++) {
          // console.log(sellData[i] === item.endDate)

          if (buyData[i] === item.endDate) {
            /* const ss = buyData[i]*/
            console.log(buyData[i])
            console.log(item.endDate)
            seriesData.push([endDate + '', lowPx])
            // seriesData.push([item.endDate + '', lowPx])
            console.log(seriesData[i])
            const point = {
              name: 'XX标点',
              coord: [endDate, lowPx],
              symbol: 'image://http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170321jizz/kline-red4.png',
              symbolSize: [19, 22],
              symbolOffset: ['0', '50%'],
              itemStyle: {
                normal: {
                  color: 'rgb(41,60,85)'
                }
              },
              label: {
                normal: {
                  show: true,
                  formatter: function (params, ticket, callback) {
                    return ''
                  },
                  textStyle: {
                    fontSize: 0
                  }
                }
              }
            }
            pointData.push({
              name: 'XX标点',
              coord: [endDate + '', lowPx],
              symbol: 'circle',
              symbolSize: 10,
              itemStyle: {
                normal: {
                  color: '#000',
                  /* borderColor: '#fff',*/
                  borderWidth: 3
                }
              },
              label: {
                normal: {
                  show: true,
                  formatter: function (params, ticket, callback) {
                    return ''
                  },
                  textStyle: {
                    fontSize: 0
                  }
                }
              }
            })
            pointData.push(point)
          }
        }
      })

      return {
        kLineXdata: kLineXdata,
        kLineYdata: kLineYdata,
        ma5: ma5,
        ma10: ma10,
        ma20: ma20,
        ma30: ma30,
        name: name,
        code: code,
        pointData: pointData,
        seriesData: seriesData
      }
    }
  }),
  components: {

  },
  methods: {
    init () {
      this.chart = echarts.init(this.$refs.kcharts)

      // console.log(this.message)
      this.innerCode = this.message
      this.$store.dispatch('backtestDetail/queryKline', {
        innerCode: this.innerCode,
        strategyId: this.strategyId
      })
        .then(() => {
          this.drawCharts(this.kLineDataAll.name, this.kLineDataAll.kLineXdata, this.kLineDataAll.kLineYdata, this.kLineDataAll.ma5, this.kLineDataAll.ma10, this.kLineDataAll.ma20, this.kLineDataAll.ma30, this.kLineDataAll.pointData, this.kLineDataAll.seriesData)
        })
    },
    search (e) {
      e.preventDefault()
      const keyword = this.$refs.keyword.value
      this.message = keyword
      this.$store.dispatch('backtestDetail/querySearch', {
        keyword
      })
      if (this.message === '') {
        // this.showMa = false
      } else {
        this.init()
      }
      // this.filterStocks(keyword)
    },
    focusStock (e) {
      const focusStockId = e.currentTarget.children[0].innerText
      this.$emit('focusStockId', focusStockId)
      this.message = focusStockId
      this.showSearchList = false
      // this.searchList = []
      this.searchData.searchList = []
      console.log(this.searchData.searchList)
      // this.init()
    },
    submitSearch (e) {
      e.preventDefault()
      // this.showMa = true
      this.init()
    },
    keyEnter (e) {
      if (e.keyCode === 13) {
        const keyword = this.$refs.keyword.value
        this.message = keyword
        this.$store.dispatch('backtestDetail/querySearch', {
          keyword
        })
      }
    },
    drawCharts (name, kLineXdata, kLineYdata, ma5, ma10, ma20, ma30, pointData, seriesData) {
      console.log(seriesData)
      const self = this
      self.chart.setOption({
        /* title: {
          text: name + '买卖点分析',
          left: '2.2%',
          textStyle: {
            color: '#696969',
            fontFamily: '宋体',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 'normal'
          }
        },*/
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          formatter: function (t) {
            // console.log(t)
            var time = t[0].name
            var openPx = t[0].value[1]
            var closePx = t[0].value[2]
            var highPx = t[0].value[3]
            var lowPx = t[0].value[4]
            /* if (t[1].value === null) {
              self.ma5 = '--'
            } else {
              self.ma5 = t[1].value
            }
            self.ma10 = t[2].value
            self.ma20 = t[3].value
            self.ma30 = t[4].value*/
            // console.log(self.ma5)
            /* for (var i = 0; i < t.length; i++) {
              if (t[i].seriesName === 'MA5') {
                var ma5 = t[i].value*/

            // this.ma5 = t[1].value

            // 更新ma20
            // $('#kma20').html(ma20)
            /* } else if (t[i].seriesName === 'MA10') {
              var ma10 = t[i].value*/
            // this.ma10 = t[2].value

            // 更新ma60
            // $('#kma60').html(ma60)
            /* } else if (t[i].seriesName === 'MA20') {
              var ma20 = t[i].value*/
            // this.ma20 = t[3].value

            // 更新ma120
            // $('#kma120').html(ma120)
            /* } else if (t[i].seriesName === 'MA30') {
              var ma30 = t[i].value*/
            // this.ma30 = t[4].value

            // 更新ma120
            // $('#kma120').html(ma120)
            /*  }
            }*/
            // return 123
            return '时间：' + time + '<br/>开盘价：' + (openPx || '--') + '<br/>收盘价：' + (closePx || '--') + '<br/>最高价：' + (highPx || '--') +
              '<br/>最低价：' + (lowPx || '--') + '<br/>'
          }
        },
        /* legend: {
          data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30', 'pointLine']
        },*/
        grid: {
          /* left: '2.5%',*/
          /* left: '2.5%',*/
          /* right: '2%',*/
          left: '2%',
          right: '1%',
          top: '3.2%',
          bottom: '0',
          /* bottom: '10%',*/
          /*, */
          containLabel: true
        },

        xAxis: {
          type: 'category',
          data: kLineXdata,
          scale: true,
          boundaryGap: false,
          /* axisLine: {  },*/
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#c9d0d7'
            }
          },
          splitLine: {
            show: true
          },
          splitNumber: 5,
          min: 'dataMin',
          max: 'dataMax',
          axisLabel: {
            align: 'left',
            textStyle: {
              color: '#c9d0d7'
            }
          }
        },

        yAxis: {
          scale: true,
          splitArea: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true
          },
          axisLine: {
            show: false
          },
          position: 'right',
          type: 'value',
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: '#c9d0d7'
            }
          }

          /* axisLabel: {
            formatter: function (val) {
              return val
            }
          }*/
        },

        series: [{
          name: '日K',
          type: 'candlestick',
          data: kLineYdata,
          barWidth: '3',
          itemStyle: {
            normal: {
              color: '#e6363a',
              color0: '#48a854',
              borderColor: '#ff4040',
              borderColor0: '#2dc678'
            }
          },
          markPoint: { /* image://src/assets/images/z3img/kline-red.png*/
              // symbol: 'image://https://ws1.sinaimg.cn/large/006cGJIjly1fiza2t2r6qj30go09ejt8.jpg',
            label: {
              normal: {
                formatter: function (param) {
                  return param != null ? Math.round(param.value) : ''
                }
              }
            },
            data: pointData,
            tooltip: {
              formatter: function (param) {
                return param.name + '<br>' + (param.data.coord || '')
              }
            }
          }
            /*,
                         markLine: {

                           data: [[{
                             coord: [0, 3],
                             symbol: 'none'
                           }, {
                             coord: [10, 13],
                             symbol: 'none'
                           }]]

                         }*/
        },
          /* {
            name: 'MA5',
            type: 'line',
            data: ma5,
            smooth: true,
            lineStyle: {
              normal: {
                opacity: 0.5,
                color: '#e75443'
              }
            }
          },
          {
            name: 'MA10',
            type: 'line',
            data: ma10,
            smooth: true,
            lineStyle: {
              normal: {
                opacity: 0.5,
                color: '#942a52'
              }
            }
          },
          {
            name: 'MA20',
            type: 'line',
            data: ma20,
            smooth: true,
            lineStyle: {
              normal: {
                opacity: 0.5,
                color: '#f6bc4d'
              }
            }
          },
          {
            name: 'MA30',
            type: 'line',
            data: ma30,
            smooth: true,
            lineStyle: {
              normal: {
                opacity: 0.5,
                color: '#2388da'
              }
            }
          },*/
        {
          type: 'line',
          data: seriesData,
          lineStyle: {
            normal: {
              width: 3,
              color: '#888888'
            }
          }
        }

        ]
      })
    },
    changePer (num) {
      return (Number(num) * 100).toFixed(2) + '%'
    },
    changeDate (time) {
      return (time + '').substring(0, 4) + '-' + (time + '').substring(4, 6) + '-' + (time + '').substring(6, (time + '').length)
    }

  },
  mounted () {
    // this.init()
    // this.$store.dispatch('')

  }

}
</script>
