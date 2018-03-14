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
.limit-open .lists-left{
  width:1.7rem
}
.lists-right{
  float: left;
  overflow-x: auto;
}
.limit .lists-right{
  width:5.35rem;
}
.limit-open .lists-right{
  width:5.8rem;
}

.lists-title{
  height: 0.7rem;
  line-height: 0.7rem;
  color:rgba(136,136,136,1);
  font-size:0.26rem;
  border-bottom:1px solid rgba(230,230,230,1);
  box-sizing: border-box;
}
.lists-left .lists-title{
  padding-left: 0.3rem;
  text-align: left;
}
.limit .lists-left .lists-title{
  position: relative;
}
.limit .lists-left .lists-title span{
  position: absolute;
  top:0.41rem;
  left:1.37rem;
  width:0;
  height: 0;
  border-bottom: 0.1rem solid #ccc;
  border-left: 0.1rem solid transparent;
}
.lists-con{

}
.lists-con li{
  box-sizing: border-box;
  border-bottom: 1px solid rgba(230,230,230,1);
}
/*.limit .lists-con li{
  height: 1.4rem;
}*/
.limit .lists-con li{
  height: 1.08rem;
}

.limit-open .lists-con li{
  height: 1.08rem;
}
.lists-left .lists-con li{
  padding-left:0.3rem;
  text-align:left;
}

.lists-left .lists-con li h6{
  height: 0.32rem;
  line-height: 0.32rem;
  overflow: hidden;
}

/*.limit .lists-left .lists-con li h6{
  padding-top:0.28rem;
}*/
.limit .lists-left .lists-con li h6{
  padding-top:0.24rem;
}

.limit-open .lists-left .lists-con li h6{
  padding-top:0.24rem;
}

.lists-left .lists-con li h6 .name{
  float: left;
  font-size: 0.32rem;
  color:#333333;
}
.lists-left .lists-con li h6 .sign{
  float: right;
  width:0.5rem;
  height: 0.3rem;
  box-sizing: border-box;
  line-height: 0.28rem;
  border: 1px solid #F54949;
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
  padding-top:0.38rem;
}
.lists-right .lists-con li .main{
  height: 0.4rem;
  line-height: 0.4rem;
}
.lists-right .lists-con li .hint{
  padding-left: 0.16rem;
  margin-top:0.12rem;
  font-size: 0.2rem;
  color:#888;
}
.lists-right-container{

}
.limit .lists-right-container{
  min-width:22.2rem;
}
.limit-open .lists-right-container{
  width:5.8rem;
}
.lists-right .lists-title{
  overflow: hidden;
}
.lists-right .lists-title p{
  height: 0.7rem;
  line-height: 0.75rem;
  float: left;
  text-align: right;
  padding-right: 0.2rem;
  box-sizing: border-box;
  position: relative;
}
.lists-right .lists-title p span{
  width: 0.13rem;
    height: 0.17rem;
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -0.06rem;
    background: url(https://i0.jrjimg.cn/optional/default.png) center no-repeat;
    background-size: contain;
}
.lists-right .lists-title p.desc span{
  background: url(https://i0.jrjimg.cn/optional/desc.png) center no-repeat;
  background-size: contain;
}
.lists-right .lists-title p.asce span{
  background: url(https://i0.jrjimg.cn/optional/asce.png) center no-repeat;
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
  <div class="title-tab-container">
    <ul class="title-tab">
      <li data-index='1' :class="show === 1 && limitTab==='1'? 'active':''" @click="toLimitTab($event)">
        涨停({{limitUpNum}})
        <span></span>
      </li>
      <li data-index='2' :class="show === 1 && limitTab==='2'? 'active':''" @click="toLimitTab($event)">
        跌停({{limitDownNum}})
        <span></span>
      </li>
      <li data-index='1' :class="show === 2 && limitOpenTab==='1'? 'active':''" @click="toLimitOpenTab($event)">
        涨停打开({{limitUpOpenNum}})
        <span></span>
      </li>
      <li data-index='2' :class="show === 2 && limitOpenTab==='2'? 'active':''" @click="toLimitOpenTab($event)" style="padding-right:0">
        跌停打开({{limitDownOpenNum}})
        <span></span>
      </li>
    </ul>
  </div>
  <div class="limit" v-if="show === 1">
    <div class="limitmove-lists" v-if="limitList">
      <div class="lists-left">
        <div class="lists-title" @click="filtrate()">
          {{filtrateName}}
          <span></span>
        </div>
        <ul class="lists-con">
          <li v-if="filt(item)" v-for="item in limitList" @click="toStock(item.stockcode)">
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
            <p data-index='1' @click="clickSort($event)" class="desc" style="width:1.3rem">最新价<span></span></p>
            <p data-index='4' @click="clickSort($event)" style="width:1.4rem">涨跌幅<span></span></p>
            <p data-index='5' @click="clickSort($event)" style="width:1.48rem">{{UpOrDown}}停强度<span></span></p>
            <p data-index='10' @click="clickSort($event)" style="width:1.3rem">换手率<span></span></p>
            <p data-index='3' @click="clickSort($event)" style="width:1.64rem">封单手数<span></span></p>
            <p data-index='2' @click="clickSort($event)" style="width:1.97rem">封单金额<span></span></p>
            <p data-index='11' @click="clickSort($event)" style="width:2.27rem">今日主力净买入<span></span></p>
            <p data-index='12' @click="clickSort($event)" style="width:2.27rem">五日主力净买入<span></span></p>
            <p data-index='6' @click="clickSort($event)" style="width:2.27rem">第一次{{UpOrDown}}停时间<span></span></p>
            <p data-index='7' @click="clickSort($event)" style="width:2.47rem">最后一次{{UpOrDown}}停时间<span></span></p>
            <p data-index='8' @click="clickSort($event)" style="width:1.52rem">打开次数<span></span></p>
            <p data-index='9' @click="clickSort($event)" style="width:1.97rem;">连续{{UpOrDown}}停次数<span></span></p>
          </div>
          <ul class="lists-con">
            <li v-if="filt(item)" v-for="item in limitList" @click="toStock(item.stockcode)">
              <div class="main">
                <span :class="addcolor(item.nowPrice)" style="width:1.3rem">{{item.nowPrice | convert2}}</span>
                <span :class="addcolor(item.priceLimit)" style="width:1.4rem">{{item.priceLimit | convert2}}%</span>
                <span style="width:1.48rem">{{item.force.toFixed(0)}}</span>
                <span style="width:1.3rem">{{item.tr.toFixed(2)}}%</span>
                <span style="width:1.64rem">{{item.fdHands | convert}} </span>
                <span style="width:1.97rem">{{item.fdMoney | convert}}</span>
                <!-- <span style="width:1.77rem">{{item.type}}</span> -->
                <span style="width:2.27rem">{{item.mainForceNetInflow |convert}}</span>
                <span style="width:2.27rem">{{item.mainForceNetInflow5 |convert}}</span>
                <span style="width:2.27rem">{{item.firstZtTime}}</span>
                <span style="width:2.47rem">{{item.lastZtTime}}</span>
                <span style="width:1.52rem">{{item.opentime}}</span>
                <span style="width:1.97rem;">{{item.continueUpDownTimes}}</span>
              </div>
              <!-- <div class="hint">
                涨停揭秘: 360借壳成功，一人得道鸡犬升天
              </div> -->
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
    <div class="limitmove-lists" v-if="limitOpenList">
      <div class="lists-left">
        <div class="lists-title">
          股票名称
        </div>
        <ul class="lists-con">
          <li v-for="item in limitOpenList" @click="toStock(item.stockCode)">
            <h6>
              <span class="name">{{item.stockName}}</span>
            </h6>
            <p>{{item.stockCode}}</p>
          </li>
        </ul>
      </div>
      <div class="lists-right">
        <div class="lists-right-container">

          <div class="lists-title">
            <p data-index='1' @click="clickSort2($event)" class="desc" style="width:1.3rem">最新价<span></span></p>
            <p data-index='2' @click="clickSort2($event)" style="width:1.4rem">涨跌幅<span></span></p>
            <p data-index='3' @click="clickSort2($event)" style="width:1.48rem">开板时间<span></span></p>
            <p data-index='4' @click="clickSort2($event)" style="width:1.3rem">换手率<span></span></p>
          </div>
          <ul class="lists-con">
            <li v-for="item in limitOpenList" @click="toStock(item.stockCode)">
              <div class="main">
                <span :class="addcolor(item.nowPrice)" style="width:1.3rem">{{item.nowPrice | convert2}}</span>
                <span :class="addcolor(item.priceLimit)" style="width:1.4rem">{{item.priceLimit | convert2}}%</span>
                <span style="width:1.48rem">{{item.openTime}}</span>
                <span style="width:1.3rem">{{item.tr.toFixed(2)}}%</span>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <div v-if="limitOpenList.length === 0" class="dataEmpty">
      暂无数据
    </div>
  </div>

</div>
</template>
<script>
import 'whatwg-fetch'
export default {
  data () {
    return {
      filtrateType:1,
      filtrateName:'全部涨停',
      limitTab:'1',
      limitUpNum:0,
      limitDownNum:0,
      sort1:1,
      order1:'desc',
      limitList:[],
      limitOpenTab:'1',
      limitUpOpenNum:0,
      limitDownOpenNum:0,
      limitOpenList:[],
      show:1,
      UpOrDown:'涨'
    }
  },
  watch: {
    limitTab: function (val) {
      if (val === '1') {
        this.UpOrDown='涨'
      }
      if (val === '2') {
        this.UpOrDown='跌'
      }
    }
  },
  mounted () {
    this.loading()
    var _this=this
    setInterval(function(){
      _this.loading()
    },5000)
  },
  filters: {
    convert (d) {
    	if (d/100000000>=1 || d/100000000<=-1) {
    		return (d / 100000000).toFixed(2) + '亿'
    	}else if(d/10000>=1 || d/10000<=-1){
    		return (d / 10000).toFixed(2) + '万'
    	}else{
    		return d
    	}
    },
    convert2 (v) {
      if ((v + '').indexOf('-') !== -1) {
        return v.toFixed(2)
      } else if(v===0){
        return v.toFixed(2)
      }else{
      	return '+'+v.toFixed(2)
      }
    }
  },
  methods: {
    loading(){
      this.getLimitLen('1')
      this.getLimitLen('2')
      this.getLimitOpenLen('1')
      this.getLimitOpenLen('2')
      if (this.show===1) {
        this.getLimitList()
      }
      if (this.show===2) {
        this.getLimitOpenList()
      }
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
    /*
    * 切换【涨跌停】tab方法
    */
    toLimitTab(v){
      // 展示列表模块1-limit
      this.show=1
      // 打开涨跌停的tab
      this.limitTab= v.currentTarget.getAttribute('data-index')
      // 排序功能初始化
      this.sort1=1
      this.order1='desc'
      $('.lists-right .lists-title p').removeClass('desc').removeClass('asce')
      $('.lists-right .lists-title p:first').addClass('desc')
      // 筛选功能初始化
      this.filtrateType = 1
      if (this.limitTab==='1') {
        this.filtrateName='全部涨停'
      }
      if (this.limitTab==='2') {
        this.filtrateName='全部跌停'
      }
      // 获取涨跌停数据
      this.getLimitList()
    },
    /*
    * 切换【涨跌停打开】tab方法
    */
    toLimitOpenTab(v){
      // 展示列表模块2-limit-open
      this.show=2
      // 打开涨跌停打开的tab
      this.limitOpenTab = v.currentTarget.getAttribute('data-index')
      // 排序功能初始化
      this.sort1=1
      this.order1='desc'
      $('.lists-right .lists-title p').removeClass('desc').removeClass('asce')
      $('.lists-right .lists-title p:first').addClass('desc')
      // 获取涨跌停打开数据
      this.getLimitOpenList()
    },
    /*
    * 跳转【个股】贯通
    */
    toStock(stockcode){
				var stockCode=stockcode
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
    /*
    * 【涨跌停】数据筛选
    */
    filt(item){
      if (this.filtrateType === 1) {
        return true
      }
      if (item.type===this.filtrateName) {
        return item.type===this.filtrateName
      }
    },
    /*
    * 点击筛选的 数据处理
    */
    filtrate(){
      this.filtrateType++
      if (this.filtrateType>3) {
        this.filtrateType=1
      }
      if (this.filtrateType === 1) {
        if (this.limitTab==='1') {
          this.filtrateName='全部涨停'
        }
        if (this.limitTab==='2') {
          this.filtrateName='全部跌停'
        }

      }
      if (this.filtrateType === 2) {
        if (this.limitTab==='1') {
          this.filtrateName='一字涨停'
        }
        if (this.limitTab==='2') {
          this.filtrateName='一字跌停'
        }
      }
      if (this.filtrateType === 3) {
        if (this.limitTab==='1') {
          this.filtrateName='自然涨停'
        }
        if (this.limitTab==='2') {
          this.filtrateName='自然跌停'
        }
      }
    },
    /*
    * 【涨跌停】排序
    */
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
        $('.lists-right .lists-title p').removeClass('desc').removeClass('asce')
        e.currentTarget.setAttribute('class', 'desc')
      }
      this.getLimitList()
    },
    /*
    * 【涨跌停打开】排序
    */
    clickSort2(e) {
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
        $('.lists-right .lists-title p').removeClass('desc').removeClass('asce')
        e.currentTarget.setAttribute('class', 'desc')
      }
      this.getLimitOpenList()
    },
    /*
    * 获取【涨跌停】列表数据数量
    */
    getLimitLen(type){

      // https://sslapi.jrj.com.cn/zxhq/sapi/datacenter/query_up_down_limit?type=1
      var url='https://sslapi.jrj.com.cn/zxhq/sapi/datacenter/query_up_down_limit?type='+type
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
    /*
    * 获取【涨跌停】列表数据
    */
    getLimitList(){

      // https://sslapi.jrj.com.cn/zxhq/sapi/datacenter/query_up_down_limit?type=1&sort_column=1&order_type=desc
      var url='https://sslapi.jrj.com.cn/zxhq/sapi/datacenter/query_up_down_limit?type='+this.limitTab+'&sort_column='+this.sort1+'&order_type='+this.order1
      // console.log('涨跌停：'+url)
      fetch(url, {
        method:'get',
        mode:'cors',
        cache:'default'
      }).then((res) => {
        return res.json()
      }).then(v => {
        if (v.data.items.length===0) {
          this.limitList=[]
        }else{
          this.limitList=v.data.items
        }
      }).catch(v2 => {
        console.log(v2)
      })

    },
    /*
    * 获取【涨跌停打开】列表数据数量
    */
    getLimitOpenLen(type){

      // https://sslapi.jrj.com.cn/zxhq/sapi/datacenter/query_open_up_down_limit?type=1
      var url='https://sslapi.jrj.com.cn/zxhq/sapi/datacenter/query_open_up_down_limit?type='+type
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
    /*
    * 获取【涨跌停打开】列表数据
    */
    getLimitOpenList(){
      // https://sslapi.jrj.com.cn/zxhq/sapi/datacenter/query_open_up_down_limit?type=1&sort_column=1&order_type=desc
      var url='https://sslapi.jrj.com.cn/zxhq/sapi/datacenter/query_open_up_down_limit?type='+this.limitOpenTab+'&sort_column='+this.sort1+'&order_type='+this.order1
      // console.log('涨跌停打开：'+url)
      fetch(url, {
        method:'get',
        mode:'cors',
        cache:'default'
      }).then((res) => {
        return res.json()
      }).then(v => {
        if (v.data.items.length===0) {
          this.limitOpenList=[]
        }else{
          this.limitOpenList=v.data.items
        }
      }).catch(v2 => {
        console.log(v2)
      })

    }
  }
}
</script>
