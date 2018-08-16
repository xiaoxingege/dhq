<template>
<div class="hot">
  <div class="tit">{{title}}</div>
  <ul v-if="type ==='stock'" ref="datalist">
    <li v-for="(item,index) in dataList">
      <a v-z3-stock="{ref:'stockbox',code:item.innerCode}" class="col name" :href="'/stock/'+item.innerCode" target="_blank">{{item.name}}</a>
      <span class="col chg" v-z3-updowncolor="item.curChngPct">{{item.curChngPct | chngPct}}</span>
      <div class="col hot-index">
        <div class="full" @mouseover="showDialog(index)" @mouseout="closeDialog(index)">
          <div :style="'width:'+progressWidth(item.infoIndex)" class="progress">{{item.infoIndex.toFixed(0)}}</div>
        </div>
        <transition name='fade'>
          <div class="newsDialog" v-show="entitiesState[index]">
            <h2 class="title">{{item.name}}</h2>
            <div class="box">
              <p class="newsTitle" v-for="newsTitle in item.newsList">{{newsTitle.newsTitle}}</p>
            </div>
          </div>
        </transition>
      </div>
    </li>
  </ul>
  <ul v-if="type === 'word'" ref="datalist">
    <li v-for="(item,index) in dataList">
      <router-link :to="{ name:'topicDetail', params: {topicId:item.code} }" target="_blank" class="col name active" v-if="item.flag==='topic'">{{item.showName}}</router-link>
      <router-link :to="{ name:'industryDetail', params: {industryId:item.code} }" target="_blank" class="col name active" v-else-if="item.flag==='indu'">{{item.showName}}</router-link>
      <span @dblclick="search(item.showName)" class="col name" v-else>{{item.showName}}</span>
      <span v-z3-updowncolor="item.chngPct" class="col chg">{{item.chngPct | chngPct}}</span>
      <div class="col hot-index">
        <div class="full" @mouseover="showDialog(index)" @mouseout="closeDialog(index)">
          <div :style="'width:'+progressWidth(item.infoIndex)" class="progress">{{item.infoIndex.toFixed(0)}}</div>
        </div>
        <transition name='fade'>
          <div class="newsDialog" v-show="entitiesState[index]">
            <h2 class="title">{{item.showName}}</h2>
            <div class="box">
              <p class="newsTitle" v-for="newsTitle in item.newsList">{{newsTitle.newsTitle}}</p>
            </div>
          </div>
        </transition>
      </div>
    </li>
  </ul>
  <StockBox ref="stockbox"></StockBox>
</div>
</template>

<script>
let pcId = '';
import StockBox from 'components/stock-box'
import {
  ctx,
  domain
} from '../../z3tougu/config'
export default {
  props: ['title', 'type'],
  data() {
    return {
      entitiesState: []
    }
  },
  components: {
    StockBox
  },
  computed: {
    dataList: function() {
      let list = [];
      if (this.type === 'stock') {
        list = this.$store.state.zInfoPublic.hotStocks;
      } else if (this.type === 'word') {
        list = this.$store.state.zInfoPublic.hotWords
      }
      let size = 0;
      if (list.length > 0) {
        const height = this.$refs.datalist.clientHeight;
        size = Math.floor(height / 30);
      }
      return list.slice(0, size);
    }
  },
  methods: {
    progressWidth: progress => progress <= 30 ? '30%' : progress.toFixed(0) + '%',
    search: function(keyword) {
      window.open(`${domain}${ctx}/search/infor/${keyword}`);
    },
    showDialog(i) {
      let state = this.entitiesState;
      this.$set(state, i, true);
      for (let a in this.entitiesState) {
        if (Number(a) !== i) {
          this.$set(state, a, false);
        }
      }
    },
    closeDialog(i) {
      let state = this.entitiesState;
      this.$set(state, i, false);
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
      pcId = setInterval(() => {
        this.$store.dispatch('zInfoPublic/retrieveHotWords', {
          size: 20
        });
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
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s ease-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.newsDialog {
    position: absolute;
    top: 30px;
    right: 0;
    width: 300px;
    z-index: 99999;
    .title {
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        color: #fff;
        padding-left: 15px;
        background-color: #404852;
    }
    .box {
        padding: 8px 0;
        background-color: #fff;
    }
    .newsTitle {
        width: 263px;
        white-space: pre;
        text-overflow: ellipsis;
        position: relative;
        height: 26px;
        line-height: 26px;
        font-size: 12px;
        color: #666;
        padding: 0 12px 0 25px;
        overflow: hidden;
        cursor: default;
        &:after {
            content: '';
            position: absolute;
            left: 15px;
            top: 13px;
            width: 6px;
            height: 6px;
            background-color: #666;
            border-radius: 100px;
        }
    }
}
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
    height: calc(100% - 25px);
    // overflow: auto;
    li {
        // overflow: hidden;
        height: 20px;
        line-height: 20px;
        margin: 10px 6px;
        a {
            color: $wordsColorBase;
        }
        .active {
            color: #EDB441;
        }
        .col {
            float: left;
            width: 39%;
        }
        .chg {
            width: 26%;
            text-align: center;
        }
        .name {
            cursor: pointer;
        }
        .hot-index {
            position: relative;
            width: 35%;
            cursor: default;
            .full {
                width: 90%;
                height: 18px;
                line-height: 18px;
                margin: 0 10%;
            }
            .progress {
                text-align: center;
                background: #ca4941;
            }
        }

    }
}
</style>
