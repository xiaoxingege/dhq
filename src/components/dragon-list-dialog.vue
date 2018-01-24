<style lang="scss">
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
    font-size: 10px;
    color: #1984ea;
    padding: 0 20px 12px;
}

.dragonListRight .detail-title {
    border-bottom: 1px solid #E2E2E2;
}
</style>
<template>
<div class="dragonList clearfix">
  <div class="dragonListLeft fl">
    <ul>
      <li ref="dragonItem" v-for="item in dragonList" :date="item.date" :innerCode="item.innerCode" @click="showDragonDetail($event)">
        <p class="list-time">
          {{String(item.date).substring(0,4)+'-'+String(item.date).substring(4,6)+'-'+String(item.date).substring(6)}}</p>
        <p class="list-title">{{item.infoCls}}</p>
      </li>
    </ul>

  </div>
  <div class="dragonListRight fl">
    <div class="detail-title">
      <p>{{dragonDetail.name}}[{{dragonDetail.symbol}}]</p>
      <span>{{String(dragonDetail.date).substring(0,4)+'-'+String(dragonDetail.date).substring(4,6)+'-'+String(dragonDetail.date).substring(6)}}</span>
    </div>
    <div>
      <p>上榜类型：{{dragonDetail.infoCls}}</p>
      <p>
        {{dragonDetail.statNum === 1 ? '今':dragonDetail.statNum}}日
        <span :style="{color:Number(dragonDetail.bvalueTotal) >= Number(dragonDetail.svalueTotal) ? 'rgb(202, 73, 65)':'rgb(86, 168, 112)'}">{{Number(dragonDetail.bvalueTotal) >= Number(dragonDetail.svalueTotal) ? '净买入':'净卖出'}}</span> ：
        <span v-if="dragonDetail.netValueTotal > 0">{{Number(dragonDetail.netValueTotal)/10e7 > 1 ? ((Number(dragonDetail.netValueTotal)/10e7).toFixed(2)+'亿') : ((Number(dragonDetail.netValueTotal)/10e6).toFixed(2)+'千万')}}</span>
        <span v-if="dragonDetail.netValueTotal < 0">{{Number(dragonDetail.netValueTotal)*-1 /10e7 > 1 ? ((Number(dragonDetail.netValueTotal)/10e7).toFixed(2)+'亿') : ((Number(dragonDetail.netValueTotal)/10e6).toFixed(2)+'千万')}}</span>
      </p>
      <div>
        <table>
          <thead>
            <th>
              <td>买入前5营业部名称</td>
              <td>买入(万元)</td>
              <td>卖出(万元)</td>
              <td>净额(万元)</td>
            </th>
          </thead>
          <tbody>
            <tr v-for="item in dragonDetail.buyList">
              <td>{{item.branchName}}</td>
              <td style="color:rgb(202, 73, 65)">{{item.bVlaue | isNull | decimal(2)}}</td>
              <td style="color:rgb(86, 168, 112)">{{item.sValue | isNull | decimal(2)}}</td>
              <td>{{item.netValue | isNull | decimal(2)}}</td>
            </tr>
          </tbody>
        </table>
        <p><span>买入金额合计：{{dragonDetail.bvalueTotal}}万元</span><span>买入金额占比合计：{{dragonDetail.bvalueRateTotal}}%</span>
        </p>
        <table>
          <thead>
            <th>
              <td>卖出前5营业部名称</td>
              <td>买入(万元)</td>
              <td>卖出(万元)</td>
              <td>净额(万元)</td>
            </th>
          </thead>
          <tbody>
            <tr v-for="item in dragonDetail.sellList">
              <td>{{item.branchName}}</td>
              <td style="color:rgb(202, 73, 65)">{{item.bVlaue | isNull | decimal(2)}}</td>
              <td style="color:rgb(86, 168, 112)">{{item.sValue | isNull | decimal(2)}}</td>
              <td>{{item.netValue | isNull | decimal(2)}}</td>
            </tr>
          </tbody>
        </table>
        <p><span>卖出金额合计：{{dragonDetail.svalueTotal}}万元</span><span>卖出金额占比合计：{{dragonDetail.svalueRateTotal}}%</span>
        </p>
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
      innerCode: '000021.SZ'
    })
    this.$store.dispatch('dragonList/getDragonDetail', {
      innerCode: '000021.SZ',
      date: '20180117'
    })
  }
}
</script>