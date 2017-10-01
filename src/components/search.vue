
<style>
@import '../assets/css/base.css';
body {
  background: #191A1D;
  font-family: "微软雅黑";
}

.search {
  padding: 1px 1px 0px 1px;
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
