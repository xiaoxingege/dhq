<style lang="scss">
@import '../assets/css/reset.css';
</style>
<style type="text/css" scoped>
#niuGu{background: #71070b;position: relative;}
.item1{width: 100%;height: 7.8rem;background: url('../assets/images/free-niuGu-app/item_01.jpg') center 0 no-repeat;background-size: 100% 100%;position: relative;}
.item1 a{width: 1.99rem;height: 2.03rem;background: url('../assets/images/free-niuGu-app/re-btn.png') center 0 no-repeat;background-size: 100% 100%;position: absolute;top: 4.39rem;right: 50%;margin-right: -0.98rem;display: block;}
.item2{width: 100%;height: 3.36rem;background: url('../assets/images/free-niuGu-app/item_02.jpg') center 0 no-repeat;background-size: 100% 100%;}
.item3{width: 100%;height: 4.24rem;background: url('../assets/images/free-niuGu-app/item_03.jpg') center 0 no-repeat;background-size: 100% 100%;overflow: hidden;}
.item3 ul{width: 6.64rem;height: 3.75rem;background: url('../assets/images/free-niuGu-app/phone-bg.png') center 0 no-repeat;background-size: 100% 100%;margin: 0 auto;margin-top: 0.2rem;overflow: hidden;padding-top: 0.15rem;}
.tan li{position: relative;}
.tan li:first-child i{width: 0.23rem;height: 0.28rem;background: url('../assets/images/free-niuGu-app/p-icon.png') center 0 no-repeat;background-size: 100% 100%;display: block;float: left;position: absolute;left: 0.75rem;top: 0.47rem}
.tan li:first-child +li i{width: 0.22rem;height: 0.27rem;background: url('../assets/images/free-niuGu-app/t-icon.png') center 0 no-repeat;background-size: 100% 100%;display: block;float: left;position: absolute;left: 0.75rem;top: 0.47rem}
.tan li input{width: 4.94rem;height: 0.8rem;display: block;margin-top: 0.2rem;background: #ffd1d0;color: #73534e;font-size: 0.3rem;border:none;line-height: 0.8rem;float: left;padding-left: 0.66rem;margin-left: 0.52rem;}
.tan li:first-child +li +li{width: 5.6rem;height: 1rem;margin: 0 auto;margin-top: 0.28rem;}
.item4{width: 100%;height: 7.6rem;background: url('../assets/images/free-niuGu-app/item_04.jpg') center 0 no-repeat;background-size: 100% 100%;}
.item5{width: 100%;height: 6.57rem;background: url('../assets/images/free-niuGu-app/item_05.jpg') center 0 no-repeat;background-size: 100% 100%;}
.item6{width: 100%;height: 5.67rem;}
.item6 ul{width: 6.64rem;height: 3.97rem;background: url('../assets/images/free-niuGu-app/phone-bg2.png') center 0 no-repeat;background-size: 100% 100%;margin: 0 auto;overflow: hidden;padding-top: 1.4rem}
.item7{width: 100%;height: 3.7rem;background: url('../assets/images/free-niuGu-app/item_07.jpg') center 0 no-repeat;background-size: 100% 100%;}
.bom-btn{width: 100%;height: 1.2rem;background: url('../assets/images/free-niuGu-app/bom-btn.png') center 0 no-repeat;background-size: 100% 100%;position: fixed;bottom: 0;left: 0;}
.fix-btn{width: 1.19rem;height: 1.19rem;background: url('../assets/images/free-niuGu-app/fix-btn.png') center 0 no-repeat;background-size: 100% 100%;position: fixed;top: 4.38rem;right: 0;z-index: 10;display: block;}
.mask {width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.5);position: fixed;top: 0;left: 0;z-index: 5;overflow: hidden;z-index: 20;}
.Alert-phone{width: 100%;height: 6.47rem;background: url('../assets/images/free-niuGu-app/alertPhone.png') center 0 no-repeat;background-size: 100% 100%;position: fixed;top: 10%;left: 0;}
.Alert-phone div{width: 0.8rem;height: 0.8rem;position: absolute;top: 0;right: 0.84rem;}
.alert-input{width: 6.64rem;height: 3.75rem;background: url('../assets/images/free-niuGu-app/alert-input.png') center 0 no-repeat;background-size: 100% 100%;position: fixed;top: 10%;left: 50%;margin-left: -3.32rem;padding-top: 1.02rem}
.alert-input ul div{width: 0.8rem;height: 0.8rem;position: absolute;top: 0;right: 0;}
.pulse {-webkit-animation-name: pulse;animation-name: pulse;}
.animated {-webkit-animation-duration: 1s;animation-duration: 1s;-webkit-animation-fill-mode: both;animation-fill-mode: both;}
.animated.infinite {-webkit-animation-iteration-count: infinite;animation-iteration-count: infinite;}
.warn_over{width: 5rem; position: fixed;left: 50%;top: 20%; z-index: 15;font-size: 0.3rem;line-height: 0.3rem; height: 0.4rem ;margin-left: -2.5rem;background-color: #282001;text-align: center;border-radius: 0.1rem;color: #fff;opacity: 0.8;padding: 0.2rem 0;display: none;}  
@keyframes pulse {
    0% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
    }
    50% {
        -webkit-transform: scale(1.5);
        -ms-transform: scale(1.5);
        transform: scale(1.5);
    }
    100% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
    }
}
</style>
<template>
<div id="niuGu">
  <a href="#phone" class="fix-btn"></a> 
  <div class="item1">
    <a href="#phone" class="pulse animated infinite"></a> 
<!--     <div></div> -->
  </div>
  <div class="item2"></div>
  <div class="item3">
    <ul class="tan" id="phone">
      <li class="clearfix"><i></i><input type="text" placeholder="输入您的姓名" class="name"></li>
      <li class="clearfix"><i></i><input type="text" placeholder="输入您的手机号码" class="phone"></li>
      <li @click="submitPhone" class="submit"></li>
    </ul>
  </div>
  <div class="item4"></div>
  <div class="item5"></div>
  <div class="item6">
    <ul class="tan">
      <li class="clearfix"><i></i><input type="text" placeholder="输入您的姓名" class="name"></li>
      <li class="clearfix"><i></i><input type="text" placeholder="输入您的手机号码" class="phone"></li>
      <li  @click="submitPhone" class="submit"></li>
    </ul>
  </div>
  <div class="item7"></div>
  <div class="bom-btn pulse animated infinite" @click="openLayer('2')" ></div>
  <div class="mask" v-if="showLayer">
    <div class="Alert-phone"  v-if="layerType === '1'" >
      <div @click="closeLayer"></div>
    </div>
    <div class="alert-input"  v-if="layerType === '2'" >
      <ul class="tan">
        <li class="clearfix"><i></i><input type="text" placeholder="输入您的姓名" class="name"></li>
        <li class="clearfix"><i></i><input type="text" placeholder="输入您的手机号码" class="phone"></li>
        <li  @click="submitPhone" class="submit"></li>
        <div @click="closeLayer"></div>
      </ul>
    </div>
  </div>
  <div class="warn_over disnone"></div>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
import $ from 'jquery'
export default {
  data() {
    return {
      showLayer: false,
      layerType: ''
    }
  },
  computed: mapState({
    submitPhoneError: state => {
      return state.reservation.err
    }
  }),
  methods: {
    closeLayer() {
      this.showLayer = false;
    },
    openLayer(type) {
      this.showLayer = true;
      this.layerType = type;
    },
    submitPhone() {
      let bottomName = $(event.currentTarget).siblings().find('.name').val();
      let bottomPhone = $(event.currentTarget).siblings().find('.phone').val();
      var regname = /^[\u4e00-\u9fa5]{1,4}$/gi;
      if (!regname.test(bottomName)) {
        $('.warn_over').html('请输入正确的姓名')
        $('.warn_over').show();
        setTimeout(function(){
            $('.warn_over').fadeOut();
        },2000); 
        return;
      }
      var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
      if (!reg.test(bottomPhone)) {
        $('.warn_over').html('请输入正确的手机号')
        $('.warn_over').show();
        setTimeout(function(){
            $('.warn_over').fadeOut();
        },2000); 
        return;
      }
      this.submitSuccess(bottomName, bottomPhone);
    },
    submitSuccess(name, phone) {
      this.$store.dispatch('reservation/fetch', {
        aid: '847777986858565632',
        userName: name,
        phone: phone,
        bizsource: 'ZNTF_Msite',
        tgqdcode: '3LYMBUEYP',
        source: 1
      }).then(() => {
        if (this.submitPhoneError) {
          alert(this.submitPhoneError.msg)
        } else {
          _taq.push({ convert_id:"93691218934", event_type:"form" })
          this.showLayer = true;
          this.layerType = '1';
          $('.submit').siblings().find('.name').val('输入您的姓名');
          $('.submit').siblings().find('.phone').val('输入您的手机号码');
        }
      })
    }
  },
  mounted() {
    document.getElementsByTagName('html')[0].style.fontSize = document.documentElement.getBoundingClientRect().width / 750 * 625 + '%'

    document.title = '领盘前牛股';
    (function(root) {
        root._tt_config = true;
        var ta = document.createElement('script'); ta.type = 'text/javascript'; ta.async = true;
        ta.src = document.location.protocol + '//' + 's1.pstatp.com/bytecom/resource/track_log/src/toutiao-track-log.js';
        ta.onerror = function () {
            var request = new XMLHttpRequest();
            var web_url = window.encodeURIComponent(window.location.href);
            var js_url  = ta.src;
            var url = '//ad.toutiao.com/link_monitor/cdn_failed?web_url=' + web_url + '&js_url=' + js_url + '&convert_id=93691218934';
            request.open('GET', url, true);
            request.send(null);
        }
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ta, s);
    })(window);

  }
}
</script>
