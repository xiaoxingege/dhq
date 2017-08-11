<style lang="scss" scoped="">
	.hover-wrapper{
		border: 4px solid #25262b;
		background: #fff;
		position: fixed;
		min-width: 300px;
		overflow: hidden;
		z-index: 10000;
		/*top:10px;
        left:10px;*/
	}
	.hover-wrapper h3{
		font-size: 13.5px;
		font-weight: 700;
		color: #25262b;
		margin: 0;
		line-height: 30px;
		padding: 0 10px;
		text-transform: uppercase;
		white-space: nowrap;
	}
	.hover-wrapper table.is-small tr{height: 23px;}
	.hover-wrapper table .hovered{
		color: #fff;
		font-size: 21px;
		font-weight: 700;
		border-bottom: none;
		height: 21px;
	}
	.hover-wrapper table .hovered td{
		padding-top: 14px;
		line-height: 18px;
	}
	.hover-wrapper table tr{
		border-bottom: 2px solid #e3e4e9;
		height: 30px;
		color:#000
	}
	.tiker{
		padding-left: 10px;
	}
	td{padding:0}
	.hover-wrapper table .price{
		text-align: right;
		padding-left: 4px;
		padding-right: 4px;
	}
	.hover-wrapper table .change{
		text-align: right;
		padding-right: 10px;
	}
	.tiker{
		width:98px;
	}
	.hover-wrapper table tr td:nth-child(1){
		width: 70px;
		color:red !important;
	}
</style>
<template>
	<div style="color:green;">
		{{stock}}
	</div>
</template>
<script type="text/javascript">
	export default{
	  data () {
	    return {
	      stock: 'tt'
	    }
	  }
	}
</script>