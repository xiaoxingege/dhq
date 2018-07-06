<template>
<div class="calendar-con">
  <span class="icon-calendar" @click="toggleCalendar"></span>
  <div class="datepicker" v-if="isOpen">
    <date-picker :language="locale" :value="date" :inline="true" @selected="chooseDate" :option="option" :limit="limit"></date-picker>
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
      option: {
        buttons: {
          ok: 'Ok',
          cancel: 'Cancel'
        },
        type: 'day',
        week: [],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD'
      },
      limit: {
        type: 'fromto',
        from: '2016-01-01'
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