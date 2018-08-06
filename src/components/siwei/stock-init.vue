<template>
    <div class="initWait" v-if="isShow">
          <div class="initWait-wrapper">
            <slot></slot>
            <slot name='user'>
                <p class="cont">距离开盘还有<span class="minutes">{{ beginTimes }}</span>分钟，请耐心等待~</p>
            </slot>
          </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
    export default {
        data() { 
            return {
                beginTimes : null,
                times : null
            }
        },
        props: ['startTime','endTime'],
        methods : {
            timeRange(beginTime, endTime, nowTime) {
                let userBegin = beginTime;
                let userEnd = endTime;
                let strb = beginTime.split(':');
                if (strb.length !== 2) {
                    return false;
                }

                let stre = endTime.split(':');
                if (stre.length !== 2) {
                    return false;
                }

                let b = new Date();
                let e = new Date();
                let n = new Date();

                b.setHours(strb[0]);
                b.setMinutes(strb[1]);
                e.setHours(stre[0]);
                e.setMinutes(stre[1]);
                if(this.checkDateMsg === false) { // 如果非交易日
                    return false
                }
                if (n.getTime() - b.getTime() > 0 && n.getTime() - e.getTime() < 0) {
                    let timeMsg = e.getTime()-n.getTime();
                    let beginTime = Math.ceil(timeMsg/1024/60)
                    this.beginTimes = beginTime
                    this.timers && clearTimeout(this.timers)
                    this.timers = setTimeout(() => {
                        this.$forceUpdate(); // 手动触发试图更新
                        this.timeRange(userBegin, userEnd);
                    },3000)
                    return true;
                } else {
                    this.timers && clearTimeout(this.timers)
                    this.$emit('propShow',false)
                    return false;
                }
            }
        },
        computed : {
            isShow : function() {
               return this.timeRange(this.startTime,this.endTime)
            },
            ...mapState({
                checkDateMsg(){
                    return this.$store.state.stock.stockDate
                }
            })
        },
        created(){
            let nowDate = new Date()
            let timeYear = nowDate.getFullYear()
            let timeMonth = (nowDate.getMonth()+1) < 10 ? '0'+(nowDate.getMonth()+1) : (nowDate.getMonth()+1)
            let timeDay = nowDate.getDate() < 10 ? '0'+nowDate.getDate() : nowDate.getDate()
            let dateTime = timeYear+timeMonth+timeDay
            this.$store.dispatch('stock/checkTradeDate',{ date : dateTime })
            this.$emit('propShow',this.isShow)
        },
        beforeDestroy() {
            this.timers && clearTimeout(this.timers)
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .initWait {
   position:relative;
   width:100%;
   height : 100%;
   .initWait-wrapper {
     position : absolute;
     top : 50%;
     left : 0;
     width : 100%;
     transform : translateY(-50%);
     text-align: center;
     .cont {
       margin-top : 10px;
       font-family : 'Micorsoft yahei';
       text-align : center;
       color :  #808ba1;
       .minutes {
         color : #18a6f0;
         padding : 0 2px;
       }
     }
   }
}
</style>