<template>
<div class="content">
  <div class="chart">
    <trendChart></trendChart>

  </div>
  <div class="newsDetail">
    <div class="tab">
      <span class="noticeAll" v-for="(item,index) in navText" @click="changeNotice(index)" :class="{'cur':isCur===index}" :style="index===0?fiveNotice:newNotice">{{item}}</span>
    </div>
    <div class="fiveNotice_detail">
      <div class="notice" v-for="item in stopStock" v-show="show">
        <span>{{item.TITLE}}</span>
        <span class="date">{{setDate(item.PUBDATE)}}</span>
      </div>
      <div class="notice" v-for="item in newNews" v-show="hide">
        <span>{{item.title}}</span>
        <span class="date">{{timestampToTime(item.contentdate)}}</span>
      </div>


    </div>
  </div>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import trendChart from 'components/jjrl/trend-chart'
export default {
  components: {
    trendChart
  },
  data() {
    return {
      navText: ['停牌前五天公告', '最新资讯'],
      isCur: 0,
      fiveNotice: {
        padding: '5px 10px',
        marginRight: '5px'
      },
      newNotice: {
        padding: '5px 25px'
      },
      stopdate: '',
      stopCode: '',
      show: true,
      hide: false,
      dataShow: false
    }
  },
  computed: {
    ...mapState({
      setStock: state => state.jjrl.setStock,
      getStock: state => state.jjrl.getStock,
      storeData: state => state.jjrl.dateAndCode,
      stopStock: state => state.jjrl.stopStock,
      newNews: state => state.jjrl.newNews
    })
  },
  methods: {
    changeNotice(index) {
      this.isCur = index
      if (index === 0) {
        this.show = true
        this.hide = false
        console.log(123)
        this.$store.dispatch('jjrl/stopStock', {
          stockCode: this.storeData.stockCode,
          date: this.storeData.stopdate
        }).then(res => {
          this.list = this.stopStock
        })
      } else {
        this.show = false
        this.hide = true
        console.log(456)
        this.$store.dispatch('jjrl/newNews', {
          stockCode: this.storeData.stockCode
        }).then(res => {
          this.list = this.newNews
          console.log(this.newNews)
        })
      }

    },
    setDate(date) {
      var d, Y, M, D
      d = new Date(date)
      Y = d.getFullYear()
      M = d.getMonth() + 1
      D = d.getDate()
      if (M < 10) {
        M = '0' + M;
      }
      if (D < 10) {
        D = '0' + D;
      }
      return Y + '.' + M + '.' + D
    },
    timestampToTime: function(timestamp) {
      var date, Y, M, D
      date = new Date(timestamp); // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
      Y = date.getFullYear() + '.';
      M = date.getMonth() + 1 + '.';
      D = date.getDate();
      if (M < 10) {
        M = '0' + M;
      }
      if (D < 10) {
        D = '0' + D;
      }
      return Y + M + D;
    }
  },
  mounted() {

  }
}
</script>

<style lang='scss' scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";

.fl {
    float: left;
}
.fr {
    float: right;
}

.date {
    margin-right: 63px;
}
.content {
    box-sizing: border-box;
    padding: 10px 30px 15px;

}
.noticeAll {
    background-color: $lineAndTitleColor;
    cursor: pointer;
    border-radius: 2px;
    box-sizing: border-box;
}

.newNotice {
    padding: 5px 25px;
}

.tab {
    height: 21px;
    margin-bottom: 23px;
    border-bottom: 1px solid $bgNavColor;
}
.fiveNotice_detail p,
.newNews_detail p {
    width: 100%;
    line-height: 26px;
}
.notice {
    display: flex;
    justify-content: space-between;
}
.cur {
    background-color: $hoverBgColor;
}
.chart {
    height: 56%;
}
.notice {
    height: 25px;
    cursor: pointer;
}
</style>