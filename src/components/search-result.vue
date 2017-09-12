<style lang="scss" scoped>
    .searchResult{
        background:#fff;
        font-size:12px;
        color:#191919;
        font-family: "宋体";
    }
    .searchResult>p{
        padding-left: 7px;
    }
    .searchResult ul{
        background:#fff;
    }
    .searchResult ul>p{
        background:#F2F2F2;
        padding-bottom: 10px;
    }
    .searchResult ul li{
        padding-left: 7px;
        text-align: left;
        width:70%;
        border-bottom: 1px solid #F7F7F7;
    }
    .searchResult ul li a{
        display: block;
        padding-top: 15px;
    }
    .searchInfo{
        line-height: 24px;
    }
    .searchTime{
        color:#7e7e7e;
    }
    .newsSource{
        margin-left:20px;
    }

</style>
<template>

    <div class="searchResult">
        <ul v-if="searchType == 'stock'">
            <p>搜索股票数：<span>{{total}}</span></p>
            <li  v-for="item of resultData">
                <a :href="item.stockUrl" target="_blank">{{item.stockName}}[{{item.stockCode}}]</a>
                <p class="searchInfo">{{item.stockIntro}}</p>
            </li>
        </ul>
        <ul v-if="searchType == 'theme'">
            <p>搜索主题数：<span>{{total}}</span></p>
            <li  v-for="item of resultData">
                <router-link :to="{ name:'topicDetail' , params:{ topicId : item.themeUrl.substring((item.themeUrl.lastIndexOf('/') + 1), item.themeUrl.indexOf('.'))}}" target="_blank">{{item.themeName}}</router-link>
                <p class="searchInfo">{{item.themeExplain}}</p>
                <p class="searchTime">{{item.themeTime}}</p>
            </li>
        </ul>
        <ul v-if="searchType == 'signal'">
            <p>搜索信号数：<span>{{total}}</span></p>
            <li  v-for="item of resultData">
                <a :href="item.signalUrl" target="_blank">{{item.signalName}}</a>
                <p class="searchInfo">{{item.signalExplain}}</p>
            </li>
        </ul>
        <ul v-if="searchType == 'infor'">
            <p>搜索资讯数：<span>{{total}}</span><span></span></p>
            <li  v-for="item of resultData">
                <router-link :to="{name:'detailPages' , params:{ id : item.id, detailType:'news'}}" target="_blank">{{item.newsTitle}}</router-link>
                <p class="searchInfo">{{item.newsSummary}}</p>
                <p class="searchTime">{{item.newsTime}}<span class="newsSource">{{item.newsSource}}</span></p>
            </li>
        </ul>
        <ul v-if="searchType == 'report'">
            <p>搜索研报数：<span>{{total}}</span><span></span></p>
            <li  v-for="item of resultData">
                <router-link :to="{ name:'detailPages' , params:{ id : item.id, detailType:'report'}}" target="_blank">{{item.reportTitle}}</router-link>
                <p class="searchInfo">{{item.reportSummary}}</p>
                <p class="searchTime">{{item.reportTime}}<span class="newsSource">{{item.reportSource}}</span></p>
            </li>
        </ul>
        <Pagination :totalPage="totalPage" v-on:getPageFromChild="goToPage" v-if="totalPage !== 0"/>
    </div>


</template>



<script>
    import Pagination from 'components/pagination.vue'
    export default{
      // props: ['linkText'],
      data () {
        return {
          resultData: [],
          total: '',
          searchType: this.$route.params.linkText,
          totalPage: '',
          pageTo: ''
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
          this.$store.dispatch('zhikuanSearchList/searchList', { keyword, currentPage, linkText }).then(() => {
            this.resultData = this.$store.state.zhikuanSearchList.dataList
            this.total = this.$store.state.zhikuanSearchList.totalRecordNum
            this.totalPage = this.$store.state.zhikuanSearchList.totalPage[linkText]
          })
        },
        goToPage (data) {
          this.showSearchList(data)
        }
      },
      watch: {
        '$route': function () {
          const keyword = this.$route.params.keyword
          const linkText = this.$route.params.linkText
          this.searchType = this.$route.params.linkText
          this.$store.dispatch('zhikuanSearchList/searchList', { keyword, linkText }).then(() => {
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
