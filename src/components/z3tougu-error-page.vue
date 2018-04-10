<template>
<div class="error-page">
  <div class="con">
    <p>{{error.errorMsg}}</p>
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
      icon: '',
      message: '您访问的页面出错...'
    }
  },
  computed: mapState({
    error: state => state.error
  }),
  mounted() {
    document.getElementsByTagName('html')[0].style.fontSize = document.documentElement.getBoundingClientRect().width / 750 * 625 + '%'
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/base.css';
.app,
body,
html {
    height: 100%;
}

.error-page {
    position: relative;
    height: 100%;
    width: 100%;
    background: #e9edef;
}

.con {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translate(0, -50%);
    background: url("../assets/images/z3img/page-error.png") center 4px no-repeat;
    background-size: 1.37rem 1.44rem;
}

.con p {
    margin-top: 2.0rem;
    line-height: 0.54rem;
    font-size: 0.36rem;
    text-align: center;
    color: #727373;
}
</style>