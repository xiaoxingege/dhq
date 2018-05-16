<template>
<div class="z-info">
  <div class="info">
    <router-view></router-view>
  </div>
  <div class="public">
    <zInfoPublic></zInfoPublic>
  </div>
</div>
</template>

<script>
import zInfoPublic from 'components/intelligence-info/public-info'
export default {
  data() {
    return {

    }
  },
  components: {
    zInfoPublic
  }
}
</script>

<style lang="scss" scoped>
.z-info {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 462px;
    overflow: hidden;
}
.info {
    height: 100%;
    overflow: auto;
}
.public {
    position: fixed;
    width: 462px;
    top: 1px;
    right: 0;
    bottom: 2px;
}
</style>
