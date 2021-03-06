import axios from "@/request/http";
import base from "@/request/base";

const categoryAPI = {
    index(params){
        return axios({
            method:'GET',
            url:`${base.baseurl}/api/category/index`,
            params:params,
        })
    },
    list(params){
        return axios({
            method:'GET',
            url:`${base.baseurl}/api/category/page`,
            params:params,
        })
    },
    create(data){
        return axios({
            method:'POST',
            url:`${base.baseurl}/api/category/create`,
            data:data,
        })
    },
    update(data){
        return axios({
            method:'PUT',
            url:`${base.baseurl}/api/category/update`,
            data:data,
        })
    },
    del(data){
        return axios({
            method:'DELETE',
            url:`${base.baseurl}/api/category/delete`,
            data:data,
        })
    },
};

const articleAPI ={
    list(params){
        return axios({
            method:'GET',
            url:`${base.baseurl}/api/article/page`,
            params:params,
        })
    },
    detail(params){
        return axios({
            method:'GET',
            url:`${base.baseurl}/api/article/detail`,
            params:params,
        })
    },
    create(data){
        return axios({
            method:'POST',
            url:`${base.baseurl}/api/article/create`,
            data:data,
        })
    },
    update(data){
        return axios({
            method:'POST',
            url:`${base.baseurl}/api/article/update`,
            data:data,
        })
    },
    del(data){
        return axios({
            method:'DELETE',
            url:`${base.baseurl}/api/article/delete`,
            data:data,
        })
    },
};

export {categoryAPI,articleAPI};
