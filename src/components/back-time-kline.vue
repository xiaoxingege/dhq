<style lang="scss" scoped>
@import '../assets/css/base.css';
* {
    text-align: justify;
    box-sizing: border-box;
    font-family: "Microsoft YaHei";
}
body {
    font-size: 12px;
    background: #141518;
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
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
    color: #808ba1;
}
input:-moz-placeholder,
textarea:-moz-placeholder {
    color: #808ba1;
}
input::-moz-placeholder,
textarea::-moz-placeholder {
    color: #808ba1;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
    color: #808ba1;
}
.time-kline-wrap {
    background: #141518;
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
    padding: 47px 0 0 20px;
    position: relative;

}
.time-inp {
    padding-left: 8px;
    height: 25px;
    line-height: 25px;
    /* border: 1px solid #2388da;
        border-radius: 3px; */
    width: 256px;
    font-size: 12px;
    background: #30353b;
    border: none;
    outline: none;
}
.ana-btn {
    width: 56px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    display: inline-block;
    background: #1984ea;
    color: #c9d0d7;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    font-size: 12px;
    margin-left: 10px;
}
.label-txt {
    /* padding-right: 50px; */
    /* padding-left: 27px; */
    padding-left: 12px;
}
.k-line-box {
    margin: 10px 20px;
    position: relative;

}
.kcharts {
    /* height: 360px; */
    /* height: 398px; */
    height: 417px;
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

    width: 256px;
    /* top: 82%; */
    /* top: 104%; */
    top: 101%;
    left: 194px;
    position: absolute;
    /* left: 14.7%; */
    /* left: 276px; */
    /* left: 50%;
        margin-left: -26.7%; */
    /* top: 77%; */
    z-index: 99999;
    color: #666666;
    font-size: 12px;
    background: #cccfd9;
    /* border-radius: 3px; */
}
.search-ul li {
    /* line-height: 30px; */
    line-height: 20px;
    padding: 0 10px;
    /* border-bottom: 1px solid #262931; */
    /* border-bottom: 1px solid #e5e5e5; */
    /* border-bottom: 1px solid #808ba1; */
    cursor: pointer;
}

.search-ul li.active {
    background: #1984ea;
    color: #c9d0d7;
}
.search-ul li span:first-child {
    margin-right: 10px;
}
.desc-title {
    padding-bottom: 23px;
    font-size: 14px;
}
.chance-analysis {
    display: inline-block;
    width: 170px;
    height: 25px;
    border: none;
    cursor: pointer;
    background: #30353b;
    color: #c9d0d7;
    outline: none;
    font-size: 12px;
    border-radius: 3px;
    padding-left: 10px;
}
.chance-analysis option {
    background-color: #bab6b8;
    color: #666;
    font-size: 12px;
    padding-left: 10px;
}
</style>
<template>
<div class="time-kline-wrap">
  <div class="time-inp-box">
    <div class="desc-title">机会分析</div>
    <select v-model="selectInnerCode" class="chance-analysis">
      <option value="please-input">请输入股票代码或简称</option>
      <option v-for="(item,index) of stockList" :value='item.innerCode' :selected='index === 0'>{{item.innerCode}}&nbsp;&nbsp;{{item.name}}</option>
    </select>
    <input type="text" name="inp" placeholder="请输入一只股票代码/简称" class="time-inp lightcolor" @input="search($event)" ref="keyword" autocomplete="off" v-model="message" @keydown="keyEnter($event)" v-if="isShowInput">
    <!--span class="ana-btn" @click="submitSearch($event)">分析</span-->
    <label class="label-txt lightcolor">*仅支持分析A股，价格为前复权</label>
    <ul class="search-ul" id="search-ul" v-if="searchData.searchList && searchData.searchList.length > 0 && message!=''">
      <li v-for="list of searchData.searchList" @click="focusStock($event)"><span>{{list.stockUrl.substring(7,16) }}</span><span>{{list.stockName}}</span></li>
    </ul>
  </div>
  <div class="k-line-box" id="ss" v-show="strategyId&&innerCode">
    <timechart :strategyId="strategyId" :innerCode="innerCode" :chartWidth="chartWidth" :chartHeight="chartHeight" day=750 minRange=250 showDataZoom=true />
  </div>

</div>
</template>

<script>
import {
  mapState
} from 'vuex'
// import echarts from 'echarts'
import timechart from 'components/time-charts'
export default {
  data() {
    return {
      ma5: '--',
      ma10: '--',
      ma20: '--',
      ma30: '--',
      message: '',
      showSearchList: true,
      selectInnerCode: '',
      innerCode: '',
      strategyId: this.$route.params.strategyId,
      searchList: [],
      current: 0,
      fullHeight1: document.documentElement.clientHeight - 562,
      stockList: [],
      isShowInput: false,
      chartWidth: '100%',
      chartHeight: '417px'
    }
  },
  components: {
    timechart
  },
  watch: {
    selectInnerCode() {
      if (this.selectInnerCode === 'please-input') {
        this.isShowInput = true
        this.message = ''
      } else {
        this.isShowInput = false
        this.searchData.searchList = []
        this.innerCode = this.selectInnerCode
        // this.init()
      }
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
            seriesData.push([endDate, closePx])
            // console.log(seriesData)
            const point = {
              name: 'XX标点',
              coord: [endDate, closePx],
              symbol: 'image://http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170321jizz/kline-green4.png',
              symbolSize: [19, 22],
              symbolOffset: ['0', '-75%'],
              itemStyle: {
                normal: {
                  color: 'rgb(41,60,85)'
                }
              },
              label: {
                normal: {
                  show: true,
                  formatter: function(params, ticket, callback) {
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
              coord: [endDate + '', closePx],
              symbol: 'circle',
              symbolSize: 8,
              itemStyle: {
                normal: {
                  color: '#000',
                  borderColor: '#fff',
                  borderWidth: 3
                }
              },
              label: {
                normal: {
                  show: true,
                  formatter: function(params, ticket, callback) {
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
            seriesData.push([endDate + '', closePx])
            // seriesData.push([item.endDate + '', lowPx])
            console.log(seriesData[i])
            const point = {
              name: 'XX标点',
              coord: [endDate, closePx],
              symbol: 'image://http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170321jizz/kline-red4.png',
              symbolSize: [19, 22],
              symbolOffset: ['0', '75%'],
              itemStyle: {
                normal: {
                  color: 'rgb(41,60,85)'
                }
              },
              label: {
                normal: {
                  show: true,
                  formatter: function(params, ticket, callback) {
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
              coord: [endDate + '', closePx],
              symbol: 'circle',
              symbolSize: 8,
              itemStyle: {
                normal: {
                  color: '#000',
                  borderColor: '#fff',
                  borderWidth: 3
                }
              },
              label: {
                normal: {
                  show: true,
                  formatter: function(params, ticket, callback) {
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
    },
    stockListData: state => {
      const stockList = state.backtestDetail.stockList
      return stockList
    }
  }),
  methods: {
    // init() {
    //   this.chart = echarts.init(this.$refs.kcharts) || echarts.getInstanceByDom(this.$refs.kcharts)
    //   this.$store.dispatch('backtestDetail/queryKline', {
    //       innerCode: this.innerCode,
    //       strategyId: this.strategyId
    //     })
    //     .then(() => {
    //       this.drawCharts(this.kLineDataAll.name, this.kLineDataAll.kLineXdata, this.kLineDataAll.kLineYdata, this.kLineDataAll.ma5, this.kLineDataAll.ma10, this.kLineDataAll.ma20, this.kLineDataAll.ma30, this.kLineDataAll.pointData, this.kLineDataAll.seriesData)
    //     })
    // },
    search(e) {
      e.preventDefault()
      const keyword = this.$refs.keyword.value
      this.message = keyword
      this.$store.dispatch('backtestDetail/querySearch', {
        keyword
      })
      if (this.searchData.searchList.length > 0) {
        var ul = document.getElementById('search-ul')
        var lis = ul.getElementsByTagName('li')
        lis[0].className = 'active'
      }
    },
    focusStock(e) {
      const focusStockId = e.currentTarget.children[0].innerText
      this.$emit('focusStockId', focusStockId)
      this.message = focusStockId
      this.showSearchList = false
      this.searchData.searchList = []
      this.innerCode = this.message
      // this.init()
    },
    submitSearch(e) {
      e.preventDefault()
      this.innerCode = this.message
      // this.init()
    },
    keyEnter(e) {
      switch (e.keyCode) {
        case 38:
          this.current--
            console.log(this.current)
          this.addActive()
          break
        case 40:
          this.current++
            console.log(this.current)
          this.addActive()
          break
        case 13:
          var ul = document.getElementById('search-ul')
          var lis = ul.getElementsByTagName('li')
          if (this.current !== -1) {
            console.log(lis[this.current].getElementsByTagName('span')[0].innerText)
            this.message = lis[this.current].getElementsByTagName('span')[0].innerText
            this.searchData.searchList = []
            this.innerCode = this.message
            // this.init()
          }
          break
        default:
          break
      }
    },
    addActive() {
      var ul = document.getElementById('search-ul')
      var lis = ul.getElementsByTagName('li')
      /* } else {
         var ul = document.getElementById('search-ul')
         var lis = ul.getElementsByTagName('li')
       }*/
      // console.log(lis.length)
      for (var i = 0; i < lis.length; i++) {
        lis[i].className = ''
      }
      if (this.current < 0) {
        this.current = lis.length - 1
      }
      if (this.current === lis.length) {
        this.current = 0
      }
      lis[this.current].className = 'active'
    },
    // drawCharts(name, kLineXdata, kLineYdata, ma5, ma10, ma20, ma30, pointData, seriesData) {
    //   console.log(seriesData)
    //   const self = this
    //   self.chart.setOption({
    //     /* title: {
    //       text: name + '买卖点分析',
    //       left: '2.2%',
    //       textStyle: {
    //         color: '#696969',
    //         fontFamily: '宋体',
    //         fontSize: 12,
    //         fontStyle: 'normal',
    //         fontWeight: 'normal'
    //       }
    //     },*/
    //     tooltip: {
    //       trigger: 'axis',
    //       axisPointer: {
    //         type: 'cross'
    //       },
    //       formatter: function(t) {
    //         // console.log(t)
    //         var time = t[0].name
    //         var openPx = t[0].value[1]
    //         var closePx = t[0].value[2]
    //         var highPx = t[0].value[3]
    //         var lowPx = t[0].value[4]
    //         return '时间：' + time + '<br/>开盘价：' + (openPx || '--') + '<br/>收盘价：' + (closePx || '--') + '<br/>最高价：' + (highPx || '--') +
    //           '<br/>最低价：' + (lowPx || '--') + '<br/>'
    //       }
    //     },
    //     grid: {
    //       /* left: '2.5%',*/
    //       /* left: '2.5%',*/
    //       /* right: '2%',*/
    //       left: '24px',
    //       right: '36px',
    //       top: '30px',
    //       bottom: '20px',
    //       /* bottom: '10%',*/
    //       /*, */
    //       containLabel: true
    //     },

    //     xAxis: {
    //       type: 'category',
    //       data: kLineXdata,
    //       scale: true,
    //       boundaryGap: false,
    //       /* axisLine: {  },*/
    //       axisLine: {
    //         onZero: false,
    //         lineStyle: {
    //           color: '#23272c'
    //         }
    //       },
    //       splitLine: {
    //         show: false
    //       },
    //       splitNumber: 5,
    //       min: 'dataMin',
    //       max: 'dataMax',
    //       axisLabel: {
    //         align: 'left',
    //         textStyle: {
    //           color: '#c9d0d7'
    //         }
    //       }
    //     },

    //     yAxis: {
    //       scale: true,
    //       splitArea: {
    //         show: false
    //       },
    //       axisTick: {
    //         show: false
    //       },
    //       splitLine: {
    //         show: true,
    //         lineStyle: {
    //           // 使用深浅的间隔色
    //           color: '#23272c'
    //         }
    //       },
    //       axisLine: {
    //         show: false,
    //         lineStyle: {
    //           color: '#23272c'
    //         }
    //       },
    //       position: 'right',
    //       type: 'value',
    //       axisLabel: {
    //         formatter: '{value}',
    //         textStyle: {
    //           color: '#c9d0d7'
    //         }
    //       }

    //       /* axisLabel: {
    //         formatter: function (val) {
    //           return val
    //         }
    //       }*/
    //     },

    //     series: [{
    //         name: '日K',
    //         type: 'candlestick',
    //         data: kLineYdata,
    //         barWidth: '3',
    //         itemStyle: {
    //           normal: {
    //             color: '#e6363a',
    //             color0: '#48a854',
    //             borderColor: '#ff4040',
    //             borderColor0: '#2dc678'
    //           }
    //         },
    //         markPoint: { /* image://src/assets/images/z3img/kline-red.png*/
    //           // symbol: 'image://https://ws1.sinaimg.cn/large/006cGJIjly1fiza2t2r6qj30go09ejt8.jpg',
    //           label: {
    //             normal: {
    //               formatter: function(param) {
    //                 return param != null ? Math.round(param.value) : ''
    //               }
    //             }
    //           },
    //           data: pointData,
    //           tooltip: {
    //             formatter: function(param) {
    //               return param.name + '<br>' + (param.data.coord || '')
    //             }
    //           }
    //         }
    //       },
    //       {
    //         type: 'line',
    //         data: seriesData,
    //         lineStyle: {
    //           normal: {
    //             width: 3,
    //             color: '#fff'
    //           }
    //         }
    //       }

    //     ]
    //   })
    // },
    // changePer(num) {
    //   return (Number(num) * 100).toFixed(2) + '%'
    // },
    // changeDate(time) {
    //   return (time + '').substring(0, 4) + '-' + (time + '').substring(4, 6) + '-' + (time + '').substring(6, (time + '').length)
    // },
    initStockList() {
      this.$store.dispatch('backtestDetail/queryStockList', {
          strategyId: this.strategyId
        })
        .then(() => {
          this.stockList = this.stockListData
          this.selectInnerCode = this.stockList[0].innerCode
          this.innerCode = this.selectInnerCode
          // this.init()
        })
    }
  },
  mounted() {
    this.initStockList()
  }

}
</script>
