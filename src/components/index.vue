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
</div>
</template>

<script>
import Jade from './Jade'
import Sass from './Sass'

let iscroll;

export default {
	data() {
		return {
			message: 'Hello world'
		}
	},
	components: {
		jade: Jade,
		sass: Sass
	},
	methods: {

	},
	mounted() {
		document.title = 'vue-demo';
	}
}
</script>
