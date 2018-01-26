<style>
@import '../../assets/css/base.css';
* {
  box-sizing: border-box;
}

.map_con {
  position: relative;
  overflow: hidden;
}

.chart {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.map_legend {
  color: #fff;
  display: inline-block;
  font-size: 12px;
  font-weight: 400;
  text-shadow: 0 1px 0 rgba(0, 0, 0, .25);
  position: absolute;
  top: 0px;
  right: 0px;
}

.map_legend .step {
  /*  width: 50px;*/
  height: 20px;
  line-height: 20px;
  cursor: default;
  display: inline-block;
  float: left;
  text-align: center;
  margin-left: 4px;
}

.playback {
  display: inline-block;
  position: absolute;
  top: 0px;
  left: 0px;
  color: #fff;
}

.chart_bottom {
  margin-top: 10px;
  position: relative;
  height: 25px;
}

.perday {
  width: 35px;
  height: 20px;
  line-height: 20px;
  cursor: default;
  display: inline-block;
  float: left;
  font-size: 12px;
  text-align: center;
  border-right: 2px solid #141518;
  background-color: #262626;
}

.disable_time {
  background-color: #717171;
  color: #999;
  border-right: 2px solid #999;
}

.playback_btn {
  margin-left: 0;
  margin-right: 0px;
  width: 20px;
  cursor: pointer;
  line-height: 25px;
}

.playback_btn img {
  vertical-align: baseline;
}

.play_line {
  width: 2px;
  height: 20px;
  background: #e34842;
  position: absolute;
  top: 0px;
  left: 786px;
}

.enlarge {
  height: 25px;
  padding-top: 10px;
  box-sizing: border-box;
  position: absolute;
  top: -32px;
  right: 0px;
}

.enlarge span {
  color: #bdbdbd;
  margin-right: 24px;
  position: relative;
  top: -3px;
}

.enlarge a {
  cursor: pointer
}

.enlarge .restore {
  z-index: 3;
}

.enlarge img {
  opacity: 0.6;
}

.map_wrap {
  position: relative;
}
</style>
<template>
<div class="map_wrap">
  <StockList :node="hoverNode" :parent="hoverNodeParent" :offsetX="offsetX" :offsetY="offsetY" :condition="conditionTopic" :kLineType="kLineType" :topicIndexs="topicIndexs" :stockUpNo="topicStockUpNo" :stockDownNo="topicStockDownNo" @updateWrapHeight="changeWrapHeight"
    v-if="showHover"></StockList>
  <div class="enlarge ">
    <a v-on:click="plateBack" href="javascript:void(0);" v-show="mapType === 'stock'"><span class="restore">返回板块</span></a>
    <a v-on:click="restoreData" href="javascript:void(0);"><span class="restore">恢复默认</span></a>
  </div>
  <div class="map_con" :style="{height:mapHeight+'px',width:mapWidth+'px'}" ref="mapcontainment">
    <div class="chart" ref="treemap" @mousemove="move($event)"></div>
  </div>
  <div class="chart_bottom">
    <div class="clearfix playback">
      <div class="playback_btn perday" v-if="isPlaybackShow"><img :src="playBackSrc" alt="" v-on:click="startPlay()" ref="playBtn"></div>
      <div class="play_line" ref="playLine" :style="{left:playbackLineIndex*35+playLineLeft+'px'}" v-if="isPlaybackShow"></div>
      <div v-for="(time,index) of timeList.slice(1)" :class="datetimeIndex<=index?'perday disable_time':'perday'" v-if="isPlaybackShow">{{Number(time.substring(0,2))+":"+time.substring(2)}}</div>
    </div>
    <div class="map_legend clearfix">
      <div v-for="legend of legendList" class="step" :style="{background:legend.backgroundColor,width:legendWidth+'px'}" v-if="isLegendShow">{{legend.value}}</div>
    </div>
  </div>
</div>
</template>
<script>
import playBackSrc from '../../assets/images/stock-map/playback.png'
import playStopSrc from '../../assets/images/stock-map/playstop.png'
import echarts from 'echarts'
import StockList from 'components/stock-list-map'
import config from '../../z3tougu/config'
const colorsList1 = ['#f63538', '#ee373a', '#e6393b', '#df3a3d', '#d73c3f', '#ce3d41', '#c73e43', '#bf4045', '#b64146', '#ae4248', '#a5424a', '#9d434b', '#94444d', '#8b444e', '#824450', '#784551', '#6f4552', '#644553', '#5a4554', '#4f4554', '#414554', '#3f4c53', '#3d5451', '#3b5a50', '#3a614f', '#38694f', '#366f4e', '#35764e', '#347d4e', '#32844e', '#31894e', '#31904e', '#30974f', '#2f9e4f', '#2fa450', '#2faa51', '#2fb152', '#2fb854', '#30be56', '#30c558', '#30cc5a']
const colorsListRD = ['#f63538', '#ee373a', '#e6393b', '#df3a3d', '#d73c3f', '#ce3d41', '#c73e43', '#bf4045', '#b64146', '#ae4248', '#a5424a', '#9d434b', '#94444d', '#8b444e', '#824450', '#784551', '#6f4552', '#644553', '#5a4554', '#4f4554']
const colorsList2 = ['#3d4251', '#3d4250', '#3d4250', '#3e4251', '#3e4251', '#3d4350', '#3d4350', '#3d4350', '#3e4351', '#3e4350', '#3d4351', '#3d4352', '#3f4353', '#3f4353', '#3f4453', '#3f4554', '#3e4354', '#3e4354', '#3f4454', '#3f4454', '#3f4454', '#3f4454', '#3f4454', '#3f4555', '#3f4556', '#3f4457', '#3f4457', '#3f4457', '#3f4557', '#3f4657', '#3f4657', '#3f4657', '#3f4557', '#3e4557', '#3e4558', '#3f465a', '#3f4659', '#3f4759', '#3f4759', '#3f475a', '#3f4759', '#3f465a', '#3f465a', '#3f4759', '#3f475b', '#40475b', '#40475b', '#40465b', '#40465c', '#40465d', '#40485d', '#40485c', '#40475c', '#40465c', '#40465c', '#40465c', '#40485d', '#40485d', '#40485e', '#40485f', '#40495e', '#40495e', '#40485e', '#40485f', '#40495e', '#40485e', '#40485f', '#404960', '#404960', '#404860', '#404861', '#404a62', '#404962', '#404962', '#404a62', '#404a62', '#404861', '#404961', '#404a63', '#404a64', '#404a65', '#404b64', '#404b64', '#404a65', '#404a65', '#404a65', '#404a65', '#404b65', '#404b65', '#414c65', '#424c65', '#424b65', '#414b66', '#414b67', '#414b67', '#414c67', '#424b67', '#424c67', '#414c67', '#414b67', '#414c67', '#414c67', '#414c69', '#414c6a', '#414c6a', '#414c6a', '#414d6a', '#424e6a', '#414d6a', '#414d6a', '#414d6a', '#414d6a', '#414d6a', '#414d6b', '#414d6c', '#414e6c', '#414f6c', '#414e6c', '#414d6c', '#414d6c', '#414e6c', '#424e6d', '#424e6d', '#414f6d', '#424f6f', '#414e6f', '#414e6f', '#424f70', '#414f6f', '#414f6f', '#414f6f', '#414e6f', '#414e6f', '#414f6f', '#414f6f', '#414f71', '#414f72', '#425073', '#425173', '#415072', '#425173', '#425173', '#425173', '#415072', '#415072', '#415172', '#415173', '#415174', '#415174', '#415074', '#415074', '#415174', '#415074', '#415074', '#415074', '#415175', '#415275', '#425276', '#425277', '#415177', '#415177', '#425278', '#425378', '#415277', '#415378', '#415378', '#415277', '#415378', '#42537a', '#42537c', '#42537b', '#41537a', '#41527a', '#41537a', '#41547a', '#42547b', '#41547a', '#41547a', '#41547c', '#41547c', '#41557c', '#41557c', '#41557c', '#41557c', '#41557d', '#41547d', '#41547c', '#42557d', '#41557d', '#41557d', '#41557f', '#415580', '#41567f', '#41567f', '#415580', '#41567f', '#415580', '#415580', '#41557f', '#415680', '#415680', '#415680', '#415681', '#415681', '#415781', '#415781', '#415681', '#415781', '#415781', '#415781', '#415782', '#415784', '#415784', '#425885', '#425885', '#415784', '#415784', '#415784', '#415784', '#425885', '#425885', '#415885', '#415885', '#425987', '#415887', '#415887', '#415987', '#415887', '#425988', '#425988', '#415887', '#415987', '#415988', '#415988', '#415988', '#415989', '#415989', '#415989', '#415989', '#415989', '#415989', '#41598a', '#405a8b', '#405a8c', '#405b8c', '#405b8c', '#405b8c', '#405a8c', '#405a8c', '#405a8c', '#405a8c', '#405b8c', '#415c8d', '#415c8e', '#405b8e', '#415c90', '#405b8f', '#405c8f', '#415d90', '#405b8f', '#405c8f', '#405c8f', '#405b8f', '#405c8f', '#405c90', '#405c91', '#405c91', '#405c91', '#405d91', '#405e91', '#405d91', '#415e91', '#405e91', '#415e91', '#415e92', '#3f5d94', '#3f5d93', '#3f5d93', '#3f5e94', '#405e94', '#3f5d94', '#3f5d94', '#3f5d94', '#3f5e94', '#3f5e95', '#3f5e96', '#3f5e96', '#3f5e96', '#405f97', '#405f97', '#3f5e96', '#3f5e97', '#3f5f97', '#3f6097', '#3f5f97', '#3f6097', '#3f5f98', '#3f5f99', '#3e5f99', '#3e6199', '#3e6099', '#3e5f99', '#3e5f99', '#3e5f98', '#3e6099', '#3d609a', '#3d6099', '#3e609b', '#3e619c', '#3e619c', '#3e619c', '#3e609b', '#3e609c', '#3e609c', '#3e619b', '#3e629c', '#3e629c', '#3e619c', '#3d619d', '#3d639f', '#3d629f', '#3d629f', '#3d639f', '#3d629f', '#3c619e', '#3c619e', '#3d629f', '#3d62a0', '#3d63a0', '#3d63a0', '#3d62a0', '#3d63a1', '#3d62a0', '#3d63a0', '#3d64a1', '#3d63a0', '#3c63a0', '#3b63a2', '#3c64a3', '#3c65a3', '#3b63a3', '#3b63a3', '#3b63a3', '#3b63a3', '#3c63a3', '#3c65a3', '#3c65a3', '#3b64a4', '#3a65a5', '#3b66a6', '#3c65a6', '#3a65a5', '#3a64a5', '#3a64a5', '#3b65a5', '#3a65a5', '#3a66a6', '#3b66a6', '#3b66a6', '#3a66a8', '#3a67a8', '#3b67a8', '#3b66a8', '#3b66a8', '#3b66a8', '#3b67a8', '#3a66a8', '#3966a9', '#3967a9', '#3a67aa', '#3a67ab', '#3967ab', '#3a68ab', '#3a68ab', '#3968ab', '#3966aa', '#3966aa', '#3968ab', '#3968ab', '#3867ac', '#3867ac', '#3868ac', '#3869ad', '#3969ad', '#3968ad', '#3868ac', '#3868ac', '#3869ae', '#3868ad', '#3868ad', '#3769af', '#3869b0', '#3769af', '#3769af', '#386ab0', '#386ab0', '#376aaf', '#376aaf', '#376ab0', '#366ab1', '#366ab2', '#366ab2', '#366ab2', '#366ab3', '#366bb3', '#366ab2', '#3669b2', '#366ab2', '#366ab2', '#366ab2', '#356bb3', '#346bb4', '#356cb4', '#356cb4', '#346bb4', '#356cb4', '#356cb5', '#356cb5', '#356cb5', '#346cb5', '#346cb5', '#346cb6', '#336db7', '#326cb7', '#326db7', '#336db7', '#336cb7', '#326bb6', '#326cb6', '#326db7', '#326db8', '#316dba', '#316eb9', '#316eb9', '#326eba', '#316eba', '#316db9', '#316db9', '#316eb9', '#306eba', '#306dba', '#306dba', '#306ebb', '#306dbb', '#306dbc', '#306fbc', '#306fbc', '#306ebb', '#306eba', '#306fbc', '#2f6fbd', '#2d6ebe', '#2d6ebe', '#2d6fbe', '#2e70be', '#2e70be', '#2e6fbe', '#2e6fbe', '#2e6fbe', '#2c6fc0', '#2d70c0', '#2d70c0', '#2b70c1', '#2b70c1', '#2c70c1', '#2c70c1', '#2b71c1', '#2c70c1', '#2c70c1', '#2c71c1', '#2c71c1', '#2a72c3', '#2971c3', '#2a71c2', '#2972c3', '#2a71c3', '#2a71c3', '#2972c3', '#2972c3', '#2972c3', '#2872c5', '#2872c6', '#2872c5', '#2773c6', '#2773c6', '#2772c6', '#2772c5', '#2672c5', '#2673c5', '#2673c5', '#2673c7', '#2472c8', '#2473c8', '#2474c8', '#2573c9', '#2573c9', '#2573c9', '#2573c9', '#2474c8', '#2374c9', '#2374c9', '#2374c9', '#2375c9', '#2374c9', '#2374c9', '#2475c9', '#2575ca', '#2476ca', '#2476ca', '#2476ca', '#2575cb', '#2577ca', '#2577ca', '#2576ca', '#2577ca', '#2577ca', '#2577ca', '#2677ca', '#2678ca', '#2678cb', '#2778cb', '#2778cb', '#2679cb', '#2779cb', '#2779cb', '#2779cb', '#2779cb', '#2879cb', '#287acb', '#287acb', '#2879cb', '#287acb', '#287bcb', '#287acb', '#287acb', '#287bcc', '#287bcc', '#297bcc', '#297bcc', '#297bcc', '#297bcc', '#297ccc', '#297ccc', '#297dcc', '#297dcc', '#2a7dcc', '#2a7dcc', '#2a7ecd', '#2a7ecd', '#2a7ecc', '#2a7ecc', '#2b7ecd', '#2c7ecd', '#2c7fcd', '#2c7fcd', '#2b7ecc', '#2b7ecc', '#2c7fcd', '#2c7fcd', '#2c7fcd', '#2c7fcd', '#2b7fcd', '#2b80cd', '#2c80ce', '#2d80ce', '#2d80ce', '#2c81cd', '#2d82ce', '#2d82ce', '#2d81ce', '#2d82ce', '#2d82ce', '#2d82cd', '#2e82cd', '#2e83ce', '#2e82ce', '#2d82cd', '#2d83cd', '#2e83cf', '#2e84cf', '#2e84cf', '#2e83ce', '#2e83ce', '#3084cf', '#3085cf', '#2f85ce', '#3085cf', '#2f86ce', '#2f86ce', '#2f86cf', '#2f85cf', '#2f86ce', '#2f86cf', '#2f86cf', '#2f87cf', '#2f86d0', '#2f86d0', '#2f86d0', '#3087cf', '#3088d0', '#3088d0', '#3087cf', '#3088cf', '#3188d0', '#3188d1', '#3088d0', '#3089d0', '#3089d0', '#3088d0', '#3188d0', '#3189d0', '#3289d0', '#3289d0', '#328ad1', '#328ad1', '#318ad0', '#318ad0', '#318ad0', '#328bd1', '#328ad1', '#328ad1', '#338bd2', '#338bd2', '#338cd1', '#338cd1', '#338cd2', '#338cd2', '#338dd1', '#338dd1', '#338dd2', '#338dd1', '#338ed2', '#338ed2', '#338ed2', '#348ed2', '#348ed2', '#348ed2', '#348fd2', '#348fd2', '#348fd2', '#348fd2', '#348fd2', '#348fd2', '#3390d2', '#3391d2', '#3491d3', '#3490d3', '#3491d3', '#3491d3', '#3591d3', '#3591d3', '#3691d4', '#3690d4', '#3590d3', '#3592d3', '#3592d4', '#3592d4', '#3592d3', '#3593d3', '#3592d4', '#3592d4', '#3592d4', '#3593d4', '#3694d4', '#3695d4', '#3694d4', '#3693d4', '#3693d4', '#3695d4', '#3695d4', '#3695d4', '#3796d4', '#3796d4', '#3695d4', '#3695d5', '#3696d5', '#3696d5', '#3696d5', '#3695d4', '#3696d4', '#3797d5', '#3796d5', '#3797d5', '#3898d5', '#3898d5', '#3797d5', '#3798d5', '#3899d5', '#3899d5', '#3899d6', '#3799d6', '#3799d6', '#3799d6', '#389ad6', '#389ad6', '#3799d5', '#3799d5', '#3799d6', '#379ad6', '#379ad6', '#399ad6', '#399ad6', '#389bd5', '#389bd5', '#389bd6', '#389bd6', '#399cd7', '#399bd7', '#399cd7', '#399dd7', '#389cd7', '#389cd6', '#389dd6', '#399ed7', '#389dd6', '#389dd6', '#389fd6', '#399fd7', '#399ed6', '#399ed6', '#399fd7', '#399fd7', '#399fd7', '#3aa0d8', '#3aa0d8', '#3a9fd8', '#3a9fd8', '#3a9fd8', '#3aa0d8', '#3aa1d8', '#3aa1d8', '#3aa1d8', '#3aa1d8', '#3aa1d8', '#3aa2d9', '#3aa1d9', '#3aa1d8', '#39a2d8', '#3aa2d9', '#3aa3d9', '#3ba3d9', '#3ba3d9', '#3ba2d8', '#3aa2d8', '#3aa4d8', '#3ba4d9', '#3aa3d8', '#3aa3d9', '#3ba5da', '#3ba5d9', '#3ba4d9', '#3ba4d9', '#3ba4d9', '#3aa5d9', '#3ba5da', '#3ba6da', '#3ba6da', '#3ba6da', '#3ba6d9', '#3ba6d9', '#3ba6da', '#3aa5da', '#3ba6da', '#3ca7da', '#3ca7da', '#3ba7da', '#3ba6da', '#3ca7da', '#3ca8da', '#3ca8da', '#3ca8da', '#3ca9db', '#3ca9db', '#3ca9da', '#3ca8db', '#3ba8db', '#3baadb', '#3caadb', '#3ca9db', '#3caadb', '#3caadb', '#3ca9db', '#3ca9db', '#3ca9db', '#3cabdb', '#3cabdc', '#3caadb', '#3cabdb', '#3cacdc', '#3cacdc', '#3cacdc', '#3caddc', '#3caddc', '#3caddc', '#3caedc', '#3caddd', '#3caddd', '#3caedc', '#3eaedd', '#3eaddd', '#3daddc', '#3daedc', '#3daedc', '#3dafdd', '#3dafdd', '#3daedd', '#3dafdd', '#3dafdd', '#3dafdd', '#3db0dd', '#3db0dd', '#3db0dc', '#3db0dc', '#3db1dd', '#3db1dd', '#3db0dd', '#3db0dd', '#3db1dd', '#3db1de', '#3db1de', '#3db1de', '#3db2de', '#3db2de', '#3db2dd', '#3db2dd', '#3db3dd', '#3db2de', '#3db3de', '#3db4de', '#3db3dd', '#3db4de', '#3db4de', '#3db4de', '#3db5df', '#3db5df', '#3db4df', '#3db4df', '#3db5df', '#3db5de', '#3db5de', '#3db5de', '#3db6df', '#3db6df', '#3db6de', '#3db6de', '#3db7df', '#3db7e0', '#3db8e0', '#3db8e0', '#3db7e0', '#3db7df', '#3db7df', '#3eb7df', '#3eb8df', '#3eb8df', '#3eb9e0', '#3eb9e0', '#3eb8df', '#3eb9df', '#3fb9df', '#3fb9e0', '#3ebae1', '#3ebae0', '#3ebae0', '#3ebae0', '#3eb9e0', '#3fbae1', '#3fbbe1', '#3ebae0', '#3ebbe1', '#3ebae0', '#3ebbe0', '#3ebce1', '#3fbce1', '#3ebce0', '#3ebce2', '#3ebce2', '#3ebde2', '#3fbde2', '#3fbde2', '#3ebde1', '#3ebee1', '#3ebde2', '#3fbde2', '#3fbde2', '#3ebee1', '#3ebfe1', '#3ebfe1', '#3ebfe1', '#3fbfe2', '#3ebfe1', '#3ebee1', '#3ebee2', '#3ebfe2', '#3ebfe2', '#3ebfe2', '#3ec0e2', '#3ec1e2', '#3fc0e3', '#3fc0e3', '#3ec0e2', '#3ec1e2', '#3ec2e2', '#3ec2e2', '#3ec2e2', '#3ec3e3', '#3ec3e3', '#3ec3e3', '#3ec2e3', '#3ec2e3', '#3fc3e3', '#3fc4e3', '#3ec4e3', '#3ec3e3', '#3ec3e3', '#3ec5e4', '#3fc5e4', '#3fc5e3', '#3fc4e4', '#3fc5e4', '#3ec6e4', '#3ec5e4', '#3ec4e4', '#3ec5e4', '#3ec6e4', '#3ec6e4', '#3ec6e4', '#3ec6e4', '#3ec6e4', '#3ec7e4', '#3ec6e4', '#3ec6e4', '#3ec6e4', '#3ec7e4', '#3dc8e4', '#3dc8e4', '#3dc7e5', '#3dc7e5', '#3dc8e5', '#3dc8e4', '#3dc8e4', '#3dc9e5', '#3dc9e5', '#3dc9e5', '#3dc9e5', '#3dc9e5', '#3dc9e4', '#3dc9e5', '#3dcae6', '#3dcbe6', '#3dcae6', '#3dcae6', '#3dcae6', '#3dcbe6', '#3dcce6', '#3ecce6', '#3ecce6', '#3dcbe6', '#3dcce6', '#3dcce6', '#3dcce6', '#3dcce5', '#3dcce5', '#3dcce6', '#3dcde7', '#3dcde7', '#3dcde7', '#3dcfe7', '#3dcfe7', '#3dcfe7', '#3dcee7', '#3dcee6', '#3dcee6', '#3dcfe7', '#3dcfe7', '#3dcfe6', '#3dcfe6', '#3dd0e8', '#3ed1e8', '#3ed1e7', '#3dd0e7', '#3dd0e8', '#3dd0e7', '#3dd1e7', '#3dd1e7', '#3dd0e7', '#3cd1e8', '#3cd2e8', '#3cd1e8', '#3cd1e7', '#3cd1e7', '#3cd2e8', '#3cd3e9', '#3cd2e8', '#3cd2e9', '#3cd2e9', '#3cd3e8', '#3cd4e8', '#3cd3e8', '#3cd3e8']
const valueRangeRD = [0, 12, 24, 36, 48, 60, 72, 84, 96] // 连涨天数
const valueRange1d = [-4, -3, -2, -1, 0, 1, 2, 3, 4] // 图例1日涨跌幅数值
const valueRangeRelvol = [0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6, 1.8] // 图例相对成交量数值
const valueRangeGX = [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6] // 股息率
const valueRangeSJ = [0, 1.2, 2.4, 3.6, 4.8, 6, 7.2, 8.4, 9.6] // 股息率
const valueRangeUD = [-12, -9, -6, -3, 0, 3, 6, 9, 12] // 连涨天数
let pid
let syncDateTimePid
export default {
  props: ['plateType', 'conditionTopic', 'conditionStock', 'topicIndexs', 'topicStockIndexs'], // 从父组件传下来
  components: {
    StockList
  },
  data() {
    return {
      plateType: this.plateType || '',
      isContinue: 1,
      offsetX: 0,
      offsetY: 0,
      colors: {
        /* 板块 */
        'topic_market.tech_index': colorsListRD.slice().reverse(), // 热度指数 灰-红
        'chg_pct': colorsList1.slice().reverse(), // 涨跌幅 绿-红
        'chg_pct_week': colorsList1.slice().reverse(), // 近1周涨跌幅
        'chg_pct_month': colorsList1.slice().reverse(), // 近1月涨跌幅
        'chg_pct_3month': colorsList1.slice().reverse(), // 近3月涨跌幅
        'chg_pct_6month': colorsList1.slice().reverse(), // 近6月涨跌幅
        'chg_pct_year': colorsList1.slice().reverse(), // 近1年涨跌幅
        'chg_pct_year_sofar': colorsList1.slice().reverse(), // 今年以来涨跌幅
        'rela_volume': colorsList2, // 相对成交量
        'peg': colorsList1, // PEG
        'ps': colorsList1, // 市销率
        'pb': colorsList1, // 市净率
        'div_rate': colorsList1.slice().reverse().slice(20), // 股息率
        'pe_ttm': colorsList1, // 市盈率(TTM)
        'fir_fcst_pe': colorsList1, // 预测市盈率
        'eps_5year': colorsList1.slice().reverse(), // EPS增长率(过去5年)
        'keep_days': colorsList1.slice().reverse(), // 连涨天数
        /* 个股 */
        'tech_index': colorsListRD.slice().reverse(), // 热度指数 灰-红
        'mkt_idx.cur_chng_pct': colorsList1.slice().reverse(), // 涨跌幅 绿-红
        'mkt_idx.chng_pct_week': colorsList1.slice().reverse(), // 近1周涨跌幅
        'perf_idx.chng_pct_month': colorsList1.slice().reverse(), // 近1月涨跌幅
        'perf_idx.chng_pct_3month': colorsList1.slice().reverse(), // 近3月涨跌幅
        'perf_idx.chng_pct_6month': colorsList1.slice().reverse(), // 近6月涨跌幅
        'perf_idx.chng_pct_year': colorsList1.slice().reverse(), // 近1年涨跌幅
        'perf_idx.chng_pct_year_sofar': colorsList1.slice().reverse(), // 今年以来涨跌幅
        'mkt_idx.rela_volume': colorsList2, // 相对成交量
        'mkt_idx.peg': colorsList1, // PEG
        'mkt_idx.ps': colorsList1, // 市销率
        'mkt_idx.pb': colorsList1, // 市净率
        'mkt_idx.div_rate': colorsList1.slice().reverse().slice(20), // 股息率
        'mkt_idx.pe_ttm': colorsList1, // 市盈率(TTM)
        'mkt_idx.fir_fcst_pe': colorsList1, // 预测市盈率
        'fin_idx.eps_5year': colorsList1.slice().reverse(), // EPS增长率(过去5年)
        'mkt_idx.keep_days_today': colorsList1.slice().reverse() // 连涨天数
      },
      rangeValues: {
        /* 个股 */
        'tech_index': valueRangeRD, // 热度指数
        'mkt_idx.cur_chng_pct': valueRange1d, // 涨跌幅
        'mkt_idx.chng_pct_week': this.fmtraneValue(valueRange1d, 2), // 近1周涨跌幅
        'perf_idx.chng_pct_month': this.fmtraneValue(valueRange1d, 3), // 近1月涨跌幅
        'perf_idx.chng_pct_3month': this.fmtraneValue(valueRange1d, 6), // 近3月涨跌幅
        'perf_idx.chng_pct_6month': this.fmtraneValue(valueRange1d, 8), // 近6月涨跌幅
        'perf_idx.chng_pct_year': this.fmtraneValue(valueRange1d, 9), // 近1年涨跌幅
        'perf_idx.chng_pct_year_sofar': this.fmtraneValue(valueRange1d, 8), // 今年以来涨跌幅
        'mkt_idx.rela_volume': valueRangeRelvol, // 相对成交量
        'mkt_idx.peg': this.fmtraneValue(valueRangeGX, 2.5), // PEG
        'mkt_idx.ps': this.fmtraneValue(valueRangeGX, 10), // 市销率
        'mkt_idx.pb': valueRangeSJ, // 市净率
        'mkt_idx.div_rate': valueRangeGX, // 股息率
        'mkt_idx.pe_ttm': this.fmtraneValue(valueRangeGX, 75), // 市盈率(TTM)
        'mkt_idx.fir_fcst_pe': this.fmtraneValue(valueRangeGX, 75), // 预测市盈率
        'fin_idx.eps_5year': this.fmtraneValue(valueRange1d, 9), // EPS增长率(过去5年)
        'mkt_idx.keep_days_today': valueRangeUD, // 个股连续涨跌天数
        /* 板块 */
        'topic_market.tech_index': valueRangeRD, // 热度指数
        'chg_pct': valueRange1d, // 涨跌幅
        'chg_pct_week': this.fmtraneValue(valueRange1d, 2), // 近1周涨跌幅
        'chg_pct_month': this.fmtraneValue(valueRange1d, 3), // 近1月涨跌幅
        'chg_pct_3month': this.fmtraneValue(valueRange1d, 6), // 近3月涨跌幅
        'chg_pct_6month': this.fmtraneValue(valueRange1d, 8), // 近6月涨跌幅
        'chg_pct_year': this.fmtraneValue(valueRange1d, 9), // 近1年涨跌幅
        'chg_pct_year_sofar': this.fmtraneValue(valueRange1d, 8), // 今年以来涨跌幅
        'rela_volume': valueRangeRelvol, // 相对成交量
        'peg': this.fmtraneValue(valueRangeGX, 2.5), // PEG
        'ps': this.fmtraneValue(valueRangeGX, 10), // 市销率
        'pb': valueRangeSJ, // 市净率
        'div_rate': valueRangeGX, // 股息率
        'pe_ttm': this.fmtraneValue(valueRangeGX, 75), // 市盈率(TTM)
        'fir_fcst_pe': this.fmtraneValue(valueRangeGX, 75), // 预测市盈率
        'eps_5year': this.fmtraneValue(valueRange1d, 9), // EPS增长率(过去5年)
        'keep_days': valueRangeUD // 个股连续涨跌天数
      },
      isUnit: {
        /* 个股 */
        'tech_index': '', // 热度指数 绿-红
        'mkt_idx.cur_chng_pct': '%', // 个股涨跌幅 绿-红
        'mkt_idx.chng_pct_week': '%', // 个股近1周涨跌幅
        'perf_idx.chng_pct_month': '%', // 近1月涨跌幅
        'perf_idx.chng_pct_3month': '%', // 近3月涨跌幅
        'perf_idx.chng_pct_6month': '%', // 近6月涨跌幅
        'perf_idx.chng_pct_year': '%', // 近1年涨跌幅
        'perf_idx.chng_pct_year_sofar': '%', // 今年以来涨跌幅
        'mkt_idx.rela_volume': '', // 相对成交量
        'mkt_idx.peg': '', // PEG
        'mkt_idx.ps': '', // 市销率
        'mkt_idx.pb': '', // 市净率
        'mkt_idx.div_rate': '%', // 股息率
        'mkt_idx.pe_ttm': '', // 市盈率(TTM)
        'mkt_idx.fir_fcst_pe': '', // 预测市盈率
        'fin_idx.eps_5year': '%', // EPS增长率(过去5年)
        'mkt_idx.keep_days_today': '天',
        /* 板块 */
        'topic_market.tech_index': '', // 热度指数 绿-红
        'chg_pct': '%', // 个股涨跌幅 绿-红
        'chg_pct_week': '%', // 个股近1周涨跌幅
        'chg_pct_month': '%', // 近1月涨跌幅
        'chg_pct_3month': '%', // 近3月涨跌幅
        'chg_pct_6month': '%', // 近6月涨跌幅
        'chg_pct_year': '%', // 近1年涨跌幅
        'chg_pct_year_sofar': '%', // 今年以来涨跌幅
        'rela_volume': '', // 相对成交量
        'peg': '', // PEG
        'ps': '', // 市销率
        'pb': '', // 市净率
        'div_rate': '%', // 股息率
        'pe_ttm': '', // 市盈率(TTM)
        'fir_fcst_pe': '', // 预测市盈率
        'eps_5year': '%', // EPS增长率(过去5年)
        'keep_days': '天'
      },
      legendList: [],
      timeList: ['0930', '0940', '0950', '1000', '1010', '1020', '1030', '1040', '1050', '1100', '1110', '1120', '1130', '1310', '1320', '1330', '1340', '1350', '1400', '1410', '1420', '1430', '1440', '1450', '1500'],
      playBackDate: [],
      playBackDateShow: [],
      playBackState: false, // 默认是停止不回放
      playBackSrc: playStopSrc,
      mapHeight: window.innerHeight - 70,
      mapWidth: window.innerWidth - 26,
      showHover: false,
      hoverNode: null,
      hoverNodeEl: null,
      legendWidth: 36,
      isLegendShow: true,
      isPlaybackShow: true,
      intervalTime: 10,
      updateDataPid: null,
      playBackTradeDate: null,
      playBackIndex: -1, // 回放index;当为-1时表示不在回放过程中。
      datetimeIndex: 0, // 当前时间index
      playLineLeft: 17.5,
      isStopPlayback: false,
      wrapHeight: 0,
      clientX: 0,
      clientY: 0,
      scale: 1,
      zoomDelta: 0,
      autoUpdate: true,
      hoverNodeParent: null,
      topicCode: '',
      kLineType: 'topic',
      mapType: 'plate', // 板块还是个股
      topicStockUpNo: 0,
      topicStockDownNo: 0
    }
  },
  watch: {
    conditionTopic() {
      this.$emit('changeCondition', this.topicIndexs.indexOf(this.conditionTopic))
      this.isContinue = 1
      this.autoUpdate = true
      this.updateData()
    },
    conditionStock() {
      if (this.mapType === 'plate') { // 鼠标移入的时候
        return
      }
      this.$emit('changeCondition', this.topicStockIndexs.indexOf(this.conditionStock))
      this.isContinue = 1
      this.autoUpdate = true
      this.updateStockData()
    }
  },
  computed: {
    mapData: function() {
      const map = [].concat(this.$store.state.plateMap.topicData)
      map.forEach(function(industry) {
        industry.value = industry.size
      })
      return map
    },
    topicStock: function() {
      const topicStock = [].concat(this.$store.state.plateMap.topicStock)
      topicStock.forEach(function(industry) {
        industry.value = industry.size
      })
      return topicStock
    },
    topicStockValue: function() { // 鼠标移入和点击进入个股的时候调用
      const topicStock = this.topicStock
      const topicStockValue = this.$store.state.plateMap.topicStockValue
      const _this = this
      topicStock.forEach(function(stock) {
        if (topicStockValue) {
          stock.perf = topicStockValue[stock.id] !== undefined ? topicStockValue[stock.id] : topicStockValue[stock.name];
          if (stock.perf !== null && typeof stock.perf !== 'undefined') {
            if (_this.isUnit[_this.conditionStock] === '%') {
              if (_this.conditionStock !== 'mkt_idx.div_rate') { // 切换板块的浏览指标的时候conditionTopic变了 但是conditionStock没变 所以不能用conditionStock衡量 鼠标移入的时候
                if (stock.perf >= 0) {
                  stock.perfText = '+' + parseFloat(stock.perf).toFixed(2) + '%'
                } else {
                  stock.perfText = parseFloat(stock.perf).toFixed(2) + '%'
                }
              } else {
                stock.perfText = parseFloat(stock.perf).toFixed(2) + '%'
              }
            } else {
              stock.perfText = parseFloat(stock.perf).toFixed(2);
              if (_this.conditionStock === 'mkt_idx.keep_days_today') {
                stock.perfText = stock.perf + '天';
              } else {
                stock.perf = stock.perf.toFixed(2)
              }
            }
          } else {
            stock.perfText = '--'
          }
          stock.itemStyle = {
            normal: {
              color: _this.showColor(_this.colors[_this.conditionStock], _this.rangeValues[_this.conditionStock], stock.perf) || '#2f323d'
            }
          }
        } else {
          stock.perfText = '--'
          stock.itemStyle = {
            normal: {
              color: '#2f323d'
            }
          }
        }
      })
      return topicStock
    },
    topicValue: function() {
      const map = this.mapData
      const topicValue = this.$store.state.plateMap.topicValue
      const _this = this
      map.forEach(function(stock) {
        if (topicValue) {
          stock.perf = topicValue[stock.id] !== undefined ? topicValue[stock.id] : topicValue[stock.name];
          if (stock.perf !== null && typeof stock.perf !== 'undefined') {
            if (_this.isUnit[_this.conditionTopic] === '%') {
              if (_this.conditionTopic !== 'mkt_idx.div_rate') {
                if (stock.perf >= 0) {
                  stock.perfText = '+' + parseFloat(stock.perf).toFixed(2) + '%'
                } else {
                  stock.perfText = parseFloat(stock.perf).toFixed(2) + '%'
                }
              } else {
                stock.perfText = parseFloat(stock.perf).toFixed(2) + '%'
              }
            } else {
              stock.perfText = parseFloat(stock.perf).toFixed(2);
              if (_this.conditionTopic === 'keep_days') {
                stock.perfText = stock.perf + '天';
              } else {
                stock.perf = stock.perf.toFixed(2)
              }
            }
          } else {
            stock.perfText = '--'
          }
          stock.itemStyle = {
            normal: {
              color: _this.showColor(_this.colors[_this.conditionTopic], _this.rangeValues[_this.conditionTopic], stock.perf) || '#2f323d'
            }
          }
        } else {
          stock.perfText = '--'
          stock.itemStyle = {
            normal: {
              color: '#2f323d'
            }
          }
        }
      })
      return map
    },
    stockListInfo: function() {
      let stockListInfo = []
      const topicStockValue = this.$store.state.plateMap.topicStockValue
      const _this = this
      if (topicStockValue) {
        for (let name in topicStockValue) {
          stockListInfo.push({
            name: name,
            perf: topicStockValue[name]
          })
        }
      }
      stockListInfo.forEach(function(stock) {
        if (topicStockValue) {
          if (stock.perf !== null && typeof stock.perf !== 'undefined') {
            if (_this.isUnit[_this.conditionStock] === '%') {
              if (_this.conditionStock !== 'mkt_idx.div_rate') {
                if (stock.perf >= 0) {
                  stock.perfText = '+' + parseFloat(stock.perf).toFixed(2) + '%'
                } else {
                  stock.perfText = parseFloat(stock.perf).toFixed(2) + '%'
                }
              } else {
                stock.perfText = parseFloat(stock.perf).toFixed(2) + '%'
              }
            } else {
              stock.perfText = parseFloat(stock.perf).toFixed(2);
              if (_this.conditionStock === 'mkt_idx.keep_days_today') {
                stock.perfText = stock.perf + '天';
              } else {
                stock.perf = stock.perf.toFixed(2)
              }
            }
          } else {
            stock.perfText = '--'
          }
          stock.itemStyle = {
            normal: {
              color: _this.showColor(_this.colors[_this.conditionStock], _this.rangeValues[_this.conditionStock], stock.perf) || '#2f323d'
            }
          }
        } else {
          stock.perfText = '--'
          stock.itemStyle = {
            normal: {
              color: '#2f323d'
            }
          }
        }
      })
      return stockListInfo
    },
    playbackLineIndex: function() {
      return this.playBackIndex === -1 ? this.datetimeIndex : this.playBackIndex
    }
  },
  methods: {
    initMap: function() {
      this.chart = echarts.init(this.$refs.treemap)
      const _this = this;
      let p1 = new Promise((resolve, reject) => {
        this.$store.dispatch('plateMap/queryRangeByCode').then(() => {
          this.initOption(this.mapData);
          resolve();
        })
      });
      let p2 = new Promise((resolve, reject) => {
        this.$store.dispatch('plateMap/queryTopicValue', {
          isContinue: this.isContinue,
          condition: this.conditionTopic
        }).then(() => {
          resolve();
        })
      });
      Promise.all([p1, p2]).then(() => {
        this.updateMapData(this.topicValue);
      });
      // 获取当日最新时点
      this.chart.showLoading(config.loadingConfig)
      this.getLegendColor(this.conditionTopic)
      window.onresize = function() {
        _this.mapHeight = window.innerHeight - 70
        _this.mapWidth = window.innerWidth - 26
        _this.chart.resize({
          height: _this.mapHeight,
          width: _this.mapWidth
        })
      }
      this.autoUpdateData()
    },
    updateMap: function() {
      this.isContinue = 1;
      let p1 = new Promise((resolve, reject) => {
        this.$store.dispatch('plateMap/queryRangeByCode').then(() => {
          this.initOption(this.mapData);
          resolve();
        })
      });
      let p2 = new Promise((resolve, reject) => {
        this.$store.dispatch('plateMap/queryTopicValue', {
          isContinue: this.isContinue,
          condition: this.conditionTopic
        }).then(() => {
          resolve();
        })
      });
      Promise.all([p1, p2]).then(() => {
        this.updateMapData(this.topicValue);
      })
    },
    updateStockMap: function() {
      this.isContinue = 1;
      let p1 = new Promise((resolve, reject) => {
        this.$store.dispatch('plateMap/queryTopicStock', {
          topicCode: this.topicCode
        }).then(() => {
          this.initOption(this.topicStock);
          resolve();
        })
      });
      let p2 = new Promise((resolve, reject) => {
        this.$store.dispatch('plateMap/queryTopicStockValue', {
          isContinue: this.isContinue,
          condition: this.conditionStock,
          topicCode: this.topicCode
        }).then(() => {
          resolve();
        })
      });
      Promise.all([p1, p2]).then(() => {
        this.updateMapData(this.topicStockValue);
      })
    },
    updateData: function() {
      this.getLegendColor(this.conditionTopic)
      this.$store.dispatch('plateMap/queryTopicValue', {
        isContinue: this.isContinue,
        condition: this.conditionTopic
      }).then(({
        result,
        condition
      }) => {
        // 如果条件已改变则不再执行回调方法
        if (condition !== this.conditionTopic) {
          console.info('invalide callback and do nothing');
          return;
        }
        this.updateMapData(this.topicValue)
      })
    },
    updateStockData: function() {
      this.getLegendColor(this.conditionStock)
      this.$store.dispatch('plateMap/queryTopicStockValue', {
        isContinue: this.isContinue,
        condition: this.conditionStock,
        topicCode: this.topicCode
      }).then(({
        result,
        condition
      }) => {
        // 如果条件已改变则不再执行回调方法
        if (condition !== this.conditionStock) {
          console.info('invalide callback and do nothing');
          return;
        }
        this.updateMapData(this.topicStockValue)
      })
    },
    updateMapData: function(mapData) {
      if (this.topicValue === null) {
        this.restoreMap();
        return;
      }
      this.chart.setOption({
        series: [{
          data: mapData
        }]
      })
    },
    autoUpdateData: function() {
      const _this = this
      if (this.updateDataPid) {
        clearInterval(this.updateDataPid)
      } else {
        this.updateDataPid = setInterval(function() {
          if (_this.autoUpdate) {
            //  _this.isContinue = 0;
            if (_this.mapType === 'plate') {
              _this.updateData()
            } else if (_this.mapType === 'stock') {
              _this.updateStockData()
            }
          }
        }, 1000 * _this.intervalTime)
      }
    },
    updateDatetime: function() {
      return this.$store.dispatch('stockMap/queryCurTimeItem').then(() => {
        // this.playBackDate = this.$store.state.stockMap.calendarsData
        // this.playBackDateShow = this.timeFormat(this.playBackDate)
        const playBackDatetime = this.$store.state.stockMap.curTimeItem;
        this.playBackTime = playBackDatetime.timeTag;
        this.playBackTradeDate = playBackDatetime.tradeDate;
        this.datetimeIndex = this.timeList.indexOf(this.playBackTime);
      })
    },
    initOption: function(data) {
      this.autoUpdate = true
      if (this.chart) {
        this.chart.clear();
        this.chart.dispose()
        console.log('销毁echart实例!')
      }
      this.chart = echarts.init(this.$refs.treemap)
      this.chart && this.chart.setOption({
        hoverLayerThreshold: 10000,
        progressive: 1000,
        animation: false,
        squareRatio: 0.5,
        series: [{
          name: '',
          type: 'treemap',
          visibleMin: -1,
          childrenVisibleMin: 20,
          width: '100%',
          height: '100%',
          label: {
            normal: {
              distance: 0,
              //  ellipsis: false,
              show: true,
              formatter: (params) => {
                const node = this.getNode(params)
                const nodeLayout = node.getLayout()
                let formatterText = ''
                if (nodeLayout.width > 0 && nodeLayout.height >= 0) {
                  formatterText += params.name
                }
                if (nodeLayout.width > 0 && nodeLayout.height > 0 && typeof params.data.perf !== 'undefined' && params.data.perf !== null) {
                  formatterText += '\n' + params.data.perfText
                }
                return formatterText
              },
              textStyle: {
                fontSize: 12
              }
            }
          },
          itemStyle: {
            normal: {}
          },
          breadcrumb: {
            show: false
          },
          nodeClick: false,
          roam: true,
          levels: this.getLevelOption(),
          data: data
        }]
      })
      this.chart.hideLoading()
      this.chart.on('mouseover', (params) => {
        if (params.treePathInfo.length < 2 || this.mapType === 'stock') {
          return
        }
        const x = params.event.offsetX;
        const y = params.event.offsetY;
        this.topicCode = params.data.id
        this.showHover = true
        this.$store.dispatch('plateMap/queryTopicStockValue', {
          isContinue: this.isContinue,
          condition: this.topicStockIndexs[this.topicIndexs.indexOf(this.conditionTopic)],
          topicCode: this.topicCode
        }).then(() => {
          this.hoverNodeParent = params.data
          this.conditionStock = this.topicStockIndexs[this.topicIndexs.indexOf(this.conditionTopic)]
          this.hoverNodeParent.children = this.stockListInfo // 浮窗股票列表
          this.topicStockUpNo = 0;
          this.topicStockDownNo = 0;
          this.stockListInfo.forEach((stock) => { // 龙一股
            if (stock.name === this.$store.state.plateMap.bestTopicStock.name) {
              this.hoverNode = stock
            }
            if (stock.perf && stock.perf >= 0) {
              this.topicStockUpNo++
            } else if (stock.perf && stock.perf < 0) {
              this.topicStockDownNo++
            }
          })
          const windowHeight = window.innerHeight
          const stockNum = Math.ceil((windowHeight - 17 - 82) / 30)
          if (this.stockListInfo.length > stockNum) {
            this.stockListInfo.length = stockNum
          }
        })
        if (this.focusEl) {
          const preNodeStl = this.focusEl.style;
          preNodeStl.stroke = null;
          this.focusEl.setStyle(preNodeStl);
          this.focusEl = null;
        }
        this.focusEl = this.chart._zr.findHover(x, y).target;
      })
      this.chart.on('mouseout', (params) => {
        if (params.treePathInfo.length < 2 || this.mapType === 'stock') {
          return
        } else {
          this.showHover = false
          // 解决定时刷新数据,hover状态不消失的BUG。但是zoom时仍然会存在
          const el = params.event.target
          el.__normalStl.stroke = null
          el.setStyle(el.__normalStl)
        }
      });
      this.chart._chartsViews[0]._controller.on('zoom', (delta, a, b, c, d, e) => {
        if (delta > 1) {
          this.zoomDelta++
        } else if (delta < 1) {
          this.zoomDelta--;
          if (this.zoomDelta < 0) {
            this.zoomDelta = 0
          }
        }
        if (this.zoomDelta === 0) {
          this.autoUpdate = true;
        } else {
          this.autoUpdate = false;
        }
        console.info('zoomDelta:' + this.zoomDelta);
        console.info('autoUpdate:' + this.autoUpdate);
      });
      this.chart.on('click', (params) => {
        if (params.treePathInfo.length <= 1 || this.mapType === 'stock') {
          return
        } else {
          this.mapType = 'stock'
          this.$emit('passMapType', this.mapType)
          this.$emit('passConditionStock', this.conditionTopic)
          this.showHover = false
          this.topicCode = params.data.id
          this.updateStockMap()
        }
      })
      this.chart.on('dblclick', (params) => {
        if (params.treePathInfo.length <= 1 || this.mapType === 'plate') {
          return
        } else {
          window.open('stock/' + params.data.id)
        }
      })
    },
    getLevelOption: function() {
      return [{ // 第一层外
          itemStyle: {
            normal: {
              borderColor: '#141518', // 第一层矩形间隔线颜色
              borderWidth: 0,
              color: '#141518',
              gapWidth: 0 // 第一层块间隔距离
            }
          },
          silent: true
        },
        { // 第一层
          itemStyle: {
            normal: {
              borderColor: '#141518', // 第一层背景色也就是第二层矩形间隔颜色
              color: '#141518',
              borderWidth: 1 // 第一层矩形间距
            },
            emphasis: {}
          },
          silent: true
        }
      ]
    },
    showColor: function(colorArr, valueArr, value) {
      if (value === null) {
        return colorArr.nullColor
      }
      if (value <= (valueArr[0] + valueArr[1]) / 2) {
        return colorArr[0]
      } else if (value > (valueArr[valueArr.length - 1] + valueArr[valueArr.length - 2]) / 2) {
        return colorArr[colorArr.length - 1]
      } else {
        const index = Math.round((value - valueArr[0]) / (valueArr[valueArr.length - 1] - valueArr[0]) * colorArr.length)
        return colorArr[index]
      }
    },
    getLegendColor: function(condition) {
      this.legendList = []
      this.legendWidth = 36
      for (let i = 0; i < this.rangeValues[condition].length; i++) {
        this.legendList.push({
          value: this.rangeValues[condition][i] + this.isUnit[condition],
          backgroundColor: this.showColor(this.colors[condition], this.rangeValues[condition], this.rangeValues[condition][i])
        })
      }
    },
    startPlay: function() {
      clearInterval(this.updateDataPid);
      if (!this.autoUpdate) {
        this.autoUpdate = true;
        // 回放前将图表恢复到默认（延迟500ms执行回放）
        this.restoreMap();
        setTimeout(() => {
          this.startPlay();
        }, 500);
        return;
      }
      this.updateDataPid = null
      if (this.playBackState) { // 播放中点击暂停
        this.playBackState = false
        clearInterval(pid)
        this.playBackSrc = playStopSrc
        this.isStopPlayback = true
        this.$emit('isStopPlayback', this.isStopPlayback)
      } else { // 未播放点击开始播放
        if (this.conditionTopic !== 'topic_market.tech_index') {
          this.conditionTopic = 'topic_market.tech_index'
          this.$emit('toZdfCondition', this.conditionTopic)
        }
        // this.playBackIndex = 0;
        this.playBackState = true
        this.playBackSrc = playBackSrc
        this.isStopPlayback = true
        this.$emit('isStopPlayback', this.isStopPlayback)
        // this.playBackIndex延后（回调后）自增，保证数据和进度条同步。
        this.queryPlaybackData(this.playBackIndex + 1)
      }
    },
    queryPlaybackData: function(playBackIndex) {
      const _this = this
      if (!this.playBackState) {
        return
      }

      // 回放完成
      if (playBackIndex > this.datetimeIndex) {
        this.playBackState = false
        this.playBackIndex = -1;
        this.playBackSrc = playStopSrc
        this.isStopPlayback = false
        this.$emit('isStopPlayback', this.isStopPlayback)
        // 回放完成，获取最新数据
        this.isContinue = 1
        this.updateData()
        //  this.autoUpdateData()
      } else {
        const playBackTime = this.timeList[playBackIndex]
        setTimeout(function() {
          if (!_this.playBackState) {
            return
          }
          _this.$store.dispatch('stockMap/updateDataByTime', {
            time: _this.playBackTradeDate + playBackTime
          }).then(() => {
            // 如果外部状态改变（跳出回放），则不再执行回调。
            if (!_this.playBackState && this.this.playBackIndex === -1) {
              return
            }
            _this.updateMapData()
            _this.playBackIndex++
              _this.queryPlaybackData(_this.playBackIndex + 1);
          })
        }, 250)
      }
    },
    fmtraneValue: function(arr, n) {
      var getArr = []
      for (var i in arr) {
        getArr.push(arr[i] * n)
      }
      return getArr
    },
    timeFormat: function(arr) {
      const getArr = []
      for (const i in arr) {
        const toTime = arr[i].toString()
        let m
        if (toTime.substring(4, 5) === '0') {
          m = toTime.substring(5, 6)
        } else {
          m = toTime.substring(4, 6)
        }
        getArr.push(m + '.' + toTime.substring(6))
      }
      return getArr
    },
    changeWrapHeight: function(wrapHeight) {
      this.wrapHeight = wrapHeight
      if (this.wrapHeight > 52) {
        this.move()
      }
    },
    move: function(event) {
      if (event) {
        this.clientX = event.clientX + 50
        this.clientY = event.clientY + 50
        this.offsetX = event.clientX + 50
        this.offsetY = event.clientY + 50
      }
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      if (document.getElementsByClassName('hover-wrapper').length > 0) {
        const wrapWidth = document.getElementsByClassName('hover-wrapper')[0].offsetWidth
        // const wrapHeight = document.getElementsByClassName('hover-wrapper')[0].offsetHeight
        const wrapHeight = this.wrapHeight
        if (windowWidth - this.clientX <= wrapWidth) {
          this.offsetX = this.clientX - wrapWidth - 100
        }
        if (windowHeight - 17 - this.clientY <= wrapHeight) {
          this.offsetY = windowHeight - wrapHeight - 17
        }
        if (this.offsetY < 0) {
          this.offsetY = 0
        }
      }
    },
    dateFormatUtil: function(date) {
      var dateTypeDate = ''
      dateTypeDate += date.getFullYear() // 年
      dateTypeDate += '-' + this.getMonth(date) // 月
      dateTypeDate += '-' + this.getDay(date) // 日
      return dateTypeDate
    },
    getMonth: function(date) {
      let month = ''
      month = date.getMonth() + 1 // getMonth()得到的月份是0-11
      if (month < 10) {
        month = '0' + month
      }
      return month
    },
    getDay: function(date) {
      let day = ''
      day = date.getDate()
      if (day < 10) {
        day = '0' + day
      }
      return day
    },
    switchLegend: function() {
      if (this.isLegendShow) {
        this.isLegendShow = false
      } else {
        this.isLegendShow = true
      }
    },
    switchPlayback: function() {
      if (this.isPlaybackShow) {
        this.isPlaybackShow = false
      } else {
        this.isPlaybackShow = true
      }
    },
    // 恢复图表默认大小
    restoreMap: function() {
      this.chart.resize({
        height: this.mapHeight,
        width: this.mapWidth
      })
      // this.autoUpdate = true;
    },
    // 恢复图表到最新状态
    restoreData: function() {
      // 如果处于回放过程中，停止回放
      if (this.playBackIndex > -1) {
        this.playBackState = false;
        this.playBackIndex = -1;
        this.isStopPlayback = false;
        this.playBackSrc = playStopSrc;
        this.$emit('isStopPlayback', this.isStopPlayback)
      }
      this.autoUpdate = true;
      if (this.mapType === 'stock') {
        this.mapType = 'plate'
      }
      this.updateData()
      this.autoUpdateData();
    },
    getNode: function(params) {
      const chartView = this.chart._chartsViews[0]
      const treeRoot = chartView.seriesModel._viewRoot
      return treeRoot.hostTree._nodes[params.dataIndex]
    },
    loopDateTime() {
      var _datetimeIndex = this.datetimeIndex;
      // 后台数据10分钟更新一次，前端开始5秒轮询一次（避免最坏情况），当数据发生变化后再10分钟轮询一次。
      syncDateTimePid = setInterval(() => {
        if (_datetimeIndex !== this.datetimeIndex && this.datetimeIndex !== 0) {
          clearInterval(syncDateTimePid);
          this.updateDatetime();
          syncDateTimePid = setInterval(() => {
            this.updateDatetime();
            if (this.datetimeIndex === 24) {
              clearInterval(syncDateTimePid);
            }
          }, 1000 * 60 * 10)
        } else {
          this.updateDatetime();
          if (this.datetimeIndex === 24) {
            clearInterval(syncDateTimePid);
          }
        }
      }, 1000 * 5)
    },
    // 返回板块
    plateBack: function() {
      this.mapType = 'plate'
      this.$emit('passMapType', this.mapType)
      this.$emit('passConditionTopic', this.conditionStock)
      this.updateMap()
    }
  },
  mounted() {
    this.initMap();
    this.updateDatetime().then(() => {
      this.loopDateTime();
    });
  },
  destroyed() {
    this.updateDataPid && clearInterval(this.updateDataPid);
    this.chart.dispose();
  }
}
</script>
