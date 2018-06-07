import $ from 'jquery'

export default {
    namespaced: true,
    state: {
        roomData:{},
        selectTabIndex: 1
    },
    mutations: {
        setRoomData(state, data){
            state.roomData = data
        },
        setSelectedTabIndex(state, data){
            state.selectTabIndex = data
        }
    },
    actions: {
        getStudioInfo({ commit, state }, data){
            $.ajax({
                type: 'get',
//                url: `http://mapi.itougu.jrj.com.cn/wireless/xlive/getStudioInfo?rid=${data.roomId}&userId=${data.userId}`,
                url: '/mock/getStudioInfo.json',
                dataType: 'json',
                success:function(data){
                    if(data.retCode){
                        // 如果有code 则出现异常
                    }else{
                        commit('setRoomData', data)
                    }
                }
            })
        }
    }
}