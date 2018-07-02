<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
* {
    text-align: justify;
    font-size: $fontSizeBase;
    color: $wordsColorBase;
    font-family: "Microsoft YaHei";
}
.display-box {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -o-box;
    display: box;
}
.box-flex-1 {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    -o-box-flex: 1;
    box-flex: 1;
}
.masks {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
}
.dialog {
    width: 597px;
    z-index: 9999;
    font-size: 12px;
    /* color:#000;
         position: absolute;
        left:50%;
        top:50%;
        -webkit-transform: translate3d(-50%, -50%, 0);
        -moz-transform: translate3d(-50%, -50%, 0);
        -ms-transform: translate3d(-50%, -50%, 0);
        transform: translate3d(-50%, -50%, 0); */
    position: fixed;
    /* top: 0; */
    /*  top: 49px; */
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    margin: 0 auto;
    /*  margin: 8% auto; */
    /*  margin-top: 13%;
          top: 50%; */
    /*     left: 50%;
     margin-left: -273px; */
}
.header {
    /*   height:32px;
        line-height: 32px; */
    text-align: left;
    background: $menuSelColor;

    font-size: 16px;
    color: $wordsColorBase;
}
.head-con {
    padding: 14px 11px 15px 14px;
    border-bottom: 1px solid $bgDeepColor;
}
.imgicon1 {
    width: 60px;
    height: 60px;
    background: url("../../assets/images/dhq/dialog-1.png") no-repeat;
    position: relative;
    top: 2px;
    /*       position: relative;
      top: 5px;
      left: 0; */
}
.imgicon2 {
    background: url("../../assets/images/dhq/dialog-2.png") no-repeat;
}
.imgicon3 {
    background: url("../../assets/images/dhq/dialog-3.png") no-repeat;
}
.imgicon4 {
    background: url("../../assets/images/dhq/dialog-4.png") no-repeat;
}
.imgicon5 {
    background: url("../../assets/images/dhq/dialog-5.png") no-repeat;
}
.imgicon6 {
    background: url("../../assets/images/dhq/dialog-6.png") no-repeat;
}
.title-box {
    width: 80%;
    /*  padding-left: 6px; */
    padding-left: 9px;
}
.title {
    font-size: 16px;
    /*  padding-bottom: 8px; */
    padding-bottom: 5px;
}
.desc {
    line-height: 18px;
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
    background: #0088E1;
    color: #fff;
}
.cancleBtn {
    background: #fff;
    border: 1px solid #CCCCCC;
    color: #CCCCCC;
}
input,
select {
    width: 106px;
    height: 20px;
    line-height: 20px;
    border-radius: 3px;
    margin-left: 5px;
    color: #999;
    border-color: #ccc;
}
input {
    border: 1px solid #ccc;
    height: 18px;
    padding-left: 5px;
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
    line-height: 17px;
    text-align: center;
    cursor: pointer;
    font-size: 30px;
    color: $wordsColorBase;
}
.head-th {
    width: 100%;
}
.head-th li {
    width: 20%;
    line-height: 30px;
    height: 30px;
    text-align: center;
}
</style>
<template>
<div class="masks">
  <div class="dialog" :style="{ bottom: bottom + 'px'}">
    <div class="header clearfix">

      <div class="head-con clearfix">
        <div class="imgicon1 fl" :class="checkClass(type)"></div>
        <div class="title-box fl">
          <div class="title">{{name}}</div>
          <div class="desc">{{desc}}</div>
        </div>
        <span class="fr closed" @click="hideDialog">×</span>
      </div>
      <!-- <ul class="clearfix head-th">
                <li class="fl">时间</li>
                <li class="fl">时间</li>
                <li class="fl">时间</li>
                <li class="fl">时间</li>
                <li class="fl">时间</li>
             </ul> -->
    </div>
    <slot name='content'></slot>
    <!--    <div class="content">
           <table class="table1" ref='datalist'>
                    <tr>
                    </tr>
                    <tr v-for="(item,index) of dialogArr">
                        <td>
                          <div>{{formatDuring(item.signalTime) ||'--'}}</div>
                        </td>
                        <td>
                          <div @click='toNative({stockCode:concats(item.stockCode)})' class="tonative">{{item.stockName ||'--'}}
                          </div>
                        </td>
                        <td class="td-chngPct">
                          <div v-z3-updowncolor="item.stockPl">{{item.stockPl | chngPct}}</div>
                        </td>
                        <td>
                          <div>{{item.signalName ||'--'}}</div>
                        </td>

                    </tr>
            </table> 
         </div>-->

    <div class="footer">

      <slot name="footer"></slot>
    </div>
  </div>
</div>
</template>
<script>
/* import {
  ctx
} from '../../dhq/config' */

/**/

import {
  mapState
} from 'vuex'
export default {
  props: ['type', 'name', 'dialogArr', 'desc', 'isTrend', 'bottom'],
  data() {
    return {

    }
  },
  watch: {

  },
  components: {

  },
  computed: mapState({}),
  methods: {

    hideDialog() {
      this.$emit('toHideDialog', false)
    },
    formatDuring(time) {
      var date = new Date(time)
      var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours())
      var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes())
      return h + ':' + m
    },
    checkClass(index) {
      if (this.isTrend === true) {
        return index === 2 ? 'imgicon4' : index === 1 ? 'imgicon5' : 'imgicon6'
      } else {
        return index === 4 ? 'imgicon2' : index === 3 ? 'imgicon3' : ''
      }

    }

  },
  mounted() {},
  destroyed() {}
}
</script>
