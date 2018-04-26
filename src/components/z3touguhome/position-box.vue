<template>
<div class="position-box" v-bind:class="{'position-box-null':positionList.length===0}">
  <table class="position-box-table" v-if="type === 'goldTop' && positionList.length>0">
    <tr style="color:#666;">
      <td>股票代码</td>
      <td>股票简称</td>
      <td>最新价</td>
      <td>涨跌幅</td>
    </tr>
    <tr v-for="item of positionList">
      <td style="color:#666;cursor: pointer;" @click='linkStock(item.id)'>{{formatData(item.id)?'--':item.id}}</td>
      <td style="color:#1984ea;cursor: pointer;" @click='linkStock(item.id)'>{{formatData(item.name)?'--':item.name}}</td>
      <td v-z3-updowncolor="item.percent">{{formatData(item.num)?'--':parseFloat(item.num).toFixed(2)}}</td>
      <td v-z3-updowncolor="item.percent">
        {{formatData(item.percent)?'--':parseFloat(item.percent).toFixed(2)+'%'}}
      </td>
    </tr>
  </table>
  <table class="position-box-table" v-if="type === 'filterTop' && positionList.length>0">
    <tr style="color:#666;">
      <td>股票代码</td>
      <td>股票简称</td>
      <td>最新价</td>
      <td>涨跌幅</td>
    </tr>
    <tr v-for="item of positionList">
      <td style="color:#666;cursor: pointer;" @click='linkStock(item.innerCode)'>{{formatData(item.innerCode)?'--':item.innerCode}}</td>
      <td style="color:#1984ea;cursor: pointer;" @click='linkStock(item.innerCode)'>{{formatData(item.name)?'--':item.name}}</td>
      <td v-z3-updowncolor="item.curChngPct">{{formatData(item.price)?'--':parseFloat(item.price).toFixed(2)}}</td>
      <td v-z3-updowncolor="item.curChngPct">
        {{formatData(item.curChngPct)?'--':parseFloat(item.curChngPct).toFixed(2)+'%'}}
      </td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  props: ['strategyId', 'isShow', 'type'],
  data() {
    return {
      isShow: false,
      positionList: [],
      updateDataPid: null,
      intervalTime: 6,
      pageSize: -1
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
    isShow() {
      console.info(this.isShow);
    },
    positionList() {
      if (this.positionList && this.positionList.length > 0) {
        this.$emit('isHavePosition', true)
      } else {
        this.$emit('isHavePosition', false)
      }
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
    }
  },
  methods: {
    init: function() {
      if (this.type === 'goldTop') {
        this.$store.dispatch('z3touguIndex/getPositionList', {
          strategyId: this.strategyId,
          pageSize: this.pageSize
        }).then(() => {
          this.positionList = this.positionListData
        })
      } else if (this.type === 'filterTop') {
        this.$store.dispatch('z3touguIndex/getPositionListFilter', {
          strategyId: this.strategyId,
          pageSize: this.pageSize
        }).then(() => {
          this.positionList = this.positionListFilterData
        })
      }
    },
    linkStock: function(innerCode) {
      if (innerCode) {
        window.open('/stock/' + innerCode)
      }
    },
    autoUpdate: function() {
      const _this = this
      if (this.updateDataPid) {
        clearInterval(this.updateDataPid)
      } else {
        this.updateDataPid = setInterval(function() {
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
    // this.autoUpdate()
  },
  destroyed() {
    // this.updateDataPid && clearInterval(this.updateDataPid)
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/style.scss";
.position-box {
    position: absolute;
    padding: 10px;
    border: 1px solid #eee;
    background: #fff;
    z-index: 999;
    width: 350px;
    max-height: 290px;
    overflow: auto;
    left: 55px;
    bottom: 10px;
    display: none;
}

.position-box-null {
    height: 0;
    padding: 0;
    border: 0 solid #eee;
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
</style>
