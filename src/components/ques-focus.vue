<style lang="scss" scoped>
@import '../assets/css/reset.css';

.ques-focus-box {
    width: 80%;
    height: 6rem;
    background-color: #fff;
    position: fixed;
    left: 10%;
    top: 50%;
    margin-top: -3rem;
    z-index: 11;
    border-radius: 0.1rem;
    text-align: center;
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
.ques-focus-box img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin-top: 1rem;
}
.ques-focus-box h3 {
    font-size: 0.34rem;
    color: #333;
    margin-top: 0.3rem;
}
.ques-focus-box p {
    font-size: 0.28rem;
    color: #888;
    margin: 0.25rem 0;
}
.ques-focus-box button {
    width: 80%;
    margin: 0.25rem 10%;
    background-color: #3388ff;
    height: 0.9rem;
    line-height: 0.9rem;
    color: #fff;
    border-radius: 0.1rem;
    border: none;
    outline: none;
    float: left;
    font-size: 0.32rem;
}
</style>

<template>
<div class="ques-focus-box">
  <i class="close" @click="close"></i>
  <img src="../assets/images/ques-alading/img2.png" alt="">
  <h3>金融界</h3>
  <p>关注官方号可即时收到回复</p>
  <button type="button" name="button">关注并继续</button>
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
      this.$emit('focusClose')
    }
  },
  mounted() {}
}
</script>
