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
.tr-img {
    width: 18px;
    height: 18px;
    display: inline-block;
    background: url("../../assets/images/dhq/signal-icon2.png") no-repeat;
    background-position: 0 0;
    position: relative;
    top: 5px;
    left: 0;
}
.tr-img2 {
    background-position: 0 -19px;
}
.tr-img3 {
    background-position: 0 -38px;
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

  <!-- <div class="table-box display-box"> -->
  <table class="table1" v-if='signalRealTime.length!=0' ref='datalist'>
    <tr>
      <td colspan="4" v-show='name'>
        <span class="tr-img" :class="checkClass(type)"></span><span class="tr-title">{{name}}</span>
      </td>
    </tr>
    <!--  <tr v-if='signalRealTime.length==0'>
                <div class="no-data"></div>
                <div class="no-data-txt">暂无信号</div>
            </tr> -->
    <tr v-for="(item,index) of signalRealTime">
      <td>
        <!--  <router-link :to="{name:'foundpooldetail',params:{id:item.poolId}}" class="blue">{{item.poolName}}</router-link> -->
        <div>{{formatDuring(item.signalTime) ||'--'}}</div>
      </td>
      <td>
        <div @click='toNative({stockCode:concats(item.stockCode)})' class="tonative">
          <!-- <a :href="'/stock/'+item.stockCode" target="_blank"> -->{{item.stockName ||'--'}}
          <!-- </a> -->
        </div>
      </td>
      <td class="td-chngPct">
        <div v-z3-updowncolor="item.stockPl">{{checkChngPct(item.stockPl)}}</div>
      </td>
      <td>
        <div>{{item.signalName ||'--'}}</div>
      </td>

    </tr>
    <tr v-show='name'>
      <td colspan="4" @click="moreData" class="more">更多>></td>
    </tr>
  </table>
  <table v-if='signalRealTime.length==0'>
    <tr>
      <td colspan="4">
        <span class="tr-img" :class="checkClass(type)"></span><span class="tr-title">{{name}}</span>
      </td>
    </tr>
    <tr>
      <div class="no-data"></div>
      <div class="no-data-txt">暂无信号</div>
    </tr>
    <tr></tr>
  </table>
  <!--    </div> -->

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
  props: ['type', 'name', 'signalRealTime', 'thTitle'],
  data() {
    return {
      allData: [],
      hjfsArr: [], // type 5
      ztzjArr: [], // type 4
      cxgArr: [], // type 3,
      type: '',
      navTitle: ['火箭发射', '涨停追击', '创新高'],
      alltimers: '',
      size: ''

    }
  },
  watch: {

  },
  components: {

  },
  computed: mapState({}),
  methods: {
    moreData() {
      //  this.dialogShow = true
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
      return index === 4 ? 'tr-img2' : index === 3 ? 'tr-img3' : ''
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

  },
  destroyed() {}
}
</script>
