<template>
  <!-- 7*24小时快讯 -->
  <div class="news-flash">
    <div class="grid-box clearfix display-box">
      <div class="grid-left box-flex-1">
        <div class="news-wrapper">
          <ul class="news-list">
            <li class="display-box" v-for="item in newsFlash">
              <div class="leftTime"><span v-z3-time="{ time:item.declareDate, type: '2' }"></span></div>
              <div class="news-list-item box-flex-1">
                <div>
                  <span class="labels" :class='status(item.postiveIndex)'>{{item.postiveIndex}}</span>
                  <router-link :to="{name:'detailPages',params:{id : item.newsId, detailType:'news'}}" target="_blank">
                    <span class="name">[{{ item.newsType | convert}}]{{item.title}}</span>
                  </router-link>
                </div·>
                <div class="con-txt">
                  <router-link :to="{name:'detailPages',params:{id : item.newsId, detailType:'news'}}" target="_blank">
                    <span>{{cutStr(item.summary,350)}}</span>
                    <!-- item.summary -->
                  </router-link>
                  <span class="source">( {{item.srcName}} )</span>
                </div>
                <div class="con-bottom">
                  <ul class="stock" v-for="stock in item.equityList">
                    <li class="stock-item" :class="upAndDownColor(1)">
                      <a :href="'/stock/'+stock.code" target="_blank" v-z3-stock="{ref:'stockbox',code:stock.code}" :value='stock.code'>
                        <span>{{stock.name}}</span><span>{{1 | isNull}}</span><span>+1.00%</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <p class="tc mt-10" v-show="newsFlash.length>8">
            <a href="javascript:;" class="loadMore" @click="loadMore">加载更多</a>
          </p>
        </div>
      </div>
      <div class="grid-right"></div>
    </div>
    <StockBox ref="stockbox"></StockBox>
  </div>
</template>

<script>
  import 'whatwg-fetch'
  import { cutString } from 'utils/date'
  import { mapState } from 'vuex'
  import { mapGetters } from 'vuex'
  import StockBox from 'components/stock-box'
  import z3websocket from '../../z3tougu/z3socket'

  export default {
    data() {
      return {
        page:0,
        flag:2,
        isShow: true
      }
    },
    created() {
      this.loadList();
    },
    computed: {
      ...mapState([
        'pageSize',
        'newsFlash'
      ]),
      ...mapGetters({
        pageSize: 'pageSize',
        newsFlash:'newsFlash'
      }),
      ...mapState({
        relatedStocks: state => state.topic.relatedStocks,
        socketState: state => state.z3sockjs.readystate,
        stockMessage: state => {
          const msg = state.z3sockjs.message
          if (msg && msg.data && msg.data.subject === 'snapshot') {
            const record = msg.data
            return {
              innerCode: record.stockCode,
              //  name: record.stockName,
              price: record.lastpx,
              chg: record.pxchg,
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
          this.$store.dispatch('getNewsFlashList', { flag:this.flag, page:this.page });
      },
      loadMore() {
        this.page++
        this.loadList()
      },
      cutStr(str, len) {
        return cutString(str, len)
      },
      upAndDownColor(flag){
        if (flag > 0) {
          return 'upColor'
        } else if (flag < 0) {
          return 'downColor'
        } else {
          return ''
        }
      },
      status(txt) {
        if(txt ==='利好'){
          return 'upBgColor'
        }else if(txt ==='利空'){
          return 'downBgColor'
        }else{
          return ''
        }
      },
      updateStock(stock) {
        this.$store.commit('intelligenceInfo/UPDATE_WISDOMHEADLINES_RELSTOCK', stock)
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
      isNull (value) {
        return value === null || value === '' ? '--' : value
      },
      filterNum (value, type) {
        return value === null || value === '' ? '--' : value.toFixed(2) + type
      },
      convert(value) {
        return value === '新闻' ? '资讯' : value;
      }
    },
    destroyed() {
      z3websocket.ws && z3websocket.ws.close()
    }
   }
</script>
<style lang='scss' scoped>
  @import '../../assets/scss/style.scss';
  @import '../../assets/css/reset.css';
  @import '../../assets/css/base.css';
  .news-flash{
    color:$wordsColorBase;
    min-width: 1200px;
    overflow: auto;
    font-size: 12px;
  }
  .leftTime{
    position:relative;
    width: 63px;
    background-color:#26272d;
    text-align: center;
    border: 1px solid #0d1112;
    span{
      width:100%;
      display: block;
      position: absolute;
      top: 50%;
      left:50%;
      transform:translate(-50%,-50%);
    }
  }
  .grid-box{
    .grid-right{
      width: 370px;
    }
  }
  .name,.con-txt,.labels,.stock{
    font-size: 12px;
  }
  .name{
    font-weight: bold;
  }
  .source{
    color: #656766;
  }
  .labels{
    display: inline-block;
    padding:0 6px;
    height: 17px;
    margin-right:5px;
    background-color:#525a65;
  }
  .con-txt{
    margin: 8px 0 10px 0;
    line-height: 18px;
  }
  .news-list{
    .news-list-item{
      border: 1px solid #0d1112;
      background-color:#1a1b1f;
      padding: 10px 10px 10px  5px;
      a{
        color: $wordsColorBase;
        &:hover{
          color:#2388da;
        }
      }
    }
  }
  .stock{
    font-size: 0;
    .stock-item{
      font-size: 12px;
      display: inline-block;
      border: 1px solid #c9d0d7;
      height: 17px;
      padding:0 8px;
      border-radius:10px;
      margin-right: 20px;
      a{
        color: #fff;
      }
      span{
        margin-left: 8px;
        &:first-child{
          margin-left:0;
        }
      }
      &.upColor{
        a{
          color:$upColor;
        }
        border-color: $upColor;
      }
      &.downColor{
        a{
          color:$downColor;
        }
        border-color: $downColor;
      }
    }
  }
  .upBgColor{
    background-color:$upColor;
  }
  .downBgColor{
    background-color:$downColor;
  }
  .loadMore,.time{
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
  .display-box{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-o-box;display:box}
  .box-flex-1{-webkit-box-flex:1;-moz-box-flex:1;-ms-flex:1;-o-box-flex:1;box-flex:1}
  .box-flex-2{-webkit-box-flex:2;-moz-box-flex:2;-ms-flex:2;-o-box-flex:2;box-flex:2}
  .box-flex-3{-webkit-box-flex:3;-moz-box-flex:3;-ms-flex:3;-o-box-flex:3;box-flex:3}
  .box-flex-4{-webkit-box-flex:4;-moz-box-flex:4;-ms-flex:4;-o-box-flex:4;box-flex:4}

</style>
