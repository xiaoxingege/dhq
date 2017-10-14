<style>
@import '../assets/css/reset.css';
.lucky-draw {
  font-size: 40px;
  color: #fff;
  background: #ff4200;
  padding-bottom: 2.25rem;
  margin-top:-1.28rem;
}
.banner{
  width:7.5rem;
  height: 5.24rem;
  background: url(../assets/images/lucky-draw/bannerimg.png) center no-repeat;
  background-size: 100%;
}
.banner-top{
  height: 1.28rem;
  background: transparent;
}
.gold-bean-num{
  box-sizing:border-box;
  height: 0.48rem;
  width:3.6rem;
  margin:3.11rem auto 0;
  background: #44090d;
  border:2px solid #fff100;
  border-radius: 0.24rem;
  font-size: 0.28rem;
  overflow: hidden;
}
.gold-bean-icon{
  float: left;
  width:0.29rem;
  height: 0.29rem;
  margin:0.07rem 0.19rem 0;
  background: url(../assets/images/lucky-draw/gold-bean.png) center no-repeat;
  background-size: 100%;
}
.gold-bean-text{
  float: left;
  line-height: 0.46rem;
  color:#fff100;
}
.notification{
  height: 0.74rem;
  width:6.36rem;
  background: #9b29ba;
  border-radius: 2px;
  margin:0 auto;
}
.notification-icon{
  float: left;
  width:0.33rem;
  height: 0.33rem;
  margin:0.21rem 0.21rem 0.2rem;
  background: url(../assets/images/lucky-draw/notification-icon.png) center no-repeat;
  background-size: 100%;
}
.notification-text-container{
  float: left;
  height: 0.7rem;
  width:5.59rem;
  box-sizing: border-box;
  background: #6b1f9f;
  border-radius: 0.02rem;
  margin:0.02rem 0.02rem 0.02rem 0;
  font-size: 0.28rem;
  line-height: 0.7rem;
  overflow: hidden;
  position: relative;
}
.notification-text{
  /*height: 2.1rem;*/
  position: absolute;
  top:0;
  left:0.2rem;
}
.notification-text li{
  height: 0.7rem;
}
.notification-text span{
  color: #fff;

}
.notification-text var{
  color: #ffe136;
  font-style: normal;
}
.award-pool{
  width:7.1rem;
  height: 6.27rem;
  margin:0.39rem auto 0.19rem;
  background: url(../assets/images/lucky-draw/award-pool.png) center no-repeat;
  background-size: 100%;
}
.awards {
  padding-top:0.36rem;
  width:6.48rem;
  height:5.12rem;
  margin:0 auto;
  overflow:hidden;
  position: relative;
}
.awards-list{
  width:100%;
  height: 100%;
  position:absolute;
  top:0.36rem;
  left:0;
  z-index:10;
  /*background: rgba(0,0,0,0.3);*/
}
.award-item{
  float: left;
  width:2.08rem;
  height: 1.68rem;
  margin:0 0.04rem 0.05rem;
  position: relative;
}
.awards-list  .award-item{
  position: absolute;
  width:2.08rem;
  height: 1.68rem;
  background: url(../assets/images/lucky-draw/award-item.png) center no-repeat;
  background-size: 100%;
}
.awards-list   .award-item-active{
  position: absolute;
  width:2.08rem;
  height: 1.68rem;
  background: url(../assets/images/lucky-draw/award-item-active.png) center no-repeat;
  background-size: 100%;
}
.get-award{
  float: left;
  width:2.08rem;
  height: 1.68rem;
  margin:0 0.04rem 0.05rem;
}
.award-click{
  width:2.08rem;
  height: 1.68rem;
  position: absolute;
  left:2.16rem;
  top:2.09rem;
  z-index: 100;
}
.get-award{
  background: url(../assets/images/lucky-draw/get-award.png) center no-repeat;
  background-size: 100%;
}
.get-award:active{
  background: url(../assets/images/lucky-draw/get-award-active.png) center no-repeat;
  background-size: 100%;
}
.get-award p{
  margin-top:1.05rem;
  font-size: 0.26rem;
  text-align:center;
  color:#fff;
}
.awards li .award-icon{
  height: 0.75rem;
  width:auto;
  margin:0.22rem auto 0;
}
.awards li .award-text{
  width:100%;
  position:absolute;
  left:0;
  top:1.14rem;
  color: #a83200;
  font-size: 0.28rem;
  text-align: center;
}
.award-info{
  background: #6b1f9f;
  width:7.1rem;
  margin:0 auto;
  min-height: 1rem;
  border-radius: 0.18rem;
  padding:0 0.3rem 0.6rem;
  box-sizing: border-box;
}
.award-info{

}
.award-info h2,.award-info p{
  color:#fff;
  font-size:0.26rem;
  font-weight:normal;
}
.award-info h2{
  line-height: 1.16rem;
}
.award-info p{
  line-height: 0.36rem;
}
.mask{
  display: none;
  position: fixed;
  top:0;
  left:0;
  z-index: 10000;
  width:100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
}
.pop-ensure{
  display: none;
  width:6.08rem;
  height: 3.4rem;
  position: absolute;
  top:50%;
  left:50%;
  margin-left:-3.04rem;
  margin-top:-1.7rem;
  box-sizing:border-box;
  background: #fff4b0;
  border:0.1rem solid #fff100;
  border-radius:0.3rem;
  padding-top:0.47rem;
}
.pop-ensure{
  font-size: 0.36rem;
  color:#333;
  text-align:center;
}
#pop-ensure .ensure-hint{
  position: relative;
}
.ensure-hint{
  height: 0.4rem;
  width:2.2rem;
  margin:0.2rem auto 0;
  line-height: 0.4rem;
}
.pop-hint .ensure-hint{
  width:100%;
  height: auto;
}
.ensure-hint span{
  position: absolute;
  top:0;
  left:0;
  width:0.4rem;
  height: 0.4rem;
  margin-right: 0.12rem;
}
.ensure-icon-false{
  background: url(../assets/images/lucky-draw/ensure-icon-false.png) center no-repeat;
  background-size: 100%;
} 
.ensure-icon-true{
  background: url(../assets/images/lucky-draw/ensure-icon-true.png) center no-repeat;
  background-size: 100%;
} 
#pop-ensure .ensure-text{
  top:0;
  left:0.52rem;
  position: absolute;
  height: 0.4rem;
  line-height: 0.4rem;
  width:3.5rem;
  text-align: left;
}
.ensure-text{
  /*float: left;*/
  font-size: 0.28rem;
  line-height: 0.43rem;
  color:#8d2b00;
}
.pop-hint .ensure-text{
  width:100%;
}
.ensure-button{
  width:5.08rem;
  margin:0.62rem auto 0;
  overflow-x: hidden;
}
.pop-hint .ensure-button{
  width:2.34rem;
  margin:0.22rem auto 0;
}
.ensure-button span{
  float: left;
  width:2.34rem;
  height: 0.7rem;
  line-height: 0.7rem;
  color:#fff4b0;
  border-radius: 0.1rem;
}
.ensure-button-close{
  margin-right: 0.4rem;
  background: #ff4200;
}
.ensure-button-true{
  background: #2e7cd7;
}
</style>

<template>
<div class="lucky-draw">
  <div class="banner">
    <div class="banner-top"></div>
    <div class="gold-bean-num">
      <span class="gold-bean-icon"></span>
      <p class="gold-bean-text">
        我的金豆数：{{beanNum}}
      </p>
    </div>
  </div>
  <div class="notification">
    <span class="notification-icon"></span>
    <div id="scroll-outer" class="notification-text-container">
      <ul id="scroll" class="notification-text">
        <li v-if="LuckUsers">
          <span>恭喜 “网友 {{LuckUsers[LuckUsers.length-1].userName}}” 抽中</span>
          <var>{{LuckUsers[LuckUsers.length-1].prize}}</var>
        </li>
        <li v-for="item in LuckUsers">
          <span>恭喜 “网友 {{item.userName}}” 抽中</span>
          <var>{{item.prize}}</var>
        </li>
        <li v-if="LuckUsers">
          <span>恭喜 “网友 {{LuckUsers[0].userName}}” 抽中</span>
          <var>{{LuckUsers[0].prize}}</var>
        </li>
      </ul>
    </div>
  </div>
  <div class="award-pool">
    <div class="awards">
      <ul id="prizes" class="awards-list" v-if="prizeList">
        <li :class="['award-item',{'award-item-active': prizeList[0].active}]" v-bind:style="{'top':0,'left':0}">
          <h4 class="award-icon" v-bind:style="{'background-image':`url(${prizeList[0].pic})`,'background-repeat':'no-repeat','background-size':'contain','background-position':'center'}"></h4>
          <p class="award-text">{{prizeList[0].name}}</p>
        </li>
        <li :class="['award-item',{'award-item-active': prizeList[1].active}]" v-bind:style="{'top':0,'left':'2.16rem'}">
          <h4 class="award-icon" v-bind:style="{'background-image':`url(${prizeList[1].pic})`,'background-repeat':'no-repeat','background-size':'contain','background-position':'center'}"></h4>
          <p class="award-text">{{prizeList[1].name}}</p>
        </li>
        <li :class="['award-item',{'award-item-active': prizeList[2].active}]" v-bind:style="{'top':0,'left':'4.32rem'}">
          <h4 class="award-icon" v-bind:style="{'background-image':`url(${prizeList[2].pic})`,'background-repeat':'no-repeat','background-size':'contain','background-position':'center'}"></h4>
          <p class="award-text">{{prizeList[2].name}}</p>
        </li>
        <li :class="['award-item',{'award-item-active': prizeList[3].active}]" v-bind:style="{'top':'1.73rem','left':'4.32rem'}">
          <h4 class="award-icon" v-bind:style="{'background-image':`url(${prizeList[3].pic})`,'background-repeat':'no-repeat','background-size':'contain','background-position':'center'}"></h4>
          <p class="award-text">{{prizeList[3].name}}</p>
        </li>
        <li :class="['award-item',{'award-item-active': prizeList[4].active}]" v-bind:style="{'top':'3.46rem','left':'4.32rem'}">
          <h4 class="award-icon" v-bind:style="{'background-image':`url(${prizeList[4].pic})`,'background-repeat':'no-repeat','background-size':'contain','background-position':'center'}"></h4>
          <p class="award-text">{{prizeList[4].name}}</p>
        </li>
        <li :class="['award-item',{'award-item-active': prizeList[5].active}]" v-bind:style="{'top':'3.46rem','left':'2.16rem'}">
          <h4 class="award-icon" v-bind:style="{'background-image':`url(${prizeList[5].pic})`,'background-repeat':'no-repeat','background-size':'contain','background-position':'center'}"></h4>
          <p class="award-text">{{prizeList[5].name}}</p>
        </li>
        <li :class="['award-item',{'award-item-active': prizeList[6].active}]" v-bind:style="{'top':'3.46rem','left':0}">
          <h4 class="award-icon" v-bind:style="{'background-image':`url(${prizeList[6].pic})`,'background-repeat':'no-repeat','background-size':'contain','background-position':'center'}"></h4>
          <p class="award-text">{{prizeList[6].name}}</p>
        </li>
        <li :class="['award-item',{'award-item-active': prizeList[7].active}]" v-bind:style="{'top':'1.73rem','left':0}">
          <h4 class="award-icon" v-bind:style="{'background-image':`url(${prizeList[7].pic})`,'background-repeat':'no-repeat','background-size':'contain','background-position':'center'}"></h4>
          <p class="award-text">{{prizeList[7].name}}</p>
        </li>
      </ul>
      <div class="award-click">
        <div class="get-award" v-on:click="e=>{this.hint ? this.openEnture() : this.rotate()}">
          <p>{{consumenum}}豆/次</p>
        </div>
      </div>
    </div>
  </div>
  <div class="award-info">
    <h2>一. 活动简介</h2>
    <p>活动期间，用户登录进入大转盘，每次抽奖需要扣除{{consumenum}}金豆（具体扣除以实际活动为准），扣除的金豆不退还，每天参与抽奖次数不限;</p>
    <p>请注意：此次活动点击“开始抽奖”会立减金豆，请知晓，谢谢。</p>
    <h2>二.面向用户</h2>
    <p>金融界App所有登录用户</p>
    <h2>三.中奖商品发放期限及方式</h2>
    <p>金豆类：直接累加至金豆总数；</p>
    <p>优惠券类:可重复获得，获得后可于“用户中心”－“优惠券”查看；</p>
    <p>Level-2行情、Z点操盘:使用权限从获奖当日计算，多次获得则累加。</p>
    <h2>四.中奖资格的排除</h2>
    <p>活动过程中如发现您有碍其他用户公平参加本活动或违反本活动目的之行为的（包括但不限于作弊领取、机器刷奖、恶意套现等）金融界有权取消您参加本次活动的资格或您因参加活动所获商品或因此享有的所有利益。</p>
  </div>
  <div id="pop" class="mask">
    <div id="pop-ensure" class="pop-ensure">
      <h3>确认消耗{{consumenum}}金豆</h3>
      <div class="ensure-hint">
        <span v-bind:class="[hint ? trueclass : falseclass]" v-on:click="hintC"></span>
        <p class="ensure-text">下次不再提醒</p>
      </div>
      <div class="ensure-button">
        <span class="ensure-button-close" v-on:click="closeModal">取消</span>
        <span class="ensure-button-true" v-on:click="closeModalrotate">确定</span>
      </div>
    </div>
    <div id="pop-lackBeanNum" class="pop-ensure pop-hint">
      <h3>金豆不足</h3>
      <div class="ensure-hint">
        <p class="ensure-text">您当前的金豆数不足20个，</p>
        <p class="ensure-text">不能参与抽奖！</p>
      </div>
      <div class="ensure-button">
        <span class="ensure-button-true" v-on:click="closeLackBeanNum">确定</span>
      </div>
    </div>
    <div id="pop-getDraw" class="pop-ensure pop-hint">
      <h3>恭喜您</h3>
      <div class="ensure-hint">
        <p class="ensure-text">抽中“{{name}}”！</p>
      </div>
      <div class="ensure-button get-award-button">
        <span class="ensure-button-true" v-on:click="closeGetDraw">确定</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
import 'whatwg-fetch'
import {
  mapState
} from 'vuex'
export default {
  data () {
    return {
      isGO: false,
      position: 3,
      name: '',
      consumenum: 20,
      hint: true, // true 下次提醒 false 下次不提醒
      trueclass: 'ensure-icon-true',
      falseclass: 'ensure-icon-false'
    }
  },
  computed: mapState({
    loginStatus: state => state.user.loginStatus,
    beanNum: state => state.user.beanNum,
    prizeList: state => state.luckDrawData.pricelist,
    LuckUsers: state => state.luckDrawData.LuckUsers,
    draw: state => state.luckDrawData.draw
  }),
  beforecreated () {

  },
  created () {

  },
  mounted () {
    if (!localStorage.getItem('hintStorage')) {
      localStorage.setItem('hintStorage', this.hint)
    } else {
      this.hint = localStorage.getItem('hintStorage') !== 'false'
    }

    document.title = '金豆大转盘'
    const _this = this
    this.$store.dispatch('user/checkLogin').then(() => {
      if (this.loginStatus === 'no') {
        if (window.jrj && window.jrj.jsCallNative) {
          window.jrj.jsCallNative('108', JSON.stringify({
            returnUrl: encodeURI(window.location.href)
          }))
        }
      } else {
        return this.$store.dispatch('user/getBeanNum')
      }
    })
    this.$store.dispatch('luckDrawData/getLuckUsers').then(() => {
      _this.scrolllist()
    })
    this.$store.dispatch('luckDrawData/getPrizeList')
  },
  methods: {
    hintC: function () {
      this.hint = !this.hint
      localStorage.setItem('hintStorage', this.hint)
    },
    scrolllist: function () {
      var scroll = $('#scroll')
      var scrollOuter = $('#scroll-outer')

      var scrollH = scroll.height()

      var scrollOuterH = scrollOuter.height()
      var Top = -scrollOuterH
      var cha = (scrollH) - (scrollOuterH)
      setInterval(function () {
        if (Top <= -cha) {
          Top = -scrollOuterH
          return false
        }
        Top = Top - 1
        scroll.css('top', Top + 'px')
      }, 50)
    },
    openModal: function () {
      var pop = document.getElementById('pop')
      pop.style.display = 'block'
    },
    closeModal: function () {
      var pop = document.getElementById('pop')
      pop.style.display = 'none'
    },
    popEnsure: function () {
      var popEnsure = document.getElementById('pop-ensure')
      popEnsure.style.display = 'block'
    },
    closeEnsure: function () {
      var closeEnsure = document.getElementById('pop-ensure')
      closeEnsure.style.display = 'none'
    },
    popLackBeanNum: function () {
      var popLackBeanNum = document.getElementById('pop-lackBeanNum')
      popLackBeanNum.style.display = 'block'
    },
    popGetDraw: function () {
      var popGetDraw = document.getElementById('pop-getDraw')
      popGetDraw.style.display = 'block'
    },
    openEnture: function () {
      this.openModal()
      this.popEnsure()
    },
    closeModalrotate: function () {
      this.closeModal()
      this.closeEnsure()
      this.rotate()
    },
    openLackBeanNum: function () {
      this.openModal()
      this.popLackBeanNum()
    },
    closeLackBeanNum: function () {
      this.closeModal()
      var closeLackBeanNum = document.getElementById('pop-lackBeanNum')
      closeLackBeanNum.style.display = 'none'
    },
    openGetDraw: function () {
      this.openModal()
      this.popGetDraw()
    },
    closeGetDraw: function () {
      this.closeModal()
      var closeGetDraw = document.getElementById('pop-getDraw')
      closeGetDraw.style.display = 'none'
    },

    rotate: function () {
      this.$store.dispatch('user/checkLogin').then(() => {
        if (this.loginStatus === 'no') {
          if (window.jrj && window.jrj.jsCallNative) {
            window.jrj.jsCallNative('108', JSON.stringify({
              returnUrl: encodeURI(window.location.href)
            }))
          }
        } else if (this.beanNum < this.consumenum) {
          this.openLackBeanNum()
        } else {
          return this.$store.dispatch('luckDrawData/getDraw').then(() => {
            if (this.isGO) {
              return false
            }
            this.position = this.draw.data.position
            this.name = this.draw.data.name
            this.isGO = true
            var __this = this
            this.drawPrize(this.position, __this)
          })
        }
      })
    },
    drawPrize: function (position, __this) {
      var _this = this
      var timer = null
      var count = 8 * 4 + position - 1
      var now = 0
      var last = 0
      this.$set(_this.prizeList[0], 'active', true)
      clearInterval(timer)
      timer = setInterval(function () {
        last = now
        now++
        if (now > 7) {
          now = 0
          last = 7
        }

        _this.$set(_this.prizeList[last], 'active', false)
        _this.$set(_this.prizeList[now], 'active', true)

        count--
        if (count <= 0) {
          clearInterval(timer)
          __this.isGO = false
          __this.openGetDraw()
          __this.$store.dispatch('user/getBeanNum')
        }
      }, 100)
    }
  }
}
</script>
