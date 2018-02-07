<style scoped>
@import '../assets/css/reset.css';
body {
  background: #e4e4e4;
  width: 1920px;
}

#set {
  width: 100%;
  height: 1440px;
  background: #e4e4e4;
}

.setUp {
  width: 100%;
  background: #fff;
}

form {
  width: 1286px;
  margin: 0 auto;
  box-sizing: border-box;
  background: #fff;
  padding: 40px
}

.setUp ul>li {
  font-size: 24px;
  font-weight: bolder;
  color: #333;
  float: left;
}

.setUp ul>li:first-child+li,
.setUp ul>li:first-child+li+li,
.setUp ul>li:first-child+li+li+li+li,
.setUp ul>li:first-child+li+li+li+li+li {
  margin-left: 50px;
}

.setUp ul>li:first-child+li+li+li,
.setUp ul>li:first-child+li+li+li+li {
  margin-top: 24px;
}

.setUp ul>li:first-child+li+li+li+li+li {
  margin-top: 24px;
}









/* .setUp ul>li:first-child +li +li +li +li +li{width: 220px;height: 50px;border-radius: 5px;border:1px solid #e03b3a;background: #f9574d;color: #fff;line-height: 50px;text-align: center;font-size: 20px;font-weight: normal;margin-top: 20px;margin-left: 20px;background: -webkit-linear-gradient(#ff7d5f, #f65352);background: -o-linear-gradient(#ff7d5f, #f65352);background: -moz-linear-gradient(#ff7d5f, #f65352);background: linear-gradient(#ff7d5f, #f65352);} */

.setUp ul>li input {
  width: 190px;
  height: 40px;
  border: 1px solid #aaaaaa;
  border-radius: 4px;
  margin-left: 20px;
  outline: 0;
  padding: 0 10px;
}

.submitList {
  width: 210px;
  height: 40px;
  border: 1px solid #e03b3a;
  border-radius: 5px;
  background: -webkit-linear-gradient(#ff7d5f, #f65352);
  background: -o-linear-gradient(#ff7d5f, #f65352);
  background: -moz-linear-gradient(#ff7d5f, #f65352);
  background: linear-gradient(#ff7d5f, #f65352);
  font-size: 20px;
  line-height: 40px;
  color: #fff;
  text-align: center;
  cursor: pointer;
}

.listBox {
  width: 100%;
  background: #fff;
  padding-bottom: 40px;
}

.list {
  overflow: hidden;
  width: 1286px;
  margin: 0 auto;
  box-sizing: border-box;
  background: #fff;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 30px;
}

.list>.submitList {
  margin-top: 30px;
}

.list>table .submitList {
  width: 160px;
  height: 36px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 36px;
}

table {
  width: 100%;
  margin-top: 30px;
}

table th {
  height: 53px;
  text-align: center;
  color: #666;
  background: #f7f7f7;
}

table tr {
  height: 53px;
}

table th,
table td {
  word-break: break-all;
  word-wrap: break-word;
}

table td {
  text-align: center;
}

table td span {
  word-break: break-all;
  word-wrap: break-word;
}
.clearfix {
  margin-bottom: 20px;
}
</style>
<template>
<div id="set">
  <div class="setUp">
    <form>
      <div>
        <ul class="clearfix">
          <li>最大中奖号码：<input type="text" name="max" placeholder="请输入最大中奖号码" ref='max'></li>
        </ul>
        <ul class="clearfix">
          <li>奖项名：<input type="text" name="level" id="" placeholder="请输入奖项名" ref='level'></li>
          <li>奖品名称：<input type="text" name="prizeName" placeholder="请输入奖品名称" ref='prizeName'></li>
          <li>奖品图片url：<input type="text" name="prizePicUrl" placeholder="请输入奖品图片url" ref='prizePicUrl'></li>
        </ul>
        <ul class="clearfix">
          <li>奖项中奖人数：<input type="text" name="lmax" placeholder="请输入奖项中奖人数" ref='lmax'></li>
          <li>每次抽取人数：<input type="text" name="num" placeholder="请输入每次抽取的人数" ref='num'></li>
        </ul>
      </div>
      <div class="submitList" @click="submitForm">新增奖项</div>
    </form>
  </div>

  <div class="listBox">
    <div class="list">
      <input type="file" @change="importFile(this)" id="imFile" style="display: none"
      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
      <a id="downlink"></a>
      <!-- <button class="submitList">导出中奖列表</button> -->
      <el-button class="submitList" @click="downloadFile(excelData)">导出中奖列表</el-button>

      <table border="1 solids #aaa" cellpadding="0" cellspacing="0">
        <tr>
          <th>奖项</th>
          <th>配置信息</th>
          <th width="600">中奖号码</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in priceName">
          <td>{{item.level}}</td>
          <td>
            <p>最大中奖号码: {{item.max}}</p>
            <p>奖项中奖人数: {{item.lmax}}</p>
            <p>每次抽取人数: {{item.num}}</p>
            <p>奖品名: {{item.prizeName}}</p>
          </td>
          <td width="600">
            <ul v-if="luckUser">
              <li v-for="batch of luckUser[item.level]">
                第{{batch.batch}}批: {{(batch.lotteryData||[]).join(',')}}
                <a href="javascript:;" @click="deleteBatch(batch)">删除</a>
              </li>
            </ul>
          </td>
          <td>
            <div class="submitList" @click="drawTrue(item)">抽奖</div>
            <div class="submitList" @click="deletePrize(item)">删除奖项</div>
          </td>
        </tr>
      </table>
    </div>
  </div>


</div>
</template>
<script>
var XLSX = require('xlsx')
import md5 from 'js-md5'
import 'whatwg-fetch'
import {
  mapState
} from 'vuex'

const privateKey = 'hello2018';

const signature = function(params, t) {
  let keys = Object.keys(params)
  keys.sort()
  let str = keys.map(key => `${key}=${encodeURIComponent(params[key])}`).join('&')
  str += t + privateKey
  return md5(str)
};

export default {
  data() {
    return {
      priceName: [],
      luckUser: null,
      fullscreenLoading: false, // 加载中
      outFile: '',  // 导出文件el
      excelData: []// 测试数据
    }
  },
  computed: mapState({

  }),
  components: {
    // activitySlider
  },
  methods: {
    submitForm() {
      let level = this.$refs.level.value;
      let max = this.$refs.max.value;
      let num = this.$refs.num.value;
      let lmax = this.$refs.lmax.value;
      let prizeName = this.$refs.prizeName.value;
      let prizePicUrl = this.$refs.prizePicUrl.value;

      var t = new Date().getTime();

      let params = {
        'level': level,
        'max': max,
        'num': num,
        'lmax': lmax,
        'prizeName': prizeName,
        'prizePicUrl': prizePicUrl,
        'drawLuck': false
      };

      var self = this;

      fetch('http://itougu.jrj.com.cn/act/crud/luckMeetingType?where=' + JSON.stringify({
        level: level
      }) + '&t=' + t + '&sign=' + signature(params, t) + '', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'content-type': 'application/json'
        }
      }).then((res) => {
        return res.json()
      }).then(data => {
        if (data.length === 0) {
          return fetch('http://itougu.jrj.com.cn/act/crud/luckMeetingType?t=' + t + '&sign=' + signature(params, t) + '', {
            method: 'POST',
            mode: 'cors',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(params)
          }).then((res) => {
            self.getFormList();
          })
        } else {
          return fetch('http://itougu.jrj.com.cn/act/crud/luckMeetingType/' + data[0]._id + '?t=' + t + '&sign=' + signature(params, t) + '', {
            method: 'PUT',
            mode: 'cors',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(params)
          }).then((res) => {
            self.getFormList();
          })
        }
      })
    },
    deletePrize(item) {
      let r = window.confirm('确定要删除奖项?')
      if(!r) return;
      let params = {}
      var t = new Date().getTime();
      fetch('http://itougu.jrj.com.cn/act/crud/luckMeetingType/' + item._id + '?t=' + t + '&sign=' + signature(params, t) + '', {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(params)
      }).then((res) => {
        return fetch('http://itougu.jrj.com.cn/act/crud/lotteryData/' + item._id + '?where=' + JSON.stringify({
          level: item.level
        }) + '&t=' + t + '&sign=' + signature(params, t) + '', {
          method: 'DELETE',
          mode: 'cors',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(params)
        })
      }).then(() => {
        return this.getFormList()
      }).then(() => {
        this.getLuckUser();
      })
    },
    deleteBatch(item) {
      let r = window.confirm('确定要删除本批次抽奖结果?')
      if(!r) return;
      let params = {}
      var t = new Date().getTime();
      fetch('http://itougu.jrj.com.cn/act/crud/lotteryData/' + item._id + '?t=' + t + '&sign=' + signature(params, t) + '', {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(params)
      }).then((res) => {
        this.getFormList().then(() => {
          this.getLuckUser();
        });
      })
    },
    getFormList() {
      var self = this;
      return fetch('http://itougu.jrj.com.cn/act/crud/luckMeetingType?limit=40', {
        method: 'GET'
      }).then((res) => {
        return res.json().then(function(data) {
          self.priceName = data;
        });
      })
    },
    getLuckUser() {
      var self = this;
      fetch('http://itougu.jrj.com.cn/act/crud/lotteryData?limit=40', {
        method: 'GET'
      }).then((res) => {
        res.json().then(function(data) {
          console.log(data)
          self.excelData = data;
          self.luckUser = {}
          for (let item of data) {
            self.luckUser[item.level] = self.luckUser[item.level] || []
            self.luckUser[item.level].push(item)
          }
        });
      })
    },
    drawTrue(item) {
      let params = {
        'drawLuck': true
      };
      var t = new Date().getTime();

      fetch('http://itougu.jrj.com.cn/act/crud/luckMeetingType/' + item._id + '?t=' + t + '&sign=' + signature(params, t) + '', {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(params)
      }).then((res) => {
        res.json().then(function(data) {
          console.log(data);
        });

      })
    },
    downloadFile: function (rs) { // 点击导出按钮
      let data = [{}]
      for (let k in rs[0]) {
        data[0][k] = k
      }
      data = data.concat(rs)
      this.downloadExl(data, '2018年金融界年度颁奖盛典中奖名单')
    },
    downloadExl: function (json, downName, type) {  // 导出到excel
    let keyMap = [] // 获取键
    for (let k in json[0]) {
      keyMap.push(k)
    }
    console.info('keyMap', keyMap, json)
    let tmpdata = [] // 用来保存转换好的json
    json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
      v: v[k],
      position: (j > 25 ? this.getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
    }))).reduce((prev, next) => prev.concat(next)).forEach(function (v) {
      tmpdata[v.position] = {
        v: v.v
      }
    })
    let outputPos = Object.keys(tmpdata)  // 设置区域,比如表格从A1到D10
    let tmpWB = {
      SheetNames: ['mySheet'], // 保存的表标题
      Sheets: {
        'mySheet': Object.assign({},
          tmpdata, // 内容
          {
            '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] // 设置填充区域
          })
      }
    }
    let tmpDown = new Blob([this.s2ab(XLSX.write(tmpWB,
      {bookType: (type === undefined ? 'xlsx' : type), bookSST: false, type: 'binary'} // 这里的数据是用来定义导出的格式类型
      ))], {
      type: ''
    })  // 创建二进制对象写入转换好的字节流
    var href = URL.createObjectURL(tmpDown)  // 创建对象超链接
    this.outFile.download = downName + '.xlsx'  // 下载名称
    this.outFile.href = href  // 绑定a标签
    this.outFile.click()  // 模拟点击实现下载
    setTimeout(function () {  // 延时释放
      URL.revokeObjectURL(tmpDown) // 用URL.revokeObjectURL()来释放这个object URL
    }, 100)
    },
    analyzeData: function (data) {  // 此处可以解析导入数据
      return data
    },
    dealFile: function (data) {   // 处理导入的数据
      console.log(data)
      this.imFile.value = ''
      this.fullscreenLoading = false
      if (data.length <= 0) {
        this.errorDialog = true
        this.errorMsg = '请导入正确信息'
      } else {
        this.excelData = data
      }
    },
    s2ab: function (s) { // 字符串转字符流
      var buf = new ArrayBuffer(s.length)
      var view = new Uint8Array(buf)
      for (var i = 0; i !== s.length; ++i) {
        view[i] = s.charCodeAt(i) & 0xFF
      }
      return buf
    },
    getCharCol: function (n) { // 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
      let s = ''
      let m = 0
      while (n > 0) {
        m = n % 26 + 1
        s = String.fromCharCode(m + 64) + s
        n = (n - m) / 26
      }
      return s
    },
    fixdata: function (data) {  // 文件流转BinaryString
      var o = ''
      var l = 0
      var w = 10240
      for (; l < data.byteLength / w; ++l) {
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)))
      }
      o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)))
      return o
    }

  },
  mounted() {
    document.title = '年会抽奖后台设置页'
    this.outFile = document.getElementById('downlink')
    this.getFormList().then(() => {
      this.getLuckUser();
    });
  }
}
</script>
