<template>
<div class="abn-text" v-if='model'>
  <span class="time">{{model.tradeTime | hhmm}}</span>
  <span>{{model.sectionName}}板块{{model.tradeTime | timeDesc}}{{model.riseSpeed | abnDesc}}，{{stockDesc}}。{{model.moveRelaNewsId?'消息面，' + model.title + '。':''}}</span>
</div>
</template>

<script>
export default {
  props: ['model'],
  data() {
    return {

    }
  },
  computed: {
    stockDesc: function() {
      const riseSpeed = this.model.riseSpeed;
      const limitCount = this.model.limitUpDownCount;
      const stockList = this.model.stockDataList;
      let desc = '';
      let mark = riseSpeed > 0 ? ['涨停', '纷纷拉升', '大涨'] : ['跌停', '跟跌', '大跌'];
      if (limitCount > 3) {
        desc += stockList[0] && (stockList[0].isLimitUp || stockList[0].isLimitDown) ? stockList[0].stockName : '';
        desc += stockList[1] && (stockList[1].isLimitUp || stockList[1].isLimitDown) ? '、' + stockList[1].stockName : '';
        desc += stockList[2] && (stockList[2].isLimitUp || stockList[2].isLimitDown) ? '、' + stockList[2].stockName : '';
        desc += `等${limitCount}只个股${mark[0]}`
      } else if (limitCount === 3) {
        desc += stockList[0] && (stockList[0].isLimitUp || stockList[0].isLimitDown) ? stockList[0].stockName : '';
        desc += stockList[1] && (stockList[1].isLimitUp || stockList[1].isLimitDown) ? '、' + stockList[1].stockName : '';
        desc += stockList[2] && (stockList[2].isLimitUp || stockList[2].isLimitDown) ? '、' + stockList[2].stockName : '';
        desc += mark[0]
      } else if (limitCount === 0) {
        desc += stockList[0] ? stockList[0].stockName + mark[2] + stockList[0].stockChngPct + '%' : '';
        desc += stockList[1] ? '，' + stockList[1].stockName : '';
        desc += stockList[2] ? '、' + stockList[2].stockName : '';
        desc += mark[1];
      } else if (riseSpeed > 0 && limitCount < 3) {
        desc += stockList[0] && (stockList[0].isLimitUp || stockList[0].isLimitDown) ? stockList[0].stockName : '';
        desc += stockList[1] && (stockList[1].isLimitUp || stockList[1].isLimitDown) ? '、' + stockList[1].stockName + mark[0] : mark[0] + '，' + stockList[1].stockName + mark[2] + stockList[1].stockChngPct + '%';
        desc += stockList[1] && (stockList[1].isLimitUp || stockList[1].isLimitDown) ? stockList[2].stockName + mark[2] + stockList[2].stockChngPct + '%' : '';
      } else {
        desc = '';
      }
      return desc;
    }
  },
  filters: {
    hhmm(value) {
      value += '';
      if (value.length === 5) {
        value = '0' + value;
      }
      return value.substring(0, 2) + ':' + value.substring(2, 4)
    },
    timeDesc(value) {
      value = value.toString();
      if (value.length === 5) {
        value = '0' + value;
      }
      const hours = parseInt(value.substring(0, 2));
      const minutes = parseInt(value.substring(2, 4));
      if (hours === 9 && minutes >= 30 && minutes <= 40) {
        return '开盘';
      } else if (hours === 11 && minutes >= 20 && minutes <= 30) {
        return '午前';
      } else if (hours === 13 && minutes >= 0 && minutes <= 10) {
        return '午后'
      } else if (hours === 14 && minutes >= 50 || hours >= 15) {
        return '尾盘'
      } else {
        return ''
      }
    },
    abnDesc(value) {
      if (value > 0.03) {
        return '大幅拉升'
      } else if (value > 0 && value <= 0.03) {
        return '拉升'
      } else if (value < 0 && value >= -0.03) {
        return '回落'
      } else if (value < -0.03) {
        return '大幅回落'
      } else {
        return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.abn-text {
    padding: 2px 4px 2px 50px;
    position: relative;
    .time {
        position: absolute;
        left: 0;
        width: 48px;
        display: inline-block;
        text-align: center;
    }
}
</style>