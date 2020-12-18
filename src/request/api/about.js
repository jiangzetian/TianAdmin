import axios from "@/request/http";
import base from "@/request/base";

//联系方式接口
const contactAPI = {
    index(params){
        return axios({
            method:'GET',
            url:`${base.baseurl}/api/contact/index`,
            params:params,
        })
    },
    list(params){
        return axios({
            method:'GET',
            url:`${base.baseurl}/api/contact/page`,
            params:params,
        })
    },
    create(data){
        return axios({
            method:'POST',
            url:`${base.baseurl}/api/contact/create`,
            data:data,
        })
    },
    update(data){
        return axios({
            method:'PUT',
            url:`${base.baseurl}/api/contact/update`,
            data:data,
        })
    },
    del(data){
        return axios({
            method:'DELETE',
            url:`${base.baseurl}/api/contact/delete`,
            data:data,
        })
    },
};

//雷达图接口
const radarAPI = {
    index(params){
        return axios({
            method:'GET',
            url:`${base.baseurl}/api/charts/index`,
            params:params,
        })
    },
    update(data){
        return axios({
            method:'PUT',
            url:`${base.baseurl}/api/charts/update`,
            data:data,
        })
    },
};

export {contactAPI,radarAPI};
