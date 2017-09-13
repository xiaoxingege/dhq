<style scoped>
@import '../assets/css/reset.css';
input {
  outline: none;
}

body {
  background: #fff;
}
.clearfix:after{ display: block;content: ''; clear: both;}
a,
.blue {
  color: #2a8ae1;
}

.runstatestrategy{font-size: 12px;}
</style>
<template>
<div class="runstatestrategy">
  <div class="hd">
    <a href="#">测试组合1号</a>
    <span>创建时间：<i>2017.03.02</i></span>
    <span>修改时间：<i>2017.03.02</i></span>
    <span>复制</span>
    <span>删除</span>
  </div>
  <locationparam v-bind:h4show="h4show"></locationparam>
  <locationrecord></locationrecord>
</div>
</template>
<script>

import locationrecord from 'components/locationrecord'
import locationparam from 'components/locationparam'
import {
  mapState
} from 'vuex'
// import { domain } from '../z3tougu/config'

export default {
  data () {
    return {
      h4show: true // 控制调仓参数里面的h4是否显示
    }
  },
  components: {
    locationrecord,
    locationparam
  },
  computed: mapState({}),
  mounted () {

  },
  methods: {
  }
}
</script>
