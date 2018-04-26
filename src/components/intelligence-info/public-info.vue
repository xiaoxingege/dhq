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
    <div class="block">
      <ambush type="stock" title="个股埋伏"></ambush>
    </div>
    <div class="block">
      <ambush type="plate" title="板块埋伏"></ambush>
    </div>
  </div>
</div>
</template>

<script>
import hot from 'components/intelligence-info/hot'
import ambush from 'components/intelligence-info/ambush'
export default {
  data() {
    return {

    }
  },
  components: {
    hot,
    ambush
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