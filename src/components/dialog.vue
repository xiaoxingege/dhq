<style lang="scss" scoped>
@import '../assets/css/base.css';
.masks {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: absolute;
    z-index: 999;
}
.dialog {
    width: 800px;
    border: 1px solid #8C8C8C;
    z-index: 9999;
    background: #d6d6d6;
    font-size: 12px;
    color: #000;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 10px;
    -webkit-transform: translate3d(-50%, -50%, 0);
    -moz-transform: translate3d(-50%, -50%, 0);
    -ms-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
}
.header {
    height: 28px;
    line-height: 28px;
    text-align: left;
    background: #404852;
    padding-left: 10px;
    color: #c9d0d7;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
}
button {
    width: 70px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 3px;
    border: none;
    cursor: pointer;
}
.sureBtn {
    background: #1984ea;
    color: #c9d0d7;
}
.cancleBtn {
    background: #fff;
    color: #666;
    cursor: pointer;
    border-radius: 3px;
}
input,
select {
    width: 160px;
    height: 28px;
    line-height: 28px;
    border-radius: 3px;
    margin-left: 5px;
    color: #666;
    border-color: #acacac;
    -webkit-appearance: none;
    background: url("../assets/images/select-arrow.png") no-repeat scroll right center transparent;
    background-position-x: 95%;
    background-color: #c1c1c1;
    padding-left: 10px;

}
input {
    width: 153px;
    border: 1px solid #acacac;
    height: 26px;
    line-height: 28px;
    padding-left: 5px;
    background: #c1c1c1;
    font-size: 12px;
}
.dialogMain {
    padding: 0 45px;
    text-align: center;
}
.dialogMain > span {
    float: left;
}
.closed {
    display: inline-block;
    width: 30px;
    line-height: 25px;
    text-align: center;
    cursor: pointer;
    font-size: 27px;
    color: #999;
}
.footer {
    text-align: center;
    position: relative;
}
</style>
<template>
<div class="masks">
  <div class="dialog">
    <div class="header clearfix">{{title}}<span class="fr closed" @click="hideDialog">×</span></div>

    <slot name="content"></slot>

    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: ['title'],
  data () {
    return {

    }
  },
  methods: {
    hideDialog () {
      this.$emit('toHideDialog', false)
    }
  },
  mounted () {

  }
}
</script>
