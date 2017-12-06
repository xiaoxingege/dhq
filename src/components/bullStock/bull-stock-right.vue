<style scoped>
@import '../../assets/css/base.css';
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
  height: 100%;
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

.clearfix:after {
  display: block;
  content: '';
  clear: both;
}

a {
  color: #c9d0d7;
}

.blue {
  color: #1984ea;
  font-size: 12px;
}

td,
th {
  word-break: break-all;
  /*height: 30px;*/
}

.td div {
  /* padding: 5px; */
  padding: 5px 0;
}

.bull-stock-wrap {
  margin: 0 5px 0 5px;
  padding: 8px 0 10px 0;
  height: 100%;
  box-sizing: border-box;
}

.bull-style {
  /*padding: 12px 12px 22px 13px;*/
  padding: 5px 12px 22px 13px;
  background: #141518;
  height: 45%;
}

.bull-head {
  font-size: 16px;
  color: #c9d0d7;
  padding-bottom: 7px;
}

.style-table-box {
  border-collapse: collapse;
  width: 100%;
  font-size: 12px;
  color: #c9d0d7;
}

.style-table-box td {
  /*height: 28px;*/
  /*height:2.2rem;*/
}

.style-table-box2 {
  height: 95%;
}

.style-table-box2 tr td:nth-child(3) {
  text-align: left;
}

.style-table-box2 tr:nth-child(1) td {
  text-align: left;
}

.style-table-box2 tr:nth-child(1) td:nth-child(3) {
  text-align: left;
}

.style-table-box tr:not(:first-child) td {
  /*padding-left: 3px;*/
}

.topic-box tr td:first-child {
  cursor: pointer;
}

.topic-box tr td:not(:first-child) {
  text-align: center;
}

.industry-box tr td:first-child {
  cursor: pointer;
}

.industry-box tr td:not(:first-child) {
  text-align: center;
}

.leading-plate {
  margin-top: 5px;
  padding: 12px 12px 16px 13px;
  background: #141518;
  height: 54%;
}

.leading-plate .bull-head {
  height: 7%;
  padding-bottom: 0;
}

.topic {
  height: 45%;
}

.topic-box {
  /* margin-bottom: 15px;*/
  height: 98%;
}

.industry {
  border-top: 1px solid #2a2b31;
  height: 45%;
}

.industry-box {
  /* margin-top: 15px;*/
  height: 98%;
}

.progress-box {
  width: 100%;
  display: inline-block;
}

.progress {
  background: red;
  width: 10%;
  height: 100%;
  display: inline-block;
  text-align: center;
  height: 14px;
  line-height: 13px;
}

.redbg {
  background: #ca4941;
}

.greenbg {
  background: #56a870;
}

.topic-tr td:nth-child(1) {
  width: 31%;
}

.help-img {
  width: 15px;
  height: 15px;
  background: url("../../assets/images/z3img/help.png") no-repeat;
  position: relative;
  cursor: pointer;
}

.bull-head .icon-show {
  position: relative;
  right: 31px;
  top: 32px;
  max-width: 300px;
  display: block;
  padding: 18px 16px;
  color: #666666;
  background: #cccfd9;
  border-radius: 10px;
  z-index: 999;
  line-height: 18px;
  font-size: 12px;
}

.tr-no2 {
  /*text-align: center;*/
  position: relative;
}

.style-table-box {
  position: relative;
}

.no-data {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 176px;
  height: 168px;
  display: inline-block;
  background: url("../../assets/images/z3img/no-data.png") no-repeat;
}

.no-data1 {
  top: 10%;
}

.no-data2 {
  top: 20%;
}

.no-data3 {
  top: 40%;
}
</style>
<template>
<div class="bull-stock-wrap">
  <div class="bull-style">
    <div class="bull-head">牛股风格
      <div class="help-img fr" v-z3-help="iconHelpMsg"></div>
    </div>
    <table class="style-table-box style-table-box2">
      <tr>
        <td v-for="(item,index) in tabledata.th1" class="lightcolor">
          {{item}}
        </td>
      </tr>

      <tr v-for="style of stockStyle" v-if="stockStyle && stockStyle.length>0">
        <td>{{style.cname}}</td>
        <td>{{style.remark}}</td>
        <td class="progress-box"><span class="progress" :style="'width:'+ Math.ceil(Math.abs(style.value))+'%;'" :class="redbg">{{Math.round(style.value)}}</span>
        </td>

      </tr>
      <tr v-if="stockStyle.length<=0" class="tr-no2 ">
        <td></td>
        <td class="no-data no-data1"></td>
        <td></td>
      </tr>
    </table>
  </div>
  <div class="leading-plate">
    <div class="bull-head">领先板块</div>
    <div class="topic">
      <table class="style-table-box topic-box" v-for="(topics,key,index) of topicAndIndustry" v-if="index===1">
        <tr>
          <td v-for="(item,index) in tabledata.th2" class="lightcolor">
            {{item}}
          </td>
        </tr>

        <tr v-for="topic of topics" class="topic-tr" v-if="topics && topics.length>0">
          <td>
            <router-link :to="{name:'topicDetail',params:{topicId:topic.topicCode}}" target="_blank">
              {{topic.topicName===null?'--':topic.topicName}}
            </router-link>
          </td>
          <td>{{topic.topicMarket===null || topic.topicMarket.heatIndex===null?'--':Math.round(topic.topicMarket.heatIndex)}}</td>
          <td v-z3-updowncolor="topic.topicMarket===null || topic.topicMarket.chngPct===null?'--':topic.topicMarket.chngPct">
            {{topic.topicMarket===null || topic.topicMarket.chngPct===null?'--':changeTofixed(topic.topicMarket.chngPct)}}
          </td>
          <td v-z3-updowncolor="topic.topicMarket===null || topic.topicMarket.keepDaysToday===null?'--':topic.topicMarket.keepDaysToday">
            {{topic.topicMarket===null || topic.topicMarket.keepDaysToday===null?'--':checkContinu(topic.topicMarket.keepDaysToday)}}
          </td>
        </tr>
        <tr v-if="topics.length<=0" class="tr-no2">
          <td></td>
          <td class="no-data no-data2"></td>
          <td></td>
        </tr>
      </table>
    </div>
    <div class="industry">
      <table class="style-table-box industry-box" v-for="(industrys,key,index) of topicAndIndustry" v-if="index===0">
        <tr>
          <td v-for="(item,index) in tabledata.th3" class="lightcolor">
            {{item}}
          </td>
        </tr>

        <tr v-for="industry of industrys" class="topic-tr" v-if="industrys && industrys.length>0">
          <td>
            <router-link :to="{name:'industryDetail',params:{industryId:industry.induCode}}" target="_blank">
              {{industry.induName===null?'--':industry.induName}}
            </router-link>
          </td>
          <td>{{industry.induMarket===null || industry.induMarket.heatIndex===null?'--':Math.round(industry.induMarket.heatIndex)}}
          </td>
          <td v-z3-updowncolor="industry.induMarket===null || industry.induMarket.chngPct===null?'--':industry.induMarket.chngPct">
            {{industry.induMarket===null || industry.induMarket.chngPct===null?'--':changeTofixed(industry.induMarket.chngPct)}}
          </td>
          <td v-z3-updowncolor="industry.induMarket===null || industry.induMarket.keepDaysToday===null?'--':industry.induMarket.keepDaysToday">
            {{industry.induMarket===null || industry.induMarket.keepDaysToday===null?'--':checkContinu(industry.induMarket.keepDaysToday)}}
          </td>
        </tr>
        <tr v-if="industrys.length<=0" class="tr-no2">
          <td></td>
          <td class="no-data no-data3"></td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
export default {

  data() {
    return {
      defaultKeep: 'heatIndex',
      iconHelpMsg: '根据近1月涨跌幅排名靠前的股票，通过Barra风格归因算法计算出的牛股风格。风格指数值为0到100，数值越高，风格的偏向性越强。',
      tabledata: {
        th1: ['名称', '风格描述', '风格指数'],
        th2: ['题材名称', '热度指数', '涨跌幅', '涨跌天数'],
        th3: ['行业名称', '热度指数', '涨跌幅', '涨跌天数'],
        td: {}
      }
    }
  },
  props: ['browseIndex'],
  components: {},
  computed: mapState({
    stockStyle: state => state.bullStock.stockStyle,
    topicAndIndustry: state => state.bullStock.topicAndIndustry
  }),
  methods: {
    initStyle() {
      this.$store.dispatch('bullStock/queryStockStyle')
    },
    initTopicAndIndustry() {
      if (this.browseIndex) {
        this.$store.dispatch('bullStock/queryTopicAndIndustry', {
          browseIndex: this.browseIndex
        })
      } else {
        this.$store.dispatch('bullStock/queryTopicAndIndustry', {
          browseIndex: this.defaultKeep
        })
      }
    },
    checkContinu(num) {
      if (num > 0) {
        return num + '连涨'
      } else if (num < 0) {
        return Math.abs(num) + '连跌'
      } else if (num === 0) {
        return '无涨跌'
      }

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
  watch: {
    browseIndex() {
      // this.updateTime && clearInterval(this.updateTime)
      this.$store.dispatch('bullStock/queryTopicAndIndustry', {
        browseIndex: this.browseIndex
      });

    }
  },
  mounted() {
    this.initStyle()
    this.initTopicAndIndustry()
    var _this = this
    this.updateTime = setInterval(function() {
      _this.initStyle()
    }, 600000)
    this.updateTopicandIndu = setInterval(function() {
      _this.initTopicAndIndustry()
    }, 60000)

  },
  destroyed() {
    this.updateTime && clearInterval(this.updateTime)
    this.updateTopicandIndu && clearInterval(this.updateTopicandIndu)
  }
}
</script>
