import axios from "../http";
import base from "../base";

function list(params){
    return axios({
        method:'GET',
        url:`${base.baseurl}/api/category`,
        params:params,
    })
}

function create(data){
    return axios({
        method:'POST',
        url:`${base.baseurl}/api/category/create`,
        data:data,
    })
}

function update(data){
    return axios({
        method:'PUT',
        url:`${base.baseurl}/api/category/update`,
        data:data,
    })
}

function del(data){
    return axios({
        method:'DELETE',
        url:`${base.baseurl}/api/category/delete`,
        data:data,
    })
}

export {list,create,update,del};