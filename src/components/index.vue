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
	<pug />
	<sass />
	<no-router />
	<fetch />
</div>
</template>

<script>
import Pug from './pug'
import Sass from './sass'
import NoRouter from './no-router'
import Fetch from './fetch'

export default {
  data () {
    return {
      message: 'Hello world'
    }
  },
  components: {
    Pug,
    Sass,
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
