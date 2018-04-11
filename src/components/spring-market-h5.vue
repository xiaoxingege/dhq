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
            <div>立即预约</div>
        </div>
        <div class="item6">
            <div>立即预约</div>
        </div>
        <div class="item7">
            <div>立即预约</div>
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
                        <li class="clearfix">
                            <img src="../assets/images/spring-market/item_01.png" alt="">
                            <div class="username">
                                <p>涨停集结号253期</p>
                                <span><i>原价￥288</i><i>领券抢购￥188</i></span>
                            </div>
                            <div class="book"></div>
                        </li>
                    </ul>
                </li>
                <!-- 包月内参 -->
                <li v-if="layerType === '2'">
                    <p>(推荐体验的单股内参均是目前人气投顾的内参单品)</p>
                    <ul class="tabcon1">
                        <li class="clearfix">
                            <img src="../assets/images/spring-market/item_01.png" alt="">
                            <div class="username">
                                <p>娃哈哈253期</p>
                                <span><i>原价￥288</i><i>领券抢购￥188</i></span>
                            </div>
                            <div class="book"></div>
                        </li>
                        <li class="clearfix">
                            <img src="../assets/images/spring-market/item_01.png" alt="">
                            <div class="username">
                                <p>娃哈哈253期</p>
                                <span><i>原价￥288</i><i>领券抢购￥188</i></span>
                            </div>
                            <div class="book"></div>
                        </li>
                    </ul>
                </li>
                <!-- 长周期内参 -->
                <li  v-if="layerType === '3'">
                    <p>(推荐体验的单股内参均是目前人气投顾的内参单品)</p>
                    <ul class="tabcon1">
                        <li class="clearfix">
                            <img src="../assets/images/spring-market/item_01.png" alt="">
                            <div class="username">
                                <p>周黑塔253期</p>
                                <span><i>原价￥288</i><i>领券抢购￥188</i></span>
                            </div>
                            <div class="book"></div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="item9"></div>
        <div class="mask" style="display:none">
            <div class="ok">
                <div class="butOk" @click='closeShow()'></div>
                <div class="butClose" @click='closeShow()'></div>
            </div>
            <div class="over">
                <div class="retOk" @click='closeShow()'></div>
                <div class="butClose" @click='closeShow()'></div>
            </div>
        </div>
    </div>
</template>

<script> 
    export default{
        data(){
            return {
                layerType: '1',
                show:false
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
                this.layerType = type;
            }
        },
        mounted(){
            document.getElementsByTagName('html')[0].style.fontSize = document.documentElement.getBoundingClientRect().width / 750 * 625 + '%'
            document.title = '0元预约赢体验';
        }
    }
</script>