<style lang="scss">
@import '../assets/css/reset.css';
</style>
<style type="text/css">
body{background: #fb333b;}
.item1{width: 100%;height: 5.2rem;background: url('../assets/images/spring-market/item_01.png') no-repeat center 0;background-size: 100% 100%;}
.item2{width: 100%;height: 4.18rem;background: url('../assets/images/spring-market/item_02.png') no-repeat center 0;background-size: 100% 100%;}
.item3{width: 100%;height: 4.5rem;background: url('../assets/images/spring-market/item_03.png') no-repeat center 0;background-size: 100% 100%;}
.item4{width: 100%;height: 8.1rem;background: url('../assets/images/spring-market/item_04.png') no-repeat center 0;background-size: 100% 100%;}
.item5{width: 100%;height: 2.85rem;background: url('../assets/images/spring-market/item_05.png') no-repeat center 0;background-size: 100% 100%;overflow: hidden;}
.item6{width: 100%;height: 2.85rem;background: url('../assets/images/spring-market/item_06.png') no-repeat center 0;background-size: 100% 100%;overflow: hidden;}
.item7{width: 100%;height: 2.85rem;background: url('../assets/images/spring-market/item_07.jpg') no-repeat center 0;background-size: 100% 100%;overflow: hidden;}
.item5 div,.item6 div,.item7 div{width: 3.07rem;height: 0.64rem;border-radius: 0.32rem;line-height: 0.64rem;text-align: center;color: #fff;font-size: 0.3rem;margin-top: 1.84rem;margin-left: 1.95rem;}
.item5 div{background: #ff8587;}
.item6 div{background: #ffb67d;}
.item7 div{background: #cc87e7;}
.item8{width: 100%; padding: 0.78rem 0.11rem 0.3rem 0.11rem;box-sizing: border-box;}
.item8 .tab{width: 6.55rem;height: 0.7rem;background: #7685f4;margin: 0 auto;border-radius: 0.08rem;overflow: hidden;position: absolute;left: 50%;margin-left: -3.275rem;top: -0.35rem;}
.item8 .tab li{width: 33.33%;height: 0.38rem;font-size: 0.3rem;line-height: 0.38rem;text-align: center;color: #d1d6fc;float: left;margin-top: 0.19rem;position: relative;}
.item8 .tab li span{width: 0.01rem;height: 100%;background: #939ff7;display: block;position: absolute;top: 0;right: 0.03rem;}
.item8 .tab li i{width:0; height:0;border-width:0.1rem;border-bottom-width:0.1rem;border-style:solid;border-color:transparent transparent #f0f2ff transparent;display: block;position: absolute;left: 50%;margin-left: -0.2rem;bottom: -0.14rem;}
.item8>.con{width: 6.48rem;margin: 0 auto;background: #f5f6ff;padding: 0.7rem 0.4rem;border-radius: 0.08rem;position: relative;}
.item8>.con>li>p{font-size: 0.28rem;color: #5162df;line-height: 0.48rem;text-align: center;height: 0.48rem;}
.tabcon1{width: 6.48rem;overflow: hidden;}
.tabcon1>li{margin-top: 0.54rem;}
.tabcon1>li:first-child{margin-top: 0.4rem;}
.tabcon1>li>img{width: 0.8rem;height: 0.8rem;display: block;float: left;border-radius: 50%;overflow: hidden;}
.tabcon1>li>.username{width: 4.06rem;float: left;}
.tabcon1>li>.username p{font-size: 0.3rem;line-height: 0.46rem;height: 0.46rem;color: #333;margin-left: 0.24rem;}
.tabcon1>li>.username span{display: block;}
.tabcon1>li>.username i{font-size: 0.24rem;line-height: 0.28rem;height: 0.28rem;color: #7685f4;margin-left: 0.24rem;margin-top: 0.05rem;display: block;float: left;}
.tabcon1>li>.book{width: 1.6rem;height: 0.46rem;background:url('../assets/images/spring-market/book.png') no-repeat center 0;border-radius: 0.23rem;font-size: 0.26rem;line-height: 0.46rem;text-align: center;color: #fff;float: right;margin-top: 0.16rem;background-size: 100% 100%;}
.bigSize{font-size: 0.34rem !important;font-weight: bolder;color: #fff !important;}
.item9{width: 100%;height: 2.02rem;background: url('../assets/images/spring-market/item_09.jpg') no-repeat center 0;background-size: 100% 100%;overflow: hidden;}
.mask {width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.5);position: fixed;top: 0;left: 0;z-index: 5;overflow: hidden;}
.ok{overflow: hidden;width: 5.88rem;height: 9.77rem;background: url('../assets/images/spring-market/ok.png') center 0 no-repeat;background-size: 100% 100%;z-index: 7;position: fixed;top: 10%;left: 50%;margin-left: -2.94rem;display: none}
.over{overflow: hidden;width: 6.5rem;height: 8.2rem;background: url('../assets/images/spring-market/over.png') center 0 no-repeat;background-size: 100% 100%;z-index: 7;position: fixed;top: 10%;left: 50%;margin-left: -3.25rem;}
.butOk{width: 5.17rem;height: 0.88rem;margin: 0 auto;margin-top: 7.2rem;}
.retOk{width: 5.17rem;height: 0.88rem;margin: 0 auto;margin-top: 5.3rem;}
.butClose{width: 0.8rem;height: 0.8rem;margin: 0 auto;margin-top: 1rem;}
</style>

<template>
    <div id="spring-market">
        <div class="item1"></div>
        <div class="item2"></div>
        <div class="item3"></div>
        <div class="item4"></div>
        <div class="item5">
            <div@click="bookQuan(typeDay)">立即预约</div>
        </div>
        <div class="item6">
            <div  @click="bookQuan(typeMouth)">立即预约</div>
        </div>
        <div class="item7">
            <div  @click="bookQuan(typeLong)">立即预约</div>
        </div>
        <div class="item8">  
            <ul class="con">
                <ul class="tab clearfix">
                    <li :class="{bigSize:(layerType === '1')}" @click="changeLi('1')">单股内参<span></span><i v-if="layerType === '1'"></i></li>
                    <li :class="{bigSize:(layerType === '2')}" @click="changeLi('2')">包月内参<span></span><i v-if="layerType === '2'"></i></li>
                    <li :class="{bigSize:(layerType === '3')}" @click="changeLi('3')">长周期内参<i v-if="layerType === '3'"></i></li>
                </ul>
                <!-- 单股内参 -->
                <li v-if="layerType === '1'">
                    <p>(推荐体验的单股内参均是目前人气投顾的内参单品)</p>
                    <ul class="tabcon1">
                        <li class="clearfix" v-for="item in listData.signalTips">
                            <img :src="item.tgImage" alt="">
                            <div class="username">
                                <p>{{item.tipName}}</p>
                                <span><i>原价￥{{item.price}}</i><i>领券抢购￥{{item.cheap}}</i></span>
                            </div>
                            <div class="book" @click="gotoDetail(item.tipId)"></div>
                        </li>
                    </ul>
                </li>
                <!-- 包月内参 -->
                <li v-if="layerType === '2'">
                    <p>(推荐体验的单股内参均是目前人气投顾的内参单品)</p>
                    <ul class="tabcon1">
                        <li class="clearfix"  v-for="item in listData.mouthTips">
                            <img :src="item.tgImage" alt="">
                            <div class="username">
                                <p>{{item.tipName}}</p>
                                <span><i>原价￥{{item.price}}</i><i>领券抢购￥{{item.cheap}}</i></span>
                            </div>
                            <div class="book"  @click="gotoDetail(item.tipId)"></div>
                        </li>
                    </ul>
                </li>
                <!-- 长周期内参 -->
                <li  v-if="layerType === '3'">
                    <p>(推荐体验的长内参均是目前实力投顾的长周期产品)</p>
                    <ul class="tabcon1">
                        <li class="clearfix" v-for="item in listData.longTips">
                            <img :src="item.tgImage" alt="">
                            <div class="username">
                                <p>{{item.tipName}}</p>
                                <span><i>原价￥{{item.price}}</i><i>领券抢购￥{{item.cheap}}</i></span>
                            </div>
                            <div class="book"  @click="gotoDetail(item.tipId)"></div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="item9"></div>
        <div class="mask" v-if='show'>
            <div class="ok"   v-if=" show && tanType === '1'" >
                <div class="butOk" @click='closeShow()'></div>
                <div class="butClose" @click='closeShow()'></div>
            </div>
            <div class="over" v-if=" show && tanType === '2'" >
                <div class="retOk" @click='closeShow()'></div>
                <div class="butClose" @click='closeShow()'></div>
            </div>
        </div>
    </div>
</template>

<script> 
import $ from 'jquery'
    export default{
        data(){
            return {
                layerType: '1',
                show:false,
                listData:{},
                userId:'',
                typeDay:'',
                typeMouth:'',
                typeLong:'',
                tanType:''
            }
        },
        cumputed:{

        },
        methods:{
            changeLi(type) {
                this.layerType = type;
            },
            closeShow(type) {
                this.show = false;
                this.tanType = '';
            },
            bookQuan(typeId){
                var self = this;
                if(this.userId != "null"){
                    $.ajax({
                        url: 'http://itougu.jrj.com.cn/marketing/topics.jspa?id=5',
                        type: 'get',
                        data:{
                            'couponId':self.typeId,
                            'userId':self.userId
                        },
                        dataType: 'json',
                        success:function(jsondata){
                            if(jsondata.retCode === 0){
                                this.show = true;
                                this.tanType = '1';
                            }else if(jsondata.retCode === 1){
                                alert('领取失败')
                            }else if(jsondata.retCode === -4){
                                this.show = true;
                                this.tanType = '2';
                            }else if(jsondata.retCode === 3){
                                alert('领取渠道异常')
                            }else if(jsondata.retCode === -1){
                                alert('优惠券不存在')
                            }else if(jsondata.retCode === -2){
                                alaert('参数异常')
                            }else if(jsondata.retCode === -3){
                                alert('非此活动优惠券ID')
                            }else if(jsondata.retCode === -5){
                                alert('未登录')
                            }
                        }

                    })
                  }else{
                     jrj.jsCallNative('108', JSON.stringify({ returnUrl: encodeURI(window.location.href) }));
                  }
            },
            gotoDetail(tipId){
                jrj.jsCallNative("102",JSON.stringify({id:tipId}))
            }
        },
        mounted(){
            document.getElementsByTagName('html')[0].style.fontSize = document.documentElement.getBoundingClientRect().width / 750 * 625 + '%'
            document.title = '0元预约赢体验';
            window.passportId = '$!{ssoId}'; 
            window.accessToken = '$!{spToken}';             
            this.userId = window.passportId;
            var self = this;
            $.ajax({
                url: 'http://itougu.jrj.com.cn/marketing/topics.jspa?id=5',
                type: 'get',
                dataType: 'json',
                success:function(jsondata){
                    if(jsondata.retCode=='1'){
                        self.listData = jsondata.data;
                        for(let i = 0; i <= jsondata.data.couponList.length; i++){
                            if(jsondata.data.couponList[i].couponType==='1'){
                                self.typeDay = jsondata.data.couponList[i].couponType.couponId
                            }else if(jsondata.data.couponList[i].couponType==='2'){
                                self.typeMouth = jsondata.data.couponList[i].couponType.couponId
                            }else if(jsondata.data.couponList[i].couponType==='3'){
                                self.typeLong = jsondata.data.couponList[i].couponType.couponId
                            }
                        }
                    }
                }

            })
        }
    }
</script>