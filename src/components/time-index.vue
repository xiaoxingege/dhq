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
  <TimeCharts :chartWidth="800+'px'" :chartHeight="600+'px'" :strategyId="strategyId" :innerCode="innerCode"></TimeCharts>
  <Autocomplete :chartWidth="800+'px'" :chartHeight="600+'px'" :strategyId="strategyId" :innerCode="innerCode" :url="url" :data="customersFuzzy.searchList" @changeSelectValue="setSelectValue"></Autocomplete>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import TimeCharts from 'components/time-charts'
import Autocomplete from 'components/autocomplete'
export default {
  data() {
    return {
      strategyId: '41__55__boll_8_8_2',
      innerCode: '601668.SH',
      url: 'openapi/personas/JRJ2001803730/tips?field=phone&value=1',
      msgVal: ''
    }
  },
  computed: mapState({
    customersFuzzy: state => {
      const listData = state.customerList.customersFuzzy
      return {
        searchList: listData.datas,
        searchTotal: listData.total
      }
    }
  }),
  components: {
    TimeCharts,
    Autocomplete
  },
  methods: {
    init() {
      this.$store.dispatch('customerList/queryCustomersFuzzy', {
        field: 'phone',
        paramValue: this.msgVal
      })
    },
    setSelectValue: function(v) {
      this.msgVal = v
      console.log(this.msgVal)
      this.init()
    }
  },
  mounted() {

    // this.init()
  }
}
</script>
