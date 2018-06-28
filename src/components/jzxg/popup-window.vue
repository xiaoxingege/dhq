<template>
<div class="window-mask">
  <div class="pop-window" :style="{width:popWidth+'px',height:popHeight+'px'}">
    <div class="pop-header">
      <span class="pop-title">{{popTitle}}</span>
      <span class="pop-close" @click="closePopWindow">×</span>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: ['popWidth', 'popHeight', 'popTitle'],
  components: {

  },
  methods: {
    closePopWindow: function() {
      this.$emit('closeWindow')
    }
  }
}
</script>
<style lang="scss" scoped>
.window-mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.pop-window {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
}
.pop-header {
    height: 30px;
    padding-left: 20px;
    border-bottom: 0.5px solid #f0f0f0;
    position: relative;
}
.pop-title {
    font-size: 14px;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    color: #000;
}
.pop-close {
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    color: #999;
    font-size: 30px;
    position: absolute;
    top: 0;
    right: 20px;
}
</style>