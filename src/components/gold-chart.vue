<style lang="scss" scoped>
@import '../assets/css/base.css';
a {
    color: #1984ea;
}
.dqcc table,
.dqxg table,
.mcxh table,
.mrjy table,
.mrxh table {
    width: 100%;
    margin: 0 auto;
    color: #c9d0d7;
}
.dqcc table thead,
.dqxg table thead,
.mcxh table thead,
.mrjy table thead,
.mrxh table thead {
    background: #23282F;
}

.dqcc table tbody ul,
.dqcc table thead ul {
    width: 100%;
}

.dqcc table tbody ul li,
.dqcc table thead ul li {
    float: left;
    width: 11%;
    text-align: center;
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid #1D1F25;
}

.dqcc table thead ul li {
    height: 25px;
    line-height: 25px;
    color: #c9d0d7;
    border-bottom: none;
}
.dqxg table thead tr th,
.mcxh table thead tr th,
.mrjy table thead tr th,
.mrxh table thead tr th {
    height: 25px;
    line-height: 25px;
    color: #c9d0d7;
}
.dqxg table tr td,
.mcxh table tr td,
.mrjy table tr td,
.mrxh table tr td {
    text-align: center;
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid #1D1F25;
}
.dqcc,
.dqxg,
.dryk,
.mcxh,
.mrcc,
.mrjy,
.mrxh,
.sylfb,
.syqxt,
.syytj {
    min-height: 467px;
    width: 100%;
    background: #141518;
}

.dqcc table tbody {
    display: block;
    height: 467px;
    overflow: auto;
}
.export {
    position: absolute;
    right: 20px;
    height: 23px;
    line-height: 23px;
    color: #2388DA;
}
.export img {
    position: relative;
    top: 2px;
}
.export a {
    display: inline-block;
    cursor: pointer;
}
.red {
    color: #ca4941;
}
.green {
    color: #56a870;
}

.goldExport {
    background: url('../assets/images/z3img/backexport2.png') no-repeat;
    width: 57px;
    height: 25px;
    display: inline-block;
    position: absolute;
    right: 1.5%;
    top: 0;
    cursor: pointer;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 1217px) {
    .dqxg,
    .dryk,
    .mrcc,
    .mrjy,
    .sylfb,
    .syqxt,
    .syytj {
        min-height: 4.2rem;
        width: 100%;
    }
}
</style>
<template>
<div style="width:100%">
  <div v-if="type === 'mrjy' || type === 'mcxh' || type === 'mrxh' || type === 'dqcc' " class="export">
    <span @click="exportData(type)" class="goldExport"></span>
  </div>
  <Navbar :data="navText" :type="type" v-on:changeType="changeNavType"></Navbar>
  <div>
    <div v-if="type === 'syqxt'" class="syqxt">
      <Linechart :strategyId="strategyId"></Linechart>
    </div>
    <div v-if="type === 'dqcc'" class="dqcc">
      <table cellpadding="0" cellspacing="0">
        <thead>
          <!--<div>-->
          <ul class="clearfix">
            <li>序号</li>
            <li>股票代码</li>
            <li>股票简称</li>
            <li>参考成本(元)</li>
            <li>参考市价(元)</li>
            <li>持股数量</li>
            <li>参考市值(万元)</li>
            <li>参考盈亏(元)</li>
            <li>盈亏比例</li>
          </ul>
          <!--</div>-->
        </thead>
        <tbody>
          <!-- <div style="height:467px; width:100%; overflow-y: scroll">-->
          <ul v-if="dqccData!== null" v-for="(item,index) of dqccData">
            <li>{{(dqccPage*10)+Number(index+1)}}</li>
            <li>{{item.innerCode}}</li>
            <li><a :href="'/stock/'+ item.innerCode" target="_blank">{{item.name}}</a></li>
            <li>{{item.costPrice | decimal(2)}}</li>
            <li>{{item.marketPrice | decimal(2)}}</li>
            <li>{{item.holdVolume}}</li>
            <li>{{item.marketValue | decimal(2)}}</li>
            <li v-z3-updowncolor="item.profitLossAmout">{{item.profitLossAmout | decimal(2)}}</li>
            <li v-z3-updowncolor="item.profitLossRatio">{{(item.profitLossRatio*100) | decimal(2)}}%</li>
          </ul>
          <!-- </div>-->
        </tbody>
      </table>
    </div>
    <div v-if="type === 'dryk'" class="dryk">
      <Barupdown :strategyId="strategyId"></Barupdown>
    </div>
    <div v-if="type === 'mrcc'" class="mrcc">
      <Onelinechart :strategyId="strategyId"></Onelinechart>
    </div>
    <div v-if="type === 'syytj'" class="syytj">
      <Twobarchart :strategyId="strategyId"></Twobarchart>
    </div>
    <div v-if="type === 'sylfb'" class="sylfb">
      <Onebarchart :strategyId="strategyId"></Onebarchart>
    </div>
    <div v-if="type === 'mrjy'" class="mrjy">
      <table cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>日期</th>
            <th>股票代码</th>
            <th>股票简称</th>
            <th>买/卖</th>
            <th>成交价格（元）</th>
            <th>成交股数</th>
            <th>成交额（万元）</th>
            <th>佣金（元）</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="mrjyData.content !== null" v-for="item of mrjyData.content">
            <td>{{String(item.backtestDate).substring(0, 4) + '-' + String(item.backtestDate).substring(4, 6) + '-' + String(item.backtestDate).substring(6)}}</td>
            <td>{{item.innerCode}}</td>
            <td><a :href="'/stock/'+ item.innerCode" target="_blank">{{item.name}}</a></td>
            <td :class="item.buySellType === '买入'? 'red' : 'green'">{{item.buySellType}}</td>
            <td>{{Number(item.price).toFixed(2)}}</td>
            <td>{{item.amount}}</td>
            <td>{{(Number(item.quantity)/10000).toFixed(2)}}</td>
            <td>{{Number(item.commission).toFixed(2)}}</td>
          </tr>
        </tbody>
      </table>
      <div style="text-align: center;">
        <Pagination v-if="mrjyData.totalPages > 1" :totalPage="mrjyData.totalPages" v-on:getPageFromChild="goMrjyPage"></Pagination>
      </div>
    </div>
    <div v-if="type === 'mrxh'" class="mrxh">
      <div v-if="mrxhData === null || mrxhData === '' || mrxhData.content.length === 0" style="text-align: center;">
        <img class="mt-50" src="../assets/images/z3img/no-data.png">
      </div>
      <table v-if="mrxhData !== null && mrxhData !== '' && mrxhData.content.length !== 0" cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>序号</th>
            <th>日期</th>
            <th>股票代码</th>
            <th>股票简称</th>
            <th>下单量(元)</th>
            <th>最新价</th>
            <th>涨跌</th>
            <th>涨跌幅</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="mrxhData.content !== null" v-for=" (item, index) in mrxhData.content">
            <td>{{(mrxhPage*10)+Number(index+1)}}</td>
            <td>{{String(item.tradeDate).substring(0, 4) + '-' + String(item.tradeDate).substring(4, 6) + '-' + String(item.tradeDate).substring(6)}}</td>
            <td>{{item.innerCode}}</td>
            <td><a :href="'/stock/'+ item.innerCode" target="_blank">{{item.name}}</a></td>
            <td>{{item.quantity === null ? '--':Number(item.quantity).toFixed(2)}}</td>
            <td v-z3-updowncolor="item.chgPct">{{item.px === null ? '--':Number(item.px).toFixed(2)}}</td>
            <td v-z3-updowncolor="item.chg">{{item.chg === null ? '--':Number(item.chg).toFixed(2)}}</td>
            <td v-z3-updowncolor="item.chgPct">{{item.chgPct === null ? '--':Number(item.chgPct).toFixed(2)+'%'}}</td>
          </tr>
        </tbody>
      </table>
      <div style="text-align: center;">
        <Pagination v-if="mrxhData !== null && mrxhData !== '' && mrxhData.totalPages > 1" :totalPage="mrxhData.totalPages" v-on:getPageFromChild="goMrxhPage"></Pagination>
      </div>
    </div>
    <div v-if="type === 'mcxh'" class="mcxh">
      <div v-if="mcxhData === null || mcxhData === '' || mcxhData.content.length === 0" style="text-align: center;">
        <img class="mt-50" src="../assets/images/z3img/no-data.png">
      </div>
      <table v-if="mcxhData !== null && mcxhData !== '' && mcxhData.content.length !== 0" cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>序号</th>
            <th>日期</th>
            <th>股票代码</th>
            <th>股票简称</th>
            <th>下单量(股)</th>
            <th>最新价</th>
            <th>涨跌</th>
            <th>涨跌幅</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="mcxhData.content !== null" v-for=" (item,index) in mcxhData.content">
            <td>{{(mcxhPage*10)+Number(index+1)}}</td>
            <td>{{String(item.tradeDate).substring(0, 4) + '-' + String(item.tradeDate).substring(4, 6) + '-' + String(item.tradeDate).substring(6)}}</td>
            <td>{{item.innerCode}}</td>
            <td><a :href="'/stock/'+ item.innerCode" target="_blank">{{item.name}}</a></td>
            <td>{{item.amount === null ? '--':item.amount}}</td>
            <td v-z3-updowncolor="item.chgPct">{{item.px === null ? '--':Number(item.px).toFixed(2)}}</td>
            <td v-z3-updowncolor="item.chg">{{item.chg === null ? '--':Number(item.chg).toFixed(2)}}</td>
            <td v-z3-updowncolor="item.chgPct">{{item.chgPct === null ? '--':Number(item.chgPct).toFixed(2)+'%'}}
            </td>
          </tr>
        </tbody>
      </table>
      <div style="text-align: center;">
        <Pagination v-if="mcxhData !== null && mcxhData !== '' && mcxhData.totalPages > 1" :totalPage="mcxhData.totalPages" v-on:getPageFromChild="goMcxhPage"></Pagination>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Navbar from 'components/nav-bar'
import Tablelist from 'components/table-list'
import Linechart from 'components/line-chart'
import Barupdown from 'components/bar-up-down'
import Onelinechart from 'components/one-line-chart'
import Onebarchart from 'components/one-bar-chart'
import Twobarchart from 'components/two-bar-chart'
import Pagination from 'components/pagination'
import store from '../z3tougu/store'
import {
  domain
} from '../z3tougu/config'

export default {
  props: {
    data: Object,
    strategyId: String,
    type: {
      type: String,
      default: 'syqxt'
    }
  },
  // ['data', 'strategyId', 'showType'],
  data() {
    return {
      navText: [
        ['收益曲线图', 'syqxt'],
        ['当前持仓', 'dqcc'],
        ['当日盈亏', 'dryk'],
        ['每日仓位', 'mrcc'],
        ['收益月统计', 'syytj'],
        ['收益率分布', 'sylfb'],
        ['交易详情', 'mrjy'],
        ['调入信号', 'mrxh'],
        ['调出信号', 'mcxh']
      ],
      mrxhPage: 0,
      mcxhPage: 0,
      dqccPage: 0
      // type: this.showType === undefined ? 'syqxt' : this.showType
    }
  },
  components: {
    Navbar,
    Tablelist,
    Linechart,
    Barupdown,
    Onelinechart,
    Onebarchart,
    Twobarchart,
    Pagination
  },
  computed: {

    mrjyData: function() {
      return this.$store.state.goldStrategy.mrjyData
    },
    dqxgData: function() {
      return this.$store.state.goldStrategy.dqxgData
    },
    authInfo: function() {
      return this.$store.state.auth
    },
    mrxhData: function() {
      return this.$store.state.goldStrategy.mrxhData
    },
    mcxhData: function() {
      return this.$store.state.goldStrategy.mcxhData
    },
    dqccData: function() {
      return this.$store.state.goldStrategy.dqccData
    }
  },
  methods: {
    changeNavType(data) {
      this.type = data
    },
    goMrjyPage(data) {
      this.$store.dispatch('goldStrategy/getMrjyData', {
        strategyId: this.strategyId,
        page: data - 1
      }).then(() => {})
    },
    goMrxhPage(data) {
      this.mrxhPage = data - 1
      this.$store.dispatch('goldStrategy/getMrxhData', {
        strategyId: this.strategyId,
        type: 'buy',
        page: data - 1
      }).then(() => {})
    },
    goMcxhPage(data) {
      this.mcxhPage = data - 1
      this.$store.dispatch('goldStrategy/getMrxhData', {
        strategyId: this.strategyId,
        type: 'sell',
        page: data - 1
      }).then(() => {})
    },
    exportData(type) {
      var type2 = ''
      if (type === 'mrjy') {
        type2 = 'goldDetail'
      } else if (type === 'mrxh') {
        type2 = 'goldBuySignal'
      } else if (type === 'mcxh') {
        type2 = 'goldSellSignal'
      } else if (type === 'dqcc') {
        type2 = 'goldCommendDetail'
      }
      const id = this.strategyId
      const expires = this.authInfo.expires
      const updateTime = this.authInfo.updateTime
      const now = new Date().getTime()
      const clientid = this.authInfo.clientid
      const deviceid = this.authInfo.deviceid
      const token = this.authInfo.authorization.split(' ')[1]

      if (expires !== -1 && now - updateTime < expires * 1000) {
        this.createForm(id, type2, token, clientid, deviceid)
      } else {
        return store.dispatch('authSetting').then(() => {
          this.createForm(id, type2, token, clientid, deviceid)
        })
      }
    },
    createForm(id, type, token, clientid, deviceid) {
      var url = `${domain}/openapi/excels/excelByType.shtml`
      var postForm = document.createElement('form') // 表单对象
      postForm.style.display = 'none'
      postForm.method = 'get'
      postForm.action = url
      postForm.innerHTML = '<input name="id" value="' + id + '" /><input name="type" value="' + type + '" /><input name="access_token" value="' + token + '" /><input name="client_id" value="' + clientid + '" /><input name="device_id" value="' + deviceid + '" />'
      document.body.appendChild(postForm)
      postForm.submit()
      // document.body.removeChild(postForm)
    }
  },
  mounted() {
    this.type = this.$route.params.showType
  }
}
</script>
