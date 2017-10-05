<style lang="scss" scoped>
@import '../../assets/css/base.css';
.top-nav {
    height: 100%;
    background-color: #23272c;
    color: #808ba1;
    padding-left: 20px;
}
.top-nav ul {
    height: 100%;
}
.top-nav ul li {
    width: 85px;
    height: 100%;
    float: left;
    position: relative;
}
.top-nav ul li > span {
    font-size: 12px;
    display: inline-block;
    height: 25px;
    line-height: 25px;
    width: 85px;
    text-align: center;
    cursor: pointer;
    border-radius: 3px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}
.nav-active {
    background: #525a65;
    color: #c9d0d7 !important;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 1217px) {
    .top-nav {
        height: 0.6rem;
        border-bottom: 1px solid #0799E5;
        background: #fff;
    }
    .top-nav ul li > span {
        font-size: 0.24rem;
        display: block;
        height: 0.6rem;
        line-height: 0.6rem;
        width: auto;
        padding: 0 0.1rem;
        text-align: center;
        cursor: pointer;
    }
}
</style>
<template>
<div class="top-nav">
  <ul class="clearfix">
    <li v-for="item in data"><span :style="styleObj" @click="changeTab($event)" :class="type === item[1] ? 'nav-active':''" href="#" :value="item[1]">{{item[0]}}</span></li>
  </ul>
</div>
</template>
<script>
export default {
  props: ['data', 'type', 'styleObject'],
  data () {
    return {
      activeSearch: this.$route.params.linkText,
      styleObj: this.styleObject || {}
    }
  },
  watch: {
    'this.activeSearch': function () {

    }
  },
  computed: {

  },
  methods: {
    changeTab (e) {
      const type = e.target.getAttribute('value')
      this.$emit('changeType', type)
    }
  },
  mounted () {

  }
}
</script>
