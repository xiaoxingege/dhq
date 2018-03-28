<style lang="scss">
@import '../../assets/css/base.css';
@import "../../assets/scss/style.scss";
* {
    box-sizing: border-box;
    font-family: '微软雅黑';
    font-size: 12px;
}

p {
    margin: 0;
}

.app,
body,
html {
    height: 100%;
}

body {
    background-color: #0d0e0f;
}

.c_up {
    color: #ca4941;
}

.c_down {
    color: #56a870;
}

.c_txt {
    color: #c9d0d7;
}

.portrait-wrap {
    min-height: 710px;
    padding: 3px 1px;
    min-width: 1217px;
    height: 100%;
    background-color: #0d0e0f;
}

.portrait-wrap > div {
    width: 50%;
    height: 100%;
    display: inline-block;
}

.con-left {
    float: left;
}
</style>
<template>
<div @click="showCalendar" class="portrait-wrap clearfix">
  <div class="con-left">
    <PortraitDetailLeft :isShowCalendar="isShowCalendar" @calendarStatus="getCalendarStatus"></PortraitDetailLeft>
  </div>
  <PortraitDetailRight></PortraitDetailRight>
</div>
</template>
<script type="text/javascript">
import PortraitDetailRight from 'components/customerPortrait/portrait-detail-right'
import PortraitDetailLeft from 'components/customerPortrait/portrait-detail-left'
export default {
  data() {
    return {
      isShowCalendar: false
    }
  },
  components: {
    PortraitDetailRight,
    PortraitDetailLeft
  },
  methods: {
    showCalendar: function() {
      this.isShowCalendar = false
    },
    getCalendarStatus: function(v) {
      this.isShowCalendar = v
    }
  }
}
</script>
