<style>

</style>
<template>
<div class="ztgBox">
  <div>
    <div>炸板股</div>
    <div></div>
  </div>
  <div></div>
</div>
</template>
<script>
export default {
  data() {
    return {
      options: {
        xDefault: 'mkt_idx.volume_ratio',
        yDefault: 'mkt_idx.exchr',
        sizeDefault: 'mkt_idx.mktcap',
        colorDefault: 'perf_idx.chng_pct_month',
        type: 2
      }

    }
  },
  methods: {},
  mounted() {
    this.$store.dispatch('bubbles/getStockBubbles', {
      options: this.options
    })
  }

}
</script>