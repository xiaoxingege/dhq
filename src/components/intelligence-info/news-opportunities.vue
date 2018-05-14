<template>
  <!-- 机会挖掘 -->
  <div class="news-opportunities" @scroll="getScrollTop($event)">
    <div class="news-wrapper">
      <div class="news-nav-top">
        <a href="javascript:;" :class="{active: index === typeIndex}" class="nav-item" v-for="(item,index) in navData" @click="selectType(index)">{{item.name}}</a>
      </div>
      <ul class="news-list">
        <li v-if="typeIndex ===0" class="display-box" v-for="item in newsOpportunities">
          <div class="leftTime" >
            <a v-if="item.equity !=null" :href="'/stock/'+item.equity.code" target="_blank" v-z3-stock="{ref:'stockbox',code:item.equity.code}" :value='item.equity.code'>
              <div class="txt"  >
                <span :class="{fontS22:item.equity.name.length<=5,fontS18:item.equity.name.length ===6}" class="name fontS16">{{item.equity.name | isNull}}</span>
                <p v-z3-updowncolor="relatedStocks[item.equity.code].chngPct">{{relatedStocks[item.equity.code].chngPct  | chngPct }}</p>
              </div>
            </a>
            <a v-if="item.indu != null" :href="'/zstgweb/industry/'+item.indu.code" target="_blank">
              <div class="txt">
                <span :class="{fontS22:item.indu.name.length<=5,fontS18:item.indu.name.length ===6}" class="name fontS16">{{item.indu.name | isNull}}</span>
                <p v-z3-updowncolor="item.indu.chngPct">{{item.indu.chngPct | chngPct }}</p>
              </div>
            </a>
            <a v-if="item.topic != null" :href="'/zstgweb/topic/'+item.topic.code" target="_blank">
              <div class="txt">
                <span :class="{fontS22:item.topic.name.length<=5,fontS18:item.topic.name.length ===6}" class="name fontS16">{{item.topic.name | isNull}}</span>
                <p v-z3-updowncolor="topicList[item.topic.code].chngPct">{{topicList[item.topic.code].chngPct | chngPct }}</p>
              </div>
            </a>
          </div>
          <div class="news-list-item box-flex-1">
            <div>
              <span class="fr time" v-z3-time="{ time:item.declareDate+'', type: '1' }"></span>
              <router-link :to="{name:'detailPages',params:{id : item.newsId, detailType:'news'}}" target="_blank">
                <span class="name">{{item.title}}</span>
              </router-link>
              </div·>
              <div class="con-txt">
                <router-link :to="{name:'detailPages',params:{id : item.newsId, detailType:'news'}}" target="_blank">
                  <span v-if="item.summary!==null">{{cutStr(item.summary,370) | trim}}</span>
                </router-link>
              </div>
              <p class="source">( {{item.srcName}} )</p>
            </div>
        </li>
        <li v-if="typeIndex === 1" class="display-box" v-for="item in newsOpportunities">
          <div class="leftTime" >
            <a v-if="item.equity !=null" :href="'/stock/'+item.equity.code" target="_blank" v-z3-stock="{ref:'stockbox',code:item.equity.code}" :value='item.equity.code'>
              <div v-if='item.equity != null' class="txt" >
                <span :class="{fontS22:item.equity.name.length<=5,fontS18:item.equity.name.length ===6}" class="name fontS16">{{item.equity.name | isNull}}</span>
                <p v-z3-updowncolor="relatedStocks[item.equity.code].chngPct">{{relatedStocks[item.equity.code].chngPct  | chngPct }}</p>
              </div>
            </a>
          </div>
          <div  class="news-list-item box-flex-1">
            <div>
              <span class="fr time" v-z3-time="{ time:item.declareDate+'', type: '1' }"></span>
              <router-link :to="{name:'detailPages',params:{id : item.newsId, detailType:'news'}}" target="_blank">
                <span class="name">{{item.title}}</span>
              </router-link>
              </div·>
              <div class="con-txt">
                <router-link :to="{name:'detailPages',params:{id : item.newsId, detailType:'news'}}" target="_blank">
                  <span>{{cutStr(item.summary,370) | trim}}</span>
                </router-link>
              </div>
              <p class="source">( {{item.srcName}} )</p>
            </div>
        </li>
        <li v-if="typeIndex ===2" class="display-box" v-for="item in newsOpportunities">
          <div class="leftTime" >
            <a v-if="item.topic != null" :href="'/zstgweb/topic/'+item.topic.code" target="_blank">
              <div class="txt">
                <span :class="{fontS22:item.topic.name.length<=5,fontS18:item.topic.name.length ===6}" class="name fontS16">{{item.topic.name | isNull}}</span>
                <p v-z3-updowncolor="topicList[item.topic.code].chngPct">{{topicList[item.topic.code].chngPct | chngPct }}</p>
              </div>
            </a>
            <a v-if="item.indu != null" :href="'/zstgweb/industry/'+item.indu.code" target="_blank">
              <div class="txt">
                <span :class="{fontS22:item.indu.name.length<=5,fontS18:item.indu.name.length ===6}" class="name fontS16">{{item.indu.name | isNull}}</span>
                <p v-z3-updowncolor="item.indu.chngPct">{{item.indu.chngPct | chngPct }}</p>
              </div>
            </a>
          </div>
          <div class="news-list-item box-flex-1">
            <div>
              <span class="fr time" v-z3-time="{ time:item.declareDate+'', type: '1' }"></span>
              <router-link :to="{name:'detailPages',params:{id : item.newsId, detailType:'news'}}" target="_blank">
                <span class="name">{{item.title}}</span>
              </router-link>
              </div·>
              <div class="con-txt">
                <router-link :to="{name:'detailPages',params:{id : item.newsId, detailType:'news'}}" target="_blank">
                  <span>{{cutStr(item.summary,370) | trim}}</span>
                </router-link>
              </div>
              <p class="source">( {{item.srcName}} )</p>
            </div>
        </li>
        <li v-if="typeIndex === 3" class="display-box" v-for="item in newsOpportunities">
          <div class="leftTime" >
            <div class="txt">
              <span :class="{fontS22:item.equity.productName.length<=5,fontS18:item.equity.productName ===6}" class="name fontS16">{{item.equity.productName | isNull}}</span>
            </div>
          </div>
          <div class="news-list-item box-flex-1">
            <div>
              <span class="fr time" v-z3-time="{ time:item.declareDate+'', type: '1' }"></span>
              <router-link :to="{name:'detailPages',params:{id : item.newsId, detailType:'news'}}" target="_blank">
                <span class="name">{{item.title}}</span>
              </router-link>
              </div>
              <div class="con-txt">
                <router-link :to="{name:'detailPages',params:{id : item.newsId, detailType:'news'}}" target="_blank">
                  <span>{{cutStr(item.summary,370) | trim}}</span>
                </router-link>
              </div>
              <p class="source">( {{item.srcName}} )</p>
              <ul class="stock">
                <li v-if="item.equity !==null"  class="stock-item" :class="upAndDownColor(relatedStocks[item.equity.code].chngPct)">
                  <a :href="'/stock/'+item.equity.code" target="_blank" v-z3-stock="{ref:'stockbox',code:item.equity.code}" :value='item.equity.code'>
                    <span>{{item.equity.name}}</span>
                    <span>{{relatedStocks[item.equity.code].price  | isNull | price}}</span>
                    <span>{{relatedStocks[item.equity.code].chngPct  | chngPct }}</span>
                  </a>
                </li>
                <li v-if="item.indu !==null" class="stock-item" :class="upAndDownColor(item.indu.chngPct)"><a :href="'/zstgweb/industry/'+item.indu.code" target="_blank"><span>{{item.indu.name}}</span><span>{{item.indu.chngPct | chngPct}}</span></a></li>
                <li v-if="item.topic !==null" class="stock-item" :class="upAndDownColor(item.topic.chngPct)"><a :href="'/zstgweb/topic/'+item.topic.code" target="_blank"><span>{{item.topic.name}}</span><span>{{item.topic.chngPct | chngPct}}</span></a></li>
              </ul>
            </div>
        </li>
        <div v-if="loadingShow"  class="pullUptoRefresh"><div class="loadIcon"><span class="load_circle loadAnimateInfinite"></span></div><p class="tc">正在加载...</p></div>
        <p v-if="noData"  class="tc loadMore">数据已加载完</p>
      </ul>
      <p v-if="newsOpportunities.length===0 && loadingShow != true"  class="tc mt-10 noDataList"><img src="../../assets/images/empty_data.png" alt="" /></p>
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

  export default {
    data() {
      return {
        page: 0,
        totalPage: 200,
        intervalTime: 60000,
        scrollTop: 0,
        innerHeight: window.innerHeight,
        typeIndex: 0,
        navData: [{ name: '全部机会',value: '0' },
                  { name: '个股机会',value: '0' },
                  { name: '板块机会', value: '0' },
                  { name: '产品机会', value: '0' }],
        isA: true,
        isB: false
      }
    },
    mounted() {
      this.loadListInit()
      this.updateNews()
      this.updateTopic()
    },
    computed: {
      ...mapState([
        'loadingShow',
        'pageSize',
        'newsOpportunities',
        'newTime',
        'isTops',
        'noData',
        'topicList'
      ]),
      ...mapGetters({
        loadingShow: 'loadingShow',
        pageSize: 'pageSize',
        newsOpportunities: 'newsOpportunities',
        newTime: 'newTime',
        isTops:'isTops',
        noData:'noData',
        topicList:'topicList'
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
      loadListInit() {
          this.$store.dispatch('getAllChance', { page: this.page, isTop: false, newTime: '' }).then(() => {
            let _height = $('.news-list').get(0).offsetHeight
                if(_height<this.innerHeight){
                  this.loadMore()
                }
          })
      },
      loadMore() {
        this.page++
        this.typeList(this.typeIndex)
        var count = Math.ceil(this.totalPage / this.pageSize)
        if (count === this.page + 1) {
          setTimeout(() => {
            this.$store.commit('setNoData',true)
          },300)
        }
      },
      updateNews() {
        intervalId = setInterval(() => {
          this.page = 0
          this.$store.commit('setIsTop',true)
          console.log('启动定时器')
          console.log(intervalId)
          this.typeList(this.typeIndex)
        },this.intervalTime)
      },
      updateTopic() {
        intervalId2 = setInterval(() => {
          this.getTopicData()
        },60000)
      },
      getTopicData(){
        this.$store.dispatch('getTopicIndu', { code:this.topicCode, flag: 'topic' })
      },
      getScrollTop(e) {
        let offsetHeight = e.target.offsetHeight
        let scrollHeight = e.target.scrollHeight
        let scrollTop = e.target.scrollTop
        let scrollBottom = offsetHeight + scrollTop
        this.scrollTop = e.target.scrollTop * 2
        if (this.scrollTop >= this.innerHeight) {
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
      selectType(index) {
        if(intervalId) {
          clearInterval(intervalId)
        }
        this.$store.commit('setNoData',false)
        this.$store.commit('setIsTop',false)
        this.typeIndex = index
        this.page = 0
        this.$store.commit('setNewsOpportunitiesInit',[])
        this.typeList(this.typeIndex)
      },
      typeList(type){
        if(type === 0){
          this.$store.dispatch('getAllChance', { page: this.page, isTop: this.isTops, newTime: this.newTime })
        }else if(type ===1){
          this.$store.dispatch('getStockChance', { page: this.page, isTop: this.isTops, newTime: this.newTime })
        }else if(type ===2){
          this.$store.dispatch('getTopicChance', { page: this.page, isTop: this.isTops, newTime: this.newTime })
        }else if(type ===3){
          this.$store.dispatch('getProductChance', { page: this.page, isTop: this.isTops, newTime: this.newTime })
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
      trim(str) {
         return str.replace(/(^\s*)|(\s*$)/g, '');
       }
    },
    destroyed() {
      if(intervalId) {
        clearInterval(intervalId)
      }
      if(intervalId2) {
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
  .news-wrapper{
    margin-bottom: 50px;
  }
  .pullUptoRefresh,.loadMore{
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    height:50px;
    line-height: 50px;
  }
  .news-opportunities {
      color: $wordsColorBase;
      height:100%;
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
      margin-bottom: 2px;
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
      min-height: 98px;
      background-color: #2e4465;
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
      p {
          font-size: 16px;
          margin-top: 10px;
      }
      .name{
        color: $wordsColorBase;
        font-weight: bold;
      }
      .name.fontS18{font-size: 18px}
      .name.fontS16{font-size: 16px}
      .name.fontS22{font-size: 22px}
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
  .name{
    font-size: 14px;
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
      margin: 4px 0 0;
      line-height: 18px;
  }
  .news-list {
      position: relative;
      li{
        margin-bottom: 2px;
      }
      .news-list-item {
          background-color: #1a1b1f;
          padding: 10px 10px 10px 10px;
          .con-txt{
            span{
              font-size: 14px;
              color: #808ba1;
              line-height: 20px;
            }
          }
          .name{
            color: #caced7;
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
  .stock{
    margin-top: 10px;
  }
  .num{
    font-size: 0;
    position: absolute;
    top: 0
  }
  .noDataList{
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
</style>
