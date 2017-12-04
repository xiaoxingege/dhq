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
      <tr v-for="item of stockList">
        <td><span :value="item.id" @click='linkDetail(item.id)'>{{formatData(item.name)?'--':item.name}}</span></td>
        <td><span @mouseover='showPositionBox(item.id,$event)' @mouseout='hidePositionBox'>{{formatData(item.num)?'--':Math.round(item.num)}}</span>
        </td>
        <td v-z3-updowncolor="item.percent">
          {{formatData(item.percent)?'--':parseFloat(item.percent).toFixed(2)+'%'}}
        </td>
      </tr>
    </table>
  </div>
  <PositionBox :strategyId='strategyId' :top='top' :left='left' :isShow="isShow" :type='type'></PositionBox>
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
      updateDataPid: null,
      intervalTime: 6,
      strategyId: '',
      top: '',
      left: '',
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
            this.stockList = this.preferredGoldData
          })
      } else if (this.type === 'filterTop') {
        this.positionNum = '当前选股'
        this.tableTitle = '胜率'
        this.$store.dispatch('z3touguIndex/getPreferredFilterData')
          .then(() => {
            this.stockList = this.preferredFilterData
          })
      } else if (this.type === 'timeTop') {
        this.positionNum = '平均持有天数'
        this.tableTitle = '胜率'
        this.$store.dispatch('z3touguIndex/getPreferredTimeData')
          .then(() => {
            this.stockList = this.preferredTimeData
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
    showPositionBox: function(id, event) {
      if (this.type === 'timeTop') {
        this.isShow = false
        return
      }
      this.isShow = true
      this.strategyId = id
      let scrollTop = window.pageYOffset || window.scrollY;
      let scrollleft = window.pageXOffset || window.scrollX;
      const winH = window.document.body.scrollHeight;
      const winW = window.document.body.scrollWidth;
      let left = event.x + parseInt(scrollleft) + 30;
      let top = event.y + parseInt(scrollTop) - 20;
      if (winH - top < 186) {
        top = winH - 186;
      }
      if (winW - left < 350) {
        left = event.x + parseInt(scrollleft) - 380;
      }
      this.top = top
      this.left = left
    },
    hidePositionBox: function() {
      this.isShow = false
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
