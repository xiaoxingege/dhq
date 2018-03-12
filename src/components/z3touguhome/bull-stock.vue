<style lang="scss" scoped="">
@import "../../assets/scss/style.scss";
.bull-stock-con {
    width: 100%;
}
.bull-stock-top {
    height: 15%;
    position: relative;
}
.bull-stock-table-wrap {
    height: 85%;
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
    height: 8.4%;
    color: #c9d0d7;
}
.bull-stock-table tr td:first-child {
    text-align: left;
    padding-left: 23px;
    padding-right: 0;
    border-left-width: 0;
    width: 28%;
}
.bull-stock-table tr td:nth-child(2) {
    width: 25%;
}
.bull-stock-table tr td:nth-child(3) {
    width: 47%;
}
.bull-stock-table tr:first-child td {
    border-bottom: 1px solid #23272c;
    height: 16%;
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
    position: absolute;
    bottom: 30px;
    left: 27px;
    padding: 15px;
    width: 300px;
    color: #666666;
    background: #cccfd9;
    border-radius: 10px;
    line-height: 18px;
    z-index: 9999;
}
</style>
<template>
<div class="bull-stock-con">
  <div class="bull-stock-top">
    <NavBar :data="navText" :type="type" v-on:changeType="changeNavType"></NavBar>
    <div class="help-img-wrap">
      <img src='../../assets/images/z3img/help.png' @mouseover="showWindow" @mouseout="hideWindow" />
      <div class="help-window" v-if="isShowWindow">
        根据近1月涨跌幅排名靠前的股票，通过Barra风格归因算法计算出的牛股风格。风格指数值为0到100，数值越高，风格的偏向性越强。
      </div>
    </div>
  </div>
  <div class="bull-stock-table-wrap">
    <table class="bull-stock-table">
      <tr>
        <td>名称</td>
        <td>风格描述</td>
        <td>风格指数</td>
      </tr>
      <tr v-for='item of bullStockList' v-if="bullStockList.length>0">
        <td>{{bullStockList.length>0 && formatData(item.cname)?'--':item.cname}}</td>
        <td>{{bullStockList.length>0 && formatData(item.remark)?'--':item.remark}}</td>
        <td><span v-z3-updowncolor-bg="bullStockList.length>0 && formatData(item.value)?'--':item.value" :style="{width:formatValueBg(item.value)*2.25+'px'}">{{formatValue(item.value)}}</span></td>
      </tr>
      <tr v-for="item of noDataList" v-if="bullStockList.length===0">
        <td>{{item.cname}}</td>
        <td>{{item.remark}}</td>
        <td>{{item.value}}</td>
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
      bullStockList: [],
      noDataList: [],
      isShowWindow: false
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
          if (this.bullStockListData.length && this.bullStockListData.length > 0) {
            this.bullStockList = this.bullStockListData
          }
        })
      for (let i = 0; i < 9; i++) {
        this.noDataList.push({
          cname: '',
          remark: '',
          value: ''
        })
      }
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
    showWindow: function() {
      this.isShowWindow = true
    },
    hideWindow: function() {
      this.isShowWindow = false
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
      if (value || value === 0) {
        return false
      } else {
        return true
      }
    }
  },
  mounted() {
    this.initBullStock()
    // this.autoUpdate()
  },
  destroyed() {
    // this.updateDataPid && clearInterval(this.updateDataPid)
  }
}
</script>
