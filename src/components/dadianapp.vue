<style scoped>
@import '../assets/css/reset.css';
.tit {
  border-bottom: 1px solid green;
  font-size: 20px;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 20px;
}
.item { position: relative; margin-bottom: 60px;}
.btn{ position: absolute; left:800px; top:20px;width: 100px;
text-align: center;
font-size: 16px;
color: #3e0f11;
float: left;
background: #00e2d4;
line-height: 40px;
border-radius: 10px;
box-shadow: 0 5px 0 0 #02867d;
color:#fff;
cursor: pointer;}
.item  li{ margin-bottom: 30px;}
.item span {
  width: 100px;line-height: 26px; padding-left: 40px;
}
.item select,.item input{ width:200px; height: 26px;font-size: 18px; outline: none;}
.item .appv{width:100px;}
.item .long{ width:400px;}
.text{ width:680px; height: 150px;padding:0 10px;resize: none; outline: none; margin-left: 40px; font-size: 14px;}
</style>

<template>
<div class="dadian">
  <dadianBtn/>
  <div class="tit">查询条件</div>
  <div class="item">
    <ul>
      <li class="clearfix">
        <span class="fl">日期</span>
        <div class="fl">
          <dadianTime v-bind:starttime="beginTime" v-bind:endtime="endTime" v-on:starttimeChanged="startshowMsgFromChild"  v-on:endtimeChanged="endshowMsgFromChild"  />
        </div>
      </li>
      <li class="clearfix">
        <span class="fl">系统</span>
        <select class="fl" name="">
          <option value="">Android</option>
          <option value="">Ios</option>
        </select>
        <span class="fl">appversion</span>
        <input type="text" class="fl appv" name="" value=""> <b>请输入要正确：比如6.9.0</b>
      </li>
      <li class="clearfix">
        <span class="fl">d_name</span>
        <input type="text" class="fl" name="" value="">
        <span class="fl">devid</span>
        <input type="text" class="fl long" name="" >
      </li>
    </ul>
    <a href="javascript:;" class="btn" @click="appbtn1">检索</a>
  </div>
  <div class="tit">结果</div>
  <dadianTable v-bind:tabledata="tabledata" />
  <dadianfenye :page="currentPage" :size="pageSize" :total="total" @change="turn" />
  <JichushareToast/>
</div>
</template>

<script>
import dadianBtn from 'components/dadian-btn'
import dadianTime from 'components/dadian-time'
import dadianTable from 'components/dadian-table'
import JichushareToast from 'components/jichushare-toast'
import dadianfenye from 'components/dadianfenye'
import 'whatwg-fetch'

export default {
  components: {
    dadianBtn,
    dadianTime,
    dadianTable,
    JichushareToast,
    dadianfenye
  },
  data () {
    return {
      total: 100,
      beginTime: this.getNowFormatDate(),
      endTime: this.getNowFormatDate(),
      currentPage: 1,
      pageSize: 20,
      osType: 1,
      appVersion: '6.7.0',
      searchKey: 'click_sy_yhtx',
      devId: 'uuid-110BAE64-0F1D-43D1-A7D3-985FCD6AEBB5',
      tabledata: {
        th: ['哈哈', '呵呵', '嘎嘎', '嘻嘻', '嘿嘿', '槑', '恩', '哼'],
        td: [
            ['哈哈1', '呵呵4', '嘎嘎6', '嘻嘻', '嘿45嘿', '435槑', '恩54', '哼657'],
            ['哈哈2', '呵呵', '嘎7嘎', '嘻87嘻', '嘿45嘿', '45槑', '恩34', '756'],
            ['哈哈3', '呵呵5', '嘎8嘎', '嘻43嘻', '嘿453嘿', '槑34', '恩', '8678哼']
        ]
      }
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    pad2 (n) { return n < 10 ? '0' + n : n },
    getNowFormatDate () {
      var date = new Date()
      return date.getFullYear().toString() + '-' + this.pad2(date.getMonth() + 1) + '-' + this.pad2(date.getDate()) + ' ' + this.pad2(date.getHours()) + ':' + this.pad2(date.getMinutes()) + ':' + this.pad2(date.getSeconds())
    },
    appbtn1 () {
      var url = 'http://appcms.jrj.com.cn/admin/queryAppLog.jspa?currentPage=' + this.currentPage + '&pageSize=' + this.pageSize + '&beginTime=' + this.beginTime + '&endTime=' + this.endTime + '&osType=' + this.osType + '&appVersion=' + this.appVersion + '&searchKey=' + this.searchKey + '&devId=' + this.devId

      fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
      }).then((res) => {
        return res.json()
      }).then(v => {
        alert(v)
      }).catch(v2 => {
        alert(v2)
      })
    },
    startshowMsgFromChild (data) {
      this.beginTime = data
    },
    endshowMsgFromChild (data) {
      this.endTime = data
    }
  }
}
</script>
