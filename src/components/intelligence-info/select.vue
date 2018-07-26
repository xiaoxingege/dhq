<template>
  <div ref="selectBox" class="select">
    <div class="select-txt" @click="handleTit(index)">{{select}}<i class="arrows"></i></div>
    <ul v-if="isShow" class="select-option">
      <li v-for="(item,index) in option">
        {{}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['index','isShow'],
  data () {
    return {
      txt:'select',
      option:[],
      isShow:false,
      entitiesState:[]
    }
  },
  mounted(){
    document.addEventListener('click', (e) => {
      if (!this.$refs.selectBox.contains(e.target)) this.entitiesState = [false]
    })
  },
  methods: {
    handleTit(i) {
      let  state = this.entitiesState
      this.$set(state,!state)
      for (let a in this.entitiesState) {
        if(a!==i){
          this.$set(state,a,false)
        }
      }
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
