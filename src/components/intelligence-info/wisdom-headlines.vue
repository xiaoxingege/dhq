<template>
<<<<<<< HEAD
  <!-- 智头条 -->
  <div class="wisdomHeadlines">
    <div class="grid-box clearfix display-box">
      <div class="grid-left box-flex-1">
        <div class="news-wrapper">
          <ul class="news-list" ref="newsList">
            <li class="news-list-item" v-for="item in wisdomHeadlinesList">
              <div>
                <span v-if="item.postiveIndex != '' && item.postiveIndex != null" class="labels" :class='status(item.postiveIndex)'>{{item.postiveIndex | isNull}}</span>
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
                  <li class="stock-item" :class="upAndDownColor(relatedStocks[stock.code].chngPct)" v-for="stock in item.equityList">
                    <a :href="'/stock/'+stock.code" target="_blank" v-z3-stock="{ref:'stockbox',code:stock.code}" :value='stock.code'>
                      <span>{{stock.name}}</span><span>{{relatedStocks[stock.code].price  | isNull }}</span><span>{{relatedStocks[stock.code].chngPct  | isNull }}%</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <p v-if="!noData" class="tc mt-10" v-show="wisdomHeadlinesList.length >= 8">
            <a href="javascript:;" class="loadMore" @click="loadMore">加载更多</a>
          </p>
          <p v-if="noData"class="tc mt-10 loadMore">数据已加载完</p>
        </div>
      </div>
      <div class="grid-right"></div>
    </div>
    <StockBox ref="stockbox"></StockBox>
=======
<div class="wisdomHeadlines">
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
>>>>>>> c5cb5d938ddc3e999f6c1a0061944850e15707f2
  </div>
  <StockBox ref="stockbox"></StockBox>
</div>
</template>

<script>
<<<<<<< HEAD
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
        updateNewsPid:'',
        intervalTime:60000,
        scrollTop:0,
        innerHeight:window.innerHeight
      }
    },
    mounted() {
      this.loadList()
      this.updateNews()
      window.addEventListener('scroll',this.getScrollTop)
    },
    computed: {
      ...mapState([
        'loadingShow',
        'pageSize',
        'wisdomHeadlinesList',
        'newTime'
      ]),
      ...mapGetters({
        loadingShow: 'loadingShow',
        pageSize: 'pageSize',
        wisdomHeadlinesList: 'wisdomHeadlinesList',
        newTime: 'newTime'
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
          this.$store.dispatch('getWisdomHeadlinesList', {  page:this.page,isTop:false,newTime:'' });
        })
      },
      loadMore() {
        this.page++
        var count = Math.ceil(this.totalPage / this.pageSize);
        if(count === this.page+1){
          this.noData = false;
        }
      },
      updateNews() {
        const _this = this
        _this.updateNewsPid = setInterval(() => {
          console.log('启动定时器')
          _this.$store.dispatch('getWisdomHeadlinesList', { page:this.page,isTop:true,newTime:this.newTime })
        }, _this.intervalTime)
      },
      getScrollTop(){
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(this.scrollTop >= this.innerHeight){
          if(this.updateNewsPid){
            console.log('清除定时器')
            clearInterval(this.updateNewsPid)
          }
        }
        if(this.scrollTop === 0){
          this.updateNews()
        }
      },
      cutStr(str, len) {
        if(str === '')str = '--'
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
        }else if(txt ==='利空' || txt === '卖出'){
          return 'downBgColor'
        }else{
          return ''
        }
      },
      updateStock(stock) {
        this.$store.commit('UPDATE_WISDOMHEADLINES_RELSTOCK', stock)
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
      'page': {
        deep: true,
        handler: function () {
          this.loadList()
        }
      },
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
=======
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
import zInfoPublic from 'components/intelligence-info/public-info'
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
>>>>>>> c5cb5d938ddc3e999f6c1a0061944850e15707f2
      }
    },
    destroyed() {
      z3websocket.ws && z3websocket.ws.close()
      clearInterval(this.updateNewsPid)
    }
<<<<<<< HEAD
   }
=======
  },
  components: {
    StockBox,
    zInfoPublic
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
>>>>>>> c5cb5d938ddc3e999f6c1a0061944850e15707f2
</script>
<style lang='scss' scoped>
@import '../../assets/scss/style.scss';
@import '../../assets/css/reset.css';
@import '../../assets/css/base.css';
.wisdomHeadlines {
    color: $wordsColorBase;
    overflow: auto;
    font-size: 12px;
<<<<<<< HEAD
  }
  .news-wrapper{
    padding-bottom: 20px;
  }
  .grid-box{
    .grid-right{
      width: 370px;
=======
}
.grid-box {
    .grid-right {
        width: 370px;
        background-color: #1a1b1f;
>>>>>>> c5cb5d938ddc3e999f6c1a0061944850e15707f2
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
<<<<<<< HEAD
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
=======
}
.news-list {
    .news-list-item {
        border: 1px solid #0d1112;
        background-color: #1a1b1f;
        padding: 10px 10px 10px 5px;
>>>>>>> c5cb5d938ddc3e999f6c1a0061944850e15707f2
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
