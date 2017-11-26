<style lang="scss">
@import '../assets/css/base.css';
.theme-index {
    background: #f2f2f2;
    color: #191919;
    width: 100%;
    /* min-width: 1217px; */
}
</style>
<template>
<div class="theme-index">
  <AllTopic />
</div>
</template>

<script>
import AllTopic from './industry-alltopic'
export default {
  data() {
    return {}
  },
  components: {
    AllTopic
  }

}
</script>
