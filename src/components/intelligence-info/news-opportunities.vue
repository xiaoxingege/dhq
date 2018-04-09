<template>
<!-- 机会挖掘 -->
<div class="news-opportunities">
  <div class="grid-box clearfix display-box">
    <div class="grid-left box-flex-1">
      <div class="news-wrapper">
        <div class="news-nav-top">
          <a href="javascript:;" :class="{active: index === typeIndex}" class="nav-item" v-for="(item,index) in navData" @click="selectType(index)">{{item.name}}</a>
        </div>
        <ul class="news-list">
          <li class="display-box" v-for="item in newsOpportunities">
            <div class="leftTime">
              <div class="txt" v-z3-updowncolor="1">
                <span class="name">深圳特别合作区</span>
                <p>+0.01%</p>
              </div>
            </div>
            <div class="news-list-item box-flex-1">
              <div>
                <span class="fr time" v-z3-time="{ time:item.declareDate, type: '1' }"></span>
                <router-link :to="{name:'detailPages',params:{id : item.newsId, detailType:'news'}}" target="_blank">
                  <span class="name">{{item.title}}</span>
                </router-link>
                </div·>
                <div class="con-txt">
                  <router-link :to="{name:'detailPages',params:{id : item.newsId, detailType:'news'}}" target="_blank">
                    <span>{{cutStr(item.summary,350)}}</span>
                  </router-link>
                </div>
                <p class="source">( {{item.srcName}} )</p>
              </div>
          </li>
        </ul>
        <!-- v-show="newsOpportunities.length>8" -->
        <p class="tc mt-10">
          <a href="javascript:;" class="loadMore" @click="loadMore">加载更多</a>
        </p>
        </div>
      </div>
      <div class="grid-right"></div>
    </div>
  </div>
</template>

<script>
import 'whatwg-fetch'
import {
  cutString
} from 'utils/date'
import {
  mapState
} from 'vuex'
import {
  mapGetters
} from 'vuex'

export default {
  data() {
    return {
      page: 0,
      flag: 2,
      isShow: true,
      type: 0,
      typeIndex: 0,
      navData: [{
          name: '全部机会',
          value: '0'
        },
        {
          name: '个股机会',
          value: '0'
        },
        {
          name: '板块机会',
          value: '0'
        },
        {
          name: '产品机会',
          value: '0'
        }
      ]
    }
  },
  created() {
    this.loadList();
  },
  computed: {
    ...mapState([
      'totalPage',
      'page',
      'newsOpportunities'
    ]),
    ...mapGetters({
      totalPage: 'totalPage',
      page: 'page',
      newsOpportunities: 'newsOpportunities'
    })
  },
  methods: {
    loadList() {
      this.$store.dispatch('getNewsOpportunities', {
        type: this.typeIndex,
        page: this.page
      });
    },
    loadMore() {
      this.page++
        this.loadList()
    },
    cutStr(str, len) {
      if (str === '') str = '--'
      return cutString(str, len)
    },
    upAndDownColor(flag) {
      if (flag > 0) {
        return 'upColor'
      } else if (flag < 0) {
        return 'downColor'
      } else {
        return ''
      }
    },
    selectType(index) {
      this.typeIndex = index
      this.page = 0
    }
  },
  watch: {
    'typeIndex': {
      deep: true,
      handler: function(oldVal, newVal) {
        this.loadList()
      }
    }
  },
  filters: {
    isNull(value) {
      return value === null || value === '' ? '--' : value
    },
    filterNum(value, type) {
      return value === null || value === '' ? '--' : value.toFixed(2) + type
    },
    convert(value) {
      return value === '新闻' ? '资讯' : value;
    }
  }
}
</script>
<style lang='scss' scoped>
@import '../../assets/scss/style.scss';
@import '../../assets/css/reset.css';
@import '../../assets/css/base.css';
.news-opportunities {
    color: $wordsColorBase;
    min-width: 1200px;
    overflow: auto;
    font-size: 12px;
}
.news-nav-top {
    height: 26px;
    background-color: #1a1b1f;
    border: 1px solid #0d1112;
    border-bottom-color: #23272c;
    font-size: 0;
    padding-left: 4px;
    .nav-item {
        display: inline-block;
        font-size: 12px;
        background-color: #23272c;
        height: 24px;
        line-height: 24px;
        margin-right: 2px;
        color: $wordsColorBase;
        padding: 0 10px;
        margin-top: 2px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        &.active {
            background-color: #2e4465;
        }
    }
}
.leftTime {
    position: relative;
    width: 130px;
    background-color: #26272d;
    border: 1px solid #0d1112;
    .name,
    p {
        font-size: 16px;
    }
    .txt {
        width: 100%;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    p {
        text-align: center;
    }
}
.grid-box {
    .grid-right {
        width: 370px;
    }
}
.con-txt,
.labels,
.name,
.stock {
    font-size: 12px;
}
.name {
    font-weight: bold;
}
.source {
    color: #656766;
}
.labels {
    display: inline-block;
    padding: 0 6px;
    height: 17px;
    margin-right: 5px;
    background-color: #525a65;
}
.con-txt {
    margin: 8px 0 0;
    line-height: 18px;
}
.news-list {
    .news-list-item {
        border: 1px solid #0d1112;
        background-color: #1a1b1f;
        padding: 10px 10px 10px 5px;
        a {
            color: $wordsColorBase;
            &:hover {
                color: #2388da;
            }
        }
    }
}
.stock {
    font-size: 0;
    .stock-item {
        font-size: 12px;
        display: inline-block;
        border: 1px solid #c9d0d7;
        height: 17px;
        padding: 0 8px;
        border-radius: 10px;
        margin-right: 20px;
        a {
            color: #fff;
        }
        span {
            margin-left: 8px;
            &:first-child {
                margin-left: 0;
            }
        }
        &.upColor {
            a {
                color: $upColor;
            }
            border-color: $upColor;
        }
        &.downColor {
            a {
                color: $downColor;
            }
            border-color: $downColor;
        }
    }
}
.upBgColor {
    background-color: $upColor;
}
.downBgColor {
    background-color: $downColor;
}
.loadMore,
.time {
    color: #666;
}
.redbg {
    background: #ca4941;
}
.greenbg {
    background: #059509;
}
.blockbg {
    background: #525a65;
}
.display-box {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -o-box;
    display: box;
}
.box-flex-1 {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    -o-box-flex: 1;
    box-flex: 1;
}
.box-flex-2 {
    -webkit-box-flex: 2;
    -moz-box-flex: 2;
    -ms-flex: 2;
    -o-box-flex: 2;
    box-flex: 2;
}
.box-flex-3 {
    -webkit-box-flex: 3;
    -moz-box-flex: 3;
    -ms-flex: 3;
    -o-box-flex: 3;
    box-flex: 3;
}
.box-flex-4 {
    -webkit-box-flex: 4;
    -moz-box-flex: 4;
    -ms-flex: 4;
    -o-box-flex: 4;
    box-flex: 4;
}
</style>
