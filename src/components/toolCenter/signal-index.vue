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
.signal-wrap {
    width: 100%;
    border-top: 1px solid $bgDeepColor;
    border-left: 1px solid $bgDeepColor;
    border-right: 2px solid $bgDeepColor;
    border-bottom: 5px solid $bgDeepColor;

}
.top-title {
    padding: 16px 0 9px;
    font-size: 16px;

}
.title-img {
    width: 16px;
    height: 16px;
    display: inline-block;
    background: url("../../assets/images/dhq/signal-icon1.png") no-repeat;
    background-position: 0 0;
    position: relative;
    top: 3px;
    left: 0;
}
.title-txt {
    font-size: 16px;
    padding-left: 8px;
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
<div class="signal-wrap">
  <div class="top-title">
    <span class="title-img"></span>
    <span class="title-txt">实时信号</span>
  </div>

  <RealtimeSignal/>
  <!-- </div> -->

  <div class="top-title">
    <span class="title-img"></span>
    <span class="title-txt">趋势信号</span>
    <span>{{time}}更新</span>
  </div>
  <TrendSignal @timeValue='setValue' />

</div>
</template>
<script>
/* import {
  ctx
} from '../../dhq/config' */
import {
  mapState
} from 'vuex'
import RealtimeSignal from 'components/toolCenter/realtime-signal'
import TrendSignal from 'components/toolCenter/trend-signal'
export default {
  data() {
    return {
      time: ''
    }
  },
  watch: {

  },
  components: {
    RealtimeSignal,
    TrendSignal
  },
  computed: mapState({

  }),
  methods: {
    setValue: function(v) {
      this.time = v;
      console.log(this.time)
    }
  },
  mounted() {

  },
  destroyed() {

  }
}
</script>
