<style lang="scss" scoped>
    @import '../assets/css/base.css';
    *{
      text-align: justify;
    }
    body{
      font-size: 12px;
      background: #f2f2f2;
    }
    .blue{
      color: #2388da;
      font-size: 12px;
    }
    .red{
      color:#e6363a ;
    }
    .green {
      color:#48a854 ;
    }
    .fr{
      float: right;
    }
    .fl{
      float: left;
    }
    .backtest-filter{
        background: #f2f2f2;
        color: #191919;
        width: 100%;
    }
    .bfilter-main{
       padding: 0 10px 0;
    }
    
    .bfilter-bottom{
      margin-top: 14px;
      background: #fff;
      font-size: 12px;
      color: #191919;
    }
    .bfilter-ul{
      border-bottom: 1px solid #2388da;
    }
    .bfilter-ul li{
      padding: 7px 15px 5px 14px;
      cursor: pointer;
    }
    .bfilter-ul li.active{
      background: #2388da;
      color: #fff;
    }

    .bfilter-table{
      padding: 15px 10px 0 7px;
    }
    .bfilter-today{
      
    }
    .table-head{
       background: #f2f2f2;
       padding: 9px 0;
    }
    .table-head{
      width: 100%;
    }
    .table-head span{
      width: 9%;
      display: inline-block;
      text-align: center;
    }
    .table-body{
      padding: 12px 0;
      border-bottom: 1px solid #e5e5e5;
    }
    .table-body span{
      width: 9%;
      display: inline-block;
      text-align: center;
    }
    .table-head2 span{
      width: 12%;
    }
    .table-body2{
      /* padding: 12px 0; */
      padding: 13px 0 11px 0;
      border: none;
    }
    .table-body2 span{
      width: 12%;
    }
    span.order-num{
      width: 6%;
    }
    .bfilter-table .export{
       width: 4%;
       
    }
    .table-head{
      position: relative;
    }
    .export{
      position: absolute;
      right: 1%;
      top: 2px;
    }
    .export i{
      background: url(../assets/images/z3img/export-icon.png) no-repeat;
      width: 18px;
      height: 18px;
      display: inline-block;
      position: relative;
      top: 3px;
      left: -2%;
    }
    .backtest-filter .page{
      text-align: center;
    }
</style>
<template> 
   <div class="backtest-filter">
      <div class="bfilter-main">
        
        <BackFilterDescr/> 
        <div class="bfilter-bottom">
          <ul class="bfilter-ul clearfix">
              <li class="fl blue" @click="nowTrade" :class="showNowTrade===true?'active':''">当前选股</li>
              <li class="fl blue" @click="tradeDay" :class="showTradeDay===true?'active':''">每日交易</li>
          </ul>
          <div class="bfilter-table" v-show="showNowTrade">
              <div>
                  
              </div>
              <div class="table-head">
                   <span class="order-num">序号
                   </span><span>股票代码
                   </span><span>股票简称
                   </span><span>价格(元)
                   </span><span>涨跌
                   </span><span>涨跌幅
                   </span><span>市盈率
                   </span><span>市净率
                   </span><span>市销率
                   </span><span>总市值
                   </span><span>流通市值
                   </span><span class="export blue"><i>
                   </i>导出
                   </span>
              </div>
              <div class="clearfix table-body" v-for="(stock,index) of nowStock">
                   <span class="order-num">{{index+1}}
                   </span><span>{{stock.innerCode}}
                   </span><span>{{stock.name}}
                   </span><span :class="stock.curChngPct>=0 ? stock.curChngPct===0?'':'red':'green'">{{stock.price}}
                   </span><span :class="stock.curChngPct>=0 ? stock.curChngPct===0?'':'red':'green'">{{stock.chg}}
                   </span><span :class="stock.curChngPct>=0 ? stock.curChngPct===0?'':'red':'green'">{{stock.curChngPct==null?'--':changeTofixed(stock.curChngPct)}}
                   </span><span>{{stock.peTtm.toFixed(2)}}
                   </span><span>{{stock.pb.toFixed(2)}}
                   </span><span>1223
                   </span><span>{{stock.tcap}}
                   </span><span>{{stock.mktcap}}
                   </span>
              </div>
              <Pagination  @getPageFromChild="goToStockPage" :totalPage="totalPage"/>
          </div>
          <div class="bfilter-today" v-show="showTradeDay">
                 <div class="table-head table-head2">
                     <span>序号
                     </span><span>日期
                     </span><span>卖出股票(只)
                     </span><span>买入日期
                     </span><span>盈亏比
                     </span><span>胜率
                     </span><span>平均收益率
                     </span><span>平均超额收益率
                     </span>
                 </div>
                 <div class="clearfix table-body table-body2" v-for="(tradeDay,index) of tradeDetail">
                     <span>{{index+1}}
                     </span><span>{{changeDate(tradeDay.backtestDate)}}
                     </span><span>{{tradeDay.sellStockNums}}
                     </span><span>{{changeDate(tradeDay.buyDate)}}
                     </span><span>{{tradeDay.winLossRatio}}
                     </span><span>{{changePer(tradeDay.winRatio)}}
                     </span><span :class="tradeDay.avgReturn>=0 ? tradeDay.avgReturn===0||tradeDay.avgReturn==null?'':'red':'green'">{{tradeDay.avgReturn==null?'--':changePer(tradeDay.avgReturn)}}
                     </span><span :class="tradeDay.avgReturnExcess>=0 ? tradeDay.avgReturnExcess===0?'':'red':'green'">{{changePer(tradeDay.avgReturnExcess)}}
                     </span>
                 </div>
                 <Pagination  @getPageFromChild="goTotradePage" :totalPage="tradeTotalPage"/>
          </div>
        </div> 
      </div>
      
      
   </div>
       
</template>

<script>
 import { mapState } from 'vuex'
 import BackFilterDescr from './back-filter-descr'
 import Pagination from './pagination'
 export default {
   data () {
     return {
       stockPage: 0,
       stockPagesize: '',
       tradePage: 0,
       tradePagesize: '',
       showNowTrade: true,
       showTradeDay: false,
       strategyId: this.$route.params.strategyId
     }
   },
   computed: mapState({
     tradeDetail: state => state.backtestDetail.tradeDetail,
     nowStock: state => state.backtestDetail.nowStock,
     totalPage: state => state.backtestDetail.stockTotal,
     tradeTotalPage: state => state.backtestDetail.tradeTotalPage
   }),
   components: {
     BackFilterDescr,
     Pagination
   },
   methods: {
     initData (stockPage, tradePage) {
       this.$store.dispatch('backtestDetail/queryNowStock', { strategyId: this.strategyId, stockPage: this.stockPage, stockPagesize: this.stockPagesize })
       this.$store.dispatch('backtestDetail/queryTradeDetail', { strategyId: this.strategyId, tradePage: this.tradePage, tradePagesize: this.tradePagesize })
     },
     nowTrade () {
       this.showNowTrade = true
       this.showTradeDay = false
     },
     tradeDay () {
       this.showTradeDay = true
       this.showNowTrade = false
     },
     goToStockPage (page) {
       this.stockPage = Number(page) - 1
     },
     goTotradePage (page) {
       this.tradePage = Number(page) - 1
     },
     /* goToPage (page) {
       this.page = Number(page) - 1
     },*/
     changePer (num) {
       return (Number(num) * 100).toFixed(2) + '%'
     },
     changeTofixed (num) {
       return num > 0 ? '+' + parseFloat(num).toFixed(2) + '%' : parseFloat(num).toFixed(2) + '%'
     },
     changeDate (time) {
       return (time + '').substring(0, 4) + '.' + (time + '').substring(4, 6) + '.' + (time + '').substring(6, (time + '').length)
     }

   },
   watch: {
     stockPage () {
       this.initData(this.stockPage)
     },
     tradePage () {
       this.initData(this.tradePage)
     }
 
   },
   mounted () {
     this.initData()
   }
 
 }
</script>
