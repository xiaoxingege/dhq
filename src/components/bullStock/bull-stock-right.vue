<style scoped>
@import '../../assets/css/base.css';
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

.fr {
  float: right;
}

.fl {
  float: left;
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

.backt-buysell-wrap {
  padding: 20px 20px 3px 20px;
  background: #141518;
  /* margin-bottom: 3px; */
  border-bottom: 3px solid #0d0e0f;
  position: relative;
  color: #c9d0d7;
}

.table-box {
  border-collapse: collapse;
  width: 100%;
  font-size: 12px;
}

.table-box .td-body {
  /* height: 100px; */
  overflow: auto;
  display: block;
}

.table-box tr th {
  width: 1%;
}

.table-box tr:nth-child(1) {
  /* background: #f2f2f2;
      color: #666; */
  font-size: 12px;
  display: block;
}

.table-box tr td {
  width: 1%;
  /* padding-left: 8px; */
}

.table-box tr:nth-child(1) td {
  height: 30px;
  /* padding-left: 0; */
}

.td-body tr:nth-child(1) td {
  /* padding-left: 5px; */
}

.td {
  border-bottom: 1px solid #23272c;
  text-align: center;
  /* padding-left: 8px; */
  padding-left: 3px;
}

.t-head {
  border-bottom: none;
  background: #23272c;
  color: #c9d0d7;
  text-align: center;
}

td,
th {
  word-break: break-all;
  height: 30px;
}

.td div {
  /* padding: 5px; */
  padding: 5px 0;
}

.head {
  /*  margin-top: 20px; */
  /* padding:0 0 14px 3px; */
  /* padding-bottom: 20px; */
  font-size: 16px;
  font-weight: normal;
  position: relative;
  color: #c9d0d7;
}

.ba-name {
  padding-left: 22px;
  font-size: 16px;
}

.shu {
  margin: 0 24px;
  display: inline-block;
  width: 1px;
  height: 12px;
  background: #808ba1;
}

.date-in {
  /* margin-left: 8px; */
  font-size: 16px;
}

.date {
  margin-left: 11px;
  font-size: 16px;
}

.sell {
  width: 44px;
  display: inline-block;
  border: 1px solid #56a870;
  color: #56a870;
  text-align: center;
  /*  padding: 4px 0 5px 0; */
  padding: 0px 0 2px 0;
  border-radius: 2px;
  font-size: 14px;
}

.buy {
  border: 1px solid #ca4941;
  color: #ca4941;
}

.tit {
  text-align: center;
  line-height: 50px;
  font-size: 12px;
}

.one-td {
  /* width: 18%; */
}

.backt-buysell-wrap .page {
  background: #141518;
  text-align: center;
}

.backtestInfoList {
  /*  min-height: 500px; */
  /* margin-bottom: 10px; */
}

.td-txt {
  position: relative;
}

.td-txt i {
  width: 11px;
  height: 6px;
  display: inline-block;
  position: absolute;
  top: 12px;
  /* right: 15%; */
  padding-left: 4px;
}

.td-txt.active {}

.bull-stock-wrap {
  background: #141518;
  margin: 8px 5px 10px 5px;
}

.bull-style {
  padding: 12px 12px 0 13px;
}

.bull-head {
  font-size: 16px;
  color: #c9d0d7;
}

.style-table-box {
  border-collapse: collapse;
  width: 100%;
  font-size: 12px;
  color: #c9d0d7;
}
</style>
<template>
<div class="bull-stock-wrap">
  <div class="bull-style">
    <div class="bull-head">牛股风格</div>
    <table class="style-table-box">
      <tr>
        <td v-for="(item,index) in tabledata.th1" class="lightcolor">
          {{item}}
        </td>
      </tr>
      <tr>
        <td><span>成长性</span><span>{{stockStyle.growth}}</span><span>高成长</span></td>
        <td><span>杠杆</span><span>{{stockStyle.leverage}}</span><span>高成长</span></td>
        <td><span>流动性</span><span>{{stockStyle.liquidity}}</span><span>高成长</span></td>
        <td><span>动量</span><span>{{stockStyle.momentum}}</span><span>高成长</span></td>
        <td><span>规模</span><span>{{stockStyle.scale}}</span><span>高成长</span></td>
        <td><span>估值</span><span>{{stockStyle.valuation}}</span><span>高成长</span></td>
        <td><span>波动</span><span>{{stockStyle.volatility}}</span><span>高成长</span></td>
        <td><span>质量</span><span>{{stockStyle.quality}}</span><span>高成长</span></td>
        <td><span>分析师预期</span><span>{{stockStyle.analystExpect}}</span><span>高成长</span></td>
        <td><span>股东</span><span>{{stockStyle.holdDegree}}</span><span>高成长</span></td>
      </tr>
    </table>
  </div>
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
        th1: ['名称', '风格指数', '风格描述'],
        th2: ['名称', '风格指数', '风格描述'],
        th3: ['名称', '风格指数', '风格描述'],
        td: {}
      }
    }
  },
  components: {},
  computed: mapState({
    stockStyle: state => state.bullStock.stockStyle
  }),
  methods: {
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

  },
  mounted() {
    this.$store.dispatch('bullStock/queryStockStyle')
  }
}
</script>
