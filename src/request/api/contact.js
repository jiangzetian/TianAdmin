import axios from "@/request/http";
import base from "@/request/base";

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

export default contactAPI;
