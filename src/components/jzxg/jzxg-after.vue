<template>
<div class="after-wrap">
  <div class="nav-wrap">
    <ul class="nav-list">
      <li v-for="nav of navList" @click="changeNav(nav.id)">
        <p class="nav-name">{{nav.name}}</p>
        <p class="nav-value">{{nav.indicator.value}}</p>
        <p class="nav-label">{{nav.indicator.label}}</p>
      </li>
    </ul>
  </div>
  <div class="feature-detail">
    <div class="label-wrap">
      <div class="clearfix">
        <p class="fl" style="font-size:16px;color:#fff;">{{strategyName}}</p>
        <p class="fr"><img src="../../assets/images/jzxg/help.png" style="vertical-align:middle;" /><span style="vertical-align:middle;margin-left: 5px;">帮助</span></p>
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
          <p>运用z量化底层算法和AI-Pattern Recognition（人工智能形态识别）算法，通过分析资金面，k线走势形态，判断出即将出现主升浪的个股，轻松赢在起跑线；按照黄金盈亏比例预设止损止盈点，跟随策略调仓，无畏恐惧，战胜贪婪。</p>
        </div>
      </div>
    </div>
    <div class="ten-stock">
      <tenStocks :tenStockList="detailTenStock"></tenStocks>
    </div>
  </div>
</div>
</template>
<script>
import tenStocks from 'components/jzxg/ten-stock'
import {
  mapState
} from 'vuex'
export default {
  data() {
    return {
      navList: [],
      strategyId: 5,
      strategyName: '极智模拟仓',
      labelList: [],
      isShowIconHelp: false,
      detailTenStock: []
    }
  },
  watch: {
    strategyId: function() {
      this.initStrategyDetail()
    }
  },
  components: {
    tenStocks
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
          this.labelList = this.strategyData.indicators
          this.detailTenStock = this.strategyData.hotStocks
        }
      })
    },
    showHelp: function() {
      this.isShowIconHelp = true;
    },
    hideHelp: function() {
      this.isShowIconHelp = false;
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
}
.after-wrap {
    box-sizing: border-box;
    * {
        box-sizing: border-box;
    }
}
.nav-wrap {
    position: absolute;
    width: 240px;
    background-color: $bgConColor;
    top: 3px;
    left: 1px;
    padding: 18px 20px 20px;
    height: 100%;
}
.feature-detail {
    height: 1000px;
    background-color: $bgConColor;
    padding-left: 20px;
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
}
.nav-list li:hover .nav-value {
    color: #fff;
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
    padding: 18px 20px 20px 0;
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
</style>