<style lang="scss">
@import '../assets/css/reset.css';
</style>
<style type="text/css" scoped>
    body{background: #3e081d;}
    .item1{width: 100%;height:4.56rem;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/item_01.jpg') center 0 no-repeat;background-size: 100% 100%;}
    .item2{width: 100%;height:8rem;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/item_02.jpg') center 0 no-repeat;background-size: 100% 100%;}
    #BillboardH5{background: #3e081d;}
    .item3{width: 100%;height:7.32rem;}
    .item3>img{width: 100%;height: 1.3867rem;display: block;}
    .item3 ul{width: 9.28rem;margin: 0 auto;display: flex;justify-content: space-between;margin-top: 0.2rem;}
    .item3 ul li p{font-size: 0.3067rem;line-height: 0.3333rem;margin-top:0.1333rem ;text-align: center;color: #2f1635;font-weight: 600;}
    .item3 ul li span{font-size: 0.2667rem;line-height: 0.28rem;margin-top: 5px;text-align: center;clear: #311e00;display: block;}
    .item3 ul li:first-child{width: 2.24rem;height: 1.12rem;background: url("http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/item3Btn01.png") no-repeat;background-size: 100% 100%;}
    .item3 ul li:first-child +li{width: 2.24rem;height: 1.12rem;background: url("http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/item3Btn02.png") no-repeat;background-size: 100% 100%;}
    .item3 ul li:first-child +li +li{width: 2.24rem;height: 1.12rem;background: url("http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/item3Btn03.png") no-repeat;background-size: 100% 100%;}
    .item3 ul li:first-child +li +li +li{width: 2.24rem;height: 1.12rem;background: url("http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/item3Btn04.png") no-repeat;background-size: 100% 100%;}
    .videoBox{width:100%;height: 5.94rem;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/item_04_04.jpg') center 0 no-repeat;background-size: 100% 100%; }
    .videoBox>div{width: 9.08rem;height: 4.4667rem;margin: 0 auto;border: solid #cf9700 0.08rem;}
    .item4{width: 100%;height:6.36rem;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/item_05.jpg') center 0 no-repeat;background-size: 100% 100%;}
    .item5{width: 100%;height:10.2133rem;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/item_06.jpg') center 0 no-repeat;background-size: 100% 100%;}
    .item6{width: 100%;height:9.0133rem;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/item_07.jpg') center 0 no-repeat;background-size: 100% 100%;}
    .item7{width: 100%;height:4.56rem;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/item_08.jpg') no-repeat;background-size: 100% 100%;overflow: hidden;}
    .item8{width: 100%;height:6.0rem;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/item_09.jpg') center 0 no-repeat;background-size: 100% 100%;}
    .item9{width: 100%;height: 3.7333rem;background:url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/item_10.jpg')  center 0 no-repeat;background-size: 100% 100%;}
    /*.item9:after{ content:" ";display:block;visibility:hidden;height:1.8667rem;}*/
    .item10{width: 100%;height:1.8667rem;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/item_11.jpg') center 0 no-repeat;background-size: 100% 100%;position: fixed;bottom: 0;left: 0;}
    .item10 ul{width: 9.2667rem;margin: 0 auto;margin-top: 1.16rem;}
    .item10 ul p{float: left;font-size: 0.2933rem;line-height: 0.56rem;color: #ffce4a;font-weight: 600;margin-left: 0.0667rem;}
    .item10 ul input{width: 2.3467rem;height: 0.5333rem;border: 1px solid #5c5a86;background: #353473;margin-left: 0.16rem;display: block;float: left;}
    .appointmentBtn{width:2.1333rem;height: 0.88rem;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/item10Btn.png') center 0 no-repeat;background-size: 100% 100%;margin-left: 0.16rem;margin-top: -0.1333rem;}
    .mask{width: 100%;height: 100%;background-color:rgba(0,0,0,0.5);position: fixed;top: 0;left: 0;z-index: 5;overflow: hidden;}
    .tan{overflow: hidden; width: 8.5733rem;height: 5.9333rem;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/tanBgH5.png') center 0 no-repeat;background-size: 100% 100%;z-index: 7;margin-left: auto;margin-right: auto;margin-top: 25%;position: relative;text-align: center;}
    .tanSuc{width:9.3867rem;height:3.9467rem;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/tanCusH5.png') center 0 no-repeat;background-size: 100% 100%;z-index: 7;margin-left: auto;margin-right: auto;margin-top: 40%;position: relative;}
    .closeTan{width: 0.7467rem;height: 0.7467rem;position: absolute;top: 0;right: 0;}
    .tan ul{width: 3.8rem;margin: 0 auto;margin-top: 2.5333rem;}
    .tan ul li:first-child +li{margin-top: 0.1333rem;}
    .tan ul p{float: left;font-size: 0.2933rem;line-height: 0.6133rem;color: #ffce4a;font-weight: 600;}
    .tan ul input{width: 2.88rem;height: 0.6133rem;border: 1px solid #5461a8;background:  #353473;display: block;float: left;margin-left: 0.16rem;}
    .tanBook{width: 2.8rem;height: 0.96rem;margin: 0 auto;margin-top: 0.3467rem;}
    .item7 ul{width:8.9867rem;height: 2.2667rem;margin: 0 auto;margin-top: 2.0933rem;}
    .item7 ul li{width: 4.2133rem;height: 100%;background: red;float: left;}
    .item7 ul li:first-child{background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/part04_img_right.png') no-repeat;background-size: 100% 100%;}
    .item7 ul li:first-child +li{margin-left: 0.56rem;background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/part04_img_right.png') no-repeat;background-size: 100% 100%;}
</style>
<template>
    <div id="BillboardH5">
        <div class="item1"></div>
        <div class="item2"></div>
        <div class="item3">
            <img src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Billboard/img/item_03.jpg" alt="">
            <div class="videoBox">
                <div>
                    <video id="#bgMusic" src="http://flvdata.jrj.com.cn/2012/2017/qita/20171017z3.mp4" autoplay="autoplay" style="width:100%; height:100%; object-fit: fill" loop="loop" controls='controls'></video>
                </div>
                <ul class="clearfix">
                    <li class="fl"  @click="openLayer('1')"></li>
                    <li class="fl"  @click="openLayer('1')"></li>
                    <li class="fl"  @click="openLayer('1')"></li>
                    <li class="fl"  @click="openLayer('1')"></li>
                </ul>
            </div>
            <ul class="clearfix">
                <li class="fl" @click="openLayer('1')"></li>
                <li class="fl" @click="openLayer('1')"></li>
                <li class="fl" @click="openLayer('1')"></li>
                <li class="fl" @click="openLayer('1')"></li>
            </ul>
        </div>
        <div class="item4"></div>
        <div class="item5"></div>
        <div class="item6"></div>
        <div class="item7">
            <ul class="clearfix">
                <li></li>
                <li></li>
            </ul>
        </div>
        <div class="item8"></div>
        <div class="item9"></div>
        <div class="item10">
          <ul class="clearfix">
            <li class="fl">
                <p>姓名</p>
                <input type="text" placeholder="请输入中文名" ref="bottomName">
            </li>
            <li class="fl">
                <p>手机</p>
                <input type="text" placeholder="请输入手机号" ref="bottomPhone">
            </li>
            <span class="errorMsg"></span>
            <div class="appointmentBtn fr" @click="submitPhone"></div>
        </ul>
    </div>
    <div class="mask" v-if="showLayer">
        <div class="tan" v-if="layerType === '1'">
            <div class="closeTan" @click="closeLayer"></div>
            <ul>
                <li class="clearfix">
                    <p>姓名</p>
                    <input type="text" placeholder="请输入中文名" class="clear" ref="layerName" v-on:focus="problem" v-on:blur="saveProblem">
                </li>
                <li class="clearfix">
                    <p>手机</p>
                    <input type="text" placeholder="请输入手机号" class="clear" ref="layerPhone" v-on:focus="problem" v-on:blur="saveProblem">
                </li>
                <span class="errorMsg"></span>
            </ul>
            <div class="tanBook" @click="submitPhoneFromLayer"></div>
        </div>
        <div class="tanSuc" v-if="layerType === '2'">
            <div class="closeTan" @click="closeLayer"></div>
        </div>
    </div>
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
            showLayer:false,
            layerType:''
        }
    },
    computed: mapState({
        submitPhoneError: state => {
            return state.reservation.err
        }
    }),
    methods: {
        openLayer(type) {
            this.showLayer = true;
            this.layerType = type;
        },
        problem(){
            var u = navigator.userAgent;
            if (u.indexOf('iPhone') > -1){
                $(".footer").css({
                    "position": "static",
                    "bottom": '0',
                    'margin-top': '-1.8667rem'
                });                 
            } 
        },
        saveProblem(){
            var u = navigator.userAgent;
            if (u.indexOf('iPhone') > -1){
                $(".footer").css({
                    "position": "fixed",
                    "bottom": '0'
                });                   
            }  
        },
        closeLayer() {
            this.showLayer = false;
        },
        submitPhone: function() {
            let bottomName = this.$refs.bottomName.value;
            let bottomPhone = this.$refs.bottomPhone.value;

            var regname = /^[\u4e00-\u9fa5]{1,4}$/gi;
            if (!regname.test(bottomName)) {
                return;
            }
            var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
            if (!reg.test(bottomPhone)) {
                return;
            }
            this.submitSuccess(bottomName, bottomPhone);

        },
        submitPhoneFromLayer() {
            let layerName = this.$refs.layerName.value;
            let layerPhone = this.$refs.layerPhone.value;
            var regname = /^[\u4e00-\u9fa5]{1,4}$/gi;
            if (!regname.test(layerName)) {
                return;
          }
          this.submitSuccess(layerName,layerPhone);
        },
        submitSuccess(name,phone){
          this.$store.dispatch('reservation/fetch',{
            aid:'786988146961793024',
            userName:name,
            phone:phone,
            bizsource:'TG_Msite',
            tgqdcode:'ZNDQNTBE',
            source:4
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
            var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
            if (!reg.test(layerPhone)) {
                return;
            }
            this.submitSuccess(layerName, layerPhone);
        },
        submitSuccess(name, phone) {
            this.$store.dispatch('reservation/fetch', {
                aid: '786988146961793024',
                userName: name,
                phone: phone,
                bizsource: 'TG_Msite',
                tgqdcode: 'ZNDQNTBE',
                source: 1
            }).then(() => {
                if (this.submitPhoneError) {
                    alert(this.submitPhoneError.msg)
                } else {
                    this.showLayer = true;
                    this.layerType = '2';
                    if (this.$refs.layerName) {
                        this.$refs.layerName.value = "";
                        this.$refs.layerPhone.value = "";
                    }
                    if (this.$refs.bottomName) {
                        this.$refs.bottomName.value = "";
                        this.$refs.bottomPhone.value = "";
                    }
                }
            })
        }
    },
    mounted() {
        document.getElementsByTagName('html')[0].style.fontSize= document.documentElement.getBoundingClientRect().width / 750 * 625 * 0.75 + '%' 

        var vi = document.getElementsByTagName('video');

        vi[0].play();

        document.title='抓涨龙虎榜';

        document.addEventListener("visibilitychange", function(){
            document.hidden ? vi[0].pause(): vi[0].play();
        });
    }
}
</script>
