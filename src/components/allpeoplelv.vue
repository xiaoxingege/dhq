<style>
@import '../assets/css/reset.css';
html {
  height: 100%;
}

body {
  background: #f04337 url(../assets/images/jichushare/bg.jpg) no-repeat;
  background-size: 100% 100%;
}

.jichushare {}

.jichushare-message {
  position: fixed;
  top: 0;
  right: .5rem;
  z-index: 1
}
</style>

<template>
<div class="jichushare">
  <JichushareMessage/>
  <JichushareToast/>
</div>
</template>

<script>
import JichushareMessage from 'components/jichushare-message'
import JichushareToast from 'components/jichushare-toast'

export default {
  components: {
    JichushareMessage,
    JichushareToast
  },
  mounted () {
    document.title = '全民体验Lv2'
  }
}
</script>
