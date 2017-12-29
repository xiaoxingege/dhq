<style>
@import '../assets/css/reset.css';
.conpon{
  font-size:0.28rem;
}
</style>

<template>
<div class="conpon">
  优惠券介绍页内容
</div>
</template>

<script>
import 'whatwg-fetch'

export default {
  data () {
    return {
      name: '你的名字'
    }
  },
  beforecreated () {

  },
  created () {

  },
  mounted () {
    document.title = '相似k线解读'
  },
  methods: {
    toiphone(){
    alert('拨打134567890')
    }
  }
}
</script>
