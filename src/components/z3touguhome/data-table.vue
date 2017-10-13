<style lang="scss" scoped="">
.table-wrap {
    width: 100%;
    height: 100%;
}
.data-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
.data-table td {
    border: 1px solid #23272c;
    text-align: right;
    padding-right: 20px;
    height: auto;
}
.data-table tr:nth-child(1) td {
    border-top-width: 0;
}
.data-table tr:nth-child(8) td {
    border-bottom-width: 0;
}
.data-table tr td:last-child {
    border-right-width: 0;
}
.data-table tr td:first-child {
    text-align: center;
    color: #c9d0d7;
    padding-right: 0;
}
.no-data {
    width: 100%;
    height: 100%;
    position: relative;
}
.no-data span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #808ba1;
}
.data-table tr td:first-child {
    cursor: pointer;
}
.data-table tr td:first-child:hover {
    background-color: #2e4465;
}
</style>
<template>
<div class="table-wrap">
  <div v-if="isNoData" class="no-data">
    <span>暂无信号</span>
  </div>
  <table v-if="!isNoData" class="data-table" :style="{height:tableHeight}">
    <tr v-for="item of dataList">
      <td v-z3-stock="{ref:'stockbox',code:item.innerCode}" @click="linkStock(item.innerCode)" :value="item.innerCode">{{item.name === null?'--':item.name}}</td>
      <td v-z3-updowncolor="item.chgPct">{{item.px === null?'--':item.px.toFixed(2)}}</td>
      <td v-z3-updowncolor="item.chgPct">{{formatData(item.chgPct)}}</td>
    </tr>
  </table>
  <StockBox ref="stockbox"></StockBox>
</div>
</template>
<script>
import StockBox from 'components/stock-box'
export default {
  props: ['dataList'],
  data () {
    return {
      isNoData: false,
      tableHeight: '100%'
    }
  },
  watch: {
    dataList () {
      if (this.dataList.length > 0) {
        this.tableHeight = (this.dataList.length / 8) * 100 + '%'
        this.isNoData = false
      } else {
        this.isNoData = true
      }
    }
  },
  components: {
    StockBox
  },
  methods: {
    formatData: function (val) {
      let getVal
      if (val) {
        getVal = val.toFixed(2) + '%'
      } else {
        getVal = '--'
      }
      return getVal
    },
    linkStock: function (innerCode) {
      if (innerCode) {
        window.open('/stock/' + innerCode)
      }
    }
  },
  mounted () {
    console.log(this.dataList)
  }
}
</script>
