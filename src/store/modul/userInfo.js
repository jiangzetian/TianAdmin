const userInfo = {
    state:{
        userInfo:JSON.parse(sessionStorage.getItem('userInfo')) || {},
    },
    mutations:{
        SET_USER_INFO(state,info){
            sessionStorage.setItem("userInfo",JSON.stringify(info));
            state.userInfo = info;
        },
        CLEAR_USER_INFO(state){
            sessionStorage.clear();
            state.userInfo = {};
        }
    },
    actions:{
        setUserInfo({commit},{info}){
            commit('SET_USER_INFO',info);
        },
        clearUserInfo({commit}){
            commit('CLEAR_USER_INFO');
        },
    }
};

export default userInfo
