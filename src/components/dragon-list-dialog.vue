<style lang="scss" scoped>
@import '../assets/css/base.css';

.app {
    height: 100%;
}

* {
    box-sizing: border-box;
    font-family: '微软雅黑';
    font-size: 12px;
}

body {
    background-color: #ebecee;
}

p {
    margin: 0;
}

body,
html {
    height: 100%;
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #d7d7d7 !important;
    border-radius: 10px;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #d7d7d7 !important;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: #a9a9a9 !important;
}

.dragonList {
    width: 100%;
    height: 100%;
    background: #000;
}

.dragonListLeft {
    width: 22%;
    height: 100%;
    background: #fff;
    overflow-y: scroll;
    box-sizing: border-box;
    border-right: 1px solid #DFDFDF;
}

.dragonListRight {
    width: 78%;
    height: 100%;
    background: #fff;
    padding-left: 10px;
}

.dragonListLeft ul li {
    /*padding: 12px 20px;*/
    border-bottom: 1px solid #DFDFDF;
}

.dragonListLeft ul li.active {
    background: #D2E2FB;
}

.dragonListLeft ul li.active .list-title {
    color: #696969;
}
.dragonListLeft ul li:hover {
    background: #D2E2FB;
    cursor: pointer;
}

.dragonListLeft ul li .list-time {
    line-height: 24px;
    font-size: 10px;
    padding: 12px 20px 0;
}

.dragonListLeft ul li .list-title {
    line-height: 20px;
    font-size: 12px;
    color: #1984ea;
    padding: 0 20px 12px;
}

.dragonListRight .detail-title {
    border-bottom: 1px solid #E2E2E2;
}

.dragonListRight .detail-title p {
    font-size: 16px;
    line-height: 50px;
}

.dragonListRight .detail-title .detail-time {
    display: inline-block;
}

.detail-con {
    /*border-bottom: 1px solid #E5E5E5;*/
}

.detail-box {
    height: calc(100% - 77px);
    overflow-y: scroll;
}

.detail-con .detail-type {
    line-height: 40px;
}

.detail-con table {
    width: 100%;
    border: 1px solid #DDDDDD;
}

.detail-con table tr td {
    border-bottom: 1px solid #DDDDDD;
    border-right: 1px solid #DDDDDD;
    line-height: 28px;
    text-align: right;
}
.detail-con table tbody tr:last-child td {
    border-bottom: none;
}
.detail-con table tr td:last-child {
    border-right: none;
}
.detail-con table tr td:not(:first-child) {
    padding-right: 10px;
    width: 15%;
}
.detail-con table tr td:first-child {
    text-align: left;
    padding-left: 10px;
}

.detail-total {
    line-height: 32px;
}
</style>
<template>
<div class="dragonList clearfix">
  <div class="dragonListLeft fl">
    <ul>
      <li ref="dragonItem" v-for="(item,index) in dragonList" :class="String($route.query.date) === String(item.date) ? 'active':''" :date="item.date" :innerCode="item.innerCode" @click="showDragonDetail($event)">
        <p class="list-time">
          {{String(item.date).substring(0,4)+'-'+String(item.date).substring(4,6)+'-'+String(item.date).substring(6)}}</p>
        <p class="list-title">{{item.infoCls}}</p>
      </li>
    </ul>

  </div>
  <div class="dragonListRight fl">
    <div class="detail-title" v-if="dragonDetail[0]">
      <p>{{dragonDetail[0].name}}[{{dragonDetail[0].symbol}}]</p>
      <span class="mb-10 detail-time">{{String(dragonDetail[0].date).substring(0,4)+'-'+String(dragonDetail[0].date).substring(4,6)+'-'+String(dragonDetail[0].date).substring(6)}}</span>
    </div>
    <div class="detail-box">
      <div class="detail-con" v-for="(dragonList,index) in dragonDetail">
        <p class="detail-type">上榜类型：{{dragonList.infoCls}}</p>
        <p class="mb-10">
          {{dragonList.statNum === 1 ? '今':dragonList.statNum}}日{{Number(dragonList.bvalueTotal) >= Number(dragonList.svalueTotal) ? '净买入':'净卖出'}}：
          <span v-if="dragonList.netValueTotal > 0" :style="{color:Number(dragonList.bvalueTotal) >= Number(dragonList.svalueTotal) ? 'rgb(202, 73, 65)':'rgb(86, 168, 112)'}">{{Number(dragonList.netValueTotal)/10e7 > 1 ? ((Number(dragonList.netValueTotal)/10e7).toFixed(2)+'亿') : ((Number(dragonList.netValueTotal)/10e6).toFixed(2)+'千万')}}</span>
          <span v-if="dragonList.netValueTotal < 0" :style="{color:Number(dragonList.bvalueTotal) >= Number(dragonList.svalueTotal) ? 'rgb(202, 73, 65)':'rgb(86, 168, 112)'}">{{Number(dragonList.netValueTotal)*-1 /10e7 > 1 ? ((Number(dragonList.netValueTotal)*-1/10e7).toFixed(2)+'亿') : ((Number(dragonList.netValueTotal)*-1/10e6).toFixed(2)+'千万')}}</span>
        </p>
        <div class="pr-30">
          <table cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <td>买入前5营业部名称</td>
                <td>买入(万元)</td>
                <td>卖出(万元)</td>
                <td>净额(万元)</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in dragonList.buyList">
                <td>{{item.branchName}}</td>
                <td style="color:rgb(202, 73, 65)">{{item.bValue/10e3 | isNull | decimal(2)}}</td>
                <td style="color:rgb(86, 168, 112)">{{item.sValue/10e3 | isNull | decimal(2)}}</td>
                <td :style="{color:item.bValue-item.sValue >= 0 ?'rgb(202, 73, 65)':'rgb(86, 168, 112)'}">
                  {{item.netValue/10e3 | isNull | decimal(2)}}
                </td>
              </tr>
            </tbody>
          </table>
          <p class="tr detail-total mb-10"><span class="mr-10">买入金额合计：<span style="color:rgb(202, 73, 65)">{{dragonList.bvalueTotal/10e3 | decimal(2)}}万元</span></span><span>买入金额占比合计：{{dragonList.bvalueRateTotal}}%</span>
          </p>
          <table cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <td>卖出前5营业部名称</td>
                <td>买入(万元)</td>
                <td>卖出(万元)</td>
                <td>净额(万元)</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in dragonList.sellList">
                <td>{{item.branchName}}</td>
                <td style="color:rgb(202, 73, 65)">{{item.bValue/10e3 | isNull | decimal(2)}}</td>
                <td style="color:rgb(86, 168, 112)">{{item.sValue/10e3 | isNull | decimal(2)}}</td>
                <td :style="{color:item.bValue-item.sValue >= 0 ?'rgb(202, 73, 65)':'rgb(86, 168, 112)'}">
                  {{item.netValue/10e3 | isNull | decimal(2)}}
                </td>
              </tr>
            </tbody>
          </table>
          <p class="tr detail-total mb-10 mt-5"><span class="mr-10">卖出金额合计：<span
                          style="color:rgb(86, 168, 112)">{{dragonList.svalueTotal/10e3 | decimal(2)}}万元</span></span><span>卖出金额占比合计：{{dragonList.svalueRateTotal}}%</span>
          </p>
        </div>
        <div v-if="dragonDetail.length !== 1 || index === dragonDetail.length" style="border-bottom:1px solid #E5E5E5; height:1px;"></div>
      </div>
    </div>

  </div>
</div>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
    dragonList: function() {
      return this.$store.state.dragonList.dragonList
    },
    dragonDetail: function() {
      return this.$store.state.dragonList.dragonDetail
    }

  },
  methods: {
    showDragonDetail(e) {
      for (let item in this.$refs.dragonItem) {
        this.$refs.dragonItem[item].removeAttribute('class', 'active')
      }
      e.target.parentNode.setAttribute('class', 'active')
      this.$store.dispatch('dragonList/getDragonDetail', {
        innerCode: e.target.parentNode.getAttribute('innerCode'),
        date: e.target.parentNode.getAttribute('date')
      })
    }
  },
  mounted() {
    this.$store.dispatch('dragonList/getDragonList', {
      // innerCode: '000021.SZ'
      innerCode: this.$route.query.innerCode
    })
    this.$store.dispatch('dragonList/getDragonDetail', {
      innerCode: this.$route.query.innerCode,
      date: this.$route.query.date
      // date: '20180117'
    })
  }
}
</script>