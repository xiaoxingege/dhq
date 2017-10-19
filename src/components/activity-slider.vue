<style lang="scss">
@import '../assets/css/reset.css';
@import '~swiper/dist/idangerous.swiper.css';
.swiper-box {
    position: absolute;
    width: 100%;
}
.swiper-pagination {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
}
.swiper-pagination-switch {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: #999;
    box-shadow: 0 1px 2px #555 inset;
    margin: 0 3px;
    cursor: pointer;
}
.swiper-active-switch {
    background: #fff;
}
</style>

<template>
<!-- Swiper -->
<div class="swiper-box">


    <div class="swiper-container" :style="{width:listData.conWidth,height:listData.conHeight,padding:listData.conPadding}">
        <div class="swiper-wrapper" @click="clickImg">
            <div class="swiper-slide" v-for="item,index in listData.list" :style="{backgroundImage:'url('+item.imgUrl+')',backgroundSize:'100% 100%'}" :data-index="index"></div>
        </div>

        <!-- Add Pagination -->


        <!-- Add Arrows -->

    </div>
    <div class="swiper-pagination" v-if="listData.pagShow" style="bottom:0;"></div>
    <div class="swiper-button-prev" v-if="listData.arrowShow" :style="{backgroundImage:'url('+listData.prev.imgUrl+')',width: listData.prev.width,height:listData.prev.height,backgroundSize:'100% 100%',marginTop:listData.prev.marginTop}"></div>
    <div class="swiper-button-next" v-if="listData.arrowShow" :style="{backgroundImage:'url('+listData.next.imgUrl+')',width: listData.next.width,height:listData.next.height,backgroundSize:'100% 100%',marginTop:listData.next.marginTop}"></div>
</div>
</template>
<script>
import Swiper from 'swiper/dist/idangerous.swiper.js'
import $ from 'jquery'
export default {
    data() {
        return {
            //   listData: {
            //     conWidth: '500px',
            //     conHeight: '500px',
            //     conPadding: '50px',
            //     pagShow: false,
            //     arrowShow: true,
            //     loop: false,
            //     list: [
            //       {
            //         imgUrl: require('assets/images/activity-slider/fade1.jpg'),
            //         link: ''
            //       },
            //       {
            //         imgUrl: require('assets/images/activity-slider/fade2.jpg'),
            //         link: ''
            //       },
            //       {
            //         imgUrl: require('assets/images/activity-slider/fade3.jpg'),
            //         link: ''
            //       }
            //     ]
            //   }
        }
    },
    props: ['listData'],
    methods: {
        closeChapterDialog() {
            this.addChapterShow = false
            this.fixBgShow = false
        },
        clickImg(e){
            let target = e.target;
            let index = target.getAttribute('data-index');
            if(index){
                this.$emit('clickimg',index)
            }
        }
    },
    mounted() {
        var _this = this
        var paginationClass
        if (this.listData.pagShow) {
            paginationClass = '.swiper-pagination'
        } else {
            paginationClass = ''
        }
        var mySwiper = new Swiper('.swiper-container', {
            pagination: paginationClass,
            effect: 'fade',
            grabCursor: true,
            centeredSlides: _this.listData.centeredSlides || false,
            watchActiveIndex: _this.listData.watchActiveIndex || false,
            createPagination: true,
            slidesPerView:_this.listData.slidesPerView || 1,
            spaceBetween:_this.listData.spaceBetween || 0,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            loop: _this.listData.loop,
            paginationClickable: _this.listData.paginationClickable,
            autoplay: _this.listData.autoplay,
            autoplayDisableOnInteraction: _this.listData.autoplayDisableOnInteraction
        })
        $('.swiper-button-prev').on('click', function(e) {
            e.preventDefault()
            mySwiper.swipePrev()
        })
        $('.swiper-button-next').on('click', function(e) {
            e.preventDefault()
            mySwiper.swipeNext()
        })
    }
}
</script>
