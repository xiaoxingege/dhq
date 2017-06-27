<style>
.demo-detail {
  text-align: center;
  font-size: 1rem
}
</style>

<template>
<div class="demo-wrapper">
  <div class="demo-wrapper-inner">
    <div class="demo-detail">{{message}}</div>
  </div>
  <sass />
  <pug />
  <no-router />
  <fetch />
  <store />
</div>
</template>

<script>
import Sass from './sass'
import Pug from './pug'
import NoRouter from './no-router'
import Fetch from './fetch'
import Store from './store'

export default {
  data () {
    return {
      message: 'Hello world'
    }
  },
  components: {
    Sass,
    Pug,
    NoRouter,
    Fetch,
    Store
  },
  methods: {

  },
  mounted () {
    document.title = 'vue-demo'
  }
}
</script>
