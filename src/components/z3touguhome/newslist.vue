<style lang="scss" scoped="">
* {
    box-sizing: border-box;
    font-family: '微软雅黑';
    font-size: 12px;
}
/*html,body,.app{height:100%;}*/
p {
    margin: 0;
}
.news-list-wrap {
    padding: 1px;
    min-width: 1217px;
    min-height: 710px;
    background-color: #0d0e0f;
}
.news-list-wrap > div {
    width: 50%;
    min-height: 710px;
}
.news-list {
    background-color: #141518;
    overflow: auto;
}
.news-list-con {
    color: #c9d0d7;
    padding: 5px 0;
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
    color: #c9d0d7;
}
.news-list-title:hover {
    color: #1984ea;
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
    background-color: #2e4465;
}
.news-list-top {
    height: 25px;
}
/*!*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*!
::-webkit-scrollbar {
  width: 20px;
  height: 20px;
  background-color: #2f343a;
}

!*定义滚动条轨道 内阴影+圆角*!
::-webkit-scrollbar-track {
  background-color: #23272c;
}

!*定义滑块 内阴影+圆角*!
::-webkit-scrollbar-thumb {
  background-color: #2f343a;
}*/
</style>
<template>
<div class="news-list-wrap clearfix" :style="{height:wrapHeight+'px'}">
  <div class="news-list fl" :style="{height:wrapHeight-2+'px'}">
    <div class="news-list-top">
      <NavBar :data="navText" :type="type" v-on:changeType="changeNavType"></NavBar>
    </div>
    <ul class="news-list-con">
      <li v-for="(item,index) of newsList" class="c_txt tl clearfix news-con-li" v-on:click="focusLi(item.iiid,index)" v-bind:class="$route.query.newsIndex === index?'news-active':''">
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
import NavBar from 'components/z3touguhome/nav-bar'
import newsDetail from 'components/z3touguhome/news-details'
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
      wrapHeight: window.innerHeight,
      newsId: '',
      newsIndex: this.$route.query.newsIndex,
      // newsId: ''
      intervalTime: 10,
      updateNewsPid: null
    }
  },
  watch: {
    type() {
      this.changeNews()
      for (let i = 0; i < document.getElementsByClassName('news-con-li').length; i++) {
        document.getElementsByClassName('news-con-li')[i].style.backgroundColor = '#141518'
      }
      document.getElementsByClassName('news-con-li')[0].style.backgroundColor = '#2e4465'
    }
  },
  components: {
    NavBar,
    newsDetail
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
      if (this.type === 'ywnews') {
        this.$store.dispatch('z3touguIndex/getFinanceNews', {
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
        this.$store.dispatch('z3touguIndex/getListedCompanyNews', {
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
        this.$store.dispatch('z3touguIndex/getFinanceNews', {
            size: this.newsSize
          })
          .then(() => {
            this.newsList = this.financeNewsData
            this.newsId = this.financeNewsData[0].iiid
          })
      } else if (this.type === 'companynews') {
        this.$store.dispatch('z3touguIndex/getListedCompanyNews', {
            size: this.newsSize
          })
          .then(() => {
            this.newsList = this.listedCompanyNewsData
            this.newsId = this.listedCompanyNewsData[0].iiid
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
          _this.changeNews()
        }, 60 * 1000 * _this.intervalTime)
      }
    },
    focusLi: function(id, index) {
      this.newsId = id
      for (let i = 0; i < document.getElementsByClassName('news-con-li').length; i++) {
        document.getElementsByClassName('news-con-li')[i].style.backgroundColor = '#141518'
      }
      document.getElementsByClassName('news-con-li')[index].style.backgroundColor = '#2e4465'
    }
  },
  mounted() {
    this.getNews()
    this.updateNews()
  }
}
</script>
