<style>
@import '../assets/css/reset.css';
.founddialog .mask{position: fixed;top:0;left:0;width:100%;height:100%; z-index: 10;background: rgba(0,0,0,.4)}
.founddialog .in {
    width: 450px;
    position: fixed;
    top: 35%;
    left: 50%;
    margin-left: -200.5px;
    z-index: 11;
    background-color: #fff;
    border-radius: 5px;
}
.founddialog h3 {
    height: 46px;
    line-height: 46px;
    background-color: #e7e7e7;
    border-radius: 5px 5px 0 0;
    font-weight: normal;
    font-size: 16px;
    color: #000;
    padding-left: 30px;
}
.founddialog .close {
    width: 21px;
    height: 21px;
    position: absolute;
    right: 14px;
    top: 12px;
    background: url("../assets/images/z3img/delete.png") no-repeat;
    cursor: pointer;
}
.founddialog .con {

  padding: 30px 0;

}
.founddialog .up{margin: 0 auto;width:340px;}
.founddialog .up2{width:380px;}
.founddialog .up a{color: #2a8ae1;}
.founddialog .up input{width:230px;height:34px; line-height: 34px; font-size: 14px; padding-left: 10px;margin-left: 10px;}
.founddialog  .down{ display: flex;
    justify-content: center; margin-top:30px; }
    .founddialog  .down a{width:100px;line-height: 35px;background: blue;border-radius: 4px;color: #fff; text-align: center; margin:0 20px;}

    .newzuhe li span{float: left}
    .newzuhe li i{float: left;position: relative;}
    .newzuhe li i div{position: absolute;top:-10px;left:5px;width:120px;border:1px solid #000;font-size: 10px;background: #fff;}
    .newzuhe li select{float: right;width: 170px;}

</style>
<template>
<div class="founddialog">
  <div class="mask"></div>
  <div class="in">
    <h3>{{title}}</h3>
    <i @click="dialogclosefn" class="close"></i>
    <div class="con">
        <div class="up up1"  v-if="content===1">
          <ul class="newzuhe">
            <li class="clearfix">
              <span>基金池</span>
              <select class="" name="">
                  <option value="">测试基金池1号</option>
                  <option value="">测试基金池2号</option>
              </select>
            </li>
              <li class="clearfix">
                <span>现金基金</span>
                <i @click="tips01=!tips01">?<div class="" v-if="tips01">
                  在构建组合时，起到现金作用的基金。建议选择推荐基金
                </div></i>
                <select class="" name="">
                    <option value="">482002工银货币</option>
                    <option value="">测试基金池2号</option>
                </select>
              </li>
                <li class="clearfix">
                  <span>投资方式</span>
                  <select class="" name="">
                      <option value="">定投：一月</option>
                      <option value="">测试基金池2号</option>
                  </select>
                </li>
                  <li class="clearfix">
                    <span>起投金额/定投金额</span>
                    <i @click="tips02=!tips02">?<div class="" v-if="tips02">
                      设置金额低于组合回测的起投金额时，回测结果可能出现问题
                    </div></i>
                    <select class="" name="">
                        <option value="">500元</option>
                        <option value="">1万元</option>
                    </select>
                  </li>
          </ul>
        </div>
            <div class="up up2"  v-if="content===2">
              <span>新基金池名称</span><input type="text" name="" value="请输入基金池名称">
            </div>
        <div class="up up3" v-if="content===3">
            您确认删除回测【<a href="#">{{dataname}}</a>】吗？
        </div>
          <div class="up up4" v-if="content===4">
              【<a href="#">{{dataname}}</a>】已关联基金组合，删除基金组合后，可删除本基金池
          </div>
      <div class="down">
          <a href="javascript:;" @click="dialogokfn" v-if="okbtnshow">{{okbtntxt ? okbtntxt : '确定'}}</a>
          <a href="javascript:;" @click="dialogclosefn"  v-if="closebtnshow">{{closebtntxt ? closebtntxt : '取消'}}</a>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      errMsg: true,
      tips01: false,
      tips02: false
    }
  },
  props: ['title', 'content', 'okbtnshow', 'okbtntxt', 'closebtnshow', 'closebtntxt', 'dataname', 'content'],
  components: {},
  methods: {
    dialogclosefn () {
      this.$emit('close')
    },
    addChapters () {
      if (this.$refs.input1.value.length >= 2 && this.$refs.input1.value.length <= 15) {
        this.$emit('add', this.$refs.input1.value, this.type)
      } else {
        this.errMsg = false
      }
    },
    dialogokfn () {
      this.$emit('dialogokfn')
    }
  },
  mounted () {
  }
}
</script>
