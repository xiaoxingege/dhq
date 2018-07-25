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

.replay-wrap {

    /* border-top: 1px solid $bgDeepColor;
    border-left: 1px solid $bgDeepColor;
    border-right: 2px solid $bgDeepColor;
    border-bottom: 5px solid $bgDeepColor; */
    padding-top: 13px;
    border-left: 1px solid $bgDeepColor;
    border-right: 2px solid $bgDeepColor;
    border-bottom: 5px solid $bgDeepColor;
    min-width: 1217px;
}
.replay-center {
    margin-top: 6px;
    background: $bgConColor;

}
.center-title {
    padding: 9px 0 15px 5px;
    font-size: 14px;
}
.center-title {
    padding-bottom: 10px;
}
.table-box {
    width: 100%;
}
.table-detail {
    width: 33%;
    /*  font-size: 14px; */
    /* margin-right: 184px; */
    float: left;
}
.table-detail:last-child {
    margin-right: 0;
}
</style>
<template>
<div class="replay-wrap">
  <ReplayGauge :summary='summary' />
  <div class='replay-center'>
    <div class="center-title">重要指数表现</div>
    <ReplayTable :indexResume='indexResume' />
  </div>
  <div class='replay-center'>
    <div class="center-title center-title2">市场热点</div>
    <div class="table-box clearfix">
      <div class="table-detail" v-for="(item,index) of block">
        <ReplayBlock :blockData='item' :index="index" />
      </div>
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
import ReplayGauge from 'components/toolCenter/ai-replay-gauge'
import ReplayTable from 'components/toolCenter/ai-replay-table'
import ReplayBlock from 'components/toolCenter/ai-replay-block'
export default {
  data() {
    return {
      screenHeight: document.documentElement.clientHeight
    }
  },
  watch: {

  },
  components: {
    ReplayGauge,
    ReplayTable,
    ReplayBlock
  },
  computed: mapState({
    summary: state => state.aiReplay.summary,
    indexResume: state => state.aiReplay.indexResume,
    block: state => state.aiReplay.block
  }),
  methods: {
    init() {
      this.$store.dispatch('aiReplay/queryResume')
    },
    initHeigh() {
      const height = (this.screenHeight) - 624
      var chartHeight = Math.floor(height);
      console.log(chartHeight)
      return chartHeight

    }
  },
  mounted() {
    this.init()
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenHeight = document.documentElement.clientHeight
        that.screenHeight = window.screenHeight
        //  console.log(window.screenHeight)

      })()
    }
    this.initHeigh()
  },
  destroyed() {

  }
}
</script>
