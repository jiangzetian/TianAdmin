import base from "../base";
import axios from '../http'

function signUp(data){
    return axios({
        method:'POST',
        url:`${base.baseurl}/api/login/signup`,
        data:data,
    })
}

function signOut(data){
    return axios({
        method:'POST',
        url:`${base.baseurl}/api/login/signout`,
        data:data,
    })
}

export {signUp,signOut};