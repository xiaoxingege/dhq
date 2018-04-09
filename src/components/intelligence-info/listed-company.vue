<template>
<!-- 上市公司 -->
<div class="listed-company">
  <div class="grid-box clearfix display-box">
    <div class="grid-left box-flex-1">
      <div class="news-wrapper">
        <ul class="news-list">
          <li class="news-list-item" v-for="item in listedCompany">
            <div class="con-top">
              <span class="time fr" v-z3-time="{ time: '2018-03-26 13:24', type: '1' }"></span>
              <p v-z3-updowncolor="1" v-for="equityList in item.equityList">
                <a href="#" v-z3-stock="{ref:'stockbox',code:equityList.code}" :value='equityList.code' target="_blank">
                    <span v-z3-updowncolor="1">{{equityList.name}}[{{equityList.code}}]</span>
                  </a>
                <span>14.90</span><span>+2.30%</span>
              </p>
            </div>
            <div>
              <span class="labels" :class='status(item.postiveIndex)'>{{item.postiveIndex}}</span>
              <router-link :to="{name:'detailPages',params:{id : item.newsId, detailType:'news'}}" target="_blank">
                <span class="name">[{{ item.newsType  | convert}}] {{item.title}}</span>
              </router-link>
            </div>
            <div class="con-txt">
              <router-link :to="{name:'detailPages',params:{id : item.newsId, detailType:'news'}}" target="_blank">
                <span>{{cutStr(item.summary,350)}}</span>
              </router-link>
              <span class="source">( {{item.srcName}} )</span>
            </div>
            <div class="con-bottom">
              <span class="price">目标价格：13.24</span>
            </div>
          </li>
        </ul>
        <p class="tc mt-10">
          <a href="javascript:;" class="loadMore" @click="loadMore">加载更多</a>
        </p>
      </div>
    </div>
    <div class="grid-right">

    </div>
  </div>
  <StockBox ref="stockbox"></StockBox>
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
import StockBox from 'components/stock-box'

export default {
  data() {
    return {
      page: 0,
      flag: 1,
      isShow: true
    }
  },
  created() {
    this.loadList();
  },
  computed: {
    ...mapState([
      'totalPage',
      'page',
      'listedCompany'
    ]),
    ...mapGetters({
      totalPage: 'totalPage',
      page: 'page',
      listedCompany: 'listedCompany'
    })
  },
  methods: {
    loadList() {
      this.$store.dispatch('getListedCompany', {
        page: this.page
      });
    },
    loadMore() {
      this.page++
        this.loadList()
    },
    cutStr(str, len) {
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
    status(txt) {
      if (txt === '利好') {
        return 'upBgColor'
      } else if (txt === '利空') {
        return 'downBgColor'
      } else {
        return ''
      }
    }
  },
  components: {
    StockBox
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
.listed-company {
    color: $wordsColorBase;
    min-width: 1200px;
    overflow: auto;
    font-size: 12px;
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
    margin-top: 7px;
    line-height: 18px;
}
.con-top {
    margin-bottom: 8px;
    span {
        margin-right: 12px;
    }
}
.news-list {
    .news-list-item {
        border: 1px solid #0d1112;
        background-color: #1a1b1f;
        padding: 6px 10px 6px 5px;
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
.price,
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
