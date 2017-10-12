<style lang="scss" scoped>
@import '../assets/css/base.css';
* {
    text-align: justify;
    font-family: "Microsoft YaHei";
    box-sizing: border-box;
}
body {
    background: #141518;
}
.blue {
    color: #1984ea;
}
.red {
    color: #ca4941;
}
.green {
    color: #56a870;
}

.lightcolor {
    color: #c9d0d7;
}

.gray {
    color: #808ba1;
}

.fr {
    float: right;
}
.fl {
    float: left;
}
.backtest-filter {
    background: #141518;
    color: #c9d0d7;
    width: 100%;
    border-bottom: 3px solid #0d0e0f;
    border-left: 1px solid #0d0e0f;
    /* padding: 0 20px 20px 0; */
    padding-right: 20px;
    padding-bottom: 1px;

}
.bfilter-main {
    /* padding: 0 10px; */
    position: relative;
}

.bfilter-bottom {
    /* margin-top: 14px; */
    margin-top: 9px;
    font-size: 12px;
    color: #c9d0d7;
    padding-left: 20px;
}
.bfilter-ul {
    border-bottom: 1px solid #0d0e0f;
    position: relative;
    background: #23272c;
}
.bfilter-ul li {
    /* padding: 7px 15px 5px 14px; */
    padding: 3px 17px 4px 18px;
    /* border: 1px solid #0d0e0f; */
    cursor: pointer;
}
.bfilter-ul li.active {
    background: #525a65;
    /* border: 1px solid transparent; */
}

.bfilter-table .export {
    width: 4%;

}

li.export-box {
    border: none;
}

/* .table-head{
      position: relative;
    } */
.export {
    position: absolute;
    right: 1%;
    top: 0;
}
/* .export-box span:hover {
    background: url("../assets/images/z3img/backexport-click2.png") no-repeat;
} */

.export-span {
    background: url("../assets/images/z3img/backexport2.png") no-repeat;
    width: 57px;
    height: 25px;
    display: inline-block;
    position: absolute;
    /* right: 1.5%; */
    right: 0.3%;
    top: 0;
}

.export-span-click {
    background: url("../assets/images/z3img/backexport-click2.png") no-repeat;
    width: 57px;
    height: 25px;
    display: inline-block;
    position: absolute;
    right: 1.5%;
    top: 0;
}

/* .export i {
    background: url("../assets/images/z3img/export-icon.png") no-repeat;
    width: 18px;
    height: 18px;
    display: inline-block;
    position: relative;
    top: 3px;
    left: -2%;
} */
.bfilter-table {
    /* padding: 15px 10px 0 7px; */
}
.bfilter-today {}
.table-head {
    background: #23272c;
    /* padding: 9px 0; */
    padding: 7px 0;
    width: 100%;
}
.table-head span {
    width: 9%;
    display: inline-block;
    text-align: center;
}
.table-body {
    /*  padding: 12px 0; */
    padding: 7px 0;
    border-bottom: 1px solid #23272c;
}
.table-body span {
    width: 9%;
    display: inline-block;
    text-align: center;
}
.table-head2 span {
    /* width: 11.92%; */
    width: 10.7%;
    text-align: center;
    /*  width: 11%;*/
}
.table-body2 {
    /* padding: 12px 0; */
    /*  padding: 13px 0 11px;
    border-bottom: 1px solid #e5e5e5; */
}
.table-body2 span {
    /* width: 12%; */
    width: 10.78%;
    text-align: center;
    /*  width: 11%;*/
}
.see {
    cursor: pointer;
    padding-left: 12px;
}
span.order-num {
    /* width: 6%; */
}
.tr-no2 {
    text-align: center;
}
.no-data {
    width: 176px;
    height: 168px;
    display: inline-block;
    background: url("../assets/images/z3img/no-data.png") no-repeat;
}
.backtest-filter .page {
    text-align: center;
}
.icon {
    position: absolute;
    /* right: 15px;
    top: 8px; */
    right: -2px;
    top: 20px;
}

.icon span {
    width: 19px;
    height: 16px;
    display: inline-block;
    background: url("../assets/images/z3img/back-icons.png") no-repeat;
    cursor: pointer;
}

span.weixin {
    background-position: 0 -16px;
    margin-right: 12px;

}
.weixin:hover {
    background-position: 0 0;
    margin-right: 12px;

}

span.copy {
    background-position: 0 -52px;
    margin-right: 12px;

}
.copy:hover {
    background-position: 0 -34px;
}

.weixin.active {
    background-position: 0 0;
}

.copy.active {
    background-position: 0 -34px;
}

.backtest-filter .toast {
    background: #fff;
}

.toast .tiperror {
    background: #ff0;
}

/* .copy {
    height: 22px;
    width: 22px;
    display: inline-block;
    background: url("../assets/images/z3img/back-copy.png") no-repeat;
    cursor: pointer;
} */
.qrcode {
    position: absolute;
    top: 51px;
    right: 41px;
    /* top: 40px;
    right: 10px; */
    /* box-shadow: 4px 4px 4px 2px #eee;
    border: 1px solid #eee; */
}

.angle {
    width: 0;
    height: 0;
    border: 15px solid transparent;
    border-bottom-color: #fff;
    position: absolute;
    top: -26px;
    right: 32px;

}

.code-box {
    width: 200px;
    height: 214px;
    background: #fff;
    border-radius: 10px;
    font-size: 12px;
    color: #666666;
    padding: 10px;
}

.code-txt {
    text-align: center;
    /* line-height: 13px; */
    margin-top: -5px;
}
.bfilter-table {
    position: relative;
}

.bfilter-table .page {
    /*  position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto; */
    background: none;
    padding: 10px 0;
}

/* .bfilter-today{
      position: relative;
    }*/
.bfilter-today .page {
    /* position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto; */
    background: none;
    padding: 10px 0;
}

.foots-tishi {
    font-size: 12px;
    /*  position: absolute;
      bottom: 0; */
    color: #808ba1;
    /* padding-bottom: 24px;
      padding-left: 20px; */
    line-height: 24px;
    padding-left: 20px;
}
</style>
<template>
<div class="backtest-filter">
  <div class="bfilter-main">
    <div class="fr icon"><span class="weixin" @click="showQrcode" :class="showQrcodeBox===true?'active':''"></span><span class="copy" :class="showToast===true?'active':''"></span>
    </div>
    <BackFilterDescr @basicFilterName="listenToBasic" />
    <div class="bfilter-bottom">
      <ul class="bfilter-ul clearfix">
        <li class="fl" @click="nowStock" :class="showNowStock===true?'active':''">当前选股</li>
        <li class="fl" @click="tradeDay" :class="showTradeDay===true?'active':''">每日交易</li>
        <!-- <li class="export-box"><span class="export blue" @click="showNowStock===true?excelExport('filterStock'):showTradeDay===true?excelExport('filterDaily'):''"><i></i>导出</span></li> -->
        <li class="export-box"><span class="export-span" @click="showNowStock===true?excelExport('filterStock'):showTradeDay===true?excelExport('filterDetail'):''"></span>
        </li>
      </ul>
      <div class="bfilter-table" v-show="showNowStock">
        <div>

        </div>
        <div class="table-head">
          <span class="order-num">序号
                   </span><span>股票代码
                   </span><span>股票简称
                   </span><span>最新价
                   </span><span>涨跌
                   </span><span>涨跌幅
                   </span><span>市盈率
                   </span><span>市净率
                   </span><span>市销率
                   </span><span>总市值（亿）
                   </span><span>流通市值（亿）
                   </span>
        </div>
        <div :style="{  minHeight: fullHeight + 'px' }">
          <div class="clearfix table-body" v-for="(stock,index) of nowChooseStock" v-if="nowChooseStock.length>0">
            <span class="order-num">{{pageSize*stockPage+index+1}}
                     </span><span>{{stock.innerCode}}
                     </span><span><a :href="'/stock/'+ stock.innerCode" target="_blank" class="blue">{{stock.name}}</a>
                     </span><span v-z3-updowncolor="stock.curChngPct">{{stock.price==null?'--':stock.price}}
                     </span><span v-z3-updowncolor="stock.curChngPct">{{stock.chg==null?'--':changePlus(stock.chg)}}
                     </span><span v-z3-updowncolor="stock.curChngPct">{{stock.curChngPct==null?'--':changeTofixed(stock.curChngPct)}}
                     </span><span>{{stock.peTtm==null?'--':stock.peTtm.toFixed(2)}}
                     </span><span>{{stock.pb==null?'--':stock.pb.toFixed(2)}}
                     </span><span>{{stock.ps==null?'--':stock.ps.toFixed(2)}}
                     </span><span>{{stock.tcap==null?'--':changeYi(stock.tcap)}}
                     </span><span>{{stock.mktcap==null?'--':changeYi(stock.mktcap)}}
                     </span>
          </div>
          <div v-if="nowChooseStock.length<=0" class="tr-no2" :style="{  lineHeight: fullHeight + 'px' }">
            <div class="no-data"></div>
          </div>
        </div>
        <Pagination @getPageFromChild="goToStockPage" :totalPage="totalPage" />
      </div>
      <div class="bfilter-today" v-show="showTradeDay">
        <div class="table-head table-head2">
          <span>序号</span>
          <span>日期</span>
          <span>买入股票(只)</span>
          <span>卖出股票(只)</span>
          <span>盈亏比</span>
          <span>胜率</span>
          <span>平均收益率</span>
          <span>平均超额收益率</span>
          <span>买卖明细</span>
        </div>
        <div :style="{  minHeight: fullHeight + 'px' }">
          <div class="clearfix table-body table-body2" v-for="(tradeDay,index) of tradeDetail" v-if="tradeDetail.length>0">
            <span>{{fullHeight3*tradePage+index+1}}
              </span><span>{{tradeDay.backtestDate==null?'--':changeDate(tradeDay.backtestDate)}}
              </span>
            <span>{{tradeDay.buyStockNums==null?'--':tradeDay.buyStockNums}}</span>
            <span>{{tradeDay.sellStockNums==null?'--':tradeDay.sellStockNums}}</span>
            <span>{{tradeDay.winLossRatio==null?'--':tradeDay.winLossRatio.toFixed(2)}}
              </span><span>{{tradeDay.winRatio==null?'--':changePer(tradeDay.winRatio)}}
              </span><span v-z3-updowncolor="tradeDay.avgReturn">{{tradeDay.avgReturn==null?'--':changePer(tradeDay.avgReturn)}}
              </span><span v-z3-updowncolor="tradeDay.avgReturnExcess">{{tradeDay.avgReturnExcess==null?'--':changePer(tradeDay.avgReturnExcess)}}
              </span>
            <router-link :to="{name:'backtestfilterbuysell2',query:{strategyId:strategyId,backtestDate : tradeDay.backtestDate,basicName:basicName}}"><span class="blue see">查看
              </span></router-link>
          </div>
          <div v-if="tradeDetail.length<=0" class="tr-no2" :style="{  lineHeight: fullHeight + 'px' }">
            <div class="no-data"></div>
          </div>
        </div>
        <Pagination @getPageFromChild="goTotradePage" :totalPage="tradeTotalPage" />
      </div>
    </div>
  </div>
  <div class="foots-tishi">
    风险提示：本策略过往业绩并不预示未来表现，也不构成业绩保证；策略提示的当前选股仅供投资参考，不作为买卖建议，风险自担！
  </div>
  <div v-show="showQrcodeBox" class="qrcode">
    <div class="angle" @click="showCode"></div>
    <div class="code-box">
      <canvas ref="qrcode"></canvas>
      <div class="code-txt">微信扫码转发</div>
    </div>
  </div>
  <toast :msg="toastmsg" v-if="showToast"></toast>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
import BackFilterDescr from './back-filter-descr'
import Pagination from './pagination'
import qrcode from 'qrcode'
import Clipboard from 'clipboard'
import toast from 'components/toast'
import {
  ctx
} from '../z3tougu/config'
import {
  domain
} from '../z3tougu/config'
import store from '../z3tougu/store'
export default {
  data () {
    return {
      stockPage: 0,
      stockPagesize: '',
      tradePage: 0,
      tradePagesize: '',
      showNowStock: true,
      showTradeDay: false,
      showIcon: true,
      strategyId: this.$route.params.strategyId,
      showQrcodeBox: false,
      toastmsg: '',
      showToast: false,
      fullHeight: document.documentElement.clientHeight - 390,
      fullHeight2: parseInt((document.documentElement.clientHeight - 390) / 30),
      pageSize: parseInt((document.documentElement.clientHeight - 390) / 30),
      fullHeight3: parseInt((document.documentElement.clientHeight - 390) / 30),
      basicName: ''
    }
  },
  computed: {
    ...mapState({
      tradeDetail: state => state.backtestDetail.tradeDetail,
      nowChooseStock: state => state.backtestDetail.nowStock,
      totalPage: state => state.backtestDetail.stockTotal,
      tradeTotalPage: state => state.backtestDetail.tradeTotalPage,
      authInfo: state => state.auth
    })
  },
  components: {
    BackFilterDescr,
    Pagination,
    toast
  },
  methods: {
    initData (stockPage, tradePage) {
      this.$store.dispatch('backtestDetail/queryNowStock', {
        strategyId: this.strategyId,
        stockPage: this.stockPage,
        stockPagesize: this.fullHeight2
      })
      this.$store.dispatch('backtestDetail/queryTradeDetail', {
        strategyId: this.strategyId,
        tradePage: this.tradePage,
        tradePagesize: this.fullHeight3
      })
    },
    nowStock () {
      this.showNowStock = true
      this.showTradeDay = false
    },
    tradeDay () {
      this.showTradeDay = true
      this.showNowStock = false
    },
    /* buysNums (e) {

      const numDate = e.currentTarget.previousElementSibling.innerHTML.replace(/\./g, '')
      console.log(numDate)
    },*/
    excelExport (type) {
      const id = this.strategyId
      const expires = this.authInfo.expires
      const updateTime = this.authInfo.updateTime
      const now = new Date().getTime()
      const clientid = this.authInfo.clientid
      const deviceid = this.authInfo.deviceid
      const token = this.authInfo.authorization.split(' ')[1]
      this.showIcon = false
      if (expires !== -1 && now - updateTime < expires * 1000) {
        console.log(0)
        this.createForm(id, type, token, clientid, deviceid)
      } else {
        console.log(111111)
        return store.dispatch('authSetting').then(() => {
          this.createForm(id, type, token, clientid, deviceid)
        })
      }
    },
    createForm (id, type, token, clientid, deviceid) {
      var url = `${domain}/openapi/excels/excelByType.shtml`
      var postForm = document.createElement('form') // 表单对象
      postForm.style.display = 'none'
      postForm.method = 'get'
      postForm.action = url
      postForm.innerHTML = '<input name="id" value="' + id + '" /><input name="type" value="' + type + '" /><input name="access_token" value="' + token + '" /><input name="client_id" value="' + clientid + '" /><input name="device_id" value="' + deviceid + '" />'
      document.body.appendChild(postForm)
      postForm.submit()
      // document.body.removeChild(postForm)
    },
    goToStockPage (page) {
      this.stockPage = Number(page) - 1
    },
    goTotradePage (page) {
      this.tradePage = Number(page) - 1
    },
    listenToBasic (name) {
      this.basicName = name
      console.log(this.basicName)
    },
    /* goToPage (page) {
      this.page = Number(page) - 1
    },*/
    checkNull (str) {
      if (str === null) {
        return '--'
      } else {
        return str
      }
    },
    changePlus (num) {
      if (num > 0) {
        return '+' + num
      } else if (num <= 0) {
        return num
      }
    },
    changeYi (num) {
      return (Number(num) / 100000000).toFixed(2)
    },
    changeFix (num) {
      return Number(num).toFixed(2) + '%'
    },
    changePer (num) {
      return (Number(num) * 100).toFixed(2) + '%'
    },
    changeTofixed (num) {
      return num > 0 ? '+' + parseFloat(num).toFixed(2) + '%' : parseFloat(num).toFixed(2) + '%'
    },
    changeDate (time) {
      return (time + '').substring(0, 4) + '-' + (time + '').substring(4, 6) + '-' + (time + '').substring(6, (time + '').length)
    },
    showQrcode () {
      this.showQrcodeBox = !this.showQrcodeBox
    },
    showCode () {
      this.showQrcodeBox = !this.showQrcodeBox
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
    const url = window.location.protocol + '//' + window.location.host + ctx + '/backtestFilterH5/' + this.strategyId
    qrcode.toDataURL(this.$refs.qrcode, url, function () {})
    const clipboard = new Clipboard('.copy', {
      text: function () {
        return url
      }
    })
    clipboard.on('success', (e) => {
      this.toastmsg = '分享地址已拷贝!'
      this.showToast = true
      setTimeout(() => {
        this.showToast = false
      }, 2500)
    })
    clipboard.on('error', (e) => {
      this.toastmsg = '分享地址拷贝失败!'
      this.showToast = true
      setTimeout(() => {
        this.showToast = false
      }, 2500)
    })
  }

}
</script>
