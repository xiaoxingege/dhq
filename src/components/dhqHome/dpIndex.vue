<style lang="scss" scoped="">
@import "../../assets/scss/style.scss";
.dpindex-wrap {
    height: 100%;
}
.dpindex-wrap > div {
    width: 50%;
    height: 100%;
    display: inline-block;
    float: left;
}
.dpindex-top {
    height: 11.5%;
    position: relative;
    color: $wordsColorBase;
}
.dpindex-top span {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translate(0,-50%);
    font-size: 14px;
}
.dpindex-table-wrap {
    height: 88.5%;
}
.dpindex-table {
    width: 100%;
    height: 86.7%;
    border-collapse: collapse;
    border-spacing: 0;
    color: $wordsColorBase;
}
.table1 {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    height: 13.3%;
}
.table1 tr {
    color: $grayWordsColor;
    background-color: $lineAndTitleColor;
}
.table1 td {
    text-align: right;
    width: 20%;
    padding-right: 10px;
}
.dpindex-table tr {
    cursor: pointer;
}
.dpindex-table tr:hover {
    background-color: $hoverBgColor;
}
.dpindex-table td {
    text-align: right;
    width: 20%;
    padding-right: 10px;
}
.dpindex-table tr td:first-child {
    text-align: left;
    padding-left: 23px;
    color: $wordsColorBase;
    padding-right: 0;
}
.hoverColor {
    background-color: $hoverBgColor;
}
</style>
<template>
<div class="dpindex-wrap clearfix">
  <div class="dpindex-con">
    <div class="dpindex-top">
      <span>大盘指数</span>
    </div>
    <div class="dpindex-table-wrap clearfix">
      <table class="table1">
        <tr>
          <td style="text-align: left;padding-left: 23px;">名称</td>
          <td>最新</td>
          <td>涨跌</td>
          <td>涨跌幅</td>
          <td>金额</td>
        </tr>
      </table>
      <table class="dpindex-table">
        <tr v-for="(item,index) of dpIndexList" @click="toHqChart(item,index)" :class="stockCode === stockCodeList[index]?'hoverColor':''">
          <td>{{item.name === null?'--':item.name}}</td>
          <td v-z3-updowncolor="item.upDown">{{formatData(item.stockVal)?'--':parseFloat(item.stockVal).toFixed(2)}}</td>
          <td v-z3-updowncolor="item.upDown">{{formatData(item.upDown)?'--':parseFloat(item.upDown).toFixed(2)}}</td>
          <td v-z3-updowncolor="item.upDownExtent">{{formatData(item.upDownExtent)?'--':parseFloat(item.upDownExtent).toFixed(2)+'%'}}</td>
          <td>{{formatData(item.amount)?'--':unitFormat(item.amount)}}</td>
        </tr>
      </table>
    </div>
  </div>
  <DayMarketChart :isResizeBottomChart="isResizeBottomChart" :stockCode="stockCode" :stockName="stockName" :timestamp="timestamp" :stockCodeList="stockCodeList"></DayMarketChart>
</div>
</template>
<script>
import NavBar from 'components/dhqHome/nav-bar'
import DayMarketChart from 'components/dhqHome/daiyMarketChart'
import z3websocket from '../../dhq/z3socket'
import {
  mapState
} from 'vuex'
export default {
  props: ['isResizeBottomChart'],
  data() {
    return {
      dpIndexList: [],
      updateDataPid: null,
      intervalTime: 6,
      stockCodeList: ['000001.SH', '399001.SZ', '399006.SZ', '399005.SZ', '000300.SH', '000016.SH', '399905.SZ', '000985.SH'],
      stockCode: '000001.SH',
      stockName: '上证指数',
      timestamp: ''
    }
  },
  watch: {
    stockMessage() {
      if (this.stockMessage) {
        this.updateStock(this.stockMessage)
      }
    },
    socketState() {
      if (this.socketState === 1) {
        // 建立连接
        this.indexStock()
      } else if (this.socketState === 3) {
        // 断开连接，重新建立连接
        this.$store.dispatch('z3sockjs/init')
      }
    },
    'dpData': {
      deep: true,
      handler: function() {
        if (z3websocket.ws) {
          z3websocket.ws && z3websocket.ws.close()
        } else {
          this.$store.dispatch('z3sockjs/init')
        }
      }
    }
  },
  components: {
    NavBar,
    DayMarketChart
  },
  computed: mapState({
    dpData: state => state.dhqIndex.dpIndexData,
    dpIndexData: function() {
      const dpIndexData = this.$store.state.dhqIndex.dpIndexData
      let arr = []
      for (let i = 0; i < this.stockCodeList.length; i++) {
        for (let j = 0; j < this.stockCodeList.length; j++) {
          if (this.stockCodeList[i] === dpIndexData[j].stockCode) {
            arr.push(dpIndexData[j])
          }
        }
      }
      return arr
    },
    socketState: state => state.z3sockjs.readystate,
    stockMessage: state => {
      const msg = state.z3sockjs.message
      if (msg && msg.data && msg.data.subject === 'timeline') {
        const record = msg.data
        return record
      } else {
        return null
      }
    }
  }),
  methods: {
    indexStock() {
      const msg = {
        subject: 'timeline',
        type: '1',
        actionType: '1',
        stockCodeList: this.stockCodeList,
        token: ''
      }
      this.$store.dispatch('z3sockjs/send', msg)
    },
    updateStock(data) {
      this.$store.commit('dhqIndex/chartSocket', data)
      this.timestamp = new Date().getTime()
    },
    changeNavType(data) {
      this.type = data
    },
    init: function() {
      this.$store.dispatch('dhqIndex/getDpIndexData', {
          stockCode: this.stockCodeList.join()
        })
        .then(() => {
          this.dpIndexList = this.dpIndexData
        })
    },
    formatData: function(value) {
      if (value || value === 0) {
        return false
      } else {
        return true
      }
    },
    toHqChart: function(item, index) {
      this.stockCode = item.stockCode
      this.stockName = item.name
    },
    unitFormat: function(value) {
      if (value >= 100000000) {
        value = (value / 100000000).toFixed(2) + '亿'
      } else if (value >= 10000 && value < 100000000) {
        value = (value / 10000).toFixed(2) + '万'
      } else {
        value = value.toFixed(2)
      }
      return value
    }
  },
  mounted() {
    this.init()
  },
  destroyed() {
    z3websocket.ws && z3websocket.ws.close()
  }
}
</script>
