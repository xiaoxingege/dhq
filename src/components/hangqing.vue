<style>
@import '../assets/css/reset.css';
body {
  background: #f7f7f7
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
}

.data_hd {
  color: #aaa;
  line-height: .64rem;
  position: relative;
}

.data_hd .icon {
  display: inline-block;
  width: .15rem;
  height: .15rem;
  background: url(../assets/images/hangqing/default.png) no-repeat bottom right;
  background-size: .1rem .1rem;
}

.data_hd .iconup {
  background-image: url(../assets/images/hangqing/up.png);
  background-size: .1rem .2rem;
  height: .2rem;
}

.data_hd .icondown {
  background-image: url(../assets/images/hangqing/down.png);
  background-size: .1rem .2rem;
  height: .2rem;
}

.data_hd:before,
.alldata li:before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  border-bottom: 1px solid #e6e6e6;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  pointer-events: none;
  -webkit-transform: scale(.5);
  transform: scale(.5);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 200%;
}

.alldata li {
  position: relative;
}

.data_r .data_hd {
  text-align: right;
}

.data_l {
  width: 30%
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

.data_r_in {
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
  font-size: .34rem
}
</style>

<template>
<div class="hangqing">
  <div class="alldata clearfix">
    <div class="data_l fl">
      <div class="data_hd">
        <span>股票名称</span>
      </div>
      <ul class="data_zuo">
        <!-- <li><b>天富能源</b><em>600500</em></li>
        <li><b>你是谁</b><em>600500</em></li> -->
        <li v-for="item in dataarr"><b>{{item.stockName}}</b><em>{{item.stockCode}}</em></li>
      </ul>
    </div>
    <div class="data_r fl">
      <div class="data_r_in">
        <div class="data_hd clearfix">
          <span>主力净流入<i class="icon iconup"></i></span>
          <span>现价<i class="icon icondown"></i></span>
          <span class="blue">涨跌幅<i class="icon"></i></span>
          <span>主力流入<i class="icon"></i></span>
          <span>主力流出<i class="icon"></i></span>
          <span>总成交额<i class="icon"></i></span>
          <span>量比<i class="icon"></i></span>
          <span>换手率<i class="icon"></i></span>
          <span>流通市值<i class="icon"></i></span>
          <span>总市值<i class="icon"></i></span>
        </div>
        <ul class="data_you">
          <!-- <li class="clearfix">
            <span>23.23</span>
            <span>23.23%</span>
            <span>23.23</span>
            <span>923</span>
            <span>573</span>
            <span>312</span>
            <span>23.23</span>
            <span>23%</span>
            <span>523</span>
            <span>6573</span>
          </li>
          <li class="clearfix">
            <span>23.23</span>
            <span>23.23%</span>
            <span>23.23</span>
            <span>923</span>
            <span>573</span>
            <span>312</span>
            <span>23.23</span>
            <span>23%</span>
            <span>523</span>
            <span>6573</span>
          </li> -->
          <li class="clearfix" v-for="item in dataarr">
            <span>{{item.mainForceNetInflow}}</span>
            <span>{{item.currentPrice}}</span>
            <span>{{item.advanceDeclineRatio}}</span>
            <span>{{item.mainForceInflow}}</span>
            <span>{{item.mainForceOutflow}}</span>
            <span>{{item.dealBalance}}</span>
            <span>{{item.cat}}</span>
            <span>{{item.tr}}</span>
            <span>{{item.cmv}}</span>
            <span>{{item.tmv}}</span>
          </li>
        </ul>
      </div>
    </div>
    <i class="mask"></i>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      typeurl: this.getQueryString('a'),
      dataarr: [
        {
          'stockCode': '002340',
          'stockName': '格林美',
          'mainForceNetInflow': 587828235.48,
          'currentPrice': 6.78,
          'advanceDeclineRatio': 7.11,
          'mainForceInflow': 1360204950.51,
          'mainForceOutflow': 772376715.03,
          'dealBalance': 2208903559.97,
          'cat': 4.31,
          'tr': 10.53,
          'cmv': 2116062.75,
          'tmv': 2591003
        },
        {
          'stockCode': '601001',
          'stockName': '大同煤业',
          'mainForceNetInflow': 395010602,
          'currentPrice': 6.77,
          'advanceDeclineRatio': 6.45,
          'mainForceInflow': 586867944,
          'mainForceOutflow': 191857342,
          'dealBalance': 868274751,
          'cat': 60.2,
          'tr': 7.5,
          'cmv': 1133094.88,
          'tmv': 1133094.88
        },
        {
          'stockCode': '002182',
          'stockName': '云海金属',
          'mainForceNetInflow': 229557647.74,
          'currentPrice': 11.43,
          'advanceDeclineRatio': 10.01,
          'mainForceInflow': 303323606.16,
          'mainForceOutflow': 73765958.42,
          'dealBalance': 422534460.25,
          'cat': 2.42,
          'tr': 8.4,
          'cmv': 515184.41,
          'tmv': 738858.06
        }
      ]

    }
  },
  mounted () {
    document.title = '概念行业个股'
  },
  methods: {
    getQueryString (name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
      var r = window.location.search.substr(1).match(reg)
      if (r != null) return unescape(r[2])
      return null
    },
    jiazaidata () {

    }
  }
}
</script>
