<style>
.demo-wrapper {
	height: 100%;
}

.demo-wrapper-inner {}

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
</div>
</template>

<script>
import Sass from './sass'
import Pug from './pug'
import NoRouter from './no-router'
import Fetch from './fetch'

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
    Fetch
  },
  methods: {

  },
  mounted () {
    document.title = 'vue-demo'
  }
}
</script>
