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
.subhd li{float:left;}
.section01{width:25%;background: #f2f2f2;padding: 5px;box-sizing: border-box;}
.section01 h3{ line-height: 28px;font-size: 14px;}
.section01 h3 i{ float: right;width:16px;height: 16px;background:url('../assets/images/z3img/ques.png') no-repeat center center;cursor: pointer;}
.section01 select{width:300px;}
.section01 .txt{font-size: 12px;color: #191919; line-height: 20px;margin:20px 0;}
.section01 .gushi span{ color: #666;font-size: 12px;line-height: 22px;}
.section01 .gushi .month{color: #191919; margin-left: 10px;}
.section01 .gushi li{ margin-bottom: 10px;}
.section01 .gushi li *{float: left; }
.section01 .gushi input{padding: 0;width:120px;height: 20px; padding-left: 5px;line-height: 20px;}

.section02{width:35%}
.section03{width:40%}
</style>
<template>
<div class="editstrategy">
  <div class="hd">
    <a href="#">测试组合1号</a>
    <span>创建时间：<i>2017.03.02</i></span>
    <span>修改时间：<i>2017.03.02</i></span>
    <span>复制</span>
    <span>删除</span>
  </div>
  <ul class="subhd clearfix">
    <li>
      <span>基金池：</span>
      <i>测试基金池1号</i>
    </li>
    <li>
      <span>现金基金：</span>
      <i>482002 工银货币</i>
    </li>
    <li>
      <span>投资方式：</span>
      <i>一次性投资</i>
    </li>
    <li>
      <span>初始金额/定投金额：</span>
      <i>1,00,000元</i>
    </li>
  </ul>
  <div class="bd">
    <div class="up">
      <div class="section01 fl">
        <h3>智能配置方案：<i></i></h3>
        <select class="" name="">
          <option value="0">手动配置</option>
          <option value="1" selected>智能-均衡配置方案</option>
          <option value="2">智能-风险最优配置方案</option>
          <option value="3">智能-趋势轮动配置方案</option>
        </select>
        <p class="txt">均衡配置方案介绍<br />如预期收益/风险估算期超过最长回测周期，则直接使用最大值进行回测。</p>
        <ul class="gushi">
          <li class="clearfix">
            <span>预期收益估算期：</span><input type="text" name="" value="3" placeholder="3"><span class="month">月</span>
          </li>
          <li class="clearfix">
            <span>预期风险估算期：</span><input type="text" name="" value="3" placeholder="3"><span class="month">月</span>
          </li>
        </ul>
        <h3>组合风险：</h3>
        <progressbar></progressbar>
      </div>
      <div class="section02 fl">

      </div>
      <div class="section03 fl">

      </div>
    </div>
  </div>
</div>
</template>
<script>
import 'whatwg-fetch'
import progressbar from 'components/progressbar'
import {
  mapState
} from 'vuex'
// import { domain } from '../z3tougu/config'

export default {
  data () {
    return {

    }
  },
  components: {
    progressbar
  },
  computed: mapState({}),
  mounted () {

  },
  methods: {
  }
}
</script>
