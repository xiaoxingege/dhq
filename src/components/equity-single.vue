<style>
@import '../assets/css/reset.css';
.equity-trading {
  background: rgba(242, 242, 242, 1);
  box-sizing: border-box;
  font-family: Microsoft Yahei, Helvetica, Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif;
}

.equity-trading .block {
  background: #fff;
  margin-bottom: 0.2rem
}

.equity-trading .detail {
  margin-bottom: 1.2rem;
}

.title {
  height: 0.88rem;
  line-height: 0.88rem;
  padding: 0 0.3rem;
  border-bottom: 1px solid #E6E6E6;
  overflow: hidden;
  position: relative;
}

.red-block {
  height: 0.26rem;
  width: 0.04rem;
  background: red;
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -0.13rem;
}

.title h2 {
  float: left;
  font-size: 0.3rem;
  color: #333333;
}

.title-time {
  float: left;
  margin-left: 0.3rem;
  font-size: 0.26rem;
  font-family: PingFangSC-Regular;
  color: rgba(136, 136, 136, 1);
}

.curve-content {
  height: 3.53rem;
  padding: 0.41rem 0.3rem;
  overflow: hidden;
}

.curve-list {
  font-size: 0.20rem;
}

.detail-title {
  height: 0.6rem;
  line-height: 0.6rem;
  background: #FAFAFA;
}

.detail-title .detail-title-lists {
  padding: 0 0.3rem;
  overflow: hidden;
}

.detail-title .detail-title-lists li {
  float: left;
  text-align: right;
  padding-right: 0.2rem;
  box-sizing: border-box;
  font-size: 0.22rem;
  color: #aaa;
  position: relative;
}

.detail-title .detail-title-lists .time {
  width: 2.04rem;
  text-align: left;
}

.detail-title .detail-title-lists li span {
  width: 0.13rem;
  height: 0.17rem;
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -0.08rem;
  background: url(http://i0.jrjimg.cn/optional/default.png) center no-repeat;
  background-size: contain;
}

.detail-title .detail-title-lists .desc span {
  background: url(http://i0.jrjimg.cn/optional/desc.png) center no-repeat;
  background-size: contain;
}

.detail-title .detail-title-lists .asce span {
  background: url(http://i0.jrjimg.cn/optional/asce.png) center no-repeat;
  background-size: contain;
}

.detail-lists {}

.detail-lists li {
  padding: 0 0.3rem;
  height: 1rem;
  line-height: 1rem;
  border-bottom: 0.01rem solid #E6E6E6;
  overflow: hidden;
}

.detail-lists li span,
.detail-lists li p {
  float: left;
  text-align: right;
  font-size: 0.28rem;
  color: #333;
}

.detail-lists li p {
  text-align: left;
}

.detail-lists li .green {
  color: #26BE6A;
}

.detail-lists li .red {
  color: #FF4040;
}

.detail-more {
  height: 1.36rem;
  line-height: 1.36rem;
}

.detail-more h3 {
  font-size: 0.28rem;
  color: #3996F2;
  text-align: center;
}

.detail-more h4 {
  font-size: 0.28rem;
  color: #aaa;
  text-align: center;
}

.skip {
  background: #fff;
  width: 100%;
  height: 0.9rem;
  padding: 0.15rem 0;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
}

.skip p {
  width: 6.9rem;
  height: 0.9rem;
  line-height: 0.9rem;
  text-align: center;
  margin: 0 auto;
  font-size: 0.3rem;
  color: #FF4040;
  border-radius: 0.04rem;
  border: 1px solid #FF4040;
}
</style>

<template>
<div class="equity-trading">
  <div class="block curve">
    <div class="title">
      <span class="red-block"></span>
      <h2>{{stockname}}融资融券余额历史走势</h2>
      <p class="title-time" v-if="curveTime">({{curveTime}})</p>
    </div>
    <div id="curve" style="width:100%;height:3.53rem;"></div>
  </div>
  <div class="block detail">
    <div class="title">
      <span class="red-block"></span>
      <h2>数据明细</h2>
    </div>
    <div class="detail-content">
      <div class="detail-title">
        <ul class="detail-title-lists">
          <li class="time">时间</li>
          <li data-index='0' @click="clickSort($event)" style="width:1.4rem;" class="desc">融资净买入<span></span></li>
          <li data-index='1' @click="clickSort($event)" style="width:1.73rem;">融资买入<span></span></li>
          <li data-index='2' @click="clickSort($event)" style="width:1.73rem;">融券卖出<span></span></li>
        </ul>
      </div>
      <ul class="detail-lists" v-if="detailList">
        <li v-for="item in detailList">
          <p style="width:2.04rem">{{item.date}}</p>
          <span :class="addcolor(item.netBuyVal)" style="width:1.4rem;">{{item.netBuyVal | convert2}}</span>
          <span style="width:1.73rem;">{{item.buyVal | convert2}}</span>
          <span style="width:1.73rem;">{{item.sellVal | convert2}}</span>
        </li>
      </ul>
      <div class="detail-more">
        <h3 v-if="detailDataFlag===true" @click="inquireMore()">查看更多数据项 ></h3>
        <h4 v-if="detailDataFlag===false">没有更多数据了</h4>
      </div>
    </div>
  </div>

  <div class="skip">
    <p @click="toStock">点击查看个股详情</p>
  </div>
</div>
</template>

<script>
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
import 'whatwg-fetch'
var echarts = require('echarts')


export default {
  data() {
    return {
      stockcode: this.getQueryString('stockcode'),
      stockname: this.getQueryString('stockname', 'chinese'),
      curveTime: '',
      curveList: [],
      detailList: [],
      day: '1', // 1,5,10
      sortcol: '0', // 0=净买入，1=买入，2=卖出
      sortt: '0', // 0=降序，1=升序
      pn: '1', // 页码
      ps: '20', // 每页条数
      detailDataFlag: true // 1 有数据 0无数据
    }
  },
  beforecreated() {

  },
  created() {
    document.title = this.stockname + '_融资融券'
  },
  mounted() {
    this.getCurveList()
    this.getDetailList()

  },
  filters: {
    convert2(d) {
      if (d / 100000000 >= 1 || d / 100000000 <= -1) {
        return (d / 100000000).toFixed(2) + '亿'
      } else {
        return (d / 10000).toFixed(2) + '万'
      }
    }
  },
  methods: {
    toStock() {
      var stockCode = this.stockcode
      let market = '';
      if ((stockCode.slice(0, 3) === '000') || (stockCode.slice(0, 3) === '002') || (stockCode.slice(0, 3) === '300')) {
        market = 'sz'
      } else {
        market = 'sh'
      }
      if (window.jrj && window.jrj.jsCallNative) {
        window.jrj.jsCallNative(100, JSON.stringify({
          stockCode: stockCode,
          stockMarket: market
        }))
      }
    },
    insertEchart() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('curve'));

      var data = this.curveList;
      var dataX = [];
      var dataY = [];
      for (var i = 0; i < data.length; i++) {
        dataX.push(data[i].date)
        dataY.push(data[i].marginBalance)
      }
      var interval = dataY.length - 2
      var option = {
        grid: {
          top: '18%',
          left: '10%',
          right: '20%',
          bottom: '20%'
        },
        tooltip: {
          show: false
        },
        xAxis: {
          type: 'category',
          data: dataX,
          min: function(d) {
            return d.min
          },
          max: function(d) {
            return d.max
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(219,219,219,1)'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            // show:false,
            interval: interval,
            margin: 15,
            showMinLabel: true,
            showMaxLabel: true,
            color: 'rgba(170,170,170,1)',
            align: 'center'
          }
        },
        yAxis: {
          type: 'value',
          position: 'right',
          boundaryGap: ['10%', '10%'],
          scale: true,
          splitNumber: 2,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            margin: 20,
            formatter: function(d) {
              if (d / 100000000 >= 1 || d / 100000000 <= -1) {
                return (d / 100000000) + '亿'
              } else {
                return (d / 10000) + '万'
              }
            },
            color: 'rgba(170,170,170,1)'
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(219,219,219,1)',
              type: 'dotted'
            }
          }

        },
        series: [{
          type: 'line',
          smooth: true,
          symbol: 'none',
          sampling: 'average',
          itemStyle: {
            normal: {
              color: 'rgba(80,188,253,1)'
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(80,188,253,0.6)'
              }, {
                offset: 1,
                color: 'rgba(80,188,253,0)'
              }])
            }
          },
          data: dataY
        }]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    getQueryString(name, chinese) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
      var r = window.location.search.substr(1).match(reg)
      if (chinese) {
        if (r != null) return decodeURI(r[2])
      } else {
        if (r != null) return unescape(r[2])
      }
      return null
    },
    addcolor(v) {
      if ((v + '').indexOf('-') !== -1) {
        return 'green'
      } else {
        return 'red'
      }
    },
    clickSort(e) {
      // if (this.sortcolumn === v.currentTarget.getAttribute('data-index')) {
      if (this.sortcol === e.currentTarget.getAttribute('data-index')) {
        if (this.sortt === '0') {
          this.sortt = '1'
          e.currentTarget.setAttribute('class', 'asce')
        } else {
          this.sortt = '0'
          e.currentTarget.setAttribute('class', 'desc')
        }
      } else {
        this.sortcol = e.currentTarget.getAttribute('data-index')
        this.sortt = '0'
        $('.detail-title-lists li').removeClass('desc').removeClass('asce')
        e.currentTarget.setAttribute('class', 'desc')
      }
      this.pn = 1
      this.getDetailList()
    },
    inquireMore() {
      this.pn++
        var url = 'https://sslapi.jrj.com.cn/zxhq/sapi/margin_trading/detail/stock'
      url = url + '?stockcode=' + this.stockcode + '&sort_col=' + this.sortcol + '&sort=' + this.sortt + '&pn=' + this.pn + '&ps=' + this.ps
      console.log(url)
      fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
      }).then(res => {
        return res.json()
      }).then(v => {
        if (v.data.items.length === 0) {
          this.detailDataFlag = false
        } else {
          this.detailList = this.detailList.concat(v.data.items)
          if (v.data.items.length < this.ps) {
            this.detailDataFlag = false
          } else {
            this.detailDataFlag = true
          }
        }
      }).catch(v2 => {
        console.log(v2)
      })
    },
    getCurveList() {
      var url = 'https://sslapi.jrj.com.cn/zxhq/sapi/margin_trading/balance/stock?stockcode=' + this.stockcode
      fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
      }).then(res => {
        return res.json()
      }).then(v => {
        this.curveList = v.data.list
        this.curveTime = v.data.date
        this.insertEchart()
      }).catch(v2 => {
        console.log(v2)
      })
    },
    getDetailList() {
      var url = 'https://sslapi.jrj.com.cn/zxhq/sapi/margin_trading/detail/stock'
      url = url + '?stockcode=' + this.stockcode + '&sort_col=' + this.sortcol + '&sort=' + this.sortt + '&pn=' + this.pn + '&ps=' + this.ps
      console.log(url)
      fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
      }).then(res => {
        return res.json()
      }).then(v => {
        if (v.data.items.length === 0) {
          this.detailDataFlag = false
        } else {
          this.detailList = v.data.items
          if (v.data.items.length < this.ps) {
            this.detailDataFlag = false
          } else {
            this.detailDataFlag = true
          }
        }
      }).catch(v2 => {
        console.log(v2)
      })
    }
  }
}
</script>
