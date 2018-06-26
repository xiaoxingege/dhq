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
}
</style>
<template>
<div class="replay-wrap">
  <ReplayGauge :summary='summary' />
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
export default {
  data() {
    return {

    }
  },
  watch: {

  },
  components: {
    ReplayGauge
  },
  computed: mapState({
    summary: state => state.aiReplay.summary,
    indexResume: state => state.aiReplay.indexResume
  }),
  methods: {
    init() {
      this.$store.dispatch('aiReplay/queryResume')
    }
  },
  mounted() {
    this.init()

  },
  destroyed() {

  }
}
</script>
