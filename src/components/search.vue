<style lang="scss">
@import '../assets/css/base.css';

.app,
body,
html {
    height: 100%;
}
body {
    height: 100%;
    background: #191A1D;
    font-family: "微软雅黑";
}

.search {
    background: #191a1d;
    padding: 1px 1px 0;
    width: 100%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    /* Firefox */
    -webkit-box-sizing: border-box;
    /* Safari */
}
</style>
<template>
<div class="search">
  <search-nav/>

  <search-result />

</div>
</template>

<script>
import SearchNav from 'components/search-nav'
import SearchResult from 'components/search-result'

export default {
  data () {
    return {}
  },
  components: {
    SearchNav,
    SearchResult
  },
  methods: {

  },
  mounted () {

  }
}
</script>
