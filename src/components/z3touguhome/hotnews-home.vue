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
}
.newtitle {
    cursor: pointer;
    color: $wordsColorBase;
}
.newtitle:hover {
    color: $blueWordsColor;
}
.finance-news-list > li:before {
    float: left;
    content: "";
    background: #ccc;
    width: 6px;
    height: 6px;
    overflow: hidden;
    display: inline-block;
    margin: 6px 5px 0 0;
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
    <p class="more-news">
      <router-link :to="{name:'newslist',query:{type:type}}">更多></router-link>
    </p>
  </div>
  <ul class="finance-news-list">
    <li v-for="(item,index) of newsList" class="c_txt tl clearfix">
      <router-link class="fl newtitle" :to="{name:'detailPages',params:{id:item.newsId, detailType:'news'}}" target="_blank">{{item.title}}</router-link>
      <span class="fr">{{timestampToTime(item.declareDate)}}</span>
    </li>
  </ul>
</div>
</template>
<script type="text/javascript">
import NavBar from 'components/z3touguhome/nav-bar'
export default {
  props: [],
  data() {
    return {
      navText: [
        ['智头条', 'ztt'],
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
        }, 60 * 1000 * _this.intervalTime)
      }
    },
    timestampToTime: function(timestamp) {
      const date = new Date(timestamp); // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
      const h = date.getHours() + ':';
      const m = date.getMinutes() + ':';
      const s = date.getSeconds();
      return h + m + s;
    }
  },
  mounted() {
    this.getNews()
    this.updateNews()
  }
}
</script>
