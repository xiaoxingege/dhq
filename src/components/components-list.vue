<style lang="scss">
a {
    color: #666;
    font-size: 14px;
}
</style>

<template>
<div class="components-list">
  <!-- <ComponentPanel name="head-nav-dark" desc="金融界网站头部深色导航" :props="[
    {
      name: 'logo-url',
      desc: '替换logo图片'
    }
  ]" :events="[
    {
      name: 'logoclick',
      desc: '点击logo触发的事件'
    }
  ]" :slots="[
    {
      name: 'search',
      desc: '用于插入搜索框'
    }
  ]">
    <HeadNavDark />
  </ComponentPanel> -->
  <ComponentPanel name="jichushare-message" desc="基础分享-活动说明" :props="[
  ]" :events="[
  ]" :slots="[
  ]">
    <div style="background:#f04337;">
      <JichushareMessage />
    </div>
  </ComponentPanel>
</div>
</template>

<script>
import ComponentPanel from './component-panel'
import HeadNavDark from './head-nav-dark'
import JichushareMessage from './jichushare-message'

export default {
  data () {
    return {}
  },
  components: {
    ComponentPanel,
    HeadNavDark,
    JichushareMessage
  },
  methods: {},
  mounted () {}
}
</script>
