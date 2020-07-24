import axios from 'axios';

var  instance = axios.create({
    timeout:1000*10//设置超时时间
})

instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use(config =>{
        // console.log(config);
        return config;
    },error => {
        // console.log(error);
    }
);

instance.interceptors.response.use(response=>{
        // console.log(response);
        if (response.status === 200){
            return Promise.resolve(response);
        }else {
            alert('数据获取失败！')
        }
    }, error=>{
        console.log(error);
    }
);

export default instance