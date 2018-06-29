<template>
<div class="calendar-con">
  <span :class="{date:true,active:day === date}" v-for="day in week" @click="chooseDate(day)">{{day | date}}</span>
  <span :class="{'icon-calendar':true, open:isOpen}" @click="toggleCalendar"></span>
  <div class="datepicker" v-if="isOpen">
    <datepicker :language="locale" :value="date" :inline="true" @selected="chooseDate"></datepicker>
  </div>
</div>
</template>

<script>
import datepicker from 'vuejs-datepicker';
import {
  zh
} from 'vuejs-datepicker/dist/locale'
export default {
  data() {
    return {
      date: new Date(),
      isOpen: false,
      locale: zh
    }
  },
  components: {
    datepicker
  },
  computed: {
    week() {
      let dayList = [];
      let day = this.date.getDay();
      if (day === 6) {
        day = -1;
      }
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
    chooseDate(date) {
      if (date === this.date) {
        return;
      }
      this.date = date;
      this.isOpen = false;
      this.$emit('dateChange', this.date);
    },
    toggleCalendar() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style.scss";
.calendar-con {
    position: fixed;
    height: 30px;
    color: $wordsColorBase;
    font-size: 13px;
    background-color: $bgDeepColor;
    z-index: 99;
    .date {
        display: inline-block;
        width: 132px;
        text-align: center;
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
        float: right;
        display: inline-block;
        height: 20px;
        width: 20px;
        margin: 4px 5px;
        background: url('../../assets/images/z3img/calendar.png') center center no-repeat;
    }
    .icon-calendar:hover {
        background: url('../../assets/images/z3img/calendar-hover.png') center center no-repeat;
    }
    .icon-calendar.open {
        background: url('../../assets/images/z3img/calendar-hover.png') center center no-repeat;
    }
    .datepicker {
        position: absolute;
        top: 31px;
        right: 5px;
        width: 300px;
        color: #333;
        z-index:99;
    }
}
</style>