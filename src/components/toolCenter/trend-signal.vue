<style lang="scss" scoped="">
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
}
/* table:last-child{
  margin-right: 0
} */
table tr:nth-child(1) {
    background: #2f343a;
    font-size: 12px;
}
table tr:nth-child(1) td {
    height: 28px;
    text-align: center;
}
table tr td:last-child {
    border-right: none;
}
.table1 tr:last-child {
    text-align: center;
    height: 40px;
    line-height: 40px;
}
table tr:last-child td {
    border-bottom: none;
    color: $blueWordsColor;
}
td {
    border-bottom: 1px solid $borderColor;
    border-right: 1px solid $borderColor;

}

td,
th {
    word-break: break-all;
    height: 26px;
    text-align: center;
    width: 25%;
}

td div {
    padding: 6px;
    text-align: center;
}
.tr-img4 {
    width: 18px;
    height: 18px;
    display: inline-block;
    background: url("../../assets/images/dhq/signal-icon2.png") no-repeat;
    background-position: 0 -57px;
    position: relative;
    top: 5px;
    left: 0;
}
.tr-img5 {
    background-position: 0 -76px;
}
.tr-img6 {
    background-position: 0 -95px;
}
.tr-title {
    color: $wordsColorBase;
    padding-left: 4px;
    font-size: 12px;
    display: inline-block;
    line-height: 24px;
}
.td-chngPct {
    text-align: right;
}
.td-chngPct > div {
    text-align: right;
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
.table-box {
    width: 100%;
}
.table-detail {
    width: 33%;
    /*  font-size: 14px; */
    margin-right: 19px;
}
.table-detail:last-child {
    margin-right: 0;
}
</style>
<template>
<div class="signal-table-wrap">
  <div class="display-box table-box">
    <div class="table-detail box-flex-1" v-for="(item,index) of trendData">
      <TrendTable :signalTrend='item' :name='navTrend[index].name' :type="navTrend[index].trendTypeId" :size='size' />
    </div>
  </div>
</div>
</template>
<script>
/* import {
  ctx
} from '../../dhq/config' */
import {
  mapState
} from 'vuex'
import TrendTable from 'components/toolCenter/trend-table'
export default {
  props: ['size'],
  data() {
    return {
      allData: [],
      // navTitle:['强势上升股','趋势空转多','震荡上升股'],
      navTrend: [{
          name: '强势上升股',
          trendTypeId: 2
        },
        {
          name: '趋势空转多',
          trendTypeId: 1
        },
        {
          name: '震荡上升股',
          trendTypeId: 3
        }
      ],
      qsArr: [], // 强势上升股 type 2
      qskzdArr: [], // 趋势空转多 type 1
      zdsArr: [], // 震荡上升股 type 3
      trendData: []

    }
  },
  watch: {},
  components: {
    TrendTable

  },
  computed: mapState({
    signalTrend: state => state.signal.signalTrend
  }),
  methods: {
    initTrendType() {
      let p1 = new Promise((resolve, reject) => {
        this.$store.dispatch('signal/querySignalTrend', {
          trendTypeId: 2
        }).then(() => {
          resolve();
          this.qsArr = this.signalTrend.record
          this.$emit('timeValue', this.signalTrend.updateTime)

        })
      });
      let p2 = new Promise((resolve, reject) => {
        this.$store.dispatch('signal/querySignalTrend', {
          trendTypeId: 1
        }).then(() => {
          resolve();
          this.qskzdArr = this.signalTrend.record
        })
      });
      let p3 = new Promise((resolve, reject) => {
        this.$store.dispatch('signal/querySignalTrend', {
          trendTypeId: 3
        }).then(() => {
          resolve();
          this.zdsArr = this.signalTrend.record
        })
      });
      Promise.all([p1, p2, p3]).then(() => {
        this.trendData.push(this.qsArr, this.qskzdArr, this.zdsArr)

      });
    },
    initTrend() {

      this.$store.dispatch('signal/querySignalTrend', {
        trendTypeId: 2
      }).then(() => {

        this.qsArr = this.signalTrend.record
      })

      this.$store.dispatch('signal/querySignalTrend', {
        trendTypeId: 1
      }).then(() => {

        this.qskzdArr = this.signalTrend.record
      })


      this.$store.dispatch('signal/querySignalTrend', {
        trendTypeId: 3
      }).then(() => {

        this.zdsArr = this.signalTrend.record
      })

    },
    formatDuring(time) {
      var date = new Date(time)
      var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours())
      var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes())
      return h + ':' + m
    },
    checkClass(index) {
      return index === 1 ? 'tr-img2' : index === 2 ? 'tr-img3' : ''
    }
  },
  mounted() {
    // this.initTrend()
    this.initTrendType()

  },
  destroyed() {

  }
}
</script>
