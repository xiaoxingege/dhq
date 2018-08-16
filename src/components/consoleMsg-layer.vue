<style lang="scss" scoped='scoped'>
    .msg-container {
        position : absolute;
        right : 0;
        top : 0;
        background : #fff;
        color : #000;
        padding : 10px;
    }
</style>
<template>
    <div class="msg-container" v-if='show'>
        {{ msg }}
        <button @click='alertCon' style="postion:absolute; left:0; top:0; z-index:10000;">console</button>
    </div>
    
</template>
<script>
    export default {
        data(){
            return {
                msg : 'console.log(xxxx)',
                show : false
            }
        },
        props:{

        },
        methods:{
            alertCon() {
                console.log('woshiconsole')
            }
        },
        watch : {
           show(next) {
              if(next === true) {
                    window.console = this.print 
              }else {
                   window.console = window.console
              }
           }
        },
        created() {
          document.onkeydown = (e) => {
              if(e.keyCode === 113) {
                  // 按f2触发显示隐藏
                  let show = this.show
                  this.show = !show
              }
          }
          this.print = {
              log : function(params) {
                  let paramsType = typeof params
                 switch(paramsType) {
                     case 'string': {
                        this.msg = params
                        break
                     }
                     case 'object':{
                        this.msg = JSON.stringify(params)
                        break
                     }
                     default : {
                        this.msg = params
                     }
                 }
              },
              error :function() {

              },
              warn : function() {

              }
          }
          
        },
        mounted(){
            console.log(window.console)
        }
    }
</script>