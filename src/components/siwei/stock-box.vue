<template>
<div class="dialog" :style="'left:'+options.position.left+'px;top:'+options.position.top+'px;'" @mouseenter="enterbox" @mouseleave="leavebox" v-show="isOpen">
  <div class="top clearfix">
    <span class="fl">{{hoverStock.stockName}}[{{hoverStock.stockCode.substring(0,6)}}]</span>
    <span class="fr" style="font-weight: bold">
    <span :style="{color:colorS,marginRight:5+'px'}">{{hoverStock.lastPx}}</span>
    <span :style="{color:colorS,marginRight:5+'px'}">{{Number(hoverStock.chgPx) >0 ? '+':''}}{{hoverStock.chgPx}}</span>
    <span :style="{color:colorS}">({{Number(hoverStock.chgPx) >0 ? '+':''}}{{hoverStock.chgPctPx}})</span>
    <span class="addSelfChoice" @click="addSelfChoice" v-if="!isShowSelection">+自选</span>
    <span class="deleteSelfChoice" @click="deleteSelfChoice" v-if="isShowSelection">-自选</span>
    </span>
  </div>
  <div class="bottom clearfix">
    <div class="bottomLeft fl">
      <div v-for="item in options.valueList">
        <p>{{item.text}}</p>
        <p>{{item.value}}</p>
      </div>
    </div>
    <div class="bottomRight fl">
      <Stockkline :stockCode="options.stockCode" :chartWidth="320" :chartHeight="200"></Stockkline>
    </div>
  </div>
</div>
</template>
<script>
import Stockkline from 'components/stock-kline'
// import * as Data from '../z3tougu/constant/siwei.js'
import {
  mapState
} from 'vuex'

export default {
  //   options: {
  //     stockName: '',
  //     stockCode: '',
  //     valueList: [
  //        {text:'',value},
  //        {text:'',value},
  //        {text:'',value},
  //        {text:'',value},
  //     ]
  //   }
  props: ['options', 'isShow'],
  data() {
    return {
      isShowSelection: false,
      isShow: false,
      delayHide: false,
      isMouseover: false,
      curStockCode: ''
    }
  },
  components: {
    Stockkline
  },
  watch: {
    'options.stockCode': function() {
      if (!this.options.stockCode) {
        return
      }
      this.$store.dispatch('stock/querySelection', {
        stockCode: this.options.stockCode
      }).then(() => {
        this.isShowSelection = this.$store.state.stock.isSelfSelection
      })
    },
    isShow() {
      // 当设置隐藏时，延迟200ms隐藏
      if (this.isShow === false) {
        this.delayHide = true;
        setTimeout(() => {
          if (!this.isMouseover) {
            this.delayHide = false;
          }
        }, 200)
      }
    }
  },
  computed: mapState({
    hoverStock: state => state.stock.stock,
    colorS: function() {
      if (Number(this.hoverStock.chgPx) > 0) {
        return '#ca4941'
      } else if (Number(this.hoverStock.chgPx) < 0) {
        return '#14b143'
      } else {
        return ''
      }
    },
    isOpen() {
      return this.isShow || this.delayHide;
    }
  }),
  methods: {
    addSelfChoice() {
      this.$store.dispatch('stock/addSelection', {
        stockCode: this.options.stockCode
      }).then(() => {
        this.isShowSelection = this.$store.state.stock.isSelfSelection
      })
    },
    deleteSelfChoice() {
      this.$store.dispatch('stock/removeSelection', {
        stockCode: this.options.stockCode
      }).then(() => {
        this.isShowSelection = this.$store.state.stock.isSelfSelection
      })
    },
    enterbox() {
      this.delayHide = true;
      this.isMouseover = true;
    },
    leavebox(e) {
      // 避免多次click触发mouseleave（不知道是不是浏览器BUG）
      if (e.toElement === null) {
        return
      }
      this.delayHide = false;
      this.isMouseover = false;

    }

  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/base.css';
.dialog {
    width: 470px;
    height: 240px;
    background: #4B515E;
    position: absolute;
    z-index: 10000;
}
.top {
    height: 34px;
    color: #fff;
    font-size: 14px;
    text-align: left;
    line-height: 34px;
    padding: 0 10px;
}
.bottom {
    color: #fff;
    padding-right: 5px;
}
.bottomLeft {
    box-sizing: content-box;
    width: 125px;
    font-size: 12px;
    padding: 0 10px;
}
.bottomLeft p {
    margin: 0;
}
.bottomLeft > div {
    margin-bottom: 7px;
}
.bottomRight {
    width: 320px;
    height: 200px;
}

.addSelfChoice,
.deleteSelfChoice {
    font-weight: normal;
    display: inline-block;
    width: 50px;
    height: 22px;
    line-height: 21px;
    border: 1px solid #DA3D45;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
    margin-left: 5px;
}

.addSelfChoice {
    background: #DA3D45;
}

.deleteSelfChoice {
    color: #DA3D45;
}
</style>