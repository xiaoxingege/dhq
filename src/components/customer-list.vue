<style>
@import '../assets/css/base.css';
input {
  outline: none;
}

html {
  height: 100%;
}

.app {
  height: 100%;
}

* {
  /* font-size: 12px; */
  font-family: "Microsoft YaHei";
  box-sizing: border-box;
}

body {
  background: #141518;
  height: 100%;
}

.clearfix:after {
  display: block;
  content: '';
  clear: both;
}

.customer-list-wrap a,
.blue {
  color: #1984ea;
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

.customer-list-wrap img {
  vertical-align: middle;
  border: 0;
}

.customer-list-wrap {
  /* padding: 20px 20px 3px 20px; */
  background: #141518;
  border-bottom: 3px solid #0d0e0f;
  border-top: 3px solid #0d0e0f;
  border-left: 3px solid #0d0e0f;
  color: #c9d0d7;
  font-size: 12px;
  min-height: 100%;
}

.customer-list-wrap .cur-head {
  font-size: 14px;
  background: #23272c;
  height: 25px;
  padding-left: 9px;
}

.customer-list-wrap .inp-head {
  margin-top: 13px;
  padding-left: 10px;
}

.customer-list-wrap .inp-box2 {
  margin-left: 13px;
}

.customer-list-wrap .inp-text1 {
  width: 98px;
  height: 25px;
  background: #23272c;
  border-radius: 3px;
  border: none;
  outline: none;
  color: #c9d0d7;
  padding-left: 10px;
  margin-left: 8px;
}

.customer-list-wrap .search-btn {
  width: 44px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  background: #23272c;
  margin-left: 13px;
  border-radius: 3px;
  cursor: pointer;
}

.customer-list-wrap .customer-list {
  margin-top: 10px;
  min-height: 100%;
}

.customer-list-wrap .customer-list .page {
  background: #141518;
  text-align: center;
  padding: 20px 0;
}

.customer-list-wrap .table-box {
  border-collapse: collapse;
  width: 100%;
  font-size: 12px;
}

.customer-list-wrap .table-box tr td {
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #23272c;
  border-left: none;
  position: relative;
}

.customer-list-wrap .table-box tr:nth-child(1) {
  background: #23272c;
  border: none;
  cursor: pointer;
}

.customer-list-wrap .table-box tr:nth-child(1) td {
  height: 30px;
}

.customer-list-wrap .td-txt i {
  width: 11px;
  height: 6px;
  display: inline-block;
  position: absolute;
}

.td-txt.active {}

.customer-list-wrap .td-txt.active .sort-down {
  width: 11px;
  height: 6px;
  display: block;
  background: url("../assets/images/z3img/topic-sort-down.png") no-repeat;
  position: absolute;
  bottom: 0px;
  left: 45%;
}

.customer-list-wrap .td-txt.active .sort-up {
  width: 11px;
  height: 6px;
  display: block;
  background: url("../assets/images/z3img/topic-sort-up.png") no-repeat;
  position: absolute;
  bottom: 0px;
  left: 45%;
}

.customer-list-wrap .search-ul {
  width: 98px;
  top: 101%;
  left: 67px;
  position: absolute;
  z-index: 99999;
  color: #666666;
  font-size: 12px;
  background: #cccfd9;
}

.customer-list-wrap .search-ul2 {
  width: 98px;
  top: 101%;
  left: 67px;
  position: absolute;
  z-index: 99999;
  color: #666666;
  font-size: 12px;
  background: #cccfd9;
}

.customer-list-wrap .search-ul3 {
  width: 98px;
  top: 101%;
  left: 80px;
  position: absolute;
  z-index: 99999;
  color: #666666;
  font-size: 12px;
  background: #cccfd9;
}

.customer-list-wrap .search-ul li,
.search-ul2 li,
.search-ul3 li {
  line-height: 20px;
  padding: 0 10px;
  /* border-bottom: 1px solid #262931; */
  /* border-bottom: 1px solid #e5e5e5; */
  /* border-bottom: 1px solid #808ba1; */
  cursor: pointer;
}

.customer-list-wrap .search-ul li.active {
  background: #1984ea;
  color: #c9d0d7;
}

.customer-list-wrap .search-ul2 li.active {
  background: #1984ea;
  color: #c9d0d7;
}

.customer-list-wrap .search-ul3 li.active {
  background: #1984ea;
  color: #c9d0d7;
}

.customer-list-wrap .search-ul li span:first-child {
  margin-right: 10px;
}

.customer-list-wrap .search-ul2 li span:first-child {
  margin-right: 10px;
}

.customer-list-wrap .search-ul3 li span:first-child {
  margin-right: 10px;
}

.customer-list-wrap .inp-box1 {
  position: relative;
}

.customer-list-wrap .foot-tishi {
  font-size: 12px;
  color: #808ba1;
  background: #141518;
  color: #808ba1;
  line-height: 24px;
  margin-top: 10px;
}

.customer-list-wrap .tr-no2 {
  text-align: center;
}

.customer-list-wrap .no-data {
  width: 176px;
  height: 168px;
  display: inline-block;
  background: url("../assets/images/z3img/no-data.png") no-repeat;
}
</style>
<template>
<div class="customer-list-wrap">
  <div class="header clearfix">
    <div class="cur-head">
      <span class="lightcolor">客户列表</span>
    </div>
    <div class="inp-head clearfix">
      <div class="inp-box1 fl">
        <label>资金账户：</label><input type="text" class="inp-text1" @input="search($event,'acct')" ref="keyAcct" autocomplete="off" v-model="message1" maxlength="20">
        <ul class="search-ul" v-if="this.customersFuzzy.searchList && this.customersFuzzy.searchList.length > 0 && message1!=''" v-show="acctVal">
          <li v-for="fuzzy of this.customersFuzzy.searchList" @click="focusUser($event,'acct')"><span>{{fuzzy}}</span></li>
        </ul>
      </div>
      <div class="inp-box1 fl ml-20">
        <label>客户姓名：</label><input type="text" class="inp-text1" @input="search($event,'name')" ref="keyName" autocomplete="off" v-model="message2" maxlength="20">
        <ul class="search-ul2" v-if="this.customersFuzzy.searchList && this.customersFuzzy.searchList.length > 0 && message2!=''" v-show="nameVal">
          <li v-for="fuzzy of this.customersFuzzy.searchList" @click="focusUser($event,'name')"><span>{{fuzzy}}</span></li>
        </ul>
      </div>
      <div class="inp-box1 fl inp-box2">
        <label>客户手机号：</label><input type="text" class="inp-text1" @input="search($event,'phone')" ref="keyPhone" autocomplete="off" v-model="message3" maxlength="11">
        <ul class="search-ul3" v-if="this.customersFuzzy.searchList && this.customersFuzzy.searchList.length > 0 && message3!=''" v-show="phoneVal">
          <li v-for="fuzzy of this.customersFuzzy.searchList" @click="focusUser($event,'phone')"><span>{{fuzzy}}</span></li>
        </ul>
      </div>
      <div class="search-btn fl" @click="lookUp($event)">查找</div>

    </div>
    <div class="inp-head">
      <label>数量：</label><span class="pl-5">{{this.listDetail.total}}</span>
    </div>
  </div>
  <div class="customer-list">
    <table class="table-box" cellpadding="0" cellspacing="0">
      <tr>
        <td class="td-txt" @click="isDireSymbol===true?sortStock($event,'1','userid'):sortStock($event,'-1','userid')" :class="this.name==='userid'?'active':''">资金账户<i :class="isDireSymbol===true?'sort-up':'sort-down'"></i></td>
        <td class="td-txt">客户姓名</td>
        <td>性别</td>
        <td>资产分级</td>
        <td>活跃度</td>
        <td class="td-txt" @click="isRadioice===true?sortStock($event,'-2','radioice'):sortStock($event,'2','radioice')" :class="this.name==='radioice'?'active':''">本户持仓比<i :class="isRadioice===true?'sort-up':'sort-down'"></i></td>
        <td class="td-txt" @click="isTradeNums===true?sortStock($event,'-3','tradeNums'):sortStock($event,'3','tradeNums')" :class="this.name==='tradeNums'?'active':''">交易次数(近3月)<i :class="isTradeNums===true?'sort-up':'sort-down'"></i></td>
        <td class="td-txt" @click="isCtime===true?sortStock($event,'-4','ctime'):sortStock($event,'4','ctime')" :class="this.name==='ctime'?'active':''">开户时间<i :class="isCtime===true?'sort-up':'sort-down'"></i></td>
        <td>交易能力</td>
        <td>手机号</td>
        <td class="td-txt" @click="isAttention===true?sortStock($event,'-5','attention'):sortStock($event,'5','attention')" :class="this.name==='attention'?'active':''">关注度<i :class="isAttention===true?'sort-up':'sort-down'"></i></td>
      </tr>
      <!--  <td @click="isDireSymbol===true?sortStock($event,'symbol','DESC'):sortStock($event,'symbol','ASC')" :class="this.stockSort==='symbol'?'active':''" class="td-txt">名称/代码<i :class="isDireSymbol===true?'sort-up':'sort-down'"></i></td> -->
      <tr v-for="list of listDetail.datas" v-if="listDetail.datas.length>0">
        <td>{{checkNull(list.userid)}}</td>
        <td>
          <router-link :to="{name:'portraitDetail',params:{clientPassport:list.userid}}" class="blue">{{checkNull(list.username)}}</router-link>
        </td>
        <td>{{checkNull(list.gender)}}</td>
        <td>{{checkNull(list.asset_class)}}</td>
        <td>{{checkNull(list.activation)}}</td>
        <td>{{checkNull(list.position_radio_ofall)}}</td>
        <td>{{checkNull(list.trade_nums)}}</td>
        <td>{{checkNull(changeDate(list.ctime))}}</td>
        <td>{{checkNull(list.trade_ability)}}</td>
        <td>{{checkNull(changePhone(list.phonenumber))}}</td>
        <td>
          <img v-for="item in list.attention" value="item" src="../assets/images/z3img/star.png">
          <img v-for="item in (5-list.attention)" value="item" src="../assets/images/z3img/star-gray.png">
        </td>
      </tr>
    </table>
    <div v-if="listDetail.datas.length<=0" class="tr-no2">
      <div class="no-data"></div>
    </div>
    <Pagination @getPageFromChild="goToPage" :totalPage="totalP.totalPage" />
  </div>
  <!--  <p class="foot-tishi">风险提示：本策略过往业绩并不预示未来表现，也不构成本策略的业绩保证。策略提示的买入时机、买入信号或者卖出时机、风险预警信号，买卖区间等仅供投资者决策之参考，不作为买卖建议，风险自控。</p> -->
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import Pagination from './pagination'
export default {
  data() {
    return {
      message1: '',
      message2: '',
      message3: '',
      paramValue: '',
      acctVal: true,
      nameVal: true,
      phoneVal: true,
      searchList: [],
      name: '',
      stockSort: {
        userid: 1,
        radioice: 2,
        tradeNums: 3,
        ctime: 4,
        attention: 5
      },
      sortNum: 1,
      isDireSymbol: true,
      isRadioice: true,
      isTradeNums: true,
      isCtime: true,
      isAttention: true,
      page: 0,
      pagesize: '',
      acctParam: '',
      nameParam: '',
      phoneParam: '',
      fullHeight2: parseInt((document.documentElement.clientHeight - 187) / 31),
      fullHeight1: document.documentElement.clientHeight - 156,
      tabledata: {
        th: ['序号', '股票代码', '股票简称', '买卖方向', '买入日期', '卖出日期', '买入价格(前复权)', '卖出价格', '盈亏', '收益率'],
        td: {}
      }

    }
  },
  computed: {
    ...mapState({
      listDetail: state => state.customerList.customersList,
      totalP: state => {
        const pagefull = parseInt((document.documentElement.clientHeight - 187) / 31)
        const total = Math.ceil(state.customerList.total / pagefull)
        return {
          totalPage: total
        }
      },
      customersFuzzy: state => {
        const listData = state.customerList.customersFuzzy
        return {
          searchList: listData.datas,
          searchTotal: listData.total
        }
      }

    })
  },
  components: {
    Pagination
  },
  methods: {
    init() {
      this.$store.dispatch('customerList/queryCustomers', {
        sortField: this.sortNum,
        phone: this.phoneParam,
        name: this.nameParam,
        acct: this.acctParam,
        page: this.page,
        pagesize: this.fullHeight2

      })
    },
    goToPage(page) {
      this.page = Number(page) - 1
    },
    search(e, type) {
      e.preventDefault()
      if (type === 'acct') {
        const keyAcct = this.$refs.keyAcct.value
        this.message1 = keyAcct
        this.paramValue = keyAcct
        /* if(this.acctVal){
          this.nameVal = false
        }else{
          this.nameVal = true
        } */
        if (this.message === '') {
          this.acctVal = false

        } else {
          this.acctVal = true
          this.nameVal = false
          this.phoneVal = false
        }
        var reg = /^[1-9]\d{0,19}$/;
        if (!reg.test(keyAcct)) {
          this.acctVal = false
          return false
        } else {
          this.$store.dispatch('customerList/queryCustomersFuzzy', {
            field: type,
            paramValue: keyAcct
          })
          return true
        }

      } else if (type === 'name') {
        const keyName = this.$refs.keyName.value
        this.message2 = keyName
        this.paramValue = keyName

        /* if(this.nameVal){
           this.acctVal = false
         }else{
           this.acctVal = true
         } */
        if (this.message2 === '') {
          this.nameVal = false
        } else {
          this.nameVal = true
          this.acctVal = false
          this.phoneVal = false
        }
        var _kong = /\s/g
        if (_kong.test(keyName)) {
          this.nameVal = false
          return false
        } else {
          this.$store.dispatch('customerList/queryCustomersFuzzy', {
            field: type,
            paramValue: keyName
          })
          return true
        }

      } else if (type === 'phone') {
        const keyPhone = this.$refs.keyPhone.value
        this.message3 = keyPhone
        if (this.message3 === '') {
          this.phoneVal = false
        } else {
          this.phoneVal = true
          this.nameVal = false
          this.acctVal = false

        }
        var reg3 = /^[1-9]\d{0,10}$/;
        if (!reg3.test(keyPhone)) {
          this.phoneVal = false
          return false
        } else {
          this.$store.dispatch('customerList/queryCustomersFuzzy', {
            field: type,
            paramValue: keyPhone
          })
          return true
        }
        /* this.$store.dispatch('customerList/queryCustomersFuzzy', {
          type: type,
          paramValue: keyPhone
        }) */
      }

    },
    lookUp(e) {
      const keyAcct = this.$refs.keyAcct.value
      const keyName = this.$refs.keyName.value
      const keyPhone = this.$refs.keyPhone.value
      console.log(keyAcct + '' + keyName + '' + keyPhone) /**/
      this.acctParam = keyAcct
      this.nameParam = keyName
      this.phoneParam = keyPhone
      this.$store.dispatch('customerList/queryCustomers', {
        sortField: this.sortNum,
        phone: this.phoneParam,
        name: this.nameParam,
        acct: this.acctParam,
        page: this.page,
        pagesize: this.fullHeight2
      })
    },
    focusUser(e, type) {
      const focusUserId = e.currentTarget.children[0].innerText
      this.$emit('focusUserId', focusUserId)
      if (type === 'acct') {
        this.message1 = focusUserId
      } else if (type === 'name') {
        this.message2 = focusUserId
      } else if (type === 'phone') {
        this.message3 = focusUserId
      }
      this.customersFuzzy.searchList = []

    },
    sortStock(e, type, name) {
      e.preventDefault()
      this.stockSort = type
      this.name = name
      console.log(type)
      if (name === 'userid') {
        this.isDireSymbol = !this.isDireSymbol
      } else if (name === 'radioice') {
        this.isRadioice = !this.isRadioice
      } else if (name === 'tradeNums') {
        console.log(this.isDireCurChng)
        this.isTradeNums = !this.isTradeNums
      } else if (name === 'ctime') {
        this.isCtime = !this.isCtime
      } else if (name === 'attention') {
        this.isAttention = !this.isAttention
      }

      this.$store.dispatch('customerList/queryCustomers', {
        sortField: this.stockSort,
        phone: this.phoneParam,
        name: this.nameParam,
        acct: this.acctParam,
        page: this.page,
        pagesize: this.fullHeight2
      })
      this.sortNum = this.stockSort
      console.log(this.sortNum)
    },
    checkNull(str) {
      if (str === null) {
        return '--'
      } else {
        return str
      }
    },
    changeAdd(num) {
      if (num > 0) {
        return '+' + (Number(num) * 100).toFixed(2) + '%'
      } else if (num < 0) {
        return (Number(num) * 100).toFixed(2) + '%'
      } else if (num === 0) {
        return num
      }
    },
    changePlus(num) {
      if (num > 0) {
        return '+' + num
      } else if (num <= 0) {
        return num
      }
    },
    changePer(num) {
      return (Number(num) * 100).toFixed(2) + '%'
    },
    changeTofixed(num) {
      return num > 0 ? '+' + parseFloat(num).toFixed(2) + '%' : parseFloat(num).toFixed(2) + '%'
    },
    changePhone(time) {
      return (time + '').substring(0, 3) + '-' + (time + '').substring(3, 7) + '-' + (time + '').substring(7, (time + '').length)
    },
    changeDate(time) {
      return (time + '').substring(0, 4) + '.' + (time + '').substring(4, 6) + '.' + (time + '').substring(6, (time + '').length)
    }
  },
  watch: {
    page() {
      this.init(this.page)
    }

  },
  mounted() {
    this.init()
  }
}
</script>
