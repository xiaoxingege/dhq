<style>
@import '../assets/css/reset.css';
.limitmove{

}
.title-tab{
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom:0.01rem solid #DBDBDB;
}
.title-tab{
  overflow: hidden;
}
.title-item{
  text-align: center;
  font-size: 0.28rem;
  color:#333;
  float: left;
  width:2.5rem;
  position: relative;
}
.title-item.active{
  color:#F54949;
}
.title-item.active span{
  display: block;
  width:0.5rem;
  height: 0.04rem;
  background: #F54949 ;
  position: absolute;
  bottom:0;
  left:50%;
  margin-left:-0.25rem;
}

</style>

<template>
	<div class="limitmove">
		<div class="title-tab">
      <div class="title-item">
        涨跌停强度
        <span></span>
      </div>
      <div class="title-item">
        昨板今均
        <span></span>
      </div>
      <div class="title-item active">
        市场热度
        <span></span>
      </div>
    </div>
	</div>
</template>

<script>
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
import 'whatwg-fetch'

export default {
  data () {
    return {

    }
  },
  beforecreated () {

  },
  created () {
    document.title = '涨停追击'
  },
  mounted () {

  },
  filters: {

  },
  methods: {
  }
}
</script>
