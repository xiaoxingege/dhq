<style>
.limit-graph2 {
  background: #fff;
  font-size: 0.28rem;
  padding-top: 0.4rem;
}

.summary2 {
  box-sizing: border-box;
  padding: 0.5rem 0.23rem 0.23rem;
  overflow: hidden;
}

.summary2 li {
  float: left;
  width: 50%;
  padding-left: 0.57rem;
  box-sizing: border-box;
}

.summary2 li p {
  margin-bottom: 0.12rem;
  height: 0.4rem;
  line-height: 0.4rem;
  color: #888;
  font-size: 0.28rem;
  text-align: left;
}

.summary2 li p span {
  color: #333;
}
</style>

<template>
<!-- Swiper -->
<div class="limit-graph2">
  <div id="graph2" style="width:100%;height:2.97rem;"></div>
  <ul class="summary2">
    <li>
      <p>涨停家数：<span>{{up}}</span></p>
      <p>涨幅大于5%：<span>{{up5}}</span></p>
    </li>
    <li>
      <p>跌停家数：<span>{{down}}</span></p>
      <p>跌幅小于5%：<span>{{down5}}</span></p>
    </li>
  </ul>
</div>
</template>
<script>
import 'whatwg-fetch'
import echarts from 'echarts'

export default {
  data() {
    return {
      graphData: [],
      option2: null,
      myChart2: null,
      up: 0,
      down: 0,
      up5: 0,
      down5: 0
    }
  },
  mounted() {
    var _this = this
    this.fetchNewsData()
    this.getlimitChange()
    setInterval(function() {
      _this.fetchNewsData()
      _this.getlimitChange()
      _this.myChart2.setOption(_this.option2)
    }, 5000)
  },
  filters: {},
  methods: {
    insertEchart() {
      this.myChart2 = echarts.init(document.getElementById('graph2'));
      var data = this.graphData;
      var dataX = [];
      var dataY = [];
      for (var i = 0; i < data.length; i++) {
        dataX.push(data[i].name)
        dataY.push(data[i].stockNum)
      }
      this.option2 = {
        grid: {
          top: '12%',
          left: '0%',
          right: '2%',
          bottom: '20%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: dataX,
          axisLine: {
            lineStyle: {
              color: 'rgba(219,219,219,1)'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            rotate: 45,
            color: 'rgba(136,136,136,1)'
          }
        }],
        yAxis: [{
          type: 'value',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        }],
        series: [{
          name: '个股数量',
          type: 'bar',
          barWidth: '60%',
          itemStyle: {
            normal: {
              show: true,
              position: 'top',
              color: function(params) {
                var colorList = ['#00B267', '#00B267', '#00B267', '#00B267', '#00B267', '#999999', '#F54949', '#F54949', '#F54949', '#F54949', '#F54949']
                return colorList[params.dataIndex]
              }
            }
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              color: 'rgba(51,51,51,1)'
            }
          },
          data: dataY
        }]
      };
      // 使用刚指定的配置项和数据显示图表。
      this.myChart2.setOption(this.option2);

    },
    fetchNewsData() {
      var url = 'https://sslapi.jrj.com.cn/zxhq/sapi/hqindex/query_market_analysis'
      fetch(url, {
        method: 'get',
        mode: 'cors',
        cache: 'default'
      }).then((res) => {
        return res.json()
      }).then(v => {
        this.graphData = v.data.advanceDeclineRatios
        this.insertEchart()
      }).catch(v2 => {
        console.log(v2)
      })
    },
    getlimitChange() {
      $.ajax({
        url: 'https://sslapi.jrj.com.cn/flashdata2/home/limitStatistic/market.js',
        type: 'get',
        cache: false,
        dataType: 'script',
        success: () => {
          if (window.market) {
            this.up = window.market.limitUp
            this.down = window.market.limitDown
            this.up5 = window.market.up5
            this.down5 = window.market.down5
          }
        },
        error: function() {
          console.log('error');
        }
      })
    }

  }
}
</script>
