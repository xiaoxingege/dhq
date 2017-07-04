<style>
@import '../assets/animate.css';
html,
body,
ul,
li {
  margin: 0;
  padding: 0
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.app {
  text-align: center;
}
</style>

<template>
<div class="app">
  <transition enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
    <router-view></router-view>
  </transition>
</div>
</template>

<script>

</script>
