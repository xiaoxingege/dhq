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
      <tr>
        <td>成长性</td>
        <td><span v-z3-updowncolor-bg="bullStockList.length>0 && formatData(bullStockList[8].value)?'--':bullStockList[8].value" :style="{width:formatValueBg(bullStockList[8].value)*45+'px'}">{{formatValue(bullStockList[8].value)}}</span></td>
        <td>{{bullStockList.length>0 && formatData(bullStockList[8].remark)?'--':bullStockList[8].remark}}</td>
      </tr>
      <tr>
        <td>杠杆</td>
        <td><span v-z3-updowncolor-bg="bullStockList.length>0 && formatData(bullStockList[4].value)?'--':bullStockList[4].value" :style="{width:formatValueBg(bullStockList[4].value)*45+'px'}">{{formatValue(bullStockList[4].value)}}</span></td>
        <td>{{bullStockList.length>0 && formatData(bullStockList[4].remark)?'--':bullStockList[4].remark}}</td>
      </tr>
      <tr>
        <td>流动性</td>
        <td><span v-z3-updowncolor-bg="bullStockList.length>0 && formatData(bullStockList[7].value)?'--':bullStockList[7].value" :style="{width:formatValueBg(bullStockList[7].value)*45+'px'}">{{formatValue(bullStockList[7].value)}}</span></td>
        <td>{{bullStockList.length>0 && formatData(bullStockList[7].remark)?'--':bullStockList[7].remark}}</td>
      </tr>
      <tr>
        <td>动量</td>
        <td><span v-z3-updowncolor-bg="bullStockList.length>0 && formatData(bullStockList[1].value)?'--':bullStockList[1].value" :style="{width:formatValueBg(bullStockList[1].value)*45+'px'}">{{formatValue(bullStockList[1].value)}}</span></td>
        <td>{{bullStockList.length>0 && formatData(bullStockList[1].remark)?'--':bullStockList[1].remark}}</td>
      </tr>
      <tr>
        <td>规模</td>
        <td><span v-z3-updowncolor-bg="bullStockList.length>0 && formatData(bullStockList[2].value)?'--':bullStockList[2].value" :style="{width:formatValueBg(bullStockList[2].value)*45+'px'}">{{formatValue(bullStockList[2].value)}}</span></td>
        <td>{{bullStockList.length>0 && formatData(bullStockList[2].remark)?'--':bullStockList[2].remark}}</td>
      </tr>
      <tr>
        <td>估值</td>
        <td><span v-z3-updowncolor-bg="bullStockList.length>0 && formatData(bullStockList[9].value)?'--':bullStockList[9].value" :style="{width:formatValueBg(bullStockList[9].value)*45+'px'}">{{formatValue(bullStockList[9].value)}}</span></td>
        <td>{{bullStockList.length>0 && formatData(bullStockList[9].remark)?'--':bullStockList[9].remark}}</td>
      </tr>
      <tr>
        <td>波动</td>
        <td><span v-z3-updowncolor-bg="bullStockList.length>0 && formatData(bullStockList[3].value)?'--':bullStockList[3].value" :style="{width:formatValueBg(bullStockList[3].value)*45+'px'}">{{formatValue(bullStockList[3].value)}}</span></td>
        <td>{{bullStockList.length>0 && formatData(bullStockList[3].remark)?'--':bullStockList[3].remark}}</td>
      </tr>
      <tr>
        <td>质量</td>
        <td><span v-z3-updowncolor-bg="bullStockList.length>0 && formatData(bullStockList[6].value)?'--':bullStockList[6].value" :style="{width:formatValueBg(bullStockList[6].value)*45+'px'}">{{formatValue(bullStockList[6].value)}}</span></td>
        <td>{{bullStockList.length>0 && formatData(bullStockList[6].remark)?'--':bullStockList[6].remark}}</td>
      </tr>
      <tr>
        <td>分析师预测</td>
        <td><span v-z3-updowncolor-bg="bullStockList.length>0 && formatData(bullStockList[5].value)?'--':bullStockList[5].value" :style="{width:formatValueBg(bullStockList[5].value)*45+'px'}">{{formatValue(bullStockList[5].value)}}</span></td>
        <td>{{bullStockList.length>0 && formatData(bullStockList[5].remark)?'--':bullStockList[5].remark}}</td>
      </tr>
      <tr>
        <td>股东</td>
        <td><span v-z3-updowncolor-bg="bullStockList.length>0 && formatData(bullStockList[0].value)?'--':bullStockList[0].value" :style="{width:formatValueBg(bullStockList[0].value)*45+'px'}">{{formatValue(bullStockList[0].value)}}</span></td>
        <td>{{bullStockList.length>0 && formatData(bullStockList[0].remark)?'--':bullStockList[0].remark}}</td>
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
      intervalTime: 6,
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
        }, 1000 * _this.intervalTime)
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
