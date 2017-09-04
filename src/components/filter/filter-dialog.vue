<template>
  <div class="filterDialog">
    <div class="mask"></div>
    <div class="in">
      <h3>{{title}}</h3>
      <i @click="dialogCloseFn" class="close"></i>
      <div class="con">
        <div class="up up1" v-if="content===1">
          <span>基金池名称</span><input type="text" name="" placeholder="请输入基金池名称">
        </div>
        <div class="up up2" v-if="content===2 ">
          <span>{{tsTxt}}</span>
        </div>
        <div class="down">
          <a href="javascript:;" @click="dialogOkFn">{{okbtntxt}}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
      }
    },
    props: ['title', 'okbtntxt', 'tsTxt', 'content'],
    methods: {
      dialogCloseFn () {
        this.$emit('close')
      },
      dialogOkFn () {
        this.$emit('dialogOkFn')
      }
    }
  }
</script>
<style scoped>
@import '../../assets/css/reset.css';
.filterDialog .mask{position: fixed;top:0;left:0;width:100%;height:100%; z-index: 10;background: rgba(0,0,0,.4)}
.filterDialog .in {
    width: 450px;
    position: fixed;
    top: 35%;
    left: 50%;
    margin-left: -200.5px;
    z-index: 11;
    background-color: #fff;
    border-radius: 5px;
}
.filterDialog h3 {
    height: 46px;
    line-height: 46px;
    background-color: #e7e7e7;
    border-radius: 5px 5px 0 0;
    font-weight: normal;
    font-size: 16px;
    color: #000;
    padding-left: 30px;
}
.filterDialog .close {
    width: 10px;
    height: 10px;
    position: absolute;
    right: 14px;
    top: 18px;
    background: url("../../assets/images/f_close.png") no-repeat;
    background-size: cover;
    cursor: pointer;
}
.filterDialog .con {padding: 30px 0;}
.filterDialog .up{margin: 0 auto;width:340px;}
.filterDialog .up2{width:380px;text-align: center;}
.filterDialog .up a{color: #2a8ae1;}
.filterDialog .up input{width:230px;height:34px; line-height: 34px; font-size: 14px; padding-left: 10px;margin-left: 10px;}
.filterDialog  .down{ display: flex;justify-content: center; margin-top:30px; }
.filterDialog  .down a{width:100px;line-height: 35px;background: blue;border-radius: 4px;color: #fff; text-align: center; margin:0 20px;}
</style>
