<template>
<div class="ambush">
  <div class="tit">{{title}}</div>
  <ul>
    <li v-for="item in dataList">
      <div class="item">
        <router-link :to="{ name:'topicDetail', params: {topicId:item.effCode} }" target="_blank" class="col name" v-if="item.flag==='topic'">{{item.effName}}</router-link>
        <router-link :to="{ name:'industryDetail', params: {industryId:item.effCode} }" target="_blank" class="col name" v-else-if="item.flag==='indu'">{{item.effName}}</router-link>
        <a v-z3-stock="{ref:'stockbox',code:item.effCode}" class="col name" :href="'/stock/'+item.effCode" target="_blank" v-else>{{item.effName}}</a>
        <span v-z3-updowncolor="item.chngPct" class="col chg">{{item.chngPct | chngPct}}</span>
        <span class="col time">{{item.occrDate}}</span>
      </div>
      <div class="news">
        <!--router-link :to="{name:'detailPages', params:{detailType:'news', id:item.newsId}}" target="_blank">{{item.newsTitle}}</router-link-->
        <span>{{item.newsTitle}}</span>
      </div>
    </li>
  </ul>
  <StockBox ref="stockbox"></StockBox>
</div>
</template>

<script>
import StockBox from 'components/stock-box'
let pcId = '';

export default {
  props: ['title', 'type'],
  data() {
    return {

    }
  },
  components: {
    StockBox
  },
  computed: {
    dataList() {
      let list = [];
      if (this.type === 'stock') {
        list = this.$store.state.zInfoPublic.ambushedStocks;
      } else if (this.type === 'plate') {
        list = this.$store.state.zInfoPublic.ambushedPlates;
      }
      return list;
    }
  },
  methods: {},
  mounted() {
    if (this.type === 'stock') {
      this.$store.dispatch('zInfoPublic/retrieveAmbushedStocks');
      pcId = setInterval(() => {
        this.$store.dispatch('zInfoPublic/retrieveAmbushedStocks');
      }, 30 * 1000);
    } else if (this.type === 'plate') {
      this.$store.dispatch('zInfoPublic/retrieveAmbushedPlates');
      pcId = setInterval(() => {
        this.$store.dispatch('zInfoPublic/retrieveAmbushedPlates');
      }, 60 * 1000);
    }
  },
  destroyed() {
    if (pcId) {
      clearInterval(pcId);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';
.ambush {
    height: 100%;
    border: 1px solid #303539;
    color: $wordsColorBase;
    font-size: 12px;
}
.ambush .tit {
    height: 24px;
    line-height: 24px;
    text-align: center;
    background: #303539;
}
.ambush ul {
    padding: 5px 0;
    height: calc(100% - 24px);
    overflow: auto;
    li {
        overflow: hidden;
        height: 40px;
        line-height: 20px;
        margin: 10px 6px;
        a {
            color: $wordsColorBase;
            text-decoration: none;
            background: transparent;
        }
        .item {
            overflow: hidden;
        }
        .col {
            float: left;
            width: 43%;
            overflow: hidden;
        }
        .chg {
            width: 25%;
            text-align: center;
        }
        .name {
            cursor: pointer;
        }
        .time {
            width: 32%;
            text-align: right;
        }
        .name:before {
            width: 8px;
            height: 8px;
            display: inline-block;
            margin-right: 3px;
            border-radius: 4px;
            background: #ca4941;
            content: '';
        }
        .news {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #808ba1;
            padding-left: 11px;
            background: transparent;
        }

    }
}
</style>
