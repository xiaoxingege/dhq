<style>
    @import '../../assets/css/base.css';
    .app{height: 100%;}
    *{box-sizing: border-box;font-family: '微软雅黑';font-size:12px;}
    p{margin: 0px;}
    html,body{height:100%;}
    .wrap{padding: 0px 8px 8px 8px;min-width: 1217px;min-height:704px;height:100%;}
    body{background-color: #ebecee}
    .news-wrap{height: 31%;padding-top: 10px;}
    .news-left{height:100%;width: 60%;display: inline-block;float: left;padding: 10px;background: #fff;}
    .news-left>div{width: 49%;height:100%;display: inline-block;float: left;}
    .news-left>div:nth-child(1){margin-right:2%;}
    .strategy-map{height:38%;padding-top:5px;}
    .c_up{color:#ff0000;}
    .c_down{color:#48a854;}
    .c_txt{color:#666;}
    .strategy-wrap{padding-top: 5px;height:31%;}
    .strategy-wrap>ul{height:100%;}
    .strategy-wrap>ul>li{background-color: #fff;margin-right:0.4%;padding: 10px 10px 0px 10px;width: 24.7%;float: left;display: inline-block;height:100%;}
    .strategy-wrap li:nth-child(4){margin-right: 0px;}
</style>
<template>
    <div class="wrap">
        <div class="news-wrap clearfix">
            <div class="clearfix news-left">
                <NewsListHome :newsList="financeNewsList" :newsName="newsName1" :newsType="ywType"></NewsListHome>
                <NewsListHome :newsList="listedCompanyNewsList" :newsName="newsName2" :newsType="companyType"></NewsListHome>
            </div>
            <ThemeHome :themeWidth="themeWidth" :themeHeight="themeHeight"></ThemeHome>
        </div>
        <div class="strategy-wrap">
            <ul class="clearfix">
                <StrategyListHome :benchmarkObj="benchmarkObj" v-for="item of strategyList" :strategyData="item"></StrategyListHome>
            </ul>
        </div>
        <div class="strategy-map clearfix">
            <RecommendStrategyHome :RecommendStrategyWidth="RecommendStrategyWidth" :benchmarkObj="benchmarkObj"></RecommendStrategyHome>
            <MapHome :mapWidth="mapWidth" :mapHeight="mapHeight"></MapHome>
        </div>
    </div>
</template>
<script type="text/javascript">
    import StrategyListHome from 'components/z3touguhome/strategy-list-home'
    import RecommendStrategyHome from 'components/z3touguhome/recommed-strategy-home'
    import MapHome from 'components/z3touguhome/map-home'
    import ThemeHome from 'components/z3touguhome/theme-home'
    import NewsListHome from 'components/z3touguhome/hotnews-home'
    export default {
      data () {
        return {
          RecommendStrategyWidth: '60%',
          mapWidth: '39.7%',
          mapHeight: '100%',
          themeWidth: '39.7%',
          themeHeight: '100%',
          financeNewsSize: 6,
          listedCompanyNewsSize: 6,
          financeNewsList: [],
          listedCompanyNewsList: [],
          newsName1: '财经要闻',
          newsName2: '上市公司',
          ywType: 'ywnews',
          companyType: 'companynews',
          benchmarkObj: {
            '000300': '沪深300',
            '000001': '上证指数',
            '399001': '深圳成指',
            '399006': '创业板指',
            '399005': '中小板指',
            '000016': '上证50',
            '399905': '中证500',
            '399906': '中证800',
            '000852': '中证1000'
          },
          sort: 'createDate',
          direction: 'desc',
          size: 4,
          strategyList: []
        }
      },
      props: [''],
      components: {
        StrategyListHome,
        RecommendStrategyHome,
        MapHome,
        ThemeHome,
        NewsListHome
      },
      computed: {
        financeNewsData: function () {
          const financeNewsData = [].concat(this.$store.state.z3touguIndex.financeNewsList)
          return financeNewsData
        },
        listedCompanyNewsData: function () {
          const listedCompanyNewsData = [].concat(this.$store.state.z3touguIndex.listedCompanyNewsList)
          return listedCompanyNewsData
        },
        strategyDetail: function () {
          const strategyList = [].concat(this.$store.state.z3touguIndex.strategyList)
          return strategyList
        }
      },
      methods: {
        getNews: function () {
          this.$store.dispatch('z3touguIndex/getFinanceNews', { size: this.listedCompanyNewsSize })
              .then(() => {
                this.financeNewsList = this.financeNewsData
              }).then(() => {
                this.$store.dispatch('z3touguIndex/getListedCompanyNews', { size: this.financeNewsSize })
                  .then(() => {
                    this.listedCompanyNewsList = this.listedCompanyNewsData
                  })
              })
        },
        initStrategy: function () {
          this.$store.dispatch('z3touguIndex/getStrategyList', { sort: this.sort, direction: this.direction, size: this.size })
                  .then(() => {
                    this.strategyList = this.strategyDetail
                  })
        }
      },
      mounted () {
        this.getNews()
        this.initStrategy()
      }
    }
</script>
