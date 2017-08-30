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
          <div class="editbox">
            <a href="#"  class="build">创建组合</a><a href="#" class="copy">复制</a><a href="#" class="delete" ></a>
        </div>
      </td>
      </tr>
  </table>
</div>
</template>
<script>
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
      modal1: false
    }
  },
  components: {
  },
  computed: mapState({
  }),
  mounted () {
  },
  methods: {
  }
}
</script>
