<style>
@import '../assets/css/reset.css';
.yestoday{

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
	padding:0.35rem 0.3rem 0.32rem;
}
.hint1{
	font-size: 0.24rem;
	color:#aaa;
	height: 0.33rem;
	line-height: 0.33rem;
}
.hint2{
	font-size:0.28rem;
	color:#333;
	height:0.4rem;
	line-height: 0.4rem;
	margin-top:0.34rem;
}
.hint3{
	overflow: hidden;
	margin-top:0.2rem;
}
.hint3  p{
	width:33.3%;
	float: left;
	text-align: center;
	font-size:0.28rem;
	color:#333;
}
.hint3  p span{
	/*float: left;*/
}
.hint3  p span.red{
	color:#F54949;
}
.hint3  p span.green{
	color:#00B267;
}

.hint3  .tongbi span{

}
.hint3  .tongbi span.red{
	color:#F54949;
}
.hint3  .tongbi span.green{
	color:#00B267;
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
  width:15.8rem;
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
</style>

<template>
	<div class="yestoday">
		<div class="title-tab">
      <div class="title-item">
        涨跌停强度
        <span></span>
      </div>
      <div class="title-item active">
        昨板今均
        <span></span>
      </div>
      <div class="title-item">
        市场热度
        <span></span>
      </div>
    </div>

		<div class="summary">
			<p class="hint1">*昨板今均是指昨日涨停股票今日涨跌幅的平均表现</p>
			<p class="hint2">赚钱效应{{benefit}}</p>
			<div class="hint3">
				<p>
					今日：<span class="red">{{yestoday}}%</span>
				</p>
				<p>
					昨日：<span class="green">{{today}}%</span>
				</p>
				<p class="tongbi">
					同比：<span>|</span><span class="green">{{tongbi}}%</span>
				</p>
			</div>
		</div>

		<!-- <div class="graph"></div> -->
		<div id="curve" style="width:100%;height:4.4rem;"></div>
		<div class="limitmove-lists" v-if="lists">
      <div class="lists-left">
        <div class="lists-title">
          股票名称
        </div>
        <ul class="lists-con">
          <li v-for="item in lists">
            <h6>{{item[2]}}</h6>
            <p>{{item[1]}}</p>
          </li>
        </ul>
      </div>
      <div class="lists-right">
        <div class="lists-right-container">

          <div class="lists-title">
            <p style="width:1.3rem">最新价</p>
            <p style="width:1.74rem">开盘涨跌</p>
            <p style="width:1.74rem">今日涨幅</p>
            <p style="width:1.74rem">今日最高</p>
            <p style="width:1.74rem">今日最低</p>
						<p style="width:1.77rem">是否连续涨停</p>
						<p style="width:1.77rem;">连续涨停次数</p>
            <p style="width:1.77rem">昨日涨停强度</p>
            <p style="width:1.87rem;padding-right:0.3rem;">今日涨停强度</p>
          </div>
          <ul class="lists-con">
            <li v-for="item in lists">
                <span style="width:1.3rem">{{item[14].toFixed(2)}}</span>
                <span style="width:1.74rem">{{(item[16]*100).toFixed(2)}}%</span>
                <span style="width:1.74rem">{{item[5]}}%</span>
                <span style="width:1.74rem">{{(item[6]*100).toFixed(2)}}%</span>
                <span style="width:1.74rem">{{(item[7]*100).toFixed(2)}}%</span>
                <span style="width:1.77rem">{{item[8]===1? '是':'否'}}</span>
                <span style="width:1.77rem">{{item[9]}}</span>
                <span style="width:1.77rem">{{item[10].toFixed(2)}}</span>
                <span style="width:1.87rem;padding-right:0.3rem;">{{item[11]| conver9}}</span>
            </li>
          </ul>
        </div>

      </div>
    </div>


	</div>
</template>

<script>
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
import echarts from 'echarts'

export default {
  data () {
    return {
			yestoday:0,
			today:0,
			tongbi:0,
			benefit:'',
			graph:[],
			lists:[]
    }
  },
  beforecreated () {

  },
  created () {
    document.title = '涨停追击'
  },
  mounted () {
		this.getbenefit()
		this.getlist()
		// this.getsummaryData()
  },
  filters: {
		conver9(d){
			if (d===0) {
				return '--'
			} else {
				return d.toFixed(2)
			}
		}
  },
  methods: {
		insertEchart(){
  		// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('curve'));

				var data=this.graph;
				var dataX=[];
				var dataY=[];
				for (var i = 0; i < data.length; i++) {
					dataX.push(data[i][0])
					dataY.push(data[i][1])
				}
				var interval=dataY.length-2
				var option = {
					grid:{
						top:'5%',
						left:'5%',
						right:'15%',
						bottom:'20%'
					},
				    tooltip: {
				        trigger: 'axis',
				        position: function (pt) {
				            return [pt[0], '10%'];
				        }
				    },
				    xAxis: {
				        type: 'category',
				        data: dataX,
				        min:function(d){
				        	return d.min
				        },
				        max:function(d){
				        	return d.max
				        },
				        axisLine:{
				        	lineStyle:{
				        		color:'rgba(219,219,219,1)'
				        	}
				        },
				        axisTick:{
				        	show:false
				        },
				        axisLabel:{
				        	// show:false,
				        	interval:interval,
				        	margin:15,
				        	showMinLabel:true,
				        	showMaxLabel:true,
				        	color:'rgba(170,170,170,1)',
				        	align:'center'
				        }
				    },
				    yAxis: {
				        type: 'value',
				        position:'right',
				        boundaryGap: ['10%', '10%'],
				        scale:true,
				        splitNumber:2,
				        axisLine:{
				        	show:false
				        },
				        axisTick:{
				        	show:false
				        },
				        axisLabel:{
				        	margin:10,
				        	formatter: function (d) {
									   return d.toFixed(2)+'%'
									},
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
				            type:'line',
				            smooth:true,
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
				        }
				    ]
				};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
  	},
		// 获取赚钱效益 结果
		getbenefit(){
			$.ajax({
        url:'http://hqdata.jrj.com.cn/zrztjrbx/min_performance.js',
        type:'get',
        cache:false,
        dataType:'script',
        jsonp:'callback',
        success:() => {
          if ( window.min_performance ) {
						if (window.min_performance.Data.length===0) {
							this.graph=[]
							this.benefit=''
						}else{
							this.graph=window.min_performance.Data
							console.log(this.graph)
							this.insertEchart()
							var len=window.min_performance.Data.length
							var benefit=window.min_performance.Data[len-1][1]
							if (benefit>=5) {
								this.benefit='爆棚'
							}else if (benefit>=3){
								this.benefit='强'
							}else if(benefit>=0){
								this.benefit='弱'
							}else if (benefit>=-3){
								this.benefit='差'
							}else if(benefit>=-5){
								this.benefit='资金被套'
							}else{
								this.benefit='被坑杀'
							}
						}
          }
        },
        error:function(){
          console.log('error');
        }
      })
		},
		// 获取今日、昨日、同比 数据
		getsummaryData(){
      $.ajax({
        url:'https://sslapi.jrj.com.cn/zxhq/sapi/datacenter/query_up_down_limit_ana',
        type:'get',
        cache:false,
        dataType:'json',
        success:(d) => {
          if (d.retcode === 0) {
            if (d.data) {
							this.yestoday=d.data.todayRatio
							this.today=d.data.lastDayRatio
							this.tongbi=d.data.percent
            }
          }else{
            console.log(d.msg)
          }
        },
        error:function(){
          console.log('error');
        }
      })
		},
		// 获取涨跌停列表
		getlist(){
			$.ajax({
        url:'http://hqdata.jrj.com.cn/zrztjrbx/limitup.js',
        type:'get',
        cache:false,
        dataType:'script',
        jsonp:'callback',
        success:() => {
          if ( window.stock_performance ) {
						if (window.stock_performance.Data.length===0) {
							this.lists=[]
						}else{
							this.lists=window.stock_performance.Data
						}
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
