<template>
    <div class="topic">
        <div class="header"><span>{{lineData}}</span></div>
        <div class="con">
            <div class="left">
                <div class="desc"></div>
                <div class="yield">
                    <div><ul><li>日内</li><li>近一月</li><li>近三月</li><li>近六月</li><li>近一年</li><li>近三年</li><li>全部</li></ul></div>
                    <div class="chart" ref="chart"></div>
                </div>
                <div class="news"></div>
            </div>
            <div class="right">
                <div class="stock-list"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    export default{
      data () {
        return {
          period: 'All'
        }
      },
      computed: {
        ...mapState({
          lineData: state => state.topic.lineData,
          stockList: state => state.topic.stockList,
          news: state => state.topic.news
        //   stockNum: state => state.topic.stockList.length,
        //   newsNum: state => state.topic.news.length
        })
      },
      watch: {
        period () {
          if (this.period != 'day') {

          } else {
            this.updateChart()
          }
        }
      },
      methods: {
        initChart () {
          this.chart = echarts.init(this.refs.chart)
          this.$store.dispatch('z3tougu-theme/queryTopicStocks', { period: this.period })
        },
        updateChart () {

        },
        initStockList () {
        //   this.$store.dispatch('z3tougu-theme/queryTopicStocks')
        },
        initNews () {

        }
      },
      mounted () {
        this.initChart()
        this.initStockList()
        this.initNews()
  }
    }
</script>

<style lang="sass" scoped>
</style>
