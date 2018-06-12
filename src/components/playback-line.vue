<template>
<div class="playback_con">
  <div class="playback_btn perday" v-if="!isFullScreen || isplaybackShow"><img :src="playbackSrc" alt="" v-on:click="togglePlay()" ref="playBtn"></div>
  <div class="play_line" ref="playLine" :style="{left:playbackLineIndex*35+playLineLeft+'px'}" v-if="!isFullScreen || isplaybackShow"></div>
  <!--div v-for="date of playbackDateShow" class="perday" v-if="!isEnlarge || isplaybackShow">{{date}}</div-->
  <div v-for="(time,index) of timeList.slice(1)" :class="datetimeIndex<=index?'perday disable_time':'perday'" @click="index < datetimeIndex && status!==1 && jumpToPlay(index+1)" v-if="!isFullScreen || isplaybackShow">{{Number(time.substring(0,2))+":"+time.substring(2)}}</div>
  <img src="../assets/images/stock-map/you.png" alt="" class="legend-switch" v-if="isFullScreen && !isplaybackShow" v-on:click="switchplayback">
  <img src="../assets/images/stock-map/zuo.png" alt="" class="legend-switch" v-if="isFullScreen && isplaybackShow" v-on:click="switchplayback">
</div>
</template>

<script>
import playbackSrc from '../assets/images/stock-map/playback.png'
import playstopSrc from '../assets/images/stock-map/playstop.png'

let syncDateTimePid = null;
export default {
  props: {
    status: {
      type: Number,
      default: 0 // 0:未开始或结束，1：开始，2：暂停
    },
    isFullScreen: {
      type: Boolean,
      default: false
    },
    time: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      timeList: ['0930', '0940', '0950', '1000', '1010', '1020', '1030', '1040', '1050', '1100', '1110', '1120', '1130', '1310', '1320', '1330', '1340', '1350', '1400', '1410', '1420', '1430', '1440', '1450', '1500'],
      playbackIndex: -1, // 回放index;当为-1时表示不在回放过程中。

      isStopplayback: false,
      playbackTradeDate: '',
      playbackTime: '',
      datetimeIndex: 0,
      isplaybackShow: true
    }
  },
  computed: {
    playbackLineIndex: function() {
      // 如果未开始回放，则初始化为当前的时间。回访中则取回放index
      return this.status === 0 ? this.datetimeIndex : this.playbackIndex
    },
    playbackSrc: function() {
      return this.status === 1 ? playbackSrc : playstopSrc
    },
    playLineLeft: function() {
      return this.isFullScreen ? 25.5 : 17.5
    }
  },
  methods: {
    updateDatetime: function() {
      return this.$store.dispatch('stockMap/queryCurTimeItem').then(() => {
        const playbackDatetime = this.$store.state.stockMap.curTimeItem;
        this.playbackTime = playbackDatetime.timeTag;
        this.playbackTradeDate = playbackDatetime.tradeDate;
        this.datetimeIndex = this.timeList.indexOf(this.playbackTime);
      })
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
    switchplayback: function() {
      if (this.isplaybackShow) {
        this.isplaybackShow = false
      } else {
        this.isplaybackShow = true
      }
    },
    togglePlay() {
      if (this.status === 1) {
        this.pausePlay();
        return;
      } else {
        // 未开始/已停止/暂停
        this.beforePlay();
      }
    },
    beforePlay() {
      this.$emit('startPlay');
    },
    play() {
      if (this.playbackIndex + 1 <= this.datetimeIndex) {
        this.goPlay(this.playbackIndex + 1);
        if (this.playbackIndex + 1 < this.datetimeIndex && this.status === 1) {
          setTimeout(() => {
            this.play();
          }, 800);
        }
      }
    },
    pausePlay() {
      this.$emit('pausePlay');
    },
    stopPlay() {
      // 回放结束，重置playbackIndex
      this.playbackIndex = -1;
      this.$emit('stopPlay');
    },
    jumpToPlay(index) {
      // 点击进度，当做暂停逻辑处理
      this.goPlay(index);
      this.$emit('pausePlay');
    },
    goPlay(index) {
      const datetime = this.timeList[index];
      this.$emit('goPlay', this.playbackTradeDate, datetime);
    }
  },
  watch: {
    time() {
      // 等数据返回再修改回放进度指示标志
      let index = this.timeList.indexOf(this.time);
      this.playbackIndex = index;
      if (this.status === 1) {
        if (this.playbackIndex === this.datetimeIndex) {
          this.stopPlay();
        }
      }
    },
    status() {
      if (this.status === 1) {
        // 如果playbackIndex为最后一个，则重新开始回放
        if (this.playbackIndex === this.datetimeIndex) {
          this.playbackIndex = -1;
        }
        this.play();
      } else if (this.status === 0) {
        this.playbackIndex = -1;
      }
    }
  },
  mounted() {
    this.updateDatetime().then(() => {
      this.loopDateTime();
    });
  },
  destroyed() {
    if (syncDateTimePid) {
      clearInterval(syncDateTimePid);
    }
  }
}
</script>

<style lang="scss" scoped>
.playback_con {
    overflow: hidden;
}
.perday {
    width: 35px;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
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
    cursor: default;
}

.playback_btn {
    margin-left: 0;
    margin-right: 0;
    width: 20px;
    cursor: pointer;
    line-height: 25px;
}

.playback_btn img {
    vertical-align: baseline;
}
.chart_bottom_enlarge .play_line {
    top: 8px;
}
.play_line {
    width: 2px;
    height: 20px;
    background: #e34842;
    position: absolute;
    top: 0;
    left: 786px;
}
.legend-switch {
    margin-right: 5px;
    float: left;
    width: 16px;
    margin-top: 4px;
    cursor: pointer;
}
</style>