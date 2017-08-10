<style lang="scss" scoped>
    @import '../assets/css/base.css';
    .dialog{
        width:754px;
        height:198px;
        border:1px solid #8C8C8C;
        z-index: 99;
        background:#fff;
        font-size:12px;
        color:#000;
        position: absolute;
    }
    .header{
        height:28px;
        line-height: 28px;
        text-align: left;
        background: #F2F2F2;
        border:1px solid #CCCCCC;
        padding-left: 10px;
    }
    button{
        width:70px;
        height:30px;
        line-height: 30px;
        text-align: center;
        border-radius: 3px;
        border:none;
        cursor: pointer;
    }
    .sureBtn{
        background:#0088E1;
        color:#fff;
    }
    .cancleBtn{
        background: #fff;
        border:1px solid #CCCCCC;
        color:#CCCCCC;
    }
    select{
        width:106px;
        border-radius: 3px;
        margin-left: 5px;
        color:#ccc;
        border-color:#ccc;
    }
    .dialogMain{
        padding:0 45px;
        text-align: center;
        height:108px;
    }
    .dialogMain>span{
        float: left;
    }
    .closed{
        display: inline-block;
        width: 30px;
        line-height: 25px;
        text-align: center;
        cursor: pointer;
        font-size: 27px;
        color:#999;
    }

</style>
<template>
    <div class="dialog">
        <div class="header clearfix">{{title}}<span class="fr closed" @click="hideDialog">×</span></div>

        <slot></slot>

        <div class="footer">
            <button class="sureBtn">确定</button>
            <button class="cancleBtn" @click="hideDialog">取消</button>
        </div>
    </div>
</template>
<script>
    export default{
      props: ['title'],
      data () {
        return {

        }
      },
      methods: {
        hideDialog () {
          this.$emit('hideDialogToFather', false)
        }
      },
      mounted () {
    
      }
    }
</script>
