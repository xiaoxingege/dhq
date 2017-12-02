<style lang="scss" scoped="">
.bull-stock-con {
    width: 100%;
}
.bull-stock-top {
    height: 11.5%;
    position: relative;
}
.bull-stock-table-wrap {
    height: 88.5%;
}
.bull-stock-table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
.bull-stock-table td span {
    display: inline-block;
    height: 12px;
    line-height: 12px;
    text-align: center;
    font-size: 10px;
}
.bull-stock-table td {
    height: 12%;
    color: #c9d0d7;
}
.bull-stock-table tr td:first-child {
    text-align: left;
    padding-left: 48px;
    padding-right: 0;
    border-left-width: 0;
}
.bull-stock-table tr:first-child td {
    border-bottom: 1px solid #23272c;
    height: 16%;
}
</style>
<template>
<div class="bull-stock-con">
  <div class="bull-stock-top">
    <NavBar :data="navText" :type="type" v-on:changeType="changeNavType"></NavBar>
  </div>
  <div class="bull-stock-table-wrap">
    <table class="bull-stock-table">
      <tr>
        <td>名称</td>
        <td>风格指数</td>
        <td>风格描述</td>
      </tr>
      <tr v-for='item of bullStockList'>
        <td>{{bullStockList.length>0 && formatData(item.cname)?'--':item.cname}}</td>
        <td><span v-z3-updowncolor-bg="bullStockList.length>0 && formatData(item.value)?'--':item.value" :style="{width:formatValueBg(item.value)*45+'px'}">{{formatValue(item.value)}}</span></td>
        <td>{{bullStockList.length>0 && formatData(item.remark)?'--':item.remark}}</td>
      </tr>
    </table>
  </div>
</div>
</template>
<script>
import NavBar from 'components/z3touguhome/nav-bar'
import DataTable from 'components/z3touguhome/data-table'
export default {
  props: [],
  data() {
    return {
      navText: [
        ['牛股风格', 'bullStockStyle']
      ],
      type: 'bullStockStyle',
      updateDataPid: null,
      intervalTime: 10,
      bullStockList: []
    }
  },
  watch: {

  },
  components: {
    NavBar,
    DataTable
  },
  computed: {
    bullStockListData: function() {
      const bullStockListData = this.$store.state.z3touguIndex.bullStockList
      return bullStockListData
    }
  },
  methods: {
    changeNavType(data) {
      this.type = data
    },
    initBullStock() {
      this.$store.dispatch('z3touguIndex/getBullStock')
        .then(() => {
          if (this.bullStockListData.length > 0) {
            this.bullStockList = this.bullStockListData
          }
        })
    },
    autoUpdate: function() {
      const _this = this
      if (this.updateDataPid) {
        clearInterval(this.updateDataPid)
      } else {
        this.updateDataPid = setInterval(function() {
          _this.initBullStock()
        }, 60000 * _this.intervalTime)
      }
    },
    formatValue: function(val) {
      if (val >= 0) {
        val = Math.ceil(Math.abs(val))
      } else {
        val = -Math.ceil(Math.abs(val))
      }
      return val
    },
    formatValueBg: function(val) {
      return Math.ceil(Math.abs(val))
    },
    formatData: function(value) {
      if (value) {
        return false
      } else {
        return true
      }
    }
  },
  mounted() {
    this.initBullStock()
    this.autoUpdate()
  },
  destroyed() {
    this.updateDataPid && clearInterval(this.updateDataPid)
  }
}
</script>
