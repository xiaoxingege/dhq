<template>
<!-- 智头条 -->
<div class="wisdomHeadlines" @scroll="getScrollTop($event)">
  <div class="news-wrapper">
    <ul class="news-list" ref="newsList">
      <li class="news-list-item" v-for="item in wisdomHeadlinesList">
        <div>
          <span v-if="item.postiveIndex != '' " class="labels" :class='status(item.postiveIndex)'>{{item.postiveIndex | isNull}}</span>
          <span class="fr time" v-z3-time="{ time:item.declareDate+'', type: '1' }"></span>
          <router-link :to="{name:'detailPages',params:{id : item.newsId, detailType:'news'}}" target="_blank">
            <span class="name">[{{ item.newsType | convert}}]{{item.title}}</span>
          </router-link>
        </div>
        <div class="con-txt">
          <router-link :to="{name:'detailPages',params:{id : item.newsId, detailType:'news'}}" target="_blank">
            <span>{{cutStr(item.summary,350)}}</span>
          </router-link>
          <span class="source">( {{item.srcName}} )</span>
        </div>
        <div class="con-bottom">
          <ul class="stock">
              <li v-if="item.equity !==null"  class="stock-item" :class="upAndDownColor(relatedStocks[item.equity.code].chngPct)">
                <a :href="'/stock/'+item.equity.code" target="_blank" v-z3-stock="{ref:'stockbox',code:item.equity.code}" :value='item.equity.code'>
                  <span>{{item.equity.name}}</span>
                  <span>{{relatedStocks[item.equity.code].price  | isNull }}</span>
                  <span>{{relatedStocks[item.equity.code].chngPct  | isNull }}%</span>
                </a>
              </li>
              <li v-if="item.indu !==null" class="stock-item" :class="upAndDownColor(item.indu.chngPct)"><a :href="'/zstgweb/industry/'+item.indu.code" target="_blank"><span>{{item.indu.name}}</span><span>{{item.indu.chngPct}}%</span></a></li>
              <li v-if="item.topic !==null" class="stock-item" :class="upAndDownColor(item.topic.chngPct)"><a :href="'/zstgweb/topic/'+item.topic.code" target="_blank"><span>{{item.topic.name}}</span><span>{{item.topic.chngPct}}%</span></a></li>
            </ul>
        </div>
      </li>
    </ul>
    <div v-if="loadingShow"   class="pullUptoRefresh"><div class="loadIcon"><span class="load_circle loadAnimateInfinite"></span></div><p class="tc">正在加载...</p></div>
    <p class="tc mt-10 mb-20">
      <a v-if="!noData && wisdomHeadlinesList.length >= 8 &&  loadingShow != true" href="javascript:;" class="loadMore" @click="loadMore">加载更多</a>
      <p v-if="noData"  class="tc mt-10 loadMore mb-20">数据已加载完</p>
      <p v-if="wisdomHeadlinesList.length===0 && loadingShow != true"  class="tc mt-10 loadMore"><img src="../../assets/images/empty_data.png" alt="" /></p>
    </p>
  </div>
  <StockBox ref="stockbox"></StockBox>
</div>
</template>

<script>
  let intervalId = ''
  import 'whatwg-fetch'
  import { cutString } from 'utils/date'
  import { mapState } from 'vuex'
  import { mapGetters } from 'vuex'
  import StockBox from 'components/stock-box'
  import z3websocket from '../../z3tougu/z3socket'

  export default {
    data() {
      return {
        page: 0,
        totalPage: 200,
        noData: false,
        updateNewsPid: '',
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
        'wisdomHeadlinesList',
        'newTime',
        'isTops',
        'noData'
      ]),
      ...mapGetters({
        loadingShow: 'loadingShow',
        pageSize: 'pageSize',
        wisdomHeadlinesList: 'wisdomHeadlinesList',
        newTime: 'newTime',
        isTops:'isTops',
        noData:'noData'
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
          this.$store.dispatch('getWisdomHeadlinesList', { page: this.page, isTop: false, newTime: '' })
      },
      loadMore() {
        this.page++
        this.$store.dispatch('getWisdomHeadlinesList', { page: this.page, isTop: false, newTime: this.newTime })
        var count = Math.ceil(this.totalPage / this.pageSize)
        if (count === this.page + 1) {
          this.$store.commit('setNoData',true)
        }
      },
      updateNews() {
        intervalId = setInterval(() => {
          console.log('启动定时器')
          console.log(intervalId)
          this.$store.dispatch('getWisdomHeadlinesList', { page: this.page, isTop:  true, newTime: this.newTime })
        },this.intervalTime)
      },
      getScrollTop(e) {
        this.scrollTop = e.target.scrollTop
        if (this.scrollTop >= this.innerHeight) {
          this.$store.commit('setIsTop',false)
          if (intervalId) {
            console.log(intervalId)
            console.log('清除定时器')
            clearInterval(intervalId)
          }
        }
        if (this.scrollTop === 0) {
          this.$store.commit('setIsTop',true)
          this.updateNews()
        }
      },
      cutStr(str, len) {
        if (str === '' || str === null) str = '--'
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
      isNull(value) {
        return value === null || value === '' ? '--' : value
      },
      filterNum(value, type) {
        return value === null || value === '' ? '--' : value.toFixed(2) + type
      },
      convert(value) {
        return value === '新闻' ? '资讯' : value;
      }
    },
    destroyed() {
      if(intervalId) {
        clearInterval(this.updateNewsPid)
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
  }

  .news-wrapper {
      padding-bottom: 20px;
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
</style>
