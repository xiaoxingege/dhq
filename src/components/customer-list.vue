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
  font-size: 12px;
}

.customer-list-wrap {
  padding: 20px 20px 3px 20px;
  background: #141518;
  border-bottom: 3px solid #0d0e0f;
  position: relative;
  color: #c9d0d7;
}

.head {
  font-size: 16px;
  font-weight: normal;
  position: relative;
  color: #c9d0d7;
}

.one-td {}

.customer-list-wrap .page {
  background: #141518;
  text-align: center;
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
  <div class="customer-list">
    <!-- <table class="table-box" cellpadding="0" cellspacing="0" v-else>
      <tr>
        <td class="t-head">序号</td>
        <td class="t-head">
          <div>股票代码</div>
        </td>
        <td class="t-head">股票简称</td>
        <td class="t-head td-txt" :class="this.stockSort==='sell'?'active':''" @click="isDirebuyType===true?sortStock($event,'desc','sell'):sortStock($event,'asc','sell')">买卖方向<i :class="isDirebuyType===true?'sort-up':'sort-down'"></i></td>
        <td class="t-head">买入日期</td>
        <td class="t-head">卖出日期</td>
        <td class="t-head">买入价格(前复权)</td>
        <td class="t-head">卖出价格</td>
        <td class="t-head">盈亏</td>
        <td class="t-head">收益率</td>
      </tr>
      <tbody>
        <div class="td-body" :style="{  height: fullHeight + 'px' }">
          <tr v-for="(stock,index) of buysell">
            <td class="one-td td">
              <div>{{index+1}}</div>
            </td>
            <td class="td">
              <div>{{stock.innerCode}}</div>
            </td>
            <td class="td">
              <div class="blue"><a :href="'/stock/'+ stock.innerCode" target="_blank">{{stock.name}}</a></div>
            </td>
            <td class="td">
              <div>{{stock.buySellType}}</div>
            </td>
            <td class="td">
              <div>{{stock.buyDate===null?'--':changeDate(stock.buyDate)}}</div>
            </td>
            <td class="td">
              <div>{{stock.sellDate===null?'--':changeDate(stock.sellDate)}}</div>
            </td>
            <td class="td">
              <div>{{checkNull(stock.buyPrice)}}</div>
            </td>
            <td class="td">
              <div v-z3-updowncolor="stock.winLoss">{{checkNull(stock.sellPrice)}}</div>
            </td>
            <td class="td">
              <div v-z3-updowncolor="stock.winLoss">{{stock.winLoss==null?'--':changePlus(stock.winLoss)}}</div>
            </td>
            <td class="td">
              <div v-z3-updowncolor="stock.returnRatio">{{stock.returnRatio==null?'--':changeAdd(stock.returnRatio)}}</div>
            </td>

          </tr>
        </div>
      </tbody>
    </table> -->
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

  }),

  methods: {
    init(buyPage) {

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
