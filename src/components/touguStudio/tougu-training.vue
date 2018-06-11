<style>
    .tougu-training { width:100%; position:absolute; top:153px; bottom:0; box-sizing:border-box; padding: 10px 2%; }
    .tougu-training > div { float:left;}
    .video-mask { position:absolute; top:0; left:0; background:rgba(29,30,34,0.6); width:100%; height:100%; }
    .video-mask-play-icon { position:absolute; top:50%; left:50%; width:98px; height:98px; background:url('../../assets/images/touguStudio/play-icon.png'); background-size:100% 100%; margin-left:-49px; margin-top:-49px; }
    .video-player { width:75%; height:100%; position:relative }
    .video-player > video {width:100%; height:100%; box-sizing:border-box; padding-top:10px}
    .video-list { width:25%; height:100%; overflow:auto; padding-left:5px; box-sizing:border-box}
    .video-list-logo { width:100%; height:90px; background:url('../../assets/images/touguStudio/tougu-training-logo.png'); background-size:100% 100% }
    .video-list-item { width:100%; box-sizing:border-box; background:#30353B; padding:20px 10px; border-bottom: 1px solid #23272C; color:#fff; font-size:16px; cursor:pointer}
    .video-list-item:hover { background:#292E33!important }
</style>

<template>
    <div class="tougu-training">
        <div class="video-player">
            <video id="videoPlayer" :src="playingVideoIndex !== 0 ? videoList[playingVideoIndex].url: ''" controls></video>
            <div class="video-mask" v-if="videoPlayStatus"></div>
            <div class="video-mask-play-icon" v-if="videoPlayStatus" @click="playVideo"></div>
        </div>
        <div class="video-list">
            <div class="video-list-logo"></div>
            <div class="video-list-item" @click="setPlayingIndex(index + 1)" v-for="(item, index) in videoList">{{item.title}}</div>
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
            videoList: state => {
                return state.touguWorkspaceStore.videoList
            },
            playingVideoIndex: state => {
                return state.touguWorkspaceStore.playingVideoIndex
            },
            videoPlayStatus: state => {
                return state.touguWorkspaceStore.videoPlayStatus
            }
        }),
        methods:{
            playVideo(){
                this.$store.commit('touguWorkspaceStore/setVideoMaskStatus', false)
                document.getElementById('videoPlayer').play()
            },
            setPlayingIndex(index){
                this.$store.commit('touguWorkspaceStore/setPlayingVideoIndex', index)
            }
        },
        mounted(){
            this.$store.dispatch('touguWorkspaceStore/getVideoList', {
                tgid: ''
            })
        }
    }
</script>