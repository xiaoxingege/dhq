<template>
<div class="hsy-tooltip">
  <div class="outlet" @mouseover="autoShowWithMode" @mouseleave="autoHideWidthMode" @click='autoShowWithMode'>
    <slot name='outlet'></slot>
  </div>
  <div class="tooltip" :style='tooltipStyle'>
    <div class="inner">
      <slot name='tooltip'></slot>
    </div>
    <div class="arrow" :style="arrowStyle"></div>
  </div>
</div>
</template>

<script>
const EMPTY_FN = () => {}
export default {
  name: 'tooltip',
  data() {
    return {
      arrowStyle: {},
      isShowing: false
    }
  },
  props: {
    // hover|click|manual
    mode: {
      type: String,
      default: 'hover'
    },
    value: {
      type: Boolean,
      default: true
    },
    // top|top-left|top-right
    // right|right-top|right-bottom
    // bottom|bottom-left|bottom-right
    // left|left-top|left-bottom
    placement: {
      type: String,
      default: 'top'
    },
    minWidth: {
      type: Number,
      default: 0
    },
    maxWidth: {
      type: Number,
      default: 0
    },
    nowrap: {
      type: Boolean,
      default: true
    },
    arrowWidth: {
      type: Number,
      default: 10
    },
    arrowHeight: {
      type: Number,
      default: 6
    },
    cbHide: {
      type: Function,
      default: EMPTY_FN
    }
  },
  computed: {
    tooltipStyle() {
      const s = {}
      if (this.minWith > 0) {
        s.minWith = this.minWith + 'px'
      }
      if (this.maxWidth > 0) {
        s.maxWidth = this.maxWidth + 'px'
      }
      return s
    },
    outletEl() {
      return this.$el.querySelector('.outlet')
    },
    outletInnerEl() {
      return this.$el.querySelector('.outlet > *')
    },
    tooltipEl() {
      return this.$el.querySelector('.tooltip')
    }
  },
  watch: {
    value(newVal) {
      if (newVal === true && this.mode === 'manual') {
        this.show()
      } else if (newVal === false && (this.mode === 'manual' || this.mode === 'click')) {
        this.hide()
      }
    }
  },
  methods: {
    updateArrowStyle() {
      const s = {}
      const tooltipRect = this.rect(this.tooltipEl)

      // top|bottom
      if (this.placement.indexOf('top') === 0 || this.placement.indexOf('bottom') === 0) {
        if (this.placement.indexOf('top') === 0) {
          s.borderTopColor = 'rgba(0, 0, 0, 0.8)'
          s.borderLeftColor = 'transparent'
          s.borderRightColor = 'transparent'
          s.borderBottomColor = 'transparent'
          s.borderLeftWidth = this.arrowWidth / 2
          s.borderRightWidth = s.borderLeftWidth + 'px'
          s.borderLeftWidth += 'px'
          s.borderTopWidth = this.arrowHeight + 'px'
          s.borderBottomWidth = '0px'
          s.bottom = (-this.arrowHeight) + 'px'
        } else {
          s.borderTopColor = 'transparent'
          s.borderLeftColor = 'transparent'
          s.borderRightColor = 'transparent'
          s.borderBottomColor = 'rgba(0, 0, 0, 0.8)'
          s.borderLeftWidth = this.arrowWidth / 2
          s.borderRightWidth = s.borderLeftWidth + 'px'
          s.borderLeftWidth += 'px'
          s.borderTopWidth = '0px'
          s.borderBottomWidth = this.arrowHeight + 'px'
          s.top = (-this.arrowHeight) + 'px'
        }
        if (this.placement.indexOf('left') !== -1) {
          s.left = this.arrowWidth + 'px'
        } else if (this.placement.indexOf('right') !== -1) {
          s.right = this.arrowWidth + 'px'
        } else {
          s.left = ((tooltipRect.width - this.arrowWidth) / 2) + 'px'
        }
        this.arrowStyle = s
        return
      }

      // left
      if (this.placement.indexOf('left') === 0 || this.placement.indexOf('right') === 0) {
        if (this.placement.indexOf('left') === 0) {
          s.borderTopColor = 'transparent'
          s.borderLeftColor = 'rgba(0, 0, 0, 0.8)'
          s.borderRightColor = 'transparent'
          s.borderBottomColor = 'transparent'
          s.borderLeftWidth = this.arrowHeight + 'px'
          s.borderRightWidth = '0px'
          s.borderTopWidth = this.arrowWidth / 2
          s.borderBottomWidth = s.borderTopWidth + 'px'
          s.borderTopWidth += 'px'
          s.right = (-this.arrowHeight) + 'px'
        } else {
          s.borderTopColor = 'transparent'
          s.borderLeftColor = 'transparent'
          s.borderRightColor = 'rgba(0, 0, 0, 0.8)'
          s.borderBottomColor = 'transparent'
          s.borderLeftWidth = '0px'
          s.borderRightWidth = this.arrowHeight + 'px'
          s.borderTopWidth = this.arrowWidth / 2
          s.borderBottomWidth = s.borderTopWidth + 'px'
          s.borderTopWidth += 'px'
          s.left = (-this.arrowHeight) + 'px'
        }
        if (this.placement.indexOf('top') !== -1 && tooltipRect.height > 30) {
          s.top = this.arrowWidth + 'px'
        } else if (this.placement.indexOf('bottom') !== -1 && tooltipRect.height > 30) {
          s.bottom = this.arrowWidth + 'px'
        } else {
          s.top = ((tooltipRect.height - this.arrowWidth) / 2) + 'px'
        }
        this.arrowStyle = s
        return
      }
    },
    place() {
      const containerRect = this.$el.getBoundingClientRect()
      const outletInnerRect = this.outletInnerEl.getBoundingClientRect()
      const tooltipRect = this.rect(this.tooltipEl)
      // top|bottom
      if (this.placement.indexOf('top') === 0 || this.placement.indexOf('bottom') === 0) {
        let top
        let left
        if (this.placement.indexOf('top') === 0) {
          top = (outletInnerRect.top - containerRect.top - tooltipRect.height - this.arrowHeight - 5) + 'px'
        } else {
          top = (outletInnerRect.bottom - containerRect.top + this.arrowHeight + 5) + 'px'
        }
        if (this.placement.indexOf('left') !== -1) {
          left = (outletInnerRect.left - containerRect.left) + 'px'
        } else if (this.placement.indexOf('right') !== -1) {
          left = (outletInnerRect.right - containerRect.left - tooltipRect.width) + 'px'
        } else {
          left = (outletInnerRect.left - containerRect.left + (outletInnerRect.width - tooltipRect.width) / 2) + 'px'
        }
        this.tooltipEl.style.top = top
        this.tooltipEl.style.left = left
        return
      }
      // left
      if (this.placement.indexOf('left') === 0 || this.placement.indexOf('right') === 0) {
        let top
        let left
        if (this.placement.indexOf('left') === 0) {
          left = (outletInnerRect.left - containerRect.left - tooltipRect.width - this.arrowHeight - 5) + 'px'
        } else {
          left = (outletInnerRect.right - containerRect.left + this.arrowHeight + 5) + 'px'
        }
        if (this.placement.indexOf('top') !== -1) {
          top = (outletInnerRect.top - containerRect.top) + 'px'
        } else if (this.placement.indexOf('bottom') !== -1) {
          top = (outletInnerRect.bottom - containerRect.top - tooltipRect.height) + 'px'
        } else {
          top = (outletInnerRect.top - containerRect.top + (outletInnerRect.width - tooltipRect.width) / 2) + 'px'
        }
        this.tooltipEl.style.top = top
        this.tooltipEl.style.left = left
        return
      }
    },
    rect(el) {
      let rect = el.getBoundingClientRect()
      if (rect.width !== 0 || rect.height !== 0) {
        return rect
      }

      const style = window.getComputedStyle(el)
      const display = style.getPropertyValue('display')
      const top = style.getPropertyValue('top')
      const left = style.getPropertyValue('left')

      el.style.top = '-1000px'
      el.style.left = '-1000px'
      el.style.display = 'block'
      rect = el.getBoundingClientRect()

      el.style.display = display
      el.style.top = top
      el.style.left = left

      return rect
    },
    show() {
      if (this.isShowing) return
      this.isShowing = true
      this.tooltipEl.style.display = 'block'
      this.updateArrowStyle()
      this.place()
    },
    hide() {
      if (!this.isShowing) return
      this.isShowing = false
      this.tooltipEl.style.display = 'none'
      this.cbHide !== EMPTY_FN && this.cbHide()
    },
    autoShowWithMode(evt) {
      if (this.mode === 'hover') {
        if (evt.type === 'mouseover') {
          this.show()
          this.$emit('input', true)
        }
        return
      }
      if (this.mode === 'click' && evt.type === 'click') {
        if (this.isShowing) {
          this.hide()
          this.$emit('input', false)
        } else {
          this.show()
          this.$emit('input', true)
        }
      }
    },
    autoHideWidthMode(evt) {
      if (this.mode === 'hover' && evt.type === 'mouseleave') {
        this.hide()
        this.$emit('input', false)
      } else if (this.mode === 'click' && evt.type === 'click' && !this.$el.contains(evt.target)) {
        this.hide()
        this.$emit('input', false)
      }
    }
  },
  mounted() {
    if (this.mode === 'manual' && this.value) {
      this.show()
    }
    document.addEventListener('click', this.autoHideWidthMode, false)
  },
  destroyed() {
    document.removeEventListener('click', this.autoHideWidthMode, false)
  }
}
</script>
<style lang='scss'>
@import "../../assets/scss/style.scss";
.hsy-tooltip {
    position: relative;
    font: 10px "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif;
}

.hsy-tooltip > .tooltip {
    display: none;
    position: absolute;
    background-color: #fff;
    color: #696969;
    border-radius: 3px;
    outline: none;
    z-index: 100;
    border: 1px solid #ccc;
    padding: 5px 4px;
    width: 172px;
    text-align: left;
    line-height: 1.5;
}

.hsy-tooltip .arrow {
    position: absolute;
    width: 0;
    height: 0;
    // border-style: solid;
    &:after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: -23px;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-top-color: #fff;
    }
    &:before {
        content: '';
        position: absolute;
        bottom: -10px;
        left: -23px;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-top-color: #ccc;
    }
}
</style>
