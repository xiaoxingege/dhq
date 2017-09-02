<style scoped>
@import '../assets/css/reset.css';
body{background: #fff;}
a,.blue{color:#2a8ae1;}
.foundpoollist{}
table{border-collapse: collapse;width:100%;font-size: 14px;}
table tr:nth-child(1){background: #f2f2f2; color: #666;font-size: 12px;}
table tr:nth-child(1) td{height: 30px;}
td{border-bottom:1px solid #f2f2f2;}
td,th{word-break:break-all;height: 38px;}
td div{padding:5px;}
.editbox a{padding:0 20px;line-height: 20px;border:1px solid #2a8ae1;margin:0 10px;border-radius: 2px;font-size: 12px; float:left;}
.editbox .delete{width:20px;height: 20px;background: url('../assets/images/z3img/delete.png') no-repeat center center; padding: 0}
.editbox .nodelete{width:20px;height: 20px;background: url('../assets/images/z3img/nodelete.png') no-repeat center center; padding: 0;border-color: #ccc;}
</style>
<template>
<div class="foundpoollist">
  <table>
    <tr>
      <td v-for="(item,index) in tabledata.th">
        {{item}}
      </td>
    </tr>
      <tr v-for="(item,index) in tabledata.td">
        <td v-for="(item2,index2) in item">
          <div :class="index2===0?'blue':''" >
            {{item2}}
          </div>
        </td>
        <td>
          <div class="editbox" :data-name="item[0]">
            <a href="#"  class="build" @click="showdialogfn($event,1)">创建组合</a><a href="#" class="copy" @click="showdialogfn($event,2)">复制</a><a href="#" class="delete" @click="showdialogfn($event,3)"></a><a href="#" class="nodelete" @click="showdialogfn($event,4)"></a>
        </div>
      </td>
      </tr>
  </table>
  <founddialog
    v-if="dialogShow"
    :title="popTitle"
    @close="dialogclosefn"
    @dialogokfn="dialogokfn"
    :okbtnshow="okbtnshow"
    :okbtntxt="okbtntxt"
    :closebtnshow="closebtnshow"
    :closebtntxt="closebtntxt"
    :dataname="dataname"
    :content="content"

      />
</div>
</template>
<script>
import founddialog from 'components/founddialog'

import {
  mapState
} from 'vuex'

export default {
  data () {
    return {
      tabledata: {
        th: ['名称', '基金数(只)', '创建时间', '修改时间', '组合关联', '编辑'
        ],
        td: [
          ['智能-全球配置基金池...', '5', '2017.03.03', '2017.03.03', '[白马股回测..][白马股回测..][白马股回测..]'
          ], ['智能-全球配置', '5', '2017.03.03', '2017.03.03', '[白马股回测..][白马股回测..]'
          ], ['基金池', '5', '2017.03.03', '2017.03.03', '[白马股回测..][白马股回测..][白马股回测..]'
          ]
        ]
      },
      dialogShow: false,
      popTitle: '123',
      okbtnshow: true,
      closebtnshow: false,
      okbtntxt: '',
      closebtntxt: '',
      dataname: '',
      content: ''
    }
  },
  components: {
    founddialog
  },
  computed: mapState({
  }),
  mounted () {
  },
  methods: {
    showdialogfn (v, content) {
      this.dataname = v.toElement.parentNode.getAttribute('data-name')
      this.dialogShow = true
      this.content = content
      if (content === 1) {
        this.popTitle = '创建组合'
        this.closebtnshow = false
        this.okbtntxt = '下一步'
      } else if (content === 2) {
        this.popTitle = '复制当前基金池'
        this.closebtnshow = false
        this.okbtntxt = '保存'
      } else if (content === 3) {
        this.popTitle = '删除基金池'
        this.closebtnshow = true
        this.okbtntxt = '确定'
      } else if (content === 4) {
        this.popTitle = '提示'
        this.closebtnshow = false
        this.okbtntxt = '我知道了'
      }
    },
    dialogclosefn () {
      this.dialogShow = false
    },
    dialogokfn () {
      if (this.content === 1) {
        alert('我要新建')
      } else if (this.content === 2) {
        alert('我要复制')
      } else if (this.content === 3) {
        alert('我要删除ajax')
      } else if (this.content === 4) {
        alert('我要删除')
      }
      // this.dialogShow = false
    }
  }
}
</script>
