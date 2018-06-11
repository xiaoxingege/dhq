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
<div>
  <!-- <div class="table-box display-box"> -->
  <div class="display-box table-box">
    <!--   -->
    <div class="table-detail box-flex-1" v-for="(item,index) of allData">
      <RealtimeTable :signalRealTime='item' :name='navTitle[index].name' :type="navTitle[index].type" />
    </div>
    <!-- <div class="table-detail box-flex-1">
                  <RealtimeTable :signalRealTime ='ztzjArr' :name='navTitle[1]'/>
               </div>
               <div class="table-detail box-flex-1">
                  <RealtimeTable :signalRealTime ='cxgArr' :name='navTitle[2]'/>
               </div> -->
    <!--          </div> -->
  </div>


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
//
import RealtimeTable from 'components/toolCenter/realtime-table'
export default {
  props: ['type', 'name'],
  data() {
    return {
      allData: [],
      hjfsArr: [], // type 5
      ztzjArr: [], // type 4
      cxgArr: [], // type 3,
      type: '',
      // navTitle:['火箭发射','涨停追击','创新高'],
      navTitle: [{
          name: '火箭发射',
          type: 5
        },
        {
          name: '涨停追击',
          type: 4
        },
        {
          name: '创新高',
          type: 3
        }
      ],
      alltimers: ''

    }
  },
  watch: {

  },
  components: {
    RealtimeTable
  },
  computed: mapState({
    signalRealTime: state => state.signal.signalRealTime
  }),
  methods: {
    initRealTimeType() {
      let p1 = new Promise((resolve, reject) => {
        this.$store.dispatch('signal/querySignalRealTime', {
          type: 5
        }).then(() => {
          resolve();
          this.hjfsArr = this.signalRealTime
        })
      });
      let p2 = new Promise((resolve, reject) => {
        this.$store.dispatch('signal/querySignalRealTime', {
          type: 4
        }).then(() => {
          resolve();
          this.ztzjArr = this.signalRealTime
        })
      });
      let p3 = new Promise((resolve, reject) => {
        this.$store.dispatch('signal/querySignalRealTime', {
          type: 3
        }).then(() => {
          resolve();
          this.cxgArr = this.signalRealTime
        })
      });
      Promise.all([p1, p2, p3]).then(() => {
        this.allData.push(this.hjfsArr, this.ztzjArr, this.cxgArr)
        console.log(this.allData)
      });
    }
  },
  mounted() {
    /*      var _this = this
          this.initRealTimeType()
          this.alltimers = setInterval(function() {
            _this.initRealTimeType()
          }, 30000) */
    this.initRealTimeType()




  },
  destroyed() {
    //  this.alltimers && clearInterval(this.alltimers)
  }
}
</script>
