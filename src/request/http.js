import axios from 'axios';
import router from "@/router";
import store from "@/store";
import {Message} from 'element-ui';


let  instance = axios.create({
    timeout:1000*10//设置超时时间
});

//设置公共路径 和 Content-Type
// instance.defaults.baseURL = base.baseurl;
instance.defaults.headers.common['Content-Type'] = 'application/json';

instance.interceptors.request.use(config =>{
        store.dispatch('beginLoading');
        if (store.state.userInfo.userInfo) {
            config.headers.Authorization = store.state.userInfo.userInfo.token;
            config.headers.Accept = "application/json"
        }
        return config;
    },error => {
        store.dispatch('beginLoading');
        return error;
    }
);

instance.interceptors.response.use(response=>{
        store.dispatch('endLoading');
        switch (response.data.code) {
            case 200:
                return Promise.resolve(response.data);
            case 401:
                router.replace({path:'/login'});
                Message.error(response.data.msg);
                return Promise.reject(response.data);
        }
    }, error=>{
        Message.error('网络开了个小差~');
        store.dispatch('endLoading');
        return Promise.reject(error)
    }
);

export default instance
