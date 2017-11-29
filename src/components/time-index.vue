<style lang="scss">
@import '../assets/css/base.css';
body,
html {
    height: 100%;
}
.app {
    height: 100%;
}
body {
    font-size: 12px;
}
.blue {
    color: #2388da;
    font-size: 12px;
}
.red {
    color: #e6363a;
}
.green {
    color: #48a854;
}
.fr {
    float: right;
}
.fl {
    float: left;
}

.backtest-time {
    background: #141518;
    color: #c9d0d7;
    // border-bottom: 3px solid #0d0e0f;
    // border-left: 1px solid #0d0e0f;
    /* padding: 0 20px 20px 0; */
    // padding-right: 20px;
    // padding-bottom: 20px;
    min-height: 100%;
    position: relative;
}
</style>
<template>
<div class="backtest-time">
  <TimeCharts :chartWidth="800" :chartHeight="600" :strategyId="strategyId" :innerCode="innerCode"></TimeCharts>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
import TimeCharts from 'components/time-charts'
export default {
  data() {
    return {
      strategyId: '15__2__macd_24_102_8',
      innerCode: '000002.SZ'
    }
  },
  computed: mapState({

  }),
  components: {
    TimeCharts
  },
  methods: {

  },
  mounted() {


  }
}
</script>
