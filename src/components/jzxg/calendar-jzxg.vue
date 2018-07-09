<template>
<div class="calendar-con">
  <span class="icon-calendar" @click="toggleCalendar"></span>
  <div class="datepicker" v-if="isOpen">
    <date-picker :language="locale" :value="date" :inline="true" @selected="chooseDate" :disabledDates="disabledDates"></date-picker>
  </div>
</div>
</template>

<script>
import myDatepicker from 'vuejs-datepicker';
import {
  zh
} from 'vuejs-datepicker/dist/locale'
export default {
  data() {
    return {
      date: new Date(),
      isOpen: false,
      locale: zh,
      disabledDates: {
        to: new Date(2016, 0, 1),
        from: new Date()
      }
    }
  },
  components: {
    'date-picker': myDatepicker
  },
  computed: {

  },
  methods: {
    chooseDate(date) {
      if (date === this.date) {
        return;
      }
      this.date = date;
      this.isOpen = false;
      this.$emit('dateChange', this.crtTimeFtt(this.date));
    },
    toggleCalendar() {
      this.isOpen = !this.isOpen;
    },
    crtTimeFtt(date) {
      if (date != null) {
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style.scss";
.calendar-con {
    position: relative;
    width: 20px;
    height: 20px;
    color: $wordsColorBase;
    font-size: 12px;
    z-index: 99;
    .icon-calendar {
        float: right;
        display: inline-block;
        height: 20px;
        width: 20px;
        background: url('../../assets/images/jzxg/calendar.png') center center no-repeat;
    }
    .datepicker {
        position: absolute;
        top: 20px;
        left: -132px;
        width: 279px;
        height: 200px;
        color: #333;
        z-index: 999;
    }
}
</style>