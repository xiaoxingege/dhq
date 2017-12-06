<style scoped="">
.gold-strategy-title {
  height: 17%;
  position: relative;
  border-bottom: 1px solid #23272c;
}

.gold-strategy-title select {
  display: inline-block;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 25px;
  color: #1984ea;
  -webkit-appearance: none;
  padding-left: 4px;
  background: url("../../assets/images/selectindex.png") no-repeat scroll 181px center transparent;
  background-color: #0d0e0f;
  border-radius: 3px;
  border: 1px solid #141518;
  position: absolute;
  left: 63px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.gold-strategy-title select option {
  display: inline-block;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.gold-strategy-label {
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: #c9d0d7;
}

.gold-strategy-title select option {
  color: #666;
  background-color: #d6d6d6;
}

.gold-strategy-title select:focus {
  outline: none;
}
</style>
<template>
<div class="gold-strategy-title">
  <span class="gold-strategy-label">{{strategyLabel}}：</span>
  <select v-model="id">
            <option v-for="item of dataList" :value='item.id'>{{cutStr(item.name,30)}}</option>
        </select>
</div>
</template>
<script type="text/javascript">
import {
  cutString
} from 'utils/date'
export default {
  props: ['dataList', 'strategyLabel'],
  data() {
    return {
      id: '',
      strategyName: ''
    }
  },
  watch: {
    dataList() {
      this.initNav()
    },
    id() {
      this.$emit('strategyId', this.id)
    }
  },
  computed: {

  },
  methods: {
    initNav: function() {
      if (this.dataList.length > 0) {
        this.id = this.dataList[0].id
      }
    },
    cutStr: function(str, len) {
      return cutString(str, len)
    }
  },
  mounted() {
    this.initNav()
  }
}
</script>
