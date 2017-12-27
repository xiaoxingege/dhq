<style>
.limit-graph2{
    background: #fff;
    font-size: 0.28rem;
}
.summary{
  padding:0.5rem 0.23rem 0.23rem;
  overflow: hidden;
}
.summary li{
  float: left;
  width:3.52rem;
  padding-left: 0.57rem;
  box-sizing: border-box;
}
.summary li p{
  margin-bottom: 0.12rem;
  height: 0.4rem;
  line-height: 0.4rem;
  color:#888;
  font-size: 0.28rem;
  text-align: left;
}
.summary li p span{
  color:#333;
}
</style>

<template>
<!-- Swiper -->
<div class="limit-graph2">
  <div id="graph" style="width:100%;height:2.97rem;"></div>
  <ul class="summary">
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
  data () {
    return {
      graphData:[],
      option:null,
      myChart:null,
      up:0,
      down:0,
      up5:0,
      down5:0
    }
  },
  mounted () {
    this.fetchNewsData()
    this.getlimitChange()
  },
  filters: {
  },
  methods: {
    insertEchart(){
      this.myChart = echarts.init(document.getElementById('graph'));
      var data = this.graphData;
      var dataX = [];
      var dataY = [];
      var lookRise=[]
      for (var i = 0; i < data.length; i++) {
        dataX.push(data[i].name)
        dataY.push(data[i].stockNum)
        lookRise.push(data[i].lookRise)
      }
      console.log(dataX)
      console.log(dataY)
      console.log(lookRise)
      this.option = {
          color: ['#00B267','#00B267', '#00B267', '#00B267', '#00B267','#999999', '#F54949', '#F54949','#F54949', '#F54949', '#F54949'],
          grid: {
              top: '12%',
              left: '3%',
              right: '4%',
              bottom: '20%',
              containLabel: true
          },
          xAxis : [
              {
                  type : 'category',
                  data : dataX,
                  axisLine: {
                    lineStyle: {
                      color:'rgba(219,219,219,1)'
                    }
                  },
                  axisTick: {
                    show:false
                  },
                  axisLabel: {
                    interval:0,
                    rotate:45,
                    color:'rgba(136,136,136,1)'
                  }
              }
          ],
          yAxis : [
              {
                  type : 'value',
                  axisLine: {
                    show:false
                  },
                  axisTick: {
                    show:false
                  },
                  axisLabel: {
                    show:false
                  },
                  splitLine:{
                    show:false
                  }
              }
          ],
          series : [
              {
                  name:'个股数量',
                  type:'bar',
                  barWidth: '60%',
                  label: {
                      normal: {
                          show: true,
                          position: 'top'
                      }
                  },
                  data:dataY
              }
          ]
      };
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(this.option);

    },
    fetchNewsData () {
      var url='http://172.16.20.86:8031/mockjsdata/17/zxhq/sapi/hqindex/query_market_analysis'
      fetch(url, {
        method:'get',
        mode:'cors',
        cache:'default'
      }).then((res) => {
        return res.json()
      }).then(v => {
        this.graphData=v.data.advanceDeclineRatios
        this.insertEchart()
      }).catch(v2 => {
        console.log(v2)
      })
    },
    getlimitChange(){
      $.ajax({
				 url:'http://home.flashdata2.jrj.com.cn/limitStatistic/market.js',
				 type:'get',
				 cache:false,
				 dataType:'script',
				 success:() => {
					 if ( window.market ) {
             this.up=window.market.limitUp
             this.down=window.market.limitDown
             this.up5=window.market.up5
             this.down5=window.market.down5
					 }
				 },
				 error:function(){
					 console.log('error');
				 }
			 })
    }

  }
}
</script>
