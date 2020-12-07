import Vue from 'vue';
import Vuex from 'vuex';
import loading from './modul/loading';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        loading
    }
});


export default store
