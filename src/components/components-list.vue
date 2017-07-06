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
  <ComponentPanel name="head-nav-dark" desc="金融界网站头部深色导航" :props="[
    {
      name: 'logo-url',
      desc: '替换默认的logo图片'
    }
  ]" :events="[
    {
      name: 'logoclick',
      desc: '点击logo时的事件'
    }
  ]" :slots="[
    {
      name: 'search',
      desc: '用于插入搜索框'
    }
  ]">
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
