<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import '../../assets/css/z3.css';
.portrait-custom {
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    color: #c9d0d7;
    font-size: 12px;
    background: #141518;
}

.customInfo {
    width: 100%;
    height: 39%;
}

.customInfo table,
.posAdvice > table {
    width: 100%;
}

.customInfo table {
    height: 42%;
}

.posAdvice > table {
    height: 80%;
}

.customInfo table tr td,
.posAdvice > table tr td {
    text-align: center;
    border-top: 1px solid #23272c;
    border-left: 1px solid #23272c;
}
.customInfo table tr td:last-child,
.posAdvice > table tr td:last-child {
    border-right: 1px solid #23272c;
}
.customInfo table tr:last-child td,
.posAdvice > table tr:last-child td {
    border-bottom: 1px solid #23272c;
}

.customTag-header {
    padding-top: 10px;
}

.monthTag {
    height: 25px;
    width: 147px;
    border: 1px solid #23272c;
    border-radius: 5px;
    background: url("../../assets/images/z3img/time.png") no-repeat;
    background-position: 95% 50%;
    cursor: pointer;
}

.timeBox {
    width: 147px;
    height: 30px;
    position: absolute;
    right: 0;
    top: 30px;
    border-radius: 3px;
    z-index: 999999;
}

.timeBox .ymdDate {
    line-height: 25px;
    text-align: center;
    background: #2A3138;
    border-bottom: 2px solid #141518;
    position: relative;
}
.timeBox .ymdDate span:first-child {
    position: absolute;
    left: 7px;
    top: 4px;
    cursor: pointer;
}
.timeBox .ymdDate span:last-child {
    position: absolute;
    right: 7px;
    top: 4px;
    cursor: pointer;
}

.monthBox {
    background: #21252C;
    padding: 10px;
    border-radius: 3px;
}

.monthBox .month > div {
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    width: 25%;
    float: left;
}
.monthBox .month > div.active,
.monthBox .month > div:hover {
    background: #457CB6;
}

.monthBox .month .gray {
    color: gray;
    cursor: default;
}
.monthBox .month .gray:hover {
    background: none;
}

.customTag {
    padding-bottom: 20px;
}
.customTag .tags li {
    color: #7D8BA1;
    padding: 0 10px;
    line-height: 20px;
    border: 1px solid #7D8BA1;
    border-radius: 3px;
    float: left;
    margin-right: 15px;
    margin-top: 10px;
}

.abilityAnaly {
    height: 39%;
    box-sizing: border-box;
    border-top: 3px solid #0d0e0f;
    border-bottom: 3px solid #0d0e0f;
}

.abilityAnaly > * {
    background: #141518;
}

.abilityAnaly > p {
    line-height: 20px;
}

.posAdvice {
    height: 22%;
}

.posAdvice > div {
    height: 20%;
    position: relative;
}

.posAdvice > div > span {
    display: block;
    position: absolute;
    top: 20%;
}
.posAdvice table tr:nth-child(2) td:nth-child(2),
.posAdvice table tr:nth-child(3) td:nth-child(2),
.posAdvice table tr:nth-child(4) td:nth-child(2),
.posAdvice table tr:nth-child(5) td:nth-child(2) {
    text-align: left;
    text-indent: 2em;
}

.radar {
    height: 80%;
}

.posAdvice .help {
    width: 13px;
    position: relative;
    left: 20px;
    top: 1px;
    cursor: pointer;
}

.posAdvice .help i {
    display: none;
}
.posAdvice .help:hover i {
    display: inline-block;
    position: absolute;
    left: 30px;
    width: 200px;
    background: #cccfd9;
    color: #666;
    border-radius: 5px;
    padding: 10px;
    z-index: 99999;
    text-align: left;
    ine-height: 18px;
}
</style>
<template>
<div class="portrait-custom">
  <div class="customInfo">
    <table cellpadding="0" cellspacing="0">
      <tr>
        <td>资金账号</td>
        <td v-if="customerInfo!==null">{{customerInfo.userid | isNull}}</td>
        <td>本户持仓比</td>
        <td v-if="customerInfo!==null">{{customerInfo.position_radio_ofall | isNull}}</td>
        <td>交易次数</td>
        <td v-if="customerInfo!==null">{{customerInfo.trade_nums | isNull}} (近3月)</td>
      </tr>
      <tr>
        <td>姓名</td>
        <td v-if="customerInfo!==null">{{customerInfo.username | isNull}}</td>
        <td>资产分级</td>
        <td v-if="customerInfo!==null">{{customerInfo.asset_class | isNull}}</td>
        <td>活跃度</td>
        <td v-if="customerInfo!==null">{{customerInfo.activation | isNull}}</td>
      </tr>
      <tr>
        <td>性别</td>
        <td v-if="customerInfo!==null">{{customerInfo.gender | isNull}}</td>
        <td>属地</td>
        <td v-if="customerInfo!==null">{{customerInfo.belongto | isNull}}</td>
        <td>交易能力</td>
        <td v-if="customerInfo!==null">{{customerInfo.trade_ability | isNull}}</td>
      </tr>
      <tr>
        <td>手机</td>
        <td v-if="customerInfo!==null">{{customerInfo.phonenumber | isNull}}</td>
        <td>开户时间</td>
        <td v-if="customerInfo!==null">{{customerInfo.ctime | isNull}}</td>
        <td>关注度</td>
        <td v-if="customerInfo!==null && customerInfo.attention !== null">
          <Z3Star :value="customerInfo.attention" @valueChange="setAttention"></Z3Star>
        </td>
      </tr>

    </table>
    <div class="customTag">
      <div class="customTag-header clearfix">
        <p class="fl" style="line-height: 25px;">客户标签</p>
        <div class="fr" style="position: relative">
          <p class="fl mr-15" style="line-height: 25px;">标签月份</p>
          <span class="monthTag fr" @click="showTime"></span>
          <div v-show="isShowCalendar" class="timeBox">
            <div class="ymdDate">
              <span @click="changeYear('minus')" :style="{display:currentY === defaultY ? 'block':'none'}"><img
                      src="../../assets/images/z3img/leftArrow.png"></span>
              <span ref="showYear" :value="currentY">{{currentY}}</span>
              <span @click="changeYear('add')" :style="{display:currentY === defaultY ? 'none':'block'}"><img
                      src="../../assets/images/z3img/rightArrow.png"></span>
            </div>
            <div class="monthBox">
              <div class="month clearfix">
                <div @click="selectMonth($event)" :class="[((currentM === item && currentY === selectY) ? 'active':''),(((item < defaultM && currentY !== defaultY) || (item > defaultM && currentY === defaultY)) ? 'gray':'')]" v-for="item in 4" :value="item">
                  {{item}}月
                </div>
              </div>
              <div class="month clearfix">
                <div @click="selectMonth($event)" :class="[((currentM === item && currentY === selectY) ? 'active':''),(((item < defaultM && currentY !== defaultY ) || (item > defaultM && currentY === defaultY)) ? 'gray':'')]" v-for="item in [5,6,7,8]" :value="item">{{item}}月
                </div>
              </div>
              <div class="month clearfix">
                <div @click="selectMonth($event)" :class="[((currentM === item && currentY === selectY) ? 'active':''),(((item < defaultM && currentY !== defaultY) || (item > defaultM && currentY === defaultY)) ? 'gray':'')]" v-for="item in [9,10,11,12]" :value="item">{{item}}月
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul class="tags clearfix">
        <li v-for="item in customerTag">{{item}}</li>
      </ul>
    </div>
  </div>
  <div class="abilityAnaly">
    <p style="padding-top: 10px">能力分析</p>
    <div class="radar">
      <Portraitradar></Portraitradar>
    </div>
    <p v-if="customerAnaly !== null">{{customerAnaly.advice}}</p>
  </div>
  <div class="posAdvice">
    <div><span>仓位建议</span></div>
    <table cellpadding="0" cellspacing="0">
      <tr>
        <td>市场</td>
        <td>操作建议</td>
        <td>仓位建议<span class="help"><img src="../../assets/images/help.png"><i>基于多种仓位控制模型给出的持仓建议，并通过一套严谨的算法模型经过二次计算，给出最终的仓位建议。</i></span>
        </td>
      </tr>
      <tr v-for="item in customerPosition">
        <td>{{item.market_name}}</td>
        <td>{{item.op_advise}}</td>
        <td>{{item.op_value}}</td>
      </tr>
    </table>
  </div>
  <!--<div v-select="message" style="margin-bottom: 100px;"></div>-->
</div>
</template>
<script>
import Portraitradar from 'components/customerPortrait/portrait-radar'
import Z3Star from 'components/z3star'
export default {
  data() {
    return {
      currentY: '',
      defaultY: '',
      currentM: '',
      defaultM: '',
      isThisYear: true,
      selectY: '',
      dateTime: '',
      isShowCalendar: false
    }
  },
  computed: {

    customerInfo: function() {
      return this.$store.state.customerList.customerInfo
    },
    customerTag: function() {
      return this.$store.state.customerList.customerTag
    },
    customerAnaly: function() {
      return this.$store.state.customerList.customerAnaly
    },
    customerPosition: function() {
      return this.$store.state.customerList.customerPosition
    },
    customerAttention: function() {
      return this.$store.state.customerAttention
    }

  },
  components: {
    Portraitradar,
    Z3Star
  },
  methods: {
    setAttention: function(val) {
      this.$store.dispatch('customerList/setAttention', {
        star: val
      }).then(() => {
        if (this.customerAttention.errCode === 0) {
          this.customerInfo.attention = val
        }
      })
      // this.customerInfo && (this.customerInfo.attention = val);
    },
    showTime: function() {
      this.isShowCalendar = !this.isShowCalendar

    },
    getCurrentTime: function() {
      const date = new Date();
      this.currentY = date.getFullYear()
      this.defaultY = date.getFullYear()
      this.selectY = date.getFullYear()
      this.currentM = date.getMonth() + 1
      this.defaultM = date.getMonth() + 1
      this.dateTime = '' + this.currentY + this.currentM
      console.log(this.dateTime)
    },
    changeYear: function(type) {
      if (type === 'add') {
        this.currentY = this.currentY + 1
        this.isThisYear = true
      } else if (type === 'minus') {
        this.isThisYear = false
        this.currentY = this.currentY - 1
      }
    },
    selectMonth(e) {
      if (e.target.getAttribute('class') === 'gray') {
        return
      }
      if (this.currentY !== this.defaultY) {
        this.isThisYear = false
      }
      this.currentM = Number(e.target.getAttribute('value'))
      this.selectY = Number(this.$refs.showYear.innerText)
      this.$store.dispatch('customerList/getCustomerTag', {
        dateTime: '' + this.selectY + (String(this.currentM).length > 1 ? this.currentM : '0' + this.currentM)
      })
    }
  },
  mounted() {
    this.getCurrentTime()
    this.$store.dispatch('customerList/getCustomerInfo')
    this.$store.dispatch('customerList/getCustomerTag', {
      dateTime: this.dateTime
    })
    this.$store.dispatch('customerList/getAnalyAbility')
    this.$store.dispatch('customerList/getPositonCommand')
  }
}
</script>