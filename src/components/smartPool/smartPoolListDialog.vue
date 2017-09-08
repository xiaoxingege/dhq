<template>
<div class="smartPoolListDialog">
  <div class="mask"></div>
  <div class="inner">
    <h3>提示</h3>
    <i @click="dialogClose" class="close"></i>
    <div class="con">
        <div class="up">
          <span>复制当前基金池</span><input v-model='poolName' type="text" name="" placeholder="请输入基金池名称">
        </div>
      <div class="down">
          <a href="javascript:;" @click='sendFoundName'>保存</a>
      </div>
    </div>
  </div>
  <toast :msg="msgtxt"  v-if="msgshow"></toast>
</div>
</template>
<script>
import toast from '../../components/toast'
export default {
  data () {
    return {
      poolName: '',
      msgtxt: '',
      msgshow: false
    }
  },
  props: ['poolName'],
  components: {
    toast
  },
  methods: {
    showmsg (m) {
      this.msgshow = true
      this.msgtxt = m
      var t = this
      clearTimeout(this.timer)
      this.timer = setTimeout(function () {
        t.msgshow = false
      }, 3000)
    },
    dialogClose () {
      this.$emit('close')
    },
    sendFoundName: function () {
      if (!this.poolName) {
        this.showmsg('请输入基金池名称')
        return
      } else {
        this.$emit('saveFound', this.poolName)
      }
    }
  },
  mounted () {
  }
}
</script>
<style scoped lang="scss">
  @import '../../assets/css/reset.css';
  .smartPoolListDialog .mask{position: fixed;top:0;left:0;width:100%;height:100%; z-index: 10;background: rgba(0,0,0,.4)}
  .smartPoolListDialog .inner{width:450px;position:fixed;top:35%;left:50%;margin-left:-200.5px;z-index:11;background-color:#fff;border-radius:5px}
  .smartPoolListDialog h3{height:46px;line-height:46px;background-color:#e7e7e7;border-radius:5px 5px 0 0;font-weight:400;font-size:16px;color:#000;padding-left:30px}
  .smartPoolListDialog .close{display:inline-block;width:12px;height:12px;background:url(../../assets/images/f_close.png) no-repeat;vertical-align:-3px;margin-left:4px;cursor:pointer;position:absolute;right:13px;top:18px;background-size:cover}
  .smartPoolListDialog .con {padding: 30px 0;}
  .smartPoolListDialog .up{margin: 0 auto;width:380px;}
  .smartPoolListDialog .up span{font-size: 14px;color: #191919;}
  .smartPoolListDialog .up input{width:230px;height:34px; line-height: 34px; font-size: 14px; padding-left: 10px;margin-left: 10px;}
  .smartPoolListDialog .down{ display: flex;justify-content: center; margin-top:30px; }
  .smartPoolListDialog .down a{width:100px;line-height: 35px;background: blue;border-radius: 4px;color: #fff; text-align: center; margin:0 20px;}
</style>
