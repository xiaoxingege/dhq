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
          <div id="payCode">
             <img src="../../assets/images/touguStudio/payCode.png">
          </div>
          <p>扫码下载大行情App</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
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
  mounted: function() {
    var _this = this;
    _this.SCcode();
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

.close{
  width: 32px;
  height: 46px;
  float: right;
  margin-top: -45px;
  margin-right: 20px;
  cursor: pointer;
}
.close img{
  width: 32px;
  height: 46px;
}
.model {
  width: 418px;
}

.model-content {
  width: 418px;
  height: 319px;
  background: rgba(245, 235, 220, 1);
  border-radius: 10px;
}

.model-content .buy-inf {
  width: 328px;
  height: 74px;
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

.payCode{
  width: 119px;
  height: 119px;
}
.payCode img{
  width: 119px;
  height: 119px;
}
.buycode-model p {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: rgba(51, 51, 51, 1);
  line-height: 28px;
}
</style>