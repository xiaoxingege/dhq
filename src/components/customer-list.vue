<style scoped>
@import '../assets/css/base.css';
input {
  outline: none;
}

* {
  /* font-size: 12px; */
  font-family: "Microsoft YaHei";
  box-sizing: border-box;
}

body {
  background: #141518;
}

.clearfix:after {
  display: block;
  content: '';
  clear: both;
}

a,
.blue {
  color: #1984ea;
}

.blue {
  color: #1984ea;
}

.red {
  color: #ca4941;
}

.green {
  color: #56a870;
}

.lightcolor {
  color: #c9d0d7;
}

.gray {
  color: #808ba1;
}

.customer-list-wrap {
  /* padding: 20px 20px 3px 20px; */
  background: #141518;
  border-bottom: 3px solid #0d0e0f;
  border-top: 3px solid #0d0e0f;
  border-left: 3px solid #0d0e0f;
  color: #c9d0d7;
  font-size: 12px;
}

.cur-head {
  font-size: 14px;
  background: #23272c;
  height: 25px;
  padding-left: 9px;
}

.inp-head {
  margin-top: 13px;
  padding-left: 10px;
}

.inp-box2 {
  margin-left: 13px;
}

.inp-text1 {
  width: 98px;
  height: 25px;
  background: #23272c;
  border-radius: 3px;
  border: none;
  outline: none;
  color: #c9d0d7;
  padding-left: 10px;
  margin-left: 8px;
}

.search-btn {
  width: 44px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  background: #23272c;
  margin-left: 13px;
  border-radius: 3px;
  cursor: pointer;
}

.customer-list {
  margin-top: 10px;
}

.customer-list-wrap .page {
  background: #141518;
  text-align: center;
}

.table-box {
  border-collapse: collapse;
  width: 100%;
  font-size: 12px;
}

.table-box tr td {
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #23272c;
  border-left: none;
  position: relative;
}

.table-box tr:nth-child(1) {
  background: #23272c;
  border: none;
}

.table-box tr:nth-child(1) td {
  height: 30px;
}

.sort-down {
  width: 11px;
  height: 6px;
  display: block;
  background: url("../assets/images/z3img/topic-sort-down.png") no-repeat;
  position: absolute;
  bottom: 0px;
}

.sort-up {
  width: 11px;
  height: 6px;
  display: block;
  background: url("../assets/images/z3img/topic-sort-up.png") no-repeat;
  position: absolute;
  bottom: 0px;
  left: 45%;
}

.foot-tishi {
  font-size: 12px;
  color: #808ba1;
  background: #141518;
  color: #808ba1;
  line-height: 24px;
  margin-top: 10px;
}
</style>
<template>
<div class="customer-list-wrap">
  <div class="header clearfix">
    <div class="cur-head">
      <span class="lightcolor">客户列表</span>
    </div>
    <div class="inp-head clearfix">
      <div class="inp-box1 fl">
        <label>资金账户：</label><input type="text" class="inp-text1">
      </div>
      <div class="inp-box1 fl ml-20">
        <label>客户姓名：</label><input type="text" class="inp-text1">
      </div>
      <div class="inp-box1 fl inp-box2">
        <label>客户手机号：</label><input type="text" class="inp-text1">
      </div>
      <div class="search-btn fl">查找</div>

    </div>
    <div class="inp-head">
      <label>数量：</label><span class="pl-5">462</span>
    </div>
  </div>
  <div class="customer-list">
    <table class="table-box" cellpadding="0" cellspacing="0">
      <tr>
        <td class="t-head">资金账户<i class="sort-up"></i></td>
        <td class="t-head">客户姓名</td>
        <td>性别</td>
        <td>资产分级</td>
        <td>活跃度</td>
        <td>本户持仓比<i class="sort-up"></i></td>
        <td>交易次数(近3月)<i class="sort-up"></i></td>
        <td>开户时间<i class="sort-up"></i></td>
        <td>交易能力</td>
        <td>手机号</td>
        <td>关注度</td>
      </tr>
      <!-- <tr v-for="list for curList">
        <td>{{list.fundCount}}</td>
        <td>{{list.userName}}</td>
        <td>{{list.sex}}</td>
        <td>{{list.assetLevel}}</td>
        <td>{{list.active}}</td>
        <td>{{list.positionRatio}}</td>
        <td>{{list.tradeNumLast3m}}</td>
        <td>{{list.openTime}}</td>
        <td>{{list.tradeLevel}}</td>
        <td>{{list.phone}}</td>
        <td>{{list.attention}}</td>
      </tr> -->
    </table>
  </div>
  <p class="foot-tishi">风险提示：本策略过往业绩并不预示未来表现，也不构成本策略的业绩保证。策略提示的买入时机、买入信号或者卖出时机、风险预警信号，买卖区间等仅供投资者决策之参考，不作为买卖建议，风险自控。</p>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
export default {
  data() {
    return {
      tabledata: {
        th: ['序号', '股票代码', '股票简称', '买卖方向', '买入日期', '卖出日期', '买入价格(前复权)', '卖出价格', '盈亏', '收益率'],
        td: {}
      }

    }
  },
  components: {},
  computed: mapState({
    curList: state => state.customerList.customersList
  }),

  methods: {
    init(buyPage) {
      this.$store.dispatch('customerList/queryCustomers')
    },
    routerBack() {
      this.$router.go(-1)
    },
    checkNull(str) {
      if (str === null) {
        return '--'
      } else {
        return str
      }
    },
    changeAdd(num) {
      if (num > 0) {
        return '+' + (Number(num) * 100).toFixed(2) + '%'
      } else if (num < 0) {
        return (Number(num) * 100).toFixed(2) + '%'
      } else if (num === 0) {
        return num
      }
    },
    changePlus(num) {
      if (num > 0) {
        return '+' + num
      } else if (num <= 0) {
        return num
      }
    },
    changePer(num) {
      return (Number(num) * 100).toFixed(2) + '%'
    },
    changeTofixed(num) {
      return num > 0 ? '+' + parseFloat(num).toFixed(2) + '%' : parseFloat(num).toFixed(2) + '%'
    },
    changeDate(time) {
      return (time + '').substring(0, 4) + '-' + (time + '').substring(4, 6) + '-' + (time + '').substring(6, (time + '').length)
    }
  },
  watch: {
    buyPage() {
      this.init(this.buyPage)
    }

  },
  mounted() {
    this.init()
    console.log(this.$route.query.strategyId)
  }
}
</script>
