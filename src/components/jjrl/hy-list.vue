<template>
<div>
    <ul>
        <li>
            <hyDetail></hyDetail>
        </li>
    </ul>
   
</div>
    
</template>
<script>
import { mapState } from 'vuex'
import  hyDetail from 'components/jjrl/hy-detail'
export default {
    components:{
    hyDetail
    },
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
