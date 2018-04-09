<style lang="scss" scoped="">
@import "../../assets/scss/style.scss";
.sectors-con {
    width: 100%;
}
.sectors-con-top {
    height: 11.5%;
    position: relative;
}
.sectors-con-top > div {
    background-color: $bgConColor;
}
.sectors-table-wrap {
    height: 88.5%;
}
.sectors-table-div {
    float: left;
    width: 50%;
    height: 100%;
}
.sectors-table {
    width: 100%;
    height: 86.7%;
    border-collapse: collapse;
    border-spacing: 0;
}
.sectors-table tr td:first-child {
    width: 40%;
}
.sectors-table tr:hover {
    background-color: $hoverBgColor;
}
.sectors-table td {
    text-align: center;
    height: 10%;
    width: 30%;
}
.sectors-table td span {
    cursor: pointer;
}
.up-table .sectors-table {
    border-right: 1px solid $lineAndTitleColor;
}
.up-table .sectors-table td {
    color: $upColor;
}
.down-table {
    margin-left: -1px;
}
.down-table .sectors-table td {
    color: $downColor;
}
.sectors-table tr td:first-child {
    text-align: left;
    color: $wordsColorBase;
    padding-right: 0;
}
.up-table tr td:first-child {
    padding-left: 23px;
}
.down-table tr td:first-child {
    padding-left: 18px;
}
.title-table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    height: 13.3%;
}
.title-table tr {
    color: $grayWordsColor;
    background-color: $lineAndTitleColor;
}
.title-table td {
    text-align: center;
    width: 30%;
}
.title-table td:first-child {
    text-align: left;
    width: 40%;
}
.more-sectors {
    cursor: pointer;
    display: inline-block;
    position: absolute;
    top: 0;
    right: 10px;
    width: 40px;
    height: 100%;
}
.more-sectors a {
    color: $grayWordsColor;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
}
</style>
<template>
<div class="sectors-con">
  <div class="sectors-con-top">
    <NavBar :data="navText" :type="type" v-on:changeType="changeNavType" :styleObject="styleObj" :styleLiObj="styleLiObj"></NavBar>
    <p class="more-sectors" @click="toStockList(type)">
      <a>更多></a>
    </p>
  </div>
  <div class="sectors-table-wrap clearfix">
    <div class="sectors-table-div up-table">
      <table class="title-table">
        <tr>
          <td>名称</td>
          <td>股价</td>
          <td>涨跌幅</td>
        </tr>
      </table>
      <table class="sectors-table">
        <tr v-for="(value,key) of rankUp">
          <td><span @click="linkStock(value.split(',')[0])" v-z3-stock="{ref:'stockbox',code:value.split(',')[0]}" :value="value.split(',')[0]">{{formateData(key)?'--':key}}</span></td>
          <td>{{formateData(value)?'--':parseFloat(value.split(',')[1]).toFixed(2)}}</td>
          <td>{{formateData(value)?'--':parseFloat(value.split(',')[2]).toFixed(2)+'%'}}</td>
        </tr>
      </table>
    </div>
    <div class="sectors-table-div down-table">
      <table class="title-table">
        <tr>
          <td>名称</td>
          <td>股价</td>
          <td>涨跌幅</td>
        </tr>
      </table>
      <table class="sectors-table">
        <tr v-for="(value,key) of rankDown">
          <td><span @click="linkStock(value.split(',')[0])" v-z3-stock="{ref:'stockbox',code:value.split(',')[0]}" :value="value.split(',')[0]">{{formateData(key)?'--':key}}</span></td>
          <td>{{formateData(value)?'--':parseFloat(value.split(',')[1]).toFixed(2)}}</td>
          <td>{{formateData(value)?'--':parseFloat(value.split(',')[2]).toFixed(2)+'%'}}</td>
        </tr>
      </table>
    </div>
  </div>
  <StockBox ref="stockbox"></StockBox>
</div>
</template>
<script>
import NavBar from 'components/dhqHome/nav-bar'
import StockBox from 'components/stock-box'
export default {
  props: ['strategyId'],
  data() {
    return {
      navText: [
        ['上证A股', 'SHQuote'],
        ['深证A股', 'SZQuote'],
        ['中小板', 'ZXQuote'],
        ['创业板', 'GMEQuote']
      ],
      // type: this.showType === undefined ? 'syqxt' : this.showType
      type: 'SHQuote',
      page: 0,
      size: 10,
      rankUp: {},
      rankDown: {},
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
      /* this.rankUp = {}
      this.rankDown = {}*/
      this.initSectors() // 点击板块标签初始化表格数据
    }
  },
  components: {
    NavBar,
    StockBox
  },
  computed: {
    shangZRankData: function() {
      const shangZRankData = this.$store.state.dhqIndex.shangZRank // 上证A股
      return shangZRankData
    },
    shenZRankData: function() {
      const shenZRankData = this.$store.state.dhqIndex.shenZRank // 深证A股
      return shenZRankData
    },
    zXBRankData: function() {
      const zXBRankData = this.$store.state.dhqIndex.zXBRank // 中小板
      return zXBRankData
    },
    cYBRankData: function() {
      const cYBRankData = this.$store.state.dhqIndex.cYBRank // 创业板
      return cYBRankData
    }
  },
  methods: {
    changeNavType(data) {
      this.type = data
    },
    initSectors(date) {
      this.$store.dispatch('dhqIndex/getSectorsData', {
          size: this.size
        })
        .then(() => {
          if (this.type === 'SHQuote') {
            this.rankUp = this.shangZRankData['1']
            this.rankDown = this.shangZRankData['-1']
          } else if (this.type === 'SZQuote') {
            this.rankUp = this.shenZRankData['1']
            this.rankDown = this.shenZRankData['-1']
          } else if (this.type === 'ZXQuote') {
            this.rankUp = this.zXBRankData['1']
            this.rankDown = this.zXBRankData['-1']
          } else if (this.type === 'GMEQuote') {
            this.rankUp = this.cYBRankData['1']
            this.rankDown = this.cYBRankData['-1']
          }
        })
    },
    autoUpdate: function() {
      const _this = this
      if (this.updateDataPid) {
        clearInterval(this.updateDataPid)
      } else {
        this.updateDataPid = setInterval(function() {
          _this.initSectors()
        }, 1000 * _this.intervalTime)
      }
    },
    linkStock: function(innerCode) {
      if (innerCode) {
        window.open('/stock/' + innerCode)
      }
    },
    toStockList: function(type) {
      window.open(type)
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
    this.initSectors()
    this.autoUpdate()
  },
  destroyed() {
    this.updateDataPid && clearInterval(this.updateDataPid)
  }
}
</script>
