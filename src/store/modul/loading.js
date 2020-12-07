const loading = {
    state:{
        isLoading:false,
        showModal:true
    },
    mutations:{
        BEGIN_LOADING(state){
            state.isLoading = true
        },
        END_LOADING(state){
            setTimeout(()=>{
                state.isLoading = false
            },500)
        },
    },
    actions:{
        beginLoading({ commit }){
            commit('BEGIN_LOADING')
        },
        endLoading({ commit }){
            commit('END_LOADING')
        },
    }
};
export default loading
