import axios from "@/request/http";
import base from "@/request/base";

//联系方式接口
const linksAPI = {
    index(params){
        return axios({
            method:'GET',
            url:`${base.baseurl}/api/links/index`,
            params:params,
        })
    },
    list(params){
        return axios({
            method:'GET',
            url:`${base.baseurl}/api/links/page`,
            params:params,
        })
    },
    create(data){
        return axios({
            method:'POST',
            url:`${base.baseurl}/api/links/create`,
            data:data,
        })
    },
    update(data){
        return axios({
            method:'PUT',
            url:`${base.baseurl}/api/links/update`,
            data:data,
        })
    },
    del(data){
        return axios({
            method:'DELETE',
            url:`${base.baseurl}/api/links/delete`,
            data:data,
        })
    },
};

export {linksAPI};
