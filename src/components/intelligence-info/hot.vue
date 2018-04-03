<template>
<div>
  <dl>
    <dt class="tit">{{title}}</dt>
    <dd v-for="item of dataList">
      <span>{{}}</span>
      <span></span>
      <span></span>
    </dd>
  </dl>
</div>
</template>

<script>
import echarts from 'echarts'
import config from '../../z3tougu/config'
import util from '../../z3tougu/util'
export default {
  property: ['title', 'type'],
  data() {
    return {

    }
  },
  computed: mapState({
    dataList: state => {
      debugger;
    }
  }),
  methods: {

  },
  mounted() {
    if (type === "stock") {
      this.$store.dispatch('zInfoPublic/retrieveStocks');
    } else if (type === "words") {
      this.$store.dispatch('zInfoPublic/retrieveWords');
    }
  }
}
</script>