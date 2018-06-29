<template>
<div class="hyAll">
    <div class="hyList" >
        <hyList @hyCalenderDetail="hyCalenderDetail" ></hyList>
    </div>

    <div class="hyDetail" ref="hydetail">
        <hyNews  :newsUrl="saveHyUrl"></hyNews>
    </div> 
  </div>

</template>
<script>
import { mapState } from 'vuex'
import hyNews from 'components/dhq-news-detail'
import hyList from 'components/jjrl/hy-list'
export default {
      components: {
    hyNews,
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
        setHyList:state => state.jjrl.setHyList,
        saveHyUrl:state => state.jjrl.saveHyUrl
    })

    },
    methods:{
    hyCalenderDetail(item){
   //  debugger
        
       // this.hyurl=item.events[0].link
    }
    },
    watch: {
    hyurl() {
      this.$refs.hydetail.scrollTop = 0;
    }
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
    float: left;
}
.hyDetail{
    float: left;
    width: 67.5%;
    overflow: auto;
    height: 100%;
}
</style>
