<style scoped>
    @import '../../assets/css/base.css';
    .tougu-workspace-wrapper { }
</style>

<template>
    <div class="tougu-workspace-wrapper">
        <div class="tougu-workspace-wrapper-inner">
            <TouguWorkspaceHeader></TouguWorkspaceHeader>
            <TouguWorkspaceNav></TouguWorkspaceNav>
            <TouguWorkspaceLive v-if="selectTabIndex === 1"></TouguWorkspaceLive>
            <TouguWorkspaceStrategy v-if="selectTabIndex === 2"></TouguWorkspaceStrategy>
            <TouguWorkspaceTraining v-if="selectTabIndex === 4"></TouguWorkspaceTraining>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    import TouguWorkspaceHeader from './tougu-workspace-header.vue'
    import TouguWorkspaceNav from './tougu-workspace-nav.vue'
    import TouguWorkspaceStrategy from './tougu-workspace-strategy.vue'
    import TouguWorkspaceTraining from './tougu-training.vue'
    import TouguWorkspaceLive from './tougu-workspace-live.vue'
    // import getQueryString from '../../utils/getQueryString.js'
    // import getCookie from '../../utils/getCookie.js'


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
            TouguWorkspaceStrategy,
            TouguWorkspaceTraining,
            TouguWorkspaceLive
        },
        methods:{

        },
        mounted(){

        }
    }
</script>
