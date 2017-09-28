<style lang="scss" scoped="">
.table-wrap {
    width: 100%;
    height: 100%;
}
.data-table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
.data-table td {
    border: 1px solid #404852;
    color: #ca4941;
    text-align: right;
    padding-right: 20px;
}
.data-table tr:nth-child(1) td {
    border-top-width: 0;
}
.data-table tr:last-child td {
    border-bottom-width: 0;
}
.data-table tr td:last-child {
    border-right-width: 0;
}
.data-table tr td:first-child {
    text-align: center;
    color: #c9d0d7;
    padding-right: 0;
}
.no-data {
    width: 100%;
    height: 100%;
    position: relative;
}
.no-data span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #808ba1;
}
</style>
<template>
<div class="table-wrap">
  <div v-if="isNoData" class="no-data">
    <span>暂无数据</span>
  </div>
  <table v-if="!isNoData" class="data-table">
    <tr v-for="item of dataList">
      <td>{{item.name}}</td>
      <td>{{item.px === null?'--':item.px}}</td>
      <td>{{formatData(item.chgPct)}}</td>
    </tr>
  </table>
</div>
</template>
<script>
export default {
  props: ['dataList'],
  data () {
    return {
      isNoData: false
    }
  },
  watch: {
    dataList () {
      console.log(this.dataList)
      if (this.dataList.length > 0) {
        this.isNoData = false
      } else {
        this.isNoData = true
      }
    }
  },
  components: {

  },
  methods: {
    formatData: function (val) {
      let getVal
      if (val) {
        getVal = (100 * val).toFixed(2) + '%'
      } else {
        getVal = '--'
      }
      return getVal
    }
  },
  mounted () {
    console.log(this.dataList)
  }
}
</script>
