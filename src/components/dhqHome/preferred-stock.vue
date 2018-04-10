<style lang="scss" scoped="">
@import "../../assets/scss/style.scss";
.preferred-stock-con {
    width: 100%;
}

.preferred-stock-top {
    height: 11.5%;
    position: relative;
}

.preferred-stock-table-wrap {
    height: 88.5%;
}

.preferred-stock-table {
    float: left;
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
.preferred-stock-table tr:hover {
    background-color: $hoverBgColor;
}

.preferred-stock-table td span {
    cursor: pointer;
}

.preferred-stock-table td {
    border: 1px solid $lineAndTitleColor;
    text-align: center;
    height: 10%;
}
.preferred-stock-table tr:nth-child(1) td {
    border-top-width: 0;
    text-align: center;
    color: $wordsColorBase;
}
.preferred-stock-table tbody tr:last-child td {
    border-bottom-width: 0;
}
.preferred-stock-table tr td:last-child {
    border-right-width: 0;
}
.preferred-stock-table tr td:first-child {
    text-align: left;
    padding-left: 23px;
    color: $wordsColorBase;
    padding-right: 0;
    border-left-width: 0;
}

.more-preferred-stock {
    cursor: pointer;
    display: inline-block;
    position: absolute;
    top: 0;
    right: 10px;
    width: 40px;
    height: 100%;
}

.more-preferred-stock a {
    color: $grayWordsColor;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
}
.no-data-stock {
    width: 100%;
    height: 100%;
    position: relative;
}
.no-data-stock span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: $grayWordsColor;
}
</style>
<template>
<div class="preferred-stock-con">
  <div class="preferred-stock-top">
    <NavBar :data="navText" :type="type" v-on:changeType="changeNavType" :styleObject="styleObj" :styleLiObj="styleLiObj"></NavBar>
    <p class="more-preferred-stock" @click="toGoldStockPool">
      <a>更多></a>
    </p>
  </div>
  <div class="preferred-stock-table-wrap clearfix">
    <div v-show="isNoData" class="no-data-stock">
      <span>暂无数据</span>
    </div>
    <table class="preferred-stock-table" v-show="!isNoData">
      <tr>
        <td>名称</td>
        <td>最新</td>
        <td>涨跌幅</td>
        <td style="text-align: right;padding-right: 20px;">成交量</td>
      </tr>
      <tr v-for="item of stockList">
        <td><span @click="linkStock(item.innerCode)" v-z3-stock="{ref:'stockbox',code:item.innerCode}" :value="item.innerCode">{{formatData(item.name)?'--':item.name}}</span></td>
        <td v-z3-updowncolor="item.curChngPct">{{formatData(item.price)?'--':parseFloat(item.price).toFixed(2)}}</td>
        <td v-z3-updowncolor="item.curChngPct">{{formatData(item.curChngPct)?'--':parseFloat(item.curChngPct).toFixed(2)+'%'}}</td>
        <td style="color:#c9d0d7;text-align: right;padding-right: 20px;">{{formatData(item.tvolLot)?'--':formatDataRound(item.tvolLot)}}</td>
      </tr>
      <tr v-for="item of noDataList">
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>{{item.curChngPct}}</td>
        <td>{{item.totlNum}}</td>
      </tr>
    </table>
  </div>
  <StockBox ref="stockbox"></StockBox>
</div>
</template>
<script>
import NavBar from 'components/dhqHome/nav-bar'
import StockBox from 'components/stock-box'
export default {
  data() {
    return {
      navText: [
        /*  ['策略优选', 'strategyTop'],
         ['信号优选', 'signalTop'], */
        ['行业优选', 'industryTop'],
        ['题材优选', 'topicTop']
      ],
      type: 'industryTop',
      stockList: [],
      updateDataPid: null,
      intervalTime: 6,
      preferredType: 'strategy',
      preferredId: 'nearWeekReturn',
      limit: 10,
      noDataList: [],
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
      this.initPreferredStock()
    },
    stockList() {
      this.noDataList = []
      if (this.stockList.length > 0) {
        if (this.stockList.length < 8) {
          const noDataListLength = 8 - this.stockList.length
          for (let i = 0; i < noDataListLength; i++) {
            this.noDataList.push({
              name: '',
              price: '',
              curChngPct: '',
              totlNum: ''
            })
          }
        }
        this.isNoData = false
      } else {
        this.isNoData = true
      }
    }
  },
  components: {
    NavBar,
    StockBox
  },
  computed: {
    preferredIndustryData: function() {
      const preferredIndustryData = this.$store.state.dhqIndex.preferredIndustryData
      preferredIndustryData.length = 8
      return preferredIndustryData
    },
    preferredTopicData: function() {
      const preferredTopicData = this.$store.state.dhqIndex.preferredTopicData
      preferredTopicData.length = 8
      return preferredTopicData
    }
  },
  methods: {
    changeNavType(data) {
      this.type = data
    },
    initPreferredStock() {
      if (this.type === 'topicTop') {
        this.$store.dispatch('dhqIndex/getPreferredTopicData')
          .then(() => {
            this.stockList = this.preferredTopicData
          })
      } else if (this.type === 'industryTop') {
        this.$store.dispatch('dhqIndex/getPreferredIndustryData')
          .then(() => {
            this.stockList = this.preferredIndustryData
          })
      }
    },
    autoUpdate: function() {
      const _this = this
      if (this.updateDataPid) {
        clearInterval(this.updateDataPid)
      } else {
        this.updateDataPid = setInterval(function() {
          _this.initPreferredStock()
        }, 1000 * _this.intervalTime)
      }
    },
    linkStock: function(innerCode) {
      if (innerCode) {
        window.open('/stock/' + innerCode)
      }
    },
    toGoldStockPool: function() {
      window.open('goldStockPool')
    },
    formatData: function(value) {
      if (value || value === 0) {
        return false
      } else {
        return true
      }
    },
    formatDataRound: function(value) {
      if (value > 1000000) {
        value = Math.round(value / 1000000) + '万手'
      } else {
        value = Math.round(value / 100) + '手'
      }
      return value
    }
  },
  mounted() {
    this.initPreferredStock()
    this.autoUpdate()
  },
  destroyed() {
    this.updateDataPid && clearInterval(this.updateDataPid)
  }
}
</script>
