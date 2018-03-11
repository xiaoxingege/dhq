<style lang="scss">
@import '../assets/css/reset.css';
</style>
<style type="text/css">
body{background: #f6f6f6;}
a{color: #444444;display: block;width: 100%;height: 100%;}
.banner{width: 100%;height: 3.2rem;background: url('../assets/images/small-program/banner.jpg') no-repeat center 0;background-size: 100% 100%;position: relative;}
.banner div{width: 100%;height: 0.76rem;position: absolute;bottom: 0;left: 0;font-size: 0.3rem;line-height: 0.76rem;text-indent: 0.3rem;color: #fff;background: rgba(0,0,0,0.6)}
.part01{width: 6.9rem;height: 3rem;padding:0.2rem 0.3rem 0.25rem 0.3rem;background: #fff;}
.title{width: 100%;height: 0.75rem;font-size: 0.32rem;line-height: 0.75rem;color: #333;text-indent: 0.3rem;font-weight: bolder;}
.title span{width: 0.06rem;height: 0.28rem;background: #f54949;display: block;margin-top: 0.2rem;float: left;}
.part01>ul>li img{width: 0.26rem;height: 0.26rem;display: block;float: left;margin-top: 0.14rem;}
.part01>ul>li p{width: 5rem;float: left;font-size: 0.28rem;line-height: 0.56rem;color: #444444;margin-left: 0.14rem;overflow: hidden;white-space: nowrap;text-overflow:ellipsis;}
.part01>ul>li span{float: right;font-size: 0.22rem;line-height: 0.56rem;color: #aaaaaa;}
.part02{width: 6.9rem;height: 2.32rem;padding: 0.2rem 0.3rem 0.4rem 0.3rem;background: #fff;margin-top: 0.2rem;}
.part02 ul{width: 100%;display:flex;justify-content: space-between}
.part02 ul li{width: 2.2rem;height: 0.64rem;background: #f7f7f7;font-size: 0.24rem;line-height: 0.64rem;text-align: center;color: #444;}
.mat{margin-top: 0.2rem;}
.part03{width: 6.9rem;height:3.3rem;padding: 0.2rem 0.3rem 0.3rem 0.3rem;background: #fff;margin-top: 0.2rem;}
.part03 ul li{width: 50%;float: left;}
.part03 ul p{font-size: 0.28rem;line-height: 0.46rem;color: #444444;text-align: center;overflow: hidden;white-space: nowrap;text-overflow:ellipsis;width: 100%;float: left;}
.part03 ul li:first-child div{width: 3.3rem;height: 1.8rem;background: blue;border-radius: 0.05rem;margin-top: 0.16rem;margin-bottom: 0.14rem;}
.part03 ul li:first-child +li div{width: 3.3rem;height: 1.8rem;background: pink;float: right;border-radius: 0.05rem;margin-top: 0.16rem;margin-bottom: 0.14rem;}
</style>


<template>
    <div id="smallPro">
        <div class="banner">
            <div>港股通投资新规知多少</div>
        </div>
        <div class="part01">
            <p class="title clearfix"><span></span>业界投教动态</p>
            <ul>
                <li class="clearfix">
                    <img src="../assets/images/small-program/icon01.png" alt="">
                    <p><a href="http://itougu.jrj.com.cn/activity/app/page1.jspa">怎样炒股——新股民必备初级知识</a></p>
                    <span>2017-06-14</span>
                </li>
                <li class="clearfix">
                    <img src="../assets/images/small-program/icon01.png" alt="">
                    <p><a href="http://itougu.jrj.com.cn/activity/app/page2.jspa">中小投资者必知的几大股东权利</a></p>
                    <span>2017-06-14</span>
                </li>
                <li class="clearfix">
                    <img src="../assets/images/small-program/icon01.png" alt="">
                    <p><a href="http://itougu.jrj.com.cn/activity/app/page3.jspa">长期投资会为投资者带来什么</a></p>
                    <span>2017-06-14</span>
                </li>
                <li class="clearfix">
                    <img src="../assets/images/small-program/icon01.png" alt="">
                    <p><a href="http://itougu.jrj.com.cn/activity/app/page4.jspa">胡滨：投资者教育是权益保护基石 要上升到国家层面</a></p>
                    <span>2017-05-12</span>
                </li>
            </ul>
        </div>
        <div class="part02">
            <p class="title clearfix"><span></span>投资课堂</p>
            <ul class="clearfix">
                <li><a href="http://itougu.jrj.com.cn/h5/small-program-list">投资三大法宝</a></li>
                <li><a href="http://itougu.jrj.com.cn/h5/small-program-list">兴趣教学</a></li>
                <li><a href="http://itougu.jrj.com.cn/h5/small-program-list">三大法宝</a></li>
            </ul>
            <ul class="clearfix mat">
                <li><a href="http://itougu.jrj.com.cn/h5/small-program-list">投资三大法宝</a></li>
                <li><a href="http://itougu.jrj.com.cn/h5/small-program-list">兴趣教学</a></li>
                <li><a href="http://itougu.jrj.com.cn/h5/small-program-list"></a></li>
            </ul>
        </div>
        <div class="part03">
            <p class="title clearfix"><span></span>在线课堂</p>
            <ul class="clearfix">
                <li>
                    <div><video id="#bgMusic" src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Game/czsc.mp4" autoplay="autoplay" style="width:100%; height:100%; object-fit: fill" loop="loop" ></video></div>
                    <p>市场主体违规案例解析富市场主体违规案例解析富</p>
                </li>
                <li>
                    <div><video id="#bgMusic" src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/Game/rhjxwq.mp4" autoplay="autoplay" style="width:100%; height:100%; object-fit: fill" loop="loop" ></video></div>
                    <p>市场主体违规案例解析服</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script> 
    export default{
        data(){
            return {

            }
        },
        cumputed:{

        },
        method:{

        },
        mounted(){
            document.getElementsByTagName('html')[0].style.fontSize = document.documentElement.getBoundingClientRect().width / 750 * 625 + '%'
            document.title = '赢家智能投教';
        }
    }
</script>