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
	margin:0;
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
.title-right{
	float: right;
	padding-right: 0.56rem;
	height: 0.37rem;
	line-height: 0.37rem;
}
.title-right input{
	width:auto;
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
.detail-title .detail-title-lists .r{
	text-align:right;
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

.pika-single {
    z-index: 9999;
    display: block;
    position: relative;
    width: 240px;
    padding: 8px;
    color: #333;
    background: #fff;
    border: 1px solid #ccc;
    border-bottom-color: #bbb;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.pika-single.is-hidden {
    display: none;
}

.pika-single.is-bound {
    position: absolute;
    box-shadow: 0 5px 15px -5px rgba(0,0,0,.5);
}

.pika-title {
    position: relative;
    text-align: center;
}

.pika-label {
    display: inline-block;
    *display: inline;
    position: relative;
    z-index: 9999;
    overflow: hidden;
    margin: 0;
    padding: 5px 3px;
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
    background-color: #fff;
}
.pika-title select {
    cursor: pointer;
    position: absolute;
    z-index: 9998;
    margin: 0;
    left: 0;
    top: 5px;
    filter: alpha(opacity=0);
    opacity: 0;
}

.pika-prev,
.pika-next {
    display: block;
    cursor: pointer;
    position: relative;
    outline: none;
    border: 0;
    padding: 0;
    width: 20px;
    height: 30px;
    background-color: transparent;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 75% 75%;
    white-space: nowrap;
    text-indent: 100%;
    overflow: hidden;
    opacity: .5;
    *position: absolute;
    *top: 0;
}

.pika-prev:hover,
.pika-next:hover {
    opacity: 1;
}

.pika-prev,
.is-rtl .pika-next {
    float: left;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAUklEQVR42u3VMQoAIBADQf8Pgj+OD9hG2CtONJB2ymQkKe0HbwAP0xucDiQWARITIDEBEnMgMQ8S8+AqBIl6kKgHiXqQqAeJepBo/z38J/U0uAHlaBkBl9I4GwAAAABJRU5ErkJggg==');
    *left: 0;
}

.pika-next,
.is-rtl .pika-prev {
    float: right;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAU0lEQVR42u3VOwoAMAgE0dwfAnNjU26bYkBCFGwfiL9VVWoO+BJ4Gf3gtsEKKoFBNTCoCAYVwaAiGNQGMUHMkjGbgjk2mIONuXo0nC8XnCf1JXgArVIZAQh5TKYAAAAASUVORK5CYII=');
    *right: 0;
}

.pika-prev.is-disabled,
.pika-next.is-disabled {
    cursor: default;
    opacity: .2;
}

.pika-select {
    display: inline-block;
    *display: inline;
}

.pika-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border: 0;
}

.pika-table th,
.pika-table td {
    width: 14.285714285714286%;
}

.pika-table th {
    color: #999;
    font-size: 12px;
    line-height: 25px;
    font-weight: bold;
    text-align: center;
}

.pika-button {
    cursor: pointer;
    display: block;
    outline: none;
    border: 0;
    margin: 0;
    width: 100%;
    padding: 5px;
    color: #666;
    font-size: 12px;
    line-height: 15px;
    text-align:center;
    background: #f5f5f5;
}

.is-today .pika-button {
    color: #33aaff;
    font-weight: bold;
}

.is-selected .pika-button {
    color: #fff;
    font-weight: bold;
    background: #33aaff;
    box-shadow: inset 0 1px 3px #178fe5;
    border-radius: 3px;
}

.is-disabled .pika-button {
    pointer-events: none;
    cursor: default;
    color: #999;
    opacity: .3;
}

.pika-button:hover {
    color: #fff !important;
    background: #ff8000 !important;
    box-shadow: none !important;
    border-radius: 3px !important;
}

</style>

<template>
	<div class="equity-trading">
		<div class="block detail">
			<div class="title">
				<span class="red-block"></span>
				<h2>融资融券交易明细</h2>
				<div class="title-right">
					<input id="datepicker" type="text"  value="2017-11-14"/>
					<span class="calendar-icon"></span>
				</div>
			</div>
			<div class="detail-content">
				<div class="detail-title">
					<ul class="detail-title-lists">
						<li style="width:1.49rem">股票名称</li>
						<li class="r" style="width:0.7rem;marginLeft:0.80rem;">成交价</li>
						<li class="r" style="width:1.58rem;marginLeft:0.81rem;">成交量（万股）</li>
						<li class="r" style="width:0.7rem;marginLeft:0.80rem;">溢价率</li>
					</ul>
				</div>
				<ul class="detail-lists" v-if="detailList">
					<li v-for="item in detailList" @click="clickLi(item)">
						<p style="width:1.49rem">{{item[2]}}</p>
						<span style="width:1rem;marginLeft:0.50rem;">{{item[4].toFixed(2)}}</span>
						<span style="width:1.4rem;marginLeft:0.81rem;">{{item[6].toFixed(2)}}</span>
						<span :class="addcolor(item[5])" style="width:1rem;marginLeft:0.68rem;">{{item[5].toFixed(2)}}%</span>
					</li>
				</ul>
				<div class="detail-more">
					<h3 v-if="detailDataFlag===true" @click="inquireMore()">查看更多数据项 ></h3>
					<h4 v-if="detailDataFlag===false">没有更多数据了</h4>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
import 'whatwg-fetch'
window.moment = require('moment')
const Pikaday = require('../assets/plugins/calendar/calendar.js')

export default {
  data () {
    return {
    	data:'2017-11-07',// 初始日期
    	detailList:[],
    	pn:'1', // 页码
    	ps:'20', // 每页条数
    	detailDataFlag:true// 1 有数据 0无数据
    }
  },
  beforecreated () {

  },
  created () {
    document.title = '大宗交易明细'
  },
  mounted () {
    this.getDetailList()
		this.addcalendar()
  },
  methods: {
		addcalendar(){
			new Pikaday(
	    {
	        field: document.getElementById('datepicker'),
	        firstDay: 1,
	        minDate: new Date('2010-01-01'),
	        maxDate: new Date('2020-12-31'),
	        yearRange: [2000,2020]
	    });
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
    inquireMore(){
    	this.pn++
    	var url='http://stock.jrj.com.cn/action/dazong/getBlockTradesStock.jspa'+'?vname=dazongStock&order2=asc&sort2=stockcode&enddate='+this.data+'&order=asc&sort=stockcode&page='+this.pn+'&psize='+this.ps

    	$.ajax({
		   	url:url,
		    type:'get',
		    cache : false,
		    dataType: 'script',
		    jsonp: 'callback',
		    success:() => {
		    	if (window.dazongStock.data.length===0) {
		    		this.detailDataFlag=false
		    	}else{
		    		this.detailList=this.detailList.concat(window.dazongStock.data)
		    		this.detailDataFlag=true
		    	}
		    },
		    error : function() {
		    	console.log('error');
		    }
	  	});
    },
    mode(){

    },
    getDetailList(){
    	// http://stock.jrj.com.cn/action/dazong/getBlockTradesStock.jspa?vname=dazongStock&order2=asc&sort2=stockcode&enddate=2017-10-17&order=asc&sort=stockcode&page=1&psize=20&_dc=1509343987308

    	var url='http://stock.jrj.com.cn/action/dazong/getBlockTradesStock.jspa'+'?vname=dazongStock&order2=asc&sort2=stockcode&enddate='+this.data+'&order=asc&sort=stockcode&page='+this.pn+'&psize='+this.ps

    	$.ajax({
		   	url:url,
		    type:'get',
		    cache : false,
		    dataType: 'script',
		    jsonp: 'callback',
		    success:() => {
		    	if (window.dazongStock.data.length===0) {
		    		this.detailDataFlag=false
		    	}else{
		    		this.detailList=window.dazongStock.data
		    		this.detailDataFlag=true
		    	}
		    },
		    error : function() {
		    	console.log('error');
		    }
	  	});
    },
    clickLi(li){
  		window.location.href='http://localhost:8080/dist/h5/block-single.html?stockcode='+li[1]+'&stockname='+li[2]
  	}
  }
}
</script>
