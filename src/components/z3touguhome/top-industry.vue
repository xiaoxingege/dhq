<style lang="scss" scoped="">
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
.top-industry-table tr td:nth-child(3) {
    cursor: pointer;
}
.top-industry-table tr td:nth-child(3):hover {
    background-color: #2e4465;
}
.top-industry-table td {
    border: 1px solid #23272c;
    text-align: right;
    padding-right: 20px;
    height: auto;
}
.top-industry-table tr:nth-child(1) td {
    border-top-width: 0;
}
.top-industry-table tr:last-child td {
    border-bottom-width: 0;
}
.top-industry-table tr td:last-child {
    border-right-width: 0;
}
.top-industry-table tr td:first-child {
    text-align: left;
    padding-left: 48px;
    color: #c9d0d7;
    padding-right: 0;
    border-left-width: 0;
}
.top-industry-table tr td:nth-child(3) {
    text-align: left;
    padding-left: 48px;
    color: #c9d0d7;
    padding-right: 0;
}
.more-industry {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
}
.more-industry a {
    color: #808ba1;
}
.topic-first {
    cursor: pointer;
}
.topic-first:hover {
    background-color: #2e4465;
}
</style>
<template>
<div class="top-industry-con">
  <div class="top-industry-top">
    <NavBar :data="navText" :type="type" v-on:changeType="changeNavType"></NavBar>
    <!--<p class="more-industry">
      <a>更多></a>
    </p>-->
  </div>
  <div class="top-industry-table-wrap clearfix">
    <table class="top-industry-table" v-if="type === 'industry'">
      <tr v-for="item of industryList">
        <td>{{item.industryName === null?'--':item.industryName}}</td>
        <td v-z3-updowncolor="item.industryChg">{{formateData(item.industryChg)?'--':parseFloat(item.industryChg).toFixed(2)+'%'}}</td>
        <td @click="linkStock(item.innerCode)" v-z3-stock="{ref:'stockbox',code:item.innerCode}" :value="item.innerCode">{{formateData(item.stockName)?'--':item.stockName}}</td>
        <td v-z3-updowncolor="item.stockChg">{{formateData(item.stockVal)?'--':parseFloat(item.stockVal).toFixed(2)}}</td>
        <td v-z3-updowncolor="item.stockChg">{{formateData(item.stockChg)?'--':parseFloat(item.stockChg).toFixed(2)+'%'}}</td>
      </tr>
    </table>
    <table class="top-industry-table" v-if="type === 'topic'">
      <tr v-for="item of hotTopicList">
        <td @click="toTopicDetail(item.topicCode)" class="topic-first">{{formateData(item.topicName)?'--':item.topicName}}</td>
        <td v-z3-updowncolor="item.topicChngPct">{{formateData(item.topicChngPct)?'--':parseFloat(item.topicChngPct).toFixed(2)+'%'}}</td>
        <td @click="linkStock(item.innerCode)" v-z3-stock="{ref:'stockbox',code:item.innerCode}" :value="item.innerCode">{{formateData(item.stockName)?'--':item.stockName}}</td>
        <td v-z3-updowncolor="item.stockChngPct">{{formateData(item.stockPrice)?'--':parseFloat(item.stockPrice).toFixed(2)}}</td>
        <td v-z3-updowncolor="item.stockChngPct">{{formateData(item.stockChngPct)?'--':parseFloat(item.stockChngPct).toFixed(2)+'%'}}</td>
      </tr>
    </table>
  </div>
  <StockBox ref="stockbox"></StockBox>
</div>
</template>
<script>
import NavBar from 'components/z3touguhome/nav-bar'
import DataTable from 'components/z3touguhome/data-table'
import StockBox from 'components/stock-box'
import {
  ctx
} from '../../z3tougu/config'
export default {
  props: ['strategyId'],
  data () {
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
      intervalTime: 6
    }
  },
  watch: {
    type () {
      /* this.industryList = []
      this.hotTopicList = []*/
      this.initTopIndustry() // 点击板块标签初始化表格数据
    }
  },
  components: {
    NavBar,
    DataTable,
    StockBox
  },
  computed: {
    topIndustryData: function () {
      const topIndustryData = this.$store.state.z3touguIndex.topIndustry
      return topIndustryData
    },
    hotTopicData: function () {
      const hotTopicData = this.$store.state.z3touguIndex.hotTopic
      return hotTopicData
    }
  },
  methods: {
    changeNavType (data) {
      this.type = data
    },
    initTopIndustry (date) {
      if (this.type === 'industry') {
        this.$store.dispatch('z3touguIndex/getTopIndustry', {
          size: this.size
        })
          .then(() => {
            this.industryList = this.topIndustryData
          })
      } else if (this.type === 'topic') {
        this.$store.dispatch('z3touguIndex/getHotTopic', {
          limit: this.limit,
          sortField: this.sortField
        })
          .then(() => {
            this.hotTopicList = this.hotTopicData
          })
      }
    },
    autoUpdate: function () {
      const _this = this
      if (this.updateDataPid) {
        clearInterval(this.updateDataPid)
      } else {
        this.updateDataPid = setInterval(function () {
          _this.initTopIndustry()
        }, 1000 * _this.intervalTime)
      }
    },
    linkStock: function (innerCode) {
      if (innerCode) {
        window.open('/stock/' + innerCode)
      }
    },
    toTopicDetail: function (topicCode) {
      if (topicCode) {
        window.open(ctx + '/topic/' + topicCode)
      }
    },
    formateData: function (value) {
      if (value) {
        return false
      } else {
        return true
      }
    }
  },
  mounted () {
    this.initTopIndustry()
    this.autoUpdate()
  }
}
</script>
