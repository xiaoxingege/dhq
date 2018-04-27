import Vue from 'vue';

Vue.directive("popup", {
  bind: function(el) {
    el.title = 123;
  }
})