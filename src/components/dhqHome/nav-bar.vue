<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style.scss";
.top-nav {
    height: 100%;
    background-color: $lineAndTitleColor;
    color: $grayWordsColor;
    padding-left: 20px;
}
.top-nav ul {
    height: 100%;
}
.top-nav ul li {
    height: 100%;
    float: left;
    position: relative;
}
.top-nav ul li > span {
    font-size: $fontSizeBase;
    display: inline-block;
    height: 25px;
    line-height: 25px;
    width: 100%;
    text-align: center;
    cursor: pointer;
    border-radius: 3px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}
.nav-active {
    color: $wordsColorBase !important;
}
</style>
<template>
<div class="top-nav">
  <ul class="clearfix">
    <li v-for="item in data" :style="styleLiObj"><span @click="changeTab($event)" :style="type === item[1] ?styleObj:{}" :class="type === item[1] ? 'nav-active':''" href="#" :value="item[1]">{{item[0]}}</span></li>
  </ul>
</div>
</template>
<script>
export default {
  props: ['data', 'type', 'styleObject', 'styleLiObj'],
  data() {
    return {
      activeSearch: this.$route.params.linkText,
      styleObj: this.styleObject || {},
      styleLiObj: this.styleLiObj || {}
    }
  },
  watch: {
    'this.activeSearch': function() {

    }
  },
  computed: {

  },
  methods: {
    changeTab(e) {
      const type = e.target.getAttribute('value')
      this.$emit('changeType', type)
    }
  },
  mounted() {

  }
}
</script>
