<style>
@import '../../assets/css/base.css';
.bullBox {
  width: 100%;
  height: 100%;
  color: #c9d0d7;
}

.bullChartHeader {
  padding-left: 15px;
}

.bullChartHeader select {
  width: 185px;
  border: 0;
  height: 24px;
  border-radius: 3px;
  line-height: 24px;
  padding-left: 10px;
  -webkit-appearance: none;
  background: url("../../assets/images/select-arrow.png") no-repeat scroll right center transparent;
  background-position-x: 95%;
  color: #c9d0d7;
  background-color: #1A1D23;
}

.currentTime {
  line-height: 24px;
}

.bullChart {
  padding-top: 15px;
  box-sizing: border-box;
}

.bullChart>div {
  width: 50%;
}

.bullChart>div>p {
  padding-left: 15px;
  font-size: 16px;
}
</style>
<template>
<div class="bullBox">
  <div class="bullChartHeader clearfix">
    浏览指标：<select>
      <option value="induMarket.heatIndex">热度指数</option>
      <option value="induMarket.chngPct">涨跌幅</option>
      <option value="induMarket.keepDaysToday">连续涨跌天数</option>
    </select>
    <span class="fr mr-15 currentTime">{{currentTime}}</span>
  </div>
  <div class="bullChart clearfix">
    <div class="fl">
      <p>题材板块</p>
      <div></div>
    </div>
    <div class="fl">
      <p>行业板块</p>
      <div></div>
    </div>
  </div>
  <div></div>
</div>
</template>
<script>
export default {
  data() {
    return {
      currentTime: ''
    }
  },
  computed: {},
  methods: {
    getTime() {
      var date = new Date()
      var seperator2 = ':'
      var month = date.getMonth() + 1
      var strDate = date.getDate()
      var strHour = date.getHours()
      var strMin = date.getMinutes()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      if (strHour >= 0 && strHour <= 9) {
        strHour = '0' + strHour
      }
      if (strMin >= 0 && strMin <= 9) {
        strMin = '0' + strMin
      }
      var currentdate = date.getFullYear() + '-' + month + '-' + strDate + ' ' + strHour + seperator2 + strMin
      this.currentTime = currentdate
    }
  },
  mounted() {
    const that = this
    setInterval(function() {
      that.getTime()
    }, 1000)
  }

}
</script>