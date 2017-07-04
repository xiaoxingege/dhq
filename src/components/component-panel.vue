<style lang="scss" scoped>
.component-panel {
    margin: 10px;
    background: white;
    border-radius: 5px;
    padding: 5px;
}
.btns-panel {
    text-align: right;
}
.btn-detail {
    display: inline-block;
    padding: 4px 7px;
}
</style>

<template>
<div class="component-panel">
  <slot></slot>
  <div class="btns-panel">
    <a class="btn-detail" href="javascript:;">查看详细</a>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {},
  methods: {},
  mounted () {}
}
</script>
