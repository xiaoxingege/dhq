<template>
<!-- 智头条 -->
<div id="wisdomHeadlines" class="wisdomHeadlines" @scroll="getScrollTop($event)">
  <div class="news-wrapper">
    <ul class="news-list">
      <li class="news-list-item" v-for="item in wisdomHeadlinesList">
        <div>
          <span v-if="item.postiveIndex != null " class="labels" :class='status(item.postiveIndex)'>{{item.postiveIndex | isNull}}</span>
          <span class="fr time" v-z3-time="{ time:item.declareDate+'', type: '1' }"></span>
          <router-link class="news-a" :to="{name:'detailPages',params:{id : item.newsId, detailType:'news'}}" target="_blank">
            <span class="name">{{item.title}}</span>
            <p class="con-txt" v-if="item.summary!==null">{{cutStr(item.summary,370) | trim}} <span class="source"> ( {{item.srcName}} )</span></p>
          </router-link>
        </div>
        <div class="con-bottom">
          <ul class="stock">
            <li v-if="item.equity !==null" class="stock-item" :class="upAndDownColor(relatedStocks[item.equity.code].chngPct)">
              <a :href="'/stock/'+item.equity.code" target="_blank" v-z3-stock="{ref:'stockbox',code:item.equity.code}" :value='item.equity.code'>
                  <span>{{item.equity.name}}</span>
                  <span>{{relatedStocks[item.equity.code].price  | isNull | price }}</span>
                  <span>{{relatedStocks[item.equity.code].chngPct  | chngPct }}</span>
                </a>
            </li>
            <li v-if="item.indu !==null" class="stock-item" :class="upAndDownColor(item.indu.chngPct)">
              <a :href="'/zstgweb/industry/'+item.indu.code" target="_blank"><span>{{item.indu.name}}</span><span>{{item.indu.chngPct | chngPct}}</span></a>
            </li>
            <li v-if="item.topic !==null" class="stock-item" :class="upAndDownColor(topicList[item.topic.code].chngPct)">
              <a :href="'/zstgweb/topic/'+item.topic.code" target="_blank"><span>{{item.topic.name}}</span><span>{{ topicList[item.topic.code].chngPct | chngPct}}</span></a>
            </li>
          </ul>
        </div>
      </li>
      <div v-if="loadingShow" class="pullUptoRefresh">
        <div class="loadIcon"><span class="load_circle loadAnimateInfinite"></span></div>
        <p class="tc">正在加载...</p>
      </div>
      <p v-if="noData" class="tc loadMore">我是有下限的~</p>
    </ul>
    <p v-if="wisdomHeadlinesList.length===0 && loadingShow != true" class="tc mt-10 noDataList"><img src="../../assets/images/empty_data.png" alt="" /></p>
    <scrollTopBar :show="isBackTop" @backTop="backTop" :id="'wisdomHeadlines'"></scrollTopBar>
  </div>
  <StockBox ref="stockbox"></StockBox>
</div>
</template>

<script>
let intervalId = ''
let intervalId2 = ''
import 'whatwg-fetch'
import { cutString } from 'utils/date'
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import StockBox from 'components/stock-box'
import z3websocket from '../../z3tougu/z3socket'
import scrollTopBar from '../../components/intelligence-info/scrollTop.vue'
export default {
  data() {
    return {
      page: 0,
      totalPage: 200,
      intervalTime: 60000,
      scrollTop: 0,
      innerHeight: window.innerHeight,
      isBackTop:false
    }
  },
  mounted() {
    this.loadList()
    this.updateNews()
    this.updateTopic()
  },
  computed: {
    ...mapState([
      'loadingShow',
      'pageSize',
      'wisdomHeadlinesList',
      'newTime',
      'lastTime',
      'newsId',
      'isTops',
      'noData',
      'topicList'
    ]),
    ...mapGetters({
      loadingShow: 'loadingShow',
      pageSize: 'pageSize',
      wisdomHeadlinesList: 'wisdomHeadlinesList',
      newTime: 'newTime',
      lastTime: 'lastTime',
      isTops: 'isTops',
      noData: 'noData',
      topicList: 'topicList',
      newsId: 'newsId'
    }),
    ...mapState({
      relatedStocks: state => state.intelligenceInfo.relatedStocks,
      topicCode: state => state.intelligenceInfo.topicCode,
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
      this.$store.dispatch('getWisdomHeadlinesList', {
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
        this.$store.dispatch('getWisdomHeadlinesList', {
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
        // console.log('启动定时器')
        // console.log(intervalId)
        this.$store.commit('setIsTop', true)
        this.$store.dispatch('getWisdomHeadlinesList', {
          page: 0,
          isTop: this.isTops,
          newTime: this.newTime,
          nextTime: this.lastTime,
          ids: this.newsId
        })
      }, this.intervalTime)
    },
    getScrollTop(e) {
      let offsetHeight = e.target.offsetHeight
      let scrollHeight = e.target.scrollHeight
      let scrollTop = e.target.scrollTop
      let scrollBottom = offsetHeight + scrollTop
      this.scrollTop = e.target.scrollTop * 2
      if (this.scrollTop >= this.innerHeight) {
        if (intervalId) {
          // console.log(intervalId)
          // console.log('清除定时器')
          clearInterval(intervalId)
        }
      }

      if (this.scrollTop === 0) {
        this.$store.commit('setIsTop', true)
        this.updateNews()
      } else {
        this.$store.commit('setIsTop', false)
      }
      if (scrollBottom === scrollHeight && this.noData !== true) {
        this.loadMore()
      }
      if(this.scrollTop>200){
        this.isBackTop = true
      }else{
        this.isBackTop = false
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
    updateTopic() {
      intervalId2 = setInterval(() => {
        this.getTopicData()
      }, 60000)
    },
    getTopicData() {
      this.$store.dispatch('getTopicIndu', {
        code: this.topicCode,
        flag: 'topic'
      })
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
    StockBox,
    scrollTopBar
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
    trim(str) {
      return str.replace(/(^\s*)|(\s*$)/g, '');
    }
  },
  destroyed() {
    if (intervalId) {
      clearInterval(intervalId)
    }
    if (intervalId2) {
      clearInterval(intervalId2)
    }
    z3websocket.ws && z3websocket.ws.close()
  }
}
</script>
<style lang='scss' scoped>
@import '../../assets/scss/style.scss';
@import '../../assets/css/reset.css';
@import '../../assets/css/base.css';
.wisdomHeadlines {
    color: $wordsColorBase;
    font-size: 12px;
    height: 100%;
    overflow: auto;
    transition: all 0.5s;
}
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
    margin: 4px 0 10px;
    font-size: 14px;
    color: #808ba1;
    line-height: 20px;
}
.news-a{
  &:visited{
    .name{
      color: #808ba1;
    }
  }
  
}
.news-list {
    position: relative;
    .news-list-item {
        transition: all .3s;
        &:hover{
          background-color: #2e4465;
        }
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
</style>
