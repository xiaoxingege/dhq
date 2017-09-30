<style lang="scss" scoped>
@import '../assets/css/reset.css';

.ques-license {
    width: 90%;
    position: fixed;
    top: 50%;
    left: 5%;
    height: 4.3rem;
    margin-top: -2.15rem;
    background-color: #fff;
    border-radius: 0.1rem;
    z-index: 11;
}
.close {
    width: 0.28rem;
    height: 0.28rem;
    position: absolute;
    top: 0.2rem;
    right: 0.27rem;
    background: url("../assets/images/ques-alading/close.png") no-repeat;
    background-size: 100% 100%;
}
.ques-license-user {
    width: 90%;
    padding: 0 5%;
    float: left;
    padding-top: 0.6rem;
    height: 0.6rem;
    line-height: 0.6rem;
}
.ques-license-user img {
    width: 0.6rem;
    height: 0.6rem;
    float: left;
    border-radius: 50%;
}
.ques-license-user strong {
    font-size: 0.3rem;
    color: #333;
    float: left;
    margin-left: 0.24rem;
}
.ques-license-user a {
    font-size: 0.26rem;
    color: #2e7cd7;
    float: right;
}
.ques-license button {
    width: 90%;
    background-color: #3388ff;
    height: 0.9rem;
    border: none;
    margin: 0.35rem 5%;
    float: left;
    color: #fff;
    border-radius: 0.1rem;
    outline: none;
    line-height: 0.9rem;
    font-size: 0.32rem;
}
.ques-license p {
    font-size: 0.26rem;
    color: #555;
    width: 90%;
    padding: 0 5%;
    float: left;
}
.ques-license-checkbox {
    width: 90%;
    float: left;
    padding: 0.3rem 5%;
    height: 0.3rem;
}
.ques-license-checkbox input {
    width: 0.3rem;
    height: 0.3rem;
    float: left;
}
.ques-license-checkbox span {
    font-size: 0.24rem;
    color: #999;
    float: left;
    margin-left: 0.2rem;
}
</style>

<template>
<div class="ques-license">
  <i class="close" @click="close"></i>
  <div class="ques-license-user">
    <img src="../assets/images/ques-alading/img1.png" />
    <strong>空空道人</strong>
    <a href="javascript:;">切换账号</a>
  </div>
  <button type="button" name="button">授权</button>
  <p>允许 “金融界官方号” 应用进行以下操作：</p>
  <div class="ques-license-checkbox">
    <input type="checkbox" />
    <span>获取你的公开信息（昵称、头像等）</span>
  </div>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'

export default {
  data() {
    return {
      //   txtVal: '0'
    }
  },
  computed: mapState({
    // CodeData: state => {
    //   return state.quesSearch.CodeData
    // }
  }),
  components: {
    // quesSearch
  },
  methods: {
    close() {
      this.$emit('licenseClose')
    }
  },
  mounted() {

  }
}
</script>
