<style lang="scss" scoped="">
@import "../../assets/scss/style.scss";
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
    background-color: $hoverBgColor;
}
.preferred-strategy-table tr:first-child:hover {
    background-color: $bgConColor;
}

.preferred-strategy-table td span {
    cursor: pointer;
}

.preferred-strategy-table td {
    border: 1px solid $lineAndTitleColor;
    text-align: center;
    height: 12%;
    color: $wordsColorBase;
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
    border: 0 solid $lineAndTitleColor;
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
    color: $grayWordsColor;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
}
.help-img-wrap {
    width: 20px;
    height: 100%;
    position: absolute;
    right: 10px;
    top: 0;
}

.help-img-wrap img {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

.help-window {
    @include noteBoxBig;
    position: absolute;
    bottom: 30px;
    left: 27px;
    padding: 15px;
    width: 300px;
    line-height: 18px;
    z-index: 9999;
}
</style>
<template>
<div class="preferred-strategy-con">
  <div class="preferred-strategy-top">
    <NavBar :data="navText" :type="type" v-on:changeType="changeNavType"></NavBar>
    <div class="help-img-wrap">
      <img src='../../assets/images/z3img/help.png' @mouseover="showWindow" @mouseout="hideWindow" />
      <div class="help-window" v-if="isShowWindow">{{ hoverMsg }}</div>
    </div>
  </div>
  <div class="preferred-strategy-table-wrap clearfix">
  <!-- <LineChart :strategyId='strategyId' :strategyType='type'></LineChart> -->

    <table class="preferred-strategy-table">
      <tr>
        <td>策略名称</td>
        <td>{{positionNum}}</td>
        <td>{{tableTitle}}</td> 
      </tr>
      <tr v-for="(item,index) of stockList" v-if="stockList.length>0">
        <td><span :value="item.id" @click='linkDetail(item.id)'>{{formatData(item.name)?'--':item.name}}</span></td>
        <td @mouseover='showPositionBox(item,index)' @mouseout='hidePositionBox(item,index)' style="position: relative">
          <span>{{formatData(item.num)?'--':Math.round(item.num)}}</span>
          <PositionBox :strategyId='strategyId' :type='type' v-if="type==='goldTop'|| type==='filterTop'"></PositionBox>
        </td>
        <td v-z3-updowncolor="item.percent">
          {{formatData(item.percent)?'--':formatDataPercent(item.percent)}}
        </td>
      </tr>
      <tr v-for="item of noDataList" v-if="stockList.length===0">
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
// import LineChart from 'components/line-chartHome'
import {
  ctx
} from '../../z3tougu/config'
export default {
  props: [],
  data() {
    return {
      navText: [
        ['两融余额', 'goldTop'],
        ['北向资金', 'filterTop'],
        ['南向资金', 'timeTop']
      ],
      type: 'goldTop',
      stockList: [],
      noDataList: [],
      updateDataPid: null,
      intervalTime: 6,
      strategyId: '',
      isShow: false,
      positionNum: '当前持仓',
      tableTitle: '近一周累计收益',
      isShowWindow: false,
      hoverMsg : '两融余额代表杠杆资金动向，牛市初期为先行看好指标，牛市后期为先行见顶指标'
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
      this.$nextTick(() => {
          if(this.type === 'goldTop') { 
            this.hoverMsg = '两融余额代表杠杆资金动向，牛市初期为先行看好指标，牛市后期为先行见顶指标'
          }else if (this.type === 'filterTop') {
            this.hoverMsg = '北向资金代表境外资金动向，北向资金流入额=当日限额-当日余额，资金流入额包含两部分：当日成交净买额，以及当日申报但未成交的买单金额。北向资金流入越多，境外资金购买意愿越强，则境外资金越看好A股。'
          }else {
            this.hoverMsg = '南向资金代表内地资金动向，南向资金流入额=当日限额-当日余额，资金流入额包含两部分：当日成交净买额，以及当日申报但未成交的买单金额。南向资金流入越多，内地资金购买意愿越强，则内地资金越看好港股。'
          }
      })
    },
    initPreferredStrategy() {
     if (this.type === 'goldTop') {
      //   this.$store.dispatch('z3touguIndex/getTwoMeltingInfo',{ flag : 1 }).then(() => {
      //     if(this.twoMeltingInfo && this.twoMeltingInfo.length > 0) {
      //       this.stockList = this.twoMeltingInfo
      //       console.log(this.stockList)
      //     }
      //   })
        this.positionNum = '当前持仓'
        this.tableTitle = '近一周累计收益'
        this.$store.dispatch('z3touguIndex/getPreferredGoldData')
          .then(() => {
            if (this.preferredGoldData && this.preferredGoldData.length > 0) {
              this.stockList = this.preferredGoldData
            }
          })
      } else if (this.type === 'filterTop') {
        this.positionNum = '当前选股'
        this.tableTitle = '胜率'
        this.$store.dispatch('z3touguIndex/getPreferredFilterData')
          .then(() => {
            if (this.preferredFilterData && this.preferredFilterData.length > 0) {
              this.stockList = this.preferredFilterData
            }
          })
      } else if (this.type === 'timeTop') {
        this.positionNum = '平均持有天数'
        this.tableTitle = '胜率'
        this.$store.dispatch('z3touguIndex/getPreferredTimeData')
          .then(() => {
            if (this.preferredTimeData && this.preferredTimeData.length > 0) {
              this.stockList = this.preferredTimeData
            }
          })
      }
      for (let i = 0; i < 6; i++) {
        this.noDataList.push({
          name: '',
          num: '',
          percent: ''
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
      if (val || val === 0) {
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
    },
    showWindow() {
      this.isShowWindow = true
    },
    hideWindow() {
      this.isShowWindow = false
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
