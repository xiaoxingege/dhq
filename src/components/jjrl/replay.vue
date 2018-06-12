<template>
<div class="container">
  <celendar></celendar>
  <div class="mainBox">
    <div class='replay'>
      <ul>
        <li v-for="(item,index ) in list" @click="addCur(index)" :class="{'cur':isCur===index}">
          <p class="title">{{item.name}} <i v-if="item.count?true:false">（{{item.count}}只）</i></p>
          <p>{{item.detail}}</p>
        </li>

      </ul>
    </div>
    <div class="detailBox">
      <component :is='comp'></component>

    </div>

  </div>


</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import resumeTrading from 'components/jjrl/resume-trading'
import notOpenStock from 'components/jjrl/notOpenStock'
export default {
  data() {
    return {
      hasCount: '',
      replayList: {
        '0': {
          components: resumeTrading
        },
        '1': {

        },
        '2': {
          components: notOpenStock
        },
        '3': {

        },
        '4': {

        }
      },
      list: [{
          name: '复牌',
          count: '',
          detail: ''
        },
        {
          name: '会议日历',
          count: '',
          detail: ''
        },
        {
          name: '未开板新股',
          count: '',
          detail: ''
        },
        {
          name: '新闻联播',
          count: '',
          detail: ''
        },
        {
          name: '今日热点股',
          count: '',
          detail: ''
        }
      ],
      curType: '0',
      isCur: 0

    }
  },
  computed: {
    ...mapState({
      setGuide: state => state.jjrl.guide
    }),
    comp: function() {
      return this.replayList[this.curType].components;
    }
  },
  methods: {
    addCur(index) {
      this.curType = index
      this.isCur = index
    }
  },
  mounted() {
    this.$store.dispatch('jjrl/setGuide').then(res => {
      this.list[0].count = this.setGuide.tfp_count
      this.list[0].detail = this.setGuide.tfp_wz
      this.list[1].count = this.setGuide.hy_count
      this.list[1].detail = this.setGuide.hy_wz
      this.list[2].count = this.setGuide.cxg_count
      this.list[2].detail = this.setGuide.cxg_wz
      this.list[3].count = null
      this.list[3].detail = this.setGuide.xwlb_wz
      this.list[4].count = null
      this.list[4].detail = this.setGuide.jrrd_wz
   
    })
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
* {
    text-align: justify;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    box-sizing: border-box;
    font-family: "Microsoft YaHei";
    font-size: $fontSizeBase;
    color: $wordsColorBase;
}
.container {
    width: 100%;
    height: 100%;

}
.replay {
    width: 13.58%;
    height: 100%;
    background-color: #191c1e;
    border-top: 1px solid $bgNavColor;
    border-right: 1px solid $bgNavColor;
}
.replay .title,
.replay .title i {
    color: $blueWordsColor;

}
.replay ul li {
    padding: 5px 0 5px 10px;
}
.replay ul li p {
    color: $grayWordsColor;
    line-height: 20px;

}
.replay ul li {
    cursor: pointer;
}
.detailBox {
    width: 86.42%;
}
.mainBox {
    display: flex;
    justify-content: space-between;
}
.cur {
    background-color: $hoverBgColor;
}
</style>