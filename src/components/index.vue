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
	<jade />
	<sass />
	<no-router />
</div>
</template>

<script>
import Jade from './Jade'
import Sass from './Sass'
import NoRouter from './no-router'

let iscroll;

export default {
	data() {
		return {
			message: 'Hello world'
		}
	},
	components: {
		Jade,
		Sass,
		NoRouter
	},
	methods: {

	},
	mounted() {
		document.title = 'vue-demo';
	}
}
</script>
