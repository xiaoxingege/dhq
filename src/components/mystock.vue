<style>
@import '../assets/css/reset.css';
body {
  background: #f7f7f7;
}

.red {
  color: #ff4040 !important;
}

.gray {
  color: #666 !important;
}

.green {
  color: #26be6a !important;
}

.blue {
  color: #3996F2 !important
}

.alldata {
  font-size: .24rem;
  color: #333;
  overflow: hidden;
  background: #fff;
  position: relative;
}

.mask {
  position: absolute;
  right: 0;
  width: .6rem;
  height: 100%;
  background: url(../assets/images/hangqing/mask.png) bottom right;
  background-size: 100% auto;
  top: 0
}

.data_hd {
  color: #aaa;
  line-height: .77rem;
  position: relative;
  background: #fff;
}

.data_hd .icon {
  display: inline-block;
  width: .15rem;
  height: .15rem;
  background: url(../assets/images/hangqing/default.png) no-repeat bottom right;
  background-size: .1rem .1rem;
}

.data_hd .iconup,
.data_hd .icondown {
  color: #3996F2
}

.data_hd .iconup .icon {
  background-image: url(../assets/images/hangqing/up.png);
  background-size: .1rem .2rem;
  height: .2rem;
}

.data_hd .icondown .icon {
  background-image: url(../assets/images/hangqing/down.png);
  background-size: .1rem .2rem;
  height: .2rem;
}

.data_hd,
.alldata .dataitem {
  border-bottom: 1px solid #e6e6e6;
}

.data_zuo,
.data_you {
  padding-top: .77rem;
}

.alldata .dataitem {
  position: relative;
  height: 1.2rem
}

.data_r .data_hd {
  text-align: right;
  position: fixed;
  left: 30%;
  top: 0;
  background: #fff;
  z-index: 3;
  width: 17.5rem;
}

.data_l {
  width: 30%
}

.data_l .data_hd {
  position: fixed;
  width: 30%;
  left: 0;
  top: 0;
  z-index: 4;
}

.data_l .data_hd span {
  padding-left: .3rem
}

.data_zuo b {
  display: block;
  font-size: .32rem
}

.data_zuo li {
  padding-left: .3rem;
  height: 1.2rem;
}

.data_zuo li b {
  padding-top: .35rem;
}

.datazuo1 li b {
  padding-top: .2rem;
}

.data_zuo em {
  display: block;
  font-size: .24rem;
  color: #888
}

.data_r {
  width: 70%;
  overflow-x: auto;
}

.data_r>div {
  width: 12.4rem;
}

.data_r .bigwidth {
  width: 17.5rem;
}

.data_r .data_hd span {
  width: 1.7rem;
  float: left;
}

.data_you span {
  float: left;
  width: 1.7rem;
  text-align: right;
  line-height: 1.2rem;
  font-size: .3rem
}
</style>

<template>
<div class="mystock">
  <div class="alldata clearfix">
    <div class="data_l fl">
      <div class="data_hd">
        <span>股票名称</span>
      </div>
      <ul class="data_zuo datazuo1" >
        <li class="dataitem" v-for="item in dataarr" @click="gotostock(item.stockName,item.stockCode)"><b>{{item.stockName}}</b><em>{{item.stockCode}}</em></li>
      </ul>
    </div>
    <div class="data_r fl" @scroll="scrollLeft($event)">
      <div class="bigwidth">
        <div class="data_hd clearfix datahd1" :style="{left:-scrollleftpx+'px'}" ref="myspanbox">
          <span data-index='1' :class="sortcolumn ==='1' ? 'icondown' : '' " @click="paixu($event)">主力净流入<i class="icon" ></i></span>
          <span data-index='2' :class="sortcolumn ==='2' ? 'icondown' : '' " @click="paixu($event)">现价<i class="icon"></i></span>
          <span data-index='3' :class="sortcolumn ==='3' ? 'icondown' : '' " @click="paixu($event)">涨跌幅<i class="icon"></i></span>
          <span data-index='4' :class="sortcolumn ==='4' ? 'icondown' : '' " @click="paixu($event)">主力流入<i class="icon"></i></span>
          <span data-index='5' :class="sortcolumn ==='5' ? 'icondown' : '' " @click="paixu($event)">主力流出<i class="icon"></i></span>
          <span data-index='6' :class="sortcolumn ==='6' ? 'icondown' : '' " @click="paixu($event)">总成交额<i class="icon"></i></span>
          <span data-index='7' :class="sortcolumn ==='7' ? 'icondown' : '' " @click="paixu($event)">量比<i class="icon"></i></span>
          <span data-index='8' :class="sortcolumn ==='8' ? 'icondown' : '' " @click="paixu($event)">换手率<i class="icon"></i></span>
          <span data-index='9' :class="sortcolumn ==='9' ? 'icondown' : '' " @click="paixu($event)">流通市值<i class="icon"></i></span>
          <span data-index='10' :class="sortcolumn ==='10' ? 'icondown' : '' " @click="paixu($event)">总市值<i class="icon"></i></span>
        </div>
        <div class="data_you datayou1">
          <div class="clearfix dataitem" v-for="item in dataarr" @click="gotostock(item.stockName,item.stockCode)">
            <span :class="addcolor(item.mainForceNetInflow)">{{item.mainForceNetInflow | changyi  }}</span>
            <span :class="addcolor(item.advanceDeclineRatio)">{{item.currentPrice}}</span>
            <span :class="addcolor(item.advanceDeclineRatio)">{{item.advanceDeclineRatio}}%</span>
            <span :class="addcolor(item.mainForceInflow)">{{item.mainForceInflow | changyi }}</span>
            <span class="green">{{item.mainForceOutflow | changyi }}</span>
            <span>{{item.dealBalance | changyi }}</span>
            <span :class="addcolor(item.cat)">{{item.cat}}%</span>
            <span>{{item.tr}}%</span>
            <span>{{item.cmv | changyi }}</span>
            <span>{{item.tmv | changyi }}</span>
          </div>
        </div>
      </div>
    </div>
    <i class="mask"></i>
  </div>
</div>
</template>

<script>
import jQuery from 'jquery'
import 'whatwg-fetch'

export default {
  data () {
    return {
      sortcolumn: this.getQueryString('sortcolumn'), // 默认排序 1  按主力净流入排序 3  涨跌幅排序
      groupid: this.getQueryString('groupid'),
      stockcodes: this.getQueryString('stockcodes'),
      scrollleftpx: '30%',
      url:'https://sslapi.jrj.com.cn/zxhq/sapi/mystock/query_stock_fund_flow',
      ordertype: 'desc', // asc=升，desc=降，默认降序
      dataarr:[]
    }
  },
  mounted () {
    window.jQuery = window.$ = jQuery
    document.title = '自选股'

    // stockcodes存在 加载未登录数据，否则加载登录数据
    if (this.stockcodes) { 
      this.fetchLogoutData()
    }else{
      this.fetchLoginData()
    }
  },
  filters: {
    changyi (v) {
      return (v / 100000000).toFixed(2) + '亿'
    }
  },
  methods: {
    getQueryString (name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
      var r = window.location.search.substr(1).match(reg)
      if (r != null) return unescape(r[2])
      return null
    },
    fetchLogoutData () {
      var url=''
      url = this.url + '?sort_column=' + this.sortcolumn + '&order_type=' + this.ordertype+'&stock_codes='+this.stockcodes
      console.log('fetchLogoutData: '+url)

      fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
      }).then((res) => {
        return res.json()
      }).then(v => {
        this.$data['dataarr'] = v.data.items
      }).catch(v2 => {
        console.log(v2)
      })

    },
    fetchLoginData () {
      var url=''
      url = this.url + '?sort_column=' + this.sortcolumn + '&order_type=' + this.ordertype+'&group_id=' + this.groupid
      console.log('fetchLoginData: '+url)
      
      var _this = this
      if (!window.jrj) {
        setTimeout(this.fetchData.bind(this), 100)
        return
      }
      window.callbackgobtninfo = function (t) {
        _this.$data['dataarr'] = t.data.items
        console.log('回调')
      }
      if (window.jrj && window.jrj.jsCallNative) {
        window.jrj.jsCallNative('130', JSON.stringify({
          method: 'get',
          url: url,
          params: {},
          callback: 'callbackgobtninfo',
          version: '3.10.1'
        }))
      }
    },
    
    // 正红负绿
    addcolor (v) {
      if ((v + '').indexOf('-') !== -1) {
        return 'green'
      } else {
        return 'red'
      }
    },
    scrollLeft (v) {
      this.scrollleftpx = v.target.scrollLeft - v.target.offsetLeft
    },
    paixu (v) {
      document.body.scrollTop = 0
      if (this.sortcolumn === v.currentTarget.getAttribute('data-index')) {
        if (this.ordertype === 'asc') {
          this.ordertype = 'desc'
          v.currentTarget.setAttribute('class', 'icondown')
        } else {
          this.ordertype = 'asc'
          v.currentTarget.setAttribute('class', 'iconup')
        }
      } else {
        this.sortcolumn = v.currentTarget.getAttribute('data-index')
        this.ordertype = 'desc'

        $('.data_hd span').removeClass('icondown').removeClass('iconup')
        v.currentTarget.setAttribute('class', 'icondown')
      }
      if (this.stockcodes) { 
        this.fetchLogoutData()
      }else{
        this.fetchLoginData()
      }
    },
    gotostock (stockName, stockCode) {
      window.jrj.jsCallNative('100', JSON.stringify({
        'stockName': stockName,
        'stockCode': stockCode
      }))
    }
  }
}
</script>
