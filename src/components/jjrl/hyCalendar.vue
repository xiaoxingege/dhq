<template>
<div class="hyAll">
    <div class="hyList" >
        <hyList @hyCalenderDetail="hyCalenderDetail"></hyList>
    </div>

<!--     <div class="hyDetail">
        <hyNews></hyNews>
    </div> -->
  </div>
</div>
</template>
<script>
import { mapState } from 'vuex'
// import hyNews from 'components/dhq-news-detail'
import hyList from 'components/jjrl/hy-list'
export default {
      components: {
  //  hyNews,
    hyList
  },
    data(){
        return {
            hyurl:''
        }
    },
    computed: { 
    ...mapState({
        storeData:state => state.jjrl.dateAndCode,
        setHyList:state => state.jjrl.setHyList
    })

    },
    methods:{
    hyCalenderDetail(item){
        this.hyurl=item.link
    }
    },
    mounted () {
        
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
.hyAll {
    width: 100%;
    height: 100%;
}

.hyList {
    width: 32.41%;
    height: 100%;
    overflow: auto;
    background-color: #191c1e;
    border-right: 1px solid $bgNavColor;
}
</style>
