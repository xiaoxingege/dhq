<style scoped>
    @import '../../assets/css/base.css';
    .tougu-workspace-wrapper { }
</style>

<template>
    <div class="tougu-workspace-wrapper">
        <div class="tougu-workspace-wrapper-inner">
            <TouguWorkspaceHeader></TouguWorkspaceHeader>
            <TouguWorkspaceNav></TouguWorkspaceNav>
            <TouguWorkspaceStrategy></TouguWorkspaceStrategy>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    import TouguWorkspaceHeader from './tougu-workspace-header.vue'
    import TouguWorkspaceNav from './tougu-workspace-nav.vue'
    import TouguWorkspaceStrategy from './tougu-workspace-strategy.vue'
    import getQueryString from '../../utils/getQueryString.js'
    import getCookie from '../../utils/getCookie.js'


    export default {
        data(){
            return {

            }
        },
        computed: mapState({
            selectTabIndex: state => {
                return state.touguWorkspaceStore.selectTabIndex
            }
        }),
        components:{
            TouguWorkspaceHeader,
            TouguWorkspaceNav,
            TouguWorkspaceStrategy
        },
        methods:{

        },
        mounted(){
            this.$store.dispatch('touguWorkspaceStore/getStudioInfo', {
                roomId: getQueryString('tgid'),
                userId: getCookie('itg_passport_userid')
            })
        }
    }
</script>
