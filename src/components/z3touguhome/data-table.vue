<style lang="scss" scoped="">
.table-wrap {
    width: 100%;
    height: 100%;
}
.data-table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
.data-table tbody {
    height: 100%;
}
.data-table td {
    border: 1px solid #23272c;
    padding-right: 20px;
    box-sizing: border-box;
    height: 12.5%;
    text-align: center;
    width: 30%;
}
.data-table tr td:first-child {
    text-align: left;
    color: #c9d0d7;
    padding-right: 0;
    padding-left: 23px;
    width: 40%;
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
.data-table .stock-hover {
    cursor: pointer;
}
.data-table .stock-hover:hover {
    background-color: #2e4465;
}
</style>
<template>
<div class="table-wrap">
  <div v-if="isNoData" class="no-data">
    <span>暂无信号</span>
  </div>
  <table v-if="!isNoData" class="data-table">
    <tbody>
      <tr v-for="item of dataList">
        <td v-z3-stock="{ref:'stockbox',code:item.innerCode}" @click="linkStock(item.innerCode)" :value="item.innerCode" class="stock-hover">{{item.name === null?'--':item.name}}</td>
        <td v-z3-updowncolor="item.chgPct">{{item.px === null?'--':item.px.toFixed(2)}}</td>
        <td v-z3-updowncolor="item.chgPct">{{formatData(item.chgPct)}}</td>
      </tr>
      <tr v-for="item of noDataList">
        <td>{{item.name}}</td>
        <td>{{item.px}}</td>
        <td>{{item.chgPct}}</td>
      </tr>
    </tbody>
  </table>
  <StockBox ref="stockbox"></StockBox>
</div>
</template>
<script>
import StockBox from 'components/stock-box'
export default {
  props: ['dataList'],
  data() {
    return {
      isNoData: false,
      noDataList: []
    }
  },
  watch: {
    dataList() {
      this.noDataList = []
      if (this.dataList.length > 0) {
        // this.tableHeight = (this.dataList.length / 8) * 100 + '%'
        if (this.dataList.length < 8) {
          const noDataListLength = 8 - this.dataList.length
          for (let i = 0; i < noDataListLength; i++) {
            this.noDataList.push({
              name: '',
              px: '',
              chgPct: ''
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
    StockBox
  },
  methods: {
    formatData: function(val) {
      let getVal
      if (val !== null) {
        getVal = val.toFixed(2) + '%'
      } else {
        getVal = '--'
      }
      return getVal
    },
    linkStock: function(innerCode) {
      if (innerCode) {
        window.open('/stock/' + innerCode)
      }
    }
  },
  mounted() {
    console.log(this.dataList)
  }
}
</script>
