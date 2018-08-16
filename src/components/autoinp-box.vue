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
    min-height: 100%;
    position: relative;
}
</style>
<template>
<div class="backtest-time">
  <Autocomplete :chartWidth="800+'px'" :chartHeight="600+'px'" :strategyId="strategyId" :innerCode="innerCode" :url="url"></Autocomplete>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import Autocomplete from 'components/autocomplete'
export default {
  data() {
    return {
      strategyId: '15__2__macd_24_102_8',
      innerCode: '000002.SZ',
      url: 'openapi/personas/JRJ2001803730/tips?field=phone&value=1'
    }
  },
  computed: mapState({

  }),
  components: {
    Autocomplete
  },
  methods: {

  },
  mounted() {


  }
}
</script>
