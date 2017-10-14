<style lang="scss" scoped>
@import '../assets/css/base.css';

body {
    height: 100%;
    background: #191A1D;
}
.searchResult {
    width: 50%;
    background: #191A1D;
    font-size: 12px;
    color: #c9d0d7;
    padding-left: 10px;
}
.searchResult > p {
    padding-left: 7px;
}
.searchResult ul > p {
    font-size: 14px;
    margin-top: 15px;
}
.searchResult ul li {
    text-align: left;

    border-bottom: 1px solid #24262C;
}
.searchResult ul li p {
    margin-bottom: 9px;
}
.searchResult ul li a {
    display: block;
    padding-top: 15px;
    font-size: 14px;
}
.searchInfo {
    line-height: 24px;
}
.searchTime {
    color: #505A66;
}
.newsSource {
    margin-left: 20px;
}
.searchSort {
    position: absolute;
    right: 0;
    top: 3px;
}
.searchSort span {
    display: inline-block;
    background: #808BA1;
    color: #c9d0d7;
    padding: 4px 7px;
    cursor: pointer;
    border-radius: 3px;
}
.searchSort span:first-child {
    margin-right: 15px;
}
.searchSort span:last-child {
    padding: 4px 12px;
}
.searchSort span.active {
    background: #1984ea;
}
.searchSort span img {
    position: relative;
    margin-left: 3px;
    width: 10px;
    height: 10px;
    top: 4px;
}
</style>
<template>
<div class="searchResult">
  <ul v-if="searchType == 'stock'">
    <p>搜索股票数：<span>{{total}}</span></p>
    <li v-for="item of resultData">
      <a :href="item.stockUrl" target="_blank">{{item.stockName}}[{{item.stockCode}}]</a>
      <p class="searchInfo">{{item.stockIntro}}</p>
    </li>
  </ul>
  <ul v-if="searchType == 'theme'">
    <p>搜索题材数：<span>{{total}}</span></p>
    <li v-for="item of resultData">
      <router-link :to="{ name:'topicDetail' , params:{ topicId : item.themeUrl===null?'':item.themeUrl.substring((item.themeUrl.lastIndexOf('/') + 1), item.themeUrl.indexOf('.'))}}" target="_blank">{{item.themeName}}
      </router-link>
      <p class="searchInfo">{{item.themeExplain}}</p>
      <p class="searchTime">{{item.themeTime}}</p>
    </li>
  </ul>
  <ul v-if="searchType == 'signal'">
    <p>搜索信号数：<span>{{total}}</span></p>
    <li v-for="item of resultData">
      <a :href="item.signalUrl" target="_blank">{{item.signalName}}</a>
      <p class="searchInfo">{{item.signalExplain}}</p>
    </li>
  </ul>
  <ul v-if="searchType == 'infor'" style="position: relative;">
    <p>搜索资讯数：<span>{{total}}</span></p>
    <div class="searchSort"><span class="active" ref="relativeBtn" @click="relativeSort($event)">关联度排序<img
            src="../assets/images/search-arrows.png"></span><span ref="timeBtn" @click="timeSort($event)">时间排序<img
            src="../assets/images/search-arrows.png"></span></div>
    <!--<span>关联度排序</span><span>时间排序</span>-->
    <li v-for="item of resultData">
      <router-link :to="{name:'detailPages' , params:{ id : item.id, detailType:'news'}}" target="_blank">{{item.newsTitle}}</router-link>
      <p class="searchInfo">{{item.newsSummary}}</p>
      <p class="searchTime">{{item.newsTime}}<span class="newsSource">{{item.newsSource}}</span></p>
    </li>
  </ul>
  <ul v-if="searchType == 'report'" style="position: relative;">
    <p>搜索研报数：<span>{{total}}</span></p>
    <div class="searchSort"><span class="active" ref="relativeBtn" @click="relativeSort($event)">关联度排序<img
            src="../assets/images/search-arrows.png"></span><span ref="timeBtn" @click="timeSort($event)">时间排序<img
            src="../assets/images/search-arrows.png"></span></div>
    <li v-for="item of resultData">
      <router-link :to="{ name:'detailPages' , params:{ id : item.id, detailType:'report'}}" target="_blank">{{item.reportTitle}}</router-link>
      <p class="searchInfo">{{item.reportSummary}}</p>
      <p class="searchTime">{{item.reportTime}}<span class="newsSource">{{item.reportSource}}</span></p>
    </li>
  </ul>
  <div style="width:100%; text-align: center;">
    <Pagination :totalPage="totalPage" :page="pageTo" v-on:getPageFromChild="goToPage" v-if="totalPage > 1" />
  </div>

</div>
</template>
<script>
import Pagination from 'components/pagination.vue'
export default {
  // props: ['linkText'],
  data () {
    return {
      resultData: [],
      total: '',
      searchType: this.$route.params.linkText,
      totalPage: '',
      pageTo: undefined,
      sortType: ''
    }
  },
  components: {
    Pagination
  },
  cumputed: {

  },
  methods: {
    showSearchList (currentPage) {
      const keyword = this.$store.state.zhikuanSearch.keyword === '' ? this.$route.params.keyword : this.$store.state.zhikuanSearch.keyword
      const linkText = this.$route.params.linkText
      this.$store.dispatch('zhikuanSearchList/searchList', {
        keyword,
        currentPage,
        linkText,
        sortType: this.sortType
      }).then(() => {
        this.resultData = this.$store.state.zhikuanSearchList.dataList
        this.total = this.$store.state.zhikuanSearchList.totalRecordNum
        this.totalPage = this.$store.state.zhikuanSearchList.totalPage[linkText]
      })
    },
    goToPage (data) {
      this.showSearchList(data)
    },
    relativeSort (e) {
      const relativeBtn = this.$refs.relativeBtn
      const btn = this.$refs.timeBtn
      if (relativeBtn.className === 'active') {
        return
      } else {
        relativeBtn.setAttribute('class', 'active')
        btn.setAttribute('class', '')
      }
      const keyword = this.$route.params.keyword
      const linkText = this.$route.params.linkText
      this.searchType = this.$route.params.linkText
      this.sortType = 1

      this.$store.dispatch('zhikuanSearchList/searchList', {
        keyword,
        linkText,
        sortType: this.sortType
      }).then(() => {
        this.resultData = this.$store.state.zhikuanSearchList.dataList
        this.total = this.$store.state.zhikuanSearchList.totalRecordNum
        this.totalPage = this.$store.state.zhikuanSearchList.totalPage[linkText]
        this.pageTo = this.$store.state.zhikuanSearchList.currentPage
      })
    },
    timeSort (e) {
      const timeBtn = this.$refs.timeBtn
      const btn = this.$refs.relativeBtn
      if (timeBtn.className === 'active') {
        return
      } else {
        timeBtn.setAttribute('class', 'active')
        btn.setAttribute('class', '')
      }
      const keyword = this.$route.params.keyword
      const linkText = this.$route.params.linkText
      this.searchType = this.$route.params.linkText
      this.sortType = 2
      this.$store.dispatch('zhikuanSearchList/searchList', {
        keyword,
        linkText,
        sortType: this.sortType
      }).then(() => {
        this.resultData = this.$store.state.zhikuanSearchList.dataList
        this.total = this.$store.state.zhikuanSearchList.totalRecordNum
        this.totalPage = this.$store.state.zhikuanSearchList.totalPage[linkText]
        this.pageTo = this.$store.state.zhikuanSearchList.currentPage
      })
    }

  },
  watch: {
    '$route': function () {
      const keyword = this.$route.params.keyword
      const linkText = this.$route.params.linkText
      this.searchType = this.$route.params.linkText
      this.$store.dispatch('zhikuanSearchList/searchList', {
        keyword,
        linkText,
        sortType: this.sortType
      }).then(() => {
        this.resultData = this.$store.state.zhikuanSearchList.dataList
        this.total = this.$store.state.zhikuanSearchList.totalRecordNum
        this.totalPage = this.$store.state.zhikuanSearchList.totalPage[linkText]
      })
    }
  },
  mounted () {
    this.showSearchList()
  }

}
</script>

