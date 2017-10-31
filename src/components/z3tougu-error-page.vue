<template>
<div class="error-page">
  <div class="con">
    <p>{{message}}</p>
  </div>
</div>
</template>

<script>
export default {
  prop: ['message'],
  data() {
    return {
      icon: '',
      message: '您访问的页面出错...'
    }
  },
  mount() {
    document.getElementsByTagName('html')[0].style.fontSize = document.documentElement.getBoundingClientRect().width / 750 * 625 + '%'
  }
}
</script>

<style >
@import '../assets/css/base.css';
html,
body,
.app {
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
  background-size: 13.7rem 14.4rem
}

.con p {
  margin-top: 15.6rem;
  line-height: 2.0rem;
  font-size: 1.4rem;
  text-align: center;
}
</style>