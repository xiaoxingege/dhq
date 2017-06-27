<style>
@import '../assets/animate.css';
.routed-app {
  text-align: center;
}
</style>

<template>
<div class="routed-app">
  <transition enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
    <router-view></router-view>
  </transition>
</div>
</template>

<script>

</script>
