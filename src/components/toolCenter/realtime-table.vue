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
.table-box {
    }
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
</style>
<template>
<div class="signal-table-wrap">
  <!-- <div class="table-box display-box"> -->
  <table class="table1" v-if='signalRealTime.length!=0'>
    <tr>
      <td colspan="4">
        <span class="tr-img" :class="checkClass(type)"></span><span class="tr-title">{{name}}</span>
      </td>
    </tr>
    <!--  <tr v-if='signalRealTime.length==0'>
                <div class="no-data"></div>
                <div class="no-data-txt">暂无信号</div>
            </tr> -->
    <tr v-for="(item,index) of signalRealTime" v-if="index<8">
      <td>
        <!--  <router-link :to="{name:'foundpooldetail',params:{id:item.poolId}}" class="blue">{{item.poolName}}</router-link> -->
        {{formatDuring(item.signalTime)}}
      </td>
      <td>
        <div>{{item.signalName}}</div>
      </td>
      <td class="td-chngPct">
        <div v-z3-updowncolor="item.stockPl">{{item.stockPl | chngPct}}</div>
      </td>
      <td>
        <div>{{item.signalName}}</div>
      </td>

    </tr>
    <tr>
      <td colspan="4">更多>></td>
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
import {
  mapState
} from 'vuex'
export default {
  props: ['type', 'name', 'signalRealTime'],
  data() {
    return {
      allData: [],
      hjfsArr: [], // type 5
      ztzjArr: [], // type 4
      cxgArr: [], // type 3,
      type: '',
      navTitle: ['火箭发射', '涨停追击', '创新高'],
      alltimers: ''

    }
  },
  watch: {

  },
  components: {

  },
  computed: mapState({}),
  methods: {
    formatDuring(time) {
      var date = new Date(time)
      var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours())
      var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes())
      return h + ':' + m
    },
    checkClass(index) {
      return index === 4 ? 'tr-img2' : index === 3 ? 'tr-img3' : ''
    }
  },
  mounted() {


  },
  destroyed() {}
}
</script>
