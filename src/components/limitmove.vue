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
  width:18.2rem;
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
</style>

<template>
	<div class="limitmove">
    <div class="title-tab">
      <div class="title-item active">
        涨跌停强度
        <span></span>
      </div>
      <div class="title-item">
        昨板今均
        <span></span>
      </div>
      <div class="title-item">
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
      <div class="active">
        涨停强度
      </div>
      <div>
        跌停强度
      </div>
    </div>

    <div class="limitmove-lists" v-if="limitList">
      <div class="lists-left">
        <div class="lists-title">
          股票名称
        </div>
        <ul class="lists-con">
          <li v-for="item in limitList">
            <h6>{{item[1]}}</h6>
            <p>{{item[0]}}</p>
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
            <p style="width:1.77rem">封单金额(万元)</p>
            <p style="width:1.77rem">涨停类型</p>
            <p style="width:1.77rem">第一次涨停时间</p>
            <p style="width:1.87rem">最后一次涨停时间</p>
            <p style="width:1.52rem">打开次数</p>
            <p style="width:1.52rem">是否连续涨停</p>
            <p style="width:1.52rem; padding-right:0.5rem;">连续涨停次数</p>
          </div>
          <ul class="lists-con">
            <li v-for="item in limitList">
                <span style="width:1.3rem">{{item[2]}}</span>
                <span style="width:1.74rem">{{item[3].toFixed(2)}}%</span>
                <span style="width:1.48rem">{{item[11].toFixed(0)}}</span>
                <span style="width:1.44rem">{{item[6]/item[2]}} </span>
                <span style="width:1.77rem">{{item[6] | covert6}}</span>
                <span style="width:1.77rem">自然涨停</span>
                <span style="width:1.77rem">{{item[8]}}</span>
                <span style="width:1.87rem">{{item[7]}}</span>
                <span style="width:1.52rem">{{item[9]}}</span>
                <span style="width:1.52rem">是</span>
                <span style="width:1.52rem; padding-right:0.5rem;">{{item[9]+1}}</span>
            </li>
          </ul>
        </div>

      </div>
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
      limitList:[]
    }
  },
  beforecreated () {

  },
  created () {
    document.title = '涨停追击'
  },
  mounted () {
    this.getlimitAddNum()
    this.getNaturelimitUp()
    this.getNaturelimitdown()
    this.getYzlimitUp()
    this.getYzlimitDown()
    this.getGraphData()
    this.getLimitUpList()
    // this.getLimitDownList()
  },
  filters: {
    covert6 (d) {
      return (d/10000).toFixed(2)
  	}
  },
  methods: {
    insertEchart(){
      var myChart = echarts.init(document.getElementById('graph'));
      var data= this.graphData;
      var dataX=[];
      var dataYup=[];
      var dataYdown=[];
      for (var i = 0; i < data.length; i++) {
        dataX.push(data[i][0])
        dataYup.push(data[i][1])
        dataYdown.push(data[i][2])
      }
      var option = {
          grid:{
    				top:'14%',
    				left:'10%',
    				right:'4%',
    				bottom:'14%'
    			},
          tooltip: {
              trigger: 'axis'
          },
          xAxis: {
              type: 'category',
              data: dataX,
              interval: 3,
              axisLine:{
  		        	lineStyle:{
  		        		color:'rgba(219,219,219,1)'
  		        	}
  		        },
  		        axisTick:{
  		        	show:false
  		        },
  		        axisLabel:{
  		        	interval:50,
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
      myChart.setOption(option);

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
            // console.log(this.graphData)
          }
        },
        error:function(){
          console.log('error');
        }
      })
    },
    getLimitUpList(){
      var date=new Date();
      console.log(date)
      $.ajax({
        url:'http://home.flashdata2.jrj.com.cn/limitStatistic/ztForce/20171205.js',
        type:'get',
        cache:false,
        dataType:'script',
        jsonp:'callback',
        success:() => {
          if ( window.yzb_ztForce ) {
            this.limitList = window.yzb_ztForce.Data
            console.log(window.yzb_ztForce.column)
            console.log(this.limitList)
          }
        },
        error:function(){
          console.log('error');
        }
      })
    },
    getLimitDownList(){
      $.ajax({
        url:'http://home.flashdata2.jrj.com.cn/limitStatistic/dtForce/20171205.js',
        type:'get',
        cache:false,
        dataType:'script',
        jsonp:'callback',
        success:() => {
          if ( window.yzb_dtForce ) {
            this.limitList = window.yzb_dtForce.Data
            console.log(this.limitList)
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
