<template lang="html">
    <div class="yo-scroll" :class="{'down':(state===0),'up':(state==1),refresh:(state===2),touch:touching}" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)" @scroll="(onInfinite || infiniteLoading) ? onScroll($event) : undefined">
        <section class="inner">
            <header class="pull-refresh">
                <slot name="pull-refresh">
                    <span class="down-tip">下拉更新</span>
                    <span class="up-tip">松开刷新数据</span>
                    <span class="refresh-tip">加载中……</span>
                </slot>
            </header>
            <slot>
            </slot>
            <footer class="load-more" style="display:none">
                <slot name="load-more">
                    <!-- <span v-show="downFlag === false">上拉加载更多</span> -->
                    <span v-show="downFlag === false">正在加载</span>
                    <span v-show="downFlag === true">加载中……</span>
                </slot>
            </footer>
            <div class="nullData" v-show="dataList.noFlag">到底啦！</div>
        </section>
    </div>
</template>

<script>
export default {
  props: {
    offset: {
      type: Number,
      default: 100 // 默认高度
    },
    enableInfinite: {
      type: Boolean,
      default: true
    },
    enableRefresh: {
      type: Boolean,
      default: true
    },
    dataList: {
      default: false,
      required: false
    },
    onRefresh: {
      type: Function,
      default: undefined,
      required: false
    },
    onInfinite: {
      type: Function,
      default: undefined,
      require: false
    },
    infiniteLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      top: 0,
      state: 0,
      startX: 0,
      startY: 0,
      touching: false,
      downFlag: false // 用来显示是否加载中
    }
  },
  methods: {
    touchStart(e) {
      this.startY = e.targetTouches[0].pageY;
      this.startX = e.targetTouches[0].pageX;
      this.startScroll = this.$el.scrollTop || 0;
      this.touching = true; // 留着有用，不能删除

      this.dataList.noFlag = false;
      this.$el.querySelector('.load-more').style.display = 'block';
    },
    touchMove(e) {
      if (!this.enableRefresh || this.dataList.noFlag || !this.touching) {
        return
      }
      let diff = e.targetTouches[0].pageY - this.startY - this.startScroll
      if (diff > 0) e.preventDefault()
      this.top = Math.pow(diff, 0.8) + (this.state === 2 ? this.offset : 0)
      if (this.state === 2) { // in refreshing
        return
      }
      if (this.top >= this.offset) {
        this.state = 1
      } else {
        this.state = 0
      }

      let more = this.$el.querySelector('.load-more');
      if (!this.top && this.state === 0) {
        more.style.display = 'block';
      } else {
        more.style.display = 'none';
      }
    },
    touchEnd(e) {

      if (!this.enableRefresh) {
        return
      }
      this.touching = false
      if (this.state === 2) { // in refreshing
        this.state = 2
        this.top = this.offset
        return
      }
      if (this.top >= this.offset) { // do refresh
        this.refresh()
      } else { // cancel refresh
        this.state = 0
        this.top = 0
      }

      // 用于判断滑动是否在原地  begin
      let endX = e.changedTouches[0].pageX;
      let endY = e.changedTouches[0].pageY;
      let dy = this.startY - endY;
      let dx = endX - this.startX;

      // 如果滑动距离太短  
      if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
        console.log('滑动距离太短')
        return;
      }

      // --------end--------

      if (!this.enableInfinite || this.infiniteLoading) {
        return
      }

      let outerHeight = this.$el.clientHeight;
      let innerHeight = this.$el.querySelector('.inner').clientHeight;
      let scrollTop = this.$el.scrollTop;
      let ptrHeight = this.onRefresh ? this.$el.querySelector('.pull-refresh').clientHeight : 0;
      let bottom = innerHeight - outerHeight - scrollTop - ptrHeight;

      console.log(bottom + ' __ ' + this.offset)

      if (bottom <= this.offset && this.state === 0) {
        this.downFlag = true;
        this.infinite();
      } else {
        this.$el.querySelector('.load-more').style.display = 'none';
        this.downFlag = false;
      }

    },
    refresh() {
      this.state = 2;
      this.top = this.offset;
      setTimeout(() => {
        this.onRefresh(this.refreshDone)
      }, 1000);
    },
    refreshDone() {
      this.state = 0
      this.top = 0
    },

    infinite() {
      this.infiniteLoading = true

      setTimeout(() => {
        this.onInfinite(this.infiniteDone);
      }, 1000);
    },

    infiniteDone() {
      this.infiniteLoading = false
    },
    onScroll(e) {
      if (!this.enableInfinite || this.infiniteLoading) {
        return
      }
      this.dataList.noFlag = false;
      let outerHeight = this.$el.clientHeight
      let innerHeight = this.$el.querySelector('.inner').clientHeight
      let scrollTop = this.$el.scrollTop
      // console.log(outerHeight)
      // console.log(innerHeight)
      // console.log(scrollTop)
      // let ptrHeight = this.onRefresh ? this.$el.querySelector('.pull-refresh').clientHeight : 0
      // let infiniteHeight = this.$el.querySelector('.load-more').clientHeight
      // let bottom = innerHeight - outerHeight - scrollTop - ptrHeight

      if (innerHeight - outerHeight > scrollTop) {
        this.infinite()
      }
    }

  },
  mounted() {
    this.onInfinite()
  }
}
</script>
<style lang='scss' scoped>
@import "../../assets/scss/style";
.yo-scroll {
    font-size: 24px;
    position: absolute;
    /* top: 128px; */
    top: 7.67rem;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    z-index: 100;
    height: auto;
    -webkit-overflow-scrolling: touch;

}
.yo-scroll .inner {
    position: absolute;
    top: -5rem;
    width: 100%;
    height: auto;
    transition-duration: 300ms;

}
.inner .pull-refresh {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 5rem;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
}
.inner .load-more {
    height: 5rem;
    line-height: 5rem;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: none;
}
.inner .nullData {

    background: $bgConColor;
    font-size: 12px;
    color: $wordsColorBase;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
.down-tip,
.refresh-tip,
.up-tip {
    display: none;
}
.refresh-tip:before,
.up-tip:before {
    content: '';
    display: inline-block;
    width: 160px;
    height: 70px;
    background-size: 70% !important;
    position: absolute;
    top: 0;
    left: 20%;
}
.inner .up-tip:before {
    /* background: url(../img/pull-refresh/down-logo.png) no-repeat center; */
}
.inner .refresh-tip:before {
    /* background: url(../img/pull-refresh/refresh-logo.gif) no-repeat center; */
}
.yo-scroll.touch .inner {
    transition-duration: 0;
}

.yo-scroll.down .down-tip {
    display: block;
}

.yo-scroll.up .up-tip {
    display: block;
}

.yo-scroll.refresh .refresh-tip {
    display: block;
}
.inner .load-more {
    background: $bgConColor;
    font-size: 12px;
    color: $wordsColorBase;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
</style>