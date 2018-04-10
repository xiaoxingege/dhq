<style lang="scss" scoped="">
@import "../../assets/scss/style.scss";
.top-industry-con {
    width: 100%;
}
.top-industry-top {
    height: 11.5%;
    position: relative;
}
.top-industry-table-wrap {
    height: 88.5%;
}
.top-industry-table {
    float: left;
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
.top-industry-table tr:hover {
    background-color: $hoverBgColor;
}
.top-industry-table td span {
    cursor: pointer;
}
.top-industry-table td {
    border: 1px solid $lineAndTitleColor;
    text-align: center;
    height: 10%;
}
.top-industry-table tr:nth-child(1) td {
    border-top-width: 0;
    text-align: center;
    color: $wordsColorBase;
}
.top-industry-table tbody tr:last-child td {
    border-bottom-width: 0;
}
.top-industry-table tr td:last-child {
    border-right-width: 0;
}
.top-industry-table tr td:first-child {
    text-align: left;
    padding-left: 23px;
    color: $wordsColorBase;
    padding-right: 0;
    border-left-width: 0;
}
.top-industry-table tr td:nth-child(3) {
    text-align: left;
    padding-left: 23px;
    color: $wordsColorBase;
    padding-right: 0;
}
.more-industry {
    cursor: pointer;
    display: inline-block;
    position: absolute;
    top: 0;
    right: 10px;
    width: 40px;
    height: 100%;
}
.more-industry a {
    color: $grayWordsColor;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
}
</style>
<template>
<div class="top-industry-con">
  <div class="top-industry-top">
    <NavBar :data="navText" :type="type" v-on:changeType="changeNavType" :styleObject="styleObj" :styleLiObj="styleLiObj"></NavBar>
    <p class="more-industry" @click="toStockList(type)">
      <a>更多></a>
    </p>
  </div>
  <div class="top-industry-table-wrap clearfix">
    <table class="top-industry-table" v-if="type === 'industry' && industryList.length>0">
      <tr>
        <td>名称</td>
        <td>涨幅</td>
        <td>龙头股</td>
        <td>最新价</td>
        <td>涨幅</td>
      </tr>
      <tr v-for="item of industryList">
        <td @click="toIndustryDetail(item.industryCode)" style="cursor: pointer;">{{item.industryName === null?'--':item.industryName}}</td>
        <td v-z3-updowncolor="item.industryChg">{{formateData(item.industryChg)?'--':parseFloat(item.industryChg).toFixed(2)+'%'}}</td>
        <td><span @click="linkStock(item.innerCode)" v-z3-stock="{ref:'stockbox',code:item.innerCode}" :value="item.innerCode">{{formateData(item.stockName)?'--':item.stockName}}</span></td>
        <td v-z3-updowncolor="item.stockChg">{{formateData(item.stockVal)?'--':parseFloat(item.stockVal).toFixed(2)}}</td>
        <td v-z3-updowncolor="item.stockChg">{{formateData(item.stockChg)?'--':parseFloat(item.stockChg).toFixed(2)+'%'}}</td>
      </tr>
    </table>
    <table class="top-industry-table" v-if="type === 'topic' && hotTopicList.length>0">
      <tr>
        <td>名称</td>
        <td>涨幅</td>
        <td>龙头股</td>
        <td>最新价</td>
        <td>涨跌幅</td>
      </tr>
      <tr v-for="item of hotTopicList">
        <td @click="toTopicDetail(item.topicCode)"><span>{{formateData(item.topicName)?'--':item.topicName}}</span></td>
        <td v-z3-updowncolor="item.topicChngPct">{{formateData(item.topicChngPct)?'--':parseFloat(item.topicChngPct).toFixed(2)+'%'}}</td>
        <td><span @click="linkStock(item.innerCode)" v-z3-stock="{ref:'stockbox',code:item.innerCode}" :value="item.innerCode">{{formateData(item.stockName)?'--':item.stockName}}</span></td>
        <td v-z3-updowncolor="item.stockChngPct">{{formateData(item.stockPrice)?'--':parseFloat(item.stockPrice).toFixed(2)}}</td>
        <td v-z3-updowncolor="item.stockChngPct">{{formateData(item.stockChngPct)?'--':parseFloat(item.stockChngPct).toFixed(2)+'%'}}</td>
      </tr>
    </table>
  </div>
  <StockBox ref="stockbox"></StockBox>
</div>
</template>
<script>
import NavBar from 'components/dhqHome/nav-bar'
import StockBox from 'components/stock-box'
import {
  ctx
} from '../../z3tougu/config'
export default {
  props: ['strategyId'],
  data() {
    return {
      navText: [
        ['行业板块', 'industry'],
        ['题材板块', 'topic']
      ],
      type: 'industry',
      size: 10,
      limit: 10,
      sortField: 'topicMarket.chngPct',
      industryList: [],
      hotTopicList: [],
      updateDataPid: null,
      intervalTime: 6,
      styleObj: {
        backgroundColor: '#525a65'
      },
      styleLiObj: {
        width: '85px'
      }
    }
  },
  watch: {
    type() {
      /* this.industryList = []
      this.hotTopicList = []*/
      this.initTopIndustry() // 点击板块标签初始化表格数据
    }
  },
  components: {
    NavBar,
    StockBox
  },
  computed: {
    topIndustryData: function() {
      const topIndustryData = this.$store.state.dhqIndex.topIndustry
      topIndustryData.length = 8
      return topIndustryData
    },
    hotTopicData: function() {
      const hotTopicData = this.$store.state.dhqIndex.hotTopic
      hotTopicData.length = 8
      return hotTopicData
    }
  },
  methods: {
    changeNavType(data) {
      this.type = data
    },
    initTopIndustry(date) {
      if (this.type === 'industry') {
        this.$store.dispatch('dhqIndex/getTopIndustry', {
            size: this.size
          })
          .then(() => {
            this.industryList = this.topIndustryData
          })
      } else if (this.type === 'topic') {
        this.$store.dispatch('dhqIndex/getHotTopic', {
            limit: this.limit,
            sortField: this.sortField
          })
          .then(() => {
            this.hotTopicList = this.hotTopicData
          })
      }
    },
    autoUpdate: function() {
      const _this = this
      if (this.updateDataPid) {
        clearInterval(this.updateDataPid)
      } else {
        this.updateDataPid = setInterval(function() {
          _this.initTopIndustry()
        }, 1000 * _this.intervalTime)
      }
    },
    linkStock: function(innerCode) {
      if (innerCode) {
        window.open('/stock/' + innerCode)
      }
    },
    toTopicDetail: function(topicCode) {
      if (topicCode) {
        window.open(ctx + '/topic/' + topicCode)
      }
    },
    toIndustryDetail: function(code) {
      if (code) {
        window.open(ctx + '/industry/' + code.split('.')[0])
      }
    },
    toStockList: function(type) {
      if (type === 'topic') {
        window.open(ctx + '/themeIndex')
      } else if (type === 'industry') {
        window.open(ctx + '/industryIndex')
      }
    },
    formateData: function(value) {
      if (value || value === 0) {
        return false
      } else {
        return true
      }
    }
  },
  mounted() {
    this.initTopIndustry()
    this.autoUpdate()
  },
  destroyed() {
    this.updateDataPid && clearInterval(this.updateDataPid)
  }
}
</script>
