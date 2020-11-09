import base from "../base";
import axios from '../http'

function getUsers(data){
    // return axios.get(`${base.baseurl}/users`,params);
    return axios({
        method:'POST',
        url:`${base.baseurl}/api/login/signup`,
        data:data,
    })
}

export {getUsers};