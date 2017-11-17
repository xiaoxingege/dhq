
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
.equity-trading .detail{
	margin-bottom:1.2rem;
}


.detail-lists{

}
.detail-lists li{
	width:6.9rem;
	margin:0 auto;
	padding:0.56rem 0 0.6rem;
	border-bottom: 1px solid #E6E6E6;
}
.detail-lists .hint{
	color:#888;
}

.detail-lists .date{
	height:0.40rem; 
	font-size:0.28rem;
	color:rgba(51,51,51,1);
	line-height:0.40rem;
	margin-bottom: 0.4rem;
}

.info-num,.info-text{
	overflow: hidden;
	line-height: 0.33rem;
	font-size: 0.24rem;
	margin-bottom: 0.16rem;
}
.mt40{
	margin-top:0.40rem;
}
.info-num p{
	width:50%;
	float: left;
}
.info-num .num{
	color:#333;
}

.info-text .hint{
	float: left;
	width:1.44rem;
	margin-right: 0.1rem;
}
.info-text .text{
	float: left;
	width:5.34rem;
}


.detail-lists li .green{
 	color: #26BE6A;
}
.detail-lists li .red{
	color:#FF4040;
}
.detail-more{
	height: 1.36rem;
	line-height: 1.36rem;
}
.detail-more h3{
	font-size: 0.28rem;
	color: #3996F2;
	text-align: center;
}
.detail-more h4{
	font-size: 0.28rem;
	color: #aaa;
	text-align: center;
}

.skip{
	background: #fff;
	width:100%;
	height: 0.9rem;
	padding:0.15rem 0;
	position: fixed;
	bottom: 0;
	left:0;
	z-index: 100;
}
.skip p{
	width:6.9rem;
	height: 0.9rem;
	line-height: 0.9rem;
	text-align:center;
	margin:0 auto;
	font-size: 0.3rem;
	color:#FF4040;
	border-radius: 0.04rem;
	border:1px solid #FF4040;
}
</style>

<template>
	<div class="equity-trading">
		<div class="block detail">
			<div class="detail-content">
				<ul class="detail-lists" v-if="detailList">
					<li v-for="item in detailList">
						<h2 class="date">{{item[0]}}</h2>
						<div class="info-num">
							<p>
								<span class="hint">成交价 (元)：</span>
								<span class="num">{{item[4] | covert}}</span>
							</p>
							<p>
								<span class="hint">成交量 (股)：</span>
								<span class="num">{{item[6] | covert}}万</span>
							</p>
						</div>
						<div class="info-num">
							<p>
								<span class="hint">成交额 (元)：</span>
								<span class="num">{{item[7] | covert}}万</span>
							</p>
							<p>
								<span class="hint">折/溢价率(%)：</span>
								<span :class="addcolor(item[5])">{{item[5] | covert}}%</span>
							</p>
						</div>
						<div class="info-text mt40">
							<span class="hint">买方营业部：</span>
							<p class="text">{{item[9]}}</p>
						</div>
						<div class="info-text">
							<span class="hint">卖方营业部：</span>
							<p class="text">{{item[11]}}</p>
						</div>
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

export default {
  data () {
    return {
    	startdate:'2017-01-01',
    	enddate:'2017-11-09',
    	stockcode:this.getQueryString('stockcode'),
    	stockname:this.getQueryString('stockname','chinese'),
    	pn:'1', // 页码
    	ps:'20', // 每页条数
    	detailList:[],
    	detailDataFlag:true// 1 有数据 0无数据
    }
  },
  beforecreated () {
    
  },
  created () {
    document.title = this.stockname+'_大宗交易历史数据'
  },
  mounted () {
    this.getDetailList()
    
  },
  filters: {
  	covert (d) {
  		return d.toFixed(2)
  	}
  },
  methods: {
  	getQueryString (name,chinese) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
      var r = window.location.search.substr(1).match(reg)
			if (chinese) {
				if (r != null) return decodeURI(r[2])
			}else{
				if (r != null) return unescape(r[2])
			}
      return null
    },
  	addcolor (v) {
      if ((v + '').indexOf('-') !== -1) {
        return 'green num'
      } else if(v===0){
        return 'num'
      }else{
      	return 'red num'
      }
    },
    inquireMore(){
    	this.pn++

    	var url='http://stock.jrj.com.cn/action/dazong/getDazongStockBuySellInfoList.jspa?startdate='+this.startdate+'&enddate='+this.enddate+'&stockCode='+this.stockcode+'&page='+this.pn+'&psize='+this.ps+'&order=desc&sort=tradeDate'
    	console.log(url)
    	$.ajax({
		   	url:url,
		    type:'get',
		    cache : false,
		    dataType: 'script',
		    jsonp: 'callback',
		    success:() => {
		    	if (window.dzStockList.data.length===0) {
		    		this.detailDataFlag=false
		    	}else{
		    		this.detailList=this.detailList.concat(window.dzStockList.data)
		    		this.detailDataFlag=true
		    	}
		    },
		    error : function() {
		    	console.log('error');
		    }
	  	});
    },
    getDetailList(){
    	// http://stock.jrj.com.cn/action/dazong/getDazongStockBuySellInfoList.jspa?startdate=2017-04-14&enddate=2017-10-27&stockCode=000001&page=1&psize=20&order=desc&sort=tradeDate&_dc=1509344145648
    	var url='http://stock.jrj.com.cn/action/dazong/getDazongStockBuySellInfoList.jspa?startdate='+this.startdate+'&enddate='+this.enddate+'&stockCode='+this.stockcode+'&page='+this.pn+'&psize='+this.ps+'&order=desc&sort=tradeDate'
    	console.log(url)
    	$.ajax({
		   	url:url,
		    type:'get',
		    cache : false,
		    dataType: 'script',
		    jsonp: 'callback',
		    success:() => {
		    	if (window.dzStockList.data.length===0) {
		    		this.detailDataFlag=false
		    	}else{
		    		this.detailList=window.dzStockList.data
		    		this.detailDataFlag=true
		    	}
		    },
		    error : function() {
		    	console.log('error');
		    }
	  	});
    },
		toStock(){
				var stockCode=this.stockcode
				let market = '';
				if((stockCode.slice(0,3) == '000') || (stockCode.slice(0,3) == '002') || (stockCode.slice(0,3) == '300')){
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
		}
  }
}
</script>
