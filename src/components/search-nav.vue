<style lang="scss" scoped>
@import '../assets/css/base.css';

.topNav {
    height: 23px;
    background: #33383D;
}

.topNav ul li {
    float: left;
    border-right: 1px solid #242A30;
}

.topNav ul li > a {
    color: #c9d0d7;
    font-size: 12px;
    display: block;
    height: 23px;
    line-height: 23px;
    width: 75px;
    text-align: center;
    cursor: pointer;
}

.router-link-active {
    background: #535A65;
    color: #fff;
}
</style>
<template>
<div class="topNav">
  <ul class="clearfix">
    <li>
      <router-link :to="{name:'search',params:{ linkText : 'stock' }}">股票</router-link>
    </li>
    <li>
      <router-link :to="{name:'search',params:{ linkText : 'section' }}">板块</router-link>
    </li>
    <li>
      <router-link :to="{name:'search',params:{ linkText : 'signal' }}">信号</router-link>
    </li>
    <li>
      <router-link :to="{name:'search',params:{ linkText : 'infor' }}">资讯</router-link>
    </li>
    <li>
      <router-link :to="{name:'search',params:{ linkText : 'report' }}">研报</router-link>
    </li>
    <li>
      <router-link :to="{name:'search',params:{ linkText : 'strategy' }}">策略</router-link>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  data() {
    return {
      activeSearch: this.$route.params.linkText
    }
  },
  watch: {
    'this.activeSearch': function() {

    }
  },
  cumputed: {

  },
  methods: {
    changeTab() {
      this.activeSearch = this.$route.params.linkText
    }
  },
  mounted() {

  }
}
</script>
