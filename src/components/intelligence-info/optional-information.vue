<template>
  <!-- 自选情报 -->
  <div class="optionalInformation"  @scroll="getScrollTop($event)">
    <div class="top-bar">
      <select class="select" name="" v-model="stockPoolDefault" @change="getInnerCode">
        <option value=''>请选择</option>
        <option v-for="(item,index) in stockPool" :value="item.poolId" :data-index='index'>{{item.poolName}}</option>
      </select>
      <a href="#"><span class="lookStock">自选股查看</span></a>
    </div>
    <div class="news-wrapper">
      <ul class="news-list">
        <li class="news-list-item" v-for="item in optionalInformationList">
          <div class="con-top">
            <p v-z3-updowncolor="item.equityList.chngPct">
              <span>{{relatedStocks[item.equityList.code].name}}[{{relatedStocks[item.equityList.code].code}}]</span>
              <span>{{relatedStocks[item.equityList.code].price}}</span>
              <span>{{relatedStocks[item.equityList.code].chngPct | chngPct}}</span>
            </p>
          </div>
          <div>
            <span v-if="item.postiveIndex != null" class="labels" :class='status(item.postiveIndex)'>{{item.postiveIndex}}</span>
            <span class="name">[{{item.newsType | convert}} ]{{item.title}}</span>
          </div>
          <div class="con-txt">
            <span>{{cutStr(item.summary,350)}}</span>
          </div>
          <div class="con-bottom">
            <span class="source">{{item.srcName}}</span>
            <span class="time" v-z3-time="{ time: item.declareDate+'', type: '1' }"></span>
            <span class="price" v-if="item.newsType=== '研报'">目标价格：{{item.equityList.expectPrice | isNull}}</span>
          </div>
        </li>
      </ul>
      <p class="tc mt-10">
        <a v-if="!noData && optionalInformationList.length >= 8" href="javascript:;" class="loadMore" @click="loadMore">加载更多</a>
        <p v-if="noData"  class="tc mt-10 loadMore">数据已加载完</p>
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
        innerHeight: window.innerHeight,
        stockPoolDefault:'',
        innerCode:'000001.SZ,000002.SZ'
      }
    },
    mounted() {
      this.loadList()
      this.updateNews()
      this.$store.dispatch('getStockPool')
    },
    computed: {
      ...mapState([
        'page',
        'optionalInformationList',
        'stockPool',
        'newTime',
        'pageSize'
      ]),
      ...mapGetters({
        page: 'page',
        pageSize:'pageSize',
        optionalInformationList:'optionalInformationList',
        stockPool:'stockPool',
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
          this.$store.dispatch('getOptionalInformation', { innerCode:this.innerCode, page:this.page,isTop:false,newTime:'' })
        })
      },
      updateNews() {
        const _this =this
        _this.updateNewsPid = setInterval(() => {
          console.log('启动定时器')
          _this.$store.dispatch('getOptionalInformation', { innerCode:this.innerCode, page:this.page, isTop:true, newTime: _this.newTime })
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
      getInnerCode() {
        this.innerCode = ''
        this.page = 0
        let index = $('.select option:selected').attr('data-index')
        let stocks =  this.stockPool
        let thisStock = stocks[index]
        for(let list of thisStock.equityPool) {
          this.innerCode  += list.innerCode + ','
        }
        var str = this.innerCode.substring(0,this.innerCode.length-1)
        this.innerCode = str

        this.loadList()

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
  .optionalInformation{
    color:$wordsColorBase;
    font-size: 12px;
    height: 100%;
    overflow: auto;
  }
  .news-wrapper{
    padding-bottom: 20px;
  }
  .top-bar{
    height: 32px;
    border: 1px solid #0f1012;
    line-height: 32px;
    background-color:#1a1b1f;
    padding-left: 5px;
    .select{
      width:240px;
      height: 26px;
      background-color: #303539;
      border: 1px solid #525a65;
      color:$wordsColorBase;
    }

    .lookStock{
      display: inline-block;
      height: 25px;
      line-height: 25px;
      background-color:#30353b;
      color:$wordsColorBase;
      padding:0 5px;
      &:hover{
        background-color:$hoverBgColor;
      }
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
    margin-top: 7px;
    line-height: 18px;
  }
  .con-top{
    margin-bottom: 8px;
    span{
      margin-right: 12px;
    }
  }
  .con-bottom{
    .time{
      margin-left: 10px;
    }
    .price{
      margin-left: 110px;
    }
  }
  .news-list{
    .news-list-item{
      border: 1px solid #0d1112;
      background-color:#1a1b1f;
      padding: 6px 10px 6px 5px;
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
  .loadMore,.time,.price{
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
