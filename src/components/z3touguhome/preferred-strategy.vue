<style lang="scss" scoped="">
.preferred-strategy-con {
    width: 100%;
}

.preferred-strategy-top {
    height: 15%;
    position: relative;
}

.preferred-strategy-table-wrap {
    height: 85%;
}

.preferred-strategy-table {
    float: left;
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
.preferred-strategy-table tr:hover {
    background-color: #2e4465;
}
.preferred-strategy-table tr:first-child:hover {
    background-color: #141518;
}

.preferred-strategy-table td span {
    cursor: pointer;
}

.preferred-strategy-table td {
    border: 1px solid #23272c;
    text-align: center;
    height: 12%;
    color: #c9d0d7;
}
.preferred-strategy-table tr:nth-child(1) td {
    border-top-width: 0;
}
.preferred-strategy-table tr:last-child td {
    border-bottom-width: 0;
}
.preferred-strategy-table tr td:last-child {
    border-right-width: 0;
}
.preferred-strategy-table tr td:first-child {
    text-align: left;
    padding-left: 23px;
    padding-right: 0;
    border-left-width: 0;
}
.preferred-strategy-table tr:first-child td {
    border: 0 solid #23272c;
    height: 16%;
}

.more-preferred-strategy {
    cursor: pointer;
    display: inline-block;
    position: absolute;
    top: 0;
    right: 10px;
    width: 40px;
    height: 100%;
}

.more-preferred-strategy a {
    color: #808ba1;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
}
</style>
<template>
<div class="preferred-strategy-con">
  <div class="preferred-strategy-top">
    <NavBar :data="navText" :type="type" v-on:changeType="changeNavType"></NavBar>
    <p class="more-preferred-strategy" @click="toStockList(type)">
      <a>更多></a>
    </p>
  </div>
  <div class="preferred-strategy-table-wrap clearfix">
    <table class="preferred-strategy-table">
      <tr>
        <td>策略名称</td>
        <td>{{positionNum}}</td>
        <td>{{tableTitle}}</td>
      </tr>
      <tr v-for="(item,index) of stockList">
        <td><span :value="item.id" @click='linkDetail(item.id)'>{{formatData(item.name)?'--':item.name}}</span></td>
        <td @mouseover='showPositionBox(item,index)' @mouseout='hidePositionBox(item,index)' style="position: relative">
          <span>{{formatData(item.num)?'--':Math.round(item.num)}}</span>
          <PositionBox :strategyId='strategyId' :type='type' v-if="type==='goldTop'|| type==='filterTop'"></PositionBox>
        </td>
        <td v-z3-updowncolor="item.percent">
          {{formatData(item.percent)?'--':formatDataPercent(item.percent)}}
        </td>
      </tr>
      <tr v-for="item of noDataList">
        <td>{{item.name}}</td>
        <td>{{item.num}}</td>
        <td>{{item.percent}}</td>
      </tr>
    </table>
  </div>
</div>
</template>
<script>
import NavBar from 'components/z3touguhome/nav-bar'
import DataTable from 'components/z3touguhome/data-table'
import PositionBox from 'components/z3touguhome/position-box'
import {
  ctx
} from '../../z3tougu/config'
export default {
  props: [],
  data() {
    return {
      navText: [
        ['金牌优选', 'goldTop'],
        ['筛股优选', 'filterTop'],
        ['择时优选', 'timeTop']
      ],
      type: 'goldTop',
      stockList: [],
      noDataList: [],
      updateDataPid: null,
      intervalTime: 6,
      strategyId: '',
      isShow: false,
      positionNum: '当前持仓',
      tableTitle: '近一周累计收益'
    }
  },
  watch: {
    type() {
      this.initPreferredStrategy() // 点击板块标签初始化表格数据
    }
  },
  components: {
    NavBar,
    PositionBox,
    DataTable
  },
  computed: {
    preferredGoldData: function() {
      const preferredGoldData = this.$store.state.z3touguIndex.preferredGoldData
      return preferredGoldData
    },
    preferredFilterData: function() {
      const preferredFilterData = this.$store.state.z3touguIndex.preferredFilterData
      return preferredFilterData
    },
    preferredTimeData: function() {
      const preferredTimeData = this.$store.state.z3touguIndex.preferredTimeData
      return preferredTimeData
    }
  },
  methods: {
    changeNavType(data) {
      this.type = data
    },
    initPreferredStrategy() {
      if (this.type === 'goldTop') {
        this.positionNum = '当前持仓'
        this.tableTitle = '近一周累计收益'
        this.$store.dispatch('z3touguIndex/getPreferredGoldData')
          .then(() => {
            if (this.preferredGoldData && this.preferredGoldData.length > 0) {
              this.stockList = this.preferredGoldData
            } else {
              for (let i = 0; i < 9; i++) {
                this.noDataList.push({
                  name: '',
                  num: '',
                  percent: ''
                })
              }
            }
          })
      } else if (this.type === 'filterTop') {
        this.positionNum = '当前选股'
        this.tableTitle = '胜率'
        this.$store.dispatch('z3touguIndex/getPreferredFilterData')
          .then(() => {
            if (this.preferredFilterData && this.preferredFilterData.length > 0) {
              this.stockList = this.preferredFilterData
            } else {
              for (let i = 0; i < 9; i++) {
                this.noDataList.push({
                  name: '',
                  num: '',
                  percent: ''
                })
              }
            }
          })
      } else if (this.type === 'timeTop') {
        this.positionNum = '平均持有天数'
        this.tableTitle = '胜率'
        this.$store.dispatch('z3touguIndex/getPreferredTimeData')
          .then(() => {
            if (this.preferredTimeData && this.preferredTimeData.length > 0) {
              this.stockList = this.preferredTimeData
            } else {
              for (let i = 0; i < 9; i++) {
                this.noDataList.push({
                  name: '',
                  num: '',
                  percent: ''
                })
              }
            }
          })
      }
    },
    autoUpdate: function() {
      const _this = this
      if (this.updateDataPid) {
        clearInterval(this.updateDataPid)
      } else {
        this.updateDataPid = setInterval(function() {
          _this.initPreferredStrategy()
        }, 1000 * _this.intervalTime)
      }
    },
    toStockList: function(type) {
      window.open(type)
    },
    formatData: function(value) {
      if (value || value === 0) {
        return false
      } else {
        return true
      }
    },
    formatDataPercent: function(val) {
      let getVal
      if (val) {
        getVal = (100 * val).toFixed(2) + '%'
      } else {
        getVal = '--'
      }
      return getVal
    },
    showPositionBox: function(item, index) {
      if (this.type === 'timeTop') {
        return
      }
      item.isShow = true
      this.strategyId = item.id
      for (let i = 0; i < document.getElementsByClassName('preferred-strategy-table')[0].getElementsByTagName('div').length; i++) {
        document.getElementsByClassName('preferred-strategy-table')[0].getElementsByTagName('div')[i].style.display = 'none'
      }
      document.getElementsByClassName('preferred-strategy-table')[0].getElementsByTagName('div')[index].style.display = 'block'
    },
    hidePositionBox: function(item, index) {
      if (this.type === 'timeTop') {
        return
      }
      document.getElementsByClassName('preferred-strategy-table')[0].getElementsByTagName('div')[index].style.display = 'none'
      item.isShow = false
    },
    linkDetail: function(id) {
      if (this.type === 'goldTop') {
        window.open(ctx + '/gold-strategy/' + id)
      } else if (this.type === 'filterTop') {
        window.open(ctx + '/backtestFilter/' + id)
      } else if (this.type === 'timeTop') {
        window.open(ctx + '/backtesttime/' + id)
      }
    }
  },
  mounted() {
    this.initPreferredStrategy()
    // this.autoUpdate()
  },
  destroyed() {
    // this.updateDataPid && clearInterval(this.updateDataPid)
  }
}
</script>
