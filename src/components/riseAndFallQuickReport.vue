<style lang="scss" scoped>
@import '../assets/css/reset.css';
.quick-report-wrapper {
    height: 100%;
    font-family: Microsoft Yahei, Helvetica, Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif;
}
.quick-report-wrapper-inner {
    box-sizing: border-box;
    padding: 0.6rem 0.5rem 0;
    width: 100%;
}
.date-title {
    width: 1.8rem;
    height: 0.32rem;
    background: #aaaaaa;
    color: #fff;
    font-size: 0.24rem;
    line-height: 0.32rem;
    text-align: center;
}
.quick-report-list {
    width: 100%;
}
.quick-report-list:first-child > .quick-report-list-item > .quick-report-list-item-content {
    padding-top: 0;
}
.mt {
    margin-top: 0.54rem;
}
.quick-report-list-item {
    width: 100%;
    position: relative;
}
.mark-list {
    width: 0.2rem;
    position: absolute;
    height: 100%;
    top: -0.3rem;
    left: 0;
}
.quick-report-list:first-child > .quick-report-list-item > .mark-list > i {
    top: 0.4rem;
}
.mark-list > i {
    position: absolute;
    display: block;
    top: 1rem;
    left: 0;
    width: 0.2rem;
    height: 0.2rem;
    background: url("https://i0.jrjimg.cn/app-7.0.0/7.2/optional/icon.png");
    background-size: 100% 100%;
}
.quick-report-list > .quick-report-list-item > .mark-list > div {
    top: 0.5rem;
}
.mark-list > div {
    position: absolute;
    width: 0.02rem;
    height: 100%;
    top: 0;
    left: 0.1rem;
    background: url("https://i0.jrjimg.cn/app-7.0.0/7.2/optional/line.png");
    background-repeat: repeat-y;
}
.quick-report-list-item-content {
    width: 100%;
    box-sizing: border-box;
    padding-left: 0.58rem;
    padding-top: 0.6rem;
}
.quick-report-list-item-content > div {
    position: relative;
}
.quick-report-list-item-content > div:first-child {
    line-height: 0.45rem;
    overflow: hidden;
}
.quick-report-list-item-content > div:last-child {
    margin-top: 0.16rem;
    overflow: hidden;
    color: #333;
    font-size: 0.28rem;
    line-height: 0.4rem;
}
.time {
    float: left;
    font-size: 0.32rem;
    color: #888;
}
.action {
    float: left;
    font-size: 0.32rem;
    margin-left: 0.3rem;
}
.stock-name {
    color: #2565CD;
    position: relative;
    line-height: 0.22rem;
}
.rise {
    color: #F54949;
}
.down {
    color: #00B267;
}
</style>

<template>
<div class="quick-report-wrapper">
  <div class="quick-report-wrapper-inner">
    <div class="date-title" v-if="showTradeDay">{{pageData.title}}</div>
    <div class="quick-report-list" :class="!isShowTitle && index === 0 ? 'mt' : '' " v-for="(item, index) in pageData.items">
      <div class="quick-report-list-item">
        <div class="quick-report-list-item-content">
          <div><span class="time">{{item.time}}</span><span class="action" :class="item.lookRise == 1 ? 'rise': 'down'">{{item.signalName}}</span></div>
          <div><span class="stock-name" @click="stockJsBridge(item.stockCode, item.stockName)">{{item.stockName}}</span>{{item.signalInfo}}</div>
        </div>
        <div class="mark-list">
          <div></div>
          <i></i>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import 'whatwg-fetch'
import $ from 'jquery'

export default {
  data() {
    return {
      pageData: {
        items: [],
        min: '',
        max: '',
        title: ''
      },
      isShowTitle: false
    }
  },
  methods: {
    getPageData() {
      let vm = this;
      fetch('https://sslapi.jrj.com.cn/zxhq/sapi/datacenter/query_up_down_limit_news').then(res => {
        return res.json()
      }).then(data => {
        vm.pageData = data.data
      })
    },
    loadMoreData() {
      let vm = this;
      fetch('https://sslapi.jrj.com.cn/zxhq/sapi/datacenter/query_up_down_limit_news?min=' + vm.pageData.min + '&max=' + vm.pageData.max + '&direction=pre').then(res => {
        return res.json()
      }).then(data => {
        vm.pageData.items = vm.pageData.items.concat(data.data.items)
        vm.pageData.min = data.data.min
        vm.pageData.max = data.data.max
      })
    },
    showTitle() {
      let vm = this;
      let today = new Date().getFullYear() + '-' + (new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)) + '-' + (new Date().getDate() < 10 ? '0' + (new Date().getDate()) : (new Date().getDate()))

      fetch('http://glink.genius.com.cn//base/PUB_EXCHANGE_CALENDAR/full=2&filter-MKT_TYPE-int=2&limit=1&filter-ENDDATE-dt=' + today).then(res => {
        return res.json()
      }).then(data => {
        if (data.rows[0].OPEN_CLOSE === 1) {
          vm.isShowTitle = true
        }
      })
    },
    stockJsBridge(stkcode, stkname) {
      let market = '';
      if ((stkcode.slice(0, 3) === '000') || (stkcode.slice(0, 3) === '002') || (stkcode.slice(0, 3) === '300')) {
        market = 'sz'
      } else {
        market = 'sh'
      }
      if (window.jrj && window.jrj.jsCallNative) {
        window.jrj.jsCallNative(100, JSON.stringify({
          stockCode: stkcode,
          stockMarket: market,
          stockName: stkname
        }))
      }
    }
  },
  mounted() {
    let vm = this;
    document.title = '涨跌停快报'

    vm.showTitle()
    vm.getPageData()

    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      var scrollHeight = $(document).height();
      var clientHeight = $(this).height();

      if (scrollTop + clientHeight >= scrollHeight) {
        // 向上滑动 加载更多数据
        vm.loadMoreData()
      } else if (scrollTop <= 0) {
        // 滚动条到顶，请求接口刷新页面
        vm.getPageData()
      }
    })
  }
}
</script>
