<template>
<!-- 7*24小时快讯 -->
<div class="news-flash">
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
        totalPage:200,
        noData: false,
        updateNewsPid: '',
        intervalTime:60000,
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
        'newsFlash',
        'newTime',
        'pageSize'
      ]),
      ...mapGetters({
        pageSize:'pageSize',
        newsFlash:'newsFlash',
        newTime:'newTime'
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
        this.$nextTick(() => {
          this.$store.dispatch('getNewsFlashList', { page:this.page,isTop:false,newTime:'' })
        })
        console.log(this.newTime)
      },
      updateNews() {
        const _this =this
        _this.updateNewsPid = setInterval(() => {
          console.log('启动定时器')
          _this.$store.dispatch('getNewsFlashList', { page:0, isTop:true, newTime: this.newTime })
        },_this.intervalTime)
      },
      getScrollTop(e) {
        this.scrollTop = e.target.scrollTop
        if (this.scrollTop >= this.innerHeight) {
          if (this.updateNewsPid) {
            console.log('清除定时器')
            clearInterval(this.updateNewsPid)
          }
        }
        if (this.scrollTop === 0) {
          this.updateNews()
        }
      },
      loadMore() {
        this.page++
        this.$store.dispatch('getNewsFlashList', { page:this.page,isTop:false,newTime: this.newTime })
        var count = Math.ceil(this.totalPage / this.pageSize)
        if(count === this.page + 1){
          this.noData = true
        }
      },
      cutStr(str, len) {
        if (str === '' || str === null) str = '--'
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
        if(txt ==='利好' || txt ==='增持' || txt === '买入'){
          return 'upBgColor'
        } else if (txt === '利空' || txt === '卖出') {
          return 'downBgColor'
        }else{
          return ''
        }
      },
      updateStock(stock) {
        this.$store.commit('UPDATE_OPTIONALINFORMATION_RELSTOCK', stock)
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
      // 'page': {
      //   deep: true,
      //   handler: function () {
      //     this.loadList()
      //   }
      // },
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
      clearInterval(this.updateNewsPid)
    }
  }
</script>
<style lang='scss' scoped>
  @import '../../assets/scss/style.scss';
  @import '../../assets/css/reset.css';
  @import '../../assets/css/base.css';
  .news-flash {
      color: $wordsColorBase;
      height:100%;
      overflow: auto;
      font-size: 12px;
  }
  .leftTime {
      position: relative;
      width: 63px;
      background-color: #26272d;
      text-align: center;
      border: 1px solid #0d1112;
      span {
          width: 100%;
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
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
