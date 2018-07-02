<style lang="scss" scoped>
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
.table_scroll {}
.table-body {
    width: 100%;
    height: 300px;
    overflow-y: scroll;
}
.table-head {
    background-color: #999;
    color: #000;
}
.table-head table td {
    width: 24%;
}

.table-body table,
.table-head table {
    width: 100%;
}

.sti-tbl-container {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.sti-tbl-body table,
.sti-tbl-header table {
    table-layout: fixed;
}

.sti-tbl-container .sti-tbl-body {
    flex-grow: 1;
    height: 489px;
    /* overflow-y : scroll; */
    overflow-y: auto;
    background: #141518;
}
.table tr td {
    width: 24%;
}
.table tr td:nth-child(2) {
    text-align: right;
    padding-right: 11px;
}
.table tr td:nth-child(3) {
    text-align: right;
    padding-right: 11px;
}
.table tr td:last-child {
    width: 25%;
}
.sti-tbl-header .table td {
    background: $menuSelColor;
    font-size: 12px;
    color: $wordsColorBase;
    border-right: none;
    height: 30px;
}

.sti-tbl-header {
    z-index: 9999;
}
</style>
<template>
<div class="signal-table-wrap">
  <div class="display-box table-box">
    <div class="table-detail box-flex-1" v-for="(item,index) of trendData">
      <TrendTable :signalTrend='item' :name='navTrend[index].name' :type="navTrend[index].trendTypeId" :size='size' @toShowDialog='dialogShowfn' />
    </div>
  </div>
  <SignalDialog v-show="dialogShow" @toHideDialog='dialogclosefn' :name='dialogArr.trendTypeName' :type="dialogArr.trendTypeId" :desc='dialogDesc' :isTrend='true' :bottom='bottom'>
    <div slot="content">
      <div class="sti-tbl-container">
        <div class="sti-tbl-header">
          <table class="table table-bordered">
            <tr v-if='thTitle'>
              <td v-for="(th,index) of thTitle">
                <span class="">{{th}}</span>
              </td>
            </tr>
          </table>
        </div>
        <div class="sti-tbl-body" @scroll="start($event)">
          <Vscroll :on-infinite="onInfinite" :dataList="scrollData" :infiniteLoading='infiniteLoading'>
            <TrendTable :signalTrend='lists' :thTitle='thTitle' :size='totalPage' />
          </Vscroll>
        </div>
      </div>
    </div>
  </SignalDialog>
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
import SignalDialog from 'components/toolCenter/signal-dialog'
import Vscroll from 'components/toolCenter/load-more'
export default {
  props: ['size', 'bottom'],
  data() {
    return {
      allData: [],
      dialogShow: false,
      // navTitle:['强势上升股','趋势空转多','震荡上升股'],
      navTrend: [{
          name: '强势上升',
          trendTypeId: 2
        },
        {
          name: '趋势空转多',
          trendTypeId: 1
        },
        {
          name: '震荡上升',
          trendTypeId: 3
        }
      ],
      qsArr: [], // 强势上升股 type 2
      qskzdArr: [], // 趋势空转多 type 1
      zdsArr: [], // 震荡上升股 type 3
      trendData: [],
      thTitle: ['股票', '价格', '涨幅', '信号'],
      alltimers: '',
      dialogArr: [],
      lists: [],
      typeArr: [],
      dialogType: 2,
      dialogName: '火箭发射',
      dialogId: 5,
      dialogDesc: '',
      signalDetail: [
        '',
        '识别趋势空转多的股票，依据趋势交易理念，当股价下降趋势转为上升趋势时，顺势加仓的获利可能性更高。',
        '识别强势上升的股票，依据趋势交易理念，对于强势上升的股票，顺势加仓的获利可能性更高。',
        '识别震荡上升的股票，依据趋势交易理念，对于震荡上升的股票，顺势加仓的获利可能性更高。'
      ],
      page: 0, // 当前页
      pagesize: '',
      num: 20, //  一页显示多少条
      pageStart: 0, //  开始页数
      pageEnd: 0, //  结束页数
      listdata: [], //  下拉更新数据存放数组
      scrollData: {
        noFlag: false // 暂无更多数据显示
      },
      infiniteLoading: false

    }
  },
  watch: {
    dialogType(v) {
      // alert(v)

    }
  },
  components: {
    TrendTable,
    SignalDialog,
    Vscroll

  },
  computed: mapState({
    signalTrend: state => state.signal.signalTrend,
    totalPage: state => state.signal.total,
    signalType: state => {
      const listData = state.signal.signalType
      /* listData && listData.forEach(item => {
        console.log(item)
      }) */
      return listData
    }
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
    initDialogData(type) {
      this.$store.dispatch('signal/querySignalTrend', {
        trendTypeId: type,
        page: this.page
      }).then(() => {
        this.dialogArr = this.signalTrend
        this.lists = this.signalTrend.record

      })
    },

    dialogShowfn(v) {
      this.dialogShow = v.show
      // this.initDialogData(v.type)    
      this.dialogDesc = this.signalDetail[v.type]
      this.dialogType = v.type
      // console.log(this.dialogType)
      // console.log(v.type)
      this.page = 0
      this.lists = []
      this.onInfinite()


    },
    dialogclosefn() {
      this.dialogShow = false
    },
    formatDuring(time) {
      var date = new Date(time)
      var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours())
      var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes())
      return h + ':' + m
    },
    checkClass(index) {
      return index === 1 ? 'tr-img2' : index === 2 ? 'tr-img3' : ''
    },
    onRefresh(done) {
      // this.getList();

      // done(); // call done

    },
    onInfinite(done) {
      var all = (this.page) * this.num
      let more = this.$el.querySelector('.load-more')
      // let end = this.pageEnd = this.num * this.counter;
      // let i = this.pageStart = this.pageEnd - this.num;
      if (!more) {
        return
      }
      this.scrollData.noFlag = false
      // console.log(this.totalPage)
      if (all >= this.totalPage) {
        more.style.display = 'none'; // 隐藏加载条
        //     // 走完数据调用方法
        this.scrollData.noFlag = true;
        return
      } else {
        this.$store.dispatch('signal/querySignalTrend', {
          trendTypeId: this.dialogType,
          page: all
        }).then(() => {

          this.dialogArr = this.signalTrend
          this.lists = this.lists.concat(this.signalTrend.record)
          this.page++
            if (this.lists.length <= 8) {
              more.style.display = 'none'; // 隐藏加载条
            }
        })

        more.style.display = 'block';
        // more.style.display = 'none'; // 隐藏加载条
        this.infiniteLoading = false
      }
      // for(i; i < end; i++) {
      // if(i >= 30) {
      //     more.style.display = 'none'; // 隐藏加载条
      //     // 走完数据调用方法
      //     this.scrollData.noFlag = true;

      //     break;
      // } else {
      //   this.$store.dispatch('signal/querySignalTrend', {
      //     trendTypeId: 3,
      //     page:all
      //   }).then(() => {
      //     this.dialogArr = this.signalTrend
      //     this.lists = this.lists.concat(this.signalTrend.record)
      //     console.log(this.lists)
      //   })
      // more.style.display = 'none'; // 隐藏加载条
      // }
      //  }

      // done();
    },
    start(e) {
      console.log(e)
    }
  },
  mounted() {
    // this.initTrend()
    this.initTrendType()
    // this.getList();
  },
  destroyed() {

  }
}
</script>
