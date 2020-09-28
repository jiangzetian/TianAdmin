import base from "../base";
import axios from '../http'

function getUsers(params){
    // return axios.get(`${base.baseurl}/users`,params);
    return axios({
        method:'GET',
        url:`${base.baseurl}/posts`,
        params:params,
    })
}

export {getUsers};