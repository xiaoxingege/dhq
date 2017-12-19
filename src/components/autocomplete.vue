<style lang="scss" scoped>
@import '../assets/css/base.css';
* {
    text-align: justify;
    box-sizing: border-box;
    font-family: "Microsoft YaHei";
}
body {
    font-size: 12px;
    background: #141518;
}
h3 {
    font-weight: 400;
}
em,
i {
    font-style: normal;
}
.fr {
    float: right;
}
.fl {
    float: left;
}
.blue {
    color: #1984ea;
}
.red {
    color: #ca4941;
}
.green {
    color: #56a870;
}

.lightcolor {
    color: #c9d0d7;
}

.gray {
    color: #808ba1;
}
.fr {
    float: right;
}
.fl {
    float: left;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
    color: #808ba1;
}
input:-moz-placeholder,
textarea:-moz-placeholder {
    color: #808ba1;
}
input::-moz-placeholder,
textarea::-moz-placeholder {
    color: #808ba1;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
    color: #808ba1;
}
.time-kline-wrap {
    background: #141518;
    color: #c9d0d7;
    width: 100%;
    font-size: 12px;
}
/*  .kline-main{
       padding: 0 10px 0;
    } */

.time-inp-box {

    /* padding: 14px 10px 14px 11px; */
    /* padding: 48px 20px 30px 20px; */
    /* padding-top: 47px; */
    padding: 47px 0 0 20px;
    position: relative;

}
.time-inp {
    padding-left: 8px;
    height: 25px;
    line-height: 25px;
    /* border: 1px solid #2388da;
        border-radius: 3px; */
    width: 256px;
    font-size: 12px;
    background: #30353b;
    border: none;
    outline: none;
}
.ana-btn {
    width: 56px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    display: inline-block;
    background: #1984ea;
    color: #c9d0d7;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    font-size: 12px;
    margin-left: 10px;
}
.label-txt {
    /* padding-right: 50px; */
    /* padding-left: 27px; */
    padding-left: 12px;
}
.k-line-box {
    /* padding: 11px 7px 20px 6px; */
    /* padding-bottom: 20px; */
    position: relative;

}
.kcharts {
    /* height: 360px; */
    /* height: 398px; */
    height: 417px;
}
.ma-box {
    position: absolute;
    top: 10%;
    left: 3%;
    width: 50%;
}

.mawidth {
    width: 6%;
    display: inline-block;
}
.search-ul {
    /* width: 206px; */
    /* width: 208px; */
    /* width: 204px; */

    width: 256px;
    /* top: 82%; */
    /* top: 104%; */
    top: 101%;
    left: 194px;
    position: absolute;
    /* left: 14.7%; */
    /* left: 276px; */
    /* left: 50%;
        margin-left: -26.7%; */
    /* top: 77%; */
    z-index: 99999;
    color: #666666;
    font-size: 12px;
    background: #cccfd9;
    /* border-radius: 3px; */
}
.search-ul li {
    /* line-height: 30px; */
    line-height: 20px;
    padding: 0 10px;
    /* border-bottom: 1px solid #262931; */
    /* border-bottom: 1px solid #e5e5e5; */
    /* border-bottom: 1px solid #808ba1; */
    cursor: pointer;
}

.search-ul li.active {
    background: #1984ea;
    color: #c9d0d7;
}
.search-ul li span:first-child {
    margin-right: 10px;
}
.desc-title {
    padding-bottom: 23px;
    font-size: 14px;
}
</style>
<template>
<div class="time-kline-wrap">
  <div class="time-inp-box">
    <div class="desc-title">机会分析</div>
    <input type="text" name="inp" placeholder="请输入一只股票代码/简称" class="time-inp lightcolor" @input="search($event)" ref="keyword" autocomplete="off" v-model="message" @keydown="keyEnter($event)" v-if="isShowInput">
    <ul class="search-ul" id="search-ul" v-if="data">
      <li v-for="(list,key,index) of data"><span>{{list}}a</span><span>{{key}}b</span><span>{{index}}</span></li>
    </ul>
    <!-- <ul class="search-ul" id="search-ul" v-if="data && data.length > 0 && message!=''">
      <li v-for="list of data" @click="focusStock($event)"><span>{{list.stockUrl.substring(7,16) }}</span><span>{{list.stockName}}</span></li>
    </ul> -->
    <!-- <ul class="search-ul" v-else>
                  <li>暂无数据</li>
                  
               </ul> -->
  </div>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
export default {
  data() {
    return {
      message: '',
      showSearchList: true,
      selectInnerCode: '',
      innerCode: '',
      searchList: [],
      current: 0,
      fullHeight1: document.documentElement.clientHeight - 562,
      stockList: [],
      isShowInput: true
    }
  },
  props: {
    strategyId: {
      type: String
    },
    innerCode: {
      type: String
    },
    chartWidth: {
      type: Number,
      default: 300
    },
    chartHeight: {
      type: Number,
      default: 200
    },
    url: {},
    data: {}
  },
  watch: {
    selectInnerCode() {
      if (this.selectInnerCode === 'please-input') {
        this.isShowInput = true
        this.message = ''
      } else {
        this.isShowInput = false
        this.searchData.searchList = []
        this.innerCode = this.selectInnerCode
        this.init()
      }
    }
  },
  computed: mapState({
    // searchList: state => state.backtestDetail.searchList,
    timeStrategy: state => state.backtestDetail.timeStrategy,
    /* searchData: state => {
      const listData = state.backtestDetail.searchList
      return {
        searchList: listData

      }
    }, */
    stockListData: state => {
      const stockList = state.backtestDetail.stockList
      return stockList
    }
  }),
  components: {

  },
  methods: {
    init() {

    },
    search(e) {
      e.preventDefault()
      const keyword = this.$refs.keyword.value
      this.message = keyword
      this.$store.dispatch('backtestDetail/querySearch', {
        keyword
      })

      this.$emit('changeSelectValue', this.message)
      if (this.data.length > 0) {
        var ul = document.getElementById('search-ul')
        var lis = ul.getElementsByTagName('li')
        lis[0].className = 'active'
      }
      if (this.message === '') {
        // this.showMa = false
      } else {
        this.istyle = true
        // console.log(this.data.length)
        this.init()
      }
      /* if (this.message !== ''){
         this.innerCode = this.message
         this.init()
       }*/
    },
    focusStock(e) {
      const focusStockId = e.currentTarget.children[0].innerText
      this.$emit('focusStockId', focusStockId)
      this.message = focusStockId
      this.showSearchList = false
      this.searchData.searchList = []
      this.innerCode = this.message
      this.init()
    },
    submitSearch(e) {
      e.preventDefault()
      this.innerCode = this.message
      this.init()
    },
    keyEnter(e) {
      switch (e.keyCode) {
        case 38:
          this.current--
            console.log(this.current)
          this.addActive()
          break
        case 40:
          this.current++
            console.log(this.current)
          this.addActive()
          break
        case 13:
          var ul = document.getElementById('search-ul')
          var lis = ul.getElementsByTagName('li')
          if (this.current !== -1) {
            console.log(lis[this.current].getElementsByTagName('span')[0].innerText)
            this.message = lis[this.current].getElementsByTagName('span')[0].innerText
            this.searchData.searchList = []
            this.innerCode = this.message
            this.init()
          }
          break
        default:
          break
      }
    },
    addActive() {
      var ul = document.getElementById('search-ul')
      var lis = ul.getElementsByTagName('li')
      /* } else {
         var ul = document.getElementById('search-ul')
         var lis = ul.getElementsByTagName('li')
       }*/
      // console.log(lis.length)
      for (var i = 0; i < lis.length; i++) {
        lis[i].className = ''
      }
      if (this.current < 0) {
        this.current = lis.length - 1
      }
      if (this.current === lis.length) {
        this.current = 0
      }
      lis[this.current].className = 'active'
    },
    changePer(num) {
      return (Number(num) * 100).toFixed(2) + '%'
    },
    changeDate(time) {
      return (time + '').substring(0, 4) + '-' + (time + '').substring(4, 6) + '-' + (time + '').substring(6, (time + '').length)
    }
    /* initStockList() {
      this.$store.dispatch('backtestDetail/queryStockList', {
          strategyId: this.strategyId
        })
        .then(() => {
          this.stockList = this.stockListData
          this.selectInnerCode = this.stockList[0].innerCode
          this.innerCode = this.selectInnerCode
          this.init()
        })
    } */
  },
  mounted() {
    // this.init()
    console.log(this.data)

  }

}
</script>
