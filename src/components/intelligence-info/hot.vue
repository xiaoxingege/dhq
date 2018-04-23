<template>
<div class="hot">
  <div class="tit">{{title}}</div>
  <ul v-if="type ==='stock'">
    <li v-for="item in dataList">
      <a v-z3-stock="{ref:'stockbox',code:item.innerCode}" class="col name" :href="'/stock/'+item.innerCode" target="_blank">{{item.name}}</a>
      <span class="col chg" v-z3-updowncolor="item.curChngPct">{{item.curChngPct | chngPct}}</span>
      <div class="col hot-index">
        <div class="full">
          <div :style="'width:'+progressWidth(item.infoIndex)" class="progress">{{item.infoIndex.toFixed(0)}}</div>
        </div>
      </div>
    </li>
  </ul>
  <ul v-if="type === 'word'">
    <li v-for="item in dataList">
      <router-link :to="{ name:'topicDetail', params: {topicId:item.code} }" target="_blank" class="col name active" v-if="item.flag==='topic'">{{item.showName}}</router-link>
      <router-link :to="{ name:'industryDetail', params: {industryId:item.code} }" target="_blank" class="col name active" v-else-if="item.flag==='indu'">{{item.showName}}</router-link>
      <span @dblclick="search(item.showName)" class="col name" v-else>{{item.showName}}</span>
      <span v-z3-updowncolor="item.chngPct" class="col chg">{{item.chngPct | chngPct}}</span>
      <div class="col hot-index">
        <div class="full">
          <div :style="'width:'+progressWidth(item.infoIndex)" class="progress">{{item.infoIndex.toFixed(0)}}</div>
        </div>
      </div>
    </li>
  </ul>
  <StockBox ref="stockbox"></StockBox>
</div>
</template>

<script>
let pcId = "";
import StockBox from 'components/stock-box'
import {
  ctx,
  domain
} from '../../z3tougu/config'
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
        list = this.$store.state.zInfoPublic.hotStocks;
      } else if (this.type === 'word') {
        list = this.$store.state.zInfoPublic.hotWords
      }
      return list;
    }
  },
  methods: {
    progressWidth: progress => progress <= 30 ? '30%' : progress.toFixed(0) + '%',
    search: function(keyword) {
      window.open(`${domain}${ctx}/search/infor/${keyword}`);
      // this.$router.push({
      //   name: 'search',
      //   params: {
      //     linkText: 'infor',
      //     keyword: keyword
      //   }
      // });
    }
  },
  mounted() {
    if (this.type === 'stock') {
      this.$store.dispatch('zInfoPublic/retrieveHotStocks', {
        size: 20
      });
      pcId = setInterval(() => {
        this.$store.dispatch('zInfoPublic/retrieveHotStocks', {
          size: 20
        });
      }, 60 * 1000);
    } else if (this.type === 'word') {
      this.$store.dispatch('zInfoPublic/retrieveHotWords', {
        size: 20
      });
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
.hot {
    height: 100%;
    border: 1px solid #303539;
    color: $wordsColorBase;
    font-size: 12px;
}
.hot .tit {
    height: 24px;
    line-height: 24px;
    text-align: center;
    background: #303539;
}
.hot ul {
    padding: 5px 0;
    height: calc(100% - 36px);
    overflow: auto;
    li {
        overflow: hidden;
        height: 18px;
        line-height: 18px;
        margin: 5px 6px;
        a {
            color: $wordsColorBase;
        }
        .active {
            color: #EDB441;
        }
        .col {
            float: left;
            width: 37%;
        }
        .chg {
            width: 28%;
            text-align: center;
        }
        .name {
            cursor: pointer;
        }
        .hot-index {
            width: 35%;
            .full {
                width: 90%;
                height: 16px;
                line-height: 16px;
                margin: 0 10%;
            }
            .progress {
                text-align: center;
                background: #BB0102;
            }
        }

    }
}
</style>