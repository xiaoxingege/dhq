<style lang="scss">
@import '../assets/css/reset.css';
</style>
<style type="text/css">
    a{color: #444444;display: block;width: 100%;height: 100%;}
    .part01{width: 6.9rem;height: 3rem;padding:0.46rem 0.3rem 0.25rem 0.3rem;background: #fff;}
    .part01>ul>li img{width: 0.26rem;height: 0.26rem;display: block;float: left;margin-top: 0.14rem;}
    .part01>ul>li p{width: 5rem;float: left;font-size: 0.28rem;line-height: 0.56rem;color: #444444;margin-left: 0.14rem;overflow: hidden;white-space: nowrap;text-overflow:ellipsis;}
    .part01>ul>li span{float: right;font-size: 0.22rem;line-height: 0.56rem;color: #aaaaaa;}
</style>


<template>
    <div id="small" class="part01">
        <ul class="clearfix">
            <li>
                <img src="../assets/images/small-program/icon01.png" alt="">
                <p><a href="http://itougu.jrj.com.cn/activity/app/page1.jspa">怎样炒股——新股民必备初级知识</a></p>
                <span>2017-06-14</span>
            </li>
            <li>
                <img src="../assets/images/small-program/icon01.png" alt="">
                <p><a href="http://itougu.jrj.com.cn/activity/app/page2.jspa">中小投资者必知的几大股东权利</a></p>
                <span>2017-06-14</span>
            </li>
            <li>
                <img src="../assets/images/small-program/icon01.png" alt="">
                <p><a href="http://itougu.jrj.com.cn/activity/app/page3.jspa">长期投资会为投资者带来什么</a></p>
                <span>2017-06-14</span>
            </li>
            <li>
                <img src="../assets/images/small-program/icon01.png" alt="">
                <p><a href="http://itougu.jrj.com.cn/activity/app/page4.jspa">胡滨：投资者教育是权益保护基石 要上升到国家层面</a></p>
                <span>2017-05-12</span>
            </li>
            <li>
                <img src="../assets/images/small-program/icon01.png" alt="">
                <p><a href="http://itougu.jrj.com.cn/activity/app/page5.jspa">防范股市“黑嘴” 增强自我保护</a></p>
                <span>2017-06-14</span>
            </li>
            <li>
                <img src="../assets/images/small-program/icon01.png" alt="">
                <p><a href="http://itougu.jrj.com.cn/activity/app/page6.jspa">股市交易中群体行为的陷阱</a></p>
                <span>2017-06-14</span>
            </li>
            <li>
                <img src="../assets/images/small-program/icon01.png" alt="">
                <p><a href="http://itougu.jrj.com.cn/activity/app/page7.jspa">炒股要克服“鸵鸟心态”</a></p>
                <span>2017-06-14</span>
            </li>
            <li>
                <img src="../assets/images/small-program/icon01.png" alt="">
                <p><a href="http://itougu.jrj.com.cn/activity/app/page8.jspa">多晶硅项目引发内幕交易</a></p>
                <span>2017-05-22</span>
            </li>
        </ul>
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