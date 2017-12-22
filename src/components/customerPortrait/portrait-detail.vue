<style>
@import '../../assets/css/base.css';
* {
  box-sizing: border-box;
  font-family: '微软雅黑';
  font-size: 12px;
}

p {
  margin: 0px;
}

html,
body,
.app {
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

.portrait-wrap>div {
  width: 50%;
  height: 100%;
  display: inline-block;
}

.con-left {
  float: left;
}
</style>
<template>
<div class="portrait-wrap clearfix">
  <div class="con-left">
    <PortraitDetailLeft></PortraitDetailLeft>
  </div>
  <PortraitDetailRight></PortraitDetailRight>
</div>
</template>
<script type="text/javascript">
import PortraitDetailRight from 'components/customerPortrait/portrait-detail-right'
import PortraitDetailLeft from 'components/customerPortrait/portrait-detail-left'
export default {
  components: {
    PortraitDetailRight,
    PortraitDetailLeft
  }
}
</script>
