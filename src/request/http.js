import axios from 'axios';
import router from "../router";
import {Loading,Message} from 'element-ui';

let options = {
    lock: true,
    text: '加载中',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
};

let  instance = axios.create({
    timeout:1000*10//设置超时时间
});

// instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use(config =>{
        Loading.service(options);
        if (sessionStorage.getItem("token")) {
            config.headers.Authorization = sessionStorage.getItem("token");
        }
        return config;
    },error => {
        Loading.service(options);
        return error;
    }
);

instance.interceptors.response.use(response=>{
        Loading.service(options).close();
        if (response.status === 200){
            switch (response.data.code) {
                case 200:
                    return Promise.resolve(response.data);
                case 401:
                    router.push({path:'/login'});
                    sessionStorage.clear();
                    Message.error('检测到您还未登录哦~');
                    return Promise.reject(response.data);
            }
        }else {
            Message.error('网络开了个小差~');
            return Promise.reject(response.data)
        }
    }, error=>{
        Loading.service(options).close();
        return Promise.reject(error)
    }
);

export default instance