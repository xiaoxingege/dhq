<style>
@import '../assets/css/reset.css';
.equity-trading{
	background:rgba(242,242,242,1);
	box-sizing: border-box;
}
.equity-trading .block{
	background:#fff;
	margin-bottom: 0.2rem
}
.title{
	height: 0.88rem;
	line-height: 0.88rem;
	padding:0 0.3rem;
	border-bottom:1px solid #E6E6E6;
	overflow: hidden;
	position: relative;
}
.red-block{
	height: 0.26rem;
	width:0.04rem;
	background: red;
	position: absolute;
	top:50%;
	left:0;
	margin-top:-0.13rem;
}
.title h2{
	float: left;
	font-size:0.3rem;
	color: #333333;
}
.title-time{
	float: left;
	margin-left:0.3rem;
	font-size:0.26rem;
	font-family:PingFangSC-Regular;
	color:rgba(136,136,136,1);
}
.grey{
	float: left;
	margin-right: 0.4rem;
	font-size: 0.3rem;
	color:rgba(136,136,136,1);
}
.green{
 	color: #26BE6A;
}
.red{
	color:#FF4040;
}
.title-tab{
	margin:0.20rem 0;
	float: right;
	overflow: hidden;
}
.title-tab li{
	float: left;
	/*height: 0.46rem;*/
	line-height: 0.36rem;
	padding:0.05rem 0.1rem;
	margin-left:0.2rem;
	font-size:0.26rem;
	font-family:PingFangSC-Regular;
	color:rgba(136,136,136,1);
	border:0.01rem solid transparent;
	border-radius: 0.04rem;
	cursor:pointer;
}
.title-tab .active{
	border:0.01rem solid #3996F2;
	color:#3996F2;
}

.curve-content{
	height: 3.53rem;
	padding:0.41rem 0.3rem;
	overflow: hidden;
}
.curve-list{
	font-size: 0.20rem;

}



.change-content{
	width:6.9rem;
	margin:0 auto;
	padding:0.46rem 0 0.5rem; 
	overflow: hidden;
}
.change-table{
	width:6.97rem;
	margin-left:-0.03rem;
	text-align: center;
	border-top:0.01rem solid #E6E6E6;
	border-bottom:0.01rem solid #E6E6E6;
}
.change-table tr{
	background: #fff;
}
.change-table th{
	height:0.33rem;
	padding:0.17rem 0;
	font-size:0.24rem;
	font-family:PingFangSC-Medium;
	color:rgba(170,170,170,1);
	line-height:0.33rem;
	font-size: 0.24rem;
	border:0.01rem solid #E6E6E6;
}
.change-table td{
	height:0.80rem; 
	padding:0.16rem 0;
	font-size:0.28rem;
	font-family:PingFangSC-Regular;
	color:rgba(51,51,51,1);
	line-height:0.40rem;
	border:0.01rem solid #E6E6E6;
}
.change-table tr .green{
 	color: #26BE6A;
}
.change-table tr .red{
	color:#FF4040;
}
.change-table .market{
	font-weight: 800;
}


.detail-title{
	height: 0.6rem;
	line-height: 0.6rem;
	background: #FAFAFA;
}
.detail-title .detail-title-lists{
	padding:0 0.3rem;
	overflow: hidden;
}
.detail-title .detail-title-lists li{
	float: left;
	text-align:left;
	font-size: 0.22rem;
	color: #aaa;
	position: relative;
}
.detail-title .detail-title-lists li span{
	width:0.13rem;
	height: 0.17rem;
	position: absolute;
	top:50%;
	right: 0;
	margin-top:-0.08rem;
	background: url(http://i0.jrjimg.cn/optional/default.png) center no-repeat;
	background-size: contain;
}
.detail-title .detail-title-lists li .desc{
	background: url(http://i0.jrjimg.cn/optional/desc.png) center no-repeat;
	background-size: contain;
}
.detail-title .detail-title-lists li .asce{
	background: url(http://i0.jrjimg.cn/optional/asce.png) center no-repeat;
	background-size: contain;
}
.detail-lists{

}
.detail-lists li{
	padding:0 0.3rem;
	height: 1rem;
	line-height: 1rem;
	border-bottom:0.01rem solid #E6E6E6;
	overflow: hidden;
}
.detail-lists li span,.detail-lists li p{
	float: left;
	text-align:right;
	font-size: 0.28rem;
	color: #333;
}
.detail-lists li p{
	text-align: left;
}
.detail-lists li .green{
 	color: #26BE6A;
}
.detail-lists li .red{
	color:#FF4040;
}
</style>

<template>
	<div class="equity-trading">
		<div class="block curve">
			<div class="title">
				<span class="red-block"></span>	
				<h2>两市融资融券余额历史走势</h2>
				<p class="title-time">({{curveTime}})</p>
			</div>
			<div class="curve-content">
				<ul class="curve-list">
					<li v-for="item in curveList">
						{{item.date}}
						{{item.marginBalance}}
					</li>
				</ul>
			</div>
		</div>
		<div class="block change">
			<div class="title">
				<span class="red-block"></span>
				<h2>余额变动：</h2>
				<span class="grey red">{{balance}}</span>
				<h2>环比变动：</h2>
				<span class="grey green">{{percent}}%</span>
			</div>
			<div class="change-content">
				<table class="change-table" cellpadding="0" cellspacing="0">
					<tr>
						<th style="width:0.9rem;">市场</th>
						<th style="width:1.95rem;">融资买入</th>
						<th style="width:1.95rem;">融券卖出</th>
						<th style="width:2rem;">融资融券余额</th>
					</tr>
					<tr v-for="item in gatherList">
						<td class="market">{{item.tradeMkt}}</td>
						<td>{{item.buyVal}}</td>
						<td>{{item.sellVal}}</td>
						<td class="green">{{item.marginBalance}}</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="block detail">
			<div class="title">
				<span class="red-block"></span>	
				<h2>融资融券交易明细</h2>
				<ul class="title-tab">
					<li class="active">今日</li>
					<li>3日</li>
					<li>5日</li>
				</ul>
			</div>
			<div class="detail-content">
				<h2 class="detail-title">
					<ul class="detail-title-lists">
						<li style="width:1.49rem">股票名称</li>
						<li class="sort" style="width:1.3rem;marginLeft:0.65rem;">融资净买入<span></span></li>
						<li class="sort" style="width:1.08rem;marginLeft:0.65rem;">融资买入<span class="desc"></span></li>
						<li class="sort" style="width:1.08rem;marginLeft:0.65rem;">融券卖出<span class="asce"></span></li>
					</ul>
				</h2>
				<ul class="detail-lists">
					<li>
						<p style="width:1.49rem">格力电器</p>
						<span class="red" style="width:1.3rem;marginLeft:0.65rem;">1.55亿</span>
						<span style="width:1.08rem;marginLeft:0.65rem;">1.55亿</span>
						<span style="width:1.08rem;marginLeft:0.65rem;">1.55亿</span>
					</li>
					<li>
						<p style="width:1.49rem">格力电器</p>
						<span class="red" style="width:1.3rem;marginLeft:0.65rem;">1.55亿</span>
						<span style="width:1.08rem;marginLeft:0.65rem;">1.55亿</span>
						<span style="width:1.08rem;marginLeft:0.65rem;">1.55亿</span>
					</li>
					<li>
						<p style="width:1.49rem">格力电器</p>
						<span class="green" style="width:1.3rem;marginLeft:0.65rem;">1.55亿</span>
						<span style="width:1.08rem;marginLeft:0.65rem;">1.55亿</span>
						<span style="width:1.08rem;marginLeft:0.65rem;">1.55亿</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
import 'whatwg-fetch'

export default {
  data () {
    return {
    	curveTime:'',
    	curveList:[],
    	balance:'',
    	percent:'',
    	gatherList:[]
    }
  },
  beforecreated () {
    
  },
  created () {
    document.title = '融资融券'
  },
  mounted () {
    this.getCurveList()
    this.getGatherList()
  },
  methods: {
    getCurveList(){
    	var url='https://sslapi.jrj.com.cn/zxhq/sapi/margin_trading//balance/mkt'
    	fetch(url,{
    		method:'GET',
    		mode:'cors',
    		cache:'default'
    	}).then(res => {
	        return res.json()
	    }).then(v => {
    		this.curveList=v.data.list
    		this.curveTime=v.data.date
    	}).catch(v2 => {
    		console.log(v2)
    	})
    },
    getGatherList(){
    	var url='https://sslapi.jrj.com.cn/zxhq/sapi/margin_trading//balance/sts'
    	fetch(url,{
    		method:'GET',
    		mode:'cors',
    		cache:'default'
    	}).then(res => {
	        return res.json()
	    }).then(v => {
    		this.balance=v.data.banlanceChg
    		this.percent=v.data.percentChg
    		this.gatherList=v.data.marginTradingStsList
    		console.log(this.gatherList)
    	}).catch(v2 => {
    		console.log(v2)
    	})
    },
    getDetailList(){
    	
    }
  }
}
</script>
