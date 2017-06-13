<style>
    .demo-wrapper{ height:100%;}
    .demo-wrapper-inner {}
    .demo-detail{ text-align:center; font-size:1rem}
</style>

<template>
    <div class="demo-wrapper">
        <div class="demo-wrapper-inner">
            <div class="demo-detail">{{message}}</div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'

    let iscroll;
    
    export default {
        data(){
            return {
                message:'Hello world'
            }
        },
        methods:{
            
        },
        mounted(){
            document.title = 'vue-demo';

            iscroll = new IScroll('.demo-wrapper',{click: true,disableTouch:false,disableMouse:false,disablePointer:true}); 
            document.addEventListener('touchmove', function(e) {e.preventDefault();}, false);
        }
    }
</script>