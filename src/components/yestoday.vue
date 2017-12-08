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

.graph{
	height:4.4rem;
	background: #ccc;
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
			<p class="hint2">赚钱效应一般</p>
			<div class="hint3">
				<p>
					今日：<span class="red">3.28%</span>
				</p>
				<p>
					昨日：<span class="green">3.28%</span>
				</p>
				<p class="tongbi">
					同比：<span>|</span><span class="green">3.28%</span>
				</p>
			</div>
		</div>

		<div class="graph"></div>

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

					<li>
            <h6>股票名称</h6>
            <p>股票代码</p>
          </li>
        </ul>
      </div>
      <div class="lists-right">
        <div class="lists-right-container">

          <div class="lists-title">
            <p style="width:1.3rem">最新价</p>
            <p style="width:1.74rem">开盘涨跌</p>
            <p style="width:1.48rem">涨停强度</p>
            <p style="width:1.44rem">今日涨幅</p>
            <p style="width:1.77rem">今日最高</p>
            <p style="width:1.77rem">今日最低</p>
						<p style="width:1.52rem">是否连续涨停</p>
						<p style="width:1.52rem;">连续涨停次数</p>
            <p style="width:1.77rem">第一次涨停时间</p>
            <p style="width:1.87rem">最后一次涨停时间</p>
            <p style="width:1.52rem">打开次数</p>


          </div>
          <ul class="lists-con">
            <!-- <li v-for="item in limitList">
                <span :class="addcolor(item.nowPrice)" style="width:1.3rem">{{item.nowPrice.toFixed(2)}}</span>
                <span :class="addcolor(item.priceLimit)" style="width:1.74rem">{{item.priceLimit.toFixed(2)}}%</span>
                <span style="width:1.48rem">{{item.force.toFixed(0)}}</span>
                <span style="width:1.44rem">{{item.fdHands | convert}} </span>
                <span style="width:1.77rem">{{item.fdMoney | convert}}</span>
                <span style="width:1.77rem">{{item.type}}</span>
                <span style="width:1.77rem">{{item.firstZtTime}}</span>
                <span style="width:1.87rem">{{item.lastZtTime}}</span>
                <span style="width:1.52rem">{{item.opentime}}</span>
                <span style="width:1.52rem">{{item.continueUpDown}}</span>
                <span style="width:1.52rem; padding-right:0.5rem;">{{item.continueUpDownTimes}}</span>
            </li> -->
						<li>
                <span  style="width:1.3rem">.nowPrice.toFixed(2)</span>
                <span  style="width:1.74rem">.priceLimit.toFixed(2)%</span>
                <span style="width:1.48rem">.force.toFixed(0)</span>
                <span style="width:1.44rem">.fdHands </span>
                <span style="width:1.77rem">.fdMoney</span>
                <span style="width:1.77rem">.type</span>
                <span style="width:1.77rem">.firstZtTime</span>
                <span style="width:1.87rem">.lastZtTime</span>
                <span style="width:1.52rem">.opentime</span>
                <span style="width:1.52rem">.continueUpDown</span>
                <span style="width:1.52rem; padding-right:0.5rem;">continueUpDownTimes</span>
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

export default {
  data () {
    return {
			lists:[]
    }
  },
  beforecreated () {

  },
  created () {
    document.title = '涨停追击'
  },
  mounted () {
		this.getlist()
  },
  filters: {

  },
  methods: {
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
					console.log(this.lists)
        },
        error:function(){
          console.log('error');
        }
      })
		}
  }
}
</script>
