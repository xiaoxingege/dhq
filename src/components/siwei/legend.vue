<template>
<div class="legend clearfix">
  <div class="fr">
    <ul class="clearfix">
      <li v-for="(item,index) in legendData" :style="{'background':item.color}">{{item.value}}</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['legendData']
}
</script>

<style lang="scss" scoped>
.legend {
    float: right;
    // position: absolute;
    bottom: 0;
    color: #fff;
    margin: 12px 0;
}

.legend ul li {
    float: left;
    width: 60px;
    margin-left: 1px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 12px;
}
</style>