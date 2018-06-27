<template>
<div>
    <ul>
        <li v-for='(item,index) in setHyList.data' @click="showDetail(item,index)">
            <hyDetail :model="item" :active='cur===index'></hyDetail>
        </li>
    </ul>
   
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import hyDetail from 'components/jjrl/hy-detail'
export default {
  components: {
    hyDetail
    },
    data(){
        return {
            cur:'',
            hyList:{}
        }
    },
    computed: { 
    ...mapState({
        storeData:state => state.jjrl.dateAndCode,
        setHyList:state => state.jjrl.setHyList
      
    })

    },
    methods:{
        showDetail(item,index){
         //   console.log(index)
            this.cur===index
            this.hyList=item
            this.$emit('hyCalenderDetail',this.hyList)
        }
    },
    mounted () {
        this.$store.dispatch('jjrl/setHyList','201806').then( res => {
            this.hyList=this.setHyList.data.length?this.setHyList.data:{}
            this.$emit('hyCalenderDetail',this.hyList)
          //  console.log(this.setHyList.data)
            this.setHyList.data.forEach(ele => {
         ele.events.forEach( res => {
               let arrCode=[]
             arrCode.push(res.concepts[0])
               console.log(arrCode)
         })
              
            })
         //   let relateStockCode=this.setHyList.data
        })
    }
}
</script>

<style lang="scss" scoped>
Error: Source sample is missing.
</style>
