<style lang="scss" scoped>
    .searchResult{
        font-size:12px;
        color:#191919;
        font-family: "宋体";
    }
    .searchResult>p{
        padding-left: 7px;
    }
    .searchResult ul{
        background:#fff;
        padding-left: 7px;
    }
    .searchResult ul li{
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
        <p>搜索股票数：<span>{{total}}</span></p>
        <ul v-if="searchType == 'stock'">
            <li  v-for="item of resultData">
                <a :href="item.stockUrl">{{item.stockName}}[{{item.stockCode}}]</a>
                <p class="searchInfo">{{item.stockIntro}}</p>
            </li>
        </ul>
        <ul v-if="searchType == 'theme'">
            <li  v-for="item of resultData">
                <a :href="item.themeUrl">{{item.themeName}}</a>
                <p class="searchInfo">{{item.themeExplain}}</p>
                <p class="searchTime">{{item.themeTime}}</p>
            </li>
        </ul>
        <ul v-if="searchType == 'signal'">
            <li  v-for="item of resultData">
                <a :href="item.signalUrl">{{item.signalName}}</a>
                <p class="searchInfo">{{item.signalExplain}}</p>
            </li>
        </ul>
        <ul v-if="searchType == 'infor'">
            <li  v-for="item of resultData">
                <router-link :to="{name:'detailPages' , params:{ id : item.id, detailType:'news'}}">{{item.newsTitle}}</router-link>
                <p class="searchInfo">{{item.newsSummary}}</p>
                <p class="searchTime">{{item.newsTime}}<span class="newsSource">{{item.newsSource}}</span></p>
            </li>
        </ul>
        <ul v-if="searchType == 'report'">
            <li  v-for="item of resultData">
                <router-link :to="{ name:'detailPages' , params:{ id : item.id, detailType:'report'}}">{{item.reportTitle}}</router-link>
                <p class="searchInfo">{{item.reportSummary}}</p>
                <p class="searchTime">{{item.reportTime}}<span class="newsSource">{{item.reportSource}}</span></p>
            </li>
        </ul>
        <Pagination :totalPage="totalPage" v-on:getPageFromChild="goToPage" v-if="totalPage !== 0"/>
    </div>


</template>



<script>
    import Pagination from 'components/pagination.vue'
    import { mapState } from 'vuex'
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
      cumputed: mapState({

      }),
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
