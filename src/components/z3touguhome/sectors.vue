<style lang="scss" scoped="">
.sectors-con {
    width: 100%;
}
.sectors-con-top {
    height: 11.5%;
    position: relative;
}
.sectors-table-wrap {
    height: 88.5%;
}
.sectors-table {
    float: left;
    width: 50%;
    height: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
.sectors-table tr td:first-child {
    cursor: pointer;
    width: 40%;
}
.sectors-table tr td:first-child:hover {
    background-color: #2e4465;
}
.sectors-table td {
    border: 1px solid #23272c;
    text-align: center;
    padding-right: 20px;
    height: 10%;
    width: 30%;
}
.sectors-table:nth-child(1) td {
    color: #ca4941;
}
.sectors-table:nth-child(2) td {
    color: #56a870;
}
.sectors-table tr:nth-child(1) td {
    border-top-width: 0;
}
.sectors-table tr:last-child td {
    border-bottom-width: 0;
}
.sectors-table tr td:last-child {
    border-right-width: 0;
}
.sectors-table:nth-child(1) tr td:first-child {
    border-left-width: 0;
}
.sectors-table tr td:first-child {
    text-align: left;
    padding-left: 48px;
    color: #c9d0d7;
    padding-right: 0;
}
.more-sectors {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
}
.more-sectors a {
    color: #808ba1;
}
</style>
<template>
<div class="sectors-con">
  <div class="sectors-con-top">
    <NavBar :data="navText" :type="type" v-on:changeType="changeNavType"></NavBar>
    <p class="more-sectors" @click="toStockList(type)">
      <a>更多></a>
    </p>
  </div>
  <div class="sectors-table-wrap clearfix">
    <table class="sectors-table">
      <tr v-for="(value,key) of rankUp">
        <td @click="linkStock(value.split(',')[0])" v-z3-stock="{ref:'stockbox',code:value.split(',')[0]}" :value="value.split(',')[0]">{{formateData(key)?'--':key}}</td>
        <td>{{formateData(value)?'--':parseFloat(value.split(',')[1]).toFixed(2)}}</td>
        <td>{{formateData(value)?'--':parseFloat(value.split(',')[2]).toFixed(2)+'%'}}</td>
      </tr>
    </table>
    <table class="sectors-table">
      <tr v-for="(value,key) of rankDown">
        <td @click="linkStock(value.split(',')[0])" v-z3-stock="{ref:'stockbox',code:value.split(',')[0]}" :value="value.split(',')[0]">{{formateData(key)?'--':key}}</td>
        <td>{{formateData(value)?'--':parseFloat(value.split(',')[1]).toFixed(2)}}</td>
        <td>{{formateData(value)?'--':parseFloat(value.split(',')[2]).toFixed(2)+'%'}}</td>
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
      intervalTime: 6
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
    DataTable,
    StockBox
  },
  computed: {
    shangZRankData: function() {
      const shangZRankData = this.$store.state.z3touguIndex.shangZRank // 上证A股
      return shangZRankData
    },
    shenZRankData: function() {
      const shenZRankData = this.$store.state.z3touguIndex.shenZRank // 深证A股
      return shenZRankData
    },
    zXBRankData: function() {
      const zXBRankData = this.$store.state.z3touguIndex.zXBRank // 中小板
      return zXBRankData
    },
    cYBRankData: function() {
      const cYBRankData = this.$store.state.z3touguIndex.cYBRank // 创业板
      return cYBRankData
    }
  },
  methods: {
    changeNavType(data) {
      this.type = data
    },
    initSectors(date) {
      this.$store.dispatch('z3touguIndex/getSectorsData', {
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
      if (value) {
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
