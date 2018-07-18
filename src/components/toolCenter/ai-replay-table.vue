<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
* {
    text-align: justify;
    font-size: $fontSizeBase;
    color: $wordsColorBase;
    font-family: "Microsoft YaHei";
}
.display-box {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -o-box;
    display: box;
}
.box-flex-1 {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    -o-box-flex: 1;
    box-flex: 1;
}

.signal-table-wrap {
    width: 100%;
}
.table-box {}
table {
    border-collapse: collapse;
    width: 100%;
    background: $bgConColor;
    font-size: 12px;

}
/* table:last-child{
  margin-right: 0
} */
table tr:nth-child(1) {
    background: #2f343a;
    font-size: 12px;
}
table tr:nth-child(1) td {
    height: 30px;
    text-align: center;
    border: none;
}

/* .table1 tr:last-child {
    text-align: center;
    height: 40px;
    line-height: 40px;
} */
table tr:last-child td {
    border-bottom: none;
    color: $blueWordsColor;

}
td {
    /* border-bottom: 1px solid $borderColor;
    border-right: 1px solid $borderColor; */
    border: 1px solid $borderColor;

}

td,
th {
    word-break: break-all;
    height: 26px;
    text-align: center;
    /* width: 25%; */
}

td div {
    /*  padding: 6px; */
    text-align: center;
}

.tr-title {
    color: $wordsColorBase;
    padding-left: 5px;
    font-size: 12px;
    display: inline-block;
    line-height: 24px;
}
.td-chngPct {
    /*  text-align: right; */
}
.td-chngPct > div {
    /*  text-align: right; */
    padding: 6px 10px;
}
.no-data {
    width: 99px;
    height: 68px;
    margin: 54px auto 18px;
    background: url("../../assets/images/dhq/no-data.png") no-repeat;
}
.no-data-txt {
    color: $menuSelColor;
    text-align: center;
    padding-bottom: 89px;
}
td a {
    text-decoration: none;
    cursor: pointer;
}
.tonative {
    cursor: pointer;
}
.more {
    cursor: pointer;
}

.table-chart {
    width: 100%;
    height: 26px;
}
.pro-td {
    width: 35%;
}
.progress-box {
    width: 85%;
    /*    display: inline-block; */
    margin: 0 auto;
}

.progress {
    background: #ca4941;
    width: 10%;
    /*  height: 100%; */
    /* display: inline-block; */
    text-align: center;
    /*  border-radius: 10px; */

    height: 8px;
    line-height: 8px;
}

.redbg {
    background: $upColorDhq;
    border-top-left-radius: 2em;
    border-bottom-left-radius: 2em;
}

.greenbg {
    background: $downColorDhq;
    border-top-right-radius: 2em;
    border-bottom-right-radius: 2em;
}
.chart-td {
    width: 12%;
}
.table1 tr td:nth-child(1) {
    width: 14.7%;
}
.table1 tr td:nth-child(2) {
    width: 12.7%;
}
.table1 tr td:nth-child(3) {
    width: 9%;
}
.table1 tr td:nth-child(4) {
    width: 12.8%;
}
.table1 tr td:nth-child(5) {
    width: 22.3%;
}
.table1 tr td:nth-child(6) {
    width: 13.8%;
}
.table1 tr td:nth-child(7) {
    width: 13.7%;
}
.tonative {
    cursor: pointer;
}
</style>
<template>
<div class="signal-table-wrap">
  <!-- <div class="table-box display-box"> -->
  <table class="table1" v-if='indexResume.length!=0' ref='datalist'>
    <tr>
      <td v-for="(th,index) of thTitle">
        <span class="">{{th}}</span>
      </td>
    </tr>
    <tr v-if='indexResume.length==0'>

      <div class="no-data"></div>
      <div class="no-data-txt">暂无数据</div>

    </tr>
    <tr v-for="(item,index) of indexResume">
      <td>
        <!--  <router-link :to="{name:'foundpooldetail',params:{id:item.poolId}}" class="blue">{{item.poolName}}</router-link> -->
        <div @click='toNative({stockCode:concats(item.stkcode)})' class="tonative">{{item.stkname ||'--'}}</div>
      </td>
      <td class="td-chngPct">
        <div v-z3-updowncolor="item.changeRatio">{{item.price | price}}</div>
      </td>
      <td class="td-chngPct">
        <div v-z3-updowncolor="item.changeRatio">{{checkChngPct(item.changeRatio)}}</div>
      </td>
      <td class="td-chngPct">
        <div>{{checkUnit(item.volume) ||'--'}}</div>
      </td>
      <td class='pro-td'>
        <div class="progress-box"><span class="progress redbg fl" :style="'width:'+Math.round(item.compStockRiseRatio*100)+'%;'"></span><span class="progress greenbg fr" :style="'width:'+ Math.round((1-item.compStockRiseRatio)*100)+'%;'"></span></div>
      </td>
      <td class="chart-td">
        <div class="table-chart"></div>
      </td>
      <td>
        <div>{{item.operability ||'--'}}</div>
      </td>
    </tr>
  </table>
  <!--  <table v-if='indexResume.length==0'>
    <tr>
      <td v-for="(th,index) of thTitle">
        <span class="">{{th}}</span>
      </td>
    </tr>
    <tr>
      <div class="no-data"></div>
      <div class="no-data-txt">暂无数据</div>
    </tr>
    <tr></tr>
  </table> -->

</div>
</template>
<script>
import config from '../../dhq/config'
import util from '../../dhq/util'
import native from 'utils/nativeApi'
import echarts from 'echarts'
import {
  mapState
} from 'vuex'
export default {
  props: ['indexResume'],
  data() {
    return {
      type: '',
      thTitle: ['指数', '最新', '涨幅', '成交额', '涨跌比', '近期资金流向', '可操作性'],
      alltimers: '',
      size: '',
      data: {
        fundDays: []
      }

    }
  },

  watch: {
    indexResume() {
      this.init()
    }
  },
  components: {

  },
  computed: mapState({}),
  methods: {
    init() {
      this.$nextTick(() => {
        var barChart = document.getElementsByClassName('table-chart')
        if (barChart.length > 0) {
          //  console.log(document.getElementsByClassName('table-chart').length)
          this.indexResume.forEach((item, index) => {
            //   console.log(this.indexResume[i].fundFlow5Days)
            // var fundFlow5Days = this.indexResume[i].fundFlow5Days
            this.drawCharts(index, item.fundFlow5Days)
          })

        }
      })
    },
    drawCharts(index, fundFlow5Days) {
      //  let chart = echarts.getInstanceByDom(el) || echarts.init(el);     
      var barChart = document.getElementsByClassName('table-chart')
      var chart = echarts.getInstanceByDom(barChart[index]) || echarts.init(barChart[index]);
      const opt = {

        xAxis: {
          type: 'category',
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          data: ['2018-01-01', '2018-01-01', '2018-01-01', '2018-01-01', '2018-01-01']
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        series: [{
          type: 'bar',
          barWidth: 15,
          barMinHeight: 1,
          data: fundFlow5Days,
          itemStyle: {
            normal: {
              color: function(params) {
                return params.value < 0 ? config.downColor : config.upColor
              }
            }
          }
        }],
        grid: {
          show: false,
          left: 35,
          top: 5,
          bottom: 8,
          right: 35
        }
      };
      chart.setOption(opt);
      window.addEventListener('resize', () => chart.resize(), false)
    },
    toNative(stockCode) {
      return native.openStock(stockCode)
    },
    concats(code) {
      return util.formatterInnercode(code)
    },
    formatDuring(time) {
      var date = new Date(time)
      var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours())
      var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes())
      return h + ':' + m
    },
    checkClass(index) {
      return index === 4 ? 'tr-img2' : index === 3 ? 'tr-img3' : ''
    },
    checkUnit(str) {
      return str + '亿'
    },
    checkChngPct(value) {
      if (value === null || value === '') {
        return '--';
      } else {
        if (value > 0) {
          return '+' + (Number(value) * 100).toFixed(2) + '%';
        } else {
          return (Number(value) * 100).toFixed(2) + '%';
        }
      }
    }

  },
  mounted() {

    this.init()

  },
  destroyed() {}
}
</script>
