<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style.scss";
.news-list-wrap,
.news-list-wrap * {
    box-sizing: border-box;
    font-size: $fontSizeBase;
    font-family: "Microsoft YaHei";
}
/*html,body,.app{height:100%;}*/
p {
    margin: 0;
}
.news-list-wrap {
    padding: 1px;
    min-width: 1217px;
    min-height: 100%;
    background-color: $bgDeepColor;
}
.news-list-wrap > div {
    width: 50%;
    min-height: 100%;
}
.news-list {
    background-color: $bgConColor;
    overflow: auto;
}
.news-list-con {
    color: $wordsColorBase;
    padding: 5px 0;
    overflow: auto;
}
.news-list-con li {
    height: 25px;
    line-height: 25px;
    padding: 0 20px;
}
.news-list-con li:nth-of-type(10n+0) {
    margin-bottom: 20px;
}
.news-list-title {
    cursor: pointer;
    color: $wordsColorBase;
}
.news-list-title:hover {
    color: $blueWordsColor;
}
.news-list-con > li:before {
    float: left;
    content: "";
    background: #ccc;
    width: 4px;
    height: 4px;
    overflow: hidden;
    display: inline-block;
    margin: 10px 5px 0 0;
    border-radius: 50%;
}
.news-active {
    background-color: $hoverBgColor;
}
.news-list-top {
    height: 25px;
}
.news-list-top .top-nav {
    padding-left: 0;
}
</style>
<template>
<div class="news-list-wrap clearfix" :style="{height:wrapHeight+'px'}">
  <div class="news-list fl" :style="{height:wrapHeight-2+'px'}">
    <div class="news-list-top">
      <NavBar :data="navText" :type="type" v-on:changeType="changeNavType" :styleObject="styleObject" :styleLiObj="styleLiObj"></NavBar>
    </div>
    <ul class="news-list-con" :style="{height:wrapHeight-2-25+'px'}">
      <li v-for="(item,index) of newsList" class="c_txt tl clearfix news-con-li" v-on:click="focusLi(item.iiid,index)" v-bind:class="item.iiid === newsId?'news-active':''">
        <a class="fl news-list-title">【{{item.source}}】{{item.title}}</a>
        <span class="fr">{{item.makedate.substring(11)}}</span>
      </li>
    </ul>
  </div>
  <div class="news-detail fl" :style="{height:wrapHeight-2+'px'}">
    <newsDetail :newsId="newsId"></newsDetail>
  </div>
</div>
</template>
<script type="text/javascript">
import NavBar from 'components/dhqHome/nav-bar'
import newsDetail from 'components/dhqHome/news-details'
export default {
  props: [],
  data() {
    return {
      navText: [
        ['财经要闻', 'ywnews'],
        ['上市公司', 'companynews']
      ],
      type: this.$route.query.type || 'ywnews',
      newsSize: 50,
      newsList: [],
      wrapHeight: window.innerHeight,
      newsId: '',
      newsIndex: this.$route.query.newsIndex,
      // newsId: ''
      intervalTime: 10,
      updateNewsPid: null,
      styleLiObj: {
        width: '85px'
      },
      styleObject: {
        borderRight: '1px solid #141518',
        borderRadius: '0px',
        backgroundColor: '#525a65'
      }
    }
  },
  watch: {
    type() {
      this.changeNews()
    }
  },
  components: {
    NavBar,
    newsDetail
  },
  computed: {
    financeNewsData: function() {
      const financeNewsData = this.$store.state.dhqIndex.financeNewsList
      return financeNewsData
    },
    listedCompanyNewsData: function() {
      const listedCompanyNewsData = this.$store.state.dhqIndex.listedCompanyNewsList
      return listedCompanyNewsData
    }
  },
  methods: {
    getNews: function() {
      if (this.type === 'ywnews') {
        this.$store.dispatch('dhqIndex/getFinanceNews', {
            size: this.newsSize
          })
          .then(() => {
            this.newsList = this.financeNewsData
            if (this.newsIndex) {
              this.newsId = this.financeNewsData[this.newsIndex].iiid
            } else {
              this.newsId = this.financeNewsData[0].iiid
            }
          })
      } else if (this.type === 'companynews') {
        this.$store.dispatch('dhqIndex/getListedCompanyNews', {
            size: this.newsSize
          })
          .then(() => {
            this.newsList = this.listedCompanyNewsData
            if (this.newsIndex) {
              this.newsId = this.listedCompanyNewsData[this.newsIndex].iiid
            } else {
              this.newsId = this.listedCompanyNewsData[0].iiid
            }
          })
      }
    },
    changeNews: function() {
      if (this.type === 'ywnews') {
        this.$store.dispatch('dhqIndex/getFinanceNews', {
            size: this.newsSize
          })
          .then(() => {
            this.newsList = this.financeNewsData
            this.newsId = this.financeNewsData[0].iiid
          })
      } else if (this.type === 'companynews') {
        this.$store.dispatch('dhqIndex/getListedCompanyNews', {
            size: this.newsSize
          })
          .then(() => {
            this.newsList = this.listedCompanyNewsData
            this.newsId = this.listedCompanyNewsData[0].iiid
          })
      }
    },
    changeNewsUpdate: function() {
      if (this.type === 'ywnews') {
        this.$store.dispatch('dhqIndex/getFinanceNews', {
            size: this.newsSize
          })
          .then(() => {
            this.newsList = this.financeNewsData
          })
      } else if (this.type === 'companynews') {
        this.$store.dispatch('dhqIndex/getListedCompanyNews', {
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
          _this.changeNewsUpdate()
        }, 60 * 1000 * _this.intervalTime)
      }
    },
    focusLi: function(id, index) {
      this.newsId = id
    }
  },
  mounted() {
    this.getNews()
    this.updateNews()
  }
}
</script>
