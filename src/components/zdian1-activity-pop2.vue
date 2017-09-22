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
    width: 443px;
    height: 382px;
    background: url("../assets/images/zdian1-activity/web-pop1-bg.png") 0 0 no-repeat;
    position: fixed;
    top: 50%;
    margin-top: -191px;
    left: 50%;
    margin-left: -221.5px;
    z-index: 12;
}
.pop-top {
    padding-top: 48px;
    width: 350px;
    height: 230px;
    margin-left: 50px;
    text-align: center;
}
.pop .close {
    width: 209px;
    height: 56px;
    float: left;
    margin-left: 117px;
}
</style>

<template>
<div>
    <div class='fixBg'></div>
    <div class="pop">
        <div class="pop-top">
            <slot></slot>
        </div>
        <a href="javascript:;" class="close" @click="close"></a>
        <!-- <h3>{{title}}</h3>
        <i @click="onCloseClicked"></i>
        <div class="course-pop">
            <p v-html="content"></p>
            <button type="button" name="button" @click="submit()">提交审核</button>
        </div> -->
    </div>
</div>
</template>
<script>
import {
    mapState
} from 'vuex'
export default {
  data () {
    return {}
  },
  computed: mapState({
        // type: state => {
        //     return state.reservation.type
        // }
  }),
  components: {},
  methods: {
    close () {
      this.$emit('pop2Close')
    }
  },
  mounted () {}
}
</script>
