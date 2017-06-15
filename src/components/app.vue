<style>
/* init */

body,
div,
p,
h1,
h2,
h3,
h4,
h5,
h6,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
table,
th,
td {
	margin: 0;
	padding: 0;
}

body,
button,
input,
select,
textarea {
	font-family: 'PingFang SC'，'Droid Sans Fallback', "Microsoft YaHei", "微软雅黑", simsun, "宋体", tahoma, arial;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-size: 100%;
}

address,
cite,
em,
i {
	font-style: normal;
}

li {
	list-style: none;
}

a {
	text-decoration: none;
}

a:hover {
	text-decoration: none;
}

legend {
	color: #000;
}

fieldset,
img {
	border: 0;
}

button,
input,
select,
textarea {
	font-size: 100%;
	line-height: normal;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

input[type="button"],
input[type="submit"],
input[type="reset"] {
	cursor: pointer;
}

html {
	font-size: 100%;
	height: 100%;
	overflow: hidden;
}

body {
	height: 100%;
	color: #333;
	background: #f2f2f2;
	text-align: center;
	-webkit-appearance: none;
	-webkit-font-smoothing: antialiased;
	font-family: 'PingFang SC'，'Droid Sans Fallback', "Microsoft YaHei", "微软雅黑", tahoma, Helvetica, arial, sans-serif, simsun, "宋体";
}

input {
	-webkit-appearance: none;
}

.clearfix:after,
.wrapper:after {
	visibility: hidden;
	display: block;
	font-size: 0;
	content: " ";
	clear: both;
	height: 0;
}

.clearfix {
	display: inline-block;
}



/* start commented backslash hack \*/

* html .clearfix {
	height: 1%;
}

.clearfix {
	display: block;
}



/* close commented backslash hack */

.tl {
	text-align: left;
}

.tc {
	text-align: center;
}

.tr {
	text-align: right;
}

.fl {
	float: left;
}

.fr {
	float: right;
}

.layout-box {
	display: -webkit-box;
	display: -moz-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
}

.middle * {
	display: inline-block;
	vertical-align: middle;
}

.fade-enter-active,
.fade-leave-active {
	transition: all .3s ease;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
	transform: translateX(20px);
}

.fadein-item-transition {
	opacity: 1;
	-moz-transition: all .5s;
	-o-transition: all .5s;
	-webkit-transition: all .5s;
	transition: all .5s;
}

.fadein-item-enter,
.fadein-item-leave {
	opacity: 0;
}

.empty {
	font-size: .42rem;
	padding: .75rem;
}

.empty>div {
	height: 5rem;
	background: #fff;
	display: -webkit-box;
	display: -ms-flexbox;
	color: #999;
	display: -webkit-flex;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
}
</style>

<template>
<div style="height: 100%;position: relative;overflow: hidden;">
	<transition name="fade" mode="out-in">
		<router-view></router-view>
	</transition>
</div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  },
  mounted () {

  },
  methods: {

  }
}
</script>
