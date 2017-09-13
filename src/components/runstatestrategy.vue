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
.con_l{width:70%;float: left;}
.con_r{width:30%;float: left;}
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
  <div class="con clearfix">
      <div class="con_l">
        我是左边内容啊
      </div>
      <div class="con_r">
        <strategytab></strategytab>
      </div>
  </div>

</div>
</template>
<script>

import strategytab from 'components/strategytab'
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
    strategytab
  },
  computed: mapState({}),
  mounted () {

  },
  methods: {
  }
}
</script>
