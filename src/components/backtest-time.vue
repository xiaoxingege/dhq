<style lang="scss">
@import '../assets/css/base.css';
body,
html {
    height: 100%;
}
.app {
    height: 100%;
}
body {
    font-size: 12px;
}
.blue {
    color: #2388da;
    font-size: 12px;
}
.red {
    color: #e6363a;
}
.green {
    color: #48a854;
}
.fr {
    float: right;
}
.fl {
    float: left;
}

.backtest-time {
    background: #141518;
    color: #c9d0d7;
    // border-bottom: 3px solid #0d0e0f;
    // border-left: 1px solid #0d0e0f;
    /* padding: 0 20px 20px 0; */
    // padding-right: 20px;
    // padding-bottom: 20px;
    min-height: 100%;
    position: relative;
}
.btime-main {
    /* padding: 0 10px 0; */
    position: relative;
    padding-bottom: 20px;
}
.icon {
    position: absolute;
    /* right: 15px;
        top: 8px; */
    /* right: 17px; */
    right: 18px;
    top: 20px;
}
.icon span {
    width: 19px;
    height: 16px;
    display: inline-block;
    background: url("../assets/images/z3img/back-icons.png") no-repeat;
    cursor: pointer;
}

span.weixin {
    background-position: 0 -16px;
    margin-right: 12px;

}
.weixin:hover {
    background-position: 0 0;
    margin-right: 12px;

}

span.copy {
    background-position: 0 -52px;
    margin-right: 12px;

}
.copy:hover {
    background-position: 0 -34px;
}

.weixin.active {
    background-position: 0 0;
}

.copy.active {
    background-position: 0 -34px;
}
.qrcode {
    position: absolute;
    top: 51px;
    right: 18px;
    /* top: 40px;
        right: 10px; */
    /* box-shadow: 4px 4px 4px 2px #eee;
        border: 1px solid #eee; */
}

.angle {
    width: 0;
    height: 0;
    border: 15px solid transparent;
    border-bottom-color: #fff;
    position: absolute;
    top: -26px;
    right: 32px;
}

.code-box {
    // width: 180px;
    // height: 200px;
    background: #fff;
    border-radius: 10px;
    font-size: 12px;
    color: #666666;
    padding: 10px;
}

.code-txt {
    text-align: center;
    /* line-height: 13px; */
    margin-top: -5px;
}
.foots-tishi {
    font-size: 12px;
    position: absolute;
    bottom: 0;
    color: #808ba1;
    /* padding-bottom: 24px;
      padding-left: 20px; */
    line-height: 24px;
    padding-left: 20px;
}
</style>
<template>
<div class="backtest-time" @click="hideCode($event)">
  <div class="btime-main">
    <div class="fr icon">
      <div style="display: inline-block;position: relative; top: -5px;" class="mr-10">
        <img v-if="showAttention" @click="changeAttention" src="../assets/images/z3img/attention.png">
        <img v-if="!showAttention" @click="changeAttention" src="../assets/images/z3img/noattention.png">
      </div>
      <span class="weixin" @click="showQrcode" title="二维码分享" :class="showQrcodeBox===true?'active':''"></span><span class="copy" title="复制分享链接" ref='copy2share' :class="showToast===true?'active':''"></span></div>
    <BackTimeStra/>
    <BackTimeKline/>
    <div></div>
  </div>
  <div class="foots-tishi">
    风险提示：本策略过往业绩并不预示未来表现，也不构成业绩保证。策略提示的买入时机、卖出时机，或买卖区间等仅供投资者投资参考，不作为买卖建议，风险自担！
  </div>
  <div v-show="showQrcodeBox" class="qrcode">
    <div class="angle"></div>
    <div class="code-box">
      <canvas ref="qrcode"></canvas>
      <div class="code-txt">微信扫码转发</div>
    </div>
  </div>
  <toast :msg="toastmsg" v-if="showToast"></toast>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
import BackTimeStra from './back-time-stra'
import BackTimeKline from './back-time-kline'
import qrcode from 'qrcode'
import Clipboard from 'clipboard'
import toast from 'components/toast'
import base64 from 'base-64'
import {
  ctx
} from '../z3tougu/config'
export default {
  data() {
    return {
      showQrcodeBox: false,
      strategyId: this.$route.params.strategyId,
      toastmsg: '',
      showToast: false,
      showAttention: false
    }
  },
  computed: mapState({
    attentionData: state => state.backtestDetail.attentionData,
    addAttention: state => state.backtestDetail.addAttention,
    delAttention: state => state.backtestDetail.delAttention
  }),
  components: {
    BackTimeStra,
    BackTimeKline,
    toast
  },
  methods: {
    showQrcode() {
      this.showQrcodeBox = !this.showQrcodeBox;
      if (this.showQrcodeBox) {
        let url = window.location.protocol + '//' + window.location.host + ctx + '/backtestTimeH5/' + this.strategyId
        let shareMark = new Date().getTime();
        shareMark = base64.encode(shareMark);
        shareMark = base64.encode(shareMark);
        let dataUrl = url + '?share=' + shareMark;
        qrcode.toDataURL(this.$refs.qrcode, dataUrl, function() {})
      }
    },
    hideCode(e) {
      var _weixin = document.getElementsByClassName('weixin')[0]
      if (_weixin !== event.target) {
        this.showQrcodeBox = false
      }
    },
    changeAttention() {
      if (this.showAttention) {
        this.$store.dispatch('backtestDetail/cancleAttention', {
          strategyId: this.strategyId,
          strategyType: 2
        }).then(() => {
          if (this.delAttention) {
            this.showAttention = !this.showAttention
          }
        })
      } else {
        this.$store.dispatch('backtestDetail/createAttention', {
          strategyId: this.strategyId,
          strategyType: 2
        }).then(() => {
          if (this.addAttention) {
            this.showAttention = !this.showAttention
          }
        })
      }

    }
  },
  mounted() {
    const url = window.location.protocol + '//' + window.location.host + ctx + '/backtestTimeH5/' + this.strategyId
    const clipboard = new Clipboard(this.$refs.copy2share, {
      text: function() {
        let shareMark = new Date().getTime();
        shareMark = base64.encode(shareMark);
        shareMark = base64.encode(shareMark);
        let dataUrl = url + '?share=' + shareMark;
        return dataUrl;
      }
    })
    clipboard.on('success', (e) => {
      this.toastmsg = '分享地址已拷贝!'
      this.showToast = true
      setTimeout(() => {
        this.showToast = false
      }, 2500)
    })
    clipboard.on('error', (e) => {
      this.toastmsg = '分享地址拷贝失败!'
      this.showToast = true
      setTimeout(() => {
        this.showToast = false
      }, 2500)
    })
    this.$store.dispatch('backtestDetail/getAttention', {
      strategyId: this.strategyId,
      strategyType: 2
    }).then(() => {
      this.showAttention = this.attentionData
    })

  }
}
</script>
