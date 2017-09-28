<style lang="scss" scoped="">
.sectors-con {
    width: 100%;
}
.sectors-con-top {
    height: 11.5%;
}
.sectors-table-wrap {
    height: 88.5%;
}
.sectors-table {
    float: left;
    width: 50%;
    height: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
.sectors-table tr td:first-child {
    cursor: pointer;
}
.sectors-table tr td:first-child:hover {
    background-color: #2e4465;
}
.sectors-table td {
    border: 1px solid #23272c;
    text-align: right;
    padding-right: 20px;
}
.sectors-table:nth-child(1) td {
    color: #ca4941;
}
.sectors-table:nth-child(2) td {
    color: #56a870;
}
.sectors-table tr:nth-child(1) td {
    border-top-width: 0;
}
.sectors-table tr:last-child td {
    border-bottom-width: 0;
}
.sectors-table tr td:last-child {
    border-right-width: 0;
}
.sectors-table:nth-child(1) tr td:first-child {
    border-left-width: 0;
}
.sectors-table tr td:first-child {
    text-align: center;
    color: #c9d0d7;
    padding-right: 0;
}
</style>
<template>
<div class="sectors-con">
  <div class="sectors-con-top">
    <NavBar :data="navText" :type="type" v-on:changeType="changeNavType"></NavBar>
  </div>
  <div class="sectors-table-wrap clearfix">
    <table class="sectors-table">
      <tr v-for="(value,key) of rankUp">
        <td>{{key === null?'--':key}}</td>
        <td>{{value === null?'--':parseFloat(value.split(',')[1]).toFixed(2)}}</td>
        <td>{{value === null?'--':parseFloat(value.split(',')[2]).toFixed(2)+'%'}}</td>
      </tr>
    </table>
    <table class="sectors-table">
      <tr v-for="(value,key) of rankDown">
        <td>{{key === null?'--':key}}</td>
        <td>{{value === null?'--':parseFloat(value.split(',')[1]).toFixed(2)}}</td>
        <td>{{value === null?'--':parseFloat(value.split(',')[2]).toFixed(2)+'%'}}</td>
      </tr>
    </table>
  </div>
</div>
</template>
<script>
import NavBar from 'components/z3touguhome/nav-bar'
import DataTable from 'components/z3touguhome/data-table'
export default {
  props: ['strategyId'],
  data() {
    return {
      navText: [
        ['上证A股', 'shangzheng'],
        ['深证A股', 'shenzheng'],
        ['中小板', 'zhongxiao'],
        ['创业板', 'chuangye']
      ],
      // type: this.showType === undefined ? 'syqxt' : this.showType
      type: 'shangzheng',
      page: 0,
      size: 10,
      rankUp: {},
      rankDown: {},
      updateDataPid: null,
      intervalTime: 6
    }
  },
  watch: {
    type() {
      this.initSectors() // 点击板块标签初始化表格数据
    }
  },
  components: {
    NavBar,
    DataTable
  },
  computed: {
    shangZRankData: function() {
      const shangZRankData = this.$store.state.z3touguIndex.shangZRank // 上证A股
      return shangZRankData
    },
    shenZRankData: function() {
      const shenZRankData = this.$store.state.z3touguIndex.shenZRank // 深证A股
      return shenZRankData
    },
    zXBRankData: function() {
      const zXBRankData = this.$store.state.z3touguIndex.zXBRank // 中小板
      return zXBRankData
    },
    cYBRankData: function() {
      const cYBRankData = this.$store.state.z3touguIndex.cYBRank // 创业板
      return cYBRankData
    }
  },
  methods: {
    changeNavType(data) {
      this.type = data
    },
    initSectors(date) {
      this.$store.dispatch('z3touguIndex/getSectorsData', {
          size: this.size
        })
        .then(() => {
          if (this.type === 'shangzheng') {
            this.rankUp = this.shangZRankData['1']
            this.rankDown = this.shangZRankData['-1']
          } else if (this.type === 'shenzheng') {
            this.rankUp = this.shenZRankData['1']
            this.rankDown = this.shenZRankData['-1']
          } else if (this.type === 'zhongxiao') {
            this.rankUp = this.zXBRankData['1']
            this.rankDown = this.zXBRankData['-1']
          } else if (this.type === 'chuangye') {
            this.rankUp = this.cYBRankData['1']
            this.rankDown = this.cYBRankData['-1']
          }
        })
    },
    autoUpdate: function() {
      const _this = this
      if (this.updateDataPid) {
        clearInterval(this.updateDataPid)
      } else {
        this.updateDataPid = setInterval(function() {
          _this.initSectors()
        }, 1000 * _this.intervalTime)
      }
    }
  },
  mounted() {
    this.initSectors()
    this.autoUpdate()
  }
}
</script>
