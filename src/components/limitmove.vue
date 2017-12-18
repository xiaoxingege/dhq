<style>
@import '../assets/css/reset.css';
.limitmove{

}
.title-tab{
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom:0.01rem solid #DBDBDB;
}
.title-tab{
  overflow: hidden;
}
.title-item{
  text-align: center;
  font-size: 0.28rem;
  color:#333;
  float: left;
  width:2.5rem;
  position: relative;
}
.title-item.active{
  color:#F54949;
}
.title-item.active span{
  display: block;
  width:0.5rem;
  height: 0.04rem;
  background: #F54949 ;
  position: absolute;
  bottom:0;
  left:50%;
  margin-left:-0.25rem;
}

.summary{
  height: 1.44rem;
  box-sizing:border-box;
  overflow: hidden;
  padding-top:0.44rem;
}
.summary-item{
  box-sizing: border-box;
  width:50%;
  float:left;
  padding-left:0.3rem;
}
.summary-top{
  height: 0.4rem;
  line-height: 0.4rem;
  overflow: hidden;
}
.summary-top span{
  width:0.12rem;
  height: 0.12rem;
  float: left;
  margin:0.14rem 0.2rem 0.14rem 0;
}
.up .summary-top span{
  background:#F54949;
}
.down .summary-top span{
  background:#00B267;
}
.summary-top p{
  float: left;
  font-size: 0.28rem;
  color:#333;
  line-height: 0.4rem;
}
.summary-bottom{
  margin-top:0.16rem;
  overflow: hidden;
}
.summary-bottom P{
  float: left;
}
.summary-bottom P span{
  float: left;
  font-size: 0.24rem;
  color:#888;
  margin-right: 0.24rem;
}
.summary-bottom P .num{
  float: left;
}
.up .summary-bottom P .num{
  color:#F54949;
}
.down .summary-bottom P .num{
  color:#00B267;
}

.graph{
  height:3.9rem;
  background: #ccc;
}

.limitmove-tab{
  width:3.9rem;
  height: 0.6rem;
  margin:0.41rem auto 0.32rem;
  border-radius: 0.04rem;
  overflow:hidden;
  border:0.01rem solid #F54949;

}
.limitmove-tab div{
  float: left;
  width:50%;
  height: 0.6rem;
  box-sizing: border-box;
  line-height: 0.6rem;
  font-size:0.28rem;
  text-align: center;
  color:#F54949;
  cursor:pointer;
}
.limitmove-tab div.active{
  background: #F54949;
  color:#fff;
}

.limitmove-lists{
  width:100%;
  background: #fff;
  overflow: hidden;
  position:relative;
}
.lists-left{
  float: left;
  width:1.7rem;
}
.lists-right{
  float: left;
  width:5.8rem;
  overflow-x: auto;
}

.lists-title{
  height: 0.6rem;
  line-height: 0.6rem;
  color:rgba(136,136,136,1);
  font-size:0.26rem;
  border-bottom:0.01rem solid rgba(230,230,230,1);
}
.lists-left .lists-title{
  padding-left: 0.3rem;
  text-align: left;
}

.lists-con{

}
.lists-con li{
  height: 1rem;
  font-size: 0.28rem;
  color:rgba(51,51,51,1);
  border-bottom: 0.01rem solid rgba(230,230,230,1);
}
.lists-left .lists-con li{
  padding-left:0.3rem;
  text-align:left;
  height: 1rem;
}
.lists-right .lists-con li{
  overflow: hidden;
  line-height: 1rem;
}
.lists-left .lists-con li h6{
  height: 0.32rem;
  font-size: 0.32rem;
  color:#333333;
  padding-top:0.2rem;
}
.lists-left .lists-con li p{
  height: 0.22rem;
  font-size: 0.22rem;
  color:#AAAAAA;
  padding-top:0.1rem;
}
.lists-right-container{
  width:18.7rem;
}
.lists-right .lists-title{
  overflow: hidden;
}
.lists-right .lists-title P{
  float: left;
  text-align: right;
}
.lists-right .lists-con{

}
.lists-right .lists-con li span{
  float: left;
  text-align: right;
}
.lists-right .lists-con li span.red{
  color:#F54949;
}
.lists-right .lists-con li span.green{
  color:#00B267;
}
.dataEmpty{
	height: 1rem;
	line-height: 1rem;
	font-size: 0.28rem;
	color:#aaa;
	text-align: center;
}
</style>

<template>
	<div class="limitmove">
    <div class="title-tab">
      <div class="title-item active" onclick="window.location.href='http://itougu.jrj.com.cn/h5/limitmove'">
        涨跌停强度
        <span></span>
      </div>
      <div class="title-item" onclick="window.location.href='http://itougu.jrj.com.cn/h5/yestoday'">
        昨板今均
        <span></span>
      </div>
      <div class="title-item" onclick="window.location.href='http://itougu.jrj.com.cn/h5/marketheat'">
        市场热度
        <span></span>
      </div>
    </div>

    <div id="graph" style="width:100%;height:3.9rem;"></div>

    <div class="summary">
      <div class="summary-item up">
        <div class="summary-top">
          <span></span>
          <p>涨停家数：{{limitUp}}</p>
        </div>
        <div class="summary-bottom">
          <p>
              <span>自然涨停</span><span class="num">{{naturelimitUp}}</span>
          </p>
          <p>
              <span>一字涨停</span><span class="num">{{yzlimitUp}}</span>
          </p>
        </div>
      </div>

      <div class="summary-item down">
        <div class="summary-top">
          <span></span>
          <p>跌停家数：{{limitDown}}</p>
        </div>
        <div class="summary-bottom">
          <p>
              <span>自然跌停</span><span class="num">{{naturelimitDown}}</span>
          </p>
          <p>
              <span>一字跌停</span><span class="num">{{yzlimitDown}}</span>
          </p>
        </div>
      </div>

    </div>

    <div class="limitmove-tab">
      <div :class="{active:clickActive}" @click="limitUpClick()">
        涨停强度
      </div>
      <div :class="{active:!clickActive}" @click="limitDownClick()">
        跌停强度
      </div>
    </div>

    <div class="limitmove-lists" v-if="limitList">
      <div class="lists-left">
        <div class="lists-title">
          股票名称
        </div>
        <ul class="lists-con">
          <li v-for="item in limitList" @click="toStock(item)">
            <h6>{{item.stockname}}</h6>
            <p>{{item.stockcode}}</p>
          </li>
        </ul>
      </div>
      <div class="lists-right">
        <div class="lists-right-container">

          <div class="lists-title">
            <p style="width:1.3rem">最新价</p>
            <p style="width:1.74rem">涨跌幅</p>
            <p style="width:1.48rem">涨停强度</p>
            <p style="width:1.44rem">封单手数</p>
            <p style="width:1.77rem">封单金额</p>
            <p style="width:1.77rem">涨停类型</p>
            <p style="width:1.97rem">第一次涨停时间</p>
            <p style="width:2.17rem">最后一次涨停时间</p>
            <p style="width:1.52rem">打开次数</p>
            <p style="width:1.52rem">是否连续涨停</p>
            <p style="width:1.52rem; padding-right:0.5rem;">连续涨停次数</p>
          </div>
          <ul class="lists-con">
            <li v-for="item in limitList" @click="toStock(item)">
                <span :class="addcolor(item.nowPrice)" style="width:1.3rem">{{item.nowPrice.toFixed(2)}}</span>
                <span :class="addcolor(item.priceLimit)" style="width:1.74rem">{{item.priceLimit.toFixed(2)}}%</span>
                <span style="width:1.48rem">{{item.force.toFixed(0)}}</span>
                <span style="width:1.44rem">{{item.fdHands | convert}} </span>
                <span style="width:1.77rem">{{item.fdMoney | convert}}</span>
                <span style="width:1.77rem">{{item.type}}</span>
                <span style="width:1.97rem">{{item.firstZtTime}}</span>
                <span style="width:2.17rem">{{item.lastZtTime}}</span>
                <span style="width:1.52rem">{{item.opentime}}</span>
                <span style="width:1.52rem">{{item.continueUpDown}}</span>
                <span style="width:1.52rem; padding-right:0.5rem;">{{item.continueUpDownTimes}}</span>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <div v-if="limitList.length === 0" class="dataEmpty">
			暂无数据
		</div>

	</div>
</template>

<script>
import jQuery from 'jquery'
window.jQuery =  window.$ = jQuery
import echarts from 'echarts'

export default {
  data () {
    return {
      limitUp:0,
      limitDown:0,
      naturelimitUp:0,
      naturelimitDown:0,
      yzlimitUp:0,
      yzlimitDown:0,
      graphData:[],
      limitType:1,
      limitList:[],
      clickActive:true,
      option:null,
      myChart:null
    }
  },
  beforecreated () {

  },
  created () {
    document.title = '涨停追击'
  },
  mounted () {
    var _this=this
    this.loading()
    setInterval(function(){
      _this.loading()
      _this.myChart.setOption(_this.option);
    },5000)
  },
  filters: {
    convert (d) {
    	if (d/100000000>=1 || d/100000000<=-1) {
    		return (d / 100000000).toFixed(2) + '亿'
    	}else if(d/100000>=1 || d/100000<=-1){
    		return (d / 10000).toFixed(2) + '万'
    	}else{
    		return d
    	}
    }
  },
  methods: {
    loading(){
      this.getlimitAddNum()
      this.getNaturelimitUp()
      this.getNaturelimitdown()
      this.getYzlimitUp()
      this.getYzlimitDown()
      this.getGraphData()
      this.getLimitList()
    },
    addcolor (v) {
      if ((v + '').indexOf('-') !== -1) {
        return 'green'
      } else if(v===0){
        return ''
      }else{
      	return 'red'
      }
    },
    toStock(item){
				var stockCode=item.stockcode
				let market = '';
				if((stockCode.slice(0,3) === '000') || (stockCode.slice(0,3) === '002') || (stockCode.slice(0,3) === '300')){
						market = 'sz'
				}else {
						market = 'sh'
				}
				if (window.jrj && window.jrj.jsCallNative) {
						window.jrj.jsCallNative(100, JSON.stringify({
							stockCode:stockCode,
							stockMarket:market
						}))
				}
		},
    limitUpClick(){
      this.clickActive=true
      this.limitType=1
      this.getLimitList()
    },
    limitDownClick(){
      this.clickActive=false
      this.limitType=2
      this.getLimitList()
    },
    insertEchart(){
      this.myChart = echarts.init(document.getElementById('graph'));
      var data= this.graphData;
      var dataX=['9:25','9:26','9:27','9:28','9:29','9:30','9:31','9:32','9:33','9:34','9:35','9:36','9:37','9:38','9:39','9:40','9:41','9:42','9:43','9:44','9:45','9:46','9:47','9:48','9:49','9:50','9:51','9:52','9:53','9:54','9:55','9:56','9:57','9:58','9:59','10:00','10:01','10:02','10:03','10:04','10:05','10:06','10:07','10:08','10:09','10:10','10:11','10:12','10:13','10:14','10:15','10:16','10:17','10:10','10:19','10:20','10:21','10:22','10:23','10:24','10:25','10:30','10:27','10:28','10:29','10:30','10:31','10:32','10:33','10:34','10:35','10:36','10:37','10:38','10:39','10:40','10:41','10:42','10:43','10:44','10:45','10:46','10:47','10:48','10:49','10:50','10:51','10:52','10:53','10:54','10:55','10:56','10:57','10:58','10:59','11:00','11:01','11:02','11:03','11:04','11:05','11:06','10:30','11:08','11:09','11:10','11:11','11:12','11:13','11:14','11:15','11:16','11:17','11:18','11:19','11:20','11:21','11:22','11:23','11:24','11:25','11:26','11:30/13:00','11:28','11:29','11:30/13:00','13:00','13:01','13:02','13:03','13:04','13:05','13:06','13:07','13:08','13:09','13:10','13:11','13:12','13:13','13:14','13:15','13:16','13:17','13:18','13:19','13:20','13:21','13:22','13:23','13:24','13:25','13:26','13:27','13:28','13:29','13:30','13:31','13:32','13:33','13:34','13:35','13:36','13:37','13:38','13:39','13:40','13:41','13:42','13:43','13:44','13:45','13:46','13:47','13:48','13:49','13:50','13:51','13:52','13:53','13:54','13:55','13:56','14:00','13:58','13:59','14:00','14:01','14:02','14:03','14:04','14:05','14:06','14:07','14:08','14:09','14:10','14:11','14:12','14:13','14:14','14:15','14:16','14:17','14:18','14:19','14:20','14:21','14:22','14:23','14:24','14:25','14:26','14:27','14:28','14:29','14:30','14:31','14:32','14:33','14:34','14:35','14:36','14:37','14:38','14:39','14:40','14:41','14:42','14:43','14:44','14:45','14:46','14:47','14:48','14:49','14:50','14:51','14:52','14:53','14:54','14:55','14:56','14:57','14:58','14:59','15:00'];

      var dataYup=[];
      var dataYdown=[];
      for (var i = 0; i < data.length; i++) {

        dataYup.push(data[i][1])
        dataYdown.push(data[i][2])
      }
      this.option = {
          grid:{
    				top:'14%',
    				left:'10%',
    				right:'4%',
    				bottom:'14%'
    			},
          tooltip: {
              show:false
          },
          xAxis: {
              type: 'category',
              data: dataX,
              interval: 2,
              axisLine:{
  		        	lineStyle:{
  		        		color:'rgba(219,219,219,1)'
  		        	}
  		        },
  		        axisTick:{
  		        	show:false
  		        },
  		        axisLabel:{
  		        	interval:60,
  		        	margin:10,
  		        	showMinLabel:true,
  		        	showMaxLabel:true,
  		        	color:'rgba(170,170,170,1)',
  		        	align:'center'
  		        }
          },
          yAxis: {
              type: 'value',
              position:'left',
  		        boundaryGap: ['1%', '2%'],
              scale:true,
  		        splitNumber:2,
              axisLine:{
  		        	show:false
  		        },
              axisTick:{
  		        	show:false
  		        },
              axisLabel:{
  		        	margin:8,
  					    color:'rgba(170,170,170,1)'
  		        },
              splitLine:{
  		        	lineStyle:{
  		        		color:'rgba(219,219,219,1)',
  		        		type:'dotted'
  		        	}
  		        }
          },
          series: [
              {
                  name:'涨停数',
                  type:'line',
                  showSymbol:false,
                  hoverAnimation:false,
                  lineStyle:{
                    normal:{
                      color:{
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(245,73,73,1)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(245,73,73,1)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                      }
                    }
                  },
                  data:dataYup
              },
              {
                  name:'跌停数',
                  type:'line',
                  showSymbol:false,
                  lineStyle:{
                    normal:{
                      color:{
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(0,178,103,1)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(0,178,103,1)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                      }
                    }
                  },
                  data:dataYdown
              }
          ]
      };
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(this.option);

    },
    getlimitAddNum(){
      $.ajax({
        url:'http://home.flashdata2.jrj.com.cn/limitStatistic/market.js',
        type:'get',
        cache:false,
        dataType:'script',
        jsonp:'callback',
        success:() => {
          if ( window.market ) {
            this.limitUp = window.market.limitUp
            this.limitDown = window.market.limitDown
          }
        },
        error:function(){
          console.log('error');
        }
      })
    },
    getNaturelimitUp(){
      $.ajax({
        url:'http://home.flashdata2.jrj.com.cn/limitStatistic/zt_all.js',
        type:'get',
        cache:false,
        dataType:'script',
        jsonp:'callback',
        success:() => {
          if ( window.zr_zt ) {
            this.naturelimitUp = window.zr_zt.size
          }
        },
        error:function(){
          console.log('error');
        }
      })
    },
    getNaturelimitdown(){
      $.ajax({
        url:'http://home.flashdata2.jrj.com.cn/limitStatistic/dt_all.js',
        type:'get',
        cache:false,
        dataType:'script',
        jsonp:'callback',
        success:() => {
          if ( window.zr_dt ) {
            this.naturelimitDown = window.zr_dt.size
          }
        },
        error:function(){
          console.log('error');
        }
      })
    },
    getYzlimitUp(){
      $.ajax({
        url:'http://home.flashdata2.jrj.com.cn/limitStatistic/yzbzt.js',
        type:'get',
        cache:false,
        dataType:'script',
        jsonp:'callback',
        success:() => {
          if ( window.yzb_zt ) {
            this.yzlimitUp = window.yzb_zt.size
          }
        },
        error:function(){
          console.log('error');
        }
      })
    },
    getYzlimitDown(){
      $.ajax({
        url:'http://home.flashdata2.jrj.com.cn/limitStatistic/yzbdt.js',
        type:'get',
        cache:false,
        dataType:'script',
        jsonp:'callback',
        success:() => {
          if ( window.yzb_dt ) {
            this.yzlimitDown = window.yzb_dt.size
          }
        },
        error:function(){
          console.log('error');
        }
      })
    },
    getGraphData(){
      $.ajax({
        url:'http://home.flashdata2.jrj.com.cn/limitStatistic/min_and_concept.js',
        type:'get',
        cache:false,
        dataType:'script',
        jsonp:'callback',
        success:() => {
          if ( window.min ) {
            this.graphData = window.min.Data
            this.insertEchart()
          }
        },
        error:function(){
          console.log('error');
        }
      })
    },
    getLimitList(){
      // https://sslapi.jrj.com.cn/zxhq/sapi/datacenter/query_up_down_limit?type=1
      var url='https://sslapi.jrj.com.cn/zxhq/sapi/datacenter/query_up_down_limit?type='+this.limitType
      $.ajax({
        url:url,
        type:'get',
        cache:false,
        dataType:'json',
        success:(d) => {
          if (d.retcode === 0) {
            if (d.data.items.length === 0) {
              this.limitList = []
            }else{
              this.limitList=d.data.items
            }
          }else{
            console.log(d.msg)
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
