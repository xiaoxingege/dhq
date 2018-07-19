<template>
<div class="main">
  <div class="introduce">
    <div class="title">
      <span>停牌间走势对比</span>
      <span class='bk'><i></i>板块行情</span>
      <span class='gg'><i></i>个股行情</span>
    </div>
    <div class="chart" ref="hqzsChart">

    </div>
    <p><span>停牌期间上证指数<i v-if="storeData.zszd>0?false:true">下跌</i><i v-else>上涨</i>：</span>{{storeData.zszd+"%"}}</p>
    <p><span>停牌提示：</span>{{storeData.public}}</p>
  </div>

</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import echarts from 'echarts'
export default {
  data() {
    return {
      chartData: [],
      bkData: [],
      ggData: [],
      showDate: [],
      zszd: '',
      public: '',
      code: '',
      stopdate: ''
  
    }
  },
  computed: {
    ...mapState({
      storeData: state => state.jjrl.dateAndCode,
      setStockLine: state => state.jjrl.setStockLine,
      saveDate: state => state.jjrl.saveDate,
      resetChart: state => state.jjrl.resetChart
    }),
    getStockCode() {
      // console.log(this.storeData.stockCode)
      return this.storeData.stockCode;
    }
   
  },
  methods: {
    initChart() {
      this.chart = echarts.getInstanceByDom(this.$refs.hqzsChart) || echarts.init(this.$refs.hqzsChart)
    },
    drawCharts() {
      const option = {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '5%',
          right: '1%',
          top: '5px',
          bottom: '10%'
        },

        xAxis: {
          type: 'category',
          data: this.showDate,
          boundaryGap: false
         
        },
        yAxis: {
          type: 'value',
          boundaryGap: true,
          splitNumber: 5,
          scale: true,
          splitLine: {
            show: false
          }
        },
        series: [{
            name: '个股行情',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              normal: {
                color: '#f0b540'
              }
            },
            lineStyle: {
              width: 1
            },

            data: this.ggData
          },
          {
            name: '板块行情',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              normal: {
                color: 'rgb(25, 132, 234)'
              }
            },
            lineStyle: {
              width: 1
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(25, 132, 234,0.3)'
                }, {
                  offset: 1,
                  color: 'rgba(25, 132, 234,0)'
                }])
              }
            },
            data: this.bkData
          }
        ]
      };
      this.chart.setOption(option)
      window.addEventListener('resize', () => this.chart.resize(), false)
    },
    setDate(date) {
      var d, Y, M, D
      d = new Date(date)
      Y = d.getFullYear()
      M = d.getMonth() + 1
      D = d.getDate()
      if (M < 10) {
        M = '0' + M;
      }
      if (D < 10) {
        D = '0' + D;
      }
      return Y + '-' + M + '-' + D
    },
    paint(date) {
      this.bkData = []
      this.ggData = []
      this.showDate = []
      this.$store.dispatch('jjrl/setStockLine', date).then(res => {
        this.code = this.storeData.stockCode
        this.zszd = this.storeData.zszd
        this.public = this.storeData.public
        this.stopdate = this.storeData.stopdate
        this.chartData = this.setStockLine[this.code]
        this.chartData.zs.forEach(item => {
          this.bkData.push(item.index.toFixed(2))
        })
       // console.log(this.showDate)
        this.chartData.hq.forEach(item => {
          let time = this.setDate(item.trade_date)
          this.showDate.push(time)
          this.ggData.push(item.index.toFixed(2))

        })
        this.initChart()
        this.drawCharts()
      })
    }

  },
  watch: {
    getStockCode: function(a,b) {
      //  a是初始化的数据，b为undefined 当初始化变化后，b才有值
     console.log(a)
    // console.log(b)
    if(b){
        this.paint(this.saveDate.chooseDate)
    }
       
    }
  },
  created () {
     this.paint(this.saveDate.chooseDate)
  }
}
</script>

<style lang='scss' scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
.main {
    height: 100%;
    margin-bottom: 47px;
}
.bk i,
.gg i {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
}
.bk i {
    background-color: $blueWordsColor;
    margin-right: 5px;
}
.gg i {
    background-color: $backupYellow;
    margin-right: 5px;
}
.title span {
    margin-right: 36px;
}
.title {
    margin-bottom: 36px;

}
.chart {
    /*   width: 100%; */
    height: 195px;
    // border: 1px solid red;
    margin-bottom: 13px;
}
.introduce p {
    line-height: 22px;
    // padding-left: 30px;
}
</style>