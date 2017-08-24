 import Vue from 'vue'

 Vue.directive('stock-popup', function (el, binding) {
   console.log(el.arc) // => "white"
   // console.log(binding.value.text)  // => "hello!"
  /* bind: function () {
    console.log(this.expression) // 'foo'
  },
  update:function(newVal,oldVal){

  },
  unbind:function(){

  }*/
 })
