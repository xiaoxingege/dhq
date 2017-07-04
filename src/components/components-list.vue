<style lang="scss">
body {
    background-color: #dedede;
}
a {
    color: #666;
    font-size: 14px;
}
.components-list {
    height: 300px;
}
</style>

<template>
<div class="components-list">
  <ComponentPanel>
    <HeadNavDark />
  </ComponentPanel>
</div>
</template>

<script>
import ComponentPanel from './component-panel'
import HeadNavDark from './head-nav-dark'

export default {
  data () {
    return {}
  },
  components: {
    ComponentPanel,
    HeadNavDark
  },
  methods: {},
  mounted () {}
}
</script>
