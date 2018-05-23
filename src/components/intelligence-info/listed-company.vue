<template>
<!-- 上市公司 -->
<div class="listed-company" @scroll="getScrollTop($event)">
  <div class="news-wrapper">
    <ul class="news-list">
      <li class="news-list-item" v-for="item in listedCompany">
        <div v-if="item.equity !=null" class="con-top">
          <span class="time fr" v-z3-time="{ time: item.declareDate+'', type: '1' }"></span>
          <p v-z3-updowncolor="relatedStocks[item.equity.code].chngPct">
            <a :href="'/stock/'+item.equity.code" target="_blank" v-z3-stock="{ref:'stockbox',code:item.equity.code}" :value='item.equity.code'>
              <span class="fontS14" v-z3-updowncolor="relatedStocks[item.equity.code].chngPct">{{item.equity.name}}[{{item.equity.code | code}}]</span>
            </a>
            <span class="fontS14">{{relatedStocks[item.equity.code].price  | price }}</span>
            <span class="fontS14">{{relatedStocks[item.equity.code].chngPct  | chngPct }}</span>
          </p>
        </div>
        <div>
          <span v-if="item.postiveIndex != null" class="labels" :class='status(item.postiveIndex)'>{{item.postiveIndex}}</span>
          <router-link :to="{name:'detailPages',params:{id : item.newsId, detailType:'news'}}" target="_blank">
            <span class="name">[{{ item.newsType  | convert}}] {{item.title}}</span>
          </router-link>
        </div>
        <div class="con-txt">
          <router-link :to="{name:'detailPages',params:{id : item.newsId, detailType:'news'}}" target="_blank">
            <span v-if="item.summary!==null">{{cutStr(item.summary,370) | trim}}</span>
          </router-link>
          <span class="source">( {{item.srcName}} )</span>
        </div>
      </li>
      <div v-if="loadingShow" class="pullUptoRefresh">
        <div class="loadIcon"><span class="load_circle loadAnimateInfinite"></span></div>
        <p class="tc">正在加载...</p>
      </div>
      <p v-if="noData" class="tc loadMore">数据已加载完</p>
    </ul>
    <p v-if="listedCompany.length===0 && loadingShow != true" class="tc mt-10 noDataList"><img src="../../assets/images/empty_data.png" alt="" /></p>
  </div>
  <StockBox ref="stockbox"></StockBox>
</div>
</template>

<script>
let intervalId = ''
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
import z3websocket from '../../z3tougu/z3socket'

export default {
  data() {
    return {
      page: 0,
      totalPage: 300,
      intervalTime: 60000,
      scrollTop: 0,
      innerHeight: window.innerHeight
    }
  },
  mounted() {
    this.loadList()
    this.updateNews()
  },
  computed: {
    ...mapState([
      'loadingShow',
      'pageSize',
      'listedCompany',
      'newTime',
      'lastTime',
      'newsId',
      'isTops',
      'noData'
    ]),
    ...mapGetters({
      loadingShow: 'loadingShow',
      pageSize: 'pageSize',
      listedCompany: 'listedCompany',
      newTime: 'newTime',
      lastTime: 'lastTime',
      newsId: 'newsId',
      isTops: 'isTops',
      noData: 'noData'
    }),
    ...mapState({
      relatedStocks: state => state.intelligenceInfo.relatedStocks,
      socketState: state => state.z3sockjs.readystate,
      stockMessage: state => {
        const msg = state.z3sockjs.message
        if (msg && msg.data && msg.data.subject === 'snapshot') {
          const record = msg.data
          return {
            innerCode: record.stockCode,
            price: record.lastpx,
            curChngPct: record.pxchgratio
          }
        } else {
          return null
        }
      }
    })
  },
  methods: {
    loadList() {
      this.$store.dispatch('getListedCompany', {
        page: this.page,
        isTop: false,
        newTime: '',
        nextTime: '',
        ids: ''
      }).then(() => {
        let _height = $('.news-list').get(0).offsetHeight
        if (_height < this.innerHeight) {
          this.$store.commit('setIsTop', false)
          this.loadMore()
        }
      })
    },
    loadMore() {
      this.page++
        this.$store.dispatch('getListedCompany', {
          page: this.page,
          isTop: false,
          newTime: this.newTime,
          nextTime: this.lastTime,
          ids: this.newsId
        })
      var count = Math.ceil(this.totalPage / this.pageSize)
      if (count === this.page + 1) {
        setTimeout(() => {
          this.$store.commit('setNoData', true)
        }, 500)
      }
    },
    updateNews() {
      intervalId = setInterval(() => {
        console.log('启动定时器')
        console.log(intervalId)
        this.$store.dispatch('getListedCompany', {
          page: 0,
          isTop: this.isTops,
          newTime: this.newTime,
          nextTime: this.lastTime,
          ids: this.newsId
        })
      }, this.intervalTime)
    },
      getScrollTop(e) {
          this.scrollTop = e.target.scrollTop
          let offsetHeight = e.target.offsetHeight
          let scrollHeight = e.target.scrollHeight
          let scrollTop = e.target.scrollTop
          let scrollBottom = offsetHeight + scrollTop
          if (this.scrollTop*2 >= this.innerHeight) {
              if (intervalId) {
                  console.log(intervalId)
                  console.log('清除定时器')
                  clearInterval(intervalId)
              }
          }
          if (this.scrollTop === 0) {
              this.$store.commit('setIsTop',true)
              this.updateNews()
          }else{
              this.$store.commit('setIsTop',false)
          }

          if(scrollBottom === scrollHeight && this.noData !== true){
              this.loadMore()
          }
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
      if (txt === '利好' || txt === '增持' || txt === '买入') {
        return 'upBgColor'
      } else if (txt === '利空' || txt === '卖出') {
        return 'downBgColor'
      } else {
        return ''
      }
    },
    updateStock(stock) {
      this.$store.commit('UPDATE_RELSTOCK', stock)
    },
    subscribeStock() {
      const msg = {
        subject: 'snapshot',
        type: '1',
        actionType: '1',
        stockCodeList: Object.keys(this.relatedStocks),
        token: ''
      }
      this.$store.dispatch('z3sockjs/send', msg)
    }
  },
  components: {
    StockBox
  },
  watch: {
    relatedStocks() {
      if (z3websocket.ws) {
        //  z3websocket.ws && z3websocket.ws.close()
      } else {
        this.$store.dispatch('z3sockjs/init')
      }
    },
    stockMessage() {
      if (this.stockMessage) {
        this.updateStock(this.stockMessage)
      }
    },
    socketState() {
      if (this.socketState === 1) {
        // 建立连接
        this.subscribeStock()
      } else if (this.socketState === 3) {
        // 断开连接，重新建立连接
        this.$store.dispatch('z3sockjs/init')
      }
    }
  },
  filters: {
    filterNum(value, type) {
      return value === null || value === '' ? '--' : value.toFixed(2) + type
    },
    convert(value) {
      return value === '新闻' ? '资讯' : value;
    },
    code(value) {
      return value.substring(0, 6)
    },
    trim(str) {
      return str.replace(/(^\s*)|(\s*$)/g, '');
    }
  },
  destroyed() {
    if (intervalId) {
      clearInterval(intervalId)
    }
    z3websocket.ws && z3websocket.ws.close()
  }
}
</script>
<style lang='scss' scoped>
@import '../../assets/scss/style.scss';
@import '../../assets/css/reset.css';
@import '../../assets/css/base.css';
.news-wrapper {
    margin-bottom: 50px;
}
.loadMore,
.pullUptoRefresh {
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    height: 50px;
    line-height: 50px;
}
.listed-company {
    color: $wordsColorBase;
    height: 100%;
    overflow: auto;
    font-size: 12px;
}
.con-txt,
.labels,
.name,
.stock {
    font-size: 12px;
}
.name {
    font-size: 14px;
    color: #caced7;
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
    margin-top: 4px;
    line-height: 18px;
}
.con-top {
    margin-bottom: 8px;
    span {
        margin-right: 12px;
    }
}
.news-list {
    position: relative;
    .news-list-item {
        border: 1px solid #0d1112;
        background-color: #1a1b1f;
        padding: 6px 10px 10px 5px;
        .con-txt {
            span {
                font-size: 14px;
                color: #808ba1;
                line-height: 20px;
            }
        }
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
        line-height: 1.4;
        padding: 0 8px;
        border-radius: 10px;
        margin-right: 20px;
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
.noDataList {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.fontS14 {
    font-size: 14px;
}
</style>
