<template>
<div class="z-info-public">
  <div class="top">
    <div class="block">
      <hot type="stock" title="热股"></hot>
    </div>
    <div class="block">
      <hot type="word" title="热词"></hot>
    </div>
  </div>
  <div class="bottom">
    <div class="block"></div>
    <div class="block"></div>
  </div>
</div>
</template>

<script>
import hot from 'components/intelligence-info/hot'
export default {
  data() {
    return {

    }
  },
  components: {
    hot
  }
}
</script>

<style lang="scss" scoped>
.z-info-public {
    height: 100%;
}
.top {
    height: 50%;
}
.block {
    height: 100%;
    width: calc(50% - 1px);
    float: left;
    margin-left: 1px;
}
.bottom {
    height: 50%;
}
</style>