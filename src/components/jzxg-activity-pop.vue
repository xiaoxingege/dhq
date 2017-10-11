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
    width: 593px;
    height: 346px;
    background: url("../assets/images/jzxg-activity/jzxg-web-pop.png") 0 0 no-repeat;
    position: fixed;
    top: 50%;
    margin-top: -173px;
    left: 50%;
    margin-left: -296.5px;
    z-index: 12;
}
.pop-top {
    padding-top: 26px;
    width: 100%;
    height: 207px;
    text-align: center;
}
.pop .close {
    width: 196px;
    height: 55px;
    float: left;
    margin-left: 195px;
}
</style>

<template>
<div>
  <div class='fixBg'></div>
  <div class="pop">
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
  mounted () {}
}
</script>
