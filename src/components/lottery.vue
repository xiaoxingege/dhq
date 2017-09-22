<style>
body {
    background-color: #000 !important;
    font-family: '微软雅黑';
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
.box {
    width: 100%;
}
.inner_01 > ul {
    width: 312px;
    margin: 14px auto 0;
}
.inner_01 > ul li {
    width: 97px;
    height: 97px;
    line-height: 97px;
    text-align: center;
    color: white;
    background: #28195b;
    border-radius: 4px;
    margin: 7px 3.5px 0;
    font-size: 15px;
}
.inner_01 > ul .linhight {
    line-height: 25px;
    padding-top: 27px;
    height: 70px;
}
.inner_01 > div > div {
    font-size: 15px;
    line-height: 22px;
    color: #fff;
    text-align: center;
    font-weight: 600;
    background-color: #28195b;
    width: 100px;
    border-radius: 11px;
    margin-top: 12px;
    margin-bottom: 12px;
}
.inner_01 div .about-btn {
    margin-left: 37px;
}
.inner_01 div .personprize {
    margin-right: 32px;
}
.item-cur {
    // background: #771cf2 !important;
    text-shadow: 2px 2px 10px #000;
    box-shadow: inset 0 0 20px #000;
    -webkit-text-shadow: 2px 2px 20px #000;
    -webkit-box-shadow: inset 0 0 20px #000;
    -moz-text-shadow: 2px 2px 10px #000;
    -moz-box-shadow: inset 0 0 20px #000;
}
</style>

<template>
<div class="box">
    <div class="inner_01 lottery box" id="lottery">
        <ul class="clearfix">
            <li class="fl b1 item"></li>
            <li class="fl b2 item"></li>
            <li class="fl b3 item"></li>
        </ul>
        <ul class="clearfix">
            <li class="fl b8 item"></li>
            <li class="fl btn-lottery" @click="lotterys"><img v-if="btnSrc" :src="btnSrc"></li>
            <li class="fl b4 item"></li>
        </ul>
        <ul class="clearfix">
            <li class="fl b7 item"></li>
            <li class="fl b6 item"></li>
            <li class="fl b5 item"></li>
        </ul>
        <!-- <div class="clearfix">
            <div class="about-btn fl">抽奖规则?</div>
            <div class="personprize fr">
                <span>中奖记录</span>
            </div>
        </div> -->
    </div>
</div>
</template>
<script>
import {
    mapState
} from 'vuex'
import jquery from 'jquery'
window.$ = jquery

export default {
  data () {
    return {
      lottery: {
        index: 0, // 当前转动到哪个位置
        count: 0, // 总共有多少个位置
        timer: 0, // setTimeout的ID，用clearTimeout清除
        speed: 200, // 初始转动速度
        times: 0, // 转动次数
        cycle: 50, // 转动基本次数：即至少需要转动多少次再进入抽奖环节
        prize: -1, // 中奖位置
        boj: '',
        counts: 0
      }
    }
  },
  props: ['btnSrc'],
  computed: mapState({
        // dataList: state => {
        //   return state.septNewActivity.dataList
        // }
  }),
  components: {},
  methods: {
    init (selector) {
      this.lottery.obj = $(selector)
      this.lottery.counts = this.lottery.obj.find('.item').length
    },
    rolls () {
      var _this = this
      var index = this.lottery.index
      var count = this.lottery.counts
      var lottery = this.lottery.obj
      $(lottery).find('.b' + (index)).removeClass('item-cur')
      if (index > count - 1) {
        index = 0
      }
      $(lottery).find('.b' + (index + 1)).addClass('item-cur')
      this.lottery.index = index += 1
      this.lottery.times += 1
      if (this.lottery.times > this.lottery.cycle + 10 && this.lottery.prize === this.lottery.index) {
        clearTimeout(this.lottery.timer)
        this.lottery.prize = -1
        this.lottery.speed = 200
        this.lottery.times = 0
        setTimeout(function () {
          _this.$emit('lotteryResult')
        }, 1000)
      } else {
        if (this.lottery.times < this.lottery.cycle) {
          this.lottery.speed -= 10
        } else {
          if (this.lottery.times > this.lottery.cycle + 10 && ((this.lottery.prize === 0 && this.lottery.index === 7) || this.lottery.prize === this.lottery.index + 1)) {
            this.lottery.speed += 110
          } else {
            this.lottery.speed += 20
          }
        }
        if (this.lottery.speed < 40) {
          this.lottery.speed = 40
        }
        this.lottery.timer = setTimeout(this.rolls, this.lottery.speed)
      }
    },
    lotterys () {
      var posMap = {
        '0': 4,
        '1': 8,
        '2': 7,
        '3': 6,
        '4': 8,
        '5': 8,
        '6': 4,
        '7': 4
      }
      this.lottery.prize = posMap[0] // 这里设置得奖位置
      this.rolls()
    }
  },
  mounted () {
    document.title = '抽奖'
    this.init('#lottery')
  }
}
</script>
