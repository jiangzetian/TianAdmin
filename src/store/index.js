import Vue from 'vue';
import Vuex from 'vuex';
import loading from './modul/loading';
import userInfo from './modul/userInfo';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        loading,
        userInfo
    }
});


export default store
