<template>
<div class="after-wrap">
  <div class="nav-wrap">
    <ul class="nav-list">
      <li v-for="nav of navList" @click="changeNav(nav.id)">
        <p class="nav-name">{{nav.name}}</p>
        <p class="nav-value">{{nav.indicator.value}}</p>
        <p>{{nav.indicator.label}}</p>
      </li>
    </ul>
  </div>
  <div class="feature-detail">
    <div class="label-wrap">
      <div class="clearfix">
        <p class="fl" style="font-size:16px;">{{strategyName}}</p>
        <p class="fr"><img src="../../assets/images/jzxg/help.png" style="vertical-align:middle;" /><span style="vertical-align:middle;margin-left: 5px;">帮助</span></p>
      </div>
      <ul class="clearfix">
        <li v-for="" class="fl">
          <p></p>
          <p></p>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
export default {
  data() {
    return {
      navList: [],
      strategyId: 5,
      strategyName: '极智模拟仓'
    }
  },
  watch: {
    strategyId: function() {
      this.initStrategyDetail()
    }
  },
  components: {

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
        }
      })
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
.nav-list li:hover .name-value {
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
</style>