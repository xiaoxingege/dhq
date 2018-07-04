<template>
<!-- 7*24小时快讯 -->
<div id="newsFlash" class="news-flash" @scroll="getScrollTop($event)">
  <div class="news-wrapper">
    <div class="topBar clearfix">
      <div class="left pr">
        <transition name='fade'>
        <span class="txt animated" :class='{slideInDown:showMsg}'>{{refreshMsg}}</span>
        </transition>
      </div>
      <div class="right">
        <span class="sec mr-10" href="javascript:;"><i class="icon-time icon"></i> {{count}}秒后</span>
        <a class="refresh" href="javascript:;" @click="getTopDataClick">刷新 <i class="icon-refresh icon"></i></a>
      </div>
    </div>
    <ul class="news-list">
      <li class="display-box" v-for="item in newsFlash">
        <div class="leftTime"><span v-z3-time="{ time:item.declareDate+ '' , type: '2' }"></span></div>
        <div class="news-list-item box-flex-1">
          <div>
            <span v-if="item.postiveIndex != null " class="labels" :class='status(item.postiveIndex)'>{{item.postiveIndex}}</span>
            <router-link class="news-a" :to="{name:'detailPages',params:{id : item.newsId, detailType:'news'}}" target="_blank">
              <span class="name">{{item.title}}</span>
              <p class="con-txt" v-if="item.summary!==null">{{cutStr(item.summary,370) | trim}}</p>
            </router-link>
          </div>
          <div class="con-bottom">
            <ul class="stock">
              <li v-if="item.equity !==null" class="stock-item" :class="upAndDownColor(relatedStocks[item.equity.code].chngPct)">
                <a :href="'/stock/'+item.equity.code" target="_blank" v-z3-stock="{ref:'stockbox',code:item.equity.code}" :value='item.equity.code'>
                  <span>{{item.equity.name}}</span>
                  <span>{{relatedStocks[item.equity.code].price  | isNull | price}}</span>
                  <span>{{relatedStocks[item.equity.code].chngPct  | chngPct }}</span>
                </a>
              </li>
              <li v-if="item.indu !==null" class="stock-item" :class="upAndDownColor(item.indu.chngPct)"><a :href="'/zstgweb/industry/'+item.indu.code" target="_blank"><span>{{item.indu.name}}</span><span>{{item.indu.chngPct | chngPct}}</span></a></li>
              <li v-if="item.topic !==null" class="stock-item" :class="upAndDownColor(topicList[item.topic.code].chngPct)">
                <a :href="'/zstgweb/topic/'+item.topic.code" target="_blank"><span>{{item.topic.name}}</span><span>{{ topicList[item.topic.code].chngPct | chngPct}}</span></a>
              </li>
            </ul>
            <p class="source">{{item.srcName}}</p>
          </div>
        </div>
      </li>
      <div v-if="loadingShow" class="pullUptoRefresh">
        <div class="loadIcon"><span class="load_circle loadAnimateInfinite"></span></div>
        <p class="tc">正在加载...</p>
      </div>
      <p v-if="noData" class="tc loadMore">我是有下限的~</p>
    </ul>
    <p v-if="newsFlash.length===0 && loadingShow != true" class="tc mt-10 noDataList"><img src="../../assets/images/empty_data.png" alt="" /></p>
    <scrollTopBar :show="isBackTop" @backTop="backTop" :id="'newsFlash'"></scrollTopBar>
    </div>
    <StockBox ref="stockbox"></StockBox>
  </div>
</template>

<script>
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
      totalPage: 500,
      updateNewsPid: '',
      intervalTime: 60000,
      scrollTop: 0,
      innerHeight: window.innerHeight,
      isBackTop:false,
      time:null,
      count:60,
      refreshMsg:'',
      showMsg:false
    }
  },
  mounted() {
    this.loadList()
    this.updateTopic()
    this.timeCount()
  },
  computed: {
    ...mapState([
      'newsFlash',
      'newTime',
      'lastTime',
      'pageSize',
      'isTops',
      'loadingShow',
      'noData',
      'topicList',
      'newsId',
      'newsFlashLength'
    ]),
    ...mapGetters({
      pageSize: 'pageSize',
      newsFlash: 'newsFlash',
      newTime: 'newTime',
      lastTime: 'lastTime',
      newsId: 'newsId',
      isTops: 'isTops',
      loadingShow: 'loadingShow',
      noData: 'noData',
      topicList: 'topicList',
      newsFlashLength:'newsFlashLength'
    }),
    ...mapState({
      relatedStocks: state => state.intelligenceInfo.relatedStocks,
      socketState: state => state.z3sockjs.readystate,
      topicCode: state => state.intelligenceInfo.topicCode,
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
    timeCount(){ // 一分钟后请求最新数据
     this.updateNewsPid = setInterval(() => {
        this.count --
        if(this.count <=0){
          this.getTopData()
          this.count =60
        }
      },1000)
    },
    getTopDataClick(){ // 点击刷新最新数据
      if(this.showMsg===false){
        this.$store.dispatch('getNewsFlashList', { page: 0,isTop: true,newTime: this.newTime, nextTime: this.lastTime, ids: this.newsId }).then(() => {
          this.showMsg = true
          if(this.newsFlashLength<=0){
            this.refreshMsg = '还没有新内容哦~'
          }else{
            this.refreshMsg = '新更新'+this.newsFlashLength+'条资讯，快去看看吧~'
          }
        })
        setTimeout(() => {
          this.showMsg = false
          this.refreshMsg=''
        },2000)
      }
    },
    getTopData(){ // 获取最新数据
      this.$store.commit('setIsTop', true)
      this.$store.dispatch('getNewsFlashList', {
        page: 0,
        isTop: true,
        newTime: this.newTime,
        nextTime: this.lastTime,
        ids: this.newsId
      })
    },
    loadList() {
      this.$store.dispatch('getNewsFlashList', {
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
    // updateNews() {
    //   this.updateNewsPid = setInterval(() => {
    //     console.log('启动定时器' + this.updateNewsPid)
    //     this.$store.commit('setIsTop', true)
    //     this.$store.dispatch('getNewsFlashList', {
    //       page: 0,
    //       isTop: true,
    //       newTime: this.newTime,
    //       nextTime: this.lastTime,
    //       ids: this.newsId
    //     })
    //   }, this.intervalTime)
    // },
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
    getScrollTop(e) {
      let offsetHeight = e.target.offsetHeight
      let scrollHeight = e.target.scrollHeight
      let scrollTop = e.target.scrollTop
      let scrollBottom = offsetHeight + scrollTop
      this.scrollTop = e.target.scrollTop * 2
      if (this.updateNewsPid) {
        console.log('清除定时器' + this.updateNewsPid)
        clearInterval(this.updateNewsPid)
      }
      if (this.scrollTop === 0) {
        this.$store.commit('setIsTop', true)
        this.timeCount()
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
    loadMore() {
      this.page++
        this.$store.dispatch('getNewsFlashList', {
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
    z3websocket.ws && z3websocket.ws.close()
    if (intervalId2) {
      clearInterval(intervalId2)
    }
    if (this.updateNewsPid) {
      clearInterval(this.updateNewsPid)
    }
  }
}
</script>
<style lang='scss' scoped>
@import "../../assets/scss/style.scss";
@import "../../assets/css/reset.css";
@import "../../assets/css/base.css";
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
.news-flash {
  color: $wordsColorBase;
  height: 100%;
  overflow: auto;
  font-size: 12px;
}
.leftTime {
  position: relative;
  width: 83px;
  background-color: #2e4465;
  text-align: center;
  border: 1px solid #0d1112;
  border-right: none;
  span {
    width: 88%;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
  }
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
  margin: 4px 0 6px;
  font-size: 14px;
  color: #808ba1;
  line-height: 20px;
}
.news-a {
  &:visited {
    .name {
      color: #808ba1;
    }
  }
}
.news-list {
  position: relative;
  .news-list-item {
    transition: all 0.3s;
    &:hover {
      background-color: #2e4465;
    }
    border: 1px solid #0d1112;
    border-left: none;
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
  margin-bottom: 6px;
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
  transform: translate(-50%, -50%);
}
.topBar {
  height: 24px;
  line-height: 24px;
  background: #303539;
  border: 1px solid #0d1112;
  border-bottom: none;
  .left {
    width: calc(100% - 120px);
    float: left;
    text-align: center;
  }
  .right {
    width: 120px;
    float: right;
  }
  .txt {
    display: block;
    padding-left: 60px;
  }
  a {
    color: $wordsColorBase;
  }
  .sec {
    width: 56px;
    display: inline-block;
  }
  .refresh:hover {
    .icon-refresh {
      cursor: pointer;
      transition: -webkit-transform 0.5s ease-in;
      transform: rotate(360deg);
    }
  }
}
.icon {
  display: inline-block;
  vertical-align: -2px;
}
.icon-refresh,
.icon-time {
  width: 14px;
  height: 14px;
}
.icon-refresh {
  background: url(../../assets/images/news-img/refresh.png) center no-repeat;
}
.icon-time {
  background: url(../../assets/images/news-img/time.png) center no-repeat;
}
.animated {
  animation-duration: 0.5s;
  animation-fill-mode: both;
}
@keyframes slideInDown {
  0% {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translateZ(0);
  }
}

.slideInDown {
  animation-name: slideInDown;
}
</style>
<style>
</style>
