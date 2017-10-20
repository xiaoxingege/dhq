<style scoped>
@import '../assets/css/reset.css';
.fl{float: left;}.fr{float: right;}
.disnone{  display: none;}
.fall {color: #2DC678 !important;}
.up {color: #F24637 !important;}
 #Billboard{width: 100%;}
.banner div:first-child{height:530px;display: block;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/banner_01.jpg') center 0 no-repeat;}
.banner div:first-child +div{height: 469px;display: block; background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/banner_02.jpg') center 0 no-repeat;}
.part01{width: 100%;height: 487px; background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/part01_bg.jpg') no-repeat;background-size: 100% 100%;}
.tit01{width: 1000px;margin: 0 auto;}
.tit01>img{height: 90px;width: 100%;display: block;}
.tit01 .tit01Content{width:100%;height: 347px;padding-top: 22px;padding-bottom: 28px; }
.tit01Content>div{width: 731px;height: 335px;border: solid #cf9700 6px;}
.tit01Content>ul{width: 229px;}
.tit01Content>ul>li{width: 100%;height: 91px;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/partBtn.png') no-repeat;background-size: 100% 100%;overflow:hidden;}
.tit01Content>ul>li p{width: 100%; font-size: 28px;line-height: 28px;margin-top: 13px;text-align: center;color: #2f1635;font-weight: 600;font-family: "黑体"}
.tit01Content>ul>li span{width: 100%; font-size: 20px;line-height: 20px;margin-top: 6px;text-align: center;color: #311e00;display: block;font-family: "黑体"}
/*第二部分*/
.part02{width: 100%;height: 504px; background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/part02_bg.jpg') no-repeat;background-size: 100% 100%;}
.imgAuto{width: 1000px;height: 100%;margin: 0 auto;display: block;}
/*第三部分*/
.part03{width: 100%;height: 750px;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/part03_bg.jpg') no-repeat;background-size: 100% 100%;}
.part04{width: 100%;height: 415px;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/part04_bg.jpg') no-repeat;background-size: 100% 100%;}
.part05{width: 100%;height: 414px;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/part05_bg.jpg') no-repeat;background-size: 100% 100%;}
.part05 ul{width: 1000px;height: 100%; margin: 0 auto;}
.part05 ul li:first-child{width: 50%;height: 100%;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/part05_content01.jpg') no-repeat;background-size: 100% 100%;}
.part05 ul li:first-child img{width: 441px;height: 236px;display: block;margin-top: 139px;margin-left: 20px;}
.part05 ul li:first-child +li{width: 50%;height: 100%;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/part05_content02.jpg') no-repeat;background-size: 100% 100%;}
.part05 ul li:first-child +li img{width: 441px;height: 236px;display: block;margin-top: 139px;margin-left: 44px;}
.part06 .part61{width: 100%;height: 423px;display: block;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/part06_img.jpg') center 0 no-repeat;}
.part06{margin-bottom: 161px;}
.part06>div{width: 100%;height: 234px;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/part06_bg.jpg') no-repeat;background-size: 100% 100%;}

.bottomFix{width: 100%;height: 161px;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/appointmentBtn.jpg') center 0 no-repeat;position: fixed;bottom: 0;left: 0;z-index: 4;}
.bottomFix ul{width: 1000px;margin: 0 auto;margin-top: 100px;position: relative;}
.bottomFix ul li:first-child{margin-left: 65px;}
.bottomFix ul li:first-child +li{margin-left: 13px;}
.bottomFix p{font-size: 22px;line-height: 42px;color: #ffce4a;float: left;}
.bottomFix input{width: 216px;height: 40px;border: solid #656197 1px;background: #393377;opacity: 0.8;margin-left: 12px;}
.appointmentBtn{width: 223px;height: 76px;background: url(http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/appointmentBtn.png) no-repeat;background-size: 100% 100%;position: absolute;top:-20px;right: 62px;}
/*右侧*/
.sidebar{width:70px;position: fixed;top: 20%;right: 3%;z-index:999}
.sidebar a{display: block;width:70px;height:70px;background-size: 100% 100%;margin-top: 11px;margin-bottom: 11px;}
  .item-qq{background: url(http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/qq.jpg) top center;}
.item-code{background: url(http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/erCode.jpg) top center;}
  .item-top{background: url(http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/top.jpg) top center;}
  .code{width: 205px;height: 226px;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/code.png') no-repeat;background-size: 100% 100%;position: absolute;top: 63px; right: 75px;}
  .mask{width: 100%;height: 100%;background-color:rgba(0,0,0,0.5);position: fixed;top: 0;left: 0;z-index: 5;overflow: hidden;}
  .tan{width: 643px;height: 445px;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/tanBg.png')no-repeat;background-size: 100% 100%;z-index: 7;margin-left: auto;margin-right: auto;margin-top: 15%;position: relative;}
  .tanCus{width:704px;height: 296px;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/tanCus.png')no-repeat;background-size: 100% 100%;z-index: 7;margin-left: auto;margin-right: auto;margin-top: 15%;position: relative;}
  .closeTan{width: 65px;height: 47px;position: absolute;top: 0;right: 0;}
  .tanBook{}
  .mask ul{width: 274px;margin: 0 auto;height: 114px;padding-top: 180px;}
  .mask li{margin-top: 10px;}
  .mask p{font-size: 22px;line-height: 49px;color: #ffce4a;float: left;}
  .mask input{width: 216px;height: 47px;border: solid #656197 1px;background: #393377;opacity: 0.8;margin-left: 12px;}
  .maskCenter{width: 692px;height: 446px;margin: 0 auto;margin-top: 5%;position: relative;}
  .closeImg{width: 46px;height: 46px;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/close.png')no-repeat;background-size: 100% 100%;position: absolute;top: -46px;right: -46px;}
  .part06 .swiper-box{width: 100%;height: 204px;margin-bottom: 161px;padding-bottom: 30px;}
  .swiper-container {width: 1000px;height: 100%; margin: 0 auto;position: relative;}
  .swiper-slide {text-align: center;font-size: 18px;background: #fff;/* Center slide text vertically */display: -webkit-box;display: -ms-flexbox;display: -webkit-flex;display: flex;-webkit-box-pack: center;-ms-flex-pack: center;-webkit-justify-content: center;justify-content: center;-webkit-box-align: center;-ms-flex-align: center;-webkit-align-items: center;align-items: center;}
  .swiper-slide>img{width: 100%;height: 100%;}
  .tanBook{width: 220px;height: 70px;margin: 0 auto;margin-top: 30px;}
</style>
<style>
.part06 .swiper-box{position:relative;width: 1000px !important;height: 204px;margin-bottom: 161px;margin: 0 auto;}
.device {width: 660px;position: relative;margin: 10px auto;height: 250px;padding: 30px 40px;border-radius: 20px;background: #000;border:3px solid #fff;box-shadow: 0px 0px 5px #000;}
.swiper-container {width: 660px;height: 250px;color: #fff;background: #222;text-align: center;}
.swiper-slide {height: 100%;opacity: 0.4;-webkit-transition: 300ms;-moz-transition: 300ms;-ms-transition: 300ms;-o-transition: 300ms;transition: 300ms;-webkit-transform: scale(0);-moz-transform: scale(0);-ms-transform: scale(0);-o-transform: scale(0);transform: scale(0);}
.swiper-slide-visible {opacity: 0.5;-webkit-transform: scale(0.8);-moz-transform: scale(0.8);-ms-transform: scale(0.8);-o-transform: scale(0.8);transform: scale(0.8);}
.swiper-slide-active {top: 0;opacity: 1;-webkit-transform: scale(1);-moz-transform: scale(1);-ms-transform: scale(1);-o-transform: scale(1);transform: scale(1);}
.swiper-slide .title {font-style: italic;font-size: 42px;margin-top: 80px;margin-bottom: 0;line-height: 45px;}
.pagination {position: absolute;z-index: 20;left: 0px;width: 100%;text-align: center;bottom: 5px;}
.swiper-pagination-switch {display: inline-block;width: 10px;height: 10px;border-radius: 8px;background: #aaa;margin-right: 8px;cursor: pointer;-webkit-transition: 300ms;-moz-transition: 300ms;-ms-transition: 300ms;-o-transition: 300ms;transition: 300ms;opacity: 0;position: relative;top: -50px;}
.swiper-visible-switch {opacity: 1;top: 0;background: #aaa;}
.swiper-active-switch {background: #fff;}
.errorMsg{color: red;line-height: 42px;text-align: center;}
.swiper-button-prev{float: left;position: absolute;top: 75px;left:-68px;z-index: 20}
.swiper-button-next{float: left;position: absolute;top: 75px;right:-68px;z-index: 20}
input{font-size: 16px;}
</style>

<template>
    <div id="Billboard">
    <div class="banner">
      <div></div>
      <div></div>
    </div>
    <div class="part01">
      <div class="tit01">
        <img src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/tit_01.jpg" alt="">
        <div class="tit01Content clearfix">
          <div class="fl">
            <video src="http://flvdata.jrj.com.cn/2012/2017/qita/20171017z3.mp4" autoplay="autoplay" style="width:100%; height:100%; object-fit: fill" loop="loop" controls='controls'></video>
          </div>
          <ul class="fr">
            <li @click="openLayer('1')">
              <p>抓涨龙虎榜(一)</p>
              <span>上涨集结号</span>
            </li>
            <li @click="openLayer('1')">
              <p>抓涨龙虎榜(二)</p>
              <span>神龙大探底</span>
            </li>
            <li @click="openLayer('1')">
              <p>抓涨龙虎榜(三)</p>
              <span>集团大作战</span>
            </li>
            <li @click="openLayer('1')">
              <p>抓涨龙虎榜(四)</p>
              <span>狙击大热点</span>
            </li>
          </ul>
        </div>
      </div>    
    </div>
    <div class="part02">
      <img class="imgAuto" src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/part02_content.jpg">
    </div>
    <div class="part03">
      <img class="imgAuto" src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/part03_content.jpg">
    </div>
    <div class="part04">
      <img class="imgAuto"  src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/part04_content.jpg" alt="">
    </div>
    <div class="part05">
      <ul class="clearfix">
        <li class="fl" ><img src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/part04_img_right.png" alt=""></li>
        <li class="fl" ><img src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/part04_img.png" alt=""></li>
      </ul>
    </div>
    <div class="part06">
      <div class="part61"></div>
      <!-- <div class="swiperBox">
          <div class="swiper-container">
              <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/tan01.jpg"></div>
                  <div class="swiper-slide"><img src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/tan02.jpg"></div>
                  <div class="swiper-slide"><img src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/tan03.jpg"></div>
                  <div class="swiper-slide"><img src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/tan04.jpg"></div>
                  <div class="swiper-slide"><img src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/tan05.jpg"></div>
              </div>
              <div class="swiper-pagination"></div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
          </div>
      </div> -->
      <div>
        <activity-slider :listData="listData" @clickimg="onImageClick" />
      </div>        
       
    </div>
    <div class="bottomFix">
      <ul class="clearfix">
        <li class="fl">
          <p>姓名</p>
          <input type="text" ref="bottomName" placeholder="请输入4字以内的姓名">
        </li>
        <li class="fl">
          <p>手机</p>
          <input type="text" ref="bottomPhone" placeholder="请输入11位手机号" >
        </li>
        <span class="errorMsg"></span>
        <div class="appointmentBtn" @click="submitPhone"></div>
      </ul>
    </div>
    <div class="sidebar">
      <a class="item-qq" onclick="javascript: window.open('http://bizapp.qq.com/webc.htm?new=0&sid=800089887&o=b.qq.com&q=7', '_blank', 'height=544, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');" title="在线咨询"></a>
      <a class="item-code" @mouseover="codeBlock"  @mouseleave="codeNone"><span class="downimg"></span></a>
      <a class="item-top" href="#"></a>
      <div class="code" v-if="codeShow"></div>
    </div>
    <div class="mask" v-if="showLayer">
      <div class="tan" v-if="layerType === '1'">
        <div class="closeTan" @click="closeLayer"></div>
        <ul>
          <li>
            <p>姓名</p>
            <input ref="layerName" type="text"  placeholder="请输入4字以内的姓名" class="clear">
          </li>
          <li>
            <p>手机</p>
            <input ref="layerPhone" type="text" placeholder="请输入11位手机号"  class="clear">
          </li>
          <span class="errorMsg"></span>
        </ul>
        <div class="tanBook" @click="submitPhoneFromLayer"></div>
      </div>
      <div class="tanCus" v-if="layerType === '2'">
        <div class="closeTan"  @click="closeLayer"></div>
      </div>
      <!-- 放大图片 -->
      <div class="maskCenter " v-if="layerType === '3'">
        <div class="closeImg"  @click="closeLayer"></div>
        <img src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/tan01.jpg">
      </div>
      <div class="maskCenter " v-if="layerType === '4'">
        <div class="closeImg"  @click="closeLayer"></div>
        <img src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/tan02.jpg">
      </div>
      <div class="maskCenter " v-if="layerType === '5'">
        <div class="closeImg"  @click="closeLayer"></div>
        <img src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/tan03.jpg">
      </div>
      <div class="maskCenter " v-if="layerType === '6'">
        <div class="closeImg"  @click="closeLayer"></div>
        <img src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/tan04.jpg">
      </div>
      <div class="maskCenter " v-if="layerType === '7'">
        <div class="closeImg"  @click="closeLayer"></div>
        <img src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/tan05.jpg">
      </div>  
    </div>
  </div>
</template>
<script>
import {
    mapState
} from 'vuex'
// import $ from 'jquery'
import activitySlider from 'components/activity-slider'

export default {
    data() {
        return {
            showLayer:false,
            layerType:'',
            codeShow:false,
            listData: {
                conWidth: '1000px',
                conHeight: '204px',
                conPadding: '0',
                pagShow: false,
                arrowShow: true,
                paginationClickable: true,
                slidesPerView:3,
                spaceBetween:30,
                loop: true,
                autoplay: 2000,
                watchActiveIndex: true,
                centeredSlides: true,
                autoplayDisableOnInteraction: false,
                prev: {
                    imgUrl: require('assets/images/anniversary-activity/left.png'),
                    width: '56px',
                    height: '56px'
                },
                next: {
                    imgUrl: require('assets/images/anniversary-activity/right.png'),
                    width: '56px',
                    height: '56px'
                },
                list: [{
                        imgUrl: 'http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/tan01.jpg',
                        link: ''
                    },{
                        imgUrl: 'http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/tan02.jpg',
                        link: ''
                    },{
                        imgUrl: 'http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/tan03.jpg',
                        link: ''
                    },{
                        imgUrl: 'http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/tan04.jpg',
                        link: ''
                    },{
                        imgUrl: 'http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/tan05.jpg',
                        link: ''
                    }
                ]
            }
        }
    },
    computed: mapState({
        submitPhoneError:state => {
          return state.reservation.err
        }
    }),
    components: {
        activitySlider
    },
    methods: {
        onImageClick(index){
          this.showLayer = true;
          this.layerType = JSON.stringify( Number(index)+3);
        },
        openLayer(type){
          this.showLayer = true;
          this.layerType = type;
        },
        closeLayer(){
          this.showLayer = false;
        },
        codeBlock(){
          this.codeShow = true;
        },
        codeNone(){
          this.codeShow = false;
        },
        submitPhoneFromLayer(){
          let layerName = this.$refs.layerName.value;
          let layerPhone = this.$refs.layerPhone.value;
          var regname=/^[\u4e00-\u9fa5]{1,4}$/gi;
          if(!regname.test(layerName)){
              return;
          }          
          var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
          if (!reg.test(layerPhone)) {
                return;
          }
          this.submitSuccess(layerName,layerPhone);
        },
        submitPhone:function(){
          let bottomName = this.$refs.bottomName.value;
          let bottomPhone = this.$refs.bottomPhone.value;  
                  
          var regname=/^[\u4e00-\u9fa5]{1,4}$/gi;
          if(!regname.test(bottomName)){
                return;
          }          
          var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
          if (!reg.test(bottomPhone)) {
                return;
          }

          this.submitSuccess(bottomName,bottomPhone);

        },
        submitSuccess(name,phone){
          this.$store.dispatch('reservation/fetch',{
            aid:'786988146961793024',
            userName:name,
            phone:phone,
            bizsource:'TG_Msite',
            tgqdcode:'ZNDQNTBE',
            source:1
          }).then(() => {
            if(this.submitPhoneError) {
              alert(this.submitPhoneError.msg)
            }else{
              this.showLayer = true;
              this.layerType = '2';
              if(this.$refs.layerName){
                this.$refs.layerName.value="";
                this.$refs.layerPhone.value="";
              }
              if(this.$refs.bottomName){
                this.$refs.bottomName.value="";
                this.$refs.bottomPhone.value="";
              }
            }
          })
        }
    },
    mounted() {
        document.title='抓涨龙虎榜'
    }
}
</script>
