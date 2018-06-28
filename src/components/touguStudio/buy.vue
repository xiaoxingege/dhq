<template>
<div class="buyGlobal" v-show="showstate">
  <div class="model">
    <div class="close" @click="buyClose">
      <img src="../../assets/images/touguStudio/close.png">
    </div>
    <div class="model-content">
      <p class="buy-inf">大行情PC端暂时不支持支付功能，如需支付请下载大行情App并在产品订阅页进行支付，大行情智能投服团队期待为您服务！</p>
      <div class="buy-code">
        <div class="buycode-model">
          <div id="Android">
            <div class="dhqlogo"><img src="../../assets/images/touguStudio/dhqlogo.png"></div>
          </div>

          <p>大行情Android版</p>
        </div>
        <div class="buycode-model">
          <div id="IOS">
            <div class="dhqlogo"><img src="../../assets/images/touguStudio/dhqlogo.png"></div>
          </div>
          <p>大行情IOS版</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import QRCode from 'qrcodejs2'
import $ from 'jquery'
export default {
  name: 'buy',
  props: ['type', 'showstate'],
  data() {
    return {
      Android: '',
      IOS: ''
    }
  },
  methods: {
    buyClose: function() {
      this.$emit('buyClose');
    }
  },
  watch: {
    Android: {
      deep: true,
      handler: function() {
        var _this = this;
        new QRCode(document.getElementById('Android'), {
          width: 121,
          height: 121,
          text: _this.Android,
          render: 'table'
        });
      }
    },
    IOS: {
      deep: true,
      handler: function() {
        var _this = this;
        new QRCode(document.getElementById('IOS'), {
          width: 121,
          height: 121,
          text: _this.IOS,
          render: 'table'
        });
      }
    }
  },
  mounted: function() {
    var _this = this;
    // 请求安卓接口
    $.ajax({
      type: 'get',
      url: `https://appcms.jrj.com.cn/queryAppDownloadUrl.jspa?productId=6300001`,
      dataType: 'json',
      success: function(data) {
        if (data.retCode === 1) {
          // alert(typeof(data.data));
          _this.Android = data.data;
        } else {
          // 出现异常
        }
      }
    });

    // 请求ios接口
    $.ajax({
      type: 'get',
      url: `https://appcms.jrj.com.cn/queryAppDownloadUrl.jspa?productId=6300002`,
      dataType: 'json',
      success: function(data) {
        if (data.retCode === 1) {
          // alert(typeof(data.data));
          _this.IOS = data.data;
        } else {
          // 出现异常
        }
      }
    });

  }

}
</script>
<style scoped>
@import '../../assets/css/base.css';
.dhqlogo {
  position: absolute;
  z-index: 999;
}

.dhqlogo img {
  width: 40;
  height: 40px;
  padding-left: 42px;
  padding-top: 40px;
}

.buyGlobal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 500;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.close {
  width: 32px;
  height: 46px;
  float: right;
  margin-top: -67px;
  margin-right: 20px;
  cursor: pointer;
}

.model {
  width: 559px;
}

.model-content {
  width: 559px;
  height: 297px;
  background: rgba(245, 235, 220, 1);
  border-radius: 10px;
}

.model-content .buy-inf {
  width: 468px;
  height: 45px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: rgba(207, 153, 83, 1);
  line-height: 28px;
  padding-top: 39px;
  padding-left: 43px;
}

.buy-code {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 32px;
}

.buycode-model {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.buy-code div {
  width: 121px;
}

.buycode-model #Android,
.buycode-model #IOS {
  width: 121;
  height: 121;
  border: 6px solid #fff;
}

.buycode-model p {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: rgba(51, 51, 51, 1);
  line-height: 28px;
}
</style>