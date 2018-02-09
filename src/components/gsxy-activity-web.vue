<style>
body {
    background-color: #000 !important;
    font-family: '微软雅黑';
}

input {
    outline: none;
}

.bg5 .box-con .swiper-box {
    top: 78px;
}

.bg5 .swiper-button-next {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 10;
}

.bg5 .swiper-button-prev {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 10;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/gsxy-activity/gsxy-web-bg1.jpg") center 0 no-repeat;
    height: 751px;
}
.bg2 {
    background: url("../assets/images/gsxy-activity/gsxy-web-bg2.jpg") center 0 no-repeat;
    height: 1249px;
}
.box-con {
    width: 1000px;
    margin: 0 auto;
    position: relative;
    height: 100%;
}
.bg2 .iphoneImg {
    width: 330px;
    height: 582px;
    margin: 90px 0 0 22px;
    float: left;
    overflow-y: scroll;
}
.bg2 .iphoneImg img {
    width: 330px;
}
.bg2 .codeImg {
    width: 280px;
    height: 280px;
    float: right;
    margin-top: 422px;

}
</style>

<template>
<div class="box">
    <div class="bg1">
    </div>
    <div class="bg2">
        <div class="box-con">
            <div class="iphoneImg">
                <img v-if="imgUrl" :src="imgUrl" />
            </div>
            <img src="../assets/images/gsxy-activity/gsxy-web-img2.png" class="codeImg" />
        </div>
    </div>
</div>
</template>
<script>
import {
    mapState
} from 'vuex'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery

export default {
    data() {
        return {
            imgUrl: ''
        }
    },
    computed: mapState({}),
    components: {},
    methods: {

    },
    mounted() {
        var _this = this
        document.title = '金融界股市学院'
        $.ajax({
            url: 'http://itougu.jrj.com.cn/marketing/stockRoom.jspa',
            dataType: 'jsonp',
            jsonpCallback: 'callback'
        }).then(data => {
            if (data.retCode === 1) {
                _this.imgUrl = data.data.webImage
            } else {
                alert(data.msg)
            }
        })
    }
}
</script>
