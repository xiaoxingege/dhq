<template>
<div class="yo-scroll" @scroll="onScroll($event)">
  <section class="inner">
    <slot name='content'></slot>
    <footer class="load-more">
      <span v-show="downFlag === false">正在加载</span>
    </footer>
    <div class="nullData" v-show="dataList.noFlag">到底啦！</div>
  </section>
</div>
</template>
<script>
export default {
  props: {
    enableInfinite: {
      type: Boolean,
      default: true
    },
    dataList: {
      default: false,
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
      let outerHeight = this.$el.clientHeight // 外框的高度
      let innerHeight = this.$el.querySelector('.inner').clientHeight // 数据表格的高度
      let scrollTop = this.$el.scrollTop // 往上滑的距离
      if (innerHeight - outerHeight > scrollTop) {
        this.infinite()
      }
    }
  },
  mounted() {
    //  this.onInfinite()
  }
}
</script>
<style lang='scss' scoped>
@import "../../assets/scss/style";
</style>