<template>
<div class="wisdomHeadlines">
  <div class="grid-box clearfix display-box">
    <div class="grid-left box-flex-1">
      <div class="news-wrapper">
        <ul class="news-list">
          <li class="news-list-item">
            <div><span class="labels" :class='status("利好")'>利好</span><span class="fr time" v-z3-time="{ time: '2018-03-26 13:24', type: '1' }"></span><span class="name">[{{ "新闻" | convert}}]三夫户外：实控人和部分董事拟斥资逾2000万增持</span></div>
            <div class="con-txt">
              <span>{{cutStr("金融界讯，万达电影：控股股东北京万达投资以协议转让方式将其持有的公司（占公司股份总数5.11%）转让给文投控股出资设立的有限合伙或信托制基金；万达投资以协议转让方式将其持有的公司 90,000,000 股股份（占公司股份总数 7.66%）转让给杭州臻希投资. 臻希投资的关联方为阿里巴巴集团，阿里巴巴集团基于对万认同。转让给杭州臻希投资. 臻希投资的关联方为阿里巴巴集团，阿里巴巴集团基于对万认同。转让给杭州臻希投资. 臻希投资的关联方为阿里巴巴集团，阿里巴巴集团基于对万认同。转让给杭州臻希投资. 臻希投资的关联方为阿里巴巴集团，阿里巴巴集团基于对万认同转让给杭州臻希投资. 臻希投资的关联方为阿里巴巴集团，阿里巴巴集团基于对万认同",380)}}</span>
              <span class="source">(上证证券报)</span>
            </div>
            <div class="con-bottom">
              <ul class="stock">
                <li class="stock-item" :class="upAndDownColor(1)"><a href="javascript:;" v-z3-stock="{ref:'stockbox',code:innerCode}" :value='innerCode'><span>海思科</span><span>{{1}}</span><span>+1.00%</span></a></li>
              </ul>
            </div>
          </li>
        </ul>
        <p class="tc mt-10">
          <a href="javascript:;" class="loadMore" @click="loadMore">加载更多</a>
        </p>
      </div>
    </div>
    <div class="grid-right">
      right<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </div>
  </div>
  <StockBox ref="stockbox"></StockBox>
</div>
</template>

<script>
import 'whatwg-fetch'
// import { domain } from '../../z3tougu/config'
import {
  cutString
} from 'utils/date'
import {
  mapState
} from 'vuex'
import {
  mapGetters
} from 'vuex'
// import z3websocket from '../z3tougu/z3socket'
import StockBox from 'components/stock-box'
// import * as Data from '../../stores/intelligence-info.js'
export default {
  data() {
    return {
      pageSize: 0,
      flag: 1,
      isShow: true,
      innerCode: '600038.SH'
    }
  },
  created() {
    this.loadList();
  },
  computed: {
    ...mapState([
      'totalPage',
      'pageSize'
    ]),
    ...mapGetters({
      totalPage: 'totalPage',
      pageSize: 'pageSize'
    })
  },
  methods: {
    loadList() {
      this.$store.dispatch('getWisdomHeadlinesList', {
        flag: this.flag,
        pageSize: this.pageSize
      });
    },
    loadMore() {
      this.pageSize++
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
.wisdomHeadlines {
    color: $wordsColorBase;
    min-width: 1200px;
    overflow: auto;
    font-size: 12px;
}
.grid-box {
    .grid-right {
        width: 370px;
        background-color: #1a1b1f;
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
    margin: 8px 0 10px;
    line-height: 18px;
}
.news-list {
    .news-list-item {
        border: 1px solid #0d1112;
        background-color: #1a1b1f;
        padding: 10px 10px 10px 5px;
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
