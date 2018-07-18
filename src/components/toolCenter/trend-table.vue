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
    padding-left: 5px;
    font-size: 12px;
    display: inline-block;
    line-height: 24px;
}
.td-chngPct {
    text-align: right;
}
.td-chngPct > div {
    text-align: right;
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
</style>
<template>
<div class="signal-table-wrap">

  <table class="table1" v-if='signalTrend && signalTrend.length!==0'>
    <tr>
      <td colspan="4" v-show='name'>
        <span class="tr-img4" :class="checkClass(type)"></span><span class="tr-title">{{name}}</span>
      </td>
    </tr>
    <!-- <tr v-if='signalTrend.length==0'>
                <div class="no-data"></div>
                <div class="no-data-txt">暂无信号</div>
            </tr> -->
    <tr v-for="(item,index) of signalTrend" v-if="index<size">
      <td>
        <!--  <router-link :to="{name:'foundpooldetail',params:{id:item.poolId}}" class="blue">{{item.poolName}}</router-link> -->
        <div @click='toNative({stockCode:concats(item.stkcode)})' class="tonative">
          <!-- <a :href="'/stock/'+item.stkcode" target="_blank"> -->{{item.stkname ||'--'}}
          <!-- </a> -->
        </div>
      </td>
      <td class="td-chngPct">
        <div v-z3-updowncolor="item.riseAndFall">{{item.price | price}}</div>
      </td>
      <td class="td-chngPct">
        <div v-z3-updowncolor="item.riseAndFall">{{checkChngPct(item.riseAndFall)}}</div>
      </td>
      <td>
        <div>{{item.subTypeName ||'--'}}</div>
      </td>

    </tr>
    <tr v-show='name'>
      <td colspan="4" @click="moreData" class="more">更多>></td>
    </tr>
  </table>
  <table v-else>
    <tr>
      <td colspan="4">
        <span class="tr-img4" :class="checkClass(type)"></span><span class="tr-title">{{name}}</span>
      </td>
    </tr>
    <tr>
      <div class="no-data"></div>
      <div class="no-data-txt">暂无信号</div>
    </tr>
    <tr></tr>
  </table>
</div>
</template>
<script>
/* import {
  ctx
} from '../../dhq/config' */
import util from '../../dhq/util'
import native from 'utils/nativeApi'
import {
  mapState
} from 'vuex'
export default {
  props: ['type', 'name', 'signalTrend', 'size'],
  data() {
    return {
      allData: [],
      navTitle: ['火箭发射', '涨停追击', '创新高'],
      qsArr: [], // 强势上升股 type 2
      qskzdArr: [], // 趋势空转多 type 1
      zdsArr: [], // 震荡上升股 type 3
      trendData: []
    }
  },
  watch: {
    size() {
      // console.log(this.size)
      // this.initRealTimeType()
    }
  },
  components: {

  },
  computed: mapState({
    // signalTrend:state => state.signal.signalTrend 
  }),
  methods: {
    moreData() {
      this.$emit('toShowDialog', {
        show: true,
        type: this.type
      })
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
      return index === 1 ? 'tr-img5' : index === 3 ? 'tr-img6' : ''
    },
    timeRange(beginTime, endTime, nowTime) {
      var strb = beginTime.split(':');
      if (strb.length !== 2) {
        return false;
      }

      var stre = endTime.split(':');
      if (stre.length !== 2) {
        return false;
      }

      var b = new Date();
      var e = new Date();
      var n = new Date();

      b.setHours(strb[0]);
      b.setMinutes(strb[1]);
      e.setHours(stre[0]);
      e.setMinutes(stre[1]);

      if (n.getDay() === 6 || n.getDay() === 0) {
        return false;
      }
      if (n.getTime() - b.getTime() > 0 && n.getTime() - e.getTime() < 0) {
        // this.reFresh()
        return true;
      } else {
        // alert ('当前时间是：' + n.getHours () + ':' + n.getMinutes () + '，不在该时间范围内！');
        return false;
      }
      // return false;
    },
    checkChngPct(value) {
      let showFlag = this.timeRange('9:00',"9:30");
      if (value === null || value === '') {
        return '--';
      }else if(showFlag && Number(value) === 0) {
        return '--'
      }else {
        if (value > 0) {
          return '+' + (Number(value) * 100).toFixed(2) + '%';
        } else {
          return (Number(value) * 100).toFixed(2) + '%';
        }
      }
    }
  },
  mounted() {

  },
  destroyed() {

  }
}
</script>
