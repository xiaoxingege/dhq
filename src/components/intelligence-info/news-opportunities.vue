<template>
<!-- 机会挖掘 -->
<div class="news-opportunities" @scroll="getScrollTop($event)">
  <div class="news-wrapper">
    <div class="news-nav-top">
      <a href="javascript:;" :class="{active: index === typeIndex}" class="nav-item" v-for="(item,index) in navData" @click="selectType(index)">{{item.name}}</a>
    </div>
    <ul class="news-list">
      <li class="display-box" v-for="item in newsOpportunities">
        <div class="leftTime">
          <div class="txt" v-z3-updowncolor="1" >
            <span class="name">深圳特别合作区</span>
            <p>+0.01%</p>
          </div>
        </div>
        <div class="news-list-item box-flex-1">
          <div>
            <span class="fr time" v-z3-time="{ time:item.declareDate, type: '1' }"></span>
            <router-link :to="{name:'detailPages',params:{id : item.newsId, detailType:'news'}}" target="_blank">
              <span class="name">{{item.title}}</span>
            </router-link>
            </div·>
            <div class="con-txt">
              <router-link :to="{name:'detailPages',params:{id : item.newsId, detailType:'news'}}" target="_blank">
                <span>{{cutStr(item.summary,350)}}</span>
              </router-link>
            </div>
            <p class="source">( {{item.srcName}} )</p>
          </div>
      </li>
    </ul>
    <div v-if="loadingShow"   class="pullUptoRefresh"><div class="loadIcon"><span class="load_circle loadAnimateInfinite"></span></div><p class="tc">正在加载...</p></div>
    <p class="tc mt-10 mb-20">
      <a v-if="!noData && newsOpportunities.length >= 8 &&  loadingShow != true" href="javascript:;" class="loadMore" @click="loadMore">加载更多</a>
      <p v-if="noData"  class="tc mt-10 loadMore mb-20">数据已加载完</p>
      <p v-if="newsOpportunities.length===0 && loadingShow != true"  class="tc mt-10 loadMore"><img src="../../assets/images/empty_data.png" alt="" /></p>
    </p>
    </div>
  </div>
</div>

</template>

<script>
  let intervalId = ''
  import 'whatwg-fetch'
  import { cutString } from 'utils/date'
  import { mapState } from 'vuex'
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        page: 0,
        totalPage: 200,
        noData: false,
        updateNewsPid: '',
        intervalTime: 60000,
        scrollTop: 0,
        innerHeight: window.innerHeight,
        typeIndex: 0,
        navData: [{ name: '全部机会',value: '0' },
                  { name: '个股机会',value: '0' },
                  { name: '板块机会', value: '0' },
                  { name: '产品机会', value: '0' }]
      }
    },
    mounted() {
      this.loadListInit()
      this.updateNews()
    },
    computed: {
      ...mapState([
        'loadingShow',
        'pageSize',
        'newsOpportunities',
        'newTime',
        'isTops'
      ]),
      ...mapGetters({
        loadingShow: 'loadingShow',
        pageSize: 'pageSize',
        newsOpportunities: 'newsOpportunities',
        newTime: 'newTime',
        isTops:'isTops'
      })
    },
    methods: {
      loadListInit() {
          this.$store.dispatch('getAllChance', { page: this.page, isTop: false, newTime: '' })
      },
      loadMore() {
        this.page++
        this.typeList(this.typeIndex)
        var count = Math.ceil(this.totalPage / this.pageSize)
        if (count === this.page + 1) {
          this.noData = true
        }
      },
      updateNews() {
        intervalId = setInterval(() => {
          console.log('启动定时器')
          console.log(intervalId)
          this.typeList(this.typeIndex)
        },this.intervalTime)
      },
      getScrollTop(e) {
        this.scrollTop = e.target.scrollTop * 2
        if (this.scrollTop >= this.innerHeight) {
          this.$store.commit('setIsTop',false)
          if (intervalId) {
            console.log(intervalId)
            console.log('清除定时器')
            clearInterval(intervalId)
          }
        }
        if (this.scrollTop === 0) {
          this.$store.commit('setIsTop',true)
          this.updateNews()
        }
      },
      cutStr(str, len) {
        if (str === '' || str === null) str = '--'
        return cutString(str, len)
      },
      upAndDownColor(flag) {
        if (flag > 0) {
          return 'upColor'
        } else if (flag < 0) {
          return 'downColor'
        } else {
          return ''
        }
      },
      status(txt) {
        if (txt === '利好' || txt === '增持' || txt === '买入') {
          return 'upBgColor'
        } else if (txt === '利空' || txt === '卖出') {
          return 'downBgColor'
        } else {
          return ''
        }
      },
      selectType(index) {
        if(intervalId) {
          console.log("清除定时器"+intervalId)
          clearInterval(this.updateNewsPid)
        }
        this.$store.commit('setNewsOpportunitiesInit',[])
        this.typeIndex = index
        this.page = 0
        this.typeList(this.typeIndex)
      },
      typeList(type){
        if(type === 0){
          this.$store.dispatch('getAllChance', { page: this.page, isTop: this.isTops, newTime: this.newTime })
        }else if(type ===1){
          this.$store.dispatch('getStockChance', { page: this.page, isTop: this.isTops, newTime: this.newTime })
        }else if(type ===2){
          this.$store.dispatch('getTopicChance', { page: this.page, isTop: this.isTops, newTime: this.newTime })
        }else if(type ===3){
          this.$store.dispatch('getProductChance', { page: this.page, isTop: this.isTops, newTime: this.newTime })
        }
      }
    },
    watch: {

    },
    filters: {
      isNull(value) {
        return value === null || value === '' ? '--' : value
      },
      filterNum(value, type) {
        return value === null || value === '' ? '--' : value.toFixed(2) + type
      },
      convert(value) {
        return value === '新闻' ? '资讯' : value;
      }
    },
    destroyed() {
      if(intervalId) {
        clearInterval(this.updateNewsPid)
      }
    }
  }
</script>
<style lang='scss' scoped>
  @import '../../assets/scss/style.scss';
  @import '../../assets/css/reset.css';
  @import '../../assets/css/base.css';
  .news-opportunities {
      color: $wordsColorBase;
      height:100%;
      overflow: auto;
      font-size: 12px;
  }
  .news-nav-top {
      height: 26px;
      background-color: #1a1b1f;
      border: 1px solid #0d1112;
      border-bottom-color: #23272c;
      font-size: 0;
      padding-left: 4px;
      .nav-item {
          display: inline-block;
          font-size: 12px;
          background-color: #23272c;
          height: 24px;
          line-height: 24px;
          margin-right: 2px;
          color: $wordsColorBase;
          padding: 0 10px;
          margin-top: 2px;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          &.active {
              background-color: #2e4465;
          }
      }
  }
  .leftTime {
      position: relative;
      width: 130px;
      background-color: #26272d;
      &.upColor {
        a {
          color: $upColor;
        }
        border-color: $upColor;
      }
      &.downColor {
        a {
          color: $downColor;
        }
        border-color: $downColor;
      }
      .name,
      p {
          font-size: 16px;
      }
      .txt {
          width: 100%;
          text-align: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
      }
      p {
          text-align: center;
      }
  }
  .grid-box {
      .grid-right {
          width: 370px;
      }
  }
  .con-txt,
  .labels,
  .name,
  .stock {
      font-size: 12px;
  }
  .name {
      font-weight: bold;
  }
  .source {
      color: #656766;
  }
  .labels {
      display: inline-block;
      padding: 0 6px;
      height: 17px;
      margin-right: 5px;
      background-color: #525a65;
  }
  .con-txt {
      margin: 8px 0 0;
      line-height: 18px;
  }
  .news-list {
      li{
        margin-bottom: 2px;
      }
      .news-list-item {
          // border: 1px solid #0d1112;
          background-color: #1a1b1f;
          padding: 10px 10px 10px 5px;
          a {
              color: $wordsColorBase;
              &:hover {
                  color: #2388da;
              }
          }
      }
  }
  .stock {
      font-size: 0;
      .stock-item {
          font-size: 12px;
          display: inline-block;
          border: 1px solid #c9d0d7;
          height: 17px;
          padding: 0 8px;
          border-radius: 10px;
          margin-right: 20px;
          a {
              color: #fff;
          }
          span {
              margin-left: 8px;
              &:first-child {
                  margin-left: 0;
              }
          }
          &.upColor {
              a {
                  color: $upColor;
              }
              border-color: $upColor;
          }
          &.downColor {
              a {
                  color: $downColor;
              }
              border-color: $downColor;
          }
      }
  }
  .upBgColor {
      background-color: $upColor;
  }
  .downBgColor {
      background-color: $downColor;
  }
  .loadMore,
  .time {
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
