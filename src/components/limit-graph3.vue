<style>
.limit-graph3{
  padding-top: 0.2rem;
}
.summary3{
	padding:0.1rem 0.3rem 0.32rem;
}
.hint2{
	font-size:0.28rem;
	color:#333;
	height:0.5rem;
	line-height: 0.54rem;
  margin-top:0.12rem;
  padding-left:1.69rem;
  background: url('../assets/images/limit-pursuit/zhuanqian.png') left top no-repeat;
  background-size: 1.56rem 0.5rem;
}
.hint3{
	overflow: hidden;
}
.hint3  p{
	width:32%;
  height: 0.4rem;
  line-height: 0.4rem;
  overflow: hidden;
	float: left;
	text-align: center;
	font-size:0.28rem;
	color:#888;
}
.hint3  .tongbi{
  width:36%;
}

.hint3  p span{
	/*float: left;*/
}
.hint3 .left span{
	float: left;
}
.hint3  .tongbi span{
	float: right;
  height: 0.4rem;
  line-height: 0.4rem;
}
.hint3  p span.red{
	color:#F54949;
}
.hint3  p span.green{
	color:#00B267;
}

.hint3  .tongbi em{
	display: none;
	float: right;
	width:0.16rem;
	height: 0.4rem;
}
.hint3  .tongbi em.red{
	display: block;
	background:url('http://i0.jrjimg.cn/optional/yestoday/up.png') left center no-repeat;
	background-size: 0.1rem 0.2rem;
}
.hint3  .tongbi em.green{
	display: block;
	background:url('http://i0.jrjimg.cn/optional/yestoday/down.png') left center no-repeat;
	background-size: 0.1rem 0.2rem;
}
.hint3  .tongbi span.red{
	color:#F54949;
}
.hint3  .tongbi span.green{
	color:#00B267;
}
</style>

<template>
<!-- Swiper -->
<div class="limit-graph3">

  <div id="curve" style="width:100%;height:4.4rem;"></div>

  <div class="summary3">

    <div class="hint3">
      <p class="left">
        <span>今日：</span><span :class="addcolor(yestoday)">{{yestoday}}%</span>
      </p>
      <p>
        昨日：<span :class="addcolor(today)">{{today}}%</span>
      </p>
      <p class="tongbi">
        <span :class="addcolor(tongbi)">{{tongbi}}%</span><em :class="addcolor(tongbi)"></em><span>同比：</span>
      </p>
    </div>
    <p class="hint2">{{benefit}}</p>

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
      option3:null,
      myChart3:null
    }
  },
  mounted () {
    var _this=this
    this.getbenefit()
    this.getsummaryData()
    setInterval(function(){
      _this.getbenefit()
      _this.getsummaryData()
      _this.myChart3.setOption(_this.option3);
    },5000)
  },
  filters: {
  },
  methods: {
    addcolor (v) {
      if ((v + '').indexOf('-') !== -1) {
        return 'green'
      } else if(v===0){
        return ''
      }else{
      	return 'red'
      }
    },
    insertEchart(){
  		// 基于准备好的dom，初始化echarts实例
        this.myChart3 = echarts.init(document.getElementById('curve'));
				var data=this.graph;
				var dataX=['9:30','9:31','9:32','9:33','9:34','9:35','9:36','9:37','9:38','9:39','9:40','9:41','9:42','9:43','9:44','9:45','9:46','9:47','9:48','9:49','9:50','9:51','9:52','9:53','9:54','9:55','9:56','9:57','9:58','9:59','10:00','10:01','10:02','10:03','10:04','10:05','10:06','10:07','10:08','10:09','10:10','10:11','10:12','10:13','10:14','10:15','10:16','10:17','10:18','10:19','10:20','10:21','10:22','10:23','10:24','10:25','10:26','10:27','10:28','10:29','10:30','10:31','10:32','10:33','10:34','10:35','10:36','10:37','10:38','10:39','10:40','10:41','10:42','10:43','10:44','10:45','10:46','10:47','10:48','10:49','10:50','10:51','10:52','10:53','10:54','10:55','10:56','10:57','10:58','10:59','11:00','11:01','11:02','11:03','11:04','11:05','11:06','11:07','11:08','11:09','11:10','11:11','11:12','11:13','11:14','11:15','11:16','11:17','11:18','11:19','11:20','11:21','11:22','11:23','11:24','11:25','11:26','11:27','11:28','11:29','11:30/13:00','13:00','13:01','13:02','13:03','13:04','13:05','13:06','13:07','13:08','13:09','13:10','13:11','13:12','13:13','13:14','13:15','13:16','13:17','13:18','13:19','13:20','13:21','13:22','13:23','13:24','13:25','13:26','13:27','13:28','13:29','13:30','13:31','13:32','13:33','13:34','13:35','13:36','13:37','13:38','13:39','13:40','13:41','13:42','13:43','13:44','13:45','13:46','13:47','13:48','13:49','13:50','13:51','13:52','13:53','13:54','13:55','13:56','13:57','13:58','14:00','14:00','14:01','14:02','14:03','14:04','14:05','14:06','14:07','14:08','14:09','14:10','14:11','14:12','14:13','14:14','14:15','14:16','14:17','14:18','14:19','14:20','14:21','14:22','14:23','14:24','14:25','14:26','14:27','14:28','14:29','14:30','14:31','14:32','14:33','14:34','14:35','14:36','14:37','14:38','14:39','14:40','14:41','14:42','14:43','14:44','14:45','14:46','14:47','14:48','14:49','14:50','14:51','14:52','14:53','14:54','14:55','14:56','14:57','14:58','14:59','15:00'];

        var dataY=[];
				for (var i = 0; i < data.length; i++) {
					dataY.push(data[i][1])
				}

				this.option3 = {
					grid:{
						top:'5%',
						left:'15%',
						right:'6%',
						bottom:'20%'
					},
				    tooltip: {
				        show:false
				    },
				    xAxis: {
				        type: 'category',
				        data: dataX,
				        axisLine:{
				        	lineStyle:{
				        		color:'rgba(219,219,219,1)'
				        	}
				        },
				        axisTick:{
				        	show:false
				        },
				        axisLabel:{
				        	interval:59,
				        	margin:15,
				        	showMinLabel:true,
				        	showMaxLabel:true,
				        	color:'rgba(170,170,170,1)',
				        	align:'center'
				        }
				    },
				    yAxis: {
				        type: 'value',
				        position:'left',
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
        this.myChart3.setOption(this.option3);
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
		}


  }
}
</script>
