<style lang="scss" scoped>
.dqxg,
.mcxh,
.mrjy,
.mrxh {
    background: #fff;
}
.dqxg table,
.mcxh table,
.mrjy table,
.mrxh table {
    width: 99%;
    margin: 0 auto;
}
.dqxg table thead,
.mcxh table thead,
.mrjy table thead,
.mrxh table thead {
    background: #F2F2F2;
}
.dqxg table thead tr th,
.mcxh table thead tr th,
.mrjy table thead tr th,
.mrxh table thead tr th {
    height: 25px;
    line-height: 25px;
}
.dqxg table tr td,
.mcxh table tr td,
.mrjy table tr td,
.mrxh table tr td {
    text-align: center;
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid #e5e5e5;
}
.dqxg,
.dryk,
.mcxh,
.mrcc,
.mrjy,
.mrxh,
.sylfb,
.syqxt,
.syytj {
    min-height: 420px;
    width: 100%;
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
  <div v-if="type === 'mrjy' || type === 'dqxg'" class="export">
    <img src="../assets/images/z3img/export-icon.png">
    <a @click="exportData(type)">导出</a>
  </div>
  <Navbar :data="navText" :type="type" v-on:changeType="changeNavType"></Navbar>
  <div>
    <div v-if="type === 'syqxt'" class="syqxt">
      <Linechart :strategyId="strategyId"></Linechart>
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
          <tr v-for="item of mrjyData.content">
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
      <Pagination v-if="mrjyData.totalPages > 1" :totalPage="mrjyData.totalPages" v-on:getPageFromChild="goMrjyPage"></Pagination>
    </div>
    <div v-if="type === 'mrxh'" class="mrxh">
      <div v-if="mrxhData === null || mrxhData === '' || mrxhData.content.length === 0" style="text-align: center; line-height: 50px; font-size:16px;">今日无交易信号</div>
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
            <td>{{index}}</td>
            <td>{{String(item.tradeDate).substring(0, 4) + '-' + String(item.tradeDate).substring(4, 6) + '-' + String(item.tradeDate).substring(6)}}</td>
            <td>{{item.innerCode}}</td>
            <td><a :href="'/stock/'+ item.innerCode" target="_blank">{{item.name}}</a></td>
            <td>{{item.quantity === null ? '--':Number(item.quantity).toFixed(2)}}</td>
            <td v-z3-updowncolor="item.px">{{item.px === null ? '--':Number(item.px).toFixed(2)}}</td>
            <td v-z3-updowncolor="item.chg">{{item.chg === null ? '--':Number(item.chg).toFixed(2)}}</td>
            <td v-z3-updowncolor="item.chgPct">{{item.chgPct === null ? '--':Number(item.chgPct/100).toFixed(2)+'%'}}</td>
          </tr>
        </tbody>
      </table>
      <Pagination v-if="mrxhData !== null && mrxhData !== '' && mrxhData.totalPages > 1" :totalPage="mrxhData.totalPages" v-on:getPageFromChild="goMrxhPage"></Pagination>
    </div>
    <div v-if="type === 'mcxh'" class="mcxh">
      <div v-if="mcxhData === null || mcxhData === '' || mcxhData.content.length === 0" style="text-align: center; line-height: 50px; font-size:16px;">今日无交易信号</div>
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
            <td>{{index}}</td>
            <td>{{String(item.tradeDate).substring(0, 4) + '-' + String(item.tradeDate).substring(4, 6) + '-' + String(item.tradeDate).substring(6)}}</td>
            <td>{{item.innerCode}}</td>
            <td><a :href="'/stock/'+ item.innerCode" target="_blank">{{item.name}}</a></td>
            <td>{{item.amount === null ? '--':item.amount}}</td>
            <td>{{item.px === null ? '--':Number(item.px).toFixed(2)}}</td>
            <td>{{item.chg === null ? '--':Number(item.chg).toFixed(2)}}</td>
            <td>{{item.chgPct === null ? '--':Number(item.chgPct/100).toFixed(2)+'%'}}</td>
          </tr>
        </tbody>
      </table>
      <Pagination v-if="mcxhData !== null && mcxhData !== '' && mcxhData.totalPages > 1" :totalPage="mcxhData.totalPages" v-on:getPageFromChild="goMcxhPage"></Pagination>
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
  data () {
    return {
      navText: [
        ['收益曲线图', 'syqxt'],
        ['当日盈亏', 'dryk'],
        ['每日持仓', 'mrcc'],
        ['收益月统计', 'syytj'],
        ['收益率分布', 'sylfb'],
        ['交易详情', 'mrjy'],
        ['今日买入信号', 'mrxh'],
        ['今日卖出信号', 'mcxh']
      ]
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

    mrjyData: function () {
      return this.$store.state.goldStrategy.mrjyData
    },
    dqxgData: function () {
      return this.$store.state.goldStrategy.dqxgData
    },
    authInfo: function () {
      return this.$store.state.auth
    },
    mrxhData: function () {
      return this.$store.state.goldStrategy.mrxhData
    },
    mcxhData: function () {
      return this.$store.state.goldStrategy.mcxhData
    }

  },
  methods: {
    changeNavType (data) {
      this.type = data
    },
    goMrjyPage (data) {
      this.$store.dispatch('goldStrategy/getMrjyData', {
        strategyId: this.strategyId,
        page: data - 1
      }).then(() => {})
    },
    goMrxhPage (data) {
      this.$store.dispatch('goldStrategy/getMrxhData', {
        strategyId: this.strategyId,
        type: 'buy',
        page: data - 1
      }).then(() => {})
    },
    goMcxhPage (data) {
      this.$store.dispatch('goldStrategy/getMrxhData', {
        strategyId: this.strategyId,
        type: 'sell',
        page: data - 1
      }).then(() => {})
    },
    exportData (type) {
      var type2 = ''
      if (type === 'mrjy') {
        type2 = 'goldDetail'
      } else if (type === 'dqxg') {
        type2 = 'goldStock'
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
    createForm (id, type, token, clientid, deviceid) {
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
  mounted () {}
}
</script>
