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
	<hello />
</div>
</template>

<script>
import hello from './hello'

let iscroll;

export default {
	data() {
		return {
			message: 'Hello world'
		}
	},
	components: {
		hello
	},
	methods: {

	},
	mounted() {
		document.title = 'vue-demo';
	}
}
</script>
