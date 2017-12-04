<template>
<div class="position-box" :style="position" v-if="isShow">
  <div v-if="isNoData" class="no-data-position">
    <span>暂无数据</span>
  </div>
  <table class="position-box-table" v-if="!isNoData && type === 'goldTop'">
    <tr style="color:#666;">
      <td>股票代码</td>
      <td>股票简称</td>
      <td>最新价</td>
      <td>涨跌幅</td>
    </tr>
    <tr v-for="item of positionList">
      <td style="color:#666;">{{formatData(item.id)?'--':item.id}}</td>
      <td style="color:#1984ea;">{{formatData(item.name)?'--':item.name}}</td>
      <td v-z3-updowncolor="item.num">{{formatData(item.num)?'--':parseFloat(item.num).toFixed(2)}}</td>
      <td v-z3-updowncolor="item.percent">
        {{formatData(item.percent)?'--':parseFloat(item.percent).toFixed(2)+'%'}}
      </td>
    </tr>
  </table>
  <table class="position-box-table" v-if="!isNoData && type === 'filterTop'">
    <tr v-for="item of positionList">
      <td style="color:#666;">{{formatData(item.innerCode)?'--':item.innerCode}}</td>
      <td style="color:#1984ea;">{{formatData(item.name)?'--':item.name}}</td>
      <td v-z3-updowncolor="item.price">{{formatData(item.price)?'--':parseFloat(item.price).toFixed(2)}}</td>
      <td v-z3-updowncolor="item.curChngPct">
        {{formatData(item.curChngPct)?'--':parseFloat(item.curChngPct).toFixed(2)+'%'}}
      </td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  props: ['strategyId', 'top', 'left', 'isShow', 'type'],
  data() {
    return {
      isShow: false,
      positionList: [],
      isNoData: false,
      updateDataPid: null,
      intervalTime: 6
    }
  },
  components: {},
  watch: {
    strategyId() {
      if (!this.strategyId) {
        return
      }
      this.init()
    },
    type() {

    }
  },
  computed: {
    positionListData: function() {
      const positionList = this.$store.state.z3touguIndex.positionList
      return positionList
    },
    positionListFilterData: function() {
      const positionListFilterData = this.$store.state.z3touguIndex.positionListFilter
      return positionListFilterData
    },
    position() {
      return 'top:' + this.top + 'px;left:' + this.left + 'px'
    }
  },
  methods: {
    init: function() {
      if (this.type === 'goldTop') {
        this.$store.dispatch('z3touguIndex/getPositionList', {
          strategyId: this.strategyId
        }).then(() => {
          if (this.positionListData.length > 0) {
            this.isNoData = false
            this.positionList = this.positionListData
          } else {
            this.isNoData = true
          }
        })
      } else if (this.type === 'filterTop') {
        this.$store.dispatch('z3touguIndex/getPositionListFilter', {
          strategyId: this.strategyId
        }).then(() => {
          if (this.positionListFilterData.length > 0) {
            this.isNoData = false
            this.positionList = this.positionListFilterData
          } else {
            this.isNoData = true
          }
        })
      }
    },
    autoUpdate: function() {
      const _this = this
      if (this.updateDataPid) {
        clearInterval(this.updateDataPid)
      } else {
        this.updateDataPid = setInterval(function() {
          debugger
          _this.init()
        }, 1000 * _this.intervalTime)
      }
    },
    formatData: function(value) {
      if (value || value === 0) {
        return false
      } else {
        return true
      }
    }
  },
  mounted() {
    if (!this.strategyId) {
      return
    }
    this.init()
    this.autoUpdate()
  },
  destroyed() {
    this.updateDataPid && clearInterval(this.updateDataPid)
  }
}
</script>

<style scoped>
.position-box {
  position: absolute;
  padding: 10px;
  border: 1px solid #eee;
  background: #fff;
  z-index: 999;
  width: 350px;
  max-height: 186px;
}

.position-box-table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}

.position-box-table td {
  border-bottom: 1px solid #dedede;
  height: 24px;
  /*color: #c9d0d7;*/
}

.no-data-position {
  width: 100%;
  height: 150px;
  position: relative;
}

.no-data-position span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #808ba1;
}
</style>
