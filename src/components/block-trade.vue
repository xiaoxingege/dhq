<style>
@import '../assets/css/reset.css';
.equity-trading {
  box-sizing: border-box;
  position: relative;
  font-family: Microsoft Yahei, Helvetica, Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif;
}

.equity-trading .block {
  background: #fff;
  margin-bottom: 0.2rem
}

.equity-trading .detail {
  margin: 0;
}

.title {
  height: 0.88rem;
  line-height: 0.88rem;
  padding: 0 0.3rem;
  border-bottom: 1px solid #E6E6E6;
  overflow: hidden;
  position: relative;
}

.red-block {
  height: 0.26rem;
  width: 0.04rem;
  background: red;
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -0.13rem;
}

.title h2 {
  float: left;
  font-size: 0.3rem;
  color: #333333;
}

.title-right {
  float: right;
  margin: 0.25rem 0;
  width: 2.18rem;
  height: 0.37rem;
  box-sizing: border-box;
  line-height: 0.37rem;
  position: relative;
}

.title-right input {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2.18rem;
  height: 0.37rem;
  box-sizing: border-box;
  line-height: 0.37rem;
  text-align: left;
  font-size: 0.26rem;
  color: #888888;
  outline: none;
  border: none;
  background: rgba(255, 255, 255, 0) url('http://i0.jrjimg.cn/optional/date.png') 1.78rem -0.01rem no-repeat;
  background-size: 0.4rem 0.37rem;
}

.detail-title {
  height: 0.6rem;
  line-height: 0.6rem;
  background: #FAFAFA;
}

.detail-title .detail-title-lists {
  padding: 0 0.3rem;
  overflow: hidden;
}

.detail-title .detail-title-lists li {
  float: left;
  text-align: left;
  font-size: 0.22rem;
  color: #aaa;
  position: relative;
}

.detail-title .detail-title-lists .r {
  text-align: right;
}

.detail-lists {}

.detail-lists li {
  padding: 0 0.3rem;
  height: 1rem;
  line-height: 1rem;
  border-bottom: 0.01rem solid #E6E6E6;
  overflow: hidden;
}

.detail-lists li span,
.detail-lists li p {
  float: left;
  text-align: right;
  font-size: 0.28rem;
  color: #333;
}

.detail-lists li p {
  text-align: left;
}

.detail-lists li .green {
  color: #26BE6A;
}

.detail-lists li .red {
  color: #FF4040;
}

.detail-more {
  height: 1.36rem;
  line-height: 1.36rem;
}

.detail-more h3 {
  font-size: 0.28rem;
  color: #3996F2;
  text-align: center;
}

.detail-more h4 {
  font-size: 0.28rem;
  color: #aaa;
  text-align: center;
}

.equity-trading .block {
  background: #fff;
  margin-bottom: 0.2rem
}

.equity-trading .detail {
  margin: 0;
}

.title {
  height: 0.88rem;
  line-height: 0.88rem;
  padding: 0 0.3rem;
  border-bottom: 1px solid #E6E6E6;
  overflow: hidden;
  position: relative;
}

.red-block {
  height: 0.26rem;
  width: 0.04rem;
  background: red;
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -0.13rem;
}

.title h2 {
  float: left;
  font-size: 0.3rem;
  color: #333333;
}

.title-right {
  float: right;
  margin: 0.25rem 0;
  width: 2.18rem;
  height: 0.37rem;
  box-sizing: border-box;
  line-height: 0.37rem;
  position: relative;
}

.title-right input {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2.18rem;
  height: 0.37rem;
  box-sizing: border-box;
  line-height: 0.37rem;
  text-align: left;
  font-size: 0.26rem;
  color: #888888;
  outline: none;
  border: none;
  background: rgba(255, 255, 255, 0) url('http://i0.jrjimg.cn/optional/date.png') 1.78rem -0.01rem no-repeat;
  background-size: 0.4rem 0.37rem;
}

.detail-title {
  height: 0.6rem;
  line-height: 0.6rem;
  background: #FAFAFA;
}

.detail-title .detail-title-lists {
  padding: 0 0.3rem;
  overflow: hidden;
}

.detail-title .detail-title-lists li {
  float: left;
  text-align: left;
  font-size: 0.22rem;
  color: #aaa;
  position: relative;
}

.detail-title .detail-title-lists .r {
  text-align: right;
}

.detail-lists {}

.detail-lists li {
  padding: 0 0.3rem;
  height: 1rem;
  line-height: 1rem;
  border-bottom: 0.01rem solid #E6E6E6;
  overflow: hidden;
}

.detail-lists li span,
.detail-lists li p {
  float: left;
  text-align: right;
  font-size: 0.28rem;
  color: #333;
}

.detail-lists li p {
  text-align: left;
}

.detail-lists li .green {
  color: #26BE6A;
}

.detail-lists li .red {
  color: #FF4040;
}

.detail-more {
  height: 1.36rem;
  line-height: 1.36rem;
}

.detail-more h3 {
  font-size: 0.28rem;
  color: #3996F2;
  text-align: center;
}

.detail-more h4 {
  font-size: 0.28rem;
  color: #aaa;
  text-align: center;
}

.pika-single {
  z-index: 9999;
  display: block;
  position: relative;
  width: 100%;
  color: #333;
  background: #fff;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.pika-single.is-hidden {
  display: none;
}

.pika-single.is-bound {
  position: absolute;
}

.pika-title {
  position: relative;
  text-align: center;
  height: 1.05rem;
  margin-bottom: 0.14rem;
  font-size: 0.32rem;
}

.pika-label {
  display: inline-block;
  position: relative;
  z-index: 9999;
  overflow: hidden;
  margin: 0.3rem 0;
  font-size: 0.32rem;
  height: 0.45rem;
  line-height: 0.45rem;
  font-weight: bold;
  background-color: #fff;
}

.pika-title select {
  cursor: pointer;
  position: absolute;
  z-index: 9998;
  margin: 0;
  left: 0;
  top: 5px;
  filter: alpha(opacity=0);
  opacity: 0;
}

.pika-prev,
.pika-next {
  display: block;
  cursor: pointer;
  position: relative;
  outline: none;
  border: 0;
  padding: 0;
  width: 0.13rem;
  height: 0.16rem;
  background-color: transparent;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  white-space: nowrap;
  text-indent: 100%;
  overflow: hidden;
  opacity: .9;
  *position: absolute;
  *top: 0;
}

.pika-prev:hover,
.pika-next:hover {
  opacity: 1;
}

.pika-prev,
.is-rtl .pika-next {
  position: absolute;
  top: 0.44rem;
  left: 2.4rem;
  background-image: url('http://i0.jrjimg.cn/optional/left.png');
  *left: 0;
}

.pika-next,
.is-rtl .pika-prev {
  position: absolute;
  top: 0.44rem;
  right: 2.4rem;
  float: right;
  background-image: url('http://i0.jrjimg.cn/optional/right.png');
  *right: 0;
}

.pika-prev.is-disabled,
.pika-next.is-disabled {
  cursor: default;
  opacity: .2;
}

.pika-select {
  display: inline-block;
  *display: inline;
}

.pika-table {
  width: 100%;
  border-spacing: 0;
  border: 0;
  padding-bottom: 0.07rem;
}

.pika-table tr {
  overflow: hidden;
}

.pika-table th,
.pika-table td {
  float: left;
  width: 1.07rem;
}

.pika-table td {
  height: 0.8rem;
  box-sizing: border-box;
}

.pika-table th {
  color: #aaa;
  font-size: 0.24rem;
  ;
  line-height: 0.33rem;
  height: 0.33rem;
  .pika-button text-align: center;
  margin-bottom: 0.12rem;
}

.pika-button {
  float: left;
  cursor: pointer;
  outline: none;
  border: 0;
  margin: 0.04rem 0.175rem;
  width: 0.72rem;
  height: 0.72rem;
  line-height: 0.72rem;
  color: #333;
  background: #fff;
  font-size: 0.28rem;
  text-align: center;
}

.is-today .pika-button {
  color: #FF4040;
  font-weight: bold;
}

.is-selected .pika-button {
  color: #fff;
  font-weight: bold;
  background: #FF4040;
  border-radius: 50%;
}

.is-disabled .pika-button {
  pointer-events: none;
  cursor: default;
  color: #999;
  opacity: .3;
}

.pika-button:hover {
  color: #fff !important;
  background: #FF4040 !important;
  box-shadow: none !important;
  border-radius: 50% !important;
}

.mask {
  display: none;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0.88rem;
  left: 0;
  z-index: 100;
}

.show {
  display: block!important;
}

.dataEmpty {
  height: 1rem;
  line-height: 1rem;
  font-size: 0.28rem;
  color: #aaa;
  text-align: center;
}
</style>

<template>
<div class="equity-trading">
  <div class="block detail">
    <div class="title">
      <span class="red-block"></span>
      <h2>大宗交易明细</h2>
      <div class="title-right">
        <input id="datepicker" type="text" :value="date" ref="inputDate" readonly/>
      </div>
    </div>
    <div class="detail-content">
      <div class="detail-title">
        <ul class="detail-title-lists">
          <li style="width:1.49rem">股票名称</li>
          <li class="r" style="width:1.5rem;">成交价</li>
          <li class="r" style="width:2.39rem;">成交量（万股）</li>
          <li class="r" style="width:1.5rem;">折/溢价率</li>
        </ul>
      </div>
      <div v-if="detailList.length === 0" class="dataEmpty">
        暂无数据
      </div>
      <ul class="detail-lists" v-if="detailList">
        <li v-for="item in detailList" @click="clickLi(item)">
          <p style="width:1.49rem">{{item[2]}}</p>
          <span style="width:1.5rem;">{{item[4].toFixed(2)}}</span>
          <span style="width:2.21rem;">{{item[6].toFixed(2)}}</span>
          <span :class="addcolor(item[5])" style="width:1.68rem;">{{item[5] | covert}}</span>
        </li>
      </ul>
      <div class="detail-more" v-if="detailList.length > 0">
        <h3 v-if="detailDataFlag===true" @click="inquireMore()">查看更多数据项 ></h3>
        <h4 v-if="detailDataFlag===false">没有更多数据了</h4>
      </div>
    </div>
  </div>
  <div :class="['mask',{'show': openMask}]" @click="maskclose()">

  </div>

</div>
</template>

<script>
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
import 'whatwg-fetch'
window.moment = require('moment')
const Pikaday = require('../assets/plugins/calendar/calendar.js')

export default {
  data() {
    return {
      clientH: document.documentElement.clientHeight,
      currentDate: '',
      date: '', // 初始日期
      detailList: [],
      pn: '1', // 页码
      ps: '20', // 每页条数
      openMask: false, // false 蒙版关闭  true  蒙版打开
      detailDataFlag: true, // 1 有数据 0无数据
      picker: null,
      close: false,
      select: false
    }
  },
  beforecreated() {

  },
  created() {
    document.title = '大宗交易明细'
  },
  mounted() {
    var _this = this
    $('.equity-trading').css('min-height', this.clientH)
    this.getDetailList()
    this.addcalendar()


    this.$watch('date', date => {
      if (date) {
        _this.picker.setDate(date)
      }
    })

  },
  filters: {
    covert(d) {
      if (d || d === 0) {
        return d.toFixed(2) + '%'
      } else {
        return '--'
      }
    }
  },
  methods: {
    maskclose() {
      this.picker.hide()
      this.close = true
    },
    addcalendar() {
      var _this = this
      this.picker = new Pikaday({
        field: document.getElementById('datepicker'),
        firstDay: 0,
        minDate: new Date('2000-01-01'),
        maxDate: new Date('2030-12-31'),
        weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        yearRange: [2000, 2030],
        disableWeekends: true,
        onOpen: function() {
          _this.openMask = true
          event.preventDefault();
        },
        onClose: function() {
          _this.openMask = false
          _this.pn = 1
          _this.date = _this.$refs.inputDate.value
          _this.getDetailList()
          _this.close = true
        }

      });
    },
    addcolor(v) {
      if ((v + '').indexOf('-') !== -1) {
        return 'green'
      } else if (v === 0 || !v) {
        return ''
      } else {
        return 'red'
      }
    },
    inquireMore() {
      this.pn++
        var url = 'http://stock.jrj.com.cn/action/dazong/getBlockTradesStock.jspa?vname=dazongStock&order2=asc&sort2=stockcode&enddate=' + this.date + '&order=asc&sort=stockcode&page=' + this.pn + '&psize=' + this.ps
      console.log(url)
      $.ajax({
        url: url,
        type: 'get',
        cache: false,
        dataType: 'script',
        jsonp: 'callback',
        success: () => {
          if (window.dazongStock.data.length === 0) {
            this.detailDataFlag = false
          } else {
            this.detailList = this.detailList.concat(window.dazongStock.data)
            if (window.dazongStock.data.length < this.ps) {
              this.detailDataFlag = false
            } else {
              this.detailDataFlag = true
            }
          }
        },
        error: function() {
          console.log('error');
        }
      });
    },
    mode() {

    },
    getDetailList() {
      // http://stock.jrj.com.cn/action/dazong/getBlockTradesStock.jspa?vname=dazongStock&order2=asc&sort2=stockcode&enddate=2017-10-17&order=asc&sort=stockcode&page=1&psize=20&_dc=1509343987308
      var url = 'http://stock.jrj.com.cn/action/dazong/getBlockTradesStock.jspa?vname=dazongStock&order2=asc&sort2=stockcode&enddate=' + this.date + '&order=asc&sort=stockcode&page=' + this.pn + '&psize=' + this.ps
      console.log(url)
      $.ajax({
        url: url,
        type: 'get',
        cache: false,
        dataType: 'script',
        jsonp: 'callback',
        success: () => {
          if (window.dazongStock.data.length === 0) {
            this.detailDataFlag = false
            this.detailList = []
          } else {
            this.detailList = window.dazongStock.data
            this.date = this.detailList[0][0];
            if (window.dazongStock.data.length < this.ps) {
              this.detailDataFlag = false
            } else {
              this.detailDataFlag = true
            }
          }
        },
        error: function() {
          console.log('error');
        }
      });
    },
    clickLi(li) {
      window.location.href = 'http://itougu.jrj.com.cn/h5/block-single?stockcode=' + li[1] + '&stockname=' + li[2]
      // window.location.href='http://localhost:8081/dist/h5/block-single.html?stockcode='+li[1]+'&stockname='+li[2]
    }
  }
}
</script>
