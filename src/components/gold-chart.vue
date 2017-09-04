<style lang="scss" scoped>
    .mrjy,.dqxg{ background: #fff;  }
    .mrjy table,.dqxg table{ width:100%;}
    .mrjy table thead,.dqxg table thead{ background:#F2F2F2;}
    .mrjy table thead tr th,.dqxg table thead tr th{ height:25px; line-height: 25px}
    .mrjy table  tr td,.dqxg table  tr td{ text-align: center; height:35px; line-height: 35px;}
    .red{
        color:#d7453e;
    }
    .green{
        color:#61a65b;
    }
    .syqxt,.dryk,.mrcc,.syytj,.sylfb,.mrjy,.dqxg{
        min-height:420px;
        width:100%;
    }
    @media only screen and (min-device-width: 320px) and (max-device-width: 1217px) {
        .syqxt,.dryk,.mrcc,.syytj,.sylfb,.mrjy,.dqxg{
            min-height:4.2rem;
            width:100%;
        }
    }
</style>
<template>
    <div style="width:100%">
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
                        <td><a :href="'/stock/'+ item.name" target="_blank">{{item.name}}</a></td>
                        <td :class="item.buySellType === '买入'? 'red' : 'green'">{{item.buySellType}}</td>
                        <td>{{Number(item.price).toFixed(2)}}</td>
                        <td>{{item.quantity}}</td>
                        <td>{{Number(item.amount).toFixed(2)}}</td>
                        <td>{{Number(item.commission).toFixed(2)}}</td>
                    </tr>
                    </tbody>

                </table>
                <Pagination v-if="mrjyData.totalPages > 1" :totalPage="mrjyData.totalPages" v-on:getPageFromChild="goMrjyPage"></Pagination>
            </div>
            <div v-if="type === 'dqxg'" class="dqxg">
                <table cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>序号</th>
                        <th>股票代码</th>
                        <th>股票简称</th>
                        <th>价格（元）</th>
                        <th>涨跌</th>
                        <th>涨跌幅</th>
                        <th>市盈率</th>
                        <th>市净率</th>
                        <th>市销率</th>
                        <th>总市值</th>
                        <th>流通市值</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item,index) of dqxgData.content">
                        <td>{{index+1}}</td>
                        <td>{{item.innerCode}}</td>
                        <td>{{item.name}}</td>
                        <td :class="item.price >= 0 ? item.price === 0 ?'':'red':'green'">{{item.price === null ? '--':Number(item.price).toFixed(2)}}</td>
                        <td :class="item.chg >= 0 ? item.chg === 0 ?'':'red':'green'">{{item.chg === null ? '--':Number(item.chg).toFixed(2)}}</td>
                        <td :class="item.curChngPct >= 0 ? item.curChngPct === 0 ?'':'red':'green'">{{item.curChngPct === null ? '--':Number(item.curChngPct).toFixed(2)+'%'}}</td>
                        <td>{{Number(item.peTtm).toFixed(2)}}</td>
                        <td>{{Number(item.pb).toFixed(2)}}</td>
                        <td>{{Number(item.pc).toFixed(2)}}</td>
                        <td>{{item.tcap === null ? '--':Number(item.tcap/100000000).toFixed(0)+' 亿'}} </td>
                        <td>{{item.mktcap === null ? '--':Number(item.mktcap/100000000).toFixed(0)+' 亿'}}</td>
                    </tr>
                    </tbody>

                </table>
                <Pagination v-if="mrjyData.totalPages > 1" :totalPage="dqxgData.totalPages" v-on:getPageFromChild="goDqxgPage"></Pagination>
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

    export default{
      props: ['data', 'strategyId'],
      data () {
        return {
          navText: [['收益曲线图', 'syqxt'], ['当日盈亏', 'dryk'], ['每日持仓', 'mrcc'], ['收益月统计', 'syytj'], ['收益率分布', 'sylfb'], ['每日交易', 'mrjy'], ['当前选股', 'dqxg']],
          type: 'syqxt'
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
        }
      },
      methods: {
        changeNavType (data) {
          this.type = data
        },
        goMrjyPage (data) {
          this.$store.dispatch('goldStrategy/getMrjyData', { strategyId: this.strategyId, page: data - 1 }).then(() => {})
        },
        goDqxgPage (data) {
          this.$store.dispatch('goldStrategy/getDqxgData', { strategyId: this.strategyId, pageNum: data - 1 }).then(() => {})
        }
      },
      mounted () {

      }
    }
</script>
