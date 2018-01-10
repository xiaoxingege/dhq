<style lang="scss" scoped>
.fixBg {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.8;
    z-index: 11;
}
.pop {
    width: 521px;
    height: 270px;
    background: url("../assets/images/zdcpQxsj-activity/zdcpQxsj-web-pop.png") 0 0 no-repeat;
    position: fixed;
    top: 50%;
    margin-top: -135px;
    left: 50%;
    margin-left: -260.5px;
    z-index: 12;
}
.pop-top {
    padding-top: 26px;
    width: 100%;
    height: 207px;
    text-align: center;
}
.pop .close {
    width: 220px;
    height: 61px;
    position: absolute;
    bottom: 39px;
    left: 151px;
}
.pop .closeClick {
    width: 50px;
    height: 50px;
    background: url("../assets/images/zdcpQxsj-activity/zdcpQxsj-web-pop-close.png") 0 0 no-repeat;
    position: absolute;
    top: -20px;
    right: -20px;
    cursor: pointer;
}
</style>

<template>
<div>
    <div class='fixBg'></div>
    <div class="pop">
        <div class="closeClick" @click="closeClick"></div>
        <div class="pop-top">
            <slot></slot>
        </div>
        <a href="javascript:;" class="close" @click="close"></a>
    </div>
</div>
</template>
<script>
import {
    mapState
} from 'vuex'
export default {
    data() {
        return {}
    },
    computed: mapState({}),
    components: {},
    methods: {
        close() {
            this.$emit('close')
        },
        closeClick() {
            this.$emit('closeClick')
        }
    },
    mounted() {}
}
</script>
