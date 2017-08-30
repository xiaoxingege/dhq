<style lang="scss" scoped>
    @import '../assets/css/base.css';
    .dialog{
        width:450px;
        height:240px;
        background: #4B515E;
    }
    .top{
        height:34px;
        color:#fff;
        font-size:14px;
        text-align: left;
        line-height: 34px;
        padding:0 10px;
    }
    .bottom{
        color:#fff;
        padding-right: 5px;
    }
    .bottomLeft{
        width:125px;
        font-size: 12px;
        padding:0 10px;
    }
    .bottomLeft p{
        margin:0;
    }
    .bottomLeft>div{
        margin-bottom: 7px;
    }
    .bottomRight {
        width:300px;
        height:200px;
    }
</style>
<template>
  <div class="modal">
                  <div class="modal-header">
                      <h4>{{ modalTitle }}</h4>
                  </div>
                  <div class="modal-content">
                      <div>
                          <slot name="modal-content">内容区域</slot>
                      </div>
                  </div>
                  <div class="modal-footer">
                          <input class="btn blue" type="button" v-model="okBtn" @click="okHandle" />
                          <input class="btn" type="button" v-model="cancelBtn"  @click="cancelHandle" />
                  </div>
              </div>
</template>
<script>
    export default{
      props: [ 'modalTitle' : {
                    type: String,
                    default: '标题区域'
                },
                'okBtn' : {
                    type: String,
                    default: '确认'
                },
                'cancelBtn' : {
                    type: String,
                    default: '取消'
                }],
      data () {
        return {
        }
      },
      components: {
      },
      watch: {

      },
      methods: {
        okHandle () {
          console.log('点击确定')
          this.$emit('on-ok')
        },
        cancelHandle () {
          console.log('点击取消')
          this.$emit('on-cancel')
        }
      },
      mounted () {

      }
    }

</script>
