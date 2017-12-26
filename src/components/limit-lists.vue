<style>
.limit-lists{
    font-size: 0.28rem;
}
.limitmove-lists{
  width:100%;
  background: #fff;
  overflow: hidden;
  position:relative;
}
.lists-left{
  float: left;
}
.limit .lists-left{
  width:2.15rem
}
.lists-right{
  float: left;
  width:5.8rem;
  overflow-x: auto;
}
.limit .lists-right{
  width:5.35rem;
}

.lists-title{
  height: 0.7rem;
  line-height: 0.7rem;
  color:rgba(136,136,136,1);
  font-size:0.26rem;
  border-bottom:0.01rem solid rgba(230,230,230,1);
  box-sizing: border-box;
}
.lists-left .lists-title{
  padding-left: 0.3rem;
  text-align: left;
}

.lists-con{

}
.lists-con li{
  height: 1.4rem;
  font-size: 0.28rem;
  color:rgba(51,51,51,1);
  border-bottom: 0.01rem solid rgba(230,230,230,1);
}
.lists-left .lists-con li{
  padding-left:0.3rem;
  text-align:left;
  height: 1.4rem;
}

.lists-left .lists-con li h6{
  height: 0.32rem;
  line-height: 0.32rem;
  overflow: hidden;
  padding-top:0.28rem;
}
.lists-left .lists-con li h6 .name{
  float: left;
  font-size: 0.32rem;
  color:#333333;
}
.lists-left .lists-con li h6 .sign{
  float: left;
  width:0.5rem;
  height: 0.3rem;
  box-sizing: border-box;
  line-height: 0.26rem;
  margin-left: 0.06rem;
  margin-top: 0.01rem;
  border: 0.01rem solid #F54949;
  font-size: 0.2rem;
  color:#F54949;
  text-align: center;
}
.lists-left .lists-con li p{
  height: 0.22rem;
  font-size: 0.22rem;
  color:#AAAAAA;
  padding-top:0.1rem;
}

.lists-right .lists-con li{
  height: 1.41rem;
  padding-top:0.38rem;
  box-sizing: border-box;
}
.lists-right .lists-con li .main{
  height: 0.4rem;
  line-height: 0.4rem;
}
.lists-right .lists-con li .hint{
  padding-left: 0.16rem;
  margin-top:0.14rem;
  font-size: 0.2rem;
  color:#888;
}
.lists-right-container{
  min-width:22rem;
}
.lists-right .lists-title{
  overflow: hidden;
}
.lists-right .lists-title p{
  float: left;
  text-align: right;
}
.lists-right .lists-title h4{
  float: left;
  text-align: right;
  padding-right: 0.2rem;
  box-sizing: border-box;
  position: relative;
}
.lists-right .lists-title h4 span{
  width: 0.13rem;
    height: 0.17rem;
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -0.06rem;
    background: url(http://i0.jrjimg.cn/optional/default.png) center no-repeat;
    background-size: contain;
}
.lists-right .lists-title h4.desc span{
  background: url(http://i0.jrjimg.cn/optional/desc.png) center no-repeat;
  background-size: contain;
}
.lists-right .lists-title h4.asce span{
  background: url(http://i0.jrjimg.cn/optional/asce.png) center no-repeat;
  background-size: contain;
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
<!-- Swiper -->
<div class="limit-lists">
  <ul class="title-tab">
    <li data-index='1' :class="limitTab==='1'? 'active':''" @click="toLimitTab($event)">
      涨停({{limitUpNum}})
      <span></span>
    </li>
    <li data-index='2' :class="limitTab==='2'? 'active':''" @click="toLimitTab($event)">
      跌停({{limitDownNum}})
      <span></span>
    </li>
    <li data-index='1' :class="limitOpenTab==='1'? 'active':''" @click="toLimitOpenTab($event)">
      涨停打开({{limitUpOpenNum}})
      <span></span>
    </li>
    <li data-index='2' :class="limitOpenTab==='2'? 'active':''" @click="toLimitOpenTab($event)">
      跌停打开({{limitDownOpenNum}})
      <span></span>
    </li>
  </ul>

  <div class="limit" v-if="show === 1">
    <div class="limitmove-lists" v-if="limitList">
      <div class="lists-left">
        <div class="lists-title">
          全部
        </div>
        <ul class="lists-con">
          <li v-for="item in limitList" @click="toStock(item)">
            <h6>
              <span class="name">{{item.stockname}}</span>
              <span class="sign" v-if="item.continueUpDown===1">连续</span>
            </h6>
            <p>{{item.stockcode}}</p>
          </li>
        </ul>
      </div>
      <div class="lists-right">
        <div class="lists-right-container">

          <div class="lists-title">
            <h4 data-index='1' @click="clickSort($event)" class="desc" style="width:1.2rem">最新价<span></span></h4>
            <h4 data-index='4' @click="clickSort($event)" style="width:1.3rem">涨跌幅<span></span></h4>
            <h4 data-index='5' @click="clickSort($event)" style="width:1.48rem">涨停强度<span></span></h4>
            <h4 data-index='10' @click="clickSort($event)" style="width:1.3rem">换手率<span></span></h4>
            <p style="width:1.44rem">封单手数</p>
            <p style="width:1.77rem">封单金额</p>
            <!-- <p style="width:1.77rem">涨停类型</p> -->
            <p style="width:1.97rem">今日主力净买入</p>
            <p style="width:1.97rem">五日主力净买入</p>
            <p style="width:1.97rem">第一次涨停时间</p>
            <p style="width:2.17rem">最后一次涨停时间</p>
            <p style="width:1.32rem">打开次数</p>
            <p style="width:1.77rem; padding-right:0.3rem;">连续涨停次数</p>
          </div>
          <ul class="lists-con">
            <li v-for="item in limitList" @click="toStock(item)">
              <div class="main">
                <span :class="addcolor(item.nowPrice)" style="width:1.2rem">{{item.nowPrice.toFixed(2)}}</span>
                <span :class="addcolor(item.priceLimit)" style="width:1.3rem">{{item.priceLimit.toFixed(2)}}%</span>
                <span style="width:1.48rem">{{item.force.toFixed(0)}}</span>
                <span style="width:1.3rem">{{item.tr.toFixed(2)}}%</span>
                <span style="width:1.44rem">{{item.fdHands | convert}} </span>
                <span style="width:1.77rem">{{item.fdMoney | convert}}</span>
                <!-- <span style="width:1.77rem">{{item.type}}</span> -->
                <span style="width:1.97rem">{{item.mainForceNetInflow |convert}}</span>
                <span style="width:1.97rem">{{item.mainForceNetInflow5 |convert}}</span>
                <span style="width:1.97rem">{{item.firstZtTime}}</span>
                <span style="width:2.17rem">{{item.lastZtTime}}</span>
                <span style="width:1.32rem">{{item.opentime}}</span>
                <span style="width:1.67rem; padding-right:0.5rem;">{{item.continueUpDownTimes}}</span>
              </div>
              <div class="hint">
                涨停揭秘: 360借壳成功，一人得道鸡犬升天
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <div v-if="limitList.length === 0" class="dataEmpty">
      暂无数据
    </div>
  </div>

  <div class="limit-open" v-if="show === 2">
    列表2222
  </div>

</div>
</template>
<script>
import 'whatwg-fetch'
export default {
  data () {
    return {
      limitTab:'1',
      limitUpNum:0,
      limitDownNum:0,
      sort1:1,
      order1:'desc',
      limitList:[],
      limitOpenTab:'0',
      limitUpOpenNum:0,
      limitDownOpenNum:0,
      limitOpenList:[],
      show:1
    }
  },
  mounted () {
    this.getLimitLen('1')
    this.getLimitLen('2')
    this.getLimitList()
    this.getLimitOpenLen('1')
    this.getLimitOpenLen('2')
    // this.getLimitOpenLen('2')
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
    addcolor (v) {
      if ((v + '').indexOf('-') !== -1) {
        return 'green'
      } else if(v===0){
        return ''
      }else{
      	return 'red'
      }
    },
    toLimitTab(v){
      this.show=1
      this.limitOpenTab=0
      this.limitTab= v.currentTarget.getAttribute('data-index')
      this.sort1=1
      this.order1='desc'
      this.getLimitList()
    },
    toLimitOpenTab(v){
      this.show=2
      this.limitTab=0
      this.limitOpenTab = v.currentTarget.getAttribute('data-index')
      // this.getLimitList()
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
    clickSort(e) {
      if (this.sort1 === e.currentTarget.getAttribute('data-index')) {
        if (this.order1 === 'desc') {
          this.order1 = 'asce'
          e.currentTarget.setAttribute('class', 'asce')
        } else {
          this.order1 = 'desc'
          e.currentTarget.setAttribute('class', 'desc')
        }
      } else {
        this.sort1 = e.currentTarget.getAttribute('data-index')
        this.order1 = 'desc'
        $('.lists-right h4').removeClass('desc').removeClass('asce')
        e.currentTarget.setAttribute('class', 'desc')
      }
      this.getLimitList()
    },
    getLimitLen(type){

      // https://sslapi.jrj.com.cn/zxhq/sapi/datacenter/query_up_down_limit?type=1
      var url='https://sslapi.jrj.com.cn/zxhq/sapi/datacenter/query_up_down_limit?type='+type
      console.log(url)
      fetch(url, {
        method:'get',
        mode:'cors',
        cache:'default'
      }).then((res) => {
        return res.json()
      }).then(v => {
        if (type==='1') {
          this.limitUpNum=v.data.items.length
        }
        if (type==='2') {
          this.limitDownNum=v.data.items.length
        }
      }).catch(v2 => {
        console.log(v2)
      })

    },
    getLimitList(){

      // https://sslapi.jrj.com.cn/zxhq/sapi/datacenter/query_up_down_limit?type=1&sort_column=1&order_type=desc
      var url='https://sslapi.jrj.com.cn/zxhq/sapi/datacenter/query_up_down_limit?type='+this.limitTab+'&sort_column='+this.sort1+'&order_type='+this.order1
      console.log(url)
      fetch(url, {
        method:'get',
        mode:'cors',
        cache:'default'
      }).then((res) => {
        return res.json()
      }).then(v => {
        this.limitList=v.data.items
      }).catch(v2 => {
        console.log(v2)
      })

    },
    getLimitOpenLen(type){

      // https://sslapi.jrj.com.cn/zxhq/sapi/datacenter/query_open_up_down_limit?type=1
      var url='https://sslapi.jrj.com.cn/zxhq/sapi/datacenter/query_open_up_down_limit?type='+type
      console.log(url)
      fetch(url, {
        method:'get',
        mode:'cors',
        cache:'default'
      }).then((res) => {
        return res.json()
      }).then(v => {
        if (type==='1') {
          this.limitUpOpenNum=v.data.items.length
        }
        if (type==='2') {
          this.limitDownOpenNum=v.data.items.length
        }
      }).catch(v2 => {
        console.log(v2)
      })

    },
    getLimitOpenList(){

      // https://sslapi.jrj.com.cn/zxhq/sapi/datacenter/query_up_down_limit?type=1
      var url='https://sslapi.jrj.com.cn/zxhq/sapi/datacenter/query_up_down_limit?type='+this.limitOpenTab
      console.log(url)
      fetch(url, {
        method:'get',
        mode:'cors',
        cache:'default'
      }).then((res) => {
        return res.json()
      }).then(v => {
        this.limitList=v.data.items
        console.log(this.limitList)
      }).catch(v2 => {
        console.log(v2)
      })

    }
  }
}
</script>
