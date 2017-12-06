<style scoped>
@import '../assets/css/base.css';
input {
  outline: none;
}

* {
  /* font-size: 12px; */
  font-family: "Microsoft YaHei";
  box-sizing: border-box;
}

body {
  background: #141518;
}

.clearfix:after {
  display: block;
  content: '';
  clear: both;
}

a,
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

.customer-list-wrap {
  /* padding: 20px 20px 3px 20px; */
  background: #141518;
  border-bottom: 3px solid #0d0e0f;
  border-top: 3px solid #0d0e0f;
  border-left: 3px solid #0d0e0f;
  color: #c9d0d7;
  font-size: 12px;
}

.cur-head {
  font-size: 14px;
  background: #23272c;
  height: 25px;
  padding-left: 9px;
}

.inp-head {
  margin-top: 13px;
  padding-left: 10px;
}

.inp-box2 {
  margin-left: 13px;
}

.inp-text1 {
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

.search-btn {
  width: 44px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  background: #23272c;
  margin-left: 13px;
  border-radius: 3px;
  cursor: pointer;
}

.customer-list {
  margin-top: 10px;
}

.customer-list-wrap .page {
  background: #141518;
  text-align: center;
}

.table-box {
  border-collapse: collapse;
  width: 100%;
  font-size: 12px;
}

.table-box tr td {
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #23272c;
  border-left: none;
  position: relative;
}

.table-box tr:nth-child(1) {
  background: #23272c;
  border: none;
  cursor: pointer;
}

.table-box tr:nth-child(1) td {
  height: 30px;
}

.td-txt i {
  width: 11px;
  height: 6px;
  display: inline-block;
  position: absolute;
}

.td-txt.active {}

.td-txt.active .sort-down {
  width: 11px;
  height: 6px;
  display: block;
  background: url("../assets/images/z3img/topic-sort-down.png") no-repeat;
  position: absolute;
  bottom: 0px;
  left: 45%;
}

.td-txt.active .sort-up {
  width: 11px;
  height: 6px;
  display: block;
  background: url("../assets/images/z3img/topic-sort-up.png") no-repeat;
  position: absolute;
  bottom: 0px;
  left: 45%;
}

.search-ul {
  width: 98px;
  top: 101%;
  left: 67px;
  position: absolute;
  z-index: 99999;
  color: #666666;
  font-size: 12px;
  background: #cccfd9;
}

.search-ul2 {
  width: 98px;
  top: 101%;
  left: 67px;
  position: absolute;
  z-index: 99999;
  color: #666666;
  font-size: 12px;
  background: #cccfd9;
}

.search-ul3 {
  width: 98px;
  top: 101%;
  left: 67px;
  position: absolute;
  z-index: 99999;
  color: #666666;
  font-size: 12px;
  background: #cccfd9;
}

.search-ul li,
.search-ul2 li,
.search-ul3 li {
  line-height: 20px;
  padding: 0 10px;
  /* border-bottom: 1px solid #262931; */
  /* border-bottom: 1px solid #e5e5e5; */
  /* border-bottom: 1px solid #808ba1; */
  cursor: pointer;
}

.search-ul li.active {
  background: #1984ea;
  color: #c9d0d7;
}

.search-ul2 li.active {
  background: #1984ea;
  color: #c9d0d7;
}

.search-ul3 li.active {
  background: #1984ea;
  color: #c9d0d7;
}

.search-ul li span:first-child {
  margin-right: 10px;
}

.search-ul2 li span:first-child {
  margin-right: 10px;
}

.search-ul3 li span:first-child {
  margin-right: 10px;
}

.inp-box1 {
  position: relative;
}

.foot-tishi {
  font-size: 12px;
  color: #808ba1;
  background: #141518;
  color: #808ba1;
  line-height: 24px;
  margin-top: 10px;
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
          <li v-for="fuzzy of this.customersFuzzy.searchList" @click="focusUser($event,'acct')"><span>{{fuzzy.userid}}</span></li>
        </ul>
      </div>
      <div class="inp-box1 fl ml-20">
        <label>客户姓名：</label><input type="text" class="inp-text1" @input="search($event,'name')" ref="keyName" autocomplete="off" v-model="message2" maxlength="20">
        <ul class="search-ul2" v-if="this.customersFuzzy.searchList && this.customersFuzzy.searchList.length > 0 && message2!=''" v-show="nameVal">
          <li v-for="fuzzy of this.customersFuzzy.searchList" @click="focusUser($event,'name')"><span>{{fuzzy.username}}</span></li>
        </ul>
      </div>
      <div class="inp-box1 fl inp-box2">
        <label>客户手机号：</label><input type="text" class="inp-text1" @input="search($event,'phone')" ref="keyPhone" autocomplete="off" v-model="message3" maxlength="11">
        <ul class="search-ul3" v-if="this.customersFuzzy.searchList && this.customersFuzzy.searchList.length > 0 && message3!=''" v-show="phoneVal">
          <li v-for="fuzzy of this.customersFuzzy.searchList" @click="focusUser($event,'phone')"><span>{{fuzzy.phonenumber}}</span></li>
        </ul>
      </div>
      <div class="search-btn fl">查找</div>

    </div>
    <div class="inp-head">
      <label>数量：</label><span class="pl-5">462</span>
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
      <tr v-for="list of listDetail">
        <td>{{list.userid}}</td>
        <td>{{list.username}}</td>
        <td>{{list.gender}}</td>
        <td>{{list.asset_class}}</td>
        <td>{{list.activation}}</td>
        <td>{{list.position_radio_ofall}}</td>
        <td>{{list.trade_nums}}</td>
        <td>{{list.ctime}}</td>
        <td>{{list.trade_ability}}</td>
        <td>{{list.phonenumber}}</td>
        <td>{{list.attention}}</td>
      </tr>
    </table>
    <Pagination @getPageFromChild="goToPage" :totalPage="totalPage" />
  </div>
  <p class="foot-tishi">风险提示：本策略过往业绩并不预示未来表现，也不构成本策略的业绩保证。策略提示的买入时机、买入信号或者卖出时机、风险预警信号，买卖区间等仅供投资者决策之参考，不作为买卖建议，风险自控。</p>
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
      isDireSymbol: true,
      isRadioice: true,
      isTradeNums: true,
      isCtime: true,
      isAttention: true,
      tabledata: {
        th: ['序号', '股票代码', '股票简称', '买卖方向', '买入日期', '卖出日期', '买入价格(前复权)', '卖出价格', '盈亏', '收益率'],
        td: {}
      }

    }
  },
  computed: {
    ...mapState({
      listDetail: state => state.customerList.customersList,
      customersFuzzy: state => {
        const listData = state.customerList.customersFuzzy
        return {
          searchList: listData

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
        sortField: 1
      })
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
            type: type,
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
        console.log(this.message2)
        this.$store.dispatch('customerList/queryCustomersFuzzy', {
          type: type,
          paramValue: keyName
        })
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
        this.$store.dispatch('customerList/queryCustomersFuzzy', {
          type: type,
          paramValue: keyPhone
        })
      }



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
        sortField: this.stockSort
      })
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
    changeDate(time) {
      return (time + '').substring(0, 4) + '-' + (time + '').substring(4, 6) + '-' + (time + '').substring(6, (time + '').length)
    }
  },
  mounted() {
    this.init()
  }
}
</script>
