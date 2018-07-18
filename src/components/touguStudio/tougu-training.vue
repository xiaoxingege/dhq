<style scoped>
    .tougu-training { width:96%;bottom:0;margin: 0px 2%;display: flex;flex-direction: row;height: 100%;}
    .video-mask { position:absolute; top:0; left:0; background:rgba(29,30,34,1);opacity:0.6; width:100%; height:100%;}
    .video-mask-play-icon { position:absolute; top:50%; left:50%; width:98px; height:98px; background:url('../../assets/images/touguStudio/play-icon.png'); background-size:100% 100%; margin-left:-49px; margin-top:-49px;}
    .video-player { width:77.8%;height:100%;position: relative;}
    .video-player > video {width:100%;height: 100%;}
    .video-list { width:22.2%; overflow:scroll; padding-left:5px; box-sizing:border-box;overflow-x:hidden}
    .video-list-logo { width:100%; height:90px; background:url('../../assets/images/touguStudio/tougu-training-logo.png'); background-size:100% 100% }
    .video-list-item { width:100%; box-sizing:border-box; background:#30353B; padding:20px 10px; border-bottom: 1px solid #23272C; color:#fff; font-size:16px; cursor:pointer;font-family:MicrosoftYaHei;}
    .video-list-item:hover { background:rgba(41,46,51,1) !important}
    .itemselected{color: rgba(25,132,234,1);}
</style>

<template>
    <div class="tougu-training">
        <div class="video-player">
            <video id="videoPlayer" :src="videoList[playingVideoIndex].url" controls></video>
            <div class="video-mask" v-if="videoPlayStatus"></div>
            <div class="video-mask-play-icon" v-if="videoPlayStatus" @click="playVideo"></div>
        </div>
        <div class="video-list">
            <div class="video-list-logo"></div>
            <div class="video-list-item" :class="playingVideoIndex==index?'itemselected': ''"  @click="setPlayingIndex(index)" v-for="(item, index) in videoList">{{item.title}}</div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        data(){
            return {

            }
        },
        computed: mapState({
             studioList: state => {
                return state.touguSpaceNav.roomData
             },
            videoList: state => {
                return state.touguTraining.videoList
            },
            playingVideoIndex: state => {
                return state.touguTraining.playingVideoIndex
            },
            videoPlayStatus: state => {
                return state.touguTraining.videoPlayStatus
            }
        }),
        methods:{
            playVideo(){
                this.$store.commit('touguTraining/setVideoMaskStatus', false)
                document.getElementById('videoPlayer').play()
            },
            setPlayingIndex(index){
                this.$store.commit('touguTraining/setPlayingVideoIndex', index)
            }
        },
        mounted(){
            this.$store.dispatch('touguTraining/getVideoList', {
                tgid: this.studioList.userid
            })
        }
    }
</script>