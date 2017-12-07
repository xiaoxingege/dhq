<template>
    <div class="star">
        <span v-for="index in total" :class="index <= value ? 'icon '+iconType.full : 'icon '+iconType.empty" :style="{cursor:readonly ? 'default':'pointer'}" @click='changeValue(index)'></span>
    </div>
</template>
<script>
export default {
    props:{
        total:{
            default:5,
            type: Number
        },
        value:Number,
        readonly:{
            default:false,
            type: Boolean
        },
        type:{
            default:'star',
            type:String
        }
    },
    data() {
        return {
            types:{
                'star':{
                    'full':'icon-star-full',
                    'empty':'icon-star-empty'
                }
            }
        }
    },
    computed:{
        iconType: function(){ 
            return this.types[this.type]||this.types['star']
        }
    },
    methods:{
        changeValue(index){
            this.value = index;
            this.$emit('valueChange',this.value);
        }
    }
}
</script>
<style lang="scss" scoped>
.star{
    display:inline-block;
}
.star .icon{
    display:inline-block;
    width:14px;
    height:14px;
}
.star .icon-star-full{
    background:url("../assets/images/z3img/star.png") center center no-repeat;
}
.star .icon-star-empty{
    background:url("../assets/images/z3img/star-gray.png") center center no-repeat;
}
</style>