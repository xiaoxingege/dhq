<style lang="scss" scoped>
.fixBg {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.8;
    z-index: 11;
}
.pop {
    width: 731px;
    height: 368px;
    background: url("../assets/images/zdian1-activity/web-pop-bg.png") 0 0 no-repeat;
    position: fixed;
    top: 50%;
    margin-top: -184px;
    left: 50%;
    margin-left: -365.5px;
    z-index: 12;
}
.pop-top {
    padding-top: 37px;
    width: 450px;
    height: 207px;
    margin-left: 171px;
    text-align: center;
}
.pop .close {
    width: 166px;
    height: 54px;
    float: left;
    margin-left: 307px;
}
</style>

<template>
<div>
  <div class='fixBg'></div>
  <div class="pop" ref="pop">
    <div class="pop-top">
      <slot></slot>
    </div>
    <a href="javascript:;" class="close" @click="close"></a>
  </div>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import $ from 'jquery'
export default {
  data () {
    return {}
  },
  computed: mapState({}),
  components: {},
  methods: {
    close () {
      this.$emit('close')
    }
  },
  mounted () {
    $(this.$refs.pop).css({
      transform: `scale(${$(window).width() * 0.9 / 731})`
    })
  }
}
</script>
