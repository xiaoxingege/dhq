<template>
  <transition name='fade'>
    <div v-if="show" class="scrollTop">
      <a href="javascript:;" @click="backTop">返回顶部</a>
    </div>
  </transition>
</template>
<script>
  export default {
    name:'返回顶部',
    props:['id','show'],
    methods:{
      backTop(){
        let ids = document.getElementById(this.id)
        let back = setInterval(() => {
          ids.scrollTop -= Math.ceil(ids.scrollTop/60)
          if(ids.scrollTop===0) {
            clearInterval(back)
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
.scrollTop {
  font-size: 14px;
  color: #fff;
  position: absolute;
  bottom: 20px;
  right: 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

</style>
