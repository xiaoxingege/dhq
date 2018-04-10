<style lang="scss" scoped="">
@import "../../assets/scss/style.scss";
.finance-news {
    background-color: $bgConColor;
    height: 100%;
}
.finance-news-list {
    height: 88.5%;
    color: $wordsColorBase;
    padding: 2px 11px 2px 14px;
}
.finance-news-list li {
    height: 11.2%;
    padding-top: 5px;
    border-bottom: 1px solid $lineAndTitleColor;
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
    height: 11.5%;
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
    <NavBar :data="navText" :type="type" v-on:changeType="changeNavType" :styleObject="styleObjOut" :styleLiObj="styleLiObj"></NavBar>
    <p class="more-news">
      <router-link :to="{name:'newslist',query:{type:type}}">更多></router-link>
    </p>
  </div>
  <ul class="finance-news-list">
    <li v-for="(item,index) of newsList" class="c_txt tl clearfix">
      <router-link class="fl newtitle" :to="{name:'newslist',query:{newsIndex:index,type:type}}">{{item.title}}</router-link>
      <span class="fr">{{item.makedate.substring(11)}}</span>
    </li>
  </ul>
</div>
</template>
<script type="text/javascript">
import NavBar from 'components/dhqHome/nav-bar'
export default {
  props: [],
  data() {
    return {
      navText: [
        ['财经要闻', 'ywnews'],
        ['上市公司', 'companynews']
      ],
      type: 'ywnews',
      newsSize: 50,
      newsList: [],
      intervalTime: 10,
      updateNewsPid: null,
      styleObjOut: {
        backgroundColor: '#525a65'
      },
      styleLiObj: {
        width: '85px'
      }
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
      financeNewsData.length = 9
      return financeNewsData
    },
    listedCompanyNewsData: function() {
      const listedCompanyNewsData = this.$store.state.z3touguIndex.listedCompanyNewsList
      listedCompanyNewsData.length = 9
      return listedCompanyNewsData
    }
  },
  methods: {
    getNews: function() {
      if (this.type === 'ywnews') {
        this.$store.dispatch('z3touguIndex/getFinanceNews', {
            size: this.newsSize
          })
          .then(() => {
            this.newsList = this.financeNewsData
          })
      } else if (this.type === 'companynews') {
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
    }
  },
  mounted() {
    this.getNews()
    this.updateNews()
  }
}
</script>
