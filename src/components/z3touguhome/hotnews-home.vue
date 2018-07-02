<style lang="scss" scoped="">
@import "../../assets/scss/style.scss";
.finance-news {
    background-color: $bgConColor;
    height: 100%;
}
.finance-news-list {
    height: 85%;
    color: $wordsColorBase;
    padding: 11px 11px 11px 14px;
}
.finance-news-list li {
    height: 16.66%;
    padding-top: 8px;
    position: relative;
    padding-right: 50px;
    padding-left: 11px;
}
.newtitle {
    cursor: pointer;
    color: $wordsColorBase;
    display: inline-block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.newtitle:hover {
    color: $blueWordsColor;
}
.news-time {
    position: absolute;
    top: 8px;
    right: 0;
    display: inline-block;
    width: 50px;
}
.finance-news-list > li:before {
    float: left;
    content: "";
    background: #ccc;
    width: 6px;
    height: 6px;
    overflow: hidden;
    display: inline-block;
    position: absolute;
    top: 13px;
    left: 0;
    border-radius: 50%;
}
,
.news-top {
    height: 15%;
    position: relative;
}
.more-news {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
}
.more-news a {
    color: $grayWordsColor;
}
</style>
<template>
<div class="finance-news">
  <div class="news-top">
    <NavBar :data="navText" :type="type" v-on:changeType="changeNavType"></NavBar>
    <p class="more-news" @click="toZInfo(type)">
      <!--  <router-link :to="{name:'wisdomHeadlines'}" target="_blank" v-if="type === 'ztt'">更多></router-link>
      <router-link :to="{name:'listedCompany'}" target="_blank" v-if="type === 'ssgs'">更多></router-link>-->
      <a>更多</a>
    </p>
  </div>
  <ul class="finance-news-list">
    <li v-for="(item,index) of newsList" class="c_txt tl clearfix">
      <router-link class="fl newtitle" :to="{name:'detailPages',params:{id:item.newsId, detailType:'news'}}" target="_blank">{{item.title}}</router-link>
      <span class="fr news-time" v-z3-time="{ time:item.declareDate+ '' , type: '2' }"></span>
    </li>
  </ul>
</div>
</template>
<script type="text/javascript">
import NavBar from 'components/z3touguhome/nav-bar'
import {
  ctx
} from '../../z3tougu/config'
export default {
  props: [],
  data() {
    return {
      navText: [
        ['智头条', 'ztt'],
        ['7*24小时','sevenhour'],
        ['上市公司', 'ssgs']
      ],
      type: 'ztt',
      newsSize: 6,
      newsList: [],
      intervalTime: 10,
      updateNewsPid: null
    }
  },
  watch: {
    type() {
      this.getNews()
    }
  },
  components: {
    NavBar
  },
  computed: {
    financeNewsData: function() {
      const financeNewsData = this.$store.state.z3touguIndex.financeNewsList
      return financeNewsData
    },
    listedCompanyNewsData: function() {
      const listedCompanyNewsData = this.$store.state.z3touguIndex.listedCompanyNewsList
      return listedCompanyNewsData
    },
    sevenHourNews:function(){
        const sevenHourNews = this.$store.state.z3touguIndex.sevenhourNews
        return sevenHourNews
    }
  },
  methods: {
    getNews: function() {
      if (this.type === 'ztt') {
        this.$store.dispatch('z3touguIndex/getFinanceNews', {
            size: this.newsSize
          })
          .then(() => {
            this.newsList = this.financeNewsData
          })
      } else if (this.type === 'ssgs') {
        this.$store.dispatch('z3touguIndex/getListedCompanyNews', {
            size: this.newsSize
          })
          .then(() => {
            this.newsList = this.listedCompanyNewsData
          })
      }else if(this.type === 'sevenhour'){
          this.$store.dispatch('z3touguIndex/getSevenNews', {
              size: this.newsSize
          }).then(() => {
             this.newsList = this.sevenHourNews
          })

      }
    },
    changeNavType(data) {
      this.type = data
    },
    updateNews: function() {
      const _this = this
      if (this.updateNewsPid) {
        clearInterval(this.updateNewsPid)
      } else {
        this.updateNewsPid = setInterval(function() {
          _this.getNews()
        }, 6 * 1000 * _this.intervalTime)
      }
    },
    timestampToTime: function(timestamp) {
      const date = new Date(timestamp); // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      let minute = date.getMinutes();
      let second = date.getSeconds();
      minute = minute < 10 ? ('0' + minute) : minute;
      second = second < 10 ? ('0' + second) : second;
      return h + ':' + minute + ':' + second;
    },
    toZInfo: function(type) {
      if (this.type === 'ztt') {
        window.open(ctx + '/zInfo/wisdomHeadlines')
      } else if (this.type === 'ssgs') {
        window.open(ctx + '/zInfo/listedCompany')
      }else if(this.type === 'sevenhour'){
          window.open(ctx + '/zInfo/newsFlash')
      }
    }
  },
  mounted() {
    this.getNews()
    this.updateNews()
  }
}
</script>