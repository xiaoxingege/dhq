<template>
<div>
   
</div>
    
</template>
<script>
import { mapState } from 'vuex'
export default {
    data(){
        return {

        }
    },
    computed: { 
    ...mapState({
        storeData:state => state.jjrl.dateAndCode
      
    })

    },
    methods:{

    },
    mounted () {
        
    }
}
</script>

<style lang="scss" scoped>


</style>
