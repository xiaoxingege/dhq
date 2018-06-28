<template>
<div class="after-wrap">
  <div class="nav-wrap">
    <ul class="nav-list">
      <li v-for="nav of navList" @click="changeNav(nav.id)" :class="{'hover-blue':strategyId === nav.id}">
        <p class="nav-name">{{nav.name}}</p>
        <p class="nav-value">{{nav.indicator.value}}</p>
        <p class="nav-label">{{nav.indicator.label}}</p>
      </li>
    </ul>
    <div class="to-renewals">
      <p>*策略由z量化团队提供技术支持</p>
      <p>有效期至： {{expireDate}}</p>
      <div class="to-renewals-btn"><a @click="alertBuy">我要续费</a></div>
    </div>
  </div>
  <div class="feature-detail">
    <div class="label-wrap">
      <div class="clearfix">
        <p class="fl" style="font-size:16px;color:#fff;">{{strategyName}}</p>
        <p style="cursor:pointer;" class="fr" @click="popUpHelpWindow"><img src="../../assets/images/jzxg/help.png" style="vertical-align:middle;" /><span style="vertical-align:middle;margin-left: 5px;">帮助</span></p>
      </div>
      <div class="clearfix" style="height:50px;margin-top:18px;">
        <ul class="label-ul display-box fl">
          <li v-for="label of labelList" class="box-flex-1">
            <p v-z3-updowncolor="label.bgColor">{{label.value}}</p>
            <p>{{label.label}}</p>
          </li>
        </ul>
        <div class="fl" style="width:10%;height:100%;position: relative;">
          <div class="jzxg-help-img" @mouseover="showHelp" @mouseout="hideHelp"></div>
          <div id="icon-help" v-if="isShowIconHelp">
            <p v-for="label of labelList">
              <span style="color:#000;">{{label.label}}&nbsp;:&nbsp;</span>
              <span>{{label.tips}}</span>
            </p>
          </div>
        </div>
        <div class="fl" style="width:60%;">
          <p>{{descriptionTxt[strategyId-1]}}</p>
        </div>
      </div>
    </div>
    <p class="detail-title">{{tenStockTitle[strategyId-1]}}</p>
    <div class="ten-stock">
      <tenStocks :tenStockList="detailTenStock"></tenStocks>
    </div>
    <p class="detail-title">最新调仓（最新调入）</p>
    <RecentIn :dataList="lateInList" :strategyId="strategyId" :nextStart="nextStart"></RecentIn>
    <p class="detail-title">当前持仓</p>
    <HoldStock :strategyId="strategyId"></HoldStock>
    <div class="profit-sum">{{strategyName}}共产生调入信号{{totalNum}}个，{{profitNum}}只股票盈利</div>
  </div>
  <PopWindow v-if="isPopHelpWindow" :popWidth="popWidth" :popHeight="popHeight" :popTitle="popTitle" @closeWindow="closeHelpWindow"></PopWindow>
  <buyModel :showstate='showBuy' @buyClose="cancle"></buyModel>
</div>
</template>
<script>
import tenStocks from 'components/jzxg/ten-stock'
import PopWindow from 'components/jzxg/popup-window'
import RecentIn from 'components/jzxg/recent-in'
import HoldStock from 'components/jzxg/hold-stock'
import buyModel from 'components/touguStudio/buy'
import {
  mapState
} from 'vuex'
export default {
  props: ['expireDate'],
  data() {
    return {
      navList: [],
      strategyId: 5,
      nextStart: '',
      holdNextStart: '',
      strategyName: '极智模拟仓',
      totalNum: '', // 调入信号数量，
      profitNum: '', // 盈利股票数量，
      labelList: [],
      isShowIconHelp: false,
      detailTenStock: [],
      pageSize: 10,
      lateInList: [],
      holdStockList: [],
      popWidth: 780,
      popHeight: 545,
      popTitle: '极智选股-极智模拟仓',
      isPopHelpWindow: false,
      tenStockTitle: ['波段优选十大牛股', '中线掘金十大牛股', '主力天机十大牛股', '热点狙击十大牛股', '极智十大牛股'],
      descriptionTxt: [
        '万物互联，AI-Martket Wave Band（人工智能市场波段）算法把物理学中电磁波和衍射分析的思想和市场行为结合，打造出波段优选策略。择天时，定低点，判洗盘，抓反转；高抛低吸，道法自然。',
        '用时间换空间，中线掘金策略中期范围内挖掘价格错配个股，并采用是自主研发的Z-Timing择时模型，深度学习市场风格，规避系统性风险，捕捉价值回归。',
        '热点狙击旨在利用量化趋势分析技术，智能地抓取板块热度的起势点，并通过板块内轮动原理，挖掘未来涨势可能较大的股票。不再追高，坐等风口。',
        '主力天机利用AI-Pattern Recognition（人工智能形态识别）技术，识别出前期稳定，近期连续突破新高的个股，有效地判断出主力资金的投资行为，从而达到短期的获利。跟对主力，顺势而为。',
        '运用z量化底层算法和AI-Pattern Recognition（人工智能形态识别）算法，通过分析资金面，k线走势形态，策略判断出即将出现主升浪的个股，轻松赢在起跑线；按照黄金盈亏比例预设止损止盈点，跟随策略调仓，无畏恐惧，战胜贪婪。'
      ],
      showBuy: false
    }
  },
  watch: {
    strategyId: function() {
      this.initStrategyDetail()
    }
  },
  components: {
    tenStocks,
    PopWindow,
    RecentIn,
    HoldStock,
    buyModel
  },
  computed: mapState({
    navListData: state => state.jzxg.navData,
    strategyData: state => state.jzxg.strategyDetail
  }),
  methods: {
    initNav: function() {
      this.$store.dispatch('jzxg/getNavData').then(() => {
        this.navList = this.navListData
      })
    },
    formatData: function(value) {
      if (value || value === 0) {
        return true
      } else {
        return false
      }
    },
    changeNav: function(id) {
      this.strategyId = id
    },
    initStrategyDetail: function() {
      this.$store.dispatch('jzxg/getStrategyDetail', {
        strategyId: this.strategyId
      }).then(() => {
        if (this.strategyData) {
          this.strategyName = this.strategyData.name
          this.totalNum = this.strategyData.perform.totalNum
          this.profitNum = this.strategyData.perform.profitNum
          this.labelList = this.strategyData.indicators
          this.detailTenStock = this.strategyData.hotStocks
          this.lateInList = this.strategyData.lastExcellent.stocks
          this.nextStart = this.strategyData.lastExcellent.nextStart
        }
      })
    },
    showHelp: function() {
      this.isShowIconHelp = true;
    },
    hideHelp: function() {
      this.isShowIconHelp = false;
    },
    popUpHelpWindow: function() {
      this.isPopHelpWindow = true
    },
    closeHelpWindow: function() {
      this.isPopHelpWindow = false
    },
    alertBuy: function() {
      this.showBuy = true;
    },
    cancle: function() {
      this.showBuy = false;
    }
  },
  mounted() {
    this.initNav()
    this.initStrategyDetail()
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/base.css";
@import "../../assets/scss/style";
.after-wrap {
    background-color: $bgDeepColor;
    font-size: 12px;
    min-width: 1217px;
    padding: 3px 1px 3px 242px;
    font-family: "Microsoft YaHei";
    color: $wordsColorBase;
    position: relative;
    min-height: 100%;
}
.after-wrap {
    box-sizing: border-box;
    * {
        box-sizing: border-box;
    }
}
.nav-wrap {
    position: fixed;
    width: 240px;
    background-color: $bgConColor;
    top: 3px;
    left: 1px;
    padding: 18px 20px 20px;
    min-height: 100%;
}
.to-renewals {
    position: absolute;
    width: 100%;
    bottom: 10px;
    left: 0;
    height: 80px;
}
.to-renewals p {
    text-align: center;
    padding: 0 20px;
    font-size: 11px;
    color: $grayWordsColor;
}
.to-renewals-btn {
    padding: 0 20px;
    margin-top: 10px;
}
.to-renewals-btn a {
    display: inline-block;
    width: 100%;
    background-color: #1984ea;
    color: #fff;
    height: 30px;
    border-radius: 3px;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
}
.feature-detail {
    background-color: $bgConColor;
    padding: 0 20px;
    min-height: 100%;
    height: 100%;
}
.nav-list {
    width: 200px;
}
.nav-list li {
    height: 90px;
    background-color: #2f343a;
    cursor: pointer;
    margin-bottom: 10px;
    padding: 13px 0;
}
.nav-list li p {
    text-align: center;
}
.nav-list li:hover {
    background-color: #1984ea;
    p {
        color: #fff;
    }
}
.hover-blue {
    background-color: #1984ea !important;
    p {
        color: #fff !important;
    }
}
.nav-name {
    font-size: 14px;
    color: #fff;
}
.nav-value {
    font-size: 20px;
    color: #fc2721;
}
.label-wrap {
    height: 116px;
    border-bottom: 1px solid $lineAndTitleColor;
    padding: 18px 0 20px;
}
.label-ul {
    width: 30%;
    height: 100%;
}
.label-ul li {
    margin-right: 35px;
}
.label-ul li:nth-child(3) {
    margin-right: 20px;
}
.label-ul li p:first-child {
    font-size: 14px;
}
.label-ul li p:last-child {
    color: $grayWordsColor;
}
.nav-label {
    color: $grayWordsColor;
}
.jzxg-help-img {
    width: 15px;
    height: 15px;
    background: url("../../assets/images/z3img/help.png") no-repeat;
    cursor: pointer;
    position: absolute;
    bottom: 15px;
    left: 0;
}
#icon-help {
    position: absolute;
    top: 45px;
    left: 30px;
    width: 550px;
    display: block;
    padding: 15px;
    color: #666666;
    background: rgb(204, 207, 217);
    border-radius: 10px;
    z-index: 999;
    line-height: 18px;
}
.ten-stock {
    height: 170px;
}
.detail-title {
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 16px;
    color: #fff;
}
.profit-sum {
    margin-top: 10px;
    color: $grayWordsColor;
    text-align: right;
}
</style>