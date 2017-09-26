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
.alldata li {
  border-bottom: 1px solid #e6e6e6;
}

.data_zuo,
.data_you {
  padding-top: .77rem;
}

.alldata li {
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

.loading {
  text-align: center;
  line-height: .5rem;
  font-size: .3rem;
}
</style>

<template>
<div class="hangqing">
  <div class="alldata clearfix">
    <div class="data_l fl">
      <div class="data_hd">
        <span v-if="typeurl == 1">股票名称22</span>
        <span v-if="typeurl == 2">概念</span>
        <span v-if="typeurl == 3">行业</span>
      </div>
      <ul class="data_zuo datazuo1" v-if="typeurl == 1">
        <li v-for="item in dataarr1" @click="gotostock(item.stockName,item.stockCode)"><b>{{item.stockName}}</b><em>{{item.stockCode}}</em></li>
      </ul>
      <ul class="data_zuo datazuo2" v-if="typeurl == 2">
        <li v-for="item in dataarr2" @click="gotobankuai(item.name,item.code)"><b>{{item.name}}</b></li>
      </ul>
      <ul class="data_zuo datazuo3" v-if="typeurl == 3">
        <li v-for="item in dataarr3" @click="gotobankuai(item.name,item.code)"><b>{{item.name}}</b></li>
      </ul>
    </div>
    <div class="data_r fl" @scroll="scrollLeft($event)">
      <div :class="typeurl == '1' ? 'bigwidth' : ''">
        <div class="data_hd clearfix datahd1" :style="{left:-scrollleftpx+'px'}" v-if="typeurl == 1" ref="myspanbox">
          <span data-index='1' class="icondown" @click="paixu($event)">主力净流入<i class="icon" ></i></span>
          <span data-index='2' @click="paixu($event)">现价<i class="icon"></i></span>
          <span data-index='3' @click="paixu($event)">涨跌幅<i class="icon"></i></span>
          <span data-index='4' @click="paixu($event)">主力流入<i class="icon"></i></span>
          <span data-index='5' @click="paixu($event)">主力流出<i class="icon"></i></span>
          <span data-index='6' @click="paixu($event)">总成交额<i class="icon"></i></span>
          <span data-index='7' @click="paixu($event)">量比<i class="icon"></i></span>
          <span data-index='8' @click="paixu($event)">换手率<i class="icon"></i></span>
          <span data-index='9' @click="paixu($event)">流通市值<i class="icon"></i></span>
          <span data-index='10' @click="paixu($event)">总市值<i class="icon"></i></span>
        </div>
        <div class="data_hd clearfix datahd2" :style="{left:-scrollleftpx+'px'}" v-if="typeurl == 2">
          <span data-index='0' :class="sortcolumn ==='0' ? 'icondown' : '' " @click="paixu($event)">主力净流入<i class="icon"></i></span>
          <span data-index='4' :class="sortcolumn ==='4' ? 'icondown' : '' " @click="paixu($event)">涨跌幅<i class="icon"></i></span>
          <span data-index='6'>领涨股</span>
          <span data-index='1' @click="paixu($event)">主力流入<i class="icon"></i></span>
          <span data-index='2' @click="paixu($event)">主力流出<i class="icon"></i></span>
          <span data-index='3' @click="paixu($event)">总成交额<i class="icon"></i></span>
          <span data-index='5' @click="paixu($event)">涨股比<i class="icon"></i></span>
        </div>
        <div class="data_hd clearfix datahd3" :style="{left:-scrollleftpx+'px'}" v-if="typeurl == 3">
          <span data-index='0' :class="sortcolumn ==='0' ? 'icondown' : '' " @click="paixu($event)">主力净流入<i class="icon "></i></span>
          <span data-index='4' :class="sortcolumn ==='4' ? 'icondown' : '' " @click="paixu($event)">涨跌幅<i class="icon"></i></span>
          <span data-index='6'>领涨股</span>
          <span data-index='1' @click="paixu($event)">主力流入<i class="icon"></i></span>
          <span data-index='2' @click="paixu($event)">主力流出<i class="icon"></i></span>
          <span data-index='3' @click="paixu($event)">总成交额<i class="icon"></i></span>
          <span data-index='5' @click="paixu($event)">涨股比<i class="icon"></i></span>
        </div>
        <ul class="data_you datayou1" v-if="typeurl == 1">
          <li class="clearfix" v-for="item in dataarr1" @click="gotostock(item.stockName,item.stockCode)">
            <span :class="addcolor(item.mainForceNetInflow)">{{item.mainForceNetInflow | changyi  }}</span>
            <span :class="addcolor(item.advanceDeclineRatio)">{{item.currentPrice}}</span>
            <span :class="addcolor(item.advanceDeclineRatio)">{{item.advanceDeclineRatio}}%</span>
            <span :class="addcolor(item.mainForceInflow)">{{item.mainForceInflow | changyi }}</span>
            <span class="green">{{item.mainForceOutflow | changyi }}</span>
            <span>{{item.dealBalance | changyi }}</span>
            <span :class="addcolor(item.cat)">{{item.cat}}</span>
            <span>{{item.tr}}</span>
            <span>{{item.cmv | changyi }}</span>
            <span>{{item.tmv | changyi }}</span>
          </li>
        </ul>
        <ul class="data_you datayou2" v-if="typeurl == 2">
          <li class="clearfix" v-for="item in dataarr2">
            <span :class="addcolor(item.mainForceNetInflow)">{{item.mainForceNetInflow | changyi}}</span>
            <span :class="addcolor(item.advanceDeclineRatio)">{{item.advanceDeclineRatio}}%</span>
            <span @click="gotostock(item.leaderStockName,item.leaderStockCode)">{{item.leaderStockName}}</span>
            <span :class="addcolor(item.mainForceInflow)">{{item.mainForceInflow | changyi }}</span>
            <span class="green">{{item.mainForceOutflow | changyi }}</span>
            <span>{{item.dealBalance | changyi }}</span>
            <span>{{item.shareRatio}}%</span>
          </li>
        </ul>
        <ul class="data_you datayou3" v-if="typeurl == 3">
          <li class="clearfix" v-for="item in dataarr3">
            <span :class="addcolor(item.mainForceNetInflow)">{{item.mainForceNetInflow | changyi }}</span>
            <span :class="addcolor(item.advanceDeclineRatio)">{{item.advanceDeclineRatio}}%</span>
            <span @click="gotostock(item.leaderStockName,item.leaderStockCode)">{{item.leaderStockName}}</span>
            <span :class="addcolor(item.mainForceInflow)">{{item.mainForceInflow | changyi }}</span>
            <span class="green">{{item.mainForceOutflow | changyi }}</span>
            <span>{{item.dealBalance | changyi }}</span>
            <span>{{item.shareRatio}}%</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="loading">
      加载中...
    </div>
    <i class="mask"></i>
  </div>
</div>
</template>

<script>
import jQuery from 'jquery'
import 'whatwg-fetch'

var testData = {
  'retcode': 0,
  'msg': '',
  'data': {
    'items': [{
      'stockCode': '601336',
      'stockName': '新华保险',
      'mktType': 'cn.sh',
      'stockType': 's',
      'stp': 0,
      'mainForceNetInflow': 143757651,
      'currentPrice': 59.06,
      'advanceDeclineRatio': 1.92,
      'mainForceInflow': 395389152,
      'mainForceOutflow': 251631501,
      'dealBalance': 952105954,
      'cat': 1.15,
      'tr': 0.78,
      'cmv': 1.2316609E+11,
      'tmv': 1.8424062E+11,
      'netInflow': 1.463137E+8
    }, {
      'stockCode': '600741',
      'stockName': '华域汽车',
      'mktType': 'cn.sh',
      'stockType': 's',
      'stp': 0,
      'mainForceNetInflow': 37756895,
      'currentPrice': 21.84,
      'advanceDeclineRatio': 1.25,
      'mainForceInflow': 1.7145059E+8,
      'mainForceOutflow': 133693695,
      'dealBalance': 503808793,
      'cat': 1.7,
      'tr': 0.8,
      'cmv': 6.260458E+10,
      'tmv': 6.8855405E+10,
      'netInflow': 45356769
    }, {
      'stockCode': '601633',
      'stockName': '长城汽车',
      'mktType': 'cn.sh',
      'stockType': 's',
      'stp': 0,
      'mainForceNetInflow': 27198428,
      'currentPrice': 12.37,
      'advanceDeclineRatio': -0.16,
      'mainForceInflow': 77063305,
      'mainForceOutflow': 49864877,
      'dealBalance': 275852108,
      'cat': 1.26,
      'tr': 0.38,
      'cmv': 7.456302E+10,
      'tmv': 1.1290433E+11,
      'netInflow': 1.467648E+7
    }, {
      'stockCode': '600556',
      'stockName': 'ST慧球',
      'mktType': 'cn.sh',
      'stockType': 's',
      'stp': 0,
      'mainForceNetInflow': -507959.0,
      'currentPrice': 8.28,
      'advanceDeclineRatio': 0.24,
      'mainForceInflow': 3810141.0,
      'mainForceOutflow': 4318100.0,
      'dealBalance': 65451347,
      'cat': 0.46,
      'tr': 1.99,
      'cmv': 3.2688612E+9,
      'tmv': 3.2688612E+9,
      'netInflow': -6307957.0
    }, {
      'stockCode': '300108',
      'stockName': '吉药控股',
      'mktType': 'cn.sz',
      'stockType': 's',
      'stp': 0,
      'mainForceNetInflow': -1302396.5,
      'currentPrice': 9.17,
      'advanceDeclineRatio': 0.77,
      'mainForceInflow': 1451217.0,
      'mainForceOutflow': 2753613.5,
      'dealBalance': 29098394.69,
      'cat': 1.45,
      'tr': 0.75,
      'cmv': 4.0414025E+9,
      'tmv': 5.8322119E+9,
      'netInflow': -79562.11
    }, {
      'stockCode': '600335',
      'stockName': '国机汽车',
      'mktType': 'cn.sh',
      'stockType': 's',
      'stp': 0,
      'mainForceNetInflow': -2297820.0,
      'currentPrice': 13.27,
      'advanceDeclineRatio': -0.97,
      'mainForceInflow': 7799320.0,
      'mainForceOutflow': 1.009714E+7,
      'dealBalance': 5.658139E+7,
      'cat': 0.44,
      'tr': 0.41,
      'cmv': 1.366465E+10,
      'tmv': 1.366465E+10,
      'netInflow': -10501814
    }, {
      'stockCode': '600609',
      'stockName': '金杯汽车',
      'mktType': 'cn.sh',
      'stockType': 's',
      'stp': 0,
      'mainForceNetInflow': -2361486.0,
      'currentPrice': 6.31,
      'advanceDeclineRatio': -4.1,
      'mainForceInflow': 1406155.0,
      'mainForceOutflow': 3767641.0,
      'dealBalance': 41500018,
      'cat': 0.47,
      'tr': 0.59,
      'cmv': 6.8947475E+9,
      'tmv': 6.8947475E+9,
      'netInflow': -14236992
    }, {
      'stockCode': '600686',
      'stockName': '金龙汽车',
      'mktType': 'cn.sh',
      'stockType': 's',
      'stp': 0,
      'mainForceNetInflow': -6222479.0,
      'currentPrice': 15.48,
      'advanceDeclineRatio': -3.43,
      'mainForceInflow': 50397289,
      'mainForceOutflow': 56619768,
      'dealBalance': 185610545,
      'cat': 0.7,
      'tr': 2.71,
      'cmv': 6.8514475E+9,
      'tmv': 9.392335E+9,
      'netInflow': -19116379
    }, {
      'stockCode': '002133',
      'stockName': '广宇集团',
      'mktType': 'cn.sz',
      'stockType': 's',
      'stp': 0,
      'mainForceNetInflow': -16812601.02,
      'currentPrice': 5.48,
      'advanceDeclineRatio': -5.52,
      'mainForceInflow': 8451564.14,
      'mainForceOutflow': 25264165.16,
      'dealBalance': 122288009.19,
      'cat': 0.65,
      'tr': 3.64,
      'cmv': 3.2977544E+9,
      'tmv': 4.2422872E+9,
      'netInflow': -31658006.41
    }, {
      'stockCode': '600418',
      'stockName': '江淮汽车',
      'mktType': 'cn.sh',
      'stockType': 's',
      'stp': 0,
      'mainForceNetInflow': -20626746,
      'currentPrice': 10.38,
      'advanceDeclineRatio': -0.95,
      'mainForceInflow': 48453203,
      'mainForceOutflow': 69079949,
      'dealBalance': 233192554,
      'cat': 0.46,
      'tr': 1.54,
      'cmv': 1.50244275E+10,
      'tmv': 1.96525575E+10,
      'netInflow': -21770326
    }, {
      'stockCode': '600297',
      'stockName': '广汇汽车',
      'mktType': 'cn.sh',
      'stockType': 's',
      'stp': 0,
      'mainForceNetInflow': -4.208412E+7,
      'currentPrice': 8.22,
      'advanceDeclineRatio': -2.95,
      'mainForceInflow': 23922635,
      'mainForceOutflow': 66006755,
      'dealBalance': 184299714,
      'cat': 1.18,
      'tr': 0.93,
      'cmv': 1.96604325E+10,
      'tmv': 5.8777275E+10,
      'netInflow': -55319182
    }, {
      'stockCode': '000776',
      'stockName': '广发证券',
      'mktType': 'cn.sz',
      'stockType': 's',
      'stp': 0,
      'mainForceNetInflow': -56557333.16,
      'currentPrice': 18.86,
      'advanceDeclineRatio': -0.89,
      'mainForceInflow': 106902850.52,
      'mainForceOutflow': 163460183.68,
      'dealBalance': 482163533.86,
      'cat': 0.62,
      'tr': 0.43,
      'cmv': 1.1163781E+11,
      'tmv': 1.4373376E+11,
      'netInflow': -64326504.36
    }, {
      'stockCode': '600004',
      'stockName': '白云机场',
      'mktType': 'cn.sh',
      'stockType': 's',
      'stp': 0,
      'mainForceNetInflow': -58477608,
      'currentPrice': 12.81,
      'advanceDeclineRatio': -1.54,
      'mainForceInflow': 25086659,
      'mainForceOutflow': 83564267,
      'dealBalance': 225266599,
      'cat': 1.39,
      'tr': 0.85,
      'cmv': 2.650799E+10,
      'tmv': 2.650799E+10,
      'netInflow': -43986619
    }, {
      'stockCode': '600006',
      'stockName': '东风汽车',
      'mktType': 'cn.sh',
      'stockType': 's',
      'stp': 0,
      'mainForceNetInflow': -58829608,
      'currentPrice': 6.24,
      'advanceDeclineRatio': -3.41,
      'mainForceInflow': 14027032,
      'mainForceOutflow': 7.285664E+7,
      'dealBalance': 197745814,
      'cat': 0.62,
      'tr': 1.58,
      'cmv': 1.248E+10,
      'tmv': 1.248E+10,
      'netInflow': -64794864
    }, {
      'stockCode': '600166',
      'stockName': '福田汽车',
      'mktType': 'cn.sh',
      'stockType': 's',
      'stp': 0,
      'mainForceNetInflow': -93787941,
      'currentPrice': 2.97,
      'advanceDeclineRatio': -2.62,
      'mainForceInflow': 29272532,
      'mainForceOutflow': 123060473,
      'dealBalance': 241640682,
      'cat': 0.61,
      'tr': 1.21,
      'cmv': 1.98102862E+10,
      'tmv': 1.98102862E+10,
      'netInflow': -1.077081E+8
    }, {
      'stockCode': '603993',
      'stockName': '洛阳钼业',
      'mktType': 'cn.sh',
      'stockType': 's',
      'stp': 0,
      'mainForceNetInflow': -1.1670182E+8,
      'currentPrice': 7.39,
      'advanceDeclineRatio': -2.76,
      'mainForceInflow': 237724941,
      'mainForceOutflow': 354426761,
      'dealBalance': 891254775,
      'cat': 0.54,
      'tr': 0.92,
      'cmv': 9.572806E+10,
      'tmv': 1.5961838E+11,
      'netInflow': -126376991
    }, {
      'stockCode': '600291',
      'stockName': '西水股份',
      'mktType': 'cn.sh',
      'stockType': 's',
      'stp': 0,
      'mainForceNetInflow': -145761751,
      'currentPrice': 27.29,
      'advanceDeclineRatio': -4.78,
      'mainForceInflow': 186667304,
      'mainForceOutflow': 332429055,
      'dealBalance': 7.9517912E+8,
      'cat': 0.95,
      'tr': 2.93,
      'cmv': 2.671391E+10,
      'tmv': 2.98296075E+10,
      'netInflow': -163110572
    }, {
      'stockCode': '601318',
      'stockName': '中国平安',
      'mktType': 'cn.sh',
      'stockType': 's',
      'stp': 0,
      'mainForceNetInflow': -308931401,
      'currentPrice': 54.16,
      'advanceDeclineRatio': 0.22,
      'mainForceInflow': 1500058147,
      'mainForceOutflow': 1808989548,
      'dealBalance': 3572267811,
      'cat': 1.02,
      'tr': 0.61,
      'cmv': 5.8669688E+11,
      'tmv': 9.9005776E+11,
      'netInflow': -301897801
    }, {
      'stockCode': '000839',
      'stockName': '中信国安',
      'mktType': 'cn.sz',
      'stockType': 's',
      'stp': 0,
      'mainForceNetInflow': -377072678.46,
      'currentPrice': 10.84,
      'advanceDeclineRatio': -5.08,
      'mainForceInflow': 337229218.9,
      'mainForceOutflow': 714301897.36,
      'dealBalance': 1342864287.52,
      'cat': 0.04,
      'tr': 3.08,
      'cmv': 4.248207E+10,
      'tmv': 4.249096E+10,
      'netInflow': -377450689.1
    }]
  }
}

export default {
  data() {
    return {
      typeurl: this.getQueryString('a'), // 个股1，概念2，行业3
      sortcolumn: this.getQueryString('sortcolumn'), // 默认排序 0  按主力净流入排序 1  涨跌幅排序
      scrollleftpx: '30%',
      groupid: 4973837,
      passportid: 160809010058171533,
      dataarr1: [],
      dataarr2: [],
      dataarr3: [],
      urllink: {
        1: {
          'url': 'https://sslapi.jrj.com.cn/zxhq/sapi/mystock/query_stock_fund_flow',
          'sort_column': '1', // 排序字段
          'order_type': 'desc' // asc=升，desc=降，默认降序
        },
        2: {
          'url': 'https://sslapi.jrj.com.cn/zxhq/sapi/plat/list',
          'sort_column': this.getQueryString('sortcolumn'), // 排序字段
          'order_type': 'desc' // asc=升，desc=降，默认降序
        },
        3: {
          'url': 'https://sslapi.jrj.com.cn/zxhq/sapi/plat/list',
          'sort_column': this.getQueryString('sortcolumn'), // 排序字段
          'order_type': 'desc' // asc=升，desc=降，默认降序
        }
      },
      titlearr: ['个股', '概念', '行业']
    }
  },
  mounted() {
    window.jQuery = window.$ = jQuery
    document.title = '自选股'

    this.jiazaidata()
    var _this = this
    var sw = true
    window.addEventListener('scroll', function() {
      sw = true
      if (document.body.scrollTop + window.innerHeight >= document.body.offsetHeight) {
        if (sw === true) {
          if (sw === false) {
            return
          }
          sw = false
          setTimeout(() => {
            var urll = _this.urllink[_this.typeurl]
            urll.pn++
              var url = urll.url + '?group_id=' + this.groupid + '&sort_column=' + urll.sort_column + '&order_type=' + urll.order_type
            var t = function() {
              alert(window.jrj)
              alert(url)
              if (window.jrj && window.jrj.jsCallNative) {
                window.callbackgobtninfo2 = function(t) {
                  alert(t)
                  if (typeof t === 'object') {
                    for (var key in t) {
                      alert(key)
                    }
                  }
                  alert(window.convertToJsonObject + 'convertToJsonObject')
                  t = window.convertToJsonObject(t)
                  sw = false
                  if (t.data.items.length === 0) {
                    $('.loading').hide()
                  } else {
                    _this.$data['dataarr' + _this.typeurl] = _this['dataarr' + _this.typeurl].concat(t.data.items)
                    sw = true
                  }
                }
                window.jrj.jsCallNative('130', JSON.stringify({
                  method: 'get',
                  url: url,
                  params: {},
                  header: {
                    'passportId': 160809010058171533
                  },
                  callback: 'callbackgobtninfo2',
                  version: '3.10.1'
                }))
                alert('真实数据2')
              } else {
                window.callbackgobtninfo2(testData)
                alert('测试数据2')
              }
            }
            t()
          }, 1000)
        }
      }
    })
  },
  filters: {
    changyi(v) {
      return (v / 100000000).toFixed(2) + '亿'
    }
  },
  methods: {
    getQueryString(name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
      var r = window.location.search.substr(1).match(reg)
      if (r != null) return unescape(r[2])
      return null
    },
    jiazaidata() {
      var urll = this.urllink[this.typeurl]
      var url = urll.url + '?group_id=' + this.groupid + '&sort_column=' + urll.sort_column + '&order_type=' + urll.order_type
      var _this = this
      if (!window.jrj) {
        setTimeout(this.jiazaidata.bind(this), 1000)
      }
      window.callbackgobtninfo = function(t) {
        _this.$data['dataarr' + _this.typeurl] = t.data.items
      }
      alert(window.jrj)
      if (window.jrj && window.jrj.jsCallNative) {
        window.jrj.jsCallNative('130', JSON.stringify({
          method: 'get',
          url: url,
          params: {},
          header: {
            'passportId': 160809010058171533
          },
          callback: 'callbackgobtninfo',
          version: '3.10.1'
        }))
        alert('真实数据1')
      } else {
        window.callbackgobtninfo(testData)
        alert('测试数据1')
      }
    },
    // 正红负绿
    addcolor(v) {
      if ((v + '').indexOf('-') !== -1) {
        return 'green'
      } else {
        return 'red'
      }
    },
    scrollLeft(v) {
      this.scrollleftpx = v.target.scrollLeft - v.target.offsetLeft
    },
    paixu(v) {
      var o = this.urllink[this.typeurl]
      o['pn'] = 1
      document.body.scrollTop = 0
      $('.loading').show()
      if (o['sort_column'] === v.currentTarget.getAttribute('data-index')) {
        if (o['order_type'] === 'asc') {
          o['order_type'] = 'desc'
          v.currentTarget.setAttribute('class', 'icondown')
        } else {
          o['order_type'] = 'asc'
          v.currentTarget.setAttribute('class', 'iconup')
        }
      } else {
        o['sort_column'] = v.currentTarget.getAttribute('data-index')
        o['order_type'] = 'desc'

        $('.data_hd span').removeClass('icondown').removeClass('iconup')
        v.currentTarget.setAttribute('class', 'icondown')
      }
      this.jiazaidata()
    },
    gotostock(stockName, stockCode) {
      window.jrj.jsCallNative('100', JSON.stringify({
        'stockName': stockName,
        'stockCode': stockCode
      }))
    },
    gotobankuai(platname, platcode) {
      window.jrj.jsCallNative('161', JSON.stringify({
        'platname': platname,
        'platcode': platcode,
        'plattype': this.urllink[this.typeurl].platType
      }))
    }
  }
}
</script>
