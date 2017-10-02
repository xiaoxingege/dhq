<style lang="scss" scoped="">
.finance-news {
    background-color: #141518;
    height: 100%;
}
.finance-news-list {
    height: 85%;
    color: #c9d0d7;
    padding: 11px 11px 11px 14px;
}
.finance-news-list li {
    height: 16.66%;
    padding-top: 8px;
}
.newtitle {
    cursor: pointer;
    color: #c9d0d7;
}
.newtitle:hover {
    color: #1984ea;
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
    color: #808ba1;
}
</style>
<template>
<div class="finance-news">
  <div class="news-top">
    <NavBar :data="navText" :type="type" v-on:changeType="changeNavType"></NavBar>
    <p class="more-news">
      <router-link :to="{name:'newslist',query:{newsId:''}}">更多></router-link>
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
import NavBar from 'components/z3touguhome/nav-bar'
export default {
  props: [],
  data () {
    return {
      navText: [
        ['财经要闻', 'ywnews'],
        ['上市公司', 'companynews']
      ],
      type: 'ywnews',
      newsSize: 6,
      newsList: [],
      intervalTime: 10,
      updateNewsPid: null
    }
  },
  watch: {
    type () {
      this.getNews()
    }
  },
  components: {
    NavBar
  },
  computed: {
    financeNewsData: function () {
      const financeNewsData = this.$store.state.z3touguIndex.financeNewsList
      return financeNewsData
    },
    listedCompanyNewsData: function () {
      const listedCompanyNewsData = this.$store.state.z3touguIndex.listedCompanyNewsList
      return listedCompanyNewsData
    }
  },
  methods: {
    getNews: function () {
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
    changeNavType (data) {
      this.type = data
    },
    updateNews: function () {
      const _this = this
      if (this.updateNewsPid) {
        clearInterval(this.updateNewsPid)
      } else {
        this.updateNewsPid = setInterval(function () {
          _this.getNews()
        }, 60 * 1000 * _this.intervalTime)
      }
    }
  },
  mounted () {
    this.getNews()
    this.updateNews()
  }
}
</script>
