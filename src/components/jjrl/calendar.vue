<template>
<div class="calendar-con">
  <span :class="{date:true,active:day === date}" v-for="day in week" @click="chooseDate">{{day | date}}</span>
  <span class="icon-calendar">Choose</span>
  <div v-if="isOpen"></div>
</div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      isOpen: false
    }
  },
  computed: {
    week() {
      let dayList = [];
      const day = this.date.getDay();
      dayList.push(this.date);
      for (let i = day - 1; i >= -1; i--) {
        dayList.unshift(new Date(this.date.getTime() - (day - i) * 24 * 60 * 60 * 1000));
      }
      for (let i = day + 1; i <= 5; i++) {
        dayList.push(new Date(this.date.getTime() + (i - day) * 24 * 60 * 60 * 1000))
      }
      return dayList
    }
  },
  filters: {
    date: function(dateObj) {
      const arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      const year = dateObj.getFullYear();
      const month = dateObj.getMonth() + 1;
      const date = dateObj.getDate();
      const day = dateObj.getDay();
      return year + '-' + month + '-' + date + ' ' + arr[day];
    }
  },
  methods: {
    chooseDate() {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style.scss";
.calendar-con {
    height: 30px;
    color: $wordsColorBase;
    font-size: 13px;
    .date {
        display: inline-block;
        height: 24px;
        line-height: 24px;
        margin: 2px 5px;
        padding: 2px 5px;
        cursor: pointer;
    }
    .active {
        background: #31363C;
        border-radius: 4px;
    }
    .icon-calendar {
        }
}
</style>